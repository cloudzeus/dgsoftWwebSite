import { Metadata } from "next"
import { getNewsletterSenderProfiles, getPresencesWithoutProfile } from "@/app/lib/actions/newsletter-sender-profiles"
import { NewsletterCompaniesClient } from "./NewsletterCompaniesClient"
import { BuildingIcon } from "lucide-react"

export const metadata: Metadata = { title: "Εταιρείες Αποστολής | Admin" }

export default async function NewsletterCompaniesPage() {
  const [profiles, available] = await Promise.all([
    getNewsletterSenderProfiles(),
    getPresencesWithoutProfile(),
  ])

  return (
    <div className="min-h-screen bg-[#F3F2F1]">
      <div className="bg-white border-b border-[#EDEBE9] px-5 py-4 flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-[#EFF6FC] border border-[#C7E0F4] flex items-center justify-center shrink-0">
          <BuildingIcon className="w-4 h-4 text-[#0078D4]" />
        </div>
        <div>
          <h1 className="text-base font-bold text-[#201F1E] leading-tight">Εταιρείες Αποστολής</h1>
          <p className="text-[11px] text-[#A19F9D] mt-0.5">
            Στοιχεία εταιρειών για χρήση στα newsletter — λογότυπα, social, διεύθυνση
          </p>
        </div>
      </div>
      <div className="p-5">
        <NewsletterCompaniesClient profiles={profiles} availableLocations={available} />
      </div>
    </div>
  )
}
