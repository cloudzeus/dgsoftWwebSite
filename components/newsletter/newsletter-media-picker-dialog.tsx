"use client";

import * as React from "react";
import { ImageIcon, Loader2 } from "lucide-react";
import { getNewsletterMedia } from "@/app/lib/actions/newsletter";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

type MediaRow = { id: string; url: string; name: string | null };

export function NewsletterMediaPickerDialog({
  open,
  onOpenChange,
  title,
  onSelect,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  onSelect: (url: string) => void;
}) {
  const [items, setItems] = React.useState<MediaRow[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    if (!open) return;
    setLoading(true);
    void getNewsletterMedia()
      .then((list) => {
        setItems(
          list.map((m) => ({
            id: m.id,
            url: m.url,
            name: m.name,
          }))
        );
      })
      .finally(() => setLoading(false));
  }, [open]);

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((m) => m.url.toLowerCase().includes(q) || (m.name ?? "").toLowerCase().includes(q));
  }, [items, query]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex max-h-[85vh] max-w-3xl flex-col gap-0 overflow-hidden p-0 rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.12),0_2px_6px_rgba(0,0,0,0.08)]">
        <DialogHeader className="shrink-0 px-5 py-4 border-b border-[#EDEBE9] bg-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-[#EFF6FC] border border-[#C7E0F4] flex items-center justify-center shrink-0">
              <ImageIcon className="w-4 h-4 text-[#0078D4]" />
            </div>
            <div>
              <DialogTitle className="text-sm font-bold text-[#201F1E]">
                {title ?? "Newsletter media gallery"}
              </DialogTitle>
              <DialogDescription className="text-[11px] text-[#A19F9D]">
                Choose an image from the media library. Upload more under Newsletter → Media gallery.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <div className="bg-[#F3F2F1] min-h-0 flex-1 overflow-y-auto px-5 py-4 space-y-3">
          <div className="bg-white border border-[#EDEBE9] rounded-lg p-3">
            <Input placeholder="Filter by name or URL…" value={query} onChange={(e) => setQuery(e.target.value)} className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" />
          </div>
          <div className="bg-white border border-[#EDEBE9] rounded-lg overflow-hidden min-h-[200px]">
            {loading ? (
              <div className="flex items-center justify-center py-16 text-[#A19F9D] gap-2">
                <Loader2 className="h-6 w-6 animate-spin" />
                <span className="text-[11px] font-semibold">Loading media…</span>
              </div>
            ) : filtered.length === 0 ? (
              <p className="py-12 text-center text-[11px] text-[#A19F9D]">No media matches. Upload images in the media gallery.</p>
            ) : (
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5 p-3">
                {filtered.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    className="group flex flex-col overflow-hidden rounded-lg border border-[#EDEBE9] bg-[#F3F2F1] text-left transition hover:border-[#0078D4] hover:ring-1 hover:ring-[#0078D4]/20"
                    onClick={() => {
                      onSelect(m.url);
                      onOpenChange(false);
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={m.url} alt="" className="aspect-square w-full object-cover" />
                    <span className="line-clamp-1 px-1 py-1 text-[10px] text-[#A19F9D] group-hover:text-[#201F1E]">
                      {m.name ?? m.url.slice(-20)}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="shrink-0 px-5 py-3 border-t border-[#EDEBE9] bg-white flex justify-end">
          <Button type="button" variant="ghost" onClick={() => onOpenChange(false)} className="h-8 px-4 text-[12px] font-semibold text-[#605E5C] hover:bg-[#EDEBE9] rounded">
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
