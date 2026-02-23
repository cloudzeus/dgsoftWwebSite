import ClientPage from "./ClientPage";

export function generateStaticParams() {
    return [
        { slug: "senior-erp-consultant" },
        { slug: "full-stack-developer" },
        { slug: "data-analyst" },
        { slug: "it-support-specialist" }
    ];
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    return <ClientPage slug={resolvedParams.slug} />;
}
