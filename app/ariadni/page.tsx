import type { Metadata } from "next";
import AriadniClientPage from "./AriadniClientPage";
import { getPublicAriadniPage } from "@/app/lib/actions/ariadni";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const { contentEL, contentEN } = await getPublicAriadniPage();
  const titleEL = `${contentEL.title} | Ariadne Service Hub — DGSOFT`;
  const titleEN = `${contentEN.title} | Ariadne Service Hub — DGSOFT`;
  return {
    title: "Ariadne | DGSOFT",
    description: contentEN.tagline,
    openGraph: {
      title: titleEN,
      description: contentEN.tagline,
    },
    alternates: {
      canonical: "/ariadni",
    },
  };
}

export default async function AriadniPage() {
  const data = await getPublicAriadniPage();
  return (
    <AriadniClientPage
      logoUrl={data.logoUrl}
      espaPdfUrl={data.espaPdfUrl}
      espaPdfBannerUrl={data.espaPdfBannerUrl}
      contentEL={data.contentEL}
      contentEN={data.contentEN}
    />
  );
}
