import { Metadata } from "next"
import { getNewsletterWizardData } from "@/app/lib/actions/newsletter"
import { NewsletterWizardClient } from "@/components/newsletter/wizard/NewsletterWizardClient"

export const metadata: Metadata = { title: "Νέα Εκστρατεία | Οδηγός" }

export default async function WizardPage() {
  const data = await getNewsletterWizardData()
  return <NewsletterWizardClient {...data} />
}
