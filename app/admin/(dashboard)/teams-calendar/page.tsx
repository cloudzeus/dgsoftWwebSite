"use client";

import { useState, useEffect, useCallback, Fragment } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Video,
  Loader2,
  CalendarDays,
  Plus,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const TIMEZONE = "Europe/Athens";
const WEEKDAYS_SHORT = ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"];
const WEEKDAYS_LONG = ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"];
const FIRST_WEEKDAY = 1; // Monday
const HOURS_START = 7;
const HOURS_END = 21;

type CalendarEvent = {
  id: string;
  subject: string;
  start: string;
  end: string;
  organizerDisplayName: string;
  organizerUpn: string;
  isOnlineMeeting: boolean;
  joinUrl?: string;
  webLink?: string;
  body?: string;
};

/** True if this meeting was created from the website (EU programs or book-meeting form). */
function isFromWebsite(ev: CalendarEvent): boolean {
  return (
    ev.subject.includes("Ευρωπαϊκά Προγράμματα") ||
    ev.subject.startsWith("Συνάντηση DGSMART")
  );
}

/** Parse event body (HTML with "Label: value<br/>") into rows for display. */
function parseBodyDetails(body: string | undefined): { label: string; value: string }[] {
  if (!body?.trim()) return [];
  const text = body.replace(/<br\s*\/?>/gi, "\n").replace(/<[^>]+>/g, "");
  return text
    .split("\n")
    .map((line) => {
      const colon = line.indexOf(":");
      if (colon === -1) return null;
      return {
        label: line.slice(0, colon).trim(),
        value: line.slice(colon + 1).trim(),
      };
    })
    .filter((r): r is { label: string; value: string } => !!r && r.value.length > 0);
}

type Member = {
  id: string;
  userPrincipalName: string;
  displayName: string;
  mail: string;
};

function getMonthRange(year: number, month: number): { start: string; end: string } {
  const start = new Date(year, month - 1, 1);
  const end = new Date(year, month, 0, 23, 59, 59, 999);
  return { start: start.toISOString(), end: end.toISOString() };
}

function getWeekRange(date: Date): { start: string; end: string } {
  const d = new Date(date);
  const day = d.getDay();
  const diff = day === 0 ? -6 : 1 - day; // Monday = 0
  const mon = new Date(d);
  mon.setDate(d.getDate() + diff);
  mon.setHours(0, 0, 0, 0);
  const sun = new Date(mon);
  sun.setDate(mon.getDate() + 6);
  sun.setHours(23, 59, 59, 999);
  return { start: mon.toISOString(), end: sun.toISOString() };
}

function getDaysInMonth(year: number, month: number): (Date | null)[][] {
  const first = new Date(year, month - 1, 1);
  const startWeekday = first.getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  const weeks: (Date | null)[][] = [];
  let week: (Date | null)[] = [];
  for (let i = 0; i < startWeekday; i++) week.push(null);
  for (let d = 1; d <= daysInMonth; d++) {
    week.push(new Date(year, month - 1, d));
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }
  if (week.length) {
    while (week.length < 7) week.push(null);
    weeks.push(week);
  }
  return weeks;
}

function getWeekDays(anchor: Date): Date[] {
  const d = new Date(anchor);
  const day = d.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  const mon = new Date(d);
  mon.setDate(d.getDate() + diff);
  const days: Date[] = [];
  for (let i = 0; i < 7; i++) {
    const x = new Date(mon);
    x.setDate(mon.getDate() + i);
    days.push(x);
  }
  return days;
}

function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString("el-GR", {
    timeZone: TIMEZONE,
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatDateShort(d: Date): string {
  return d.toLocaleDateString("el-GR", { day: "numeric", month: "short" });
}

function eventKey(ev: CalendarEvent): string {
  return `${ev.id}-${ev.start}`;
}

function getEventsForDay(events: CalendarEvent[], day: Date): CalendarEvent[] {
  const dayStart = new Date(day);
  dayStart.setHours(0, 0, 0, 0);
  const dayEnd = new Date(day);
  dayEnd.setHours(23, 59, 59, 999);
  const startMs = dayStart.getTime();
  const endMs = dayEnd.getTime();
  return events.filter((ev) => {
    const evStart = new Date(ev.start).getTime();
    return evStart >= startMs && evStart <= endMs;
  });
}

function getEventsForWeekDay(events: CalendarEvent[], day: Date): CalendarEvent[] {
  const dayStart = new Date(day);
  dayStart.setHours(0, 0, 0, 0);
  const dayEnd = new Date(day);
  dayEnd.setHours(23, 59, 59, 999);
  const startMs = dayStart.getTime();
  const endMs = dayEnd.getTime();
  return events.filter((ev) => {
    const evStart = new Date(ev.start).getTime();
    const evEnd = new Date(ev.end).getTime();
    return evStart < endMs && evEnd > startMs;
  });
}

const timeSlots = Array.from({ length: HOURS_END - HOURS_START + 1 }, (_, i) => HOURS_START + i);

export default function TeamsCalendarPage() {
  const [today] = useState(() => new Date());
  const [view, setView] = useState<"month" | "week">("month");
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [viewDate, setViewDate] = useState(() => new Date(today));
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [membersLoading, setMembersLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [kadsForAfm, setKadsForAfm] = useState<{
    companyName: string | null;
    code: string | null;
    kads: Array<{ firm_act_code: string; firm_act_descr: string; firm_act_kind: boolean }>;
  } | null>(null);
  const [kadsLoading, setKadsLoading] = useState(false);
  const [newMeetingOpen, setNewMeetingOpen] = useState(false);
  const [creating, setCreating] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);
  const [newMeeting, setNewMeeting] = useState({
    hostUserPrincipalName: "",
    date: today.toISOString().slice(0, 10),
    startTime: "09:00",
    endTime: "09:30",
    subject: "",
    body: "",
    attendeeEmails: "",
  });

  const fetchMembers = useCallback(async () => {
    setMembersLoading(true);
    try {
      const res = await fetch("/api/admin/teams-calendar/members");
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Failed to load members");
      setMembers(data.members ?? []);
      if (data.members?.length && !newMeeting.hostUserPrincipalName) {
        setNewMeeting((p) => ({ ...p, hostUserPrincipalName: data.members[0].userPrincipalName }));
      }
    } catch (e) {
      setMembers([]);
    } finally {
      setMembersLoading(false);
    }
  }, []);

  const fetchEvents = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const range =
        view === "month"
          ? getMonthRange(year, month)
          : getWeekRange(viewDate);
      const res = await fetch(
        `/api/admin/teams-calendar/events?start=${encodeURIComponent(range.start)}&end=${encodeURIComponent(range.end)}`
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Failed to load events");
      setEvents(data.events ?? []);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
      setEvents([]);
    } finally {
      setLoading(false);
    }
  }, [view, year, month, viewDate]);

  useEffect(() => {
    fetchMembers();
  }, [fetchMembers]);

  useEffect(() => {
    if (!selectedEvent?.body) {
      setKadsForAfm(null);
      return;
    }
    const details = parseBodyDetails(selectedEvent.body);
    const afmRow = details.find((r) => r.label === "ΑΦΜ" && r.value.trim());
    if (!afmRow) {
      setKadsForAfm(null);
      return;
    }
    setKadsLoading(true);
    setKadsForAfm(null);
    fetch(`/api/admin/teams-calendar/kads-by-afm?afm=${encodeURIComponent(afmRow.value)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.kads || data.companyName != null) setKadsForAfm(data);
        else setKadsForAfm(null);
      })
      .catch(() => setKadsForAfm(null))
      .finally(() => setKadsLoading(false));
  }, [selectedEvent?.id, selectedEvent?.body]);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const weeks = getDaysInMonth(year, month);
  const weekDays = view === "week" ? getWeekDays(viewDate) : [];
  const monthTitle = new Date(year, month - 1).toLocaleDateString("el-GR", {
    month: "long",
    year: "numeric",
  });
  const weekTitle =
    view === "week" && weekDays.length >= 2
      ? `${formatDateShort(weekDays[0])} – ${formatDateShort(weekDays[6])}`
      : monthTitle;

  const goPrev = () => {
    if (view === "month") {
      if (month === 1) {
        setMonth(12);
        setYear((y) => y - 1);
      } else setMonth((m) => m - 1);
    } else {
      const d = new Date(viewDate);
      d.setDate(d.getDate() - 7);
      setViewDate(d);
      setYear(d.getFullYear());
      setMonth(d.getMonth() + 1);
    }
  };

  const goNext = () => {
    if (view === "month") {
      if (month === 12) {
        setMonth(1);
        setYear((y) => y + 1);
      } else setMonth((m) => m + 1);
    } else {
      const d = new Date(viewDate);
      d.setDate(d.getDate() + 7);
      setViewDate(d);
      setYear(d.getFullYear());
      setMonth(d.getMonth() + 1);
    }
  };

  const goToday = () => {
    const t = new Date(today);
    setViewDate(t);
    setYear(t.getFullYear());
    setMonth(t.getMonth() + 1);
  };

  const handleCreateMeeting = async () => {
    if (!newMeeting.hostUserPrincipalName || !newMeeting.subject?.trim()) return;
    setCreateError(null);
    setCreating(true);
    try {
      const start = new Date(`${newMeeting.date}T${newMeeting.startTime}`);
      const end = new Date(`${newMeeting.date}T${newMeeting.endTime}`);
      const res = await fetch("/api/admin/teams-calendar/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          hostUserPrincipalName: newMeeting.hostUserPrincipalName,
          startTime: start.toISOString(),
          endTime: end.toISOString(),
          subject: newMeeting.subject.trim(),
          body: newMeeting.body.trim() || undefined,
          attendeeEmails: newMeeting.attendeeEmails
            .split(/[\n,;]+/)
            .map((e) => e.trim())
            .filter(Boolean),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Failed to create meeting");
      setNewMeetingOpen(false);
      setNewMeeting({
        hostUserPrincipalName: members[0]?.userPrincipalName ?? "",
        date: today.toISOString().slice(0, 10),
        startTime: "09:00",
        endTime: "09:30",
        subject: "",
        body: "",
        attendeeEmails: "",
      });
      fetchEvents();
    } catch (e) {
      setCreateError(e instanceof Error ? e.message : "Failed to create");
    } finally {
      setCreating(false);
    }
  };

  return (
    <div className="flex flex-1 flex-col gap-0 h-[calc(100vh-8rem)] min-h-[500px]">
      <div className="flex flex-1 min-h-0 gap-4">
        {/* Left sidebar - Our team (DGSMART) that handles customer requests from the website */}
        <aside className="w-56 shrink-0 flex flex-col gap-4 border-r border-border pr-4">
          <p className="text-xs text-muted-foreground">
            Η ομάδα DGSMART (dgsmart.gr) που εξυπηρετεί αιτήματα πελατών από τον ιστότοπο.
          </p>
          <Button
            className="w-full gap-2"
            onClick={() => {
              setNewMeeting((p) => ({
                ...p,
                hostUserPrincipalName: members[0]?.userPrincipalName ?? p.hostUserPrincipalName,
              }));
              setNewMeetingOpen(true);
            }}
            disabled={membersLoading || members.length === 0}
          >
            <Plus className="h-4 w-4" />
            Νέο ραντεβού
          </Button>
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2 mb-2">
              <Users className="h-3.5 w-3" />
              Υπεύθυνα email (ημερολόγια Teams)
            </h3>
            {membersLoading ? (
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Loader2 className="h-4 w-4 animate-spin" />
                Φόρτωση…
              </div>
            ) : members.length === 0 ? (
              <div className="text-sm text-muted-foreground space-y-2">
                <p>Δεν υπάρχουν ορισμένα email.</p>
                <p className="text-xs">
                  Ορίστε <code className="bg-muted px-1 rounded">TEAMS_BOOKING_EMAILS</code> στο .env (email που εξυπηρετούν αιτήματα πελατών, χωρισμένα με κόμμα), π.χ.:
                </p>
                <pre className="text-xs bg-muted p-2 rounded overflow-x-auto">
                  TEAMS_BOOKING_EMAILS=connect@dgsmart.gr,user2@dgsmart.gr
                </pre>
              </div>
            ) : (
              <ul className="space-y-1">
                {members.map((m) => (
                  <li
                    key={m.id}
                    className="text-sm flex items-center gap-2 py-1.5 px-2 rounded-md hover:bg-muted/70"
                  >
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-xs font-medium text-primary">
                      {(m.displayName || m.mail)[0].toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium truncate">{m.displayName}</p>
                      <p className="text-xs text-muted-foreground truncate">{m.mail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </aside>

        {/* Main calendar */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-muted-foreground" />
                <span className="font-semibold text-lg">Ημερολόγιο ομάδας DGSMART</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Ομάδα που εξυπηρετεί αιτήματα πελατών από τον ιστότοπο (dgsmart.gr)
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex rounded-md border border-border overflow-hidden">
                <button
                  type="button"
                  onClick={() => setView("month")}
                  className={cn(
                    "px-3 py-1.5 text-sm font-medium",
                    view === "month" ? "bg-primary text-primary-foreground" : "bg-muted/50 hover:bg-muted"
                  )}
                >
                  Μήνας
                </button>
                <button
                  type="button"
                  onClick={() => setView("week")}
                  className={cn(
                    "px-3 py-1.5 text-sm font-medium",
                    view === "week" ? "bg-primary text-primary-foreground" : "bg-muted/50 hover:bg-muted"
                  )}
                >
                  Εβδομάδα
                </button>
              </div>
              <Button variant="outline" size="icon" onClick={goPrev}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={goToday}>
                Σήμερα
              </Button>
              <Button variant="outline" size="icon" onClick={goNext}>
                <ChevronRight className="h-4 w-4" />
              </Button>
              <span className="min-w-[200px] text-center font-medium capitalize text-sm">
                {view === "week" ? weekTitle : monthTitle}
              </span>
            </div>
          </div>

          {error && (
            <p className="text-destructive text-sm mb-2">{error}</p>
          )}

          {loading ? (
            <div className="flex-1 flex items-center justify-center border border-border rounded-lg bg-muted/20">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : view === "month" ? (
            /* Month view - O365 style */
            <div className="flex-1 border border-border rounded-lg bg-card overflow-hidden flex flex-col min-h-0">
              <table className="w-full flex-1 table-fixed border-collapse">
                <thead>
                  <tr>
                    {WEEKDAYS_SHORT.map((d) => (
                      <th
                        key={d}
                        className="border-b border-border p-2 text-center text-xs font-semibold text-muted-foreground bg-muted/30"
                      >
                        {d}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {weeks.map((week, wi) => (
                    <tr key={wi} className="flex-1">
                      {week.map((day, di) => {
                        const dayEvents = day ? getEventsForDay(events, day) : [];
                        const isToday =
                          day &&
                          day.getDate() === today.getDate() &&
                          day.getMonth() === today.getMonth() &&
                          day.getFullYear() === today.getFullYear();
                        return (
                          <td
                            key={di}
                            className={cn(
                              "border-b border-r border-border align-top p-1 min-h-[80px]",
                              !day && "bg-muted/20",
                              isToday && "bg-primary/5"
                            )}
                          >
                            {day ? (
                              <>
                                <div
                                  className={cn(
                                    "text-xs font-medium mb-1",
                                    isToday ? "text-primary font-semibold" : "text-muted-foreground"
                                  )}
                                >
                                  {day.getDate()}
                                </div>
                                <div className="space-y-1">
                                  {dayEvents.slice(0, 4).map((ev) => {
                                    const fromWeb = isFromWebsite(ev);
                                    return (
                                      <button
                                        key={eventKey(ev)}
                                        type="button"
                                        onClick={() => setSelectedEvent(ev)}
                                        className={cn(
                                          "w-full text-left rounded border-l-4 px-2 py-1 text-xs flex items-center gap-1.5",
                                          fromWeb
                                            ? "border-amber-500 bg-amber-500/10 hover:bg-amber-500/20"
                                            : "border-primary bg-primary/10 hover:bg-primary/20"
                                        )}
                                      >
                                        <span className="text-muted-foreground shrink-0">
                                          {formatTime(ev.start)}
                                        </span>
                                        {ev.isOnlineMeeting && (
                                          <Video className={cn("h-3 w-3 shrink-0", fromWeb ? "text-amber-600" : "text-primary")} />
                                        )}
                                        <span className="truncate">{ev.subject}</span>
                                      </button>
                                    );
                                  })}
                                  {dayEvents.length > 4 && (
                                    <span className="text-xs text-muted-foreground px-1">
                                      +{dayEvents.length - 4} ακόμα
                                    </span>
                                  )}
                                </div>
                              </>
                            ) : null}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            /* Week view - time grid */
            <div className="flex-1 border border-border rounded-lg bg-card overflow-auto flex flex-col min-h-0">
              <div className="grid gap-px bg-border" style={{ gridTemplateColumns: `60px repeat(7, minmax(0, 1fr))` }}>
                <div className="bg-muted/30 p-2" />
                {weekDays.map((d) => {
                  const isToday =
                    d.getDate() === today.getDate() &&
                    d.getMonth() === today.getMonth() &&
                    d.getFullYear() === today.getFullYear();
                  return (
                    <div
                      key={d.toISOString()}
                      className={cn(
                        "bg-muted/30 p-2 text-center text-xs font-semibold",
                        isToday && "text-primary"
                      )}
                    >
                      <div>{WEEKDAYS_LONG[d.getDay()]}</div>
                      <div>{d.getDate()} {d.toLocaleDateString("el-GR", { month: "short" })}</div>
                    </div>
                  );
                })}
                {timeSlots.map((hour) => (
                  <Fragment key={hour}>
                    <div className="bg-muted/20 p-1 text-xs text-muted-foreground text-right pr-2">
                      {String(hour).padStart(2, "0")}:00
                    </div>
                    {weekDays.map((day) => {
                      const dayEvents = getEventsForWeekDay(events, day);
                      const hourStart = new Date(day);
                      hourStart.setHours(hour, 0, 0, 0);
                      const hourEnd = new Date(day);
                      hourEnd.setHours(hour + 1, 0, 0, 0);
                      const slotEvents = dayEvents.filter((ev) => {
                        const evStart = new Date(ev.start).getTime();
                        const evEnd = new Date(ev.end).getTime();
                        const slotStart = hourStart.getTime();
                        const slotEnd = hourEnd.getTime();
                        return evStart < slotEnd && evEnd > slotStart;
                      });
                      return (
                        <div
                          key={`${day.toISOString()}-${hour}`}
                          className="min-h-[32px] border-b border-border/50 p-0.5"
                        >
                          {slotEvents.map((ev) => {
                            const fromWeb = isFromWebsite(ev);
                            return (
                              <button
                                key={eventKey(ev)}
                                type="button"
                                onClick={() => setSelectedEvent(ev)}
                                className={cn(
                                  "w-full text-left rounded border-l-4 px-2 py-1 text-xs flex items-center gap-1 truncate",
                                  fromWeb
                                    ? "border-amber-500 bg-amber-500/10 hover:bg-amber-500/20"
                                    : "border-primary bg-primary/10 hover:bg-primary/20"
                                )}
                              >
                                {ev.isOnlineMeeting && (
                                  <Video className={cn("h-3 w-3 shrink-0", fromWeb ? "text-amber-600" : "text-primary")} />
                                )}
                                <span className="truncate">{ev.subject}</span>
                              </button>
                            );
                          })}
                        </div>
                      );
                    })}
                  </Fragment>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Event detail dialog */}
      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto">
          {selectedEvent && (
            <>
              <DialogHeader className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  {selectedEvent.isOnlineMeeting && (
                    <Video className="h-5 w-5 text-primary shrink-0" />
                  )}
                  {isFromWebsite(selectedEvent) && (
                    <span className="inline-flex items-center rounded-full bg-amber-500/20 px-2.5 py-0.5 text-xs font-medium text-amber-700 dark:text-amber-400 border border-amber-500/30">
                      Αίτημα από ιστότοπο
                    </span>
                  )}
                </div>
                <DialogTitle className="text-left pr-8 break-words">
                  {selectedEvent.subject}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-5 pt-2">
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                  <span className="text-muted-foreground">Ώρα</span>
                  <span className="font-medium">
                    {formatTime(selectedEvent.start)} – {formatTime(selectedEvent.end)}
                  </span>
                  <span className="text-muted-foreground">Διοργανωτής</span>
                  <span className="font-medium">{selectedEvent.organizerDisplayName}</span>
                </div>

                {(() => {
                  const details = parseBodyDetails(selectedEvent.body);
                  if (details.length > 0) {
                    return (
                      <div className="rounded-lg border border-border bg-muted/30 overflow-hidden">
                        <div className="bg-muted/50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Στοιχεία αιτήματος / εταιρείας
                        </div>
                        <dl className="divide-y divide-border">
                          {details.map((row, i) => (
                            <div key={i} className="grid grid-cols-[minmax(0,8rem)_1fr] gap-3 px-4 py-3 text-sm">
                              <dt className="text-muted-foreground font-medium shrink-0">{row.label}</dt>
                              <dd className="font-medium text-foreground break-words">{row.value}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    );
                  }
                  if (selectedEvent.body?.trim()) {
                    return (
                      <div className="rounded-lg border border-border bg-muted/30 p-4">
                        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                          Λεπτομέρειες
                        </div>
                        <div
                          className="text-sm prose prose-sm dark:prose-invert max-w-none break-words"
                          dangerouslySetInnerHTML={{ __html: selectedEvent.body.replace(/<br\s*\/?>/gi, "<br/>") }}
                        />
                      </div>
                    );
                  }
                  return null;
                })()}

                {(kadsLoading || (kadsForAfm && kadsForAfm.kads.length > 0)) && (
                  <div className="rounded-lg border border-border bg-muted/30 overflow-hidden">
                    <div className="bg-muted/50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                      KAD (από TRDR)
                      {kadsLoading && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
                    </div>
                    {kadsLoading ? (
                      <div className="px-4 py-3 text-sm text-muted-foreground">Φόρτωση…</div>
                    ) : kadsForAfm && kadsForAfm.kads.length > 0 ? (
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-border text-left text-muted-foreground">
                              <th className="px-4 py-2 font-medium">Κωδικός</th>
                              <th className="px-4 py-2 font-medium">Περιγραφή</th>
                              <th className="px-4 py-2 font-medium">Είδος</th>
                            </tr>
                          </thead>
                          <tbody>
                            {kadsForAfm.kads.map((k, i) => (
                              <tr key={i} className="border-b border-border/50">
                                <td className="px-4 py-2 font-mono text-xs">{k.firm_act_code}</td>
                                <td className="px-4 py-2">{k.firm_act_descr}</td>
                                <td className="px-4 py-2">{k.firm_act_kind ? "Ναι" : "Όχι"}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : null}
                  </div>
                )}

                <div className="flex flex-wrap gap-3 pt-2">
                  {selectedEvent.joinUrl && (
                    <a
                      href={selectedEvent.joinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                      <Video className="h-4 w-4" />
                      Άνοιγμα Teams
                    </a>
                  )}
                  {selectedEvent.webLink && !selectedEvent.joinUrl && (
                    <a
                      href={selectedEvent.webLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
                    >
                      Άνοιγμα στο Outlook
                    </a>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* New meeting dialog */}
      <Dialog open={newMeetingOpen} onOpenChange={setNewMeetingOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Νέο ραντεβού Teams
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label>Διοργανωτής (ημερολόγιο)</Label>
              <select
                value={newMeeting.hostUserPrincipalName}
                onChange={(e) =>
                  setNewMeeting((p) => ({ ...p, hostUserPrincipalName: e.target.value }))
                }
                className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm"
              >
                {members.map((m) => (
                  <option key={m.id} value={m.userPrincipalName}>
                    {m.displayName} ({m.mail})
                  </option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label>Ημερομηνία</Label>
                <Input
                  type="date"
                  value={newMeeting.date}
                  onChange={(e) => setNewMeeting((p) => ({ ...p, date: e.target.value }))}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label>Ώρα έναρξης</Label>
                <Input
                  type="time"
                  value={newMeeting.startTime}
                  onChange={(e) => setNewMeeting((p) => ({ ...p, startTime: e.target.value }))}
                />
              </div>
              <div className="grid gap-2">
                <Label>Ώρα λήξης</Label>
                <Input
                  type="time"
                  value={newMeeting.endTime}
                  onChange={(e) => setNewMeeting((p) => ({ ...p, endTime: e.target.value }))}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label>Θέμα *</Label>
              <Input
                placeholder="Θέμα συνάντησης"
                value={newMeeting.subject}
                onChange={(e) => setNewMeeting((p) => ({ ...p, subject: e.target.value }))}
              />
            </div>
            <div className="grid gap-2">
              <Label>Περιγραφή (προαιρετικό)</Label>
              <textarea
                placeholder="Σημειώσεις"
                value={newMeeting.body}
                onChange={(e) => setNewMeeting((p) => ({ ...p, body: e.target.value }))}
                rows={2}
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            <div className="grid gap-2">
              <Label>Συμμετέχοντες (email, χωρισμένα με κόμμα ή νέα γραμμή)</Label>
              <textarea
                placeholder="email1@example.com, email2@example.com"
                value={newMeeting.attendeeEmails}
                onChange={(e) =>
                  setNewMeeting((p) => ({ ...p, attendeeEmails: e.target.value }))
                }
                rows={2}
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            {createError && (
              <p className="text-sm text-destructive">{createError}</p>
            )}
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => setNewMeetingOpen(false)}>
                Ακύρωση
              </Button>
              <Button
                onClick={handleCreateMeeting}
                disabled={creating || !newMeeting.subject?.trim()}
              >
                {creating ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    <Plus className="h-4 w-4" />
                    Δημιουργία
                  </>
                )}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
