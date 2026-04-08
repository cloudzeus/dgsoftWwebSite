import { NEWSLETTER_DYNAMIC_CONTENT_PLACEHOLDER } from "@/lib/newsletter-dynamic-placeholder";

export type NewsletterBaseTemplatePreset = {
  key: string;
  name: string;
  description: string;
  htmlDocument: string;
};

/**
 * Email-safe shells: only <table><tr><td>, <a>, <img>, <br/> — no div/flex/p/span.
 * Inline CSS only; no Tailwind. Inter via Google Fonts when the client allows.
 */
const FONT =
  "font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";

const C = {
  black: "#0a0a0a",
  void: "#0d0d0d",
  panel: "#101010",
  lift: "#141414",
  line: "#262626",
  lineSoft: "#1f1f1f",
  gray: "#1a1a1a",
  muted: "#888888",
  soft: "#a3a3a3",
  white: "#ffffff",
  accent: "#e60000",
  redDark: "#8a0000",
  redLight: "#ff4d4d",
} as const;

const FONT_LINK = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">`;

const HEAD = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
${FONT_LINK}
</head>`;

function templateLedger(): string {
  const ph = NEWSLETTER_DYNAMIC_CONTENT_PLACEHOLDER;
  return `${HEAD}
<body style="margin:0;padding:0;background-color:${C.black};${FONT};-webkit-text-size-adjust:100%;">
<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin:0;padding:0;background-color:${C.black};">
<tr>
<td align="center" style="padding:28px 14px;">
<table role="presentation" width="600" border="0" cellspacing="0" cellpadding="0" style="width:100%;max-width:600px;border-collapse:collapse;border-spacing:0;">
<tr>
<td style="height:5px;line-height:5px;font-size:0;background-color:${C.accent};background-image:linear-gradient(90deg,${C.redDark},${C.accent} 45%,${C.redLight});">&nbsp;</td>
</tr>
<tr>
<td style="background-color:${C.panel};border:1px solid ${C.line};border-top:0;padding:0;">
<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
<tr>
<td style="padding:26px 28px 22px 28px;border-bottom:1px solid ${C.lineSoft};">
<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
<tr>
<td valign="middle" align="left" style="width:55%;">
<a href="#" style="text-decoration:none;">
<img src="{{logo_url}}" alt="{{company_name}}" width="160" border="0" style="display:block;max-width:160px;height:auto;" />
</a>
</td>
<td valign="middle" align="right" style="width:45%;">
<a href="{{facebook_url}}" style="display:inline-block;margin:2px 0 2px 6px;padding:9px 12px;background-color:${C.gray};border:1px solid ${C.line};color:${C.soft};font-size:9px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;text-decoration:none;">Fb</a>
<a href="{{instagram_url}}" style="display:inline-block;margin:2px 0 2px 6px;padding:9px 12px;background-color:${C.gray};border:1px solid ${C.line};color:${C.soft};font-size:9px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;text-decoration:none;">Ig</a>
<a href="{{linkedin_url}}" style="display:inline-block;margin:2px 0 2px 6px;padding:9px 12px;background-color:${C.gray};border:1px solid ${C.line};color:${C.soft};font-size:9px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;text-decoration:none;">In</a>
<a href="{{x_url}}" style="display:inline-block;margin:2px 0 2px 6px;padding:9px 12px;background-color:${C.gray};border:1px solid ${C.line};color:${C.soft};font-size:9px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;text-decoration:none;">X</a>
</td>
</tr>
</table>
<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
<tr>
<td style="padding-top:20px;">
<table role="presentation" border="0" cellspacing="0" cellpadding="0">
<tr>
<td width="40" style="width:40px;background-color:${C.accent};height:2px;line-height:2px;font-size:0;">&nbsp;</td>
<td style="padding-left:14px;color:${C.muted};font-size:11px;font-weight:600;letter-spacing:0.22em;text-transform:uppercase;">Newsletter</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td style="padding:26px 28px 32px 28px;">
<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:${C.lift};border:1px solid ${C.line};">
<tr>
<td style="padding:36px 22px;text-align:center;min-height:260px;" valign="middle" align="center">
<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td align="center" style="color:${C.muted};font-size:12px;font-family:ui-monospace,Menlo,Consolas,monospace;">${ph}</td></tr></table>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td style="padding:0 28px 36px 28px;">
<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="border-top:1px solid ${C.lineSoft};">
<tr>
<td style="padding-top:28px;">
<table role="presentation" border="0" cellspacing="0" cellpadding="0">
<tr>
<td width="40" style="width:40px;background-color:${C.accent};height:2px;line-height:2px;font-size:0;">&nbsp;</td>
<td style="padding-left:14px;color:${C.muted};font-size:10px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;">Thanks for reading</td>
</tr>
</table>
<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
<tr><td style="padding:12px 0 0 0;color:${C.white};font-size:26px;font-weight:800;letter-spacing:-0.03em;line-height:1.15;">{{company_name}}</td></tr>
<tr><td style="padding:10px 0 0 0;color:${C.muted};font-size:15px;line-height:1.65;">{{tagline}}</td></tr>
</table>
<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top:24px;background-color:${C.void};border:1px solid ${C.line};">
<tr>
<td style="padding:20px 22px;">
<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
<tr><td style="color:${C.soft};font-size:13px;line-height:1.6;font-weight:500;">{{address_line}}</td></tr>
<tr><td style="padding:14px 0 0 0;">
<a href="mailto:{{contact_email}}" style="color:${C.accent};font-size:15px;font-weight:700;text-decoration:none;border-bottom:2px solid ${C.redDark};">{{contact_email}}</a>
</td></tr>
</table>
</td>
</tr>
</table>
<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"><tr>
<td style="padding:26px 0 0 0;font-size:13px;line-height:1.8;color:${C.muted};">
<a href="{{privacy_policy_url}}" style="color:${C.muted};">Privacy policy</a>
<font color="${C.line}">&nbsp;&nbsp;·&nbsp;&nbsp;</font>
<a href="{{terms_url}}" style="color:${C.muted};">Terms</a>
<font color="${C.line}">&nbsp;&nbsp;·&nbsp;&nbsp;</font>
<a href="{{unsubscribe_url}}" style="color:${C.accent};font-weight:700;text-decoration:none;">Unsubscribe</a>
</td>
</tr></table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</body>
</html>`;
}

function templateSpine(): string {
  const ph = NEWSLETTER_DYNAMIC_CONTENT_PLACEHOLDER;
  return `${HEAD}
<body style="margin:0;padding:0;background-color:${C.black};${FONT};-webkit-text-size-adjust:100%;">
<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin:0;padding:0;background-color:${C.black};">
<tr>
<td align="center" style="padding:32px 14px;">
<table role="presentation" width="600" border="0" cellspacing="0" cellpadding="0" style="width:100%;max-width:600px;border-collapse:collapse;border-spacing:0;background-color:${C.panel};border:1px solid ${C.line};">
<tr>
<td style="padding:0;">
<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
<tr>
<td width="6" style="width:6px;background-color:${C.accent};background-image:linear-gradient(180deg,${C.redDark},${C.accent} 40%,${C.redLight});font-size:0;line-height:0;">&nbsp;</td>
<td style="background-color:${C.panel};padding:0;vertical-align:top;">
<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
<tr>
<td align="center" style="padding:30px 32px 8px 32px;">
<a href="#" style="text-decoration:none;">
<img src="{{logo_url}}" alt="{{company_name}}" width="180" border="0" style="display:block;max-width:180px;height:auto;margin:0 auto;" />
</a>
</td>
</tr>
<tr>
<td align="center" style="padding:8px 32px 26px 32px;color:${C.muted};font-size:10px;font-weight:700;letter-spacing:0.28em;text-transform:uppercase;">Digital innovation studio</td>
</tr>
<tr>
<td style="padding:0 24px 28px 28px;">
<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:${C.lift};background-image:linear-gradient(145deg,${C.lift} 0%,${C.void} 100%);border:1px solid ${C.line};">
<tr>
<td style="padding:44px 26px;text-align:center;min-height:270px;" valign="middle" align="center">
<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td align="center" style="color:${C.muted};font-size:12px;font-family:ui-monospace,Menlo,Consolas,monospace;">${ph}</td></tr></table>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td style="padding:0 28px 36px 32px;">
<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
<tr><td style="color:${C.white};font-size:22px;font-weight:800;letter-spacing:-0.02em;line-height:1.2;">{{company_name}}</td></tr>
<tr><td style="padding:8px 0 22px 0;color:${C.muted};font-size:14px;line-height:1.65;">{{tagline}}</td></tr>
</table>
<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
<tr><td style="height:1px;background-color:${C.line};line-height:1px;font-size:0;">&nbsp;</td></tr>
</table>
<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
<tr>
<td width="50%" valign="top" style="padding:22px 12px 0 0;">
<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
<tr><td style="color:${C.muted};font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;">Studio</td></tr>
<tr><td style="padding:8px 0 0 0;color:${C.soft};font-size:13px;line-height:1.55;">{{address_line}}</td></tr>
</table>
</td>
<td width="50%" valign="top" style="padding:22px 0 0 12px;border-left:1px solid ${C.line};">
<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
<tr><td style="color:${C.muted};font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;">Contact</td></tr>
<tr><td style="padding:8px 0 0 0;">
<a href="mailto:{{contact_email}}" style="color:${C.accent};font-size:14px;font-weight:700;text-decoration:none;">{{contact_email}}</a>
</td></tr>
<tr><td style="padding:14px 0 0 0;font-size:12px;line-height:2;">
<a href="{{facebook_url}}" style="color:${C.soft};text-decoration:none;">Facebook</a><br />
<a href="{{instagram_url}}" style="color:${C.soft};text-decoration:none;">Instagram</a><br />
<a href="{{linkedin_url}}" style="color:${C.soft};text-decoration:none;">LinkedIn</a><br />
<a href="{{x_url}}" style="color:${C.soft};text-decoration:none;">X</a>
</td></tr>
</table>
</td>
</tr>
</table>
<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"><tr>
<td style="padding:28px 0 0 0;font-size:12px;color:${C.muted};">
<a href="{{privacy_policy_url}}" style="color:${C.muted};">Privacy</a>
&nbsp;·&nbsp;
<a href="{{terms_url}}" style="color:${C.muted};">Terms</a>
&nbsp;·&nbsp;
<a href="{{unsubscribe_url}}" style="color:${C.accent};font-weight:700;text-decoration:none;">Unsubscribe</a>
</td>
</tr></table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</body>
</html>`;
}

function templateHorizon(): string {
  const ph = NEWSLETTER_DYNAMIC_CONTENT_PLACEHOLDER;
  return `${HEAD}
<body style="margin:0;padding:0;background-color:${C.black};${FONT};-webkit-text-size-adjust:100%;">
<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin:0;padding:0;background-color:${C.black};">
<tr>
<td align="center" style="padding:0 14px 36px 14px;">
<table role="presentation" width="600" border="0" cellspacing="0" cellpadding="0" style="width:100%;max-width:600px;border-collapse:collapse;border-spacing:0;">
<tr>
<td style="padding:36px 8px 28px 8px;">
<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="border:1px solid ${C.line};">
<tr>
<td style="padding:32px 28px;background-color:${C.gray};background-image:linear-gradient(135deg,${C.redDark} 0%,${C.accent} 42%,${C.void} 85%);">
<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
<tr>
<td align="left" valign="middle">
<table role="presentation" border="0" cellspacing="0" cellpadding="0">
<tr>
<td style="padding:6px 12px;background-color:#1a1a1a;border:1px solid #333333;color:${C.white};font-size:9px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;">From {{company_name}}</td>
</tr>
</table>
</td>
</tr>
<tr>
<td style="padding-top:22px;">
<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
<tr><td style="color:${C.white};font-size:28px;font-weight:800;letter-spacing:-0.035em;line-height:1.1;">This week</td></tr>
<tr><td style="padding:10px 0 0 0;color:#bfbfbf;font-size:14px;line-height:1.5;">{{tagline}}</td></tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td style="padding:0 8px;">
<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:${C.panel};border:1px solid ${C.line};margin-top:-52px;">
<tr>
<td style="padding:22px 26px 18px 26px;border-bottom:1px solid ${C.lineSoft};">
<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
<tr>
<td valign="middle" align="left">
<a href="#" style="text-decoration:none;">
<img src="{{logo_url}}" alt="{{company_name}}" width="140" border="0" style="display:block;max-width:140px;height:auto;" />
</a>
</td>
<td valign="middle" align="right">
<table role="presentation" border="0" cellspacing="0" cellpadding="0" align="right">
<tr>
<td style="padding-left:6px;"><a href="{{facebook_url}}" style="display:block;width:36px;height:36px;line-height:36px;text-align:center;background-color:${C.gray};border:1px solid ${C.line};color:${C.white};font-size:11px;font-weight:800;text-decoration:none;">f</a></td>
<td style="padding-left:6px;"><a href="{{instagram_url}}" style="display:block;width:36px;height:36px;line-height:36px;text-align:center;background-color:${C.gray};border:1px solid ${C.line};color:${C.white};font-size:11px;font-weight:800;text-decoration:none;">in</a></td>
<td style="padding-left:6px;"><a href="{{linkedin_url}}" style="display:block;width:36px;height:36px;line-height:36px;text-align:center;background-color:${C.gray};border:1px solid ${C.line};color:${C.white};font-size:10px;font-weight:800;text-decoration:none;">li</a></td>
<td style="padding-left:6px;"><a href="{{x_url}}" style="display:block;width:36px;height:36px;line-height:36px;text-align:center;background-color:${C.gray};border:1px solid ${C.line};color:${C.white};font-size:11px;font-weight:800;text-decoration:none;">x</a></td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td style="padding:26px 26px 34px 26px;">
<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="border:1px dashed ${C.line};background-color:${C.void};">
<tr>
<td style="padding:40px 20px;text-align:center;min-height:260px;" valign="middle" align="center">
<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td align="center" style="color:${C.muted};font-size:12px;font-family:ui-monospace,Menlo,Consolas,monospace;">${ph}</td></tr></table>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td style="padding:0 26px 32px 26px;">
<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="border-top:1px solid ${C.lineSoft};">
<tr>
<td style="padding-top:24px;">
<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
<tr><td style="color:${C.white};font-size:18px;font-weight:700;">{{company_name}}</td></tr>
<tr><td style="padding:12px 0 0 0;color:${C.muted};font-size:13px;line-height:1.6;">{{address_line}}</td></tr>
<tr><td style="padding:12px 0 0 0;"><a href="mailto:{{contact_email}}" style="color:${C.accent};font-size:14px;font-weight:700;text-decoration:none;">{{contact_email}}</a></td></tr>
<tr><td style="padding:22px 0 0 0;font-size:12px;color:${C.muted};">
<a href="{{privacy_policy_url}}" style="color:${C.muted};">Privacy policy</a>
&nbsp;&nbsp;|&nbsp;&nbsp;
<a href="{{terms_url}}" style="color:${C.muted};">Terms</a>
&nbsp;&nbsp;|&nbsp;&nbsp;
<a href="{{unsubscribe_url}}" style="color:${C.accent};font-weight:700;text-decoration:none;">Unsubscribe</a>
</td></tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</body>
</html>`;
}

export const NEWSLETTER_BASE_TEMPLATE_PRESETS: NewsletterBaseTemplatePreset[] = [
  {
    key: "01",
    name: "Newsletter Template 01",
    description: "Ledger — tables + inline CSS only (Outlook-friendly)",
    htmlDocument: templateLedger(),
  },
  {
    key: "02",
    name: "Newsletter Template 02",
    description: "Spine — vertical accent, two-column footer, tables only",
    htmlDocument: templateSpine(),
  },
  {
    key: "03",
    name: "Newsletter Template 03",
    description: "Horizon — hero band + card, tables only",
    htmlDocument: templateHorizon(),
  },
];
