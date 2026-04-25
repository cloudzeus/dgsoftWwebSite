"use client";

import * as React from "react";
import { Loader2, Mail, Users } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
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
      <DialogContent className="max-w-2xl p-0 overflow-hidden rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.12),0_2px_6px_rgba(0,0,0,0.08)]">

        {/* Header */}
        <DialogHeader className="px-5 py-4 border-b border-[#EDEBE9] bg-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-[#EFF6FC] border border-[#C7E0F4] flex items-center justify-center shrink-0">
              <Mail className="w-4 h-4 text-[#0078D4]" />
            </div>
            <div>
              <DialogTitle className="text-sm font-bold text-[#201F1E]">
                Generate Email List
              </DialogTitle>
              <DialogDescription className="text-[11px] text-[#A19F9D]">
                {program ? program.nameEL : "Select a program to continue"}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        {/* Body — canvas */}
        <div className="bg-[#F3F2F1] px-4 py-4 max-h-[70vh] overflow-y-auto space-y-3">

          {/* Info card */}
          {program && (
            <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D]">MATCHING RULES</p>
              <p className="text-[11px] text-[#605E5C] leading-relaxed">
                Matches use the same KAD prefix rules as program validation and the program&apos;s linked regions
                (address → region mapping). All matching clients are pre-selected — uncheck any row before saving.
              </p>
            </div>
          )}

          {/* Selection controls card */}
          <div className="bg-white border border-[#EDEBE9] rounded-lg px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-[#A19F9D]" />
                <span className="text-[11px] font-semibold text-[#605E5C]">
                  {loading ? "Loading recipients…" : `${selected.size} of ${rows.length} selected`}
                </span>
              </div>
              <div className="flex gap-1.5">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={selectAll}
                  disabled={loading || rows.length === 0}
                  className="h-7 px-3 text-[11px] font-semibold text-[#0078D4] hover:bg-[#EFF6FC]"
                >
                  Select all
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={selectNone}
                  disabled={loading || rows.length === 0}
                  className="h-7 px-3 text-[11px] font-semibold text-[#605E5C] hover:bg-[#EDEBE9]"
                >
                  Clear
                </Button>
              </div>
            </div>
          </div>

          {/* Recipients list card */}
          <div className="bg-white border border-[#EDEBE9] rounded-lg overflow-hidden">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] px-4 pt-3 pb-2">RECIPIENTS</p>
            {loading ? (
              <div className="flex items-center justify-center py-12 text-[#A19F9D] gap-2">
                <Loader2 className="h-5 w-5 animate-spin" />
                <span className="text-[11px] font-semibold">Building recipient list…</span>
              </div>
            ) : rows.length === 0 ? (
              <p className="py-10 text-center text-[11px] text-[#A19F9D] px-4">
                No customers match this program&apos;s KADs and regions (with a known email and address mapping where
                regions apply).
              </p>
            ) : (
              <div className="divide-y divide-[#EDEBE9]">
                {rows.map((r) => {
                  const k = rowKey(r);
                  const isOn = selected.has(k);
                  return (
                    <div
                      key={k}
                      className={`flex items-center gap-3 px-4 py-2.5 transition-colors ${isOn ? "bg-white" : "bg-[#FAFAF9]"} hover:bg-[#F3F2F1]`}
                    >
                      <Checkbox
                        id={k}
                        checked={isOn}
                        onCheckedChange={(c) => toggle(k, c === true)}
                        className="border-[#C8C6C4] data-[state=checked]:bg-[#0078D4] data-[state=checked]:border-[#0078D4]"
                      />
                      <Label htmlFor={k} className="flex-1 cursor-pointer font-normal leading-snug">
                        <span className="font-semibold text-[12px] text-[#201F1E]">{r.customerName}</span>
                        <span className="text-[#A19F9D] text-[11px] ml-2 font-mono">{r.customerCode}</span>
                        <br />
                        <span className="text-[11px] text-[#0078D4]">{r.email}</span>
                      </Label>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-[#EDEBE9] bg-white flex justify-end gap-2">
          <Button
            type="button"
            variant="ghost"
            onClick={() => onOpenChange(false)}
            disabled={saving}
            className="h-8 px-4 text-[12px] font-semibold text-[#605E5C] hover:bg-[#EDEBE9] hover:text-[#201F1E] rounded"
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={handleSave}
            disabled={saving || loading || selected.size === 0}
            className="h-8 px-5 text-[12px] font-semibold bg-[#0078D4] hover:bg-[#106EBE] text-white rounded shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,120,212,0.25)] transition-colors active:scale-95"
          >
            {saving ? (
              <>
                <Loader2 className="h-3 w-3 animate-spin mr-1.5" />
                Saving…
              </>
            ) : (
              `Save list${selected.size > 0 ? ` (${selected.size})` : ""}`
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
