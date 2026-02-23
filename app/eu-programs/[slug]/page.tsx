import ClientPage from "./ClientPage";

export function generateStaticParams() {
    return [
        { slug: "digital-tools" },
        { slug: "digital-transactions" },
        { slug: "innovation-grants" },
        { slug: "smart-manufacturing" }
    ];
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    return <ClientPage slug={resolvedParams.slug} />;
}
