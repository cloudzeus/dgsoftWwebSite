"use server"

import { revalidatePath } from "next/cache"
import { auth } from "@/auth"
import prisma from "@/lib/prisma"

export type SenderProfileFields = {
  senderName: string
  senderEmail: string
  logoUrl: string
  tagline: string
  facebookUrl: string
  instagramUrl: string
  linkedinUrl: string
  xUrl: string
  addressLine: string
  phone: string
  contactEmail: string
  privacyPolicyUrl: string
  termsUrl: string
  unsubscribeUrl: string
}

export type SenderProfileDto = SenderProfileFields & {
  id: string
  presenceId: string
  presenceName: string
  presenceLogoFallback: string | null
}

async function requireAdmin() {
  const session = await auth()
  if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized")
}

export async function getNewsletterSenderProfiles(): Promise<SenderProfileDto[]> {
  await requireAdmin()
  const rows = await prisma.newsletterSenderProfile.findMany({
    include: { presence: { select: { nameEL: true, logo: true } } },
    orderBy: { presence: { nameEL: "asc" } },
  })
  return rows.map((r) => ({
    id: r.id,
    presenceId: r.presenceId,
    presenceName: r.presence.nameEL,
    presenceLogoFallback: r.presence.logo,
    senderName: r.senderName ?? "",
    senderEmail: r.senderEmail ?? "",
    logoUrl: r.logoUrl ?? "",
    tagline: r.tagline ?? "",
    facebookUrl: r.facebookUrl ?? "",
    instagramUrl: r.instagramUrl ?? "",
    linkedinUrl: r.linkedinUrl ?? "",
    xUrl: r.xUrl ?? "",
    addressLine: r.addressLine ?? "",
    phone: r.phone ?? "",
    contactEmail: r.contactEmail ?? "",
    privacyPolicyUrl: r.privacyPolicyUrl ?? "",
    termsUrl: r.termsUrl ?? "",
    unsubscribeUrl: r.unsubscribeUrl ?? "",
  }))
}

/** Returns all Presence entries that don't yet have a newsletter profile. */
export async function getPresencesWithoutProfile() {
  await requireAdmin()
  const rows = await prisma.presence.findMany({
    where: { newsletterProfile: null },
    orderBy: { nameEL: "asc" },
    select: { id: true, nameEL: true, logo: true, email: true, phone: true, addressEL: true, cityEL: true },
  })
  return rows
}

export async function createNewsletterSenderProfile(
  presenceId: string,
  fields: Partial<SenderProfileFields>
): Promise<{ id: string }> {
  await requireAdmin()
  const presence = await prisma.presence.findUnique({ where: { id: presenceId } })
  if (!presence) throw new Error("Location not found")

  const profile = await prisma.newsletterSenderProfile.create({
    data: {
      presenceId,
      senderName: fields.senderName || presence.nameEL,
      senderEmail: fields.senderEmail || presence.email || "",
      logoUrl: fields.logoUrl || presence.logo || "",
      tagline: fields.tagline || "",
      facebookUrl: fields.facebookUrl || "",
      instagramUrl: fields.instagramUrl || "",
      linkedinUrl: fields.linkedinUrl || "",
      xUrl: fields.xUrl || "",
      addressLine: fields.addressLine || [presence.addressEL, presence.cityEL].filter(Boolean).join(", ") || "",
      phone: fields.phone || presence.phone || "",
      contactEmail: fields.contactEmail || presence.email || "",
      privacyPolicyUrl: fields.privacyPolicyUrl || "",
      termsUrl: fields.termsUrl || "",
      unsubscribeUrl: fields.unsubscribeUrl || "",
    },
  })

  revalidatePath("/admin/newsletter/companies")
  return { id: profile.id }
}

export async function updateNewsletterSenderProfile(
  id: string,
  fields: Partial<SenderProfileFields>
): Promise<void> {
  await requireAdmin()
  await prisma.newsletterSenderProfile.update({
    where: { id },
    data: {
      senderName: fields.senderName,
      senderEmail: fields.senderEmail,
      logoUrl: fields.logoUrl,
      tagline: fields.tagline,
      facebookUrl: fields.facebookUrl,
      instagramUrl: fields.instagramUrl,
      linkedinUrl: fields.linkedinUrl,
      xUrl: fields.xUrl,
      addressLine: fields.addressLine,
      phone: fields.phone,
      contactEmail: fields.contactEmail,
      privacyPolicyUrl: fields.privacyPolicyUrl,
      termsUrl: fields.termsUrl,
      unsubscribeUrl: fields.unsubscribeUrl,
    },
  })
  revalidatePath("/admin/newsletter/companies")
}

export async function deleteNewsletterSenderProfile(id: string): Promise<void> {
  await requireAdmin()
  await prisma.newsletterSenderProfile.delete({ where: { id } })
  revalidatePath("/admin/newsletter/companies")
}

/**
 * One-shot creation of a brand-new sender company from the wizard:
 * provisions both the `Presence` row and the `NewsletterSenderProfile` row in a single
 * transaction, then returns the fully-formed SenderProfileDto so the wizard can prepend
 * it to its local list and auto-select it.
 */
export async function createNewsletterCompanyInline(
  fields: Partial<SenderProfileFields> & { presenceName: string }
): Promise<SenderProfileDto> {
  await requireAdmin()
  const name = fields.presenceName.trim()
  if (!name) throw new Error("Το όνομα εταιρείας είναι υποχρεωτικό")

  const created = await prisma.$transaction(async (tx) => {
    const presence = await tx.presence.create({
      data: {
        nameEL: name,
        email: fields.contactEmail || null,
        phone: fields.phone || null,
        addressEL: fields.addressLine || null,
        logo: fields.logoUrl || null,
        published: false, // hidden from public site by default
      },
    })
    const profile = await tx.newsletterSenderProfile.create({
      data: {
        presenceId: presence.id,
        senderName: fields.senderName || name,
        senderEmail: fields.senderEmail || "",
        logoUrl: fields.logoUrl || "",
        tagline: fields.tagline || "",
        facebookUrl: fields.facebookUrl || "",
        instagramUrl: fields.instagramUrl || "",
        linkedinUrl: fields.linkedinUrl || "",
        xUrl: fields.xUrl || "",
        addressLine: fields.addressLine || "",
        phone: fields.phone || "",
        contactEmail: fields.contactEmail || "",
        privacyPolicyUrl: fields.privacyPolicyUrl || "",
        termsUrl: fields.termsUrl || "",
        unsubscribeUrl: fields.unsubscribeUrl || "",
      },
      include: { presence: { select: { nameEL: true, logo: true } } },
    })
    return profile
  })

  revalidatePath("/admin/newsletter/companies")

  return {
    id: created.id,
    presenceId: created.presenceId,
    presenceName: created.presence.nameEL,
    presenceLogoFallback: created.presence.logo,
    senderName: created.senderName ?? "",
    senderEmail: created.senderEmail ?? "",
    logoUrl: created.logoUrl ?? "",
    tagline: created.tagline ?? "",
    facebookUrl: created.facebookUrl ?? "",
    instagramUrl: created.instagramUrl ?? "",
    linkedinUrl: created.linkedinUrl ?? "",
    xUrl: created.xUrl ?? "",
    addressLine: created.addressLine ?? "",
    phone: created.phone ?? "",
    contactEmail: created.contactEmail ?? "",
    privacyPolicyUrl: created.privacyPolicyUrl ?? "",
    termsUrl: created.termsUrl ?? "",
    unsubscribeUrl: created.unsubscribeUrl ?? "",
  }
}
