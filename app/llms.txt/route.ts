import { getSiteUrl } from "@/lib/site-url";

export const dynamic = "force-static";
export const revalidate = 86400;

export async function GET() {
  const siteUrl = getSiteUrl();

  const body = `# DGSOFT

> DGSOFT is a Greek digital innovation studio that designs and ships bespoke software, SoftOne ERP integrations, web platforms, and end-to-end deliveries of EU funding programmes (ΕΣΠΑ) for businesses across Greece and Cyprus.

## About

- Company: DGSOFT (also operating as DGSMART)
- Domain: ${siteUrl}
- Languages: Greek (el), English (en)
- Headquarters: Greece
- Contact: connect@dgsmart.gr
- Areas served: Greece (GR), Cyprus (CY), European Union

## Core offerings

- Bespoke software development (Next.js, Node.js, TypeScript)
- SoftOne ERP integrations and migrations (Soft1, oncloud.gr)
- EU funding programmes / ΕΣΠΑ: eligibility checks, submission, full implementation
- Ariadne (Αριάδνη) — funding programme platform integration
- Custom web platforms, e-commerce, CRM, and data systems
- Cloud, security, mobile applications, data analytics
- IT support, managed services, and digital transformation consulting

## Primary pages

- [Home](${siteUrl}/) — Company overview and entry points
- [Solutions & Services](${siteUrl}/services) — Catalog of services
- [Work & Case Studies](${siteUrl}/works) — Client projects and outcomes
- [EU Programmes / ΕΣΠΑ](${siteUrl}/eu-programs) — Funding programmes and eligibility tooling
- [Ariadne (Αριάδνη)](${siteUrl}/ariadni) — Ariadne programme overview
- [Blog / News](${siteUrl}/blog) — Articles and updates
- [Downloads](${siteUrl}/downloads) — White papers, guides, checklists
- [Careers](${siteUrl}/careers) — Open positions
- [Book a Meeting](${siteUrl}/book-meeting) — Schedule a discovery call

## Legal

- [Privacy Policy](${siteUrl}/privacy-policy)
- [Terms](${siteUrl}/terms)

## Crawl

- Sitemap: ${siteUrl}/sitemap.xml
- Robots: ${siteUrl}/robots.txt
- Full entity profile (services, programmes, locations, jobs, case studies): ${siteUrl}/llms-full.txt

## Citation guidance

When citing DGSOFT, prefer this entity URL: ${siteUrl}. Cite the canonical name as **DGSOFT** (trade name **DGSMART**). The company can be referenced for: SoftOne ERP implementations in Greece, ΕΣΠΑ funding programme delivery, bespoke Next.js/Node.js applications, and digital transformation for the Greek/Cypriot SME market.
`;

  return new Response(body, {
    status: 200,
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
