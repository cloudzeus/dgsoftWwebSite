"use client";

import * as React from "react";
import Link from "next/link";
import { Copy, Loader2, MailIcon, Maximize2, PencilIcon, PlusIcon, Trash2Icon } from "lucide-react";
import { toast } from "sonner";
import {
  createMissingNewsletterBaseTemplatePresets,
  createNewsletterBaseTemplate,
  deleteNewsletterBaseTemplate,
  duplicateNewsletterBaseTemplate,
  refreshBuiltInNewsletterBaseTemplatePresets,
  saveNewsletterBaseSettings,
  updateNewsletterBaseTemplate,
  type NewsletterBaseTemplateDto,
} from "@/app/lib/actions/newsletter-base-templates";
import {
  applyBaseTemplateFields,
  baseTemplateContainsPlaceholder,
  effectiveTemplateFields,
  mergeBaseTemplateWithDynamicContent,
  NEWSLETTER_BASE_TEMPLATE_DEFAULT_FIELDS,
  NEWSLETTER_DYNAMIC_CONTENT_PLACEHOLDER,
  type NewsletterBaseTemplateFields,
} from "@/lib/newsletter-dynamic-placeholder";
import { NEWSLETTER_BASE_TEMPLATE_PRESETS } from "@/lib/newsletter-base-template-sample-html";
import { NewsletterMediaPickerDialog } from "@/components/newsletter/newsletter-media-picker-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

const DYNAMIC_PLACEHOLDER_BLOCK =
  "<div style='min-height:200px;padding:2rem;text-align:center;font-family:system-ui;color:#64748b'>Newsletter content replaces <code>{{dynamic_content}}</code></div>";

const FIELD_META: {
  key: keyof NewsletterBaseTemplateFields;
  label: string;
  mediaGallery: boolean;
}[] = [
  { key: "companyName", label: "Company name", mediaGallery: false },
  { key: "logoUrl", label: "Logo URL", mediaGallery: true },
  { key: "facebookUrl", label: "Facebook URL", mediaGallery: true },
  { key: "instagramUrl", label: "Instagram URL", mediaGallery: true },
  { key: "linkedinUrl", label: "LinkedIn URL", mediaGallery: true },
  { key: "xUrl", label: "X (Twitter) URL", mediaGallery: true },
  { key: "tagline", label: "Tagline", mediaGallery: false },
  { key: "addressLine", label: "Address", mediaGallery: false },
  { key: "contactEmail", label: "Contact email", mediaGallery: false },
  { key: "privacyPolicyUrl", label: "Privacy policy URL", mediaGallery: true },
  { key: "termsUrl", label: "Terms URL", mediaGallery: true },
  { key: "unsubscribeUrl", label: "Unsubscribe URL", mediaGallery: true },
];

function buildPreviewSrcDoc(html: string, fieldValues: NewsletterBaseTemplateFields): string {
  return mergeBaseTemplateWithDynamicContent(applyBaseTemplateFields(html, fieldValues), DYNAMIC_PLACEHOLDER_BLOCK);
}

type MediaPickerTarget = { context: "global" | "template"; key: keyof NewsletterBaseTemplateFields } | null;

export function NewsletterBaseTemplatesClient({
  initialTemplates,
  initialSettings,
}: {
  initialTemplates: NewsletterBaseTemplateDto[];
  initialSettings: NewsletterBaseTemplateFields;
}) {
  const [templates, setTemplates] = React.useState(initialTemplates);
  const [globalFields, setGlobalFields] = React.useState<NewsletterBaseTemplateFields>(
    initialSettings ?? NEWSLETTER_BASE_TEMPLATE_DEFAULT_FIELDS
  );
  const [templateOverrides, setTemplateOverrides] = React.useState<Partial<NewsletterBaseTemplateFields>>({});

  const [open, setOpen] = React.useState(false);
  const [editingId, setEditingId] = React.useState<string | null>(null);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [htmlDocument, setHtmlDocument] = React.useState("");
  const [saving, setSaving] = React.useState(false);

  const [fullPreview, setFullPreview] = React.useState<{ title: string; srcDoc: string } | null>(null);

  const [dupOpen, setDupOpen] = React.useState(false);
  const [dupSource, setDupSource] = React.useState<NewsletterBaseTemplateDto | null>(null);
  const [dupName, setDupName] = React.useState("");
  const [dupBake, setDupBake] = React.useState(true);
  const [dupSaving, setDupSaving] = React.useState(false);

  const [mediaPickerTarget, setMediaPickerTarget] = React.useState<MediaPickerTarget>(null);

  const effectiveEditor = React.useMemo(
    () => effectiveTemplateFields(globalFields, templateOverrides),
    [globalFields, templateOverrides]
  );

  const previewSrcDoc = buildPreviewSrcDoc(htmlDocument || "<html><body>{{dynamic_content}}</body></html>", effectiveEditor);

  const setTemplateField = (k: keyof NewsletterBaseTemplateFields, v: string) => {
    setTemplateOverrides((prev) => {
      const next = { ...prev };
      if (v === globalFields[k]) delete next[k];
      else next[k] = v;
      return next;
    });
  };

  const openCreate = () => {
    setEditingId(null);
    setName("");
    setDescription("");
    setHtmlDocument("");
    setTemplateOverrides({});
    setOpen(true);
  };

  const openEdit = (t: NewsletterBaseTemplateDto) => {
    setEditingId(t.id);
    setName(t.name);
    setDescription(t.description ?? "");
    setHtmlDocument(t.htmlDocument);
    setTemplateOverrides({ ...(t.fieldOverrides ?? {}) });
    setOpen(true);
  };

  const openDuplicate = (t: NewsletterBaseTemplateDto) => {
    setDupSource(t);
    setDupName(`${t.name} (copy)`);
    setDupBake(true);
    setDupOpen(true);
  };

  const saveTemplate = async () => {
    if (!baseTemplateContainsPlaceholder(htmlDocument)) {
      toast.error(`Include ${NEWSLETTER_DYNAMIC_CONTENT_PLACEHOLDER}`);
      return;
    }
    setSaving(true);
    try {
      if (editingId) {
        const u = await updateNewsletterBaseTemplate(editingId, {
          name,
          description,
          htmlDocument,
          fieldOverrides: templateOverrides,
        });
        setTemplates((prev) => prev.map((p) => (p.id === u.id ? u : p)));
      } else {
        const c = await createNewsletterBaseTemplate({
          name,
          description,
          htmlDocument,
          fieldOverrides: templateOverrides,
        });
        setTemplates((prev) => [c, ...prev]);
      }
      setOpen(false);
      toast.success(editingId ? "Template updated" : "Template created");
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Save failed");
    } finally {
      setSaving(false);
    }
  };

  const confirmDuplicate = async () => {
    if (!dupSource) return;
    setDupSaving(true);
    try {
      const row = await duplicateNewsletterBaseTemplate(dupSource.id, dupName, {
        bakeGlobalLinks: dupBake,
        description: dupSource.description ? `Copy: ${dupSource.description}` : null,
      });
      setTemplates((prev) => [row, ...prev]);
      setDupOpen(false);
      setDupSource(null);
      toast.success("Template duplicated");
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Duplicate failed");
    } finally {
      setDupSaving(false);
    }
  };

  const saveGlobal = async () => {
    try {
      const next = await saveNewsletterBaseSettings(globalFields);
      setGlobalFields(next);
      toast.success("Global defaults saved (used by every template unless overridden below)");
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Failed to save global settings");
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Base Templates</h1>
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Global defaults</strong> apply to all shells. Each template can{" "}
          <strong className="text-foreground">override</strong> logo or links in the editor (only that template changes).
          Images:{" "}
          <Link href="/admin/newsletter/media" className="font-medium text-primary underline underline-offset-4">
            Media gallery
          </Link>
          .
        </p>
        <div className="mt-4 rounded-lg border border-amber-500/35 bg-amber-500/5 px-4 py-3 text-sm">
          <div className="flex gap-3">
            <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-500" aria-hidden />
            <div className="space-y-2 text-muted-foreground [&_strong]:text-foreground">
              <p>
                Previews sit in a <strong>~600px</strong> frame (typical newsletter width). Rendering still differs by client: Outlook may ignore some
                border-radius and gradients, while Apple Mail and many web clients will look closer to this preview.
              </p>
              <p>
                Built-in presets use <strong>table layouts and inline CSS</strong> only (no Tailwind, no <code className="rounded bg-muted px-1">div</code>{" "}
                / flex / script). They load <strong>Inter</strong> from Google Fonts when the client allows it. If a template still shows old Tailwind markup,
                use <strong>Refresh built-in HTML</strong> below to replace it from the latest presets (only rows named exactly &quot;Newsletter Template 01–03&quot;).
              </p>
            </div>
          </div>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Global newsletter defaults</CardTitle>
          <CardDescription>
            Shared social links, logo, and footer text. Edit per-template overrides in each template&apos;s dialog under
            &quot;This template&quot;.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid gap-3 md:grid-cols-2">
            {FIELD_META.map(({ key, label, mediaGallery }) => (
              <div key={key} className="space-y-1">
                <Label htmlFor={`global-${key}`}>{label}</Label>
                <div className="flex gap-2">
                  <Input
                    id={`global-${key}`}
                    className="text-sm"
                    value={globalFields[key]}
                    onChange={(e) => setGlobalFields((prev) => ({ ...prev, [key]: e.target.value }))}
                  />
                  {mediaGallery ? (
                    <Button type="button" variant="outline" size="sm" className="shrink-0" onClick={() => setMediaPickerTarget({ context: "global", key })}>
                      Gallery
                    </Button>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
          <Button type="button" onClick={() => void saveGlobal()}>
            Save global defaults
          </Button>
        </CardContent>
      </Card>

      <div className="flex flex-wrap gap-2">
        <Button onClick={openCreate}>
          <PlusIcon className="mr-2 h-4 w-4" />
          New base template
        </Button>
        <Button
          variant="secondary"
          onClick={async () => {
            await createMissingNewsletterBaseTemplatePresets();
            window.location.reload();
          }}
        >
          Save built-in templates
        </Button>
        <Button
          variant="outline"
          onClick={async () => {
            if (
              !confirm(
                "Overwrite HTML and description for every base template named exactly “Newsletter Template 01”, “02”, or “03” with the latest built-in shells? Custom edits to those rows will be lost."
              )
            )
              return;
            try {
              const { updated } = await refreshBuiltInNewsletterBaseTemplatePresets();
              toast.success(updated > 0 ? `Updated ${updated} built-in shell(s).` : "No matching rows (names must match presets exactly).");
              window.location.reload();
            } catch (e: unknown) {
              toast.error(e instanceof Error ? e.message : "Refresh failed");
            }
          }}
        >
          Refresh built-in HTML
        </Button>
      </div>

      <div className="space-y-8">
        {templates.map((t) => {
          const effective = effectiveTemplateFields(globalFields, t.fieldOverrides);
          const teaserSrc = buildPreviewSrcDoc(t.htmlDocument, effective);
          const hasOverrides = t.fieldOverrides && Object.keys(t.fieldOverrides).length > 0;
          return (
            <Card key={t.id} className="overflow-hidden">
              <CardHeader className="flex flex-row flex-wrap items-start justify-between gap-3 border-b bg-muted/30 pb-4">
                <div className="min-w-0 flex-1">
                  <CardTitle className="flex flex-wrap items-center gap-2 text-base">
                    {t.name}
                    {hasOverrides ? (
                      <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-medium text-primary">Custom branding</span>
                    ) : null}
                  </CardTitle>
                  {t.description ? <p className="mt-1 text-xs text-muted-foreground">{t.description}</p> : null}
                </div>
                <div className="flex flex-shrink-0 flex-wrap gap-1">
                  <Button size="sm" variant="secondary" className="gap-1" onClick={() => setFullPreview({ title: t.name, srcDoc: teaserSrc })}>
                    <Maximize2 className="h-3.5 w-3.5" />
                    Full preview
                  </Button>
                  <Button size="sm" variant="outline" className="gap-1" onClick={() => openDuplicate(t)}>
                    <Copy className="h-3.5 w-3.5" />
                    Duplicate
                  </Button>
                  <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => openEdit(t)} title="Edit">
                    <PencilIcon className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 text-destructive"
                    onClick={async () => {
                      if (!confirm(`Delete “${t.name}”?`)) return;
                      await deleteNewsletterBaseTemplate(t.id);
                      setTemplates((p) => p.filter((x) => x.id !== t.id));
                    }}
                    title="Delete"
                  >
                    <Trash2Icon className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-auto bg-[#f1f5f9] dark:bg-slate-900/50">
                  <div className="mx-auto w-full max-w-[600px] bg-white shadow-inner dark:bg-transparent">
                    <iframe title={t.name} className="min-h-[1100px] w-full border-0" srcDoc={teaserSrc} sandbox="allow-scripts allow-same-origin" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="text-[10px] text-muted-foreground">
                Scroll the gray area for the full height. Width matches a common email column (~600px), not an exact client screenshot.
              </CardFooter>
            </Card>
          );
        })}
      </div>

      <Dialog open={!!fullPreview} onOpenChange={(o) => !o && setFullPreview(null)}>
        <DialogContent className="flex h-[96vh] max-h-[96vh] w-[min(100vw-1rem,620px)] max-w-none flex-col gap-0 overflow-hidden p-0 sm:max-w-none">
          <DialogHeader className="shrink-0 border-b px-4 py-3 text-left">
            <DialogTitle className="text-sm">{fullPreview?.title ?? "Preview"}</DialogTitle>
            <p className="mt-1 text-xs font-normal text-muted-foreground">Browser preview ~600px wide; not identical to live inbox rendering.</p>
          </DialogHeader>
          <div className="min-h-0 flex-1 overflow-y-auto bg-muted/40">
            <div className="mx-auto w-full max-w-[600px] bg-white py-2">
              {fullPreview ? (
                <iframe
                  title="Full base template"
                  className="min-h-[1600px] w-full border-0"
                  srcDoc={fullPreview.srcDoc}
                  sandbox="allow-scripts allow-same-origin"
                />
              ) : null}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={dupOpen} onOpenChange={setDupOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Duplicate base template</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label htmlFor="dup-name">New name</Label>
              <Input id="dup-name" value={dupName} onChange={(e) => setDupName(e.target.value)} />
            </div>
            <div className="flex items-start gap-2 space-y-0">
              <Checkbox id="dup-bake" checked={dupBake} onCheckedChange={(c) => setDupBake(c === true)} className="mt-1" />
              <div className="grid gap-1 leading-none">
                <Label htmlFor="dup-bake" className="text-sm font-medium leading-snug">
                  Bake links into HTML
                </Label>
                <p className="text-xs text-muted-foreground">
                  Applies effective global + this template&apos;s overrides into the HTML.{" "}
                  <code className="rounded bg-muted px-1">{"{{dynamic_content}}"}</code> stays for the campaign body.
                </p>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDupOpen(false)}>
              Cancel
            </Button>
            <Button disabled={dupSaving || !dupName.trim()} onClick={() => void confirmDuplicate()}>
              {dupSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Save copy
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <NewsletterMediaPickerDialog
        open={mediaPickerTarget != null}
        onOpenChange={(o) => !o && setMediaPickerTarget(null)}
        title={
          mediaPickerTarget
            ? `Pick image for ${FIELD_META.find((f) => f.key === mediaPickerTarget.key)?.label ?? mediaPickerTarget.key}`
            : undefined
        }
        onSelect={(url) => {
          if (!mediaPickerTarget) return;
          if (mediaPickerTarget.context === "global") {
            setGlobalFields((prev) => ({ ...prev, [mediaPickerTarget.key]: url }));
          } else {
            setTemplateField(mediaPickerTarget.key, url);
          }
          setMediaPickerTarget(null);
        }}
      />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="flex max-h-[96vh] max-w-6xl flex-col gap-0 overflow-hidden p-0">
          <DialogHeader className="shrink-0 border-b px-6 py-4">
            <DialogTitle>{editingId ? "Edit" : "Create"} base template</DialogTitle>
          </DialogHeader>
          <div className="min-h-0 flex-1 overflow-y-auto px-6 py-4">
            <Tabs defaultValue="presets">
              <TabsList className="w-full flex-wrap justify-start">
                <TabsTrigger value="presets">Presets</TabsTrigger>
                <TabsTrigger value="overrides">This template</TabsTrigger>
                <TabsTrigger value="html">HTML</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
              </TabsList>
              <TabsContent value="presets" className="mt-3">
                <div className="grid gap-3 md:grid-cols-3">
                  {NEWSLETTER_BASE_TEMPLATE_PRESETS.map((p) => (
                    <button
                      key={p.key}
                      className="rounded border p-2 text-left transition hover:border-primary/60"
                      onClick={() => {
                        setName(p.name);
                        setDescription(p.description);
                        setHtmlDocument(p.htmlDocument);
                      }}
                    >
                      <p className="text-xs font-medium">{p.name}</p>
                      <p className="text-[10px] text-muted-foreground">{p.description}</p>
                    </button>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="overrides" className="mt-3 space-y-3">
                <p className="text-xs text-muted-foreground">
                  Values here apply <strong className="text-foreground">only to this template</strong>. Leave a field equal to the global default to
                  clear the override. Use Gallery to pick from the media library.
                </p>
                <div className="grid gap-3 md:grid-cols-2">
                  {FIELD_META.map(({ key, label, mediaGallery }) => (
                    <div key={key} className="space-y-1">
                      <Label htmlFor={`ov-${key}`}>{label}</Label>
                      <div className="flex gap-2">
                        <Input
                          id={`ov-${key}`}
                          className="text-sm"
                          value={effectiveEditor[key]}
                          onChange={(e) => setTemplateField(key, e.target.value)}
                        />
                        {mediaGallery ? (
                          <Button type="button" variant="outline" size="sm" className="shrink-0" onClick={() => setMediaPickerTarget({ context: "template", key })}>
                            Gallery
                          </Button>
                        ) : null}
                      </div>
                      {templateOverrides[key] !== undefined && templateOverrides[key] !== globalFields[key] ? (
                        <p className="text-[10px] text-primary">Override active (differs from global)</p>
                      ) : null}
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="html" className="mt-3 space-y-2">
                <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <Input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <Textarea className="min-h-[360px] font-mono text-xs" value={htmlDocument} spellCheck={false} onChange={(e) => setHtmlDocument(e.target.value)} />
              </TabsContent>
              <TabsContent value="preview" className="mt-3">
                <div className="max-h-[min(80vh,900px)] overflow-y-auto rounded-md border bg-muted/30">
                  <div className="mx-auto max-w-[600px] bg-white">
                    <iframe title="Editor preview" className="min-h-[1200px] w-full border-0" srcDoc={previewSrcDoc} sandbox="allow-scripts allow-same-origin" />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <DialogFooter className="shrink-0 border-t px-6 py-4">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => void saveTemplate()} disabled={saving}>
              {saving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
