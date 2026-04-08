"use server";

import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { NEWSLETTER_BASE_TEMPLATE_PRESETS } from "@/lib/newsletter-base-template-sample-html";
import {
  applyBaseTemplateFields,
  baseTemplateContainsPlaceholder,
  compactFieldOverrides,
  effectiveTemplateFields,
  NEWSLETTER_BASE_TEMPLATE_DEFAULT_FIELDS,
  NEWSLETTER_DYNAMIC_CONTENT_PLACEHOLDER,
  normalizeBaseTemplateFields,
  type NewsletterBaseTemplateFields,
} from "@/lib/newsletter-dynamic-placeholder";

const REVALIDATE = "/admin/newsletter/base-templates";

export type NewsletterBaseTemplateDto = {
  id: string;
  name: string;
  description: string | null;
  htmlDocument: string;
  fieldOverrides: Partial<NewsletterBaseTemplateFields> | null;
  createdAt: Date;
  updatedAt: Date;
};

function parseFieldOverrides(raw: unknown): Partial<NewsletterBaseTemplateFields> | null {
  if (raw == null || typeof raw !== "object") return null;
  return raw as Partial<NewsletterBaseTemplateFields>;
}

async function requireAdmin() {
  const s = await auth();
  if (!s || s.user?.role !== "ADMIN") throw new Error("Unauthorized");
}

export async function listNewsletterBaseTemplates(): Promise<NewsletterBaseTemplateDto[]> {
  await requireAdmin();
  const rows = await prisma.newsletterBaseTemplate.findMany({ orderBy: { updatedAt: "desc" } });
  return rows.map((r) => ({
    ...r,
    fieldOverrides: parseFieldOverrides(r.fieldOverrides),
  }));
}

export async function createMissingNewsletterBaseTemplatePresets(): Promise<number> {
  await requireAdmin();
  const existing = await prisma.newsletterBaseTemplate.findMany({ select: { name: true } });
  const names = new Set(existing.map((e) => e.name.toLowerCase()));
  let created = 0;
  for (const preset of NEWSLETTER_BASE_TEMPLATE_PRESETS) {
    if (names.has(preset.name.toLowerCase())) continue;
    await prisma.newsletterBaseTemplate.create({
      data: {
        name: preset.name,
        description: preset.description,
        htmlDocument: preset.htmlDocument,
      },
    });
    created += 1;
  }
  revalidatePath(REVALIDATE);
  return created;
}

/**
 * Overwrite HTML (+ description) for rows whose name matches a built-in preset (e.g. "Newsletter Template 01").
 * Use this after we ship new preset markup so the DB is not stuck on an old Tailwind shell.
 */
export async function refreshBuiltInNewsletterBaseTemplatePresets(): Promise<{ updated: number }> {
  await requireAdmin();
  let updated = 0;
  for (const preset of NEWSLETTER_BASE_TEMPLATE_PRESETS) {
    const r = await prisma.newsletterBaseTemplate.updateMany({
      where: { name: preset.name },
      data: {
        htmlDocument: preset.htmlDocument,
        description: preset.description,
      },
    });
    updated += r.count;
  }
  revalidatePath(REVALIDATE);
  return { updated };
}

export async function createNewsletterBaseTemplate(input: {
  name: string;
  description?: string | null;
  htmlDocument: string;
  fieldOverrides?: Partial<NewsletterBaseTemplateFields> | null;
}): Promise<NewsletterBaseTemplateDto> {
  await requireAdmin();
  const name = input.name.trim();
  if (!name) throw new Error("Name is required");
  if (!baseTemplateContainsPlaceholder(input.htmlDocument)) {
    throw new Error(`HTML must include ${NEWSLETTER_DYNAMIC_CONTENT_PLACEHOLDER}`);
  }
  const global = await getNewsletterBaseSettings();
  const compact =
    input.fieldOverrides && Object.keys(input.fieldOverrides).length > 0
      ? compactFieldOverrides(global, input.fieldOverrides)
      : null;
  const row = await prisma.newsletterBaseTemplate.create({
    data: {
      name,
      description: input.description?.trim() || null,
      htmlDocument: input.htmlDocument,
      fieldOverrides: compact ?? undefined,
    },
  });
  revalidatePath(REVALIDATE);
  return { ...row, fieldOverrides: parseFieldOverrides(row.fieldOverrides) };
}

export async function updateNewsletterBaseTemplate(
  id: string,
  input: {
    name: string;
    description?: string | null;
    htmlDocument: string;
    fieldOverrides?: Partial<NewsletterBaseTemplateFields> | null;
  }
): Promise<NewsletterBaseTemplateDto> {
  await requireAdmin();
  if (!baseTemplateContainsPlaceholder(input.htmlDocument)) {
    throw new Error(`HTML must include ${NEWSLETTER_DYNAMIC_CONTENT_PLACEHOLDER}`);
  }
  const global = await getNewsletterBaseSettings();
  const compact =
    input.fieldOverrides && Object.keys(input.fieldOverrides).length > 0
      ? compactFieldOverrides(global, input.fieldOverrides)
      : null;
  const row = await prisma.newsletterBaseTemplate.update({
    where: { id },
    data: {
      name: input.name.trim(),
      description: input.description?.trim() || null,
      htmlDocument: input.htmlDocument,
      fieldOverrides:
        compact === null ? Prisma.JsonNull : (compact as Prisma.InputJsonValue),
    },
  });
  revalidatePath(REVALIDATE);
  return { ...row, fieldOverrides: parseFieldOverrides(row.fieldOverrides) };
}

export async function deleteNewsletterBaseTemplate(id: string): Promise<void> {
  await requireAdmin();
  await prisma.newsletterBaseTemplate.delete({ where: { id } });
  revalidatePath(REVALIDATE);
}

/**
 * Copy a base template under a new name. Optionally bake current global logo/links into the HTML
 * (placeholders replaced except `{{dynamic_content}}`).
 */
export async function duplicateNewsletterBaseTemplate(
  sourceId: string,
  newName: string,
  options?: { bakeGlobalLinks?: boolean; description?: string | null }
): Promise<NewsletterBaseTemplateDto> {
  await requireAdmin();
  const src = await prisma.newsletterBaseTemplate.findUnique({ where: { id: sourceId } });
  if (!src) throw new Error("Template not found");
  const name = newName.trim();
  if (!name) throw new Error("Name is required");

  let htmlDocument = src.htmlDocument;
  if (options?.bakeGlobalLinks) {
    const settings = await getNewsletterBaseSettings();
    const merged = effectiveTemplateFields(settings, parseFieldOverrides(src.fieldOverrides));
    htmlDocument = applyBaseTemplateFields(htmlDocument, merged);
  }
  if (!baseTemplateContainsPlaceholder(htmlDocument)) {
    throw new Error(`HTML must still include ${NEWSLETTER_DYNAMIC_CONTENT_PLACEHOLDER}`);
  }

  const row = await prisma.newsletterBaseTemplate.create({
    data: {
      name,
      description: options?.description?.trim() ?? src.description,
      htmlDocument,
      fieldOverrides: parseFieldOverrides(src.fieldOverrides) ?? undefined,
    },
  });
  revalidatePath(REVALIDATE);
  return { ...row, fieldOverrides: parseFieldOverrides(row.fieldOverrides) };
}

export async function getNewsletterBaseSettings(): Promise<NewsletterBaseTemplateFields> {
  await requireAdmin();
  const settingsModel = (prisma as unknown as { newsletterBaseSettings?: { findUnique: (args: { where: { id: string } }) => Promise<{ fields: unknown } | null> } })
    .newsletterBaseSettings;
  if (!settingsModel) {
    return NEWSLETTER_BASE_TEMPLATE_DEFAULT_FIELDS;
  }
  const row = await settingsModel.findUnique({ where: { id: "default" } });
  return normalizeBaseTemplateFields((row?.fields ?? undefined) as Partial<NewsletterBaseTemplateFields> | undefined);
}

export async function saveNewsletterBaseSettings(
  fields: Partial<NewsletterBaseTemplateFields>
): Promise<NewsletterBaseTemplateFields> {
  await requireAdmin();
  const normalized = normalizeBaseTemplateFields(fields);
  const settingsModel = (prisma as unknown as {
    newsletterBaseSettings?: {
      upsert: (args: {
        where: { id: string };
        update: { fields: NewsletterBaseTemplateFields };
        create: { id: string; fields: NewsletterBaseTemplateFields };
      }) => Promise<unknown>;
    };
  }).newsletterBaseSettings;
  if (!settingsModel) {
    return normalized;
  }
  await settingsModel.upsert({
    where: { id: "default" },
    update: { fields: normalized },
    create: { id: "default", fields: normalized },
  });
  revalidatePath(REVALIDATE);
  return normalized;
}
