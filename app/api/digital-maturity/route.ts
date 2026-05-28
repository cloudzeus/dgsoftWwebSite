import { NextResponse } from "next/server";
import { getMicrosoftGraphToken } from "@/lib/microsoft-graph";
import { sendMailgun } from "@/lib/mailgun";

const TIMEZONE = "Europe/Athens";
const SALES_NOTIFY_EMAIL = process.env.DIGITAL_MATURITY_NOTIFY_EMAIL || "sliontou@dgsoft.gr";
const HOST_UPN = process.env.DIGITAL_MATURITY_HOST_UPN || "sliontou@dgsoft.gr";
const MEETING_DURATION_MIN = 45;

type Body = {
  afm: string;
  name: string;
  email: string;
  phone: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  notes?: string;
  company: {
    name?: string | null;
    address?: string | null;
    city?: string | null;
    zip?: string | null;
    legalStatus?: string | null;
    kads?: { firm_act_descr: string; firm_act_kind: boolean }[];
  };
};

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function toGCalDate(iso: string): string {
  const d = new Date(iso);
  return (
    d.getUTCFullYear().toString() +
    pad(d.getUTCMonth() + 1) +
    pad(d.getUTCDate()) +
    "T" +
    pad(d.getUTCHours()) +
    pad(d.getUTCMinutes()) +
    "00Z"
  );
}

function formatGreekDateTime(iso: string): string {
  return new Date(iso).toLocaleString("el-GR", {
    timeZone: TIMEZONE,
    dateStyle: "full",
    timeStyle: "short",
  });
}

async function createCalendarEvent(
  token: string,
  hostUpn: string,
  payload: {
    subject: string;
    startLocal: string; // "YYYY-MM-DDTHH:mm:ss" in Europe/Athens
    endLocal: string;
    bodyHtml: string;
    guestEmail: string;
    guestName: string;
    location: string;
  }
) {
  const res = await fetch(
    `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(hostUpn)}/calendar/events`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        subject: payload.subject,
        body: { contentType: "HTML", content: payload.bodyHtml },
        start: { dateTime: payload.startLocal, timeZone: TIMEZONE },
        end: { dateTime: payload.endLocal, timeZone: TIMEZONE },
        location: { displayName: payload.location },
        attendees: [
          {
            emailAddress: { address: payload.guestEmail, name: payload.guestName },
            type: "required",
          },
          {
            emailAddress: { address: SALES_NOTIFY_EMAIL, name: "DGSOFT Sales" },
            type: "required",
          },
        ],
      }),
    }
  );
  const text = await res.text();
  if (!res.ok) throw new Error(`Graph create event failed: ${text}`);
  return JSON.parse(text) as {
    id: string;
    webLink?: string;
    start: { dateTime: string };
    end: { dateTime: string };
  };
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Body;
    const { afm, name, email, phone, date, time, notes, company } = body;

    if (!afm || !name || !email || !phone || !date || !time || !company?.name) {
      return NextResponse.json({ success: false, error: "Λείπουν στοιχεία." }, { status: 400 });
    }
    if (!/^\d{9}$/.test(afm)) {
      return NextResponse.json({ success: false, error: "Μη έγκυρο ΑΦΜ." }, { status: 400 });
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json({ success: false, error: "Μη έγκυρο email." }, { status: 400 });
    }

    // Build local datetime strings (Europe/Athens) for Graph
    const startLocal = `${date}T${time}:00`;
    const [hh, mm] = time.split(":").map(Number);
    const endMinutesTotal = hh * 60 + mm + MEETING_DURATION_MIN;
    const endH = Math.floor(endMinutesTotal / 60);
    const endM = endMinutesTotal % 60;
    const endLocal = `${date}T${pad(endH)}:${pad(endM)}:00`;

    // For UTC conversions (email links), interpret startLocal as Athens local.
    // Athens is UTC+2 or +3. Simpler: rely on Graph's response start (also local), and build ICS-style link using a "floating" Z by adjusting via Intl. For email gcal link, use the user's local YYYYMMDDTHHmmSS without Z (floating local) — Google interprets it as local time when ctz param is provided.
    const startGCalLocal =
      date.replace(/-/g, "") + "T" + time.replace(":", "") + "00";
    const endGCalLocal =
      date.replace(/-/g, "") + "T" + pad(endH) + pad(endM) + "00";

    // 1) Create calendar event on group-sales host calendar
    const subject = `Αξιολόγηση Ψηφιακής Ωριμότητας — ${company.name} (${name})`;
    const location = "Τηλεφωνική επικοινωνία";

    const kadsHtml =
      (company.kads ?? [])
        .filter((k) => k.firm_act_kind)
        .slice(0, 3)
        .map((k) => `<li>${k.firm_act_descr}</li>`)
        .join("") || "";

    const eventBodyHtml = `
      <div style="font-family: Arial, sans-serif; font-size: 14px; color: #111;">
        <h3 style="margin:0 0 8px;">Αίτημα Αξιολόγησης Ψηφιακής Ωριμότητας</h3>
        <p style="margin:0 0 12px;">Νέο αίτημα από την ιστοσελίδα dgsoft.gr</p>

        <h4 style="margin:16px 0 6px;">Στοιχεία Επικοινωνίας</h4>
        <ul style="margin:0; padding-left:18px;">
          <li><strong>Ονοματεπώνυμο:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Τηλέφωνο:</strong> ${phone}</li>
        </ul>

        <h4 style="margin:16px 0 6px;">Στοιχεία Επιχείρησης</h4>
        <ul style="margin:0; padding-left:18px;">
          <li><strong>ΑΦΜ:</strong> ${afm}</li>
          <li><strong>Επωνυμία:</strong> ${company.name ?? "-"}</li>
          ${company.address ? `<li><strong>Διεύθυνση:</strong> ${company.address}${company.zip ? ", " + company.zip : ""}${company.city ? ", " + company.city : ""}</li>` : ""}
          ${company.legalStatus ? `<li><strong>Νομική μορφή:</strong> ${company.legalStatus}</li>` : ""}
        </ul>
        ${kadsHtml ? `<h4 style="margin:16px 0 6px;">Κύρια Δραστηριότητα</h4><ul style="margin:0; padding-left:18px;">${kadsHtml}</ul>` : ""}

        ${notes ? `<h4 style="margin:16px 0 6px;">Μήνυμα Πελάτη</h4><p style="margin:0; white-space:pre-wrap;">${notes}</p>` : ""}
      </div>
    `;

    let eventId: string | undefined;
    let eventWebLink: string | undefined;
    let calendarError: string | undefined;

    try {
      const token = await getMicrosoftGraphToken();
      const ev = await createCalendarEvent(token, HOST_UPN, {
        subject,
        startLocal,
        endLocal,
        bodyHtml: eventBodyHtml,
        guestEmail: email,
        guestName: name,
        location,
      });
      eventId = ev.id;
      eventWebLink = ev.webLink;
    } catch (e) {
      console.error("digital-maturity calendar create failed", e);
      calendarError = e instanceof Error ? e.message : "Calendar error";
    }

    // 2) Build "Add to calendar" links for the client email
    const gcalText = encodeURIComponent(subject);
    const gcalDetails = encodeURIComponent(
      `Αξιολόγηση Ψηφιακής Ωριμότητας με την ομάδα της DGSOFT.\n\nΘα επικοινωνήσουμε μαζί σας στο ${phone}.\n\nΕπιχείρηση: ${company.name}\nΑΦΜ: ${afm}`
    );
    const gcalLocation = encodeURIComponent(location);
    // Use ctz so Google interprets the floating local times as Europe/Athens
    const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${gcalText}&dates=${startGCalLocal}/${endGCalLocal}&details=${gcalDetails}&location=${gcalLocation}&ctz=${encodeURIComponent(TIMEZONE)}`;

    const outlookStart = encodeURIComponent(startLocal);
    const outlookEnd = encodeURIComponent(endLocal);
    const outlookUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${gcalText}&body=${gcalDetails}&location=${gcalLocation}&startdt=${outlookStart}&enddt=${outlookEnd}&allday=false&path=/calendar/action/compose&rru=addevent`;

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dgsoft.gr";
    const prettyDateTime = formatGreekDateTime(startLocal);

    // 3) Send confirmation email to client
    const clientHtml = `
<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0; padding:0; background:#f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6; padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px; background:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,0.06);">
        <tr><td style="background:linear-gradient(135deg, #0a0f18 0%, #1a2332 100%); padding:36px 32px; color:#ffffff;">
          <div style="font-size:11px; letter-spacing:2px; text-transform:uppercase; color:#FFD700; margin-bottom:8px;">DGSOFT</div>
          <h1 style="margin:0; font-size:24px; line-height:1.3; color:#ffffff; font-weight:700;">Λάβαμε το αίτημά σας ✓</h1>
          <p style="margin:8px 0 0; color:#a0aec0; font-size:14px;">Αξιολόγηση Ψηφιακής Ωριμότητας</p>
        </td></tr>

        <tr><td style="padding:32px;">
          <p style="margin:0 0 16px; font-size:15px; color:#111827; line-height:1.6;">
            Αγαπητέ/ή <strong>${name}</strong>,
          </p>
          <p style="margin:0 0 24px; font-size:15px; color:#374151; line-height:1.7;">
            Σας ευχαριστούμε για το ενδιαφέρον σας. Η ομάδα της DGSOFT θα επικοινωνήσει μαζί σας στο τηλέφωνο που μας δώσατε, την ημέρα και ώρα που επιλέξατε, για την ολοκληρωμένη αξιολόγηση ψηφιακής ωριμότητας της επιχείρησής σας.
          </p>

          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb; border-radius:12px; padding:20px; border:1px solid #e5e7eb;">
            <tr><td>
              <div style="font-size:11px; text-transform:uppercase; letter-spacing:1.5px; color:#6b7280; margin-bottom:12px; font-weight:600;">📅 Λεπτομέρειες Ραντεβού</div>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr><td style="padding:6px 0; color:#6b7280; font-size:13px; width:130px;">Ημερομηνία & ώρα</td><td style="padding:6px 0; color:#111827; font-size:14px; font-weight:600;">${prettyDateTime}</td></tr>
                <tr><td style="padding:6px 0; color:#6b7280; font-size:13px;">Επιχείρηση</td><td style="padding:6px 0; color:#111827; font-size:14px;">${company.name}</td></tr>
                <tr><td style="padding:6px 0; color:#6b7280; font-size:13px;">ΑΦΜ</td><td style="padding:6px 0; color:#111827; font-size:14px;">${afm}</td></tr>
                <tr><td style="padding:6px 0; color:#6b7280; font-size:13px;">Τηλέφωνο</td><td style="padding:6px 0; color:#111827; font-size:14px;">${phone}</td></tr>
                <tr><td style="padding:6px 0; color:#6b7280; font-size:13px;">Διάρκεια</td><td style="padding:6px 0; color:#111827; font-size:14px;">~${MEETING_DURATION_MIN} λεπτά</td></tr>
              </table>
            </td></tr>
          </table>

          <div style="margin:28px 0 8px; font-size:13px; color:#6b7280; text-align:center;">Προσθέστε το ραντεβού στο ημερολόγιό σας</div>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td align="center" style="padding:0 4px;">
                <a href="${gcalUrl}" style="display:inline-block; background:#FFD700; color:#0a0f18; text-decoration:none; padding:12px 24px; border-radius:999px; font-weight:700; font-size:14px;">Google Calendar</a>
              </td>
              <td align="center" style="padding:0 4px;">
                <a href="${outlookUrl}" style="display:inline-block; background:#0a0f18; color:#ffffff; text-decoration:none; padding:12px 24px; border-radius:999px; font-weight:700; font-size:14px;">Outlook</a>
              </td>
            </tr>
          </table>

          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:32px; border-top:1px solid #e5e7eb; padding-top:24px;">
            <tr><td>
              <div style="font-size:11px; text-transform:uppercase; letter-spacing:1.5px; color:#6b7280; margin-bottom:12px; font-weight:600;">Στοιχεία Επικοινωνίας DGSOFT</div>
              <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px; color:#374151;">
                <tr>
                  <td style="padding:4px 0; width:24px;">📞</td>
                  <td style="padding:4px 0;"><a href="tel:+302105711581" style="color:#0a0f18; text-decoration:none; font-weight:600;">210 5711581</a></td>
                </tr>
                <tr>
                  <td style="padding:4px 0;">✉️</td>
                  <td style="padding:4px 0;"><a href="mailto:info@dgsoft.gr" style="color:#0a0f18; text-decoration:none; font-weight:600;">info@dgsoft.gr</a></td>
                </tr>
                <tr>
                  <td style="padding:4px 0;">📍</td>
                  <td style="padding:4px 0;">Λεωφ. Κηφισού 48, Περιστέρι – 121 33, 1ος όροφος</td>
                </tr>
                <tr>
                  <td style="padding:4px 0;">🌐</td>
                  <td style="padding:4px 0;"><a href="${siteUrl}" style="color:#0a0f18; text-decoration:none; font-weight:600;">dgsoft.gr</a></td>
                </tr>
              </table>
            </td></tr>
          </table>

          <p style="margin:24px 0 0; font-size:13px; color:#6b7280; line-height:1.6;">
            Αν χρειαστεί να αλλάξετε την ώρα ή να ακυρώσετε το ραντεβού, απαντήστε σε αυτό το email ή καλέστε μας.
          </p>
        </td></tr>

        <tr><td style="background:#0a0f18; padding:24px 32px; text-align:center; color:#9ca3af; font-size:12px;">
          <strong style="color:#ffffff;">DGSOFT</strong> — Επίσημος Πιστοποιημένος Συνεργάτης ENTERSOFTONE<br/>
          <a href="${siteUrl}" style="color:#FFD700; text-decoration:none;">${siteUrl}</a>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;

    const internalDomain = process.env.MAILGUN_DOMAIN ?? "dgsmart.gr";
    const clientDomain = process.env.MAILGUN_DOMAIN_DGSOFT ?? "dgsoft.gr";
    const clientFromAddress = `info@${clientDomain}`;
    const internalFromAddress = `connect@${internalDomain}`;

    const [clientMail, salesMail] = await Promise.all([
      sendMailgun({
        from: clientFromAddress,
        fromName: "DGSOFT",
        to: email,
        subject: `Επιβεβαίωση Ραντεβού — Αξιολόγηση Ψηφιακής Ωριμότητας`,
        html: clientHtml,
        replyTo: SALES_NOTIFY_EMAIL,
      }),
      sendMailgun({
        from: internalFromAddress,
        fromName: "DGSOFT Website",
        to: SALES_NOTIFY_EMAIL,
        subject: `[Νέο αίτημα] Αξιολόγηση Ψηφιακής Ωριμότητας — ${company.name}`,
        html: `
<!DOCTYPE html><html><body style="font-family: Arial, sans-serif; background:#f3f4f6; padding:24px;">
  <div style="max-width:640px; margin:0 auto; background:#fff; border-radius:12px; padding:28px; box-shadow:0 2px 8px rgba(0,0,0,0.05);">
    <h2 style="margin:0 0 6px; color:#0a0f18;">Νέο αίτημα από την ιστοσελίδα</h2>
    <p style="margin:0 0 20px; color:#6b7280; font-size:14px;">Αξιολόγηση Ψηφιακής Ωριμότητας</p>

    <h3 style="margin:16px 0 8px; color:#111;">📅 Προτεινόμενο ραντεβού</h3>
    <p style="margin:0 0 16px; font-size:16px; color:#0a0f18; font-weight:600;">${prettyDateTime}</p>

    <h3 style="margin:16px 0 8px; color:#111;">👤 Στοιχεία Επικοινωνίας</h3>
    <table cellpadding="0" cellspacing="0" style="border-collapse:collapse; font-size:14px;">
      <tr><td style="padding:4px 12px 4px 0; color:#6b7280;">Ονοματεπώνυμο</td><td style="padding:4px 0; color:#111; font-weight:600;">${name}</td></tr>
      <tr><td style="padding:4px 12px 4px 0; color:#6b7280;">Email</td><td style="padding:4px 0;"><a href="mailto:${email}">${email}</a></td></tr>
      <tr><td style="padding:4px 12px 4px 0; color:#6b7280;">Τηλέφωνο</td><td style="padding:4px 0;"><a href="tel:${phone}">${phone}</a></td></tr>
    </table>

    <h3 style="margin:20px 0 8px; color:#111;">🏢 Στοιχεία Επιχείρησης</h3>
    <table cellpadding="0" cellspacing="0" style="border-collapse:collapse; font-size:14px;">
      <tr><td style="padding:4px 12px 4px 0; color:#6b7280;">ΑΦΜ</td><td style="padding:4px 0; color:#111; font-weight:600;">${afm}</td></tr>
      <tr><td style="padding:4px 12px 4px 0; color:#6b7280;">Επωνυμία</td><td style="padding:4px 0; color:#111;">${company.name}</td></tr>
      ${company.address ? `<tr><td style="padding:4px 12px 4px 0; color:#6b7280;">Διεύθυνση</td><td style="padding:4px 0; color:#111;">${company.address}${company.zip ? ", " + company.zip : ""}${company.city ? ", " + company.city : ""}</td></tr>` : ""}
      ${company.legalStatus ? `<tr><td style="padding:4px 12px 4px 0; color:#6b7280;">Νομική μορφή</td><td style="padding:4px 0; color:#111;">${company.legalStatus}</td></tr>` : ""}
    </table>

    ${notes ? `<h3 style="margin:20px 0 8px; color:#111;">💬 Μήνυμα Πελάτη</h3><div style="background:#f9fafb; border-left:3px solid #FFD700; padding:12px 16px; border-radius:6px; font-size:14px; white-space:pre-wrap; color:#374151;">${notes}</div>` : ""}

    ${eventWebLink ? `<p style="margin:24px 0 0;"><a href="${eventWebLink}" style="display:inline-block; background:#0a0f18; color:#fff; padding:10px 20px; border-radius:8px; text-decoration:none; font-size:14px; font-weight:600;">Άνοιγμα στο Outlook</a></p>` : ""}
    ${calendarError ? `<p style="margin:16px 0 0; color:#b91c1c; font-size:13px;">⚠️ Σφάλμα δημιουργίας calendar event: ${calendarError}</p>` : ""}
  </div>
</body></html>`,
        replyTo: email,
      }),
    ]);

    return NextResponse.json({
      success: true,
      eventId,
      eventWebLink,
      clientEmailSent: clientMail.success,
      salesEmailSent: salesMail.success,
      calendarError,
    });
  } catch (e) {
    console.error("digital-maturity submit error", e);
    const message = e instanceof Error ? e.message : "Server error";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
