import { Metadata } from "next";
import prisma from "@/lib/prisma";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = { title: "Εγγραφές Newsletter | Admin" };
export const dynamic = "force-dynamic";

export default async function NewsletterSubscribersPage() {
  const subs = await (prisma as any).newsletterSubscriber.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="flex flex-1 flex-col">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Εγγραφές Newsletter
        </h1>
        <p className="text-muted-foreground text-sm mt-1">
          {subs.length} εγγραφή{subs.length !== 1 ? "ές" : ""} από το footer της ιστοσελίδας
        </p>
      </div>

      <div className="rounded-lg border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Email</TableHead>
              <TableHead>Όνομα</TableHead>
              <TableHead>Αποδοχή όρων</TableHead>
              <TableHead>IP</TableHead>
              <TableHead>Πηγή</TableHead>
              <TableHead>Ημερομηνία</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subs.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-muted-foreground py-10">
                  Δεν υπάρχουν εγγραφές ακόμη.
                </TableCell>
              </TableRow>
            ) : (
              subs.map((s: any) => (
                <TableRow key={s.id}>
                  <TableCell className="font-medium">{s.email}</TableCell>
                  <TableCell>{s.name || <span className="text-muted-foreground">—</span>}</TableCell>
                  <TableCell>
                    {s.termsAccepted ? (
                      <Badge variant="default">Ναι</Badge>
                    ) : (
                      <Badge variant="destructive">Όχι</Badge>
                    )}
                  </TableCell>
                  <TableCell className="font-mono text-xs">
                    {s.ipAddress || <span className="text-muted-foreground">—</span>}
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground">
                    {s.source || "—"}
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground">
                    {new Date(s.createdAt).toLocaleString("el-GR")}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
