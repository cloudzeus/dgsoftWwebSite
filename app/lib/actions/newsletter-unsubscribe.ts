"use server";

import prisma from "@/lib/prisma";

export async function unsubscribeEmail(
  email: string
): Promise<{ success: boolean; error?: string }> {
  if (!email || !email.includes("@")) {
    return { success: false, error: "Invalid email address" };
  }

  try {
    // Upsert in DB
    await prisma.newsletterUnsubscribe.upsert({
      where: { email: email.toLowerCase() },
      create: { email: email.toLowerCase() },
      update: {},
    });

    // Add to Mailgun suppressions
    const apiKey = process.env.MAILGUN_API_KEY;
    const domain = process.env.MAILGUN_DOMAIN;
    const endpoint = process.env.MAILGUN_ENDPOINT ?? "https://api.eu.mailgun.net";

    if (apiKey && domain) {
      const url = `${endpoint.replace(/\/$/, "")}/v3/${domain}/unsubscribes`;
      const basicAuth = Buffer.from(`api:${apiKey}`).toString("base64");
      const form = new FormData();
      form.append("address", email.toLowerCase());
      form.append("tag", "*");

      await fetch(url, {
        method: "POST",
        headers: { Authorization: `Basic ${basicAuth}` },
        body: form,
      }).catch((err) => {
        console.error("Mailgun unsubscribe suppression failed:", err);
      });
    }

    return { success: true };
  } catch (err) {
    console.error("unsubscribeEmail error:", err);
    return { success: false, error: err instanceof Error ? err.message : "Unknown error" };
  }
}
