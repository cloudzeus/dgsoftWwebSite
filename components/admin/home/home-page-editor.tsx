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
import { Loader2, Plus, Save, Trash2, Star, AlignLeft, MousePointerClick, BarChart2, Users, Award, Layers, ChevronRight } from "lucide-react";
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
        toast.error(res.error || "Αποτυχία αποθήκευσης");
        return;
      }
      toast.success("Η αρχική σελίδα αποθηκεύτηκε.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="bg-[#F3F2F1] p-5 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[#201F1E]">Αρχική Σελίδα</h1>
          <p className="text-[#605E5C] text-sm mt-1">
            Δίγλωσσο περιεχόμενο για{" "}
            <Link
              href="/"
              className="text-[#0078D4] underline-offset-4 hover:underline"
              target="_blank"
            >
              /
            </Link>
            . Οι άλλες ενότητες (Υπηρεσίες, Έργα, Πελάτες, Τοποθεσίες, Τελευταίες Ειδήσεις) διαχειρίζονται από τις αντίστοιχες σελίδες.
          </p>
        </div>
        <Button onClick={onSave} disabled={pending} className="bg-[#0078D4] hover:bg-[#106EBE] text-white">
          {pending ? (
            <Loader2 className="w-4 h-4 animate-spin mr-2" />
          ) : (
            <Save className="w-4 h-4 mr-2" />
          )}
          Αποθήκευση
        </Button>
      </div>

      <Tabs defaultValue="el" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2 mb-4">
          <TabsTrigger value="el">Ελληνικά (EL)</TabsTrigger>
          <TabsTrigger value="en">English (EN)</TabsTrigger>
        </TabsList>

        <TabsContent value="el" className="mt-0">
          <SectionTabs c={el} onChange={patchEL} />
        </TabsContent>
        <TabsContent value="en" className="mt-0">
          <SectionTabs c={en} onChange={patchEN} />
        </TabsContent>
      </Tabs>

      <div className="mt-6">
        <Button onClick={onSave} disabled={pending} className="w-full sm:w-auto bg-[#0078D4] hover:bg-[#106EBE] text-white">
          {pending ? (
            <Loader2 className="w-4 h-4 animate-spin mr-2" />
          ) : (
            <Save className="w-4 h-4 mr-2" />
          )}
          Αποθήκευση όλων
        </Button>
      </div>
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
      <TabsList className="grid w-full max-w-md grid-cols-2 mb-4">
        <TabsTrigger value="hero">Hero</TabsTrigger>
        <TabsTrigger value="about">About (Ποιοι Είμαστε)</TabsTrigger>
      </TabsList>

      <TabsContent value="hero" className="space-y-4 mt-0">
        <HeroFields c={c} onChange={onChange} />
      </TabsContent>
      <TabsContent value="about" className="space-y-4 mt-0">
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
      {/* Basic Info */}
      <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3 flex items-center gap-1.5">
          <Star className="w-3 h-3" />ΒΑΣΙΚΕΣ ΠΛΗΡΟΦΟΡΙΕΣ
        </p>
        <Field label="Eyebrow (γραμμή πάνω από τον τίτλο)">
          <Input
            value={c.eyebrow}
            onChange={(e) => onChange({ eyebrow: e.target.value })}
          />
        </Field>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Τίτλος — απλό πρόθεμα">
            <Input
              value={c.titlePrefix}
              onChange={(e) => onChange({ titlePrefix: e.target.value })}
              placeholder="Business "
            />
            <p className="text-xs text-[#A19F9D] mt-1">
              Συμπεριλάβετε κενό στο τέλος αν θέλετε διάστημα πριν το gradient.
            </p>
          </Field>
          <Field label="Τίτλος — gradient highlight">
            <Input
              value={c.titleHighlight}
              onChange={(e) => onChange({ titleHighlight: e.target.value })}
              placeholder="Forward"
            />
          </Field>
        </div>
      </div>

      {/* Body */}
      <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3 flex items-center gap-1.5">
          <AlignLeft className="w-3 h-3" />ΚΕΙΜΕΝΟ
        </p>
        <Field label="Παράγραφοι κειμένου (χωρίστε με κενή γραμμή)">
          <Textarea
            value={paragraphsToText(c.paragraphs)}
            onChange={(e) => onChange({ paragraphs: textToParagraphs(e.target.value) })}
            rows={12}
          />
        </Field>
      </div>

      {/* CTAs */}
      <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3 flex items-center gap-1.5">
          <MousePointerClick className="w-3 h-3" />ΚΟΥΜΠΙΑ ΔΡΑΣΗΣ
        </p>
        <p className="text-[11px] font-semibold text-[#605E5C]">Κύριο CTA (γεμιστό κουμπί)</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Ετικέτα">
            <Input
              value={c.primaryCta.label}
              onChange={(e) =>
                onChange({ primaryCta: { ...c.primaryCta, label: e.target.value } })
              }
            />
          </Field>
          <Field label="Σύνδεσμος (href)">
            <Input
              value={c.primaryCta.href}
              onChange={(e) =>
                onChange({ primaryCta: { ...c.primaryCta, href: e.target.value } })
              }
              placeholder="#contact"
            />
          </Field>
        </div>
        <div className="border-t border-[#EDEBE9] pt-3 mt-3">
          <p className="text-[11px] font-semibold text-[#605E5C] mb-3">Δευτερεύον CTA (outline κουμπί)</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Ετικέτα">
              <Input
                value={c.secondaryCta.label}
                onChange={(e) =>
                  onChange({ secondaryCta: { ...c.secondaryCta, label: e.target.value } })
                }
              />
            </Field>
            <Field label="Σύνδεσμος (href)">
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
      </div>

      {/* Stats */}
      <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3 flex items-center gap-1.5">
          <BarChart2 className="w-3 h-3" />ΣΤΑΤΙΣΤΙΚΑ (ΑΚΡΙΒΩΣ 4)
        </p>
        {c.stats.map((stat, i) => (
          <div key={i} className="grid sm:grid-cols-[8rem_1fr_auto] gap-3 items-end">
            <Field label={`#${i + 1} Αριθμός`}>
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
            <Field label="Ετικέτα">
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
                    ? "Απαιτούνται ακριβώς 4 στατιστικά"
                    : "Αφαίρεση στατιστικού"
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
            Προσθήκη στατιστικού (χρειάζονται {4 - c.stats.length} ακόμη)
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
      {/* Heading */}
      <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3 flex items-center gap-1.5">
          <Star className="w-3 h-3" />ΕΠΙΚΕΦΑΛΙΔΑ ΕΝΟΤΗΤΑΣ
        </p>
        <Field label="Ετικέτα ενότητας (μικρά κεφαλαία πάνω από την επικεφαλίδα)">
          <Input
            value={a.sectionLabel}
            onChange={(e) => onChange({ sectionLabel: e.target.value })}
            placeholder="Ποιοι Είμαστε"
          />
        </Field>
        <div className="grid sm:grid-cols-3 gap-4">
          <Field label="Επικεφαλίδα — πρόθεμα">
            <Input
              value={a.headingPrefix}
              onChange={(e) => onChange({ headingPrefix: e.target.value })}
              placeholder="Από το 2006, σταθερά δίπλα στην "
            />
          </Field>
          <Field label="Επικεφαλίδα — gradient highlight">
            <Input
              value={a.headingHighlight}
              onChange={(e) => onChange({ headingHighlight: e.target.value })}
              placeholder="επιχείρησή σας"
            />
          </Field>
          <Field label="Επικεφαλίδα — επίθεμα">
            <Input
              value={a.headingSuffix}
              onChange={(e) => onChange({ headingSuffix: e.target.value })}
              placeholder="."
            />
          </Field>
        </div>
      </div>

      {/* Body + CTA */}
      <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3 flex items-center gap-1.5">
          <AlignLeft className="w-3 h-3" />ΚΕΙΜΕΝΟ & CTA
        </p>
        <Field label="Παράγραφοι (χωρίστε με κενή γραμμή — 1η αριστερά, οι υπόλοιπες δεξιά πάνω από το CTA)">
          <Textarea
            value={paragraphsToText(a.paragraphs)}
            onChange={(e) => onChange({ paragraphs: textToParagraphs(e.target.value) })}
            rows={10}
          />
        </Field>
        <div className="border-t border-[#EDEBE9] pt-3 mt-3">
          <p className="text-[11px] font-semibold text-[#605E5C] mb-3">CTA «Ένταξη στην Ομάδα»</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Ετικέτα">
              <Input
                value={a.joinCta.label}
                onChange={(e) => onChange({ joinCta: { ...a.joinCta, label: e.target.value } })}
              />
            </Field>
            <Field label="Σύνδεσμος (href)">
              <Input
                value={a.joinCta.href}
                onChange={(e) => onChange({ joinCta: { ...a.joinCta, href: e.target.value } })}
                placeholder="/careers"
              />
            </Field>
          </div>
        </div>
      </div>

      {/* Awards */}
      <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3 flex items-center gap-1.5">
          <Award className="w-3 h-3" />ΔΙΑΚΡΙΣΕΙΣ
        </p>
        <Field label="Επικεφαλίδα διακρίσεων">
          <Input
            value={a.awardsHeading}
            onChange={(e) => onChange({ awardsHeading: e.target.value })}
            placeholder="Διακρίσεις"
          />
        </Field>
        {a.awards.map((aw, i) => (
          <div key={i} className="grid sm:grid-cols-2 gap-3">
            <Field label={`#0${i + 1} Τίτλος`}>
              <Input
                value={aw.title}
                onChange={(e) => {
                  const next = [...a.awards];
                  next[i] = { ...next[i], title: e.target.value };
                  onChange({ awards: next as AboutSection["awards"] });
                }}
              />
            </Field>
            <Field label="Οργανισμός / υπότιτλος">
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

      {/* Values */}
      <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3 flex items-center gap-1.5">
          <Layers className="w-3 h-3" />ΚΑΡΤΕΣ ΑΞΙΩΝ (ΑΚΡΙΒΩΣ 4)
        </p>
        <Field label="Επικεφαλίδα προσέγγισης">
          <Input
            value={a.approachHeading}
            onChange={(e) => onChange({ approachHeading: e.target.value })}
            placeholder="Η Προσέγγιση Μας"
          />
        </Field>
        {a.values.map((v, i) => (
          <div key={i} className="space-y-3 border-t border-[#EDEBE9] pt-3 first:border-t-0 first:pt-0">
            <div className="grid sm:grid-cols-[10rem_1fr] gap-3">
              <Field label={`#${i + 1} Εικονίδιο`}>
                <select
                  className="h-9 rounded-md border border-[#C8C6C4] bg-transparent px-3 text-sm w-full"
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
              <Field label="Τίτλος">
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
            <Field label="Περιγραφή">
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

      {/* Bottom stats */}
      <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3 flex items-center gap-1.5">
          <BarChart2 className="w-3 h-3" />ΣΤΑΤΙΣΤΙΚΑ ΚΑΤΩ ΜΠΑΡΑΣ (ΑΚΡΙΒΩΣ 4)
        </p>
        {a.stats.map((s, i) => (
          <div key={i} className="grid sm:grid-cols-[8rem_1fr] gap-3 items-end">
            <Field label={`#${i + 1} Τιμή`}>
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
            <Field label="Ετικέτα">
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
    <div className="space-y-1.5">
      <Label className="text-[11px] font-semibold text-[#605E5C]">{label}</Label>
      {children}
    </div>
  );
}
