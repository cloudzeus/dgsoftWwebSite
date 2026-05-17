import ClientPage from "./ClientPage";
import { getPublicWorks } from "@/app/lib/queries/work";
import { CollectionPageSeo } from "@/app/components/PageSeo";
import { buildCollectionMetadataFor } from "@/lib/seo/metadata";

export const dynamic = "force-dynamic";

export const metadata = buildCollectionMetadataFor("work");

export default async function Page() {
    const works = await getPublicWorks();
    return (
        <>
            <CollectionPageSeo type="work" />
            <ClientPage initialWorks={works} />
        </>
    );
}
