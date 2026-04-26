"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  getNewsletterMedia,
  getNewsletterMediaFolders,
  createNewsletterMediaFolder,
  updateNewsletterMediaFolder,
  deleteNewsletterMediaFolder,
  setNewsletterMediaFolder,
  type NewsletterMediaFolderItem,
} from "@/app/lib/actions/newsletter";
import {
  CameraIcon,
  UploadIcon,
  Loader2Icon,
  CopyIcon,
  CheckIcon,
  FolderIcon,
  FolderPlusIcon,
  MoreVerticalIcon,
  PencilIcon,
  Trash2Icon,
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type MediaItem = {
  id: string;
  url: string;
  name: string | null;
  folderId: string | null;
  createdAt: string;
};

type FolderFilter = "all" | "uncategorized" | string; // string = folder id

/** Serialized shape from RSC (createdAt as string). */
type SerializedFolderItem = { id: string; name: string; createdAt: string; _count: { media: number } };

export function NewsletterMediaClient({
  initialMedia,
  initialFolders,
}: {
  initialMedia: MediaItem[];
  initialFolders: SerializedFolderItem[] | NewsletterMediaFolderItem[];
}) {
  const [media, setMedia] = React.useState<MediaItem[]>(initialMedia);
  const [folders, setFolders] = React.useState<(SerializedFolderItem | NewsletterMediaFolderItem)[]>(initialFolders);
  const [folderFilter, setFolderFilter] = React.useState<FolderFilter>("all");
  const [uploading, setUploading] = React.useState(false);
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const [createFolderOpen, setCreateFolderOpen] = React.useState(false);
  const [newFolderName, setNewFolderName] = React.useState("");
  const [creatingFolder, setCreatingFolder] = React.useState(false);
  const [editingFolderId, setEditingFolderId] = React.useState<string | null>(null);
  const [editingFolderName, setEditingFolderName] = React.useState("");
  const [movingId, setMovingId] = React.useState<string | null>(null);
  const [uncategorizedCount, setUncategorizedCount] = React.useState(() =>
    initialMedia.filter((m) => !m.folderId).length
  );
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const refreshMedia = React.useCallback(async () => {
    const filter =
      folderFilter === "all"
        ? undefined
        : folderFilter === "uncategorized"
          ? null
          : folderFilter;
    const list = await getNewsletterMedia(filter);
    const normalized: MediaItem[] = list.map((m) => ({
      id: m.id,
      url: m.url,
      name: m.name,
      folderId: m.folderId,
      createdAt: m.createdAt instanceof Date ? m.createdAt.toISOString() : String(m.createdAt ?? ""),
    }));
    setMedia(normalized);
    if (folderFilter === "all") setUncategorizedCount(normalized.filter((m) => !m.folderId).length);
    else if (folderFilter === "uncategorized") setUncategorizedCount(normalized.length);
  }, [folderFilter]);

  const refreshFolders = React.useCallback(async () => {
    const list = await getNewsletterMediaFolders();
    setFolders(list);
  }, []);

  React.useEffect(() => {
    refreshMedia();
  }, [refreshMedia]);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    e.target.value = "";
    const imageFiles = files.filter((f) => f.type.startsWith("image/"));
    if (imageFiles.length === 0) {
      toast.error(files.length > 0 ? "Επιτρέπονται μόνο αρχεία εικόνας" : "Παρακαλώ επιλέξτε ένα ή περισσότερα αρχεία εικόνας");
      return;
    }
    setUploading(true);
    const targetFolderId =
      folderFilter === "all" || folderFilter === "uncategorized" ? "" : folderFilter;
    let uploaded = 0;
    let failed = 0;
    try {
      for (let i = 0; i < imageFiles.length; i++) {
        const file = imageFiles[i];
        try {
          const formData = new FormData();
          formData.append("file", file);
          if (targetFolderId) formData.append("folderId", targetFolderId);
          const res = await fetch("/api/admin/newsletter/upload", { method: "POST", body: formData });
          const data = await res.json();
          if (!res.ok) throw new Error(data.error ?? "Αποτυχία μεταφόρτωσης");
          uploaded++;
        } catch {
          failed++;
        }
      }
      if (uploaded > 0) {
        toast.success(
          failed === 0
            ? `${uploaded} εικόν${uploaded === 1 ? "α μεταφορτώθηκε" : "ες μεταφορτώθηκαν"}`
            : `${uploaded} μεταφορτώθηκαν, ${failed} απέτυχαν`
        );
        await refreshMedia();
        await refreshFolders();
      }
      if (failed > 0 && uploaded === 0) toast.error("Όλες οι μεταφορτώσεις απέτυχαν");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Αποτυχία μεταφόρτωσης");
    } finally {
      setUploading(false);
    }
  };

  const copyUrl = (item: MediaItem) => {
    navigator.clipboard.writeText(item.url);
    setCopiedId(item.id);
    toast.success("Το URL αντιγράφηκε στο πρόχειρο");
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCreateFolder = async () => {
    const name = newFolderName.trim();
    if (!name) {
      toast.error("Εισάγετε όνομα φακέλου");
      return;
    }
    setCreatingFolder(true);
    try {
      const result = await createNewsletterMediaFolder(name);
      if ("error" in result) {
        toast.error(result.error);
        return;
      }
      toast.success("Ο φάκελος δημιουργήθηκε");
      setNewFolderName("");
      setCreateFolderOpen(false);
      await refreshFolders();
    } catch (err) {
      toast.error("Αποτυχία δημιουργίας φακέλου");
    } finally {
      setCreatingFolder(false);
    }
  };

  const handleRenameFolder = async () => {
    if (!editingFolderId) return;
    const name = editingFolderName.trim();
    if (!name) {
      toast.error("Εισάγετε όνομα φακέλου");
      return;
    }
    try {
      const result = await updateNewsletterMediaFolder(editingFolderId, name);
      if (result.error) {
        toast.error(result.error);
        return;
      }
      toast.success("Ο φάκελος μετονομάστηκε");
      setEditingFolderId(null);
      await refreshFolders();
    } catch {
      toast.error("Αποτυχία μετονομασίας φακέλου");
    }
  };

  const handleDeleteFolder = async (id: string) => {
    if (!confirm("Διαγραφή αυτού του φακέλου; Τα περιεχόμενα θα γίνουν αδιάθετα.")) return;
    try {
      const result = await deleteNewsletterMediaFolder(id);
      if (result.error) {
        toast.error(result.error);
        return;
      }
      toast.success("Ο φάκελος διαγράφηκε");
      if (folderFilter === id) setFolderFilter("all");
      await refreshFolders();
      await refreshMedia();
    } catch {
      toast.error("Αποτυχία διαγραφής φακέλου");
    }
  };

  const handleMoveToFolder = async (mediaId: string, folderId: string | null) => {
    setMovingId(mediaId);
    try {
      const result = await setNewsletterMediaFolder(mediaId, folderId);
      if (result.error) {
        toast.error(result.error);
        return;
      }
      toast.success("Μετακινήθηκε");
      await refreshMedia();
      await refreshFolders();
    } catch {
      toast.error("Αποτυχία μετακίνησης");
    } finally {
      setMovingId(null);
    }
  };

  return (
    <div className="flex flex-col gap-6 lg:flex-row">
      {/* Folder sidebar */}
      <Card className="w-full shrink-0 lg:w-56">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center justify-between">
            <span className="flex items-center gap-2">
              <FolderIcon className="h-4 w-4" />
              Φάκελοι
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setCreateFolderOpen(true)}
              title="Νέος φάκελος"
            >
              <FolderPlusIcon className="h-4 w-4" />
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-0.5 pt-0">
          <button
            type="button"
            onClick={() => setFolderFilter("all")}
            className={cn(
              "flex w-full items-center justify-between rounded-md px-2 py-1.5 text-left text-sm transition-colors",
              folderFilter === "all" ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted"
            )}
          >
            <span>Όλα</span>
            <span className="text-muted-foreground tabular-nums">{media.length}</span>
          </button>
          <button
            type="button"
            onClick={() => setFolderFilter("uncategorized")}
            className={cn(
              "flex w-full items-center justify-between rounded-md px-2 py-1.5 text-left text-sm transition-colors",
              folderFilter === "uncategorized" ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted"
            )}
          >
            <span>Αδιάθετα</span>
            <span className="text-muted-foreground tabular-nums">{uncategorizedCount}</span>
          </button>
          {folders.map((folder) => (
            <div
              key={folder.id}
              className={cn(
                "group flex items-center gap-1 rounded-md px-2 py-1.5 text-sm transition-colors",
                folderFilter === folder.id ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted"
              )}
            >
              <button
                type="button"
                className="flex flex-1 items-center justify-between min-w-0"
                onClick={() => setFolderFilter(folder.id)}
              >
                <span className="truncate">{folder.name}</span>
                <span className="text-muted-foreground tabular-nums shrink-0 ml-1">
                  {folder._count.media}
                </span>
              </button>
              <div className="flex shrink-0 opacity-0 group-hover:opacity-100">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={(e) => {
                    e.stopPropagation();
                    setEditingFolderId(folder.id);
                    setEditingFolderName(folder.name);
                  }}
                  title="Μετονομασία"
                >
                  <PencilIcon className="h-3 w-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 text-destructive hover:text-destructive"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteFolder(folder.id);
                  }}
                  title="Διαγραφή φακέλου"
                >
                  <Trash2Icon className="h-3 w-3" />
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Media grid */}
      <Card className="flex-1 min-w-0">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-base flex items-center gap-2">
            <CameraIcon className="h-4 w-4" />
            {folderFilter === "all"
              ? "Όλες οι εικόνες"
              : folderFilter === "uncategorized"
                ? "Αδιάθετα"
                : folders.find((f) => f.id === folderFilter)?.name ?? "Εικόνες"}
          </CardTitle>
          <div className="flex gap-2">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={handleUpload}
            />
            <Button
              size="sm"
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              className="gap-2"
            >
              {uploading ? (
                <Loader2Icon className="h-4 w-4 animate-spin" />
              ) : (
                <UploadIcon className="h-4 w-4" />
              )}
              Μεταφόρτωση
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {media.length === 0 ? (
            <p className="py-8 text-center text-sm text-muted-foreground">
              {folderFilter === "uncategorized"
                ? "Δεν υπάρχουν αδιάθετες εικόνες."
                : folderFilter !== "all"
                  ? "Δεν υπάρχουν εικόνες σε αυτόν τον φάκελο."
                  : "Δεν υπάρχουν εικόνες ακόμη. Μεταφορτώστε εικόνες ή δημιουργήστε φάκελο για οργάνωση."}
            </p>
          ) : (
            <TooltipProvider delayDuration={300}>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {media.map((item) => (
                  <div
                    key={item.id}
                    className="group relative flex w-full max-w-full flex-col overflow-hidden rounded-lg border bg-muted/30 transition hover:border-primary"
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="aspect-square w-full min-w-0 bg-muted">
                          <img
                            src={item.url}
                            alt={item.name ?? "Media"}
                            className="h-full w-full max-w-full object-contain"
                          />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent
                        side="right"
                        className="max-w-none border border-border bg-background p-0 shadow-lg"
                      >
                        <img
                          src={item.url}
                          alt={item.name ?? "Preview"}
                          className="h-[800px] w-[800px] max-h-[80vh] max-w-[90vw] object-contain"
                        />
                      </TooltipContent>
                    </Tooltip>
                    <div className="flex items-center justify-between gap-1 p-2">
                    <span
                      className="min-w-0 flex-1 truncate text-xs"
                      title={item.name ?? item.url}
                    >
                      {item.name ?? "Image"}
                    </span>
                    <div className="flex shrink-0 items-center gap-0.5">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => copyUrl(item)}
                        title="Αντιγραφή URL"
                      >
                        {copiedId === item.id ? (
                          <CheckIcon className="h-3.5 w-3.5 text-green-600" />
                        ) : (
                          <CopyIcon className="h-3.5 w-3.5" />
                        )}
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7"
                            title="Μετακίνηση σε φάκελο"
                            disabled={movingId === item.id}
                          >
                            {movingId === item.id ? (
                              <Loader2Icon className="h-3.5 w-3.5 animate-spin" />
                            ) : (
                              <MoreVerticalIcon className="h-3.5 w-3.5" />
                            )}
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleMoveToFolder(item.id, null)}>
                            Αδιάθετα
                          </DropdownMenuItem>
                          {folders.map((folder) => (
                            <DropdownMenuItem
                              key={folder.id}
                              onClick={() => handleMoveToFolder(item.id, folder.id)}
                              disabled={item.folderId === folder.id}
                            >
                              {folder.name}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </TooltipProvider>
          )}
        </CardContent>
      </Card>

      {/* Create folder dialog */}
      <Dialog open={createFolderOpen} onOpenChange={setCreateFolderOpen}>
        <DialogContent className="sm:max-w-sm p-0 overflow-hidden rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.12),0_2px_6px_rgba(0,0,0,0.08)]">
          <DialogHeader className="px-5 py-4 border-b border-[#EDEBE9] bg-white">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-[#EFF6FC] border border-[#C7E0F4] flex items-center justify-center shrink-0">
                <FolderPlusIcon className="w-4 h-4 text-[#0078D4]" />
              </div>
              <DialogTitle className="text-sm font-bold text-[#201F1E]">Νέος φάκελος</DialogTitle>
            </div>
          </DialogHeader>
          <div className="bg-[#F3F2F1] px-5 py-4">
            <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Όνομα Φακέλου</p>
              <Input
                placeholder="Όνομα φακέλου"
                value={newFolderName}
                onChange={(e) => setNewFolderName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleCreateFolder()}
                className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm"
              />
            </div>
          </div>
          <div className="px-5 py-3 border-t border-[#EDEBE9] bg-white flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setCreateFolderOpen(false)} className="h-8 px-4 text-[12px] font-semibold text-[#605E5C] hover:bg-[#EDEBE9] rounded">
              Ακύρωση
            </Button>
            <Button onClick={handleCreateFolder} disabled={creatingFolder || !newFolderName.trim()} className="h-8 px-5 text-[12px] font-semibold bg-[#0078D4] hover:bg-[#106EBE] text-white rounded shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,120,212,0.25)]">
              {creatingFolder ? <Loader2Icon className="h-3.5 w-3.5 animate-spin" /> : "Δημιουργία"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Rename folder dialog */}
      <Dialog open={!!editingFolderId} onOpenChange={(open) => !open && setEditingFolderId(null)}>
        <DialogContent className="sm:max-w-sm p-0 overflow-hidden rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.12),0_2px_6px_rgba(0,0,0,0.08)]">
          <DialogHeader className="px-5 py-4 border-b border-[#EDEBE9] bg-white">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-[#EFF6FC] border border-[#C7E0F4] flex items-center justify-center shrink-0">
                <PencilIcon className="w-4 h-4 text-[#0078D4]" />
              </div>
              <DialogTitle className="text-sm font-bold text-[#201F1E]">Μετονομασία φακέλου</DialogTitle>
            </div>
          </DialogHeader>
          <div className="bg-[#F3F2F1] px-5 py-4">
            <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Νέο Όνομα</p>
              <Input
                placeholder="Όνομα φακέλου"
                value={editingFolderName}
                onChange={(e) => setEditingFolderName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleRenameFolder()}
                className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm"
              />
            </div>
          </div>
          <div className="px-5 py-3 border-t border-[#EDEBE9] bg-white flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setEditingFolderId(null)} className="h-8 px-4 text-[12px] font-semibold text-[#605E5C] hover:bg-[#EDEBE9] rounded">
              Ακύρωση
            </Button>
            <Button onClick={handleRenameFolder} disabled={!editingFolderName.trim()} className="h-8 px-5 text-[12px] font-semibold bg-[#0078D4] hover:bg-[#106EBE] text-white rounded shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,120,212,0.25)]">
              Αποθήκευση
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
