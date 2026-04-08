/**
 * Mailgun Analytics / Reporting (REST v3).
 * Uses MAILGUN_API_KEY, MAILGUN_DOMAIN, MAILGUN_ENDPOINT (default EU).
 *
 * Docs: Stats — GET /v3/{domain}/stats/total
 *       Events — GET /v3/{domain}/events
 */

function getConfig() {
  const apiKey = process.env.MAILGUN_API_KEY?.trim();
  const domain = process.env.MAILGUN_DOMAIN?.trim();
  const endpoint = (process.env.MAILGUN_ENDPOINT ?? "https://api.eu.mailgun.net").replace(/\/$/, "");
  return { apiKey, domain, endpoint };
}

function basicAuthHeader(apiKey: string): string {
  return `Basic ${Buffer.from(`api:${apiKey}`).toString("base64")}`;
}

async function mailgunGet<T>(path: string, searchParams: URLSearchParams): Promise<{ ok: true; data: T } | { ok: false; status: number; error: string }> {
  const { apiKey, domain, endpoint } = getConfig();
  if (!apiKey) return { ok: false, status: 500, error: "MAILGUN_API_KEY is not set" };
  if (!domain) return { ok: false, status: 500, error: "MAILGUN_DOMAIN is not set" };

  const url = `${endpoint}${path.startsWith("/") ? path : `/${path}`}?${searchParams.toString()}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: basicAuthHeader(apiKey),
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const text = await res.text();
  let data: unknown;
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    return { ok: false, status: res.status, error: text.slice(0, 400) || res.statusText };
  }

  if (!res.ok) {
    const msg =
      typeof (data as { message?: string })?.message === "string"
        ? (data as { message: string }).message
        : typeof (data as { error?: string })?.error === "string"
          ? (data as { error: string }).error
          : text.slice(0, 300) || res.statusText;
    return { ok: false, status: res.status, error: msg };
  }

  return { ok: true, data: data as T };
}

/** Mailgun stats/total bucket (structure varies slightly by event). */
export type MailgunStatsBucket = {
  time: string;
  accepted?: { incoming?: number; outgoing?: number };
  delivered?: { smtp?: number; http?: number; total?: number };
  failed?: Record<string, unknown>;
  opened?: { total?: number } | number;
  clicked?: { total?: number } | number;
  unsubscribed?: { total?: number } | number;
  complained?: { total?: number } | number;
  stored?: { total?: number } | number;
};

export type MailgunStatsTotalResponse = {
  stats?: MailgunStatsBucket[];
  end?: string;
  resolution?: string;
  start?: string;
};

const STAT_EVENTS = ["accepted", "delivered", "failed", "opened", "clicked", "unsubscribed", "complained"] as const;

export type MailgunStatsTotalParams = {
  /** e.g. 24h, 48h, 7d, 1m, 3m — Mailgun duration string */
  duration: string;
  /** hour | day | month */
  resolution?: "hour" | "day" | "month";
};

export async function fetchMailgunStatsTotal(params: MailgunStatsTotalParams): Promise<
  { ok: true; body: MailgunStatsTotalResponse } | { ok: false; error: string }
> {
  const { domain } = getConfig();
  if (!domain) return { ok: false, error: "MAILGUN_DOMAIN is not set" };

  const search = new URLSearchParams();
  search.set("duration", params.duration);
  if (params.resolution) search.set("resolution", params.resolution);
  for (const e of STAT_EVENTS) {
    search.append("event", e);
  }

  const path = `/v3/${encodeURIComponent(domain)}/stats/total`;
  const res = await mailgunGet<MailgunStatsTotalResponse>(path, search);
  if (!res.ok) return { ok: false, error: res.error };
  return { ok: true, body: res.data };
}

export type MailgunEventItem = {
  event?: string;
  id?: string;
  timestamp?: number;
  message?: {
    headers?: { subject?: string; to?: string; from?: string };
  };
  recipient?: string;
  severity?: string;
  reason?: string;
};

export type MailgunEventsResponse = {
  items?: MailgunEventItem[];
  paging?: { next?: string; previous?: string };
};

export async function fetchMailgunEvents(options: {
  limit?: number;
  /** Unix epoch seconds */
  begin?: number;
  ascending?: "yes" | "no";
}): Promise<{ ok: true; body: MailgunEventsResponse } | { ok: false; error: string }> {
  const { domain } = getConfig();
  if (!domain) return { ok: false, error: "MAILGUN_DOMAIN is not set" };

  const search = new URLSearchParams();
  search.set("limit", String(Math.min(options.limit ?? 50, 300)));
  if (options.begin != null) search.set("begin", String(options.begin));
  search.set("ascending", options.ascending ?? "no");

  const path = `/v3/${encodeURIComponent(domain)}/events`;
  const res = await mailgunGet<MailgunEventsResponse>(path, search);
  if (!res.ok) return { ok: false, error: res.error };
  return { ok: true, body: res.data };
}

export type MailgunDomainInfo = {
  domain?: {
    name?: string;
    state?: string;
    smtp_login?: string;
    created_at?: string;
    spam_action?: string;
    wildcard?: boolean;
  };
};

export async function fetchMailgunDomain(): Promise<
  { ok: true; body: MailgunDomainInfo } | { ok: false; error: string }
> {
  const { domain } = getConfig();
  if (!domain) return { ok: false, error: "MAILGUN_DOMAIN is not set" };

  const path = `/v3/domains/${encodeURIComponent(domain)}`;
  const res = await mailgunGet<MailgunDomainInfo>(path, new URLSearchParams());
  if (!res.ok) return { ok: false, error: res.error };
  return { ok: true, body: res.data };
}

/** Aggregate numeric totals across time buckets for dashboard cards. */
export function aggregateStatsTotals(stats: MailgunStatsBucket[] | undefined): {
  accepted: number;
  delivered: number;
  failed: number;
  opened: number;
  clicked: number;
  unsubscribed: number;
  complained: number;
} {
  const out = {
    accepted: 0,
    delivered: 0,
    failed: 0,
    opened: 0,
    clicked: 0,
    unsubscribed: 0,
    complained: 0,
  };
  if (!stats?.length) return out;

  for (const row of stats) {
    const a = row.accepted;
    if (a) out.accepted += (a.outgoing ?? 0) + (a.incoming ?? 0);

    const d = row.delivered;
    if (d) {
      if (typeof d.total === "number") out.delivered += d.total;
      else out.delivered += (d.smtp ?? 0) + (d.http ?? 0);
    }

    const f = row.failed;
    if (f && typeof f === "object") {
      const fs = f as { permanent?: { total?: number }; temporary?: { total?: number }; total?: number };
      if (typeof fs.total === "number") out.failed += fs.total;
      else out.failed += (fs.permanent?.total ?? 0) + (fs.temporary?.total ?? 0);
    }

    const o = row.opened;
    if (typeof o === "number") out.opened += o;
    else if (o && typeof o === "object" && typeof o.total === "number") out.opened += o.total;

    const c = row.clicked;
    if (typeof c === "number") out.clicked += c;
    else if (c && typeof c === "object" && typeof c.total === "number") out.clicked += c.total;

    const u = row.unsubscribed;
    if (typeof u === "number") out.unsubscribed += u;
    else if (u && typeof u === "object" && typeof u.total === "number") out.unsubscribed += u.total;

    const comp = row.complained;
    if (typeof comp === "number") out.complained += comp;
    else if (comp && typeof comp === "object" && typeof comp.total === "number") out.complained += comp.total;
  }

  return out;
}
