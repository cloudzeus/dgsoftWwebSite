"use server";

import { auth } from "@/auth";
import { sendMailgun } from "@/lib/mailgun";

export type SendEmailResult = { success: boolean; message?: string };

/**
 * Send an email via Mailgun. Requires an authenticated session.
 */
export async function sendEmailViaMailgun(params: {
  to: string;
  subject: string;
  text?: string;
  html?: string;
  fromName?: string;
  replyTo?: string;
}): Promise<SendEmailResult> {
  const session = await auth();
  if (!session?.user) return { success: false, message: "Unauthorized" };

  const to = params.to?.trim();
  if (!to) return { success: false, message: "Recipient (to) is required" };
  const subject = params.subject?.trim();
  if (!subject) return { success: false, message: "Subject is required" };
  const text = params.text?.trim();
  const html = params.html?.trim();
  if (!text && !html) return { success: false, message: "Email body (text or html) is required" };

  const result = await sendMailgun({
    to,
    subject,
    text: text || undefined,
    html: html || undefined,
    fromName: params.fromName?.trim() || undefined,
    replyTo: params.replyTo?.trim() || undefined,
  });

  if (result.success) return { success: true };
  return { success: false, message: result.error };
}
