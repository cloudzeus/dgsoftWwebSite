import { Metadata } from "next"

export const dynamic = "force-dynamic"
import { getUsers } from "@/app/lib/actions/user"
import { DataTableUsers } from "@/components/admin/users/data-table-users"

export const metadata: Metadata = { title: "System Users | Admin Dashboard" }

export default async function UsersPage() {
  const users = await getUsers()

  return (
    <div className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">System Users</h1>
      </div>
      <DataTableUsers data={users as any} />
    </div>
  )
}
