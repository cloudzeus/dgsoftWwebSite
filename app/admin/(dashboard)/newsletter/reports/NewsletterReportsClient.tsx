"use client";

import * as React from "react";
import {
  AlertCircle,
  BarChart3,
  CheckCircle2,
  ExternalLink,
  Loader2,
  Mail,
  MousePointerClick,
  Send,
  Sparkles,
  XCircle,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getMailgunNewsletterReports, type MailgunReportsPayload } from "@/app/lib/actions/mailgun-reports";
import type { MailgunStatsBucket } from "@/lib/mailgun-reporting";

const EVENT_TIME_FMT = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Athens",
  dateStyle: "medium",
  timeStyle: "short",
  hourCycle: "h23",
});

function formatEventTime(ts: number | undefined): string {
  if (ts == null || !Number.isFinite(ts)) return "—";
  return EVENT_TIME_FMT.format(new Date(ts * 1000));
}

function bucketMetrics(row: MailgunStatsBucket) {
  const acc = row.accepted;
  const accepted = (acc?.outgoing ?? 0) + (acc?.incoming ?? 0);
  const del = row.delivered;
  const delivered =
    del && typeof del.total === "number"
      ? del.total
      : (del?.smtp ?? 0) + (del?.http ?? 0);
  const f = row.failed;
  let failed = 0;
  if (f && typeof f === "object") {
    const fs = f as { permanent?: { total?: number }; temporary?: { total?: number }; total?: number };
    failed =
      typeof fs.total === "number"
        ? fs.total
        : (fs.permanent?.total ?? 0) + (fs.temporary?.total ?? 0);
  }
  const o = row.opened;
  const opened = typeof o === "number" ? o : typeof o === "object" && o?.total != null ? o.total : 0;
  const c = row.clicked;
  const clicked = typeof c === "number" ? c : typeof c === "object" && c?.total != null ? c.total : 0;
  return { accepted, delivered, failed, opened, clicked };
}

function formatBucketTime(iso: string): string {
  try {
    return EVENT_TIME_FMT.format(new Date(iso));
  } catch {
    return iso;
  }
}

export function NewsletterReportsClient({ initial }: { initial: MailgunReportsPayload }) {
  const [data, setData] = React.useState(initial);
  const [duration, setDuration] = React.useState(initial.duration);
  const [pending, startTransition] = React.useTransition();

  const load = (d: string) => {
    setDuration(d);
    startTransition(async () => {
      const next = await getMailgunNewsletterReports(d);
      setData(next);
    });
  };

  const showApiDocs = () => {
    window.open("https://documentation.mailgun.com/", "_blank");
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="overflow-hidden rounded-2xl border border-primary/15 bg-gradient-to-br from-slate-50/90 via-card to-violet-50/30 dark:from-slate-950 dark:via-card dark:to-violet-950/20 shadow-md shadow-primary/5">
        <div className="h-1 w-full shrink-0 bg-gradient-to-r from-amber-400 via-violet-500 to-emerald-500" aria-hidden />
        <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-start sm:justify-between sm:p-5">
          <div className="flex min-w-0 flex-1 gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/18 to-violet-500/18 text-primary ring-1 ring-primary/20">
              <BarChart3 className="h-5 w-5" />
            </span>
            <div className="min-w-0 space-y-2">
              <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-violet-500" />
                Newsletter · Delivery analytics
              </p>
              <h1 className="text-[15px] font-semibold leading-snug tracking-tight text-foreground sm:text-base">
                Mailgun reports
              </h1>
              <p className="max-w-3xl text-[11px] leading-relaxed text-muted-foreground">
                Domain-wide statistics from Mailgun&apos;s Stats and Events APIs: accepted, delivered, failures, opens,
                clicks, and a live event log. Data reflects your configured{" "}
                <code className="rounded bg-muted px-1 py-0.5 text-[10px]">MAILGUN_DOMAIN</code> (sending domain).
              </p>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="h-7 gap-1.5 text-[10px]"
                onClick={showApiDocs}
              >
                Mailgun Stats API docs
                <ExternalLink className="h-3 w-3" />
              </Button>
            </div>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-2">
            <Select value={duration} onValueChange={load} disabled={pending}>
              <SelectTrigger className="h-9 w-[140px] text-[11px]">
                <SelectValue placeholder="Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="24h">Last 24 hours</SelectItem>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="1m">Last month (~30d)</SelectItem>
                <SelectItem value="3m">Last 3 months (~90d)</SelectItem>
              </SelectContent>
            </Select>
            {pending ? (
              <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" />
                Loading…
              </span>
            ) : null}
          </div>
        </div>
      </div>

      {!data.configured ? (
        <Card className="border-amber-500/30 bg-amber-500/5">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm text-amber-900 dark:text-amber-100">
              <AlertCircle className="h-4 w-4" />
              Mailgun not configured
            </CardTitle>
            <CardDescription className="text-[11px] leading-relaxed">
              Set <code className="rounded bg-muted px-1">MAILGUN_API_KEY</code> and{" "}
              <code className="rounded bg-muted px-1">MAILGUN_DOMAIN</code> in your environment (use{" "}
              <code className="rounded bg-muted px-1">MAILGUN_ENDPOINT=https://api.eu.mailgun.net</code> for EU). Restart
              the server and reload.
            </CardDescription>
          </CardHeader>
        </Card>
      ) : (
        <>
          <div className="flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground">
            <span className="font-mono text-foreground/90">{data.domainName}</span>
            {data.domainState ? (
              <Badge
                variant="outline"
                className="h-6 border-emerald-500/30 bg-emerald-500/10 text-[10px] text-emerald-900 dark:text-emerald-100"
              >
                {data.domainState}
              </Badge>
            ) : null}
            {data.domainError ? (
              <span className="text-destructive">{data.domainError}</span>
            ) : null}
            {data.resolution ? (
              <span>
                Resolution: <strong className="text-foreground">{data.resolution}</strong>
              </span>
            ) : null}
            {data.statsEnd ? (
              <span className="text-[10px]">
                Stats window ends: {formatBucketTime(data.statsEnd)}
              </span>
            ) : null}
          </div>

          {data.statsError ? (
            <Card className="border-destructive/40 bg-destructive/5">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-sm text-destructive">
                  <XCircle className="h-4 w-4" />
                  Stats API error
                </CardTitle>
                <CardDescription className="font-mono text-[11px] text-destructive/90">{data.statsError}</CardDescription>
              </CardHeader>
            </Card>
          ) : null}

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            <MetricCard
              label="Accepted"
              value={data.totals.accepted}
              icon={<Send className="h-4 w-4" />}
              className="from-sky-500/15 to-sky-600/5"
            />
            <MetricCard
              label="Delivered"
              value={data.totals.delivered}
              icon={<CheckCircle2 className="h-4 w-4" />}
              className="from-emerald-500/15 to-teal-600/5"
            />
            <MetricCard
              label="Failed"
              value={data.totals.failed}
              icon={<XCircle className="h-4 w-4" />}
              className="from-red-500/15 to-amber-500/5"
            />
            <MetricCard
              label="Opened"
              value={data.totals.opened}
              icon={<Mail className="h-4 w-4" />}
              className="from-violet-500/15 to-violet-600/5"
            />
            <MetricCard
              label="Clicked"
              value={data.totals.clicked}
              icon={<MousePointerClick className="h-4 w-4" />}
              className="from-indigo-500/15 to-indigo-600/5"
            />
            <MetricCard
              label="Unsub / spam"
              value={data.totals.unsubscribed + data.totals.complained}
              icon={<AlertCircle className="h-4 w-4" />}
              className="from-orange-500/15 to-orange-600/5"
              hint={`${data.totals.unsubscribed} unsub · ${data.totals.complained} complaints`}
            />
          </div>

          <Card className="overflow-hidden rounded-2xl border border-primary/12 shadow-md">
            <div className="h-0.5 w-full bg-gradient-to-r from-sky-400/70 via-violet-500/60 to-emerald-400/70" aria-hidden />
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Time series (Mailgun stats/total)</CardTitle>
              <CardDescription className="text-[11px]">
                One row per resolution bucket. Totals above sum these rows for the selected range.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="max-h-[420px] overflow-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/40 hover:bg-muted/40">
                      <TableHead className="text-[10px] font-bold uppercase tracking-wider">Time</TableHead>
                      <TableHead className="text-right text-[10px] font-bold uppercase tracking-wider">Acc.</TableHead>
                      <TableHead className="text-right text-[10px] font-bold uppercase tracking-wider">Del.</TableHead>
                      <TableHead className="text-right text-[10px] font-bold uppercase tracking-wider">Fail</TableHead>
                      <TableHead className="text-right text-[10px] font-bold uppercase tracking-wider">Open</TableHead>
                      <TableHead className="text-right text-[10px] font-bold uppercase tracking-wider">Click</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data.statsRows.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={6} className="py-10 text-center text-[11px] text-muted-foreground">
                          No stats buckets for this period (or no activity yet).
                        </TableCell>
                      </TableRow>
                    ) : (
                      [...data.statsRows]
                        .sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime())
                        .map((row) => {
                          const m = bucketMetrics(row);
                          return (
                            <TableRow key={row.time} className="text-[11px]">
                              <TableCell className="font-mono text-[10px] text-muted-foreground whitespace-nowrap">
                                {formatBucketTime(row.time)}
                              </TableCell>
                              <TableCell className="text-right tabular-nums">{m.accepted}</TableCell>
                              <TableCell className="text-right tabular-nums">{m.delivered}</TableCell>
                              <TableCell className="text-right tabular-nums">{m.failed}</TableCell>
                              <TableCell className="text-right tabular-nums">{m.opened}</TableCell>
                              <TableCell className="text-right tabular-nums">{m.clicked}</TableCell>
                            </TableRow>
                          );
                        })
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {data.eventsError ? (
            <p className="text-[11px] text-destructive">Events: {data.eventsError}</p>
          ) : null}

          <Card className="overflow-hidden rounded-2xl border border-primary/12 shadow-md">
            <div className="h-0.5 w-full bg-gradient-to-r from-violet-400/70 to-emerald-400/70" aria-hidden />
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Recent events (log)</CardTitle>
              <CardDescription className="text-[11px]">
                Latest entries from <code className="rounded bg-muted px-1 text-[10px]">GET /v3/…/events</code> — newest
                first (up to 50).
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="max-h-[min(60vh,520px)] overflow-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/40 hover:bg-muted/40">
                      <TableHead className="text-[10px] font-bold uppercase tracking-wider">Time (Europe/Athens)</TableHead>
                      <TableHead className="text-[10px] font-bold uppercase tracking-wider">Event</TableHead>
                      <TableHead className="text-[10px] font-bold uppercase tracking-wider">Recipient</TableHead>
                      <TableHead className="text-[10px] font-bold uppercase tracking-wider">Subject</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data.events.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={4} className="py-10 text-center text-[11px] text-muted-foreground">
                          No events returned.
                        </TableCell>
                      </TableRow>
                    ) : (
                      data.events.map((ev, i) => {
                        const subj = ev.message?.headers?.subject ?? "—";
                        const to = ev.recipient ?? ev.message?.headers?.to ?? "—";
                        return (
                          <TableRow key={ev.id ?? `${ev.timestamp}-${i}`} className="text-[11px]">
                            <TableCell className="whitespace-nowrap font-mono text-[10px] text-muted-foreground">
                              {formatEventTime(ev.timestamp)}
                            </TableCell>
                            <TableCell>
                              <Badge variant="secondary" className="text-[10px] font-normal">
                                {ev.event ?? "—"}
                              </Badge>
                            </TableCell>
                            <TableCell className="max-w-[200px] truncate text-[10px]" title={to}>
                              {to}
                            </TableCell>
                            <TableCell className="max-w-[min(24rem,40vw)] truncate" title={subj}>
                              {subj}
                            </TableCell>
                          </TableRow>
                        );
                      })
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}

function MetricCard({
  label,
  value,
  icon,
  className,
  hint,
}: {
  label: string;
  value: number;
  icon: React.ReactNode;
  className?: string;
  hint?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-border/60 bg-gradient-to-br p-3 shadow-sm ${className ?? "from-muted/40 to-card"}`}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">{label}</span>
        <span className="text-muted-foreground opacity-80">{icon}</span>
      </div>
      <p className="mt-1 text-xl font-semibold tabular-nums tracking-tight">{value}</p>
      {hint ? <p className="mt-0.5 text-[9px] text-muted-foreground">{hint}</p> : null}
    </div>
  );
}
