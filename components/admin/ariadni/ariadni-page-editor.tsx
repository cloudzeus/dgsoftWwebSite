"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { updateAriadniPageAction } from "@/app/lib/actions/ariadni";
import type { AriadniLocaleContent } from "@/lib/ariadni-content";
import { toast } from "sonner";
import {
  Loader2,
  Save,
  FileText,
  Image,
  File,
  Globe,
  Plus,
  X,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

type Props = {
  initialLogoUrl: string;
  initialEspaPdfUrl: string;
  initialEspaPdfBannerUrl: string;
  initialEL: AriadniLocaleContent;
  initialEN: AriadniLocaleContent;
};

export function AriadniPageEditor({
  initialLogoUrl,
  initialEspaPdfUrl,
  initialEspaPdfBannerUrl,
  initialEL,
  initialEN,
}: Props) {
  const [logoUrl, setLogoUrl] = React.useState(initialLogoUrl);
  const [espaPdfUrl, setEspaPdfUrl] = React.useState(initialEspaPdfUrl);
  const [espaPdfBannerUrl, setEspaPdfBannerUrl] = React.useState(initialEspaPdfBannerUrl);
  const [el, setEl] = React.useState<AriadniLocaleContent>(initialEL);
  const [en, setEn] = React.useState<AriadniLocaleContent>(initialEN);
  const [pending, setPending] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<"el" | "en">("el");

  const patchEL = (patch: Partial<AriadniLocaleContent>) =>
    setEl((prev) => ({ ...prev, ...patch }));
  const patchEN = (patch: Partial<AriadniLocaleContent>) =>
    setEn((prev) => ({ ...prev, ...patch }));

  async function onSave() {
    setPending(true);
    try {
      const res = await updateAriadniPageAction({
        logoUrl: logoUrl.trim() || null,
        espaPdfUrl: espaPdfUrl.trim() || null,
        espaPdfBannerUrl: espaPdfBannerUrl.trim() || null,
        contentEL: el,
        contentEN: en,
      });
      if (!res.success) {
        toast.error(res.error || "Save failed");
        return;
      }
      toast.success("Ariadne page saved.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#F3F2F1]">
      {/* Page header bar */}
      <div className="bg-white border-b border-[#EDEBE9] px-6 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#EFF6FC] border border-[#C7E0F4] flex items-center justify-center shrink-0">
            <Globe className="w-4 h-4 text-[#0078D4]" />
          </div>
          <div>
            <h1 className="text-base font-bold text-[#201F1E] leading-tight">Ariadne Page</h1>
            <p className="text-[11px] text-[#A19F9D]">
              Bilingual CMS for{" "}
              <Link
                href="/ariadni"
                className="text-[#0078D4] hover:underline"
                target="_blank"
              >
                /ariadni
              </Link>
              . Use header EL/EN toggle to switch language on site.
            </p>
          </div>
        </div>
        <Button
          onClick={onSave}
          disabled={pending}
          className="h-9 px-5 text-[12px] font-semibold bg-[#0078D4] hover:bg-[#106EBE] text-white rounded shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,120,212,0.25)] active:scale-95"
        >
          {pending ? (
            <Loader2 className="w-3.5 h-3.5 animate-spin mr-1.5" />
          ) : (
            <Save className="w-3.5 h-3.5 mr-1.5" />
          )}
          {pending ? "Saving…" : "Save changes"}
        </Button>
      </div>

      {/* Two-column layout */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-[280px_1fr] gap-5 items-start">

          {/* LEFT COLUMN — Asset URLs */}
          <div className="space-y-4">
            {/* Logo card */}
            <div className="bg-white border border-[#EDEBE9] rounded-lg p-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3 flex items-center gap-1.5">
                <Image className="w-3 h-3" /> Logo
              </p>
              <div className="space-y-1.5">
                <Label className="text-[11px] font-semibold text-[#605E5C]">Logo URL (CDN)</Label>
                <Input
                  value={logoUrl}
                  onChange={(e) => setLogoUrl(e.target.value)}
                  placeholder="https://cdn…"
                  className="h-9 text-sm rounded border-[#C8C6C4] focus-visible:ring-[#0078D4]"
                />
              </div>
              {logoUrl && (
                <div className="mt-3 rounded border border-[#EDEBE9] bg-[#F3F2F1] p-2 flex items-center justify-center h-16 overflow-hidden">
                  <img
                    src={logoUrl}
                    alt="logo preview"
                    className="max-h-full object-contain"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none" }}
                  />
                </div>
              )}
            </div>

            {/* ESPA Banner card */}
            <div className="bg-white border border-[#EDEBE9] rounded-lg p-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3 flex items-center gap-1.5">
                <File className="w-3 h-3" /> ESPA Banner
              </p>
              <div className="space-y-3">
                <div className="space-y-1.5">
                  <Label className="text-[11px] font-semibold text-[#605E5C]">PDF URL</Label>
                  <Input
                    value={espaPdfUrl}
                    onChange={(e) => setEspaPdfUrl(e.target.value)}
                    placeholder="https://…pdf"
                    className="h-9 text-sm rounded border-[#C8C6C4] focus-visible:ring-[#0078D4]"
                  />
                  <p className="text-[10px] text-[#A19F9D]">Opens in new tab on click.</p>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[11px] font-semibold text-[#605E5C]">Banner image URL</Label>
                  <Input
                    value={espaPdfBannerUrl}
                    onChange={(e) => setEspaPdfBannerUrl(e.target.value)}
                    placeholder="https://…webp"
                    className="h-9 text-sm rounded border-[#C8C6C4] focus-visible:ring-[#0078D4]"
                  />
                  <p className="text-[10px] text-[#A19F9D]">Full-width below budget cards. Upload to Bunny, paste URL here.</p>
                </div>
              </div>
            </div>

            {/* Hint */}
            <div className="bg-[#EFF6FC] border border-[#C7E0F4] rounded-lg p-3 flex items-start gap-2">
              <FileText className="w-3.5 h-3.5 text-[#0078D4] shrink-0 mt-0.5" />
              <p className="text-[11px] text-[#0078D4]">Edit bilingual content in the tabs on the right, then click Save changes above.</p>
            </div>
          </div>

          {/* RIGHT COLUMN — Bilingual content tabs */}
          <div className="space-y-4">
            {/* Language tab bar */}
            <div className="bg-white border border-[#EDEBE9] rounded-lg overflow-hidden">
              <div className="flex border-b border-[#EDEBE9] bg-[#F3F2F1]">
                <button
                  onClick={() => setActiveTab("el")}
                  className={`flex-1 py-2.5 text-[11px] font-semibold transition-colors relative ${activeTab === "el" ? "bg-white text-[#0078D4]" : "text-[#605E5C] hover:text-[#201F1E]"}`}
                >
                  {activeTab === "el" && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0078D4] rounded-t" />}
                  Ελληνικά (EL)
                </button>
                <button
                  onClick={() => setActiveTab("en")}
                  className={`flex-1 py-2.5 text-[11px] font-semibold transition-colors relative border-l border-[#EDEBE9] ${activeTab === "en" ? "bg-white text-[#0078D4]" : "text-[#605E5C] hover:text-[#201F1E]"}`}
                >
                  {activeTab === "en" && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0078D4] rounded-t" />}
                  English (EN)
                </button>
              </div>

              <div className="p-5">
                {activeTab === "el" ? (
                  <LocaleFields c={el} onChange={patchEL} />
                ) : (
                  <LocaleFields c={en} onChange={patchEN} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Locale fields ---------- */

function LocaleFields({
  c,
  onChange,
}: {
  c: AriadniLocaleContent;
  onChange: (patch: Partial<AriadniLocaleContent>) => void;
}) {
  return (
    <div className="space-y-5">
      {/* Hero */}
      <SectionCard title="Hero" icon={<Globe className="w-3 h-3" />}>
        <div className="grid grid-cols-2 gap-3">
          <FieldRow label="Hero badge">
            <Input
              value={c.heroBadge}
              onChange={(e) => onChange({ heroBadge: e.target.value })}
              className="h-9 text-sm rounded border-[#C8C6C4] focus-visible:ring-[#0078D4]"
            />
          </FieldRow>
          <FieldRow label="Title">
            <Input
              value={c.title}
              onChange={(e) => onChange({ title: e.target.value })}
              className="h-9 text-sm rounded border-[#C8C6C4] focus-visible:ring-[#0078D4]"
            />
          </FieldRow>
        </div>
        <FieldRow label="Tagline">
          <Textarea
            value={c.tagline}
            onChange={(e) => onChange({ tagline: e.target.value })}
            rows={2}
            className="text-sm rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] resize-none"
          />
        </FieldRow>
      </SectionCard>

      {/* Stats */}
      <SectionCard title="Stats" icon={<FileText className="w-3 h-3" />}>
        <div className="grid grid-cols-2 gap-3">
          {[0, 1].map((i) => (
            <div key={i} className="bg-[#F3F2F1] border border-[#EDEBE9] rounded-lg p-3 space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D]">Stat {i + 1}</p>
              <FieldRow label="Label">
                <Input
                  value={c.stats[i]?.label ?? ""}
                  onChange={(e) => {
                    const next = [...c.stats] as typeof c.stats;
                    next[i] = { ...next[i], label: e.target.value };
                    onChange({ stats: next });
                  }}
                  className="h-9 text-sm rounded border-[#C8C6C4] focus-visible:ring-[#0078D4]"
                />
              </FieldRow>
              <FieldRow label="Value">
                <Input
                  value={c.stats[i]?.value ?? ""}
                  onChange={(e) => {
                    const next = [...c.stats] as typeof c.stats;
                    next[i] = { ...next[i], value: e.target.value };
                    onChange({ stats: next });
                  }}
                  className="h-9 text-sm rounded border-[#C8C6C4] focus-visible:ring-[#0078D4]"
                />
              </FieldRow>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Intro */}
      <SectionCard title="Intro" icon={<FileText className="w-3 h-3" />}>
        <FieldRow label="Intro paragraph">
          <Textarea
            value={c.intro}
            onChange={(e) => onChange({ intro: e.target.value })}
            rows={5}
            className="text-sm rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] resize-none"
          />
        </FieldRow>
      </SectionCard>

      {/* API / Integration */}
      <SectionCard title="API Integration" icon={<ChevronRight className="w-3 h-3" />}>
        <FieldRow label="API lead-in">
          <Textarea
            value={c.apiLeadIn}
            onChange={(e) => onChange({ apiLeadIn: e.target.value })}
            rows={2}
            className="text-sm rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] resize-none"
          />
        </FieldRow>
        <FieldRow label="Integration lines">
          <ArrayEditor
            items={c.integrationLines}
            onChange={(items) => onChange({ integrationLines: items })}
            placeholder="Integration line…"
          />
        </FieldRow>
        <FieldRow label="Value paragraph">
          <Textarea
            value={c.valueParagraph}
            onChange={(e) => onChange({ valueParagraph: e.target.value })}
            rows={4}
            className="text-sm rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] resize-none"
          />
        </FieldRow>
      </SectionCard>

      {/* Feature checks */}
      <SectionCard title="Feature Checks" icon={<FileText className="w-3 h-3" />}>
        <FieldRow label="Feature checks">
          <ArrayEditor
            items={c.featureChecks}
            onChange={(items) => onChange({ featureChecks: items })}
            placeholder="Feature check line…"
          />
        </FieldRow>
      </SectionCard>

      {/* Partner */}
      <SectionCard title="Partner (DGSOFT)" icon={<Globe className="w-3 h-3" />}>
        <FieldRow label="Strategic heading">
          <Input
            value={c.strategicHeading}
            onChange={(e) => onChange({ strategicHeading: e.target.value })}
            className="h-9 text-sm rounded border-[#C8C6C4] focus-visible:ring-[#0078D4]"
          />
        </FieldRow>
        <FieldRow label="Partner intro">
          <Textarea
            value={c.partnerIntro}
            onChange={(e) => onChange({ partnerIntro: e.target.value })}
            rows={6}
            className="text-sm rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] resize-none"
          />
        </FieldRow>
        <FieldRow label="Partner bullets">
          <ArrayEditor
            items={c.partnerBullets}
            onChange={(items) => onChange({ partnerBullets: items })}
            placeholder="Bullet point…"
          />
        </FieldRow>
        <FieldRow label="Partner closing">
          <Textarea
            value={c.partnerClosing}
            onChange={(e) => onChange({ partnerClosing: e.target.value })}
            rows={4}
            className="text-sm rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] resize-none"
          />
        </FieldRow>
      </SectionCard>

      {/* Advantages */}
      <SectionCard title="Advantages" icon={<FileText className="w-3 h-3" />}>
        <FieldRow label="Advantages heading">
          <Input
            value={c.advantagesHeading}
            onChange={(e) => onChange({ advantagesHeading: e.target.value })}
            className="h-9 text-sm rounded border-[#C8C6C4] focus-visible:ring-[#0078D4]"
          />
        </FieldRow>
        <FieldRow label="Advantages list">
          <ArrayEditor
            items={c.advantages}
            onChange={(items) => onChange({ advantages: items })}
            placeholder="Advantage item…"
          />
        </FieldRow>
      </SectionCard>

      {/* Closing */}
      <SectionCard title="Closing" icon={<FileText className="w-3 h-3" />}>
        <FieldRow label="Closing line">
          <Textarea
            value={c.closingLine}
            onChange={(e) => onChange({ closingLine: e.target.value })}
            rows={3}
            className="text-sm rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] resize-none"
          />
        </FieldRow>
      </SectionCard>
    </div>
  );
}

/* ---------- Sub-components ---------- */

function SectionCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
      <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] flex items-center gap-1.5">
        {icon}
        {title}
      </p>
      {children}
    </div>
  );
}

function FieldRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1">
      <Label className="text-[11px] font-semibold text-[#605E5C]">{label}</Label>
      {children}
    </div>
  );
}

function ArrayEditor({
  items,
  onChange,
  placeholder,
}: {
  items: string[];
  onChange: (items: string[]) => void;
  placeholder?: string;
}) {
  const update = (i: number, val: string) => {
    const next = [...items];
    next[i] = val;
    onChange(next);
  };
  const remove = (i: number) => onChange(items.filter((_, idx) => idx !== i));
  const add = () => onChange([...items, ""]);

  return (
    <div className="space-y-1.5">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-1.5">
          <Input
            value={item}
            onChange={(e) => update(i, e.target.value)}
            placeholder={placeholder}
            className="h-9 text-sm rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] flex-1"
          />
          <button
            type="button"
            onClick={() => remove(i)}
            className="h-9 w-9 rounded border border-[#EDEBE9] bg-white hover:bg-[#FDE7E9] hover:border-red-200 flex items-center justify-center shrink-0 transition-colors"
            title="Remove"
          >
            <X className="w-3.5 h-3.5 text-[#A19F9D]" />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={add}
        className="h-8 px-3 rounded border border-dashed border-[#C8C6C4] bg-white hover:bg-[#F3F2F1] text-[11px] font-semibold text-[#605E5C] flex items-center gap-1.5 w-full justify-center transition-colors"
      >
        <Plus className="w-3 h-3" /> Add item
      </button>
    </div>
  );
}
