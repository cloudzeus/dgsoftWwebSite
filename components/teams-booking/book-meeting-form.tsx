"use client";

import { useState } from "react";
import { Loader2, Calendar, Clock, Users, Mail, CheckCircle2, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const DURATION_MINUTES = 30;
const TIMEZONE = "Europe/Athens";

function getTimeSlots(): string[] {
  const slots: string[] = [];
  for (let h = 9; h <= 17; h++) {
    for (let m = 0; m < 60; m += 30) {
      if (h === 17 && m > 0) break;
      slots.push(`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`);
    }
  }
  return slots;
}

const TIME_SLOTS = getTimeSlots();

type AvailabilitySlot = {
  userId: string;
  userPrincipalName: string;
  displayName: string;
  available: boolean;
};

function toISODate(dateStr: string, timeStr: string): { start: string; end: string } {
  const [hours, minutes] = timeStr.split(":").map(Number);
  const start = new Date(dateStr);
  start.setHours(hours, minutes, 0, 0);
  const end = new Date(start);
  end.setMinutes(end.getMinutes() + DURATION_MINUTES);
  return {
    start: start.toISOString(),
    end: end.toISOString(),
  };
}

export default function BookMeetingForm() {
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [slots, setSlots] = useState<AvailabilitySlot[] | null>(null);
  const [loadingAvailability, setLoadingAvailability] = useState(false);
  const [availabilityError, setAvailabilityError] = useState<string | null>(null);

  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [selectedHost, setSelectedHost] = useState<string | null>(null);
  const [booking, setBooking] = useState(false);
  const [bookResult, setBookResult] = useState<{
    joinUrl: string;
    subject: string;
    start: string;
    end: string;
    emailSent: boolean;
  } | null>(null);
  const [bookError, setBookError] = useState<string | null>(null);

  const checkAvailability = async () => {
    if (!date || !timeSlot) return;
    setAvailabilityError(null);
    setSlots(null);
    setLoadingAvailability(true);
    try {
      const { start, end } = toISODate(date, timeSlot);
      const res = await fetch("/api/teams-booking/availability", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ startTime: start, endTime: end }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Failed to load availability");
      setSlots(data.slots ?? []);
      const firstAvailable = data.slots?.find((s: AvailabilitySlot) => s.available);
      if (firstAvailable) setSelectedHost(firstAvailable.userPrincipalName);
    } catch (e) {
      setAvailabilityError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setLoadingAvailability(false);
    }
  };

  const bookMeeting = async () => {
    if (!date || !timeSlot || !guestEmail.trim() || !selectedHost) return;
    setBookError(null);
    setBookResult(null);
    setBooking(true);
    try {
      const { start, end } = toISODate(date, timeSlot);
      const res = await fetch("/api/teams-booking/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          startTime: start,
          endTime: end,
          guestEmail: guestEmail.trim(),
          guestName: guestName.trim() || undefined,
          subject: subject.trim() || undefined,
          hostUserPrincipalName: selectedHost,
          message: message.trim() || undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Booking failed");
      setBookResult({
        joinUrl: data.joinUrl,
        subject: data.subject,
        start: data.start,
        end: data.end,
        emailSent: data.emailSent !== false,
      });
    } catch (e) {
      setBookError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setBooking(false);
    }
  };

  const availableMembers = slots?.filter((s) => s.available) ?? [];

  if (bookResult) {
    return (
      <div className="rounded-2xl border border-white/10 bg-monks-gray/80 p-6 md:p-8 text-center">
        <CheckCircle2 className="mx-auto w-12 h-12 text-[#FFD700] mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">Η συνάντηση ορίστηκε</h3>
        <p className="text-monks-light mb-4">
          {bookResult.emailSent
            ? "Σας στάλθηκε email με τα στοιχεία της συνάντησης."
            : "Το email δεν στάλθηκε, αλλά η συνάντηση δημιουργήθηκε."}
        </p>
        <p className="text-sm text-monks-light mb-2">{bookResult.subject}</p>
        <p className="text-sm text-monks-light mb-4">
          {new Date(bookResult.start).toLocaleString("el-GR", {
            timeZone: TIMEZONE,
            dateStyle: "medium",
            timeStyle: "short",
          })}
        </p>
        <a
          href={bookResult.joinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#FFD700] text-monks-black font-semibold px-6 py-3 rounded-lg hover:bg-[#E3AA00] transition-colors"
        >
          <Video className="w-5 h-5" />
          Άνοιγμα σύνδεσμου Teams
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-monks-gray/80 p-6 md:p-8 space-y-6">
      <div className="mb-2">
        <div className="flex items-center gap-2 text-white mb-1">
          <Calendar className="w-5 h-5 text-[#FFD700]" />
          <h3 className="text-lg font-semibold">Κλείστε ραντεβού με την ομάδα DGSMART</h3>
        </div>
        <p className="text-sm text-monks-light">
          Η ομάδα μας (dgsmart.gr) εξυπηρετεί τα αιτήματά σας από τον ιστότοπο· επιλέξτε διαθεσιμότητα και θα σας στείλουμε σύνδεσμο Teams.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-monks-light mb-2">Ημερομηνία</label>
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={new Date().toISOString().slice(0, 10)}
            className="bg-white/5 border-white/10 text-white focus-visible:ring-[#FFD700]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-monks-light mb-2">Ώρα έναρξης</label>
          <select
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
            className="flex h-9 w-full rounded-md border border-input bg-white/5 border-white/10 px-3 py-1 text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FFD700]"
          >
            <option value="">Επιλέξτε ώρα</option>
            {TIME_SLOTS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <Button
        type="button"
        onClick={checkAvailability}
        disabled={!date || !timeSlot || loadingAvailability}
        className="bg-[#FFD700] text-monks-black hover:bg-[#E3AA00]"
      >
        {loadingAvailability ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Clock className="w-4 h-4" />
        )}
        {loadingAvailability ? "Έλεγχος..." : "Έλεγχος διαθεσιμότητας"}
      </Button>

      {availabilityError && (
        <p className="text-sm text-red-400">{availabilityError}</p>
      )}

      {slots && slots.length > 0 && (
        <>
          <div className="pt-4 border-t border-white/10">
            <div className="flex items-center gap-2 text-monks-light mb-3">
              <Users className="w-4 h-4 text-[#FFD700]" />
              <span className="text-sm font-medium">
                Διαθέσιμα μέλη ({availableMembers.length}/{slots.length})
              </span>
            </div>
            <ul className="space-y-2">
              {slots.map((s) => (
                <li key={s.userPrincipalName} className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="host"
                    id={`host-${s.userPrincipalName}`}
                    checked={selectedHost === s.userPrincipalName}
                    onChange={() => setSelectedHost(s.userPrincipalName)}
                    disabled={!s.available}
                    className="rounded-full border-white/20 text-[#FFD700] focus:ring-[#FFD700]"
                  />
                  <label
                    htmlFor={`host-${s.userPrincipalName}`}
                    className={`text-sm ${s.available ? "text-white" : "text-monks-light/60"}`}
                  >
                    {s.displayName}
                    {!s.available && " (απασχολημένο)"}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 pt-4">
            <div>
              <label className="block text-sm font-medium text-monks-light mb-2">
                Όνομα <span className="text-red-400">*</span>
              </label>
              <Input
                type="text"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="Όνομα Επώνυμο"
                className="bg-white/5 border-white/10 text-white placeholder:text-monks-light/50 focus-visible:ring-[#FFD700]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-monks-light mb-2">
                Email <span className="text-red-400">*</span>
              </label>
              <Input
                type="email"
                value={guestEmail}
                onChange={(e) => setGuestEmail(e.target.value)}
                placeholder="email@example.com"
                className="bg-white/5 border-white/10 text-white placeholder:text-monks-light/50 focus-visible:ring-[#FFD700]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-monks-light mb-2">Θέμα συνάντησης</label>
              <Input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="π.χ. Σύσκεψη για ευρωπαϊκά προγράμματα"
                className="bg-white/5 border-white/10 text-white placeholder:text-monks-light/50 focus-visible:ring-[#FFD700]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-monks-light mb-2">Σημείωση (προαιρετικό)</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={2}
                placeholder="Σύντομη περιγραφή ή ερώτημα"
                className="flex w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-monks-light/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FFD700]"
              />
            </div>

            {bookError && <p className="text-sm text-red-400">{bookError}</p>}

            <Button
              type="button"
              onClick={bookMeeting}
              disabled={!guestEmail.trim() || !selectedHost || booking || availableMembers.length === 0}
              className="w-full bg-[#FFD700] text-monks-black hover:bg-[#E3AA00]"
            >
              {booking ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Mail className="w-4 h-4" />
              )}
              {booking ? "Δημιουργία συνάντησης..." : "Κλείσιμο ραντεβού & αποστολή email"}
            </Button>
          </div>
        </>
      )}

      {slots && slots.length === 0 && !availabilityError && (
        <p className="text-monks-light text-sm">
          Κανένα μέλος δεν είναι διαθέσιμο την επιλεγμένη ώρα. Δοκιμάστε άλλη ημερομηνία ή ώρα.
        </p>
      )}
    </div>
  );
}
