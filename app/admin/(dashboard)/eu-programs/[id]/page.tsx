import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { getEuProgramById } from "@/app/lib/actions/eu-program"
import { EuProgramDetailsPage } from "@/components/admin/eu-programs/eu-program-details-page"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = { title: "EU Program Details | Admin" }

type Props = { params: Promise<{ id: string }> }

export default async function EuProgramDetailsRoute({ params }: Props) {
  const { id } = await params
  const program = await getEuProgramById(id)
  if (!program) notFound()

  return (
    <div className="flex flex-1 flex-col p-4 md:p-6">
      <div className="mb-6 flex items-center gap-4">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/admin/eu-programs" className="gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to programs
          </Link>
        </Button>
      </div>
      <EuProgramDetailsPage program={program} />
    </div>
  )
}
