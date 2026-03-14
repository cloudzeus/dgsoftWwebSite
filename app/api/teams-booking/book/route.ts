import { NextResponse } from "next/server";
import { getMicrosoftGraphToken, getAvailability, createOnlineMeeting } from "@/lib/microsoft-graph";
import { sendMailgun } from "@/lib/mailgun";
import { getTeamsBookingMembers } from "@/lib/teams-booking-config";

const TIMEZONE = "Europe/Athens";

function formatDateTime(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleString("el-GR", {
    timeZone: TIMEZONE,
    dateStyle: "full",
    timeStyle: "short",
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      startTime,
      endTime,
      guestEmail,
      guestName,
      subject,
      hostUserPrincipalName,
      message,
    } = body as {
      startTime: string;
      endTime: string;
      guestEmail: string;
      guestName?: string;
      subject?: string;
      hostUserPrincipalName: string;
      message?: string;
    };

    if (!startTime || !endTime || !guestEmail?.trim() || !hostUserPrincipalName?.trim()) {
      return NextResponse.json(
        { error: "startTime, endTime, guestEmail, and hostUserPrincipalName are required" },
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

    const allowed = members.some(
      (m) => m.userPrincipalName.toLowerCase() === hostUserPrincipalName.trim().toLowerCase()
    );
    if (!allowed) {
      return NextResponse.json(
        { error: "Selected host is not in the responsible team list (TEAMS_BOOKING_EMAILS)." },
        { status: 400 }
      );
    }

    const token = await getMicrosoftGraphToken();
    const slots = await getAvailability(token, members, startTime, endTime);
    const hostSlot = slots.find(
      (s) => s.upn.toLowerCase() === hostUserPrincipalName.trim().toLowerCase() && s.available
    );
    if (!hostSlot) {
      return NextResponse.json(
        { error: "Selected host is not available at the chosen time" },
        { status: 400 }
      );
    }

    const meetingTitle = subject?.trim() || `Συνάντηση DGSMART με ${guestName || guestEmail}`;
    const hostUpn = hostUserPrincipalName.trim();
    const result = await createOnlineMeeting(token, hostUpn, {
      subject: meetingTitle,
      startTime,
      endTime,
      guestEmail: guestEmail.trim(),
      guestName: guestName?.trim() || undefined,
      body: message?.trim() || undefined,
    });

    const domain = process.env.MAILGUN_DOMAIN ?? "dgsmart.gr";
    const fromName = "DGSMART — DGSOFT";
    const fromAddress = `connect@${domain}`;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dgsoft.gr";

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f5f5f5;">
  <div style="background: #0a0f18; border-radius: 16px; padding: 32px; color: #fff;">
    <h1 style="color: #fff; font-size: 22px; margin-bottom: 8px;">Η συνάντησή σας έχει οριστεί</h1>
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
      Μπορείτε να συμμετάσχετε κάνοντας κλικ στον σύνδεσμο παραπάνω ή να ανοίξετε το Microsoft Teams και να εν join με τον κωδικό της συνάντησης.
    </p>
    <p style="color: #718096; font-size: 13px; margin-top: 16px;">
      Με εκτίμηση,<br/><strong style="color: #fff;">Ομάδα DGSMART — DGSOFT</strong><br/>
      <a href="${siteUrl}" style="color: #FFD700; text-decoration: none;">${siteUrl}</a>
    </p>
  </div>
</body>
</html>`;

    const emailResult = await sendMailgun({
      from: fromAddress,
      fromName,
      to: guestEmail.trim(),
      subject: `Συνάντηση Teams: ${meetingTitle}`,
      html,
      replyTo: fromAddress,
    });

    if (!emailResult.success) {
      console.error("Mailgun send failed after creating meeting:", emailResult.error);
      return NextResponse.json({
        success: true,
        joinUrl: result.joinUrl,
        eventId: result.eventId,
        subject: result.subject,
        start: result.start,
        end: result.end,
        emailSent: false,
        emailError: emailResult.error,
      });
    }

    return NextResponse.json({
      success: true,
      joinUrl: result.joinUrl,
      eventId: result.eventId,
      subject: result.subject,
      start: result.start,
      end: result.end,
      emailSent: true,
    });
  } catch (e) {
    console.error("Teams booking book error:", e);
    const message = e instanceof Error ? e.message : "Booking failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
