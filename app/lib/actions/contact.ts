"use server";

import { headers } from "next/headers";
import { guardSubmission } from "@/lib/form-guard";

/** Escape values before they are interpolated into the notification HTML. */
function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export type ContactFormData = {
  name: string;
  email: string;
  company: string;
  message: string;
  /** Honeypot — hidden field, empty for real people. */
  website?: string;
  /** How long the form was on screen, from the client. */
  elapsedMs?: number;
};

export async function submitContactForm(
  data: ContactFormData
): Promise<{ success: boolean; error?: string }> {
  const { name, email, company, message } = data;

  if (!name.trim() || !email.trim() || !message.trim()) {
    return { success: false, error: "Συμπληρώστε όλα τα υποχρεωτικά πεδία." };
  }

  // This is a Server Action, not a route handler, so there is no Request to
  // hand the guard — rebuild one from the incoming headers for the IP.
  const h = await headers();
  const guard = guardSubmission({
    req: new Request("https://dgsoft.gr/contact", {
      headers: {
        "x-forwarded-for": h.get("x-forwarded-for") ?? "",
        "x-real-ip": h.get("x-real-ip") ?? "",
      },
    }),
    honeypot: data.website,
    elapsedMs: data.elapsedMs,
    email,
    text: [name, company, message],
  });
  if (!guard.ok) {
    // Bots get a success response so they learn nothing; no mail is sent.
    if (guard.silent) {
      console.warn(`[contact] blocked: ${guard.reason}`);
      return { success: true };
    }
    return { success: false, error: guard.reason };
  }

  const apiKey = process.env.MAILGUN_API_KEY;
  const domain = process.env.MAILGUN_DOMAIN;
  const endpoint = (process.env.MAILGUN_ENDPOINT ?? "https://api.eu.mailgun.net").replace(/\/$/, "");
  const to = process.env.CONTACT_EMAIL ?? "info@dgsoft.gr";

  if (!apiKey || !domain) {
    console.error("Mailgun env vars not set");
    return { success: false, error: "Πρόβλημα αποστολής. Δοκιμάστε αργότερα." };
  }

  const body = new URLSearchParams({
    from: `DGSoft Website <noreply@${domain}>`,
    to,
    subject: `Νέο μήνυμα επικοινωνίας από ${name}`,
    text: `Όνομα: ${name}\nEmail: ${email}\nΕταιρεία: ${company || "—"}\n\nΜήνυμα:\n${message}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
        <h2 style="color:#E31E2A;">Νέο μήνυμα από τη φόρμα επικοινωνίας</h2>
        <table cellpadding="8" style="width:100%;border-collapse:collapse;">
          <tr><td style="color:#666;width:120px;">Όνομα</td><td><strong>${esc(name)}</strong></td></tr>
          <tr><td style="color:#666;">Email</td><td><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
          <tr><td style="color:#666;">Εταιρεία</td><td>${company ? esc(company) : "—"}</td></tr>
        </table>
        <hr style="border:none;border-top:1px solid #eee;margin:16px 0;" />
        <p style="white-space:pre-wrap;color:#333;">${esc(message)}</p>
      </div>`,
    "h:Reply-To": email,
  });

  try {
    const res = await fetch(`${endpoint}/v3/${domain}/messages`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`api:${apiKey}`).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
    });

    if (!res.ok) {
      const txt = await res.text();
      console.error("Mailgun contact error:", txt);
      return { success: false, error: "Πρόβλημα αποστολής. Δοκιμάστε αργότερα." };
    }

    return { success: true };
  } catch (err) {
    console.error("submitContactForm error:", err);
    return { success: false, error: "Πρόβλημα αποστολής. Δοκιμάστε αργότερα." };
  }
}
