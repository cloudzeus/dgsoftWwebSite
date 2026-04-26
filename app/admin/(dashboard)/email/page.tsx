import { Metadata } from "next";
import { SendEmailForm } from "@/components/email/send-email-form";

export const metadata: Metadata = { title: "Αποστολή Email | Admin" };

export default function AdminEmailPage() {
  return (
    <div className="flex flex-1 flex-col p-4 md:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Αποστολή Email</h1>
        <p className="text-sm text-muted-foreground mt-1">Αποστολή μηνυμάτων μέσω Mailgun (MAILGUN_DOMAIN / MAILGUN_ENDPOINT).</p>
      </div>
      <div className="max-w-xl">
        <SendEmailForm defaultFromName="DGSOFT" defaultReplyTo="connect@dgsmart.gr" />
      </div>
    </div>
  );
}
