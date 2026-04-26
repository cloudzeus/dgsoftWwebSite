import { Metadata } from "next"
import { getDownloads } from "@/app/lib/actions/download"
import { DataTableDownloads } from "@/components/admin/downloads/data-table-downloads"

export const metadata: Metadata = { title: "Λήψεις | Admin" }

export default async function DownloadsPage() {
  const downloads = await getDownloads()

  return (
    <div className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Λήψεις</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Διαχείριση αρχείων προς λήψη που εμφανίζονται στην ιστοσελίδα. Σύρετε γραμμές για αναδιάταξη.
          </p>
        </div>
      </div>
      <DataTableDownloads data={downloads as any} />
    </div>
  )
}
