import { getPublicArticles } from "../lib/queries/public-articles";
import BlogClient from "./BlogClient";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Νέα & Άρθρα | DGSOFT",
    description: "Τεχνολογικές εξελίξεις, μελέτες επιτυχίας και insights από την DGSOFT. Μάθετε πρώτοι για ERP, CRM, AI και ψηφιακό μετασχηματισμό.",
    keywords: "ERP, CRM, AI, ψηφιακός μετασχηματισμός, Soft1, DGSOFT, άρθρα, νέα",
    openGraph: {
        title: "Νέα & Άρθρα | DGSOFT",
        description: "Τεχνολογικές εξελίξεις, μελέτες επιτυχίας και insights από την DGSOFT.",
        type: "website",
        locale: "el_GR",
    }
};

export default async function BlogPage() {
    const articles = await getPublicArticles();
    return <BlogClient initialArticles={articles as any[]} />;
}
