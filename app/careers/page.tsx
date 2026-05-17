import { getPublicPositions } from "../lib/actions/career";
import CareersClient from "./CareersClient";
import { CollectionPageSeo } from "@/app/components/PageSeo";
import { buildCollectionMetadataFor } from "@/lib/seo/metadata";

export const dynamic = "force-dynamic";

export const metadata = buildCollectionMetadataFor("position");

export default async function CareersPage() {
    const positions = await getPublicPositions();
    return (
        <>
            <CollectionPageSeo type="position" />
            <CareersClient positions={positions as any[]} />
        </>
    );
}
