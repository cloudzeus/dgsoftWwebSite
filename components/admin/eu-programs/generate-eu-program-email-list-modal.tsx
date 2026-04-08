"use client";

import * as React from "react";
import { Loader2, Mail } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  previewEuProgramRecipientList,
  saveEuProgramRecipientList,
  type EuProgramRecipientPreviewRow,
  type EuProgramRecipientStored,
} from "@/app/lib/actions/eu-program-recipient-list";

function rowKey(r: EuProgramRecipientPreviewRow) {
  return `${r.trdrId}::${r.email.toLowerCase()}`;
}

type ProgramRef = { id: string; nameEL: string };

export function GenerateEuProgramEmailListModal({
  program,
  open,
  onOpenChange,
  onSaved,
}: {
  program: ProgramRef | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSaved?: () => void;
}) {
  const [loading, setLoading] = React.useState(false);
  const [saving, setSaving] = React.useState(false);
  const [rows, setRows] = React.useState<EuProgramRecipientPreviewRow[]>([]);
  const [selected, setSelected] = React.useState<Set<string>>(new Set());

  React.useEffect(() => {
    if (!open || !program) {
      setRows([]);
      setSelected(new Set());
      return;
    }

    let cancelled = false;
    setLoading(true);
    previewEuProgramRecipientList(program.id)
      .then((list) => {
        if (cancelled) return;
        setRows(list);
        setSelected(new Set(list.map(rowKey)));
      })
      .catch((e: Error) => {
        toast.error(e.message || "Failed to load recipients");
        setRows([]);
        setSelected(new Set());
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [open, program?.id]);

  const toggle = (key: string, checked: boolean) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (checked) next.add(key);
      else next.delete(key);
      return next;
    });
  };

  const selectAll = () => setSelected(new Set(rows.map(rowKey)));
  const selectNone = () => setSelected(new Set());

  const handleSave = async () => {
    if (!program) return;
    const chosen: EuProgramRecipientStored[] = rows
      .filter((r) => selected.has(rowKey(r)))
      .map((r) => ({
        email: r.email,
        trdrId: r.trdrId,
        customerName: r.customerName,
        customerCode: r.customerCode,
      }));
    if (chosen.length === 0) {
      toast.error("Select at least one recipient");
      return;
    }
    setSaving(true);
    try {
      await saveEuProgramRecipientList(program.id, chosen);
      toast.success(`Saved list (${chosen.length} recipients)`);
      onOpenChange(false);
      onSaved?.();
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Failed to save list");
    } finally {
      setSaving(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] flex flex-col gap-0 p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-2 shrink-0">
          <DialogTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Generate email list
          </DialogTitle>
          <DialogDescription>
            {program ? (
              <>
                Matches use the same KAD prefix rules as program validation and the program&apos;s linked regions
                (address → region mapping). All matching clients are pre-selected; uncheck any row before saving.
                <span className="block mt-1 font-medium text-foreground">{program.nameEL}</span>
              </>
            ) : null}
          </DialogDescription>
        </DialogHeader>

        <div className="px-6 flex items-center justify-between gap-2 border-b border-border pb-3 shrink-0">
          <p className="text-sm text-muted-foreground">
            {loading ? "Loading…" : `${selected.size} of ${rows.length} selected`}
          </p>
          <div className="flex gap-2">
            <Button type="button" variant="outline" size="sm" onClick={selectAll} disabled={loading || rows.length === 0}>
              Select all
            </Button>
            <Button type="button" variant="outline" size="sm" onClick={selectNone} disabled={loading || rows.length === 0}>
              Clear
            </Button>
          </div>
        </div>

        <div className="flex-1 min-h-[240px] max-h-[50vh] overflow-y-auto px-6">
          {loading ? (
            <div className="flex items-center justify-center py-16 text-muted-foreground gap-2">
              <Loader2 className="h-5 w-5 animate-spin" />
              Building recipient list…
            </div>
          ) : rows.length === 0 ? (
            <p className="py-12 text-center text-sm text-muted-foreground">
              No customers match this program&apos;s KADs and regions (with a known email and address mapping where
              regions apply).
            </p>
          ) : (
            <div className="space-y-0 pr-1">
              {rows.map((r) => {
                const k = rowKey(r);
                const isOn = selected.has(k);
                return (
                  <div
                    key={k}
                    className="flex items-start gap-3 py-2.5 border-b border-border/60 last:border-0"
                  >
                    <Checkbox
                      id={k}
                      checked={isOn}
                      onCheckedChange={(c) => toggle(k, c === true)}
                      className="mt-1"
                    />
                    <Label htmlFor={k} className="flex-1 cursor-pointer font-normal leading-snug">
                      <span className="font-medium text-foreground">{r.customerName}</span>
                      <span className="text-muted-foreground text-xs ml-2 font-mono">{r.customerCode}</span>
                      <br />
                      <span className="text-sm text-primary">{r.email}</span>
                    </Label>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <DialogFooter className="p-6 pt-4 border-t border-border shrink-0">
          <Button type="button" variant="outline" onClick={() => onOpenChange(false)} disabled={saving}>
            Cancel
          </Button>
          <Button type="button" onClick={handleSave} disabled={saving || loading || selected.size === 0}>
            {saving ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                Saving…
              </>
            ) : (
              "Save list"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
