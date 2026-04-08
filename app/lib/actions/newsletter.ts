"use server";

import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { sendMailgun } from "@/lib/mailgun";
import { normalizeAddressKey } from "@/lib/address-region-utils";
import { renderBlocksToHtml, type EmailBlock, type NewsletterContent } from "@/lib/newsletter-blocks";
import { getEmailsForCustomer, type EmailFieldKey } from "@/lib/customer-emails";

export type { EmailFieldKey } from "@/lib/customer-emails";

const NEWSLETTER_PATH = "/admin/newsletter";

export type NewsletterFilters = {
  regionIds?: string[];
  nomosIds?: string[];
  dimosIds?: string[];
  cities?: string[];
  legalStatuses?: string[];
  kadCodes?: string[];
  trdpGroupIds?: string[];
  trdBusinessIds?: string[];
  /** Manually selected customer (TRDR) IDs to include as recipients. */
  manualTrdrIds?: string[];
  /** Which customer email fields to use for sending (default: all three). */
  emailFields?: EmailFieldKey[];
};

/** Resolve region/nomos/dimos selection to set of level-5 (dimos) periferia IDs. */
async function getDimosIdsFromFilters(filters: NewsletterFilters): Promise<Set<string> | null> {
  const { regionIds, nomosIds, dimosIds } = filters;
  if (!regionIds?.length && !nomosIds?.length && !dimosIds?.length) return null;

  const all = await prisma.periferia.findMany({
    select: { id: true, code: true, level: true, parentCode: true },
  });
  const byId = new Map(all.map((p) => [p.id, p]));
  const byCode = new Map(all.map((p) => [p.code, p]));

  const result = new Set<string>();

  if (dimosIds?.length) {
    for (const id of dimosIds) {
      const p = byId.get(id);
      if (p?.level === 5) result.add(id);
    }
  }

  if (nomosIds?.length) {
    for (const id of nomosIds) {
      const p = byId.get(id);
      if (p?.level !== 4) continue;
      const children = all.filter((c) => c.parentCode === p.code);
      for (const c of children) {
        if (c.level === 5) result.add(c.id);
        else if (c.level === 4) {
          const grand = all.filter((x) => x.parentCode === c.code);
          for (const g of grand) if (g.level === 5) result.add(g.id);
        }
      }
    }
  }

  if (regionIds?.length) {
    for (const id of regionIds) {
      const p = byId.get(id);
      if (p?.level !== 3) continue;
      function addDescendantDimos(code: string) {
        const children = all.filter((c) => c.parentCode === code);
        for (const c of children) {
          if (c.level === 5) result.add(c.id);
          else addDescendantDimos(c.code);
        }
      }
      addDescendantDimos(p.code);
    }
  }

  return result.size ? result : null;
}

/** Build list of unique recipients (email + trdrId) from filters. */
export async function buildRecipientList(filters: NewsletterFilters): Promise<{ email: string; trdrId: string }[]> {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") return [];

  const dimosSet = await getDimosIdsFromFilters(filters);
  let addressKeys: Set<string> | null = null;
  if (dimosSet && dimosSet.size > 0) {
    const mappings = await prisma.customerAddressRegion.findMany({
      where: { periferiaId: { in: Array.from(dimosSet) } },
      select: { addressKey: true },
    });
    addressKeys = new Set(mappings.map((m) => m.addressKey));
  }

  const trdpGroups = filters.trdpGroupIds?.length
    ? filters.trdpGroupIds.map((s) => parseInt(s, 10)).filter((n) => !Number.isNaN(n))
    : null;
  const trdBusinesses = filters.trdBusinessIds?.length
    ? filters.trdBusinessIds.map((s) => parseInt(s, 10)).filter((n) => !Number.isNaN(n))
    : null;

  const where: Prisma.TRDRWhereInput = {
    OR: [
      { EMAIL: { not: null, notIn: [""] } },
      { EMAILACC: { not: null, notIn: [""] } },
      { CCCEMAILMAR: { not: null, notIn: [""] } },
    ],
  };

  if (filters.cities?.length) {
    where.CITY = { in: filters.cities };
  }
  if (filters.legalStatuses?.length) {
    where.legalStatus = { in: filters.legalStatuses };
  }
  if (trdpGroups?.length) {
    where.TRDPGROUP = { in: trdpGroups };
  }
  if (trdBusinesses?.length) {
    where.TRDBUSINESS = { in: trdBusinesses };
  }

  if (filters.kadCodes?.length) {
    where.kads = {
      some: { firm_act_code: { in: filters.kadCodes } },
    };
  }

  const customers = await prisma.tRDR.findMany({
    where,
    select: { id: true, EMAIL: true, EMAILACC: true, CCCEMAILMAR: true, ADDRESS: true, CITY: true, ZIP: true },
  });

  let filtered = customers;
  if (addressKeys && addressKeys.size > 0) {
    filtered = customers.filter((c) => addressKeys!.has(normalizeAddressKey(c.ADDRESS, c.CITY, c.ZIP)));
  }

  const seen = new Set<string>();
  const list: { email: string; trdrId: string }[] = [];

  const hasFilter =
    (filters.regionIds?.length ?? 0) > 0 ||
    (filters.nomosIds?.length ?? 0) > 0 ||
    (filters.dimosIds?.length ?? 0) > 0 ||
    (filters.cities?.length ?? 0) > 0 ||
    (filters.legalStatuses?.length ?? 0) > 0 ||
    (filters.kadCodes?.length ?? 0) > 0 ||
    (filters.trdpGroupIds?.length ?? 0) > 0 ||
    (filters.trdBusinessIds?.length ?? 0) > 0;

  const emailFields = filters.emailFields?.length ? filters.emailFields : undefined;

  if (hasFilter) {
    for (const c of filtered) {
      const emails = getEmailsForCustomer(c, emailFields);
      for (const email of emails) {
        if (seen.has(email.toLowerCase())) continue;
        seen.add(email.toLowerCase());
        list.push({ email, trdrId: c.id });
      }
    }
  }

  if (filters.manualTrdrIds?.length) {
    const manual = await prisma.tRDR.findMany({
      where: { id: { in: filters.manualTrdrIds } },
      select: { id: true, EMAIL: true, EMAILACC: true, CCCEMAILMAR: true },
    });
    for (const c of manual) {
      const emails = getEmailsForCustomer(c, emailFields);
      for (const email of emails) {
        if (seen.has(email.toLowerCase())) continue;
        seen.add(email.toLowerCase());
        list.push({ email, trdrId: c.id });
      }
    }
  }

  return list;
}

/** Search customers (TRDR) by name, code, or email for newsletter recipient picker. */
export async function searchNewsletterCustomers(
  query: string,
  limit = 20
): Promise<{ id: string; name: string; code: string; email: string }[]> {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") return [];

  const q = (query ?? "").trim();
  if (!q) return [];

  const customers = await prisma.tRDR.findMany({
    where: {
      AND: [
        {
          OR: [
            { EMAIL: { not: null, notIn: [""] } },
            { EMAILACC: { not: null, notIn: [""] } },
            { CCCEMAILMAR: { not: null, notIn: [""] } },
          ],
        },
        {
          OR: [
            { NAME: { contains: q } },
            { CODE: { contains: q } },
            { EMAIL: { contains: q } },
            { EMAILACC: { contains: q } },
            { CCCEMAILMAR: { contains: q } },
          ],
        },
      ],
    },
    select: { id: true, NAME: true, CODE: true, EMAIL: true, EMAILACC: true, CCCEMAILMAR: true },
    take: limit,
  });

  return customers.map((c) => ({
    id: c.id,
    name: c.NAME ?? "",
    code: c.CODE ?? "",
    email: getEmailsForCustomer(c).join("; ") || "",
  }));
}

/** Fetch customers by IDs for display (e.g. badges when editing campaign). */
export async function getNewsletterCustomersByIds(
  ids: string[]
): Promise<{ id: string; name: string; code: string; email: string }[]> {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN" || !ids.length) return [];

  const list = await prisma.tRDR.findMany({
    where: { id: { in: ids } },
    select: { id: true, NAME: true, CODE: true, EMAIL: true, EMAILACC: true, CCCEMAILMAR: true },
  });
  return list.map((c) => ({
    id: c.id,
    name: c.NAME ?? "",
    code: c.CODE ?? "",
    email: getEmailsForCustomer(c).join("; ") || "",
  }));
}

// ——— Filter options for UI ———

export type RegionOption = { id: string; nameEL: string; level: number; path: string };
export type CityOption = { value: string };
export type LegalOption = { value: string };
export type KadOption = { value: string };
export type TrdpOption = { id: string; code: number; name: string | null };
export type TrdBusinessOption = { id: string; code: number; name: string | null };

export async function getNewsletterFilterOptions(): Promise<{
  regions: RegionOption[];
  nomoi: RegionOption[];
  dimoi: RegionOption[];
  cities: CityOption[];
  legalStatuses: LegalOption[];
  kadCodes: KadOption[];
  trdpGroups: TrdpOption[];
  trdBusinesses: TrdBusinessOption[];
}> {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") {
    return {
      regions: [], nomoi: [], dimoi: [], cities: [], legalStatuses: [], kadCodes: [], trdpGroups: [], trdBusinesses: [],
    };
  }

  const [periferies, citiesRaw, legalRaw, kadsRaw, trdp, trdb] = await Promise.all([
    prisma.periferia.findMany({ orderBy: [{ level: "asc" }, { nameEL: "asc" }], select: { id: true, code: true, nameEL: true, level: true, parentCode: true } }),
    prisma.tRDR.findMany({ where: { CITY: { not: null, notIn: [""] } }, select: { CITY: true }, distinct: ["CITY"] }),
    prisma.tRDR.findMany({ where: { legalStatus: { not: null, notIn: [""] } }, select: { legalStatus: true }, distinct: ["legalStatus"] }),
    prisma.trdrKad.findMany({ select: { firm_act_code: true }, distinct: ["firm_act_code"] }),
    prisma.softOneTrdpGroup.findMany({ orderBy: { code: "asc" }, select: { id: true, code: true, name: true } }),
    prisma.softOneTrdBusiness.findMany({ orderBy: { code: "asc" }, select: { id: true, code: true, name: true } }),
  ]);

  const byCode = new Map(periferies.map((p) => [p.code, p]));
  function pathFor(p: { nameEL: string; parentCode: string | null }): string {
    const parts: string[] = [p.nameEL];
    let current = p.parentCode ? byCode.get(p.parentCode) : null;
    while (current) {
      parts.unshift(current.nameEL);
      current = current.parentCode ? byCode.get(current.parentCode) ?? null : null;
    }
    return parts.join(" → ");
  }

  const regions = periferies.filter((p) => p.level === 3).map((p) => ({ id: p.id, nameEL: p.nameEL, level: p.level, path: pathFor(p) }));
  const nomoi = periferies.filter((p) => p.level === 4).map((p) => ({ id: p.id, nameEL: p.nameEL, level: p.level, path: pathFor(p) }));
  const dimoi = periferies.filter((p) => p.level === 5).map((p) => ({ id: p.id, nameEL: p.nameEL, level: p.level, path: pathFor(p) }));

  const cities = citiesRaw.map((c) => ({ value: c.CITY! })).filter((c) => c.value.trim());
  const legalStatuses = legalRaw.map((l) => ({ value: l.legalStatus! })).filter((l) => l.value.trim());
  const kadCodes = kadsRaw.map((k) => ({ value: k.firm_act_code }));

  return {
    regions,
    nomoi,
    dimoi,
    cities,
    legalStatuses,
    kadCodes,
    trdpGroups: trdp.map((t) => ({ id: t.id, code: t.code, name: t.name })),
    trdBusinesses: trdb.map((t) => ({ id: t.id, code: t.code, name: t.name })),
  };
}

// ——— Templates ———

export async function getNewsletterTemplates() {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") return [];
  return prisma.newsletterTemplate.findMany({ orderBy: { updatedAt: "desc" } });
}

export async function getNewsletterTemplate(id: string) {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") return null;
  return prisma.newsletterTemplate.findUnique({ where: { id } });
}

export async function createNewsletterTemplate(data: { name: string; description?: string | null; content: NewsletterContent }) {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized");
  const content = data.content as object;
  const htmlCache = renderBlocksToHtml(data.content);
  const t = await prisma.newsletterTemplate.create({
    data: {
      name: data.name,
      description: data.description ?? null,
      content,
      htmlCache,
    },
  });
  revalidatePath(`${NEWSLETTER_PATH}/templates`);
  return t;
}

export async function updateNewsletterTemplate(id: string, data: { name?: string; description?: string | null; content?: NewsletterContent }) {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized");
  const update: { name?: string; description?: string | null; content?: object; htmlCache?: string } = {};
  if (data.name != null) update.name = data.name;
  if (data.description != null) update.description = data.description;
  if (data.content != null) {
    update.content = data.content as object;
    update.htmlCache = renderBlocksToHtml(data.content);
  }
  const t = await prisma.newsletterTemplate.update({ where: { id }, data: update });
  revalidatePath(`${NEWSLETTER_PATH}/templates`);
  return t;
}

export async function deleteNewsletterTemplate(id: string) {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized");
  await prisma.newsletterTemplate.delete({ where: { id } });
  revalidatePath(`${NEWSLETTER_PATH}/templates`);
}

/** List media library items (logos, images) for newsletter templates. Pass folderId to filter by folder, null for "Uncategorized", undefined for all. */
export async function getNewsletterMedia(folderId?: string | null) {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") return [];
  try {
    const where: { folderId?: string | null } = {};
    if (folderId !== undefined) where.folderId = folderId;
    return await prisma.newsletterMedia.findMany({
      where,
      orderBy: { createdAt: "desc" },
      take: 500,
    });
  } catch (err) {
    console.error("getNewsletterMedia:", err);
    return [];
  }
}

export type NewsletterMediaFolderItem = { id: string; name: string; createdAt: Date; _count: { media: number } };

/** List all media folders with media count. */
export async function getNewsletterMediaFolders(): Promise<NewsletterMediaFolderItem[]> {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") return [];
  const delegate = (prisma as unknown as { newsletterMediaFolder?: { findMany: (args: object) => Promise<unknown> } })
    .newsletterMediaFolder;
  if (!delegate) {
    console.warn("Prisma client missing newsletterMediaFolder – run: npx prisma generate");
    return [];
  }
  try {
    const rows = await delegate.findMany({
      orderBy: { name: "asc" },
      include: { _count: { select: { media: true } } },
    });
    return rows as NewsletterMediaFolderItem[];
  } catch (err) {
    console.error("getNewsletterMediaFolders:", err);
    return [];
  }
}

/** Create a new media folder. */
export async function createNewsletterMediaFolder(name: string): Promise<{ id: string } | { error: string }> {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") return { error: "Unauthorized" };
  const trimmed = name.trim();
  if (!trimmed) return { error: "Folder name is required" };
  const delegate = (prisma as { newsletterMediaFolder?: { create: (args: object) => Promise<{ id: string }> } })
    .newsletterMediaFolder;
  if (!delegate) return { error: "Database not ready. Run: npx prisma generate, then restart the server." };
  try {
    const folder = await delegate.create({ data: { name: trimmed } });
    revalidatePath("/admin/newsletter/media");
    return { id: folder.id };
  } catch (err) {
    console.error("createNewsletterMediaFolder:", err);
    return { error: err instanceof Error ? err.message : "Failed to create folder" };
  }
}

/** Rename a media folder. */
export async function updateNewsletterMediaFolder(id: string, name: string): Promise<{ error?: string }> {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") return { error: "Unauthorized" };
  const trimmed = name.trim();
  if (!trimmed) return { error: "Folder name is required" };
  const delegate = (prisma as { newsletterMediaFolder?: { update: (args: object) => Promise<unknown> } })
    .newsletterMediaFolder;
  if (!delegate) return { error: "Database not ready. Run: npx prisma generate, then restart the server." };
  try {
    await delegate.update({ where: { id }, data: { name: trimmed } });
    revalidatePath("/admin/newsletter/media");
    return {};
  } catch (err) {
    console.error("updateNewsletterMediaFolder:", err);
    return { error: err instanceof Error ? err.message : "Failed to update folder" };
  }
}

/** Delete a media folder (media inside become uncategorized). */
export async function deleteNewsletterMediaFolder(id: string): Promise<{ error?: string }> {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") return { error: "Unauthorized" };
  const delegate = (prisma as { newsletterMediaFolder?: { delete: (args: object) => Promise<unknown> } })
    .newsletterMediaFolder;
  if (!delegate) return { error: "Database not ready. Run: npx prisma generate, then restart the server." };
  try {
    await delegate.delete({ where: { id } });
    revalidatePath("/admin/newsletter/media");
    return {};
  } catch (err) {
    console.error("deleteNewsletterMediaFolder:", err);
    return { error: err instanceof Error ? err.message : "Failed to delete folder" };
  }
}

/** Move media item to a folder (folderId null = uncategorized). */
export async function setNewsletterMediaFolder(mediaId: string, folderId: string | null): Promise<{ error?: string }> {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") return { error: "Unauthorized" };
  try {
    await prisma.newsletterMedia.update({
      where: { id: mediaId },
      data: { folderId },
    });
    revalidatePath("/admin/newsletter/media");
    return {};
  } catch (err) {
    console.error("setNewsletterMediaFolder:", err);
    return { error: err instanceof Error ? err.message : "Failed to move media" };
  }
}

// ——— Campaigns ———

export async function getNewsletterCampaigns() {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") return [];
  const campaigns = await prisma.newsletterCampaign.findMany({
    orderBy: { updatedAt: "desc" },
    include: {
      _count: { select: { recipients: true } },
      template: { select: { name: true } },
    },
  });
  if (campaigns.length === 0) return [];
  const rows = await prisma.$queryRaw<{ campaignId: string; companyCount: bigint }[]>`
    SELECT campaignId, COUNT(DISTINCT trdrId) as companyCount
    FROM NewsletterCampaignRecipient
    WHERE trdrId IS NOT NULL AND trdrId != ''
    GROUP BY campaignId
  `;
  const companyByCampaign = new Map(rows.map((r) => [r.campaignId, Number(r.companyCount)]));
  return campaigns.map((c) => ({
    ...c,
    companyCount: companyByCampaign.get(c.id) ?? 0,
  }));
}

export async function getNewsletterCampaign(id: string) {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") return null;
  return prisma.newsletterCampaign.findUnique({
    where: { id },
    include: {
      template: true,
      recipients: true,
    },
  });
}

export async function createNewsletterCampaign(data: {
  name: string;
  subject: string;
  templateId?: string | null;
  filters?: NewsletterFilters | null;
}) {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized");
  const c = await prisma.newsletterCampaign.create({
    data: {
      name: data.name,
      subject: data.subject,
      templateId: data.templateId ?? null,
      filters: (data.filters ?? {}) as object,
    },
  });
  revalidatePath(`${NEWSLETTER_PATH}/campaigns`);
  return c;
}

export async function updateNewsletterCampaign(
  id: string,
  data: { name?: string; subject?: string; templateId?: string | null; filters?: NewsletterFilters | null }
) {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized");
  const update: { name?: string; subject?: string; templateId?: string | null; filters?: object } = {};
  if (data.name != null) update.name = data.name;
  if (data.subject != null) update.subject = data.subject;
  if (data.templateId != null) update.templateId = data.templateId;
  if (data.filters != null) update.filters = data.filters as object;
  const c = await prisma.newsletterCampaign.update({ where: { id }, data: update });
  revalidatePath(`${NEWSLETTER_PATH}/campaigns`);
  return c;
}

/** Build recipients from campaign filters and save to NewsletterCampaignRecipient (pending). */
export async function buildCampaignRecipients(campaignId: string): Promise<{ count: number; error?: string }> {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") return { count: 0, error: "Unauthorized" };

  const campaign = await prisma.newsletterCampaign.findUnique({ where: { id: campaignId } });
  if (!campaign) return { count: 0, error: "Campaign not found" };

  const filters = (campaign.filters ?? {}) as NewsletterFilters;
  const list = await buildRecipientList(filters);

  await prisma.newsletterCampaignRecipient.deleteMany({ where: { campaignId } });
  if (list.length > 0) {
    await prisma.newsletterCampaignRecipient.createMany({
      data: list.map((r) => ({
        campaignId,
        email: r.email,
        trdrId: r.trdrId,
        status: "pending",
      })),
    });
  }
  revalidatePath(`${NEWSLETTER_PATH}/campaigns`);
  return { count: list.length };
}

/** Send a test/preview email for a campaign to a single address. Uses template HTML + subject from params. */
export async function sendNewsletterTestEmail(params: {
  templateId: string | null;
  subject: string;
  to: string;
}): Promise<{ success: boolean; error?: string }> {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") {
    return { success: false, error: "Unauthorized" };
  }
  const to = params.to?.trim();
  if (!to) return { success: false, error: "Email address is required" };
  const subject = params.subject?.trim() || "Newsletter preview";

  let html = "<p>No template selected.</p>";
  if (params.templateId) {
    const template = await prisma.newsletterTemplate.findUnique({
      where: { id: params.templateId },
    });
    if (template?.htmlCache) html = template.htmlCache;
    else if (template?.content) {
      const content = template.content as NewsletterContent;
      html = renderBlocksToHtml(content);
    }
  }

  const result = await sendMailgun({ to, subject, html });
  if (result.success) return { success: true };
  return { success: false, error: (result as { error: string }).error };
}

export type SendCampaignResult = { success: boolean; sent: number; failed: number; errors: string[] };

/** Send campaign emails via Mailgun. Uses template HTML or fallback text. */
export async function sendNewsletterCampaign(campaignId: string): Promise<SendCampaignResult> {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") {
    return { success: false, sent: 0, failed: 0, errors: ["Unauthorized"] };
  }

  const campaign = await prisma.newsletterCampaign.findUnique({
    where: { id: campaignId },
    include: { template: true, recipients: true },
  });
  if (!campaign) return { success: false, sent: 0, failed: 0, errors: ["Campaign not found"] };

  const pending = campaign.recipients.filter((r) => r.status === "pending");
  if (pending.length === 0) {
    return { success: true, sent: 0, failed: 0, errors: [] };
  }

  let html = campaign.template?.htmlCache ?? "";
  if (!html && campaign.template?.content) {
    html = renderBlocksToHtml(campaign.template.content as NewsletterContent);
  }
  if (!html) html = "<p>No content.</p>";

  await prisma.newsletterCampaign.update({
    where: { id: campaignId },
    data: { status: "sending" },
  });

  let sent = 0;
  let failed = 0;
  const errors: string[] = [];

  for (const rec of pending) {
    const result = await sendMailgun({
      to: rec.email,
      subject: campaign.subject,
      html,
    });
    if (result.success) {
      sent++;
      await prisma.newsletterCampaignRecipient.update({
        where: { id: rec.id },
        data: { status: "sent", mailgunId: (result as { id?: string }).id ?? null },
      });
    } else {
      failed++;
      errors.push(`${rec.email}: ${(result as { error: string }).error}`);
      await prisma.newsletterCampaignRecipient.update({
        where: { id: rec.id },
        data: { status: "failed", error: (result as { error: string }).error },
      });
    }
    await new Promise((r) => setTimeout(r, 100));
  }

  await prisma.newsletterCampaign.update({
    where: { id: campaignId },
    data: {
      status: failed === pending.length ? "failed" : "sent",
      sentAt: new Date(),
    },
  });

  revalidatePath(`${NEWSLETTER_PATH}/campaigns`);
  return { success: failed === 0, sent, failed, errors: errors.slice(0, 20) };
}
