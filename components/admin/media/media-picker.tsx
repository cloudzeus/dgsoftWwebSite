"use client";

import * as React from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ImageIcon,
  Upload,
  Check,
  Loader2,
  RefreshCw,
  Search,
  X,
  FileVideo,
} from "lucide-react";

/**
 * Pick an image from the CDN library, or upload a new one into it.
 *
 * Uploads go through the existing per-entity upload routes (which convert to
 * WebP and cap width), so a file added here lands in the same place and format
 * as one added anywhere else — and then shows up in the gallery immediately.
 */

type MediaFile = {
  name: string;
  url: string;
  size: number;
  updatedAt: string | null;
  type: "IMAGE" | "VIDEO" | "FILE";
  folder: string;
};

const FOLDER_LABELS: Record<string, string> = {
  articles: "Άρθρα",
  services: "Υπηρεσίες",
  works: "Έργα",
  "case-studies": "Case studies",
  sectors: "Κλάδοι",
  downloads: "Λήψεις",
  logos: "Λογότυπα",
  "brand-logos": "Λογότυπα πελατών",
  newsletter: "Newsletter",
  media: "Γενικά",
};

function humanSize(bytes: number): string {
  if (!bytes) return "—";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

export function MediaPicker({
  open,
  onOpenChange,
  onSelect,
  currentUrl,
  defaultFolder = "articles",
  uploadEndpoint = "/api/admin/articles/upload",
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelect: (url: string) => void;
  currentUrl?: string | null;
  defaultFolder?: string;
  /** Route that stores the file. Defaults to the articles uploader. */
  uploadEndpoint?: string;
}) {
  const [folder, setFolder] = React.useState(defaultFolder);
  const [folders, setFolders] = React.useState<string[]>([defaultFolder]);
  const [files, setFiles] = React.useState<MediaFile[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [uploading, setUploading] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [picked, setPicked] = React.useState<string | null>(currentUrl ?? null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const load = React.useCallback(async (f: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/media?folder=${encodeURIComponent(f)}`, {
        cache: "no-store",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Η φόρτωση απέτυχε");
      setFiles(data.files || []);
      if (Array.isArray(data.folders)) setFolders(data.folders);
    } catch (error: any) {
      toast.error(error.message);
      setFiles([]);
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    if (open) {
      setPicked(currentUrl ?? null);
      load(folder);
    }
    // currentUrl intentionally excluded: re-syncing mid-session would fight the
    // user's in-dialog selection.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, folder, load]);

  const handleUpload = async (fileList: FileList | null) => {
    if (!fileList?.length) return;
    setUploading(true);
    const tid = toast.loading(
      fileList.length > 1 ? `Μεταφόρτωση ${fileList.length} αρχείων…` : "Μεταφόρτωση…"
    );
    try {
      let lastUrl: string | null = null;
      for (const file of Array.from(fileList)) {
        const body = new FormData();
        body.append("file", file);
        const res = await fetch(uploadEndpoint, { method: "POST", body });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Η μεταφόρτωση απέτυχε");
        lastUrl = data.url;
      }
      toast.success("Ολοκληρώθηκε", { id: tid });
      if (lastUrl) setPicked(lastUrl);
      await load(folder);
    } catch (error: any) {
      toast.error(error.message, { id: tid });
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  const visible = files.filter(
    (f) => f.type !== "FILE" && f.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[88vh] flex flex-col gap-0 p-0 overflow-hidden">
        <DialogHeader className="px-5 py-4 border-b border-[#EDEBE9]">
          <DialogTitle className="text-base font-semibold text-[#201F1E]">
            Βιβλιοθήκη Πολυμέσων
          </DialogTitle>
          <DialogDescription className="text-xs text-[#605E5C]">
            Επιλέξτε υπάρχον αρχείο ή ανεβάστε νέο. Οι εικόνες μετατρέπονται αυτόματα σε WebP.
          </DialogDescription>
        </DialogHeader>

        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-2 px-5 py-3 border-b border-[#EDEBE9] bg-[#FAF9F8]">
          <select
            value={folder}
            onChange={(e) => setFolder(e.target.value)}
            className="h-8 rounded border border-[#C8C6C4] bg-white px-2 text-[12px] text-[#201F1E] focus:outline-none focus:ring-2 focus:ring-[#0078D4]"
            aria-label="Φάκελος"
          >
            {folders.map((f) => (
              <option key={f} value={f}>
                {FOLDER_LABELS[f] ?? f}
              </option>
            ))}
          </select>

          <div className="relative flex-1 min-w-[160px]">
            <Search className="absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#A19F9D]" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Αναζήτηση ονόματος…"
              className="h-8 rounded border-[#C8C6C4] pl-7 text-[12px]"
            />
          </div>

          <Button
            type="button"
            variant="ghost"
            onClick={() => load(folder)}
            disabled={loading}
            className="h-8 px-2 text-[12px] text-[#605E5C]"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
          </Button>

          <Label className="inline-flex h-8 cursor-pointer items-center gap-1.5 rounded bg-[#0078D4] px-3 text-[12px] font-semibold text-white transition-colors hover:bg-[#106EBE]">
            {uploading ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <Upload className="h-3.5 w-3.5" />
            )}
            Μεταφόρτωση
            <input
              ref={inputRef}
              type="file"
              className="hidden"
              multiple
              accept="image/*,video/*"
              disabled={uploading}
              onChange={(e) => handleUpload(e.target.files)}
            />
          </Label>
        </div>

        {/* Grid */}
        <div className="flex-1 overflow-y-auto p-4 bg-white min-h-[280px]">
          {loading ? (
            <div className="flex h-full items-center justify-center py-16 text-[#A19F9D]">
              <Loader2 className="h-5 w-5 animate-spin" />
            </div>
          ) : visible.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-2 py-16 text-[#A19F9D]">
              <ImageIcon className="h-8 w-8 opacity-30" />
              <p className="text-xs font-semibold">
                {query ? "Κανένα αρχείο δεν ταιριάζει." : "Ο φάκελος είναι κενός."}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {visible.map((f) => {
                const isPicked = picked === f.url;
                return (
                  <button
                    key={f.url}
                    type="button"
                    onClick={() => setPicked(f.url)}
                    onDoubleClick={() => {
                      onSelect(f.url);
                      onOpenChange(false);
                    }}
                    aria-pressed={isPicked}
                    className={`group relative overflow-hidden rounded-lg border text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0078D4] ${
                      isPicked
                        ? "border-[#0078D4] ring-2 ring-[#0078D4]/30"
                        : "border-[#EDEBE9] hover:border-[#C8C6C4]"
                    }`}
                  >
                    <div className="flex aspect-[4/3] items-center justify-center bg-[#F3F2F1]">
                      {f.type === "IMAGE" ? (
                        <img
                          src={f.url}
                          alt={f.name}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <FileVideo className="h-7 w-7 text-[#A19F9D]" />
                      )}
                    </div>
                    {isPicked && (
                      <span className="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#0078D4] text-white">
                        <Check className="h-3 w-3" />
                      </span>
                    )}
                    <div className="px-2 py-1.5">
                      <p className="truncate text-[11px] font-medium text-[#201F1E]">{f.name}</p>
                      <p className="text-[10px] text-[#A19F9D]">{humanSize(f.size)}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-3 border-t border-[#EDEBE9] bg-[#FAF9F8] px-5 py-3">
          <p className="truncate text-[11px] text-[#605E5C]">
            {picked ? (
              <span className="font-mono text-[#0078D4]">{picked.split("/").pop()}</span>
            ) : (
              "Δεν έχει επιλεγεί αρχείο"
            )}
          </p>
          <div className="flex shrink-0 items-center gap-2">
            {picked && (
              <Button
                type="button"
                variant="ghost"
                onClick={() => setPicked(null)}
                className="h-8 px-3 text-[12px] text-[#605E5C]"
              >
                <X className="mr-1 h-3.5 w-3.5" />
                Καθαρισμός
              </Button>
            )}
            <Button
              type="button"
              variant="ghost"
              onClick={() => onOpenChange(false)}
              className="h-8 px-3 text-[12px] text-[#605E5C]"
            >
              Ακύρωση
            </Button>
            <Button
              type="button"
              disabled={!picked}
              onClick={() => {
                if (picked) onSelect(picked);
                onOpenChange(false);
              }}
              className="h-8 bg-[#0078D4] px-4 text-[12px] font-semibold text-white hover:bg-[#106EBE]"
            >
              Επιλογή
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
