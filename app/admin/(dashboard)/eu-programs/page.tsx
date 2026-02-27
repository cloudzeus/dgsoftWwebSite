import { Metadata } from "next"
import { getEuPrograms } from "@/app/lib/actions/eu-program"
import { EuProgramsClient } from "@/components/admin/eu-programs/eu-programs-client"

export const metadata: Metadata = { title: "EU Programs | Admin Dashboard" }

export default async function EuProgramsPage() {
  const programs = await getEuPrograms()

  return (
    <div className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">EU Programs Management</h1>
      </div>
      <EuProgramsClient data={programs} />
    </div>
  )
}
