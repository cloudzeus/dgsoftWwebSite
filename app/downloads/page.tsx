import { getPublicDownloads } from "../lib/queries/public-downloads";
import DownloadsClient from "./DownloadsClient";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Λήψεις & Οδηγοί | DGSOFT",
    description: "Κατεβάστε δωρεάν εξειδικευμένους οδηγούς, whitepapers και αρχεία που σας βοηθούν να κατανοήσετε την ψηφιακή μετάβαση της επιχείρησής σας.",
    keywords: "downloads, οδηγοί, whitepapers, ERP, DGSOFT, PDF, λήψεις",
};

export default async function DownloadsPage() {
    const downloads = await getPublicDownloads();
    return <DownloadsClient downloads={downloads as any[]} />;
}
