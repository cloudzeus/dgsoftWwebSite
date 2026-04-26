"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { updateLegalPageAction, type LegalPageData } from "@/app/lib/actions/legal";
import { TiptapEditor } from "./tiptap-editor";
import { toast } from "sonner";
import { Loader2, Save, Languages, FileText, AlignLeft } from "lucide-react";

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
        toast.error(res.error || "Αποτυχία αποθήκευσης");
        return;
      }
      toast.success(`${pageLabel} αποθηκεύτηκε.`);
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
      toast.error(err.message ?? "Αποτυχία μετάφρασης");
    } finally {
      setTranslating(null);
    }
  }

  const isTranslating = translating !== null;

  return (
    <div className="bg-[#F3F2F1] p-5 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#EFF6FC] border border-[#C7E0F4] flex items-center justify-center shrink-0">
            <FileText className="w-4 h-4 text-[#0078D4]" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-[#201F1E]">{pageLabel}</h1>
            <p className="text-[#A19F9D] text-[11px] mt-0.5">
              Δίγλωσσο περιεχόμενο rich-text που εμφανίζεται σε modal όταν ο χρήστης κάνει κλικ στον σύνδεσμο υποσέλιδου.
            </p>
          </div>
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
              {translating === "en→el" ? "Μετάφραση…" : "EN → ΕΛ"}
            </span>
          </Button>

          {/* Save */}
          <Button
            onClick={onSave}
            disabled={saving || isTranslating}
            className="bg-[#0078D4] hover:bg-[#106EBE] text-white"
          >
            {saving ? (
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
            ) : (
              <Save className="w-4 h-4 mr-2" />
            )}
            Αποθήκευση
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "el" | "en")}>
        <TabsList className="mb-4">
          <TabsTrigger value="el">🇬🇷 Ελληνικά</TabsTrigger>
          <TabsTrigger value="en">🇬🇧 English</TabsTrigger>
        </TabsList>

        <TabsContent value="el" className="space-y-4 mt-0">
          {/* Title */}
          <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] flex items-center gap-1.5">
              <AlignLeft className="w-3 h-3" />ΤΙΤΛΟΣ
            </p>
            <div className="space-y-1.5">
              <Label className="text-[11px] font-semibold text-[#605E5C]">Τίτλος</Label>
              <Input value={titleEl} onChange={(e) => setTitleEl(e.target.value)} />
            </div>
          </div>
          {/* Content */}
          <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] flex items-center gap-1.5">
              <FileText className="w-3 h-3" />ΠΕΡΙΕΧΟΜΕΝΟ
            </p>
            <div className="space-y-1.5">
              <Label className="text-[11px] font-semibold text-[#605E5C]">Περιεχόμενο</Label>
              <TiptapEditor
                value={contentEl}
                onChange={setContentEl}
                placeholder="Γράψτε το κείμενο της πολιτικής εδώ..."
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="en" className="space-y-4 mt-0">
          {/* Title */}
          <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] flex items-center gap-1.5">
              <AlignLeft className="w-3 h-3" />ΤΙΤΛΟΣ
            </p>
            <div className="space-y-1.5">
              <Label className="text-[11px] font-semibold text-[#605E5C]">Τίτλος</Label>
              <Input value={titleEn} onChange={(e) => setTitleEn(e.target.value)} />
            </div>
          </div>
          {/* Content */}
          <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] flex items-center gap-1.5">
              <FileText className="w-3 h-3" />ΠΕΡΙΕΧΟΜΕΝΟ
            </p>
            <div className="space-y-1.5">
              <Label className="text-[11px] font-semibold text-[#605E5C]">Περιεχόμενο</Label>
              <TiptapEditor
                value={contentEn}
                onChange={setContentEn}
                placeholder="Γράψτε το κείμενο της πολιτικής εδώ..."
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
