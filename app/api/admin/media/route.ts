import { NextResponse } from "next/server";
import { auth } from "@/auth";

/**
 * Media library listing, backed by Bunny storage.
 *
 * The site has no media table — files are uploaded straight to the CDN by the
 * per-entity upload routes and only their URL is stored on the record. So the
 * gallery reads the storage zone itself, which also means files uploaded from
 * any form show up here without extra bookkeeping.
 *
 * GET /api/admin/media?folder=articles
 */

/** Folders an editor may browse. Anything else is rejected — no path traversal,
 *  and no exposing db-backups or cvs (CVs are applicant personal data). */
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

const IMAGE_EXT = /\.(webp|jpe?g|png|gif|avif|svg)$/i;
const VIDEO_EXT = /\.(mp4|webm|mov|m4v)$/i;

export type MediaFile = {
  name: string;
  url: string;
  size: number;
  updatedAt: string | null;
  type: "IMAGE" | "VIDEO" | "FILE";
  folder: string;
};

export async function GET(req: Request) {
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

  const { searchParams } = new URL(req.url);
  const requested = (searchParams.get("folder") || "articles").replace(/^\/+|\/+$/g, "");
  const folder = (ALLOWED_FOLDERS as readonly string[]).includes(requested) ? requested : "articles";

  try {
    const res = await fetch(`https://${host}/${zone}/${folder}/`, {
      headers: { AccessKey: key, accept: "application/json" },
      cache: "no-store",
    });
    if (!res.ok) {
      return NextResponse.json(
        { error: `Η ανάγνωση του CDN απέτυχε (${res.status}).` },
        { status: 502 }
      );
    }

    const raw = (await res.json()) as any[];
    const files: MediaFile[] = raw
      .filter((f) => !f.IsDirectory)
      .map((f) => {
        const name = String(f.ObjectName);
        return {
          name,
          url: `https://${cdn}/${folder}/${name}`,
          size: Number(f.Length) || 0,
          updatedAt: f.LastChanged ?? f.DateCreated ?? null,
          type: IMAGE_EXT.test(name) ? "IMAGE" : VIDEO_EXT.test(name) ? "VIDEO" : "FILE",
          folder,
        } satisfies MediaFile;
      })
      // Newest first — an editor almost always wants what they just uploaded.
      .sort((a, b) => String(b.updatedAt ?? "").localeCompare(String(a.updatedAt ?? "")));

    return NextResponse.json({ folder, folders: ALLOWED_FOLDERS, files });
  } catch (error: any) {
    console.error("Media list error:", error);
    return NextResponse.json(
      { error: error?.message || "Η ανάγνωση της βιβλιοθήκης απέτυχε." },
      { status: 500 }
    );
  }
}
