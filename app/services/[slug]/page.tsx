import ClientPage from "./ClientPage";

export function generateStaticParams() {
    return [
        { slug: "soft1-cloud-erp" },
        { slug: "soft1-cloud-crm" },
        { slug: "custom-software" },
        { slug: "cybersecurity" },
        { slug: "mobile-apps" },
        { slug: "data-analytics" }
    ];
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    return <ClientPage slug={resolvedParams.slug} />;
}
