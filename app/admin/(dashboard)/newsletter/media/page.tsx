import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getNewsletterMedia, getNewsletterMediaFolders } from "@/app/lib/actions/newsletter";
import { NewsletterMediaClient } from "./NewsletterMediaClient";

export const dynamic = "force-dynamic";

/** Serialize for RSC payload (no Date instances). */
function serializeMedia(
  items: Awaited<ReturnType<typeof getNewsletterMedia>>
): { id: string; url: string; name: string | null; folderId: string | null; createdAt: string }[] {
  return items.map((m) => ({
    id: m.id,
    url: m.url,
    name: m.name,
    folderId: m.folderId,
    createdAt: m.createdAt instanceof Date ? m.createdAt.toISOString() : String(m.createdAt),
  }));
}

/** Serialize folders for RSC payload (no Date instances). */
function serializeFolders(
  items: Awaited<ReturnType<typeof getNewsletterMediaFolders>>
): { id: string; name: string; createdAt: string; _count: { media: number } }[] {
  return items.map((f) => ({
    id: f.id,
    name: f.name,
    createdAt: f.createdAt instanceof Date ? f.createdAt.toISOString() : String(f.createdAt),
    _count: f._count,
  }));
}

export default async function NewsletterMediaPage() {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") redirect("/admin/login");

  const [media, folders] = await Promise.all([getNewsletterMedia(), getNewsletterMediaFolders()]);
  const initialMedia = serializeMedia(media);
  const initialFolders = serializeFolders(folders);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Media gallery</h1>
        <p className="text-muted-foreground text-sm">
          Manage images and graphics for newsletter templates. Organize with folders and reuse across templates.
        </p>
      </div>
      <NewsletterMediaClient initialMedia={initialMedia} initialFolders={initialFolders} />
    </div>
  );
}
