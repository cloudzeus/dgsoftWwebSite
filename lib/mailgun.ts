/**
 * Mailgun email sending via REST API (EU endpoint).
 * Uses MAILGUN_API_KEY, MAILGUN_DOMAIN, MAILGUN_ENDPOINT from env.
 */

export type SendMailgunOptions = {
  to: string | string[];
  subject: string;
  text?: string;
  html?: string;
  from?: string;
  fromName?: string;
  replyTo?: string;
  cc?: string | string[];
  bcc?: string | string[];
};

function getConfig() {
  const apiKey = process.env.MAILGUN_API_KEY;
  const domain = process.env.MAILGUN_DOMAIN;
  const endpoint = process.env.MAILGUN_ENDPOINT ?? "https://api.eu.mailgun.net";
  return { apiKey, domain, endpoint };
}

/**
 * Send an email via Mailgun API.
 * Returns { success: true, id } on success, or { success: false, error } on failure.
 */
export async function sendMailgun(options: SendMailgunOptions): Promise<
  | { success: true; id?: string }
  | { success: false; error: string }
> {
  const { apiKey, domain, endpoint } = getConfig();
  if (!apiKey?.trim()) return { success: false, error: "MAILGUN_API_KEY is not set" };
  if (!domain?.trim()) return { success: false, error: "MAILGUN_DOMAIN is not set" };

  const toList = Array.isArray(options.to) ? options.to : [options.to];
  const to = toList.filter(Boolean).join(", ");
  if (!to) return { success: false, error: "At least one recipient (to) is required" };
  if (!options.subject?.trim()) return { success: false, error: "Subject is required" };

  const text = options.text?.trim();
  const html = options.html?.trim();
  if (!text && !html) return { success: false, error: "Either text or html body is required" };

  const fromAddress = options.from?.trim() || `noreply@${domain}`;
  const fromName = options.fromName?.trim();
  const from = fromName ? `${fromName} <${fromAddress}>` : fromAddress;

  const url = `${endpoint.replace(/\/$/, "")}/v3/${domain}/messages`;
  const basicAuth = Buffer.from(`api:${apiKey}`).toString("base64");

  const form = new FormData();
  form.append("from", from);
  form.append("to", to);
  form.append("subject", options.subject);
  if (text) form.append("text", text);
  if (html) form.append("html", html);
  if (options.replyTo?.trim()) form.append("h:Reply-To", options.replyTo.trim());
  if (options.cc?.length) form.append("cc", Array.isArray(options.cc) ? options.cc.join(", ") : options.cc);
  if (options.bcc?.length) form.append("bcc", Array.isArray(options.bcc) ? options.bcc.join(", ") : options.bcc);

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basicAuth}`,
      },
      body: form,
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      const msg = (data as { message?: string }).message ?? data?.error ?? res.statusText ?? "Mailgun request failed";
      return { success: false, error: typeof msg === "string" ? msg : JSON.stringify(msg) };
    }
    return { success: true, id: (data as { id?: string }).id };
  } catch (e) {
    const message = e instanceof Error ? e.message : "Unknown error";
    return { success: false, error: message };
  }
}
