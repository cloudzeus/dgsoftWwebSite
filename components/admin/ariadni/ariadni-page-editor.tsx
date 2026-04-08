"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { updateAriadniPageAction } from "@/app/lib/actions/ariadni";
import type { AriadniLocaleContent } from "@/lib/ariadni-content";
import { toast } from "sonner";
import { Loader2, Save } from "lucide-react";
import Link from "next/link";

function linesToArray(s: string): string[] {
  return s
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
}

function arrayToLines(arr: string[]): string {
  return arr.join("\n");
}

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
  const [espaPdfBannerUrl, setEspaPdfBannerUrl] = React.useState(
    initialEspaPdfBannerUrl
  );
  const [el, setEl] = React.useState<AriadniLocaleContent>(initialEL);
  const [en, setEn] = React.useState<AriadniLocaleContent>(initialEN);
  const [pending, setPending] = React.useState(false);

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
    <div className="space-y-8 max-w-4xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Ariadne page</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Bilingual content for{" "}
            <Link
              href="/ariadni"
              className="text-primary underline-offset-4 hover:underline"
              target="_blank"
            >
              /ariadni
            </Link>
            . Switch language on the site with the header toggle (EL/EN).
          </p>
        </div>
        <Button onClick={onSave} disabled={pending}>
          {pending ? (
            <Loader2 className="w-4 h-4 animate-spin mr-2" />
          ) : (
            <Save className="w-4 h-4 mr-2" />
          )}
          Save
        </Button>
      </div>

      <div className="space-y-2">
        <Label htmlFor="logoUrl">Logo URL (CDN)</Label>
        <Input
          id="logoUrl"
          value={logoUrl}
          onChange={(e) => setLogoUrl(e.target.value)}
          placeholder="https://…"
        />
      </div>

      <div className="rounded-lg border border-border p-4 space-y-4 bg-muted/30">
        <p className="text-sm font-medium text-foreground">
          Banner under budget cards (full width of both cards)
        </p>
        <div className="space-y-2">
          <Label htmlFor="espaPdfUrl">PDF URL (opens in new tab)</Label>
          <Input
            id="espaPdfUrl"
            value={espaPdfUrl}
            onChange={(e) => setEspaPdfUrl(e.target.value)}
            placeholder="https://…pdf"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="espaPdfBannerUrl">Banner image URL (same row width as stats)</Label>
          <Input
            id="espaPdfBannerUrl"
            value={espaPdfBannerUrl}
            onChange={(e) => setEspaPdfBannerUrl(e.target.value)}
            placeholder="https://…webp"
          />
          <p className="text-xs text-muted-foreground">
            If the image fails to load, the page shows a PDF fallback; upload the
            banner to Bunny and paste the URL here.
          </p>
        </div>
      </div>

      <Tabs defaultValue="el" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="el">Ελληνικά (EL)</TabsTrigger>
          <TabsTrigger value="en">English (EN)</TabsTrigger>
        </TabsList>

        <TabsContent value="el" className="space-y-6 mt-6">
          <LocaleFields
            c={el}
            onChange={patchEL}
            linesToArray={linesToArray}
            arrayToLines={arrayToLines}
          />
        </TabsContent>
        <TabsContent value="en" className="space-y-6 mt-6">
          <LocaleFields
            c={en}
            onChange={patchEN}
            linesToArray={linesToArray}
            arrayToLines={arrayToLines}
          />
        </TabsContent>
      </Tabs>

      <Button onClick={onSave} disabled={pending} className="w-full sm:w-auto">
        {pending ? (
          <Loader2 className="w-4 h-4 animate-spin mr-2" />
        ) : (
          <Save className="w-4 h-4 mr-2" />
        )}
        Save all
      </Button>
    </div>
  );
}

function LocaleFields({
  c,
  onChange,
  linesToArray,
  arrayToLines,
}: {
  c: AriadniLocaleContent;
  onChange: (patch: Partial<AriadniLocaleContent>) => void;
  linesToArray: (s: string) => string[];
  arrayToLines: (arr: string[]) => string;
}) {
  return (
    <>
      <Field label="Hero badge">
        <Input
          value={c.heroBadge}
          onChange={(e) => onChange({ heroBadge: e.target.value })}
        />
      </Field>
      <Field label="Title">
        <Input
          value={c.title}
          onChange={(e) => onChange({ title: e.target.value })}
        />
      </Field>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Stat 1 label">
          <Input
            value={c.stats[0]?.label ?? ""}
            onChange={(e) =>
              onChange({
                stats: [
                  { ...c.stats[0], label: e.target.value, value: c.stats[0].value },
                  c.stats[1],
                ],
              })
            }
          />
        </Field>
        <Field label="Stat 1 value">
          <Input
            value={c.stats[0]?.value ?? ""}
            onChange={(e) =>
              onChange({
                stats: [
                  { ...c.stats[0], label: c.stats[0].label, value: e.target.value },
                  c.stats[1],
                ],
              })
            }
          />
        </Field>
        <Field label="Stat 2 label">
          <Input
            value={c.stats[1]?.label ?? ""}
            onChange={(e) =>
              onChange({
                stats: [
                  c.stats[0],
                  { ...c.stats[1], label: e.target.value, value: c.stats[1].value },
                ],
              })
            }
          />
        </Field>
        <Field label="Stat 2 value">
          <Input
            value={c.stats[1]?.value ?? ""}
            onChange={(e) =>
              onChange({
                stats: [
                  c.stats[0],
                  { ...c.stats[1], label: c.stats[1].label, value: e.target.value },
                ],
              })
            }
          />
        </Field>
      </div>
      <Field label="Tagline">
        <Textarea
          value={c.tagline}
          onChange={(e) => onChange({ tagline: e.target.value })}
          rows={2}
        />
      </Field>
      <Field label="Intro (main paragraph)">
        <Textarea
          value={c.intro}
          onChange={(e) => onChange({ intro: e.target.value })}
          rows={6}
        />
      </Field>
      <Field label="API lead-in (heading line)">
        <Textarea
          value={c.apiLeadIn}
          onChange={(e) => onChange({ apiLeadIn: e.target.value })}
          rows={2}
        />
      </Field>
      <Field label="Integration lines (one per line)">
        <Textarea
          value={arrayToLines(c.integrationLines)}
          onChange={(e) =>
            onChange({ integrationLines: linesToArray(e.target.value) })
          }
          rows={8}
        />
      </Field>
      <Field label="Value paragraph (after integrations)">
        <Textarea
          value={c.valueParagraph}
          onChange={(e) => onChange({ valueParagraph: e.target.value })}
          rows={5}
        />
      </Field>
      <Field label="Feature checks (one per line)">
        <Textarea
          value={arrayToLines(c.featureChecks)}
          onChange={(e) =>
            onChange({ featureChecks: linesToArray(e.target.value) })
          }
          rows={8}
        />
      </Field>
      <Field label="Strategic heading">
        <Input
          value={c.strategicHeading}
          onChange={(e) => onChange({ strategicHeading: e.target.value })}
        />
      </Field>
      <Field label="Partner intro (DGSOFT — can use blank lines)">
        <Textarea
          value={c.partnerIntro}
          onChange={(e) => onChange({ partnerIntro: e.target.value })}
          rows={8}
        />
      </Field>
      <Field label="Partner bullets (one per line)">
        <Textarea
          value={arrayToLines(c.partnerBullets)}
          onChange={(e) =>
            onChange({ partnerBullets: linesToArray(e.target.value) })
          }
          rows={6}
        />
      </Field>
      <Field label="Partner closing">
        <Textarea
          value={c.partnerClosing}
          onChange={(e) => onChange({ partnerClosing: e.target.value })}
          rows={5}
        />
      </Field>
      <Field label="Advantages heading">
        <Input
          value={c.advantagesHeading}
          onChange={(e) => onChange({ advantagesHeading: e.target.value })}
        />
      </Field>
      <Field label="Advantages (one per line)">
        <Textarea
          value={arrayToLines(c.advantages)}
          onChange={(e) =>
            onChange({ advantages: linesToArray(e.target.value) })
          }
          rows={5}
        />
      </Field>
      <Field label="Closing line">
        <Textarea
          value={c.closingLine}
          onChange={(e) => onChange({ closingLine: e.target.value })}
          rows={3}
        />
      </Field>
    </>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label className="text-foreground">{label}</Label>
      {children}
    </div>
  );
}
