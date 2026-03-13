"use client";

import * as React from "react";
import { Mail, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { sendEmailViaMailgun } from "@/app/lib/actions/email";
import { toast } from "sonner";

export type SendEmailFormProps = {
  /** Prefill recipient (e.g. from customer row) */
  defaultTo?: string;
  /** Prefill subject */
  defaultSubject?: string;
  /** Optional sender display name (e.g. "DGSOFT") */
  defaultFromName?: string;
  /** Optional reply-to address */
  defaultReplyTo?: string;
  /** Compact layout (e.g. inside modal) */
  compact?: boolean;
  className?: string;
};

export function SendEmailForm({
  defaultTo = "",
  defaultSubject = "",
  defaultFromName = "DGSOFT",
  defaultReplyTo = "",
  compact = false,
  className,
}: SendEmailFormProps) {
  const [to, setTo] = React.useState(defaultTo);
  const [subject, setSubject] = React.useState(defaultSubject);
  const [body, setBody] = React.useState("");
  const [fromName, setFromName] = React.useState(defaultFromName);
  const [replyTo, setReplyTo] = React.useState(defaultReplyTo);
  const [useHtml, setUseHtml] = React.useState(false);
  const [isPending, startTransition] = React.useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!to.trim()) {
      toast.error("Recipient is required");
      return;
    }
    if (!subject.trim()) {
      toast.error("Subject is required");
      return;
    }
    if (!body.trim()) {
      toast.error("Message body is required");
      return;
    }

    startTransition(async () => {
      const result = await sendEmailViaMailgun({
        to: to.trim(),
        subject: subject.trim(),
        text: useHtml ? undefined : body.trim(),
        html: useHtml ? body.trim() : undefined,
        fromName: fromName.trim() || undefined,
        replyTo: replyTo.trim() || undefined,
      });

      if (result.success) {
        toast.success("Email sent");
        setBody("");
      } else {
        toast.error(result.message ?? "Failed to send email");
      }
    });
  };

  const labelClass = compact ? "text-[10px] font-semibold uppercase text-zinc-500" : "text-sm font-medium";
  const inputClass = compact ? "h-8 text-sm rounded-md" : "rounded-md";

  return (
    <Card className={className}>
      <CardHeader className={compact ? "pb-2 pt-4 px-4" : undefined}>
        <CardTitle className="flex items-center gap-2 text-base">
          <Mail className="w-4 h-4" />
          Send email via Mailgun
        </CardTitle>
        <CardDescription className="text-xs">
          Uses MAILGUN_DOMAIN and MAILGUN_ENDPOINT from your environment.
        </CardDescription>
      </CardHeader>
      <CardContent className={compact ? "px-4 pb-4" : undefined}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email-to" className={labelClass}>
              To
            </Label>
            <Input
              id="email-to"
              type="email"
              placeholder="recipient@example.com"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className={inputClass}
              disabled={isPending}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email-subject" className={labelClass}>
              Subject
            </Label>
            <Input
              id="email-subject"
              type="text"
              placeholder="Email subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={inputClass}
              disabled={isPending}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email-body" className={labelClass}>
              Message
            </Label>
            <Textarea
              id="email-body"
              placeholder={useHtml ? "HTML content…" : "Plain text message…"}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={compact ? 4 : 6}
              className={`resize-y text-sm ${compact ? "min-h-[80px]" : ""}`}
              disabled={isPending}
            />
            {!compact && (
              <label className="flex items-center gap-2 text-xs text-zinc-500">
                <input
                  type="checkbox"
                  checked={useHtml}
                  onChange={(e) => setUseHtml(e.target.checked)}
                  className="rounded border-zinc-300"
                />
                Send as HTML
              </label>
            )}
          </div>
          {!compact && (
            <>
              <div className="space-y-2">
                <Label htmlFor="email-from-name" className={labelClass}>
                  From name (optional)
                </Label>
                <Input
                  id="email-from-name"
                  type="text"
                  placeholder="DGSOFT"
                  value={fromName}
                  onChange={(e) => setFromName(e.target.value)}
                  className={inputClass}
                  disabled={isPending}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-reply-to" className={labelClass}>
                  Reply-To (optional)
                </Label>
                <Input
                  id="email-reply-to"
                  type="email"
                  placeholder="reply@dgsmart.gr"
                  value={replyTo}
                  onChange={(e) => setReplyTo(e.target.value)}
                  className={inputClass}
                  disabled={isPending}
                />
              </div>
            </>
          )}
          <Button type="submit" disabled={isPending} className="gap-2">
            {isPending ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
            {isPending ? "Sending…" : "Send email"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
