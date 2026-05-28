import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { sendMailgun } from "@/lib/mailgun";

const LOGO_URL =
  "https://dgsmart.b-cdn.net/newsletter/newsletter-1773404552985-q91g8r.webp";

function buildThankYouHtml(name: string | null, unsubscribeUrl: string): string {
  const greeting = name ? `Γεια σας, ${name}!` : "Γεια σας!";
  return `<!DOCTYPE html>
<html lang="el">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Ευχαριστούμε για την εγγραφή σας</title>
</head>
<body style="margin:0;padding:0;background:#f4f5f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#0a0f18;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f4f5f7;padding:40px 20px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 8px 32px rgba(10,15,24,0.08);">
        <tr>
          <td style="background:linear-gradient(135deg,#0a0f18 0%,#1a2236 100%);padding:40px 40px 32px;text-align:left;">
            <img src="${LOGO_URL}" alt="DGSOFT" style="height:36px;display:block;margin-bottom:24px;" />
            <h1 style="margin:0;color:#ffffff;font-size:26px;font-weight:700;line-height:1.3;">
              Ευχαριστούμε για την εγγραφή σας!
            </h1>
            <p style="margin:12px 0 0;color:#a8b1c2;font-size:15px;line-height:1.6;">
              Είστε επίσημα μέρος της κοινότητάς μας.
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding:36px 40px 8px;">
            <p style="margin:0 0 16px;font-size:16px;line-height:1.7;color:#0a0f18;">
              ${greeting}
            </p>
            <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#3a4256;">
              Σας ευχαριστούμε που εγγραφήκατε στο newsletter της <strong>DGSOFT</strong>.
              Από εδώ και στο εξής θα λαμβάνετε τα τελευταία νέα μας για την ψηφιακή
              μεταμόρφωση, νέες υπηρεσίες, χρηματοδοτικά προγράμματα και επιλεγμένο
              περιεχόμενο — χωρίς spam.
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding:8px 40px 24px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f7f8fb;border:1px solid #e6e9ef;border-radius:14px;">
              <tr>
                <td style="padding:20px 22px;">
                  <p style="margin:0 0 6px;font-size:13px;font-weight:700;letter-spacing:0.4px;text-transform:uppercase;color:#e63946;">
                    Σεβόμαστε την ιδιωτικότητά σας
                  </p>
                  <p style="margin:0;font-size:14px;line-height:1.7;color:#3a4256;">
                    Το email σας μένει αυστηρά στα συστήματά μας. <strong>Δεν πωλούμε,
                    δεν μοιραζόμαστε και δεν παραχωρούμε</strong> τα στοιχεία σας σε τρίτους.
                    Χρησιμοποιούνται αποκλειστικά για την αποστολή του newsletter μας
                    και διαχειρίζονται σύμφωνα με τον GDPR.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:8px 40px 32px;">
            <p style="margin:0 0 20px;font-size:14px;line-height:1.7;color:#5a6478;">
              Μπορείτε ανά πάσα στιγμή να απεγγραφείτε με ένα κλικ — χωρίς ερωτήσεις,
              χωρίς διαδικασίες.
            </p>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="border-radius:999px;background:#0a0f18;">
                  <a href="${unsubscribeUrl}" style="display:inline-block;padding:12px 26px;color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;border-radius:999px;">
                    Κατάργηση εγγραφής
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 40px 36px;border-top:1px solid #eef0f4;">
            <p style="margin:0 0 6px;font-size:13px;line-height:1.6;color:#5a6478;">
              Με εκτίμηση,
            </p>
            <p style="margin:0 0 14px;font-size:14px;line-height:1.6;color:#0a0f18;font-weight:600;">
              Η ομάδα της DGSOFT
            </p>
            <p style="margin:0;font-size:12px;line-height:1.6;color:#8a93a5;">
              <a href="https://dgsoft.gr" style="color:#e63946;text-decoration:none;">dgsoft.gr</a>
              &nbsp;·&nbsp;
              <a href="https://dgsoft.gr/privacy-policy" style="color:#8a93a5;text-decoration:underline;">Πολιτική απορρήτου</a>
              &nbsp;·&nbsp;
              <a href="${unsubscribeUrl}" style="color:#8a93a5;text-decoration:underline;">Απεγγραφή</a>
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function buildThankYouText(name: string | null, unsubscribeUrl: string): string {
  return [
    name ? `Γεια σας, ${name}!` : "Γεια σας!",
    "",
    "Σας ευχαριστούμε που εγγραφήκατε στο newsletter της DGSOFT.",
    "",
    "Σεβόμαστε την ιδιωτικότητά σας: το email σας δεν πωλείται, δεν μοιράζεται και δεν παραχωρείται σε τρίτους. Χρησιμοποιείται αποκλειστικά για την αποστολή του newsletter μας, σύμφωνα με τον GDPR.",
    "",
    `Απεγγραφή ανά πάσα στιγμή: ${unsubscribeUrl}`,
    "",
    "— Η ομάδα της DGSOFT",
    "https://dgsoft.gr",
  ].join("\n");
}

function getClientIp(req: Request): string | null {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]?.trim() || null;
  return (
    req.headers.get("x-real-ip") ||
    req.headers.get("cf-connecting-ip") ||
    null
  );
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = String(body?.email ?? "").trim().toLowerCase();
    const name = body?.name ? String(body.name).trim().slice(0, 255) : null;
    const termsAccepted = Boolean(body?.termsAccepted);

    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Μη έγκυρο email" }, { status: 400 });
    }
    if (!termsAccepted) {
      return NextResponse.json(
        { error: "Πρέπει να αποδεχτείτε τους όρους" },
        { status: 400 }
      );
    }

    const ipAddress = getClientIp(req);
    const userAgent = req.headers.get("user-agent")?.slice(0, 512) || null;

    const sub = await (prisma as any).newsletterSubscriber.upsert({
      where: { email },
      update: { name, termsAccepted, ipAddress, userAgent, source: "footer" },
      create: {
        email,
        name,
        termsAccepted,
        ipAddress,
        userAgent,
        source: "footer",
      },
    });

    const siteUrl = (
      process.env.NEXT_PUBLIC_SITE_URL || "https://dgsoft.gr"
    ).replace(/\/$/, "");
    const token = Buffer.from(email, "utf8").toString("base64url");
    const unsubscribeUrl = `${siteUrl}/newsletter/unsubscribe?t=${token}`;

    sendMailgun({
      to: email,
      subject: "Καλώς ήρθατε στο newsletter της DGSOFT",
      html: buildThankYouHtml(name, unsubscribeUrl),
      text: buildThankYouText(name, unsubscribeUrl),
      fromName: "DGSOFT",
      from: process.env.NEWSLETTER_FROM_EMAIL,
      replyTo: process.env.NEWSLETTER_REPLY_TO,
    }).catch((err) =>
      console.error("Newsletter thank-you email error:", err)
    );

    return NextResponse.json({ success: true, id: sub.id });
  } catch (e: any) {
    console.error("Newsletter subscribe error:", e);
    return NextResponse.json({ error: "Σφάλμα διακομιστή" }, { status: 500 });
  }
}
