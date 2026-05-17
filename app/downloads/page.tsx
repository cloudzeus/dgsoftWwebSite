import { getPublicDownloads } from "../lib/queries/public-downloads";
import DownloadsClient from "./DownloadsClient";
import { CollectionPageSeo } from "@/app/components/PageSeo";
import { buildCollectionMetadataFor } from "@/lib/seo/metadata";

export const dynamic = "force-dynamic";

export const metadata = {
    ...buildCollectionMetadataFor("download"),
    keywords: "downloads, οδηγοί, whitepapers, ERP, DGSOFT, PDF, λήψεις",
};

export default async function DownloadsPage() {
    const downloads = await getPublicDownloads();
    return (
        <>
            <CollectionPageSeo type="download" />
            <DownloadsClient downloads={downloads as any[]} />
        </>
    );
}
