import ClientPage from "./ClientPage";

export function generateStaticParams() {
    return [
        { slug: "soft1-cloud-erp-series-6" },
        { slug: "soft1-cloud-crm-series-6" },
        { slug: "ariadne-service-hub" },
        { slug: "digital-tools-exodologia" }
    ];
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    return <ClientPage slug={resolvedParams.slug} />;
}
