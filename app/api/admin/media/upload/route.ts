import { NextResponse } from "next/server";
import { auth } from "@/auth";
import sharp from "sharp";

/**
 * Generic media upload, so any admin form can use the picker.
 *
 * The per-entity routes (articles, services, works…) each hard-code their
 * destination folder, which left forms without one — EU programmes, for
 * instance — with nothing but a URL text field. This takes the folder as a
 * parameter, validated against the same allow-list the listing route uses.
 *
 * Images are converted to WebP and capped at 1920px, matching the existing
 * routes so files are consistent wherever they were uploaded from.
 */

const ALLOWED_FOLDERS = [
  "articles",
  "services",
  "works",
  "case-studies",
  "sectors",
  "downloads",
  "logos",
  "brand-logos",
  "newsletter",
  "media",
] as const;

const MAX_BYTES = 25 * 1024 * 1024;

export async function POST(req: Request) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const host = process.env.BUNNY_STORAGE_API_HOST;
  const zone = process.env.BUNNY_STORAGE_ZONE;
  const key = process.env.BUNNY_ACCESS_KEY;
  const cdn = process.env.BUNNY_CDN_HOSTNAME;
  if (!host || !zone || !key || !cdn) {
    return NextResponse.json(
      { error: "Το CDN δεν είναι ρυθμισμένο. Ελέγξτε τις μεταβλητές BUNNY_* στο .env." },
      { status: 500 }
    );
  }

  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    if (!file) return NextResponse.json({ error: "Δεν στάλθηκε αρχείο." }, { status: 400 });
    if (file.size > MAX_BYTES) {
      return NextResponse.json({ error: "Το αρχείο ξεπερνά τα 25MB." }, { status: 413 });
    }

    const requested = String(formData.get("folder") || "media").replace(/^\/+|\/+$/g, "");
    const folder = (ALLOWED_FOLDERS as readonly string[]).includes(requested) ? requested : "media";

    const isVideo = file.type.startsWith("video/");
    const isPdf = file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");

    let buffer: Buffer = Buffer.from(await file.arrayBuffer());
    let contentType = "image/webp";
    let extension = "webp";

    if (isVideo) {
      contentType = file.type;
      extension = file.name.split(".").pop() || "mp4";
    } else if (isPdf) {
      contentType = "application/pdf";
      extension = "pdf";
    } else {
      buffer = await sharp(new Uint8Array(buffer))
        .resize({ width: 1920, withoutEnlargement: true, fit: "inside" })
        .webp({ quality: 80 })
        .toBuffer();
    }

    const filename = `media-${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${extension}`;
    const uploadRes = await fetch(`https://${host}/${zone}/${folder}/${filename}`, {
      method: "PUT",
      headers: { AccessKey: key, "Content-Type": contentType },
      body: buffer as any,
    });

    if (!uploadRes.ok) {
      console.error("Bunny upload failed:", await uploadRes.text());
      return NextResponse.json({ error: "Η μεταφόρτωση στο CDN απέτυχε." }, { status: 502 });
    }

    return NextResponse.json({
      url: `https://${cdn}/${folder}/${filename}`,
      type: isVideo ? "VIDEO" : isPdf ? "FILE" : "IMAGE",
      folder,
    });
  } catch (error: any) {
    console.error("Media upload error:", error);
    return NextResponse.json(
      { error: error?.message || "Η επεξεργασία του αρχείου απέτυχε." },
      { status: 500 }
    );
  }
}
