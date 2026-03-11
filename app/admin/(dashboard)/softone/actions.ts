"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { softOneLoginAndAuthenticate } from "@/lib/softone"
import { SOFTONE_CLIENT_ID_COOKIE, getSoftoneCookieOptions } from "@/lib/softone-cookie"

const SOFTONE_PAGE = "/admin/softone"

export async function revalidateSoftOneAction() {
  revalidatePath(SOFTONE_PAGE)
}

export async function loginSoftOneAction() {
  const result = await softOneLoginAndAuthenticate()
  if (!("clientID" in result)) {
    const message = (result as { message?: string }).message ?? "SoftOne login failed"
    redirect(`${SOFTONE_PAGE}?error=${encodeURIComponent(message)}`)
  }
  const cookieStore = await cookies()
  cookieStore.set(SOFTONE_CLIENT_ID_COOKIE, result.clientID, getSoftoneCookieOptions(false))
  revalidatePath(SOFTONE_PAGE)
  redirect(SOFTONE_PAGE)
}

export async function logoutSoftOneAction() {
  const cookieStore = await cookies()
  cookieStore.set(SOFTONE_CLIENT_ID_COOKIE, "", getSoftoneCookieOptions(true))
  revalidatePath(SOFTONE_PAGE)
}

export async function showObjectsAction() {
  redirect(`${SOFTONE_PAGE}?showObjects=1`)
}
