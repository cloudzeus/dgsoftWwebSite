import { Metadata } from "next"
import { getEuProgramExpenseLimits } from "@/app/lib/actions/eu-program"
import { ExpenseLimitsClient } from "@/components/admin/eu-programs/expense-limits-client"
import { ClipboardList } from "lucide-react"

export const metadata: Metadata = { title: "Program Expense Limits | Admin Dashboard" }

export default async function ExpenseLimitsPage() {
  const limits = await getEuProgramExpenseLimits()

  return (
    <div className="min-h-screen bg-[#F3F2F1]">
      {/* Page header */}
      <div className="bg-white border-b border-[#EDEBE9] px-5 py-4 flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-[#EFF6FC] border border-[#C7E0F4] flex items-center justify-center shrink-0">
          <ClipboardList className="w-4 h-4 text-[#0078D4]" />
        </div>
        <div>
          <h1 className="text-base font-bold text-[#201F1E] leading-tight">Όρια δαπανών</h1>
          <p className="text-[11px] text-[#A19F9D] mt-0.5">
            Ανά πρόγραμμα ΕΣΠΑ — κλικ για ανάπτυξη κατηγοριών
          </p>
        </div>
      </div>

      <div className="p-5">
        <ExpenseLimitsClient limits={limits} />
      </div>
    </div>
  )
}
