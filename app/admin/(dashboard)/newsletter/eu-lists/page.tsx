import { Metadata } from "next";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getEuProgramRecipientLists } from "@/app/lib/actions/eu-program-recipient-list";
import { EuListsClient } from "./EuListsClient";

export const dynamic = "force-dynamic";

export const metadata: Metadata = { title: "EU Lists | Newsletter" };

export default async function EuListsPage() {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") redirect("/admin/login");

  const lists = await getEuProgramRecipientLists();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">EU Lists</h1>
        <p className="text-muted-foreground text-sm">
          Saved recipient lists built from EU program KAD and regional eligibility. Use EU Programs → Generate email list
          to create new lists.
        </p>
      </div>
      <EuListsClient initialLists={lists} />
    </div>
  );
}
