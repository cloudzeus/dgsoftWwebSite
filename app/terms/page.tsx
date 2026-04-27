import { getLegalPage } from "@/app/lib/actions/legal";

export const metadata = { title: "Όροι Χρήσης | DGSmart" };

export default async function TermsPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const locale = lang === "en" ? "en" : "el";
  const data = await getLegalPage("terms");

  const title = locale === "en" ? data.titleEn : data.titleEl;
  const content = locale === "en" ? data.contentEn : data.contentEl;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">{title}</h1>
        <div
          className="prose prose-invert prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
}
