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
      <DialogContent className="flex max-h-[85vh] max-w-3xl flex-col gap-4">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ImageIcon className="h-5 w-5" />
            {title ?? "Newsletter media gallery"}
          </DialogTitle>
          <DialogDescription>
            Choose an image from the media library. Upload more under Newsletter → Media gallery.
          </DialogDescription>
        </DialogHeader>
        <Input placeholder="Filter by name or URL…" value={query} onChange={(e) => setQuery(e.target.value)} className="text-sm" />
        <div className="min-h-[200px] flex-1 overflow-y-auto rounded-md border bg-muted/20 p-3">
          {loading ? (
            <div className="flex items-center justify-center py-16 text-muted-foreground">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          ) : filtered.length === 0 ? (
            <p className="py-12 text-center text-sm text-muted-foreground">No media matches. Upload images in the media gallery.</p>
          ) : (
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5">
              {filtered.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  className="group flex flex-col overflow-hidden rounded-md border bg-background text-left shadow-sm transition hover:border-primary/50 hover:ring-1 hover:ring-primary/20"
                  onClick={() => {
                    onSelect(m.url);
                    onOpenChange(false);
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.url} alt="" className="aspect-square w-full object-cover" />
                  <span className="line-clamp-1 px-1 py-1 text-[10px] text-muted-foreground group-hover:text-foreground">
                    {m.name ?? m.url.slice(-20)}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
        <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
          Cancel
        </Button>
      </DialogContent>
    </Dialog>
  );
}
