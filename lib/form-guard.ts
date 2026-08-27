import { NextResponse } from "next/server";

/**
 * Shared spam protection for the public forms.
 *
 * The four public endpoints (digital-maturity, teams-request, newsletter,
 * teams-booking) had no bot protection at all — only the admin support route
 * carried a honeypot. These are the layers that need no third-party service and
 * no keys, applied before anything reaches Mailgun.
 *
 * Order matters: the cheap checks run first so an obvious bot never costs a
 * database query or an API call.
 *
 * Note on what this does NOT do: Mailgun's inbound spam filter and suppression
 * lists do not help here. Both act on mail Mailgun *receives* or *sends to* an
 * address. These forms make Mailgun send mail *to you*, so the only place the
 * junk can be stopped is before the send — which is what this file is for.
 */

export type GuardResult =
  | { ok: true }
  /** Bot detected. Answer as if it worked so the bot does not learn to adapt. */
  | { ok: false; silent: true; reason: string }
  /** Real problem the user should see. */
  | { ok: false; silent: false; reason: string; status: number };

/** Disposable and throwaway mail providers, the usual source of form spam. */
const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com", "guerrillamail.com", "10minutemail.com", "tempmail.com",
  "temp-mail.org", "throwawaymail.com", "yopmail.com", "trashmail.com",
  "getnada.com", "sharklasers.com", "grr.la", "spam4.me", "dispostable.com",
  "maildrop.cc", "fakeinbox.com", "mohmal.com", "emailondeck.com",
  "tempinbox.com", "mytemp.email", "moakt.com", "tmpmail.org", "burnermail.io",
  "email-temp.com", "mailnesia.com", "spambog.com", "tempr.email",
]);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Links in a short free-text field are the clearest spam signal there is. */
const URL_RE = /(https?:\/\/|www\.)/gi;

/** Terms that essentially never appear in a genuine Greek business enquiry. */
const SPAM_TERMS = [
  "seo service", "backlink", "guest post", "casino", "crypto invest",
  "forex", "viagra", "cialis", "porn", "escort", "loan offer",
  "make money fast", "work from home", "bitcoin", "binary option",
];

/**
 * In-memory rate limit, keyed by IP.
 *
 * Deliberately in-memory: it resets on deploy and is per-instance, which is a
 * real limitation, but it needs no Redis and still stops the bulk submissions
 * that make up most of this traffic. If the site ever runs on several
 * instances and this proves too leaky, move it to Redis or a Prisma table.
 */
const attempts = new Map<string, number[]>();
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function pruneAttempts(now: number) {
  // Keep the map from growing without bound on a long-running instance.
  if (attempts.size < 5000) return;
  for (const [key, times] of attempts) {
    const kept = times.filter((t) => now - t < WINDOW_MS);
    if (kept.length) attempts.set(key, kept);
    else attempts.delete(key);
  }
}

export function clientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

function rateLimited(ip: string): boolean {
  if (ip === "unknown") return false;
  const now = Date.now();
  pruneAttempts(now);
  const recent = (attempts.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  attempts.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

export type GuardInput = {
  req: Request;
  /** Honeypot value. Any content means a bot filled a field humans cannot see. */
  honeypot?: unknown;
  /** Milliseconds the form was on screen, from the client. */
  elapsedMs?: unknown;
  email?: unknown;
  /** Free-text fields to scan for links and spam terms. */
  text?: (string | null | undefined)[];
  /** Skip the IP limit where repeat submissions are legitimate. */
  skipRateLimit?: boolean;
};

/** Minimum time a human needs to fill even a short form. */
const MIN_ELAPSED_MS = 2500;

export function guardSubmission(input: GuardInput): GuardResult {
  // 1. Honeypot — cheapest and catches the majority of naive bots.
  if (typeof input.honeypot === "string" && input.honeypot.trim() !== "") {
    return { ok: false, silent: true, reason: "honeypot" };
  }

  // 2. Submission speed. Bots post instantly; people do not. Only judge when
  //    the client actually sent a timing, so a missing value never blocks.
  const elapsed = Number(input.elapsedMs);
  if (Number.isFinite(elapsed) && elapsed > 0 && elapsed < MIN_ELAPSED_MS) {
    return { ok: false, silent: true, reason: "too-fast" };
  }

  // 3. Email shape and disposable providers.
  if (input.email !== undefined) {
    const email = String(input.email ?? "").trim().toLowerCase();
    if (!EMAIL_RE.test(email)) {
      return { ok: false, silent: false, reason: "Μη έγκυρη διεύθυνση email.", status: 422 };
    }
    const domain = email.split("@")[1] ?? "";
    if (DISPOSABLE_DOMAINS.has(domain)) {
      return {
        ok: false,
        silent: false,
        reason: "Χρησιμοποιήστε μια μόνιμη διεύθυνση email.",
        status: 422,
      };
    }
  }

  // 4. Link and keyword scan over the free-text fields.
  if (input.text?.length) {
    const blob = input.text.filter(Boolean).join(" ");
    const lower = blob.toLowerCase();
    const links = blob.match(URL_RE)?.length ?? 0;
    if (links >= 2) return { ok: false, silent: true, reason: "links" };
    if (SPAM_TERMS.some((term) => lower.includes(term))) {
      return { ok: false, silent: true, reason: "spam-terms" };
    }
  }

  // 5. Rate limit last — it mutates state, so only reach it for plausible posts.
  if (!input.skipRateLimit && rateLimited(clientIp(input.req))) {
    return {
      ok: false,
      silent: false,
      reason: "Πάρα πολλές υποβολές. Δοκιμάστε ξανά σε λίγη ώρα.",
      status: 429,
    };
  }

  return { ok: true };
}

/**
 * Turn a failed guard into a response.
 *
 * Bot rejections return 200 with a success-shaped body on purpose: a bot that
 * sees an error learns which field betrayed it and retries. A silent accept
 * teaches it nothing, and no mail is sent either way.
 */
export function guardResponse(result: Extract<GuardResult, { ok: false }>): NextResponse {
  if (result.silent) {
    console.warn(`[form-guard] blocked: ${result.reason}`);
    return NextResponse.json({ ok: true, success: true });
  }
  return NextResponse.json({ error: result.reason }, { status: result.status });
}
