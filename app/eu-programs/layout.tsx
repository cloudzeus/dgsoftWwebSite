import { CollectionPageSeo } from "@/app/components/PageSeo";
import { buildCollectionMetadataFor } from "@/lib/seo/metadata";

export const metadata = buildCollectionMetadataFor("euProgram");

export default function EuProgramsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CollectionPageSeo type="euProgram" />
      {children}
    </>
  );
}
