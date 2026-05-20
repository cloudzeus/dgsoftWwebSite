"use server";

import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import {
  parseSiteSettings,
  siteSettingsSchema,
  type SiteSettings,
} from "@/lib/site-settings";

const SETTINGS_ID = "settings";

export async function getPublicSiteSettings(): Promise<SiteSettings> {
  const row = await prisma.siteSettings.findUnique({ where: { id: SETTINGS_ID } });
  return parseSiteSettings(row?.data);
}

export async function getAdminSiteSettings(): Promise<SiteSettings> {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }
  return getPublicSiteSettings();
}

export async function updateSiteSettingsAction(data: SiteSettings) {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") {
    return { success: false as const, error: "Unauthorized" };
  }
  const parsed = siteSettingsSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false as const, error: parsed.error.message };
  }
  await prisma.siteSettings.upsert({
    where: { id: SETTINGS_ID },
    create: { id: SETTINGS_ID, data: parsed.data as object },
    update: { data: parsed.data as object },
  });
  revalidatePath("/", "layout");
  revalidatePath("/admin/settings");
  return { success: true as const };
}
