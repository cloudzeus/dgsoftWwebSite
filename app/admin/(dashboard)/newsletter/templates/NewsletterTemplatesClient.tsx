"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { VisualDesigner } from "@/components/newsletter/visual-designer";
import {
  createNewsletterTemplate,
  updateNewsletterTemplate,
  deleteNewsletterTemplate,
} from "@/app/lib/actions/newsletter";
import type { NewsletterContent } from "@/lib/newsletter-blocks";
import { PlusIcon, PencilIcon, Trash2Icon } from "lucide-react";
import { toast } from "sonner";

type Template = {
  id: string;
  name: string;
  description: string | null;
  content: unknown;
  htmlCache: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export function NewsletterTemplatesClient({
  initialTemplates,
}: {
  initialTemplates: Template[];
}) {
  const [templates, setTemplates] = React.useState<Template[]>(initialTemplates);
  const [open, setOpen] = React.useState(false);
  const [editingId, setEditingId] = React.useState<string | null>(null);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [content, setContent] = React.useState<NewsletterContent>({ blocks: [] });
  const [saving, setSaving] = React.useState(false);

  const openCreate = () => {
    setEditingId(null);
    setName("");
    setDescription("");
    setContent({ blocks: [] });
    setOpen(true);
  };

  const openEdit = (t: Template) => {
    setEditingId(t.id);
    setName(t.name);
    setDescription(t.description ?? "");
    const c = t.content as NewsletterContent | null;
    setContent({
      blocks: c?.blocks ?? [],
      bodyOptions: c?.bodyOptions ?? {},
    });
    setOpen(true);
  };

  const handleSave = async () => {
    const trimmed = name.trim();
    if (!trimmed) {
      toast.error("Name is required");
      return;
    }
    setSaving(true);
    try {
      if (editingId) {
        await updateNewsletterTemplate(editingId, { name: trimmed, description: description.trim() || null, content });
        setTemplates((prev) =>
          prev.map((p) => (p.id === editingId ? { ...p, name: trimmed, description: description.trim() || null, content, updatedAt: new Date() } : p))
        );
        toast.success("Template updated");
      } else {
        const created = await createNewsletterTemplate({
          name: trimmed,
          description: description.trim() || null,
          content,
        });
        setTemplates((prev) => [created as Template, ...prev]);
        toast.success("Template created");
      }
      setOpen(false);
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Failed to save");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this template?")) return;
    try {
      await deleteNewsletterTemplate(id);
      setTemplates((prev) => prev.filter((p) => p.id !== id));
      toast.success("Template deleted");
      if (editingId === id) setOpen(false);
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Failed to delete");
    }
  };

  return (
    <div className="space-y-4">
      <Button onClick={openCreate} className="gap-2">
        <PlusIcon className="h-4 w-4" />
        New template
      </Button>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {templates.map((t) => (
          <Card key={t.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base">{t.name}</CardTitle>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openEdit(t)}>
                  <PencilIcon className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-destructive hover:text-destructive"
                  onClick={() => handleDelete(t.id)}
                >
                  <Trash2Icon className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {t.description && (
                <CardDescription className="text-xs">{t.description}</CardDescription>
              )}
              <p className="mt-1 text-xs text-muted-foreground">
                Updated {new Date(t.updatedAt).toLocaleDateString()}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingId ? "Edit template" : "New template"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="grid gap-2">
              <Label>Name</Label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Template name"
              />
            </div>
            <div className="grid gap-2">
              <Label>Description (optional)</Label>
              <Input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Short description"
              />
            </div>
            <div>
              <Label className="mb-2 block">Content (visual designer)</Label>
              <VisualDesigner value={content} onChange={setContent} />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={saving}>
              {saving ? "Saving…" : editingId ? "Update" : "Create"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
