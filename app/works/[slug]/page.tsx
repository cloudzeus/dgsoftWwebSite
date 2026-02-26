import ClientPage from "./ClientPage";
import { getPublicWorkBySlug } from "@/app/lib/queries/work";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const work = await getPublicWorkBySlug(slug);

    // If not found in DB, ClientPage might still have static fallback logic 
    // but better to handle it here if we want pure dynamic
    return <ClientPage slug={slug} initialWork={work} />;
}
