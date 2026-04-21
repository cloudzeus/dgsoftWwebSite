"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { updateHomePageAction } from "@/app/lib/actions/home";
import {
  ABOUT_VALUE_ICONS,
  type AboutSection,
  type AboutValueIcon,
  type HomeLocaleContent,
} from "@/lib/home-content";
import { toast } from "sonner";
import { Loader2, Plus, Save, Trash2 } from "lucide-react";
import Link from "next/link";

function paragraphsToText(arr: string[]): string {
  return arr.join("\n\n");
}

function textToParagraphs(s: string): string[] {
  return s
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);
}

type Props = {
  initialEL: HomeLocaleContent;
  initialEN: HomeLocaleContent;
};

export function HomePageEditor({ initialEL, initialEN }: Props) {
  const [el, setEl] = React.useState<HomeLocaleContent>(initialEL);
  const [en, setEn] = React.useState<HomeLocaleContent>(initialEN);
  const [pending, setPending] = React.useState(false);

  const patchEL = (patch: Partial<HomeLocaleContent>) =>
    setEl((prev) => ({ ...prev, ...patch }));
  const patchEN = (patch: Partial<HomeLocaleContent>) =>
    setEn((prev) => ({ ...prev, ...patch }));

  async function onSave() {
    setPending(true);
    try {
      const res = await updateHomePageAction({ contentEL: el, contentEN: en });
      if (!res.success) {
        toast.error(res.error || "Save failed");
        return;
      }
      toast.success("Home page saved.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">First page</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Bilingual copy for{" "}
            <Link
              href="/"
              className="text-primary underline-offset-4 hover:underline"
              target="_blank"
            >
              /
            </Link>
            . Other home-page sections (Services, Projects, Customers, Locations,
            Latest Insights) are managed from their own admin pages.
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

      <Tabs defaultValue="el" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="el">Ελληνικά (EL)</TabsTrigger>
          <TabsTrigger value="en">English (EN)</TabsTrigger>
        </TabsList>

        <TabsContent value="el" className="mt-6">
          <SectionTabs c={el} onChange={patchEL} />
        </TabsContent>
        <TabsContent value="en" className="mt-6">
          <SectionTabs c={en} onChange={patchEN} />
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

function SectionTabs({
  c,
  onChange,
}: {
  c: HomeLocaleContent;
  onChange: (patch: Partial<HomeLocaleContent>) => void;
}) {
  const patchAbout = (patch: Partial<AboutSection>) =>
    onChange({ about: { ...c.about, ...patch } });

  return (
    <Tabs defaultValue="hero" className="w-full">
      <TabsList className="grid w-full max-w-md grid-cols-2">
        <TabsTrigger value="hero">Hero</TabsTrigger>
        <TabsTrigger value="about">About (Ποιοι Είμαστε)</TabsTrigger>
      </TabsList>

      <TabsContent value="hero" className="space-y-6 mt-6">
        <HeroFields c={c} onChange={onChange} />
      </TabsContent>
      <TabsContent value="about" className="space-y-6 mt-6">
        <AboutFields a={c.about} onChange={patchAbout} />
      </TabsContent>
    </Tabs>
  );
}

function HeroFields({
  c,
  onChange,
}: {
  c: HomeLocaleContent;
  onChange: (patch: Partial<HomeLocaleContent>) => void;
}) {
  return (
    <>
      <Field label="Eyebrow (line above the title)">
        <Input
          value={c.eyebrow}
          onChange={(e) => onChange({ eyebrow: e.target.value })}
        />
      </Field>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Title — plain prefix">
          <Input
            value={c.titlePrefix}
            onChange={(e) => onChange({ titlePrefix: e.target.value })}
            placeholder="Business "
          />
          <p className="text-xs text-muted-foreground">
            Include a trailing space if you want a gap before the gradient part.
          </p>
        </Field>
        <Field label="Title — gradient highlight">
          <Input
            value={c.titleHighlight}
            onChange={(e) => onChange({ titleHighlight: e.target.value })}
            placeholder="Forward"
          />
        </Field>
      </div>

      <Field label="Body paragraphs (separate with a blank line)">
        <Textarea
          value={paragraphsToText(c.paragraphs)}
          onChange={(e) => onChange({ paragraphs: textToParagraphs(e.target.value) })}
          rows={12}
        />
      </Field>

      <div className="rounded-lg border border-border p-4 space-y-4 bg-muted/30">
        <p className="text-sm font-medium text-foreground">Primary CTA (filled button)</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Label">
            <Input
              value={c.primaryCta.label}
              onChange={(e) =>
                onChange({ primaryCta: { ...c.primaryCta, label: e.target.value } })
              }
            />
          </Field>
          <Field label="Link (href)">
            <Input
              value={c.primaryCta.href}
              onChange={(e) =>
                onChange({ primaryCta: { ...c.primaryCta, href: e.target.value } })
              }
              placeholder="#contact"
            />
          </Field>
        </div>
      </div>

      <div className="rounded-lg border border-border p-4 space-y-4 bg-muted/30">
        <p className="text-sm font-medium text-foreground">Secondary CTA (outline button)</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Label">
            <Input
              value={c.secondaryCta.label}
              onChange={(e) =>
                onChange({ secondaryCta: { ...c.secondaryCta, label: e.target.value } })
              }
            />
          </Field>
          <Field label="Link (href)">
            <Input
              value={c.secondaryCta.href}
              onChange={(e) =>
                onChange({ secondaryCta: { ...c.secondaryCta, href: e.target.value } })
              }
              placeholder="#contact"
            />
          </Field>
        </div>
      </div>

      <div className="rounded-lg border border-border p-4 space-y-4 bg-muted/30">
        <p className="text-sm font-medium text-foreground">Stats cards (exactly 4)</p>
        {c.stats.map((stat, i) => (
          <div key={i} className="grid sm:grid-cols-[8rem_1fr_auto] gap-3 items-end">
            <Field label={`#${i + 1} Number`}>
              <Input
                value={stat.number}
                onChange={(e) => {
                  const next = [...c.stats];
                  next[i] = { ...next[i], number: e.target.value };
                  onChange({ stats: next as HomeLocaleContent["stats"] });
                }}
                placeholder="150+"
              />
            </Field>
            <Field label="Label">
              <Input
                value={stat.label}
                onChange={(e) => {
                  const next = [...c.stats];
                  next[i] = { ...next[i], label: e.target.value };
                  onChange({ stats: next as HomeLocaleContent["stats"] });
                }}
                placeholder="Projects Delivered"
              />
            </Field>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                disabled={c.stats.length <= 4}
                onClick={() => {
                  const next = c.stats.filter((_, idx) => idx !== i);
                  onChange({ stats: next as HomeLocaleContent["stats"] });
                }}
                title={
                  c.stats.length <= 4
                    ? "Exactly 4 stats required"
                    : "Remove this stat"
                }
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
        {c.stats.length < 4 && (
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => {
              const next = [...c.stats, { number: "", label: "" }];
              onChange({ stats: next as HomeLocaleContent["stats"] });
            }}
          >
            <Plus className="w-4 h-4 mr-2" />
            Add stat (need {4 - c.stats.length} more)
          </Button>
        )}
      </div>
    </>
  );
}

function AboutFields({
  a,
  onChange,
}: {
  a: AboutSection;
  onChange: (patch: Partial<AboutSection>) => void;
}) {
  return (
    <>
      <Field label="Section label (small uppercase over the heading)">
        <Input
          value={a.sectionLabel}
          onChange={(e) => onChange({ sectionLabel: e.target.value })}
          placeholder="Ποιοι Είμαστε"
        />
      </Field>

      <div className="grid sm:grid-cols-3 gap-4">
        <Field label="Heading — prefix">
          <Input
            value={a.headingPrefix}
            onChange={(e) => onChange({ headingPrefix: e.target.value })}
            placeholder="Από το 2006, σταθερά δίπλα στην "
          />
        </Field>
        <Field label="Heading — gradient highlight">
          <Input
            value={a.headingHighlight}
            onChange={(e) => onChange({ headingHighlight: e.target.value })}
            placeholder="επιχείρησή σας"
          />
        </Field>
        <Field label="Heading — suffix">
          <Input
            value={a.headingSuffix}
            onChange={(e) => onChange({ headingSuffix: e.target.value })}
            placeholder="."
          />
        </Field>
      </div>

      <Field label="Paragraphs (separate with a blank line — 1st goes left, the rest go right above the CTA)">
        <Textarea
          value={paragraphsToText(a.paragraphs)}
          onChange={(e) => onChange({ paragraphs: textToParagraphs(e.target.value) })}
          rows={10}
        />
      </Field>

      <div className="rounded-lg border border-border p-4 space-y-4 bg-muted/30">
        <p className="text-sm font-medium text-foreground">&quot;Join Our Team&quot; CTA</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Label">
            <Input
              value={a.joinCta.label}
              onChange={(e) => onChange({ joinCta: { ...a.joinCta, label: e.target.value } })}
            />
          </Field>
          <Field label="Link (href)">
            <Input
              value={a.joinCta.href}
              onChange={(e) => onChange({ joinCta: { ...a.joinCta, href: e.target.value } })}
              placeholder="/careers"
            />
          </Field>
        </div>
      </div>

      <Field label="Awards heading">
        <Input
          value={a.awardsHeading}
          onChange={(e) => onChange({ awardsHeading: e.target.value })}
          placeholder="Διακρίσεις"
        />
      </Field>

      <div className="rounded-lg border border-border p-4 space-y-4 bg-muted/30">
        <p className="text-sm font-medium text-foreground">Awards (exactly 3)</p>
        {a.awards.map((aw, i) => (
          <div key={i} className="grid sm:grid-cols-2 gap-3">
            <Field label={`#0${i + 1} Title`}>
              <Input
                value={aw.title}
                onChange={(e) => {
                  const next = [...a.awards];
                  next[i] = { ...next[i], title: e.target.value };
                  onChange({ awards: next as AboutSection["awards"] });
                }}
              />
            </Field>
            <Field label="Org / subtitle">
              <Input
                value={aw.org}
                onChange={(e) => {
                  const next = [...a.awards];
                  next[i] = { ...next[i], org: e.target.value };
                  onChange({ awards: next as AboutSection["awards"] });
                }}
              />
            </Field>
          </div>
        ))}
      </div>

      <Field label="Approach heading">
        <Input
          value={a.approachHeading}
          onChange={(e) => onChange({ approachHeading: e.target.value })}
          placeholder="Η Προσέγγιση Μας"
        />
      </Field>

      <div className="rounded-lg border border-border p-4 space-y-4 bg-muted/30">
        <p className="text-sm font-medium text-foreground">Value cards (exactly 4)</p>
        {a.values.map((v, i) => (
          <div key={i} className="space-y-3 border-t border-border/60 pt-3 first:border-t-0 first:pt-0">
            <div className="grid sm:grid-cols-[10rem_1fr] gap-3">
              <Field label={`#${i + 1} Icon`}>
                <select
                  className="h-9 rounded-md border border-input bg-transparent px-3 text-sm"
                  value={v.icon}
                  onChange={(e) => {
                    const next = [...a.values];
                    next[i] = { ...next[i], icon: e.target.value as AboutValueIcon };
                    onChange({ values: next as AboutSection["values"] });
                  }}
                >
                  {ABOUT_VALUE_ICONS.map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Title">
                <Input
                  value={v.title}
                  onChange={(e) => {
                    const next = [...a.values];
                    next[i] = { ...next[i], title: e.target.value };
                    onChange({ values: next as AboutSection["values"] });
                  }}
                />
              </Field>
            </div>
            <Field label="Description">
              <Textarea
                value={v.description}
                onChange={(e) => {
                  const next = [...a.values];
                  next[i] = { ...next[i], description: e.target.value };
                  onChange({ values: next as AboutSection["values"] });
                }}
                rows={2}
              />
            </Field>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-border p-4 space-y-4 bg-muted/30">
        <p className="text-sm font-medium text-foreground">
          Bottom stats bar (exactly 4)
        </p>
        {a.stats.map((s, i) => (
          <div key={i} className="grid sm:grid-cols-[8rem_1fr] gap-3 items-end">
            <Field label={`#${i + 1} Value`}>
              <Input
                value={s.value}
                onChange={(e) => {
                  const next = [...a.stats];
                  next[i] = { ...next[i], value: e.target.value };
                  onChange({ stats: next as AboutSection["stats"] });
                }}
                placeholder="2006"
              />
            </Field>
            <Field label="Label">
              <Input
                value={s.label}
                onChange={(e) => {
                  const next = [...a.stats];
                  next[i] = { ...next[i], label: e.target.value };
                  onChange({ stats: next as AboutSection["stats"] });
                }}
                placeholder="Έτος Ίδρυσης"
              />
            </Field>
          </div>
        ))}
      </div>
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
