"use server";

import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import {
  homeLocaleContentSchema,
  defaultHomeContentEL,
  defaultHomeContentEN,
  mergeHomeContent,
  type HomeLocaleContent,
} from "@/lib/home-content";
import { revalidatePath } from "next/cache";

const PAGE_ID = "home";

export async function getPublicHomePage() {
  const row = await prisma.homePage.findUnique({ where: { id: PAGE_ID } });
  const el = mergeHomeContent(row?.contentEL, defaultHomeContentEL);
  const en = mergeHomeContent(row?.contentEN, defaultHomeContentEN);
  return { contentEL: el, contentEN: en };
}

export async function getAdminHomePage() {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }
  return getPublicHomePage();
}

export async function updateHomePageAction(data: {
  contentEL: HomeLocaleContent;
  contentEN: HomeLocaleContent;
}) {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") {
    return { success: false as const, error: "Unauthorized" };
  }

  const el = homeLocaleContentSchema.safeParse(data.contentEL);
  const en = homeLocaleContentSchema.safeParse(data.contentEN);
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

  await prisma.homePage.upsert({
    where: { id: PAGE_ID },
    create: {
      id: PAGE_ID,
      contentEL: el.data as object,
      contentEN: en.data as object,
    },
    update: {
      contentEL: el.data as object,
      contentEN: en.data as object,
    },
  });

  revalidatePath("/");
  revalidatePath("/admin/first-page");
  return { success: true as const };
}
