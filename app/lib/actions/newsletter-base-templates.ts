"use server";

import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { NEWSLETTER_BASE_TEMPLATE_PRESETS } from "@/lib/newsletter-base-template-sample-html";
import {
  baseTemplateContainsPlaceholder,
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
  createdAt: Date;
  updatedAt: Date;
};

async function requireAdmin() {
  const s = await auth();
  if (!s || s.user?.role !== "ADMIN") throw new Error("Unauthorized");
}

export async function listNewsletterBaseTemplates(): Promise<NewsletterBaseTemplateDto[]> {
  await requireAdmin();
  return prisma.newsletterBaseTemplate.findMany({ orderBy: { updatedAt: "desc" } });
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

export async function createNewsletterBaseTemplate(input: {
  name: string;
  description?: string | null;
  htmlDocument: string;
}): Promise<NewsletterBaseTemplateDto> {
  await requireAdmin();
  const name = input.name.trim();
  if (!name) throw new Error("Name is required");
  if (!baseTemplateContainsPlaceholder(input.htmlDocument)) {
    throw new Error(`HTML must include ${NEWSLETTER_DYNAMIC_CONTENT_PLACEHOLDER}`);
  }
  const row = await prisma.newsletterBaseTemplate.create({
    data: {
      name,
      description: input.description?.trim() || null,
      htmlDocument: input.htmlDocument,
    },
  });
  revalidatePath(REVALIDATE);
  return row;
}

export async function updateNewsletterBaseTemplate(
  id: string,
  input: { name: string; description?: string | null; htmlDocument: string }
): Promise<NewsletterBaseTemplateDto> {
  await requireAdmin();
  if (!baseTemplateContainsPlaceholder(input.htmlDocument)) {
    throw new Error(`HTML must include ${NEWSLETTER_DYNAMIC_CONTENT_PLACEHOLDER}`);
  }
  const row = await prisma.newsletterBaseTemplate.update({
    where: { id },
    data: {
      name: input.name.trim(),
      description: input.description?.trim() || null,
      htmlDocument: input.htmlDocument,
    },
  });
  revalidatePath(REVALIDATE);
  return row;
}

export async function deleteNewsletterBaseTemplate(id: string): Promise<void> {
  await requireAdmin();
  await prisma.newsletterBaseTemplate.delete({ where: { id } });
  revalidatePath(REVALIDATE);
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
