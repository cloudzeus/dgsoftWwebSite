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
      toast.error(files.length > 0 ? "Only image files are allowed" : "Please select one or more image files");
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
          if (!res.ok) throw new Error(data.error ?? "Upload failed");
          uploaded++;
        } catch {
          failed++;
        }
      }
      if (uploaded > 0) {
        toast.success(
          failed === 0
            ? `${uploaded} image${uploaded === 1 ? "" : "s"} uploaded`
            : `${uploaded} uploaded, ${failed} failed`
        );
        await refreshMedia();
        await refreshFolders();
      }
      if (failed > 0 && uploaded === 0) toast.error("All uploads failed");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const copyUrl = (item: MediaItem) => {
    navigator.clipboard.writeText(item.url);
    setCopiedId(item.id);
    toast.success("URL copied to clipboard");
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCreateFolder = async () => {
    const name = newFolderName.trim();
    if (!name) {
      toast.error("Enter a folder name");
      return;
    }
    setCreatingFolder(true);
    try {
      const result = await createNewsletterMediaFolder(name);
      if ("error" in result) {
        toast.error(result.error);
        return;
      }
      toast.success("Folder created");
      setNewFolderName("");
      setCreateFolderOpen(false);
      await refreshFolders();
    } catch (err) {
      toast.error("Failed to create folder");
    } finally {
      setCreatingFolder(false);
    }
  };

  const handleRenameFolder = async () => {
    if (!editingFolderId) return;
    const name = editingFolderName.trim();
    if (!name) {
      toast.error("Enter a folder name");
      return;
    }
    try {
      const result = await updateNewsletterMediaFolder(editingFolderId, name);
      if (result.error) {
        toast.error(result.error);
        return;
      }
      toast.success("Folder renamed");
      setEditingFolderId(null);
      await refreshFolders();
    } catch {
      toast.error("Failed to rename folder");
    }
  };

  const handleDeleteFolder = async (id: string) => {
    if (!confirm("Delete this folder? Items inside will become uncategorized.")) return;
    try {
      const result = await deleteNewsletterMediaFolder(id);
      if (result.error) {
        toast.error(result.error);
        return;
      }
      toast.success("Folder deleted");
      if (folderFilter === id) setFolderFilter("all");
      await refreshFolders();
      await refreshMedia();
    } catch {
      toast.error("Failed to delete folder");
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
      toast.success("Moved");
      await refreshMedia();
      await refreshFolders();
    } catch {
      toast.error("Failed to move");
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
              Folders
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setCreateFolderOpen(true)}
              title="New folder"
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
            <span>All</span>
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
            <span>Uncategorized</span>
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
                  title="Rename"
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
                  title="Delete folder"
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
              ? "All images"
              : folderFilter === "uncategorized"
                ? "Uncategorized"
                : folders.find((f) => f.id === folderFilter)?.name ?? "Images"}
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
              Upload
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {media.length === 0 ? (
            <p className="py-8 text-center text-sm text-muted-foreground">
              {folderFilter === "uncategorized"
                ? "No uncategorized images."
                : folderFilter !== "all"
                  ? "No images in this folder."
                  : "No images yet. Upload images or create a folder to organize them."}
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
                        title="Copy URL"
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
                            title="Move to folder"
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
                            Uncategorized
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
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>New folder</DialogTitle>
          </DialogHeader>
          <Input
            placeholder="Folder name"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCreateFolder()}
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => setCreateFolderOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleCreateFolder} disabled={creatingFolder || !newFolderName.trim()}>
              {creatingFolder ? <Loader2Icon className="h-4 w-4 animate-spin" /> : "Create"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Rename folder dialog */}
      <Dialog open={!!editingFolderId} onOpenChange={(open) => !open && setEditingFolderId(null)}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Rename folder</DialogTitle>
          </DialogHeader>
          <Input
            placeholder="Folder name"
            value={editingFolderName}
            onChange={(e) => setEditingFolderName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleRenameFolder()}
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditingFolderId(null)}>
              Cancel
            </Button>
            <Button onClick={handleRenameFolder} disabled={!editingFolderName.trim()}>
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
