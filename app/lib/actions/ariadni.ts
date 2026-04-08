"use server";

import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import {
  ariadniLocaleContentSchema,
  defaultAriadniContentEL,
  defaultAriadniContentEN,
  DEFAULT_LOGO_URL,
  DEFAULT_ESPA_PDF_URL,
  DEFAULT_ESPA_PDF_BANNER_URL,
  mergeAriadniContent,
  type AriadniLocaleContent,
} from "@/lib/ariadni-content";
import { revalidatePath } from "next/cache";

const PAGE_ID = "ariadni";

export async function getPublicAriadniPage() {
  const row = await prisma.ariadniPage.findUnique({ where: { id: PAGE_ID } });
  const logoUrl = row?.logoUrl?.trim() || DEFAULT_LOGO_URL;
  const espaPdfUrl = row?.espaPdfUrl?.trim() || DEFAULT_ESPA_PDF_URL;
  const espaPdfBannerUrl =
    row?.espaPdfBannerUrl?.trim() || DEFAULT_ESPA_PDF_BANNER_URL;
  const el = mergeAriadniContent(row?.contentEL, defaultAriadniContentEL);
  const en = mergeAriadniContent(row?.contentEN, defaultAriadniContentEN);
  return {
    logoUrl,
    espaPdfUrl,
    espaPdfBannerUrl,
    contentEL: el,
    contentEN: en,
  };
}

export async function getAdminAriadniPage() {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }
  return getPublicAriadniPage();
}

export async function updateAriadniPageAction(data: {
  logoUrl: string | null;
  espaPdfUrl: string | null;
  espaPdfBannerUrl: string | null;
  contentEL: AriadniLocaleContent;
  contentEN: AriadniLocaleContent;
}) {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") {
    return { success: false as const, error: "Unauthorized" };
  }

  const el = ariadniLocaleContentSchema.safeParse(data.contentEL);
  const en = ariadniLocaleContentSchema.safeParse(data.contentEN);
  if (!el.success) {
    return { success: false as const, error: "Invalid Greek content: " + el.error.message };
  }
  if (!en.success) {
    return { success: false as const, error: "Invalid English content: " + en.error.message };
  }

  await prisma.ariadniPage.upsert({
    where: { id: PAGE_ID },
    create: {
      id: PAGE_ID,
      logoUrl: data.logoUrl?.trim() || null,
      espaPdfUrl: data.espaPdfUrl?.trim() || null,
      espaPdfBannerUrl: data.espaPdfBannerUrl?.trim() || null,
      contentEL: el.data as object,
      contentEN: en.data as object,
    },
    update: {
      logoUrl: data.logoUrl?.trim() || null,
      espaPdfUrl: data.espaPdfUrl?.trim() || null,
      espaPdfBannerUrl: data.espaPdfBannerUrl?.trim() || null,
      contentEL: el.data as object,
      contentEN: en.data as object,
    },
  });

  revalidatePath("/ariadni");
  revalidatePath("/admin/ariadni");
  return { success: true as const };
}
