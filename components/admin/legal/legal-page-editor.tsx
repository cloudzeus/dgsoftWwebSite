"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { updateLegalPageAction, type LegalPageData } from "@/app/lib/actions/legal";
import { TiptapEditor } from "./tiptap-editor";
import { toast } from "sonner";
import { Loader2, Save, Languages } from "lucide-react";

type Props = {
  initial: LegalPageData;
  pageLabel: string;
};

async function translateText(text: string, targetLang: "el" | "en"): Promise<string> {
  const res = await fetch("/api/admin/translate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, targetLang, preferDeepSeek: true }),
  });
  const data = await res.json();
  if (!res.ok || data.error) throw new Error(data.error ?? "Translation failed");
  return data.translated ?? data.text ?? "";
}

export function LegalPageEditor({ initial, pageLabel }: Props) {
  const [titleEl, setTitleEl] = React.useState(initial.titleEl);
  const [titleEn, setTitleEn] = React.useState(initial.titleEn);
  const [contentEl, setContentEl] = React.useState(initial.contentEl);
  const [contentEn, setContentEn] = React.useState(initial.contentEn);
  const [saving, setSaving] = React.useState(false);
  const [translating, setTranslating] = React.useState<"el→en" | "en→el" | null>(null);
  const [activeTab, setActiveTab] = React.useState<"el" | "en">("el");

  async function onSave() {
    setSaving(true);
    try {
      const res = await updateLegalPageAction({
        id: initial.id,
        titleEl,
        titleEn,
        contentEl,
        contentEn,
      });
      if (!res.success) {
        toast.error(res.error || "Save failed");
        return;
      }
      toast.success(`${pageLabel} saved.`);
    } finally {
      setSaving(false);
    }
  }

  async function onTranslate(direction: "el→en" | "en→el") {
    const fromLang = direction === "el→en" ? "el" : "en";
    const toLang = direction === "el→en" ? "en" : "el";
    const sourceTitle = fromLang === "el" ? titleEl : titleEn;
    const sourceContent = fromLang === "el" ? contentEl : contentEn;

    if (!sourceContent || sourceContent === "<p></p>") {
      toast.error(
        fromLang === "el"
          ? "Δεν υπάρχει κείμενο στα Ελληνικά για μετάφραση."
          : "No English content to translate."
      );
      return;
    }

    setTranslating(direction);
    try {
      const [translatedTitle, translatedContent] = await Promise.all([
        translateText(sourceTitle, toLang),
        translateText(sourceContent, toLang),
      ]);

      if (toLang === "en") {
        setTitleEn(translatedTitle);
        setContentEn(translatedContent);
        setActiveTab("en");
      } else {
        setTitleEl(translatedTitle);
        setContentEl(translatedContent);
        setActiveTab("el");
      }

      toast.success(
        direction === "el→en"
          ? "Μεταφράστηκε στα Αγγλικά. Ελέγξτε και αποθηκεύστε."
          : "Translated to Greek. Review and save."
      );
    } catch (err: any) {
      toast.error(err.message ?? "Translation failed");
    } finally {
      setTranslating(null);
    }
  }

  const isTranslating = translating !== null;

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{pageLabel}</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Bilingual rich-text content shown in a modal when users click the footer link.
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {/* Translate EL → EN */}
          <Button
            variant="outline"
            onClick={() => onTranslate("el→en")}
            disabled={isTranslating || saving}
            className="gap-2 text-[#0078D4] border-[#C7E0F4] hover:bg-[#DEECF9] hover:border-[#0078D4] disabled:opacity-50"
            title="Translate Greek content to English using DeepSeek AI"
          >
            {translating === "el→en" ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Languages className="w-4 h-4" />
            )}
            <span className="hidden sm:inline">
              {translating === "el→en" ? "Μετάφραση…" : "ΕΛ → EN"}
            </span>
          </Button>

          {/* Translate EN → EL */}
          <Button
            variant="outline"
            onClick={() => onTranslate("en→el")}
            disabled={isTranslating || saving}
            className="gap-2 text-[#0078D4] border-[#C7E0F4] hover:bg-[#DEECF9] hover:border-[#0078D4] disabled:opacity-50"
            title="Translate English content to Greek using DeepSeek AI"
          >
            {translating === "en→el" ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Languages className="w-4 h-4" />
            )}
            <span className="hidden sm:inline">
              {translating === "en→el" ? "Translating…" : "EN → ΕΛ"}
            </span>
          </Button>

          {/* Save */}
          <Button onClick={onSave} disabled={saving || isTranslating}>
            {saving ? (
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
            ) : (
              <Save className="w-4 h-4 mr-2" />
            )}
            Save
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "el" | "en")}>
        <TabsList>
          <TabsTrigger value="el">🇬🇷 Ελληνικά</TabsTrigger>
          <TabsTrigger value="en">🇬🇧 English</TabsTrigger>
        </TabsList>

        <TabsContent value="el" className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label>Τίτλος</Label>
            <Input value={titleEl} onChange={(e) => setTitleEl(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>Περιεχόμενο</Label>
            <TiptapEditor
              value={contentEl}
              onChange={setContentEl}
              placeholder="Γράψτε το κείμενο της πολιτικής εδώ..."
            />
          </div>
        </TabsContent>

        <TabsContent value="en" className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label>Title</Label>
            <Input value={titleEn} onChange={(e) => setTitleEn(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>Content</Label>
            <TiptapEditor
              value={contentEn}
              onChange={setContentEn}
              placeholder="Write the policy content here..."
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
