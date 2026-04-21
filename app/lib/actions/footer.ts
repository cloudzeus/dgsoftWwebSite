"use server";

import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import {
  footerLocaleContentSchema,
  defaultFooterContentEL,
  defaultFooterContentEN,
  mergeFooterContent,
  type FooterLocaleContent,
} from "@/lib/footer-content";
import { revalidatePath } from "next/cache";

const FOOTER_ID = "footer";

export async function getPublicFooter() {
  const row = await prisma.siteFooter.findUnique({ where: { id: FOOTER_ID } });
  const el = mergeFooterContent(row?.contentEL, defaultFooterContentEL);
  const en = mergeFooterContent(row?.contentEN, defaultFooterContentEN);
  return { contentEL: el, contentEN: en };
}

export async function getAdminFooter() {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }
  return getPublicFooter();
}

export async function updateFooterAction(data: {
  contentEL: FooterLocaleContent;
  contentEN: FooterLocaleContent;
}) {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") {
    return { success: false as const, error: "Unauthorized" };
  }

  const el = footerLocaleContentSchema.safeParse(data.contentEL);
  const en = footerLocaleContentSchema.safeParse(data.contentEN);
  if (!el.success) {
    return {
      success: false as const,
      error: "Invalid Greek content: " + el.error.message,
    };
  }
  if (!en.success) {
    return {
      success: false as const,
      error: "Invalid English content: " + en.error.message,
    };
  }

  await prisma.siteFooter.upsert({
    where: { id: FOOTER_ID },
    create: {
      id: FOOTER_ID,
      contentEL: el.data as object,
      contentEN: en.data as object,
    },
    update: {
      contentEL: el.data as object,
      contentEN: en.data as object,
    },
  });

  revalidatePath("/", "layout");
  revalidatePath("/admin/footer");
  return { success: true as const };
}
