import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getNewsletterMedia, getNewsletterMediaFolders } from "@/app/lib/actions/newsletter";
import { NewsletterMediaClient } from "./NewsletterMediaClient";

export const dynamic = "force-dynamic";

export default async function NewsletterMediaPage() {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") redirect("/admin/login");

  const [media, folders] = await Promise.all([getNewsletterMedia(), getNewsletterMediaFolders()]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Media gallery</h1>
        <p className="text-muted-foreground text-sm">
          Manage images and graphics for newsletter templates. Organize with folders and reuse across templates.
        </p>
      </div>
      <NewsletterMediaClient initialMedia={media} initialFolders={folders} />
    </div>
  );
}
