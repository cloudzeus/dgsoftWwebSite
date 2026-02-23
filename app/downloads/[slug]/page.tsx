import ClientPage from "./ClientPage";

export function generateStaticParams() {
    return [
        { slug: "cloud-security-guide-2024" },
        { slug: "erp-implementation-checklist" },
        { slug: "eu-grants-whitepaper" }
    ];
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    return <ClientPage slug={resolvedParams.slug} />;
}
