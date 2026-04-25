"use server";

import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export type LegalPageData = {
  id: string;
  titleEl: string;
  titleEn: string;
  contentEl: string;
  contentEn: string;
};

const DEFAULTS: Record<string, LegalPageData> = {
  "privacy-policy": {
    id: "privacy-policy",
    titleEl: "Πολιτική Απορρήτου",
    titleEn: "Privacy Policy",
    contentEl: "<p>Περιεχόμενο πολιτικής απορρήτου...</p>",
    contentEn: "<p>Privacy policy content...</p>",
  },
  "cookie-policy": {
    id: "cookie-policy",
    titleEl: "Πολιτική Cookies",
    titleEn: "Cookie Policy",
    contentEl: "<p>Περιεχόμενο πολιτικής cookies...</p>",
    contentEn: "<p>Cookie policy content...</p>",
  },
};

export async function getLegalPage(id: string): Promise<LegalPageData> {
  const row = await prisma.legalPage.findUnique({ where: { id } });
  const def = DEFAULTS[id] ?? {
    id,
    titleEl: id,
    titleEn: id,
    contentEl: "",
    contentEn: "",
  };
  if (!row) return def;
  return {
    id: row.id,
    titleEl: row.titleEl || def.titleEl,
    titleEn: row.titleEn || def.titleEn,
    contentEl: row.contentEl || def.contentEl,
    contentEn: row.contentEn || def.contentEn,
  };
}

export async function getAdminLegalPage(id: string): Promise<LegalPageData> {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }
  return getLegalPage(id);
}

export async function updateLegalPageAction(data: LegalPageData) {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") {
    return { success: false as const, error: "Unauthorized" };
  }

  await prisma.legalPage.upsert({
    where: { id: data.id },
    create: {
      id: data.id,
      titleEl: data.titleEl,
      titleEn: data.titleEn,
      contentEl: data.contentEl,
      contentEn: data.contentEn,
    },
    update: {
      titleEl: data.titleEl,
      titleEn: data.titleEn,
      contentEl: data.contentEl,
      contentEn: data.contentEn,
    },
  });

  revalidatePath(`/admin/legal/${data.id}`);
  return { success: true as const };
}
