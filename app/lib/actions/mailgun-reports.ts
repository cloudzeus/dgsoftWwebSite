"use server";

import { auth } from "@/auth";
import {
  aggregateStatsTotals,
  fetchMailgunDomain,
  fetchMailgunEvents,
  fetchMailgunStatsTotal,
  type MailgunEventItem,
  type MailgunStatsBucket,
} from "@/lib/mailgun-reporting";

export type MailgunReportsPayload = {
  configured: boolean;
  domainName: string | null;
  domainState: string | null;
  domainError: string | null;
  duration: string;
  resolution: string | null;
  statsEnd: string | null;
  totals: ReturnType<typeof aggregateStatsTotals>;
  statsRows: MailgunStatsBucket[];
  statsError: string | null;
  events: MailgunEventItem[];
  eventsError: string | null;
};

function resolutionForDuration(duration: string): "hour" | "day" | "month" {
  if (duration === "24h" || duration === "48h") return "hour";
  return "day";
}

/**
 * Loads Mailgun analytics for the configured domain: stats/total time series + recent events + domain status.
 * Requires MAILGUN_API_KEY and MAILGUN_DOMAIN.
 */
export async function getMailgunNewsletterReports(duration: string): Promise<MailgunReportsPayload> {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") {
    return {
      configured: false,
      domainName: null,
      domainState: null,
      domainError: null,
      duration,
      resolution: null,
      statsEnd: null,
      totals: aggregateStatsTotals(undefined),
      statsRows: [],
      statsError: "Unauthorized",
      events: [],
      eventsError: null,
    };
  }

  const apiKey = process.env.MAILGUN_API_KEY?.trim();
  const domainName = process.env.MAILGUN_DOMAIN?.trim();
  if (!apiKey || !domainName) {
    return {
      configured: false,
      domainName: domainName ?? null,
      domainState: null,
      domainError: null,
      duration,
      resolution: null,
      statsEnd: null,
      totals: aggregateStatsTotals(undefined),
      statsRows: [],
      statsError: null,
      events: [],
      eventsError: null,
    };
  }

  const resolution = resolutionForDuration(duration);

  const [statsRes, eventsRes, domainRes] = await Promise.all([
    fetchMailgunStatsTotal({ duration, resolution }),
    fetchMailgunEvents({ limit: 50, ascending: "no" }),
    fetchMailgunDomain(),
  ]);

  const statsRows = statsRes.ok ? statsRes.body.stats ?? [] : [];
  const totals = aggregateStatsTotals(statsRows);

  return {
    configured: true,
    domainName,
    domainState: domainRes.ok ? domainRes.body.domain?.state ?? null : null,
    domainError: domainRes.ok ? null : domainRes.error,
    duration,
    resolution: statsRes.ok ? statsRes.body.resolution ?? resolution : resolution,
    statsEnd: statsRes.ok ? statsRes.body.end ?? null : null,
    totals,
    statsRows,
    statsError: statsRes.ok ? null : statsRes.error,
    events: eventsRes.ok ? eventsRes.body.items ?? [] : [],
    eventsError: eventsRes.ok ? null : eventsRes.error,
  };
}
