import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

/** Proxy MapTiler static map so the API key stays server-side and the image loads reliably. */
export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session || (session.user as { role?: string })?.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const key = process.env.MAPTILER_API_KEY;
  if (!key?.trim()) {
    return NextResponse.json({ error: "MapTiler API key not configured" }, { status: 503 });
  }

  const { searchParams } = new URL(req.url);
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const zoom = searchParams.get("zoom") ?? "14";
  const w = searchParams.get("w") ?? "640";
  const h = searchParams.get("h") ?? "320";

  const latNum = lat != null ? parseFloat(lat) : NaN;
  const lngNum = lng != null ? parseFloat(lng) : NaN;
  if (!Number.isFinite(latNum) || !Number.isFinite(lngNum)) {
    return NextResponse.json({ error: "Invalid lat or lng" }, { status: 400 });
  }

  const mapUrl = `https://api.maptiler.com/maps/streets-v2/static/${lngNum},${latNum},${zoom}/${w}x${h}.png?key=${encodeURIComponent(key.trim())}`;

  try {
    const res = await fetch(mapUrl, { cache: "force-cache", next: { revalidate: 86400 } });
    if (!res.ok) {
      const text = await res.text();
      console.error("MapTiler static map error:", res.status, text);
      return NextResponse.json({ error: "Map fetch failed" }, { status: 502 });
    }
    const blob = await res.blob();
    const buffer = Buffer.from(await blob.arrayBuffer());
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": res.headers.get("Content-Type") ?? "image/png",
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch (err) {
    console.error("MapTiler proxy error:", err);
    return NextResponse.json({ error: "Map fetch failed" }, { status: 502 });
  }
}
