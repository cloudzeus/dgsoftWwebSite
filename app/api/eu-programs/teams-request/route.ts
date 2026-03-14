import { NextResponse } from "next/server";
import { getMicrosoftGraphToken, getAvailability, createOnlineMeeting } from "@/lib/microsoft-graph";
import { sendMailgun } from "@/lib/mailgun";
import { getTeamsBookingMembers } from "@/lib/teams-booking-config";

const TIMEZONE = "Europe/Athens";
const DURATION_MINUTES = 30;

/** contactTime → [hour, minute] for start. */
const SLOT_START: Record<string, [number, number]> = {
  morning: [9, 0],
  afternoon: [12, 0],
  evening: [15, 0],
};

function formatDateTime(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleString("el-GR", {
    timeZone: TIMEZONE,
    dateStyle: "full",
    timeStyle: "short",
  });
}

/** Next weekday from date (skip weekend). */
function nextWeekday(d: Date): Date {
  const next = new Date(d);
  next.setDate(d.getDate() + 1);
  if (next.getDay() === 0) next.setDate(next.getDate() + 1);
  if (next.getDay() === 6) next.setDate(next.getDate() + 2);
  return next;
}

/** Build start/end for a given date and contactTime. */
function getSlotForDate(date: Date, contactTime: string): { start: string; end: string } {
  const [hour, minute] = SLOT_START[contactTime] ?? [9, 0];
  const start = new Date(date);
  start.setHours(hour, minute, 0, 0);
  const end = new Date(start);
  end.setMinutes(end.getMinutes() + DURATION_MINUTES);
  return { start: start.toISOString(), end: end.toISOString() };
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      email,
      companyName,
      vat,
      address,
      zipCode,
      phone,
      contactTime,
    } = body as {
      email: string;
      companyName?: string;
      vat?: string;
      address?: string;
      zipCode?: string;
      phone?: string;
      contactTime?: string;
    };

    if (!email?.trim()) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const members = getTeamsBookingMembers();
    if (members.length === 0) {
      return NextResponse.json(
        { error: "No team emails configured. Set TEAMS_BOOKING_EMAILS in .env." },
        { status: 503 }
      );
    }

    const slot = SLOT_START[contactTime ?? "morning"] ?? [9, 0];
    let candidate = new Date();
    candidate.setHours(slot[0], slot[1], 0, 0);
    if (candidate.getTime() <= Date.now()) candidate = nextWeekday(candidate);
    while (candidate.getDay() === 0 || candidate.getDay() === 6) {
      candidate.setDate(candidate.getDate() + 1);
    }

    const token = await getMicrosoftGraphToken();
    let hostUpn: string | null = null;
    let startTime: string | null = null;
    let endTime: string | null = null;

    for (let i = 0; i < 5; i++) {
      const { start, end } = getSlotForDate(candidate, contactTime ?? "morning");
      const slots = await getAvailability(token, members, start, end);
      const available = slots.find((s) => s.available);
      if (available) {
        hostUpn = available.upn;
        startTime = start;
        endTime = end;
        break;
      }
      candidate = nextWeekday(candidate);
    }

    if (!hostUpn || !startTime || !endTime) {
      return NextResponse.json(
        { error: "Δεν βρέθηκε διαθεσιμότητα τις επόμενες μέρες. Παρακαλώ δοκιμάστε τη σελίδα Κλείστε ραντεβού για να επιλέξετε ημερομηνία και ώρα." },
        { status: 503 }
      );
    }

    const company = (companyName ?? "").trim() || "Εταιρεία";
    const meetingTitle = `Ευρωπαϊκά Προγράμματα — ${company}`;
    const bodyHtml = [
      companyName && `Εταιρεία: ${companyName}`,
      vat && `ΑΦΜ: ${vat}`,
      address && `Διεύθυνση: ${address}`,
      zipCode && `Τ.Κ.: ${zipCode}`,
      phone && `Τηλ.: ${phone}`,
      email && `Email: ${email}`,
      "Αίτημα από φόρμα Ευρωπαϊκών Προγραμμάτων (Check your eligibility).",
    ]
      .filter(Boolean)
      .join("<br/>");

    const result = await createOnlineMeeting(token, hostUpn, {
      subject: meetingTitle,
      startTime,
      endTime,
      guestEmail: email.trim(),
      guestName: companyName?.trim() || email.trim(),
      body: bodyHtml,
    });

    const domain = process.env.MAILGUN_DOMAIN ?? "dgsmart.gr";
    const fromName = "DGSMART — Ευρωπαϊκά Προγράμματα";
    const fromAddress = `connect@${domain}`;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dgsoft.gr";

    const emailHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f5f5f5;">
  <div style="background: #0a0f18; border-radius: 16px; padding: 32px; color: #fff;">
    <h1 style="color: #fff; font-size: 22px; margin-bottom: 8px;">Η συνάντησή σας για Ευρωπαϊκά Προγράμματα έχει οριστεί</h1>
    <p style="color: #a0aec0; font-size: 15px; line-height: 1.6; margin-bottom: 24px;">
      Οι λεπτομέρειες της Microsoft Teams συνάντησης:
    </p>
    <table style="width: 100%; border-collapse: collapse;">
      <tr><td style="padding: 8px 0; color: #718096; font-size: 13px;">Θέμα</td></tr>
      <tr><td style="padding: 0 0 16px; color: #fff; font-size: 15px;">${meetingTitle}</td></tr>
      <tr><td style="padding: 8px 0; color: #718096; font-size: 13px;">Ημερομηνία & ώρα</td></tr>
      <tr><td style="padding: 0 0 16px; color: #fff; font-size: 15px;">${formatDateTime(result.start)}</td></tr>
      <tr><td style="padding: 8px 0; color: #718096; font-size: 13px;">Σύνδεσμος Teams</td></tr>
      <tr><td style="padding: 0 0 24px;"><a href="${result.joinUrl}" style="color: #FFD700; text-decoration: none; font-weight: 600; word-break: break-all;">${result.joinUrl}</a></td></tr>
    </table>
    <p style="color: #718096; font-size: 13px; margin-top: 24px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 24px;">
      Μπορείτε να συμμετάσχετε κάνοντας κλικ στον σύνδεσμο παραπάνω.
    </p>
    <p style="color: #718096; font-size: 13px; margin-top: 16px;">
      Με εκτίμηση,<br/><strong style="color: #fff;">Ομάδα DGSMART — DGSOFT</strong><br/>
      <a href="${siteUrl}" style="color: #FFD700; text-decoration: none;">${siteUrl}</a>
    </p>
  </div>
</body>
</html>`;

    await sendMailgun({
      from: fromAddress,
      fromName,
      to: email.trim(),
      subject: `Συνάντηση Teams: ${meetingTitle}`,
      html: emailHtml,
      replyTo: fromAddress,
    });

    return NextResponse.json({
      success: true,
      joinUrl: result.joinUrl,
      subject: result.subject,
      start: result.start,
      end: result.end,
    });
  } catch (e) {
    console.error("EU programs teams-request error:", e);
    const message = e instanceof Error ? e.message : "Request failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
