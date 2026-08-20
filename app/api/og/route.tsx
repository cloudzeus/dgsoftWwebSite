import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const revalidate = 86400;

/**
 * Dynamic Open Graph image, 1200x630.
 *
 * Replaces the old setup, which pointed og:image at the favicon while declaring
 * 1200x630 — every LinkedIn and Facebook share rendered a stretched icon.
 *
 * Usage:  /api/og?title=...&subtitle=...&kicker=...
 * All params are optional; the bare URL renders the company default.
 */

// Brand marks lifted from public/logo.svg (viewBox 0 0 356.45 74.13):
// the "DG" glyph in DG red, the "SOFT" wordmark in white.
const MARK_RED =
  "M63.21,36.89c0-.07,0-.13,0-.2.08-10.81,6.28-19.66,17.71-19.66,7.24,0,11.92,2.44,14.87,8.55h17.93C110.27,7.86,95.29.44,80.93.33c-9.96,0-19.97,3.7-27,11.06-5.69,5.97-9.42,14.34-9.55,25.12,0,.24,0,.48,0,.71-.15,9.62-5.95,19.13-17.43,19.13h-8.27v-23.19h0v-15.82h8.27c5.67,0,9.95,2.32,12.84,5.83,1.86-6.19,4.97-11.63,9.28-16.18C43.52,2.9,36.35.37,27.54.33H0v32.83s0,40.2,0,40.2h27.54c11.63-.05,20.42-4.44,26.36-11.03,6.16-6.84,9.27-16.04,9.31-25.27,0-.06,0-.11,0-.17ZM114.74,31.91h-33.7v15.79h15.18c-3.26,6.82-7.95,8.76-15.29,8.76-5.58,0-10.12-2.09-13.2-5.72-1.83,5.97-4.85,11.4-8.84,15.86,6.41,4.5,14.24,6.77,22.04,6.77,13.14,0,26.69-5.7,31.78-20.57,2.45-6.93,2.45-13.76,2.03-20.88Z";
const WORD_WHITE = [
  "M158.12,51.5c0-4.99-5.9-6.11-13.03-6.51-15.47-1.12-25.65-6.41-25.85-21.88-.61-30.74,54.77-30.74,54.36,0h-17.3c0-9.47-19.14-8.65-19.75-.2-.4,5.39,4.88,6.52,11.3,7.22,14.14,1.53,28,3.67,28,21.48,0,29.92-58.02,30.43-57.62-.92h17.61c0,9.06,22.29,9.16,22.29.81Z",
  "M178.37,36.95c0-49.27,73.08-49.27,73.08,0s-73.08,49.37-73.08,0ZM232.83,36.95c0-25.65-35.73-25.65-35.73,0s35.73,25.86,35.73,0Z",
  "M274.04,49.37v23.11h-18.53V1.23h44.38v16.28h-25.86v15.57h22.9v16.29h-22.9Z",
  "M303.52,17.51V1.23h52.93v16.28h-17.4v54.96h-18.02V17.51h-17.51Z",
];

const RED = "#EC1C24";

/** Inter with Greek coverage — the OG canvas must render Greek titles correctly. */
async function loadFont(weight: 400 | 700): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Inter:wght@${weight}&subset=greek,latin&display=swap`,
      { headers: { "User-Agent": "Mozilla/5.0" } }
    ).then((r) => r.text());
    const url = css.match(/src:\s*url\(([^)]+)\)\s*format\('(?:truetype|opentype)'\)/)?.[1];
    if (!url) return null;
    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = (searchParams.get("title") || "Soft1 ERP, Λογισμικό & Προγράμματα ΕΣΠΑ").slice(0, 110);
  const subtitle = (searchParams.get("subtitle") || "Πιστοποιημένος συνεργάτης SoftOne").slice(0, 90);
  const kicker = (searchParams.get("kicker") || "").slice(0, 40);

  const [regular, bold] = await Promise.all([loadFont(400), loadFont(700)]);
  const fonts = [
    ...(regular ? [{ name: "Inter", data: regular, weight: 400 as const, style: "normal" as const }] : []),
    ...(bold ? [{ name: "Inter", data: bold, weight: 700 as const, style: "normal" as const }] : []),
  ];

  // Long titles step down a size or two so they never overflow the canvas.
  const titleSize = title.length > 78 ? 52 : title.length > 52 ? 62 : 74;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0A",
          padding: "68px 76px",
          position: "relative",
          fontFamily: fonts.length ? "Inter" : "sans-serif",
        }}
      >
        {/* Brand glow, echoing the red orbs behind the site's own hero. */}
        <div
          style={{
            position: "absolute",
            top: "-190px",
            right: "-140px",
            width: "620px",
            height: "620px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(236,28,36,0.30) 0%, rgba(236,28,36,0) 70%)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
          <svg width="300" height="62" viewBox="0 0 356.45 74.13">
            <path d={MARK_RED} fill={RED} />
            {WORD_WHITE.map((d, i) => (
              <path key={i} d={d} fill="#FFFFFF" />
            ))}
          </svg>
          {kicker ? (
            <div
              style={{
                display: "flex",
                fontSize: "19px",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: RED,
                borderLeft: `3px solid ${RED}`,
                paddingLeft: "18px",
                marginLeft: "6px",
              }}
            >
              {kicker}
            </div>
          ) : null}
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: "1010px" }}>
          <div
            style={{
              display: "flex",
              fontSize: `${titleSize}px`,
              fontWeight: 700,
              lineHeight: 1.13,
              letterSpacing: "-0.022em",
              color: "#FFFFFF",
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "26px",
              fontSize: "27px",
              fontWeight: 400,
              color: "#A8A29E",
            }}
          >
            {subtitle}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div style={{ display: "flex", width: "62px", height: "4px", background: RED }} />
          <div style={{ display: "flex", fontSize: "23px", fontWeight: 700, color: "#FFFFFF" }}>
            dgsoft.gr
          </div>
          <div style={{ display: "flex", fontSize: "23px", color: "#57534E" }}>·</div>
          <div style={{ display: "flex", fontSize: "23px", color: "#A8A29E" }}>
            Ελλάδα &amp; Κύπρος
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630, fonts: fonts.length ? fonts : undefined }
  );
}
