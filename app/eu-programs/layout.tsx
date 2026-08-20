import { CollectionPageSeo } from "@/app/components/PageSeo";
import { FaqJsonLd } from "@/app/components/FaqJsonLd";
import { buildCollectionMetadataFor } from "@/lib/seo/metadata";

export const metadata = buildCollectionMetadataFor("euProgram");

export default function EuProgramsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CollectionPageSeo type="euProgram" />
      {/* The page itself is a client component, so the FAQ markup is emitted
          here where it can be server-rendered. */}
      <FaqJsonLd faqKey="espa" url="/eu-programs" />
      {children}
    </>
  );
}
