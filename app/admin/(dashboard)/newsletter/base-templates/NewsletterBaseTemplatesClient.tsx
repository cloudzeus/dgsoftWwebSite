"use client";

import * as React from "react";
import { Loader2, PencilIcon, PlusIcon, Trash2Icon } from "lucide-react";
import { toast } from "sonner";
import {
  createMissingNewsletterBaseTemplatePresets,
  createNewsletterBaseTemplate,
  deleteNewsletterBaseTemplate,
  saveNewsletterBaseSettings,
  updateNewsletterBaseTemplate,
  type NewsletterBaseTemplateDto,
} from "@/app/lib/actions/newsletter-base-templates";
import {
  applyBaseTemplateFields,
  baseTemplateContainsPlaceholder,
  mergeBaseTemplateWithDynamicContent,
  NEWSLETTER_BASE_TEMPLATE_DEFAULT_FIELDS,
  NEWSLETTER_DYNAMIC_CONTENT_PLACEHOLDER,
  type NewsletterBaseTemplateFields,
} from "@/lib/newsletter-dynamic-placeholder";
import { NEWSLETTER_BASE_TEMPLATE_PRESETS } from "@/lib/newsletter-base-template-sample-html";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

export function NewsletterBaseTemplatesClient({
  initialTemplates,
  initialSettings,
}: {
  initialTemplates: NewsletterBaseTemplateDto[];
  initialSettings: NewsletterBaseTemplateFields;
}) {
  const [templates, setTemplates] = React.useState(initialTemplates);
  const [open, setOpen] = React.useState(false);
  const [editingId, setEditingId] = React.useState<string | null>(null);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [htmlDocument, setHtmlDocument] = React.useState("");
  const [fields, setFields] = React.useState<NewsletterBaseTemplateFields>(initialSettings ?? NEWSLETTER_BASE_TEMPLATE_DEFAULT_FIELDS);
  const [saving, setSaving] = React.useState(false);

  const preview = mergeBaseTemplateWithDynamicContent(applyBaseTemplateFields(htmlDocument || "<html><body>{{dynamic_content}}</body></html>", fields), "<div style='padding:20px'>Preview</div>");

  const openCreate = () => {
    setEditingId(null);
    setName("");
    setDescription("");
    setHtmlDocument("");
    setOpen(true);
  };

  const openEdit = (t: NewsletterBaseTemplateDto) => {
    setEditingId(t.id);
    setName(t.name);
    setDescription(t.description ?? "");
    setHtmlDocument(t.htmlDocument);
    setOpen(true);
  };

  const save = async () => {
    if (!baseTemplateContainsPlaceholder(htmlDocument)) {
      toast.error(`Include ${NEWSLETTER_DYNAMIC_CONTENT_PLACEHOLDER}`);
      return;
    }
    setSaving(true);
    try {
      if (editingId) {
        const u = await updateNewsletterBaseTemplate(editingId, { name, description, htmlDocument });
        setTemplates((prev) => prev.map((p) => (p.id === u.id ? u : p)));
      } else {
        const c = await createNewsletterBaseTemplate({ name, description, htmlDocument });
        setTemplates((prev) => [c, ...prev]);
      }
      setOpen(false);
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Save failed");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Base Templates</h1>
        <p className="text-sm text-muted-foreground">Manage reusable newsletter wrapper layouts and editable link fields.</p>
      </div>
      <div className="flex gap-2">
        <Button onClick={openCreate}><PlusIcon className="mr-2 h-4 w-4" />New base template</Button>
        <Button variant="secondary" onClick={async () => { await createMissingNewsletterBaseTemplatePresets(); window.location.reload(); }}>
          Save built-in templates
        </Button>
        <Button
          variant="outline"
          onClick={async () => {
            try {
              const next = await saveNewsletterBaseSettings(fields);
              setFields(next);
              toast.success("Global newsletter links saved");
            } catch (e: unknown) {
              toast.error(e instanceof Error ? e.message : "Failed to save settings");
            }
          }}
        >
          Save global links
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {templates.map((t) => (
          <Card key={t.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-sm">{t.name}</CardTitle>
              <div className="flex gap-1">
                <Button size="icon" variant="ghost" onClick={() => openEdit(t)}><PencilIcon className="h-4 w-4" /></Button>
                <Button size="icon" variant="ghost" onClick={async () => { await deleteNewsletterBaseTemplate(t.id); setTemplates((p) => p.filter((x) => x.id !== t.id)); }}>
                  <Trash2Icon className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <iframe
                className="h-[420px] w-full rounded border bg-white"
                srcDoc={mergeBaseTemplateWithDynamicContent(
                  applyBaseTemplateFields(t.htmlDocument, fields),
                  "<div style='height:120px'></div>"
                )}
              />
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-6xl">
          <DialogHeader><DialogTitle>{editingId ? "Edit" : "Create"} Base Template</DialogTitle></DialogHeader>
          <Tabs defaultValue="presets">
            <TabsList>
              <TabsTrigger value="presets">Presets</TabsTrigger>
              <TabsTrigger value="fields">Links/Fields</TabsTrigger>
              <TabsTrigger value="html">HTML</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
            </TabsList>
            <TabsContent value="presets" className="mt-3">
              <div className="grid gap-3 md:grid-cols-3">
                {NEWSLETTER_BASE_TEMPLATE_PRESETS.map((p) => (
                  <button key={p.key} className="rounded border p-2 text-left" onClick={() => { setName(p.name); setDescription(p.description); setHtmlDocument(p.htmlDocument); }}>
                    <p className="text-xs font-medium">{p.name}</p>
                    <p className="text-[10px] text-muted-foreground">{p.description}</p>
                  </button>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="fields" className="mt-3">
              <div className="grid gap-2 md:grid-cols-2">
                {Object.entries(fields).map(([k, v]) => (
                  <div key={k}>
                    <Label>{k}</Label>
                    <Input value={String(v)} onChange={(e) => setFields((prev) => ({ ...prev, [k]: e.target.value }))} />
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="html" className="mt-3 space-y-2">
              <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              <Input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
              <Textarea className="min-h-[320px] font-mono text-xs" value={htmlDocument} onChange={(e) => setHtmlDocument(e.target.value)} />
            </TabsContent>
            <TabsContent value="preview" className="mt-3">
              <iframe className="h-[430px] w-full rounded border" srcDoc={preview} />
            </TabsContent>
          </Tabs>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => void save()} disabled={saving}>
              {saving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
