import { Metadata } from "next"
import { getCvApplications } from "@/app/lib/actions/career"
import { DataTableCvApplications } from "@/components/admin/careers/data-table-cv-applications"

export const metadata: Metadata = { title: "Αιτήσεις CV | Admin" }

export default async function CvApplicationsPage() {
  const applications = await getCvApplications()

  return (
    <div className="flex flex-1 flex-col p-4 md:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Αιτήσεις CV</h1>
        <p className="text-muted-foreground text-sm mt-1">
          {applications.length} αίτηση{applications.length !== 1 ? "εις" : ""} ελήφθη{applications.length !== 1 ? "σαν" : ""}
        </p>
      </div>
      <DataTableCvApplications data={applications as any} />
    </div>
  )
}
