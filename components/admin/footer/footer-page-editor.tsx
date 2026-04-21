"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Loader2,
  Mail,
  Music2,
  Plus,
  Save,
  Trash2,
  Twitter,
  Youtube,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { updateFooterAction } from "@/app/lib/actions/footer";
import {
  FOOTER_SOCIAL_ICONS,
  renderCopyright,
  type FooterColumn,
  type FooterLink,
  type FooterLocaleContent,
  type FooterSocial,
  type FooterSocialIcon,
} from "@/lib/footer-content";

const SOCIAL_ICON_MAP: Record<FooterSocialIcon, LucideIcon> = {
  facebook: Facebook,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  github: Github,
  youtube: Youtube,
  tiktok: Music2,
  mail: Mail,
};

function isExternal(href: string): boolean {
  return /^(https?:|mailto:|tel:)/i.test(href);
}

function move<T>(arr: T[], from: number, to: number): T[] {
  if (to < 0 || to >= arr.length) return arr;
  const next = [...arr];
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next;
}

type Props = {
  initialEL: FooterLocaleContent;
  initialEN: FooterLocaleContent;
};

export function FooterPageEditor({ initialEL, initialEN }: Props) {
  const [el, setEl] = React.useState<FooterLocaleContent>(initialEL);
  const [en, setEn] = React.useState<FooterLocaleContent>(initialEN);
  const [activeTab, setActiveTab] = React.useState<"el" | "en">("el");
  const [pending, setPending] = React.useState(false);

  const activeContent = activeTab === "en" ? en : el;
  const setActive =
    activeTab === "en"
      ? (patch: Partial<FooterLocaleContent>) =>
          setEn((prev) => ({ ...prev, ...patch }))
      : (patch: Partial<FooterLocaleContent>) =>
          setEl((prev) => ({ ...prev, ...patch }));

  async function onSave() {
    setPending(true);
    try {
      const res = await updateFooterAction({ contentEL: el, contentEN: en });
      if (!res.success) {
        toast.error(res.error || "Save failed");
        return;
      }
      toast.success("Footer saved.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="flex flex-1 flex-col">
      {/* Sticky save bar */}
      <div className="sticky top-0 z-10 -mx-4 md:-mx-6 mb-6 border-b border-border bg-background/95 px-4 md:px-6 py-3 backdrop-blur">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h1 className="text-xl font-bold tracking-tight">Footer</h1>
            <p className="text-muted-foreground text-xs">
              Site-wide footer shown on every page.{" "}
              <Link
                href="/"
                className="text-primary underline-offset-4 hover:underline"
                target="_blank"
              >
                View live ↗
              </Link>
            </p>
          </div>
          <Button onClick={onSave} disabled={pending}>
            {pending ? (
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
            ) : (
              <Save className="w-4 h-4 mr-2" />
            )}
            Save changes
          </Button>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_420px]">
        {/* Form */}
        <div className="space-y-6">
          <Tabs
            value={activeTab}
            onValueChange={(v) => setActiveTab(v as "el" | "en")}
            className="w-full"
          >
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="el">Ελληνικά (EL)</TabsTrigger>
              <TabsTrigger value="en">English (EN)</TabsTrigger>
            </TabsList>

            <TabsContent value="el" className="mt-6">
              <FooterFields c={el} onChange={setActive} />
            </TabsContent>
            <TabsContent value="en" className="mt-6">
              <FooterFields c={en} onChange={setActive} />
            </TabsContent>
          </Tabs>
        </div>

        {/* Live preview */}
        <aside className="hidden xl:block">
          <div className="sticky top-24">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Live preview ({activeTab === "en" ? "EN" : "EL"})
              </p>
              <span className="text-xs text-muted-foreground">
                Updates as you type
              </span>
            </div>
            <FooterPreview content={activeContent} />
          </div>
        </aside>
      </div>

      {/* Mobile preview below the form */}
      <div className="xl:hidden mt-10">
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Live preview ({activeTab === "en" ? "EN" : "EL"})
        </p>
        <FooterPreview content={activeContent} />
      </div>
    </div>
  );
}

function FooterFields({
  c,
  onChange,
}: {
  c: FooterLocaleContent;
  onChange: (patch: Partial<FooterLocaleContent>) => void;
}) {
  return (
    <div className="space-y-6">
      <Card title="Brand" subtitle="The logo at the top of the footer">
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Plain prefix (white)">
            <Input
              value={c.brandPrefix}
              onChange={(e) => onChange({ brandPrefix: e.target.value })}
              placeholder="DG"
            />
          </Field>
          <Field label="Highlighted part (gradient)">
            <Input
              value={c.brandHighlight}
              onChange={(e) => onChange({ brandHighlight: e.target.value })}
              placeholder="SOFT"
            />
          </Field>
        </div>
        <div className="mt-4 rounded-md border border-border bg-monks-black p-4 text-center">
          <span className="text-3xl font-bold">
            <span className="text-white">{c.brandPrefix}</span>
            <span className="gradient-text">{c.brandHighlight}</span>
          </span>
        </div>
      </Card>

      <Card title="Tagline" subtitle="Short paragraph under the logo">
        <Textarea
          value={c.tagline}
          onChange={(e) => onChange({ tagline: e.target.value })}
          rows={3}
        />
      </Card>

      <Card
        title="Social links"
        subtitle="URLs starting with http/mailto/tel automatically open in a new tab"
        actions={
          <Button
            type="button"
            size="sm"
            variant="outline"
            onClick={() =>
              onChange({
                socials: [
                  ...c.socials,
                  { icon: "linkedin", href: "", label: "LinkedIn" },
                ],
              })
            }
          >
            <Plus className="w-4 h-4 mr-1" />
            Add social
          </Button>
        }
      >
        {c.socials.length === 0 && (
          <p className="text-sm text-muted-foreground">No social links yet.</p>
        )}
        <div className="space-y-2">
          {c.socials.map((s, i) => (
            <SocialRow
              key={i}
              index={i}
              total={c.socials.length}
              social={s}
              onChange={(next) => {
                const arr = [...c.socials];
                arr[i] = next;
                onChange({ socials: arr });
              }}
              onMoveUp={() =>
                onChange({ socials: move(c.socials, i, i - 1) })
              }
              onMoveDown={() =>
                onChange({ socials: move(c.socials, i, i + 1) })
              }
              onDelete={() =>
                onChange({
                  socials: c.socials.filter((_, idx) => idx !== i),
                })
              }
            />
          ))}
        </div>
      </Card>

      <Card
        title="Link columns"
        subtitle="The footer shows exactly 3 columns of links"
      >
        <div className="grid md:grid-cols-3 gap-4">
          {c.columns.map((col, colIdx) => (
            <ColumnCard
              key={colIdx}
              index={colIdx}
              column={col}
              onChange={(next) => {
                const arr = [...c.columns];
                arr[colIdx] = next;
                onChange({ columns: arr as FooterLocaleContent["columns"] });
              }}
            />
          ))}
        </div>
      </Card>

      <Card title="Bottom bar">
        <div className="space-y-4">
          <Field label="Copyright">
            <Input
              value={c.copyright}
              onChange={(e) => onChange({ copyright: e.target.value })}
              placeholder="© {{year}} DGSOFT. All rights reserved."
            />
            <p className="text-xs text-muted-foreground">
              Use <code className="px-1 py-0.5 rounded bg-muted">{"{{year}}"}</code>{" "}
              for the current year. Preview: <span className="font-medium">{renderCopyright(c.copyright)}</span>
            </p>
          </Field>
          <Field label={"\"Back to top\" label"}>
            <Input
              value={c.backToTop}
              onChange={(e) => onChange({ backToTop: e.target.value })}
              placeholder="Back to top"
            />
          </Field>
        </div>
      </Card>
    </div>
  );
}

function SocialRow({
  index,
  total,
  social,
  onChange,
  onMoveUp,
  onMoveDown,
  onDelete,
}: {
  index: number;
  total: number;
  social: FooterSocial;
  onChange: (next: FooterSocial) => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onDelete: () => void;
}) {
  const Icon = SOCIAL_ICON_MAP[social.icon] ?? Mail;
  const external = social.href && isExternal(social.href);

  return (
    <div className="grid items-center gap-2 rounded-md border border-border bg-card/50 p-2 md:grid-cols-[auto_10rem_minmax(0,2fr)_minmax(0,1fr)_auto]">
      <div className="flex h-9 w-9 items-center justify-center rounded-md bg-muted text-foreground">
        <Icon className="w-4 h-4" />
      </div>
      <select
        className="h-9 rounded-md border border-input bg-transparent px-2 text-sm"
        value={social.icon}
        onChange={(e) =>
          onChange({ ...social, icon: e.target.value as FooterSocialIcon })
        }
      >
        {FOOTER_SOCIAL_ICONS.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
      <Input
        value={social.href}
        onChange={(e) => onChange({ ...social, href: e.target.value })}
        placeholder="https://…"
        className={external ? "border-emerald-600/40" : undefined}
      />
      <Input
        value={social.label}
        onChange={(e) => onChange({ ...social, label: e.target.value })}
        placeholder="Aria label"
      />
      <div className="flex items-center gap-1">
        <Button
          type="button"
          size="icon"
          variant="ghost"
          disabled={index === 0}
          onClick={onMoveUp}
          title="Move up"
        >
          <ArrowUp className="w-4 h-4" />
        </Button>
        <Button
          type="button"
          size="icon"
          variant="ghost"
          disabled={index === total - 1}
          onClick={onMoveDown}
          title="Move down"
        >
          <ArrowDown className="w-4 h-4" />
        </Button>
        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={onDelete}
          title="Remove"
          className="text-destructive hover:text-destructive"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

function ColumnCard({
  index,
  column,
  onChange,
}: {
  index: number;
  column: FooterColumn;
  onChange: (next: FooterColumn) => void;
}) {
  const patchLinks = (links: FooterLink[]) =>
    onChange({ ...column, links });

  return (
    <div className="rounded-lg border border-border bg-muted/30 p-3 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Column {index + 1}
        </span>
        <Button
          type="button"
          size="sm"
          variant="outline"
          onClick={() => patchLinks([...column.links, { name: "", href: "" }])}
        >
          <Plus className="w-3.5 h-3.5 mr-1" />
          Add link
        </Button>
      </div>
      <Field label="Heading">
        <Input
          value={column.heading}
          onChange={(e) => onChange({ ...column, heading: e.target.value })}
          placeholder="Solutions"
        />
      </Field>

      {column.links.length === 0 && (
        <p className="text-xs text-muted-foreground">No links yet.</p>
      )}
      <div className="space-y-2">
        {column.links.map((link, i) => (
          <div key={i} className="rounded-md border border-border bg-card/60 p-2 space-y-2">
            <Input
              value={link.name}
              onChange={(e) => {
                const arr = [...column.links];
                arr[i] = { ...arr[i], name: e.target.value };
                patchLinks(arr);
              }}
              placeholder="Label"
            />
            <Input
              value={link.href}
              onChange={(e) => {
                const arr = [...column.links];
                arr[i] = { ...arr[i], href: e.target.value };
                patchLinks(arr);
              }}
              placeholder="/path or https://…"
            />
            <div className="flex items-center justify-end gap-1">
              <Button
                type="button"
                size="icon"
                variant="ghost"
                disabled={i === 0}
                onClick={() => patchLinks(move(column.links, i, i - 1))}
                title="Move up"
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </Button>
              <Button
                type="button"
                size="icon"
                variant="ghost"
                disabled={i === column.links.length - 1}
                onClick={() => patchLinks(move(column.links, i, i + 1))}
                title="Move down"
              >
                <ArrowDown className="w-3.5 h-3.5" />
              </Button>
              <Button
                type="button"
                size="icon"
                variant="ghost"
                onClick={() =>
                  patchLinks(column.links.filter((_, idx) => idx !== i))
                }
                title="Remove"
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Live preview — mirrors the site Footer structure at smaller scale for visual QA. */
function FooterPreview({ content: c }: { content: FooterLocaleContent }) {
  return (
    <div className="rounded-xl border border-white/10 bg-monks-black text-white shadow-xl overflow-hidden">
      <div className="p-5 text-xs">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="inline-block mb-2 text-xl font-bold">
              <span className="text-white">{c.brandPrefix}</span>
              <span className="gradient-text">{c.brandHighlight}</span>
            </div>
            <p className="text-[10px] leading-snug text-monks-light mb-3 max-w-[14rem]">
              {c.tagline}
            </p>
            <div className="flex gap-1.5 flex-wrap">
              {c.socials.map((s, i) => {
                const Icon = SOCIAL_ICON_MAP[s.icon] ?? Mail;
                return (
                  <span
                    key={i}
                    className="w-6 h-6 rounded-full bg-monks-gray flex items-center justify-center text-monks-light"
                    title={s.label}
                  >
                    <Icon className="w-3 h-3" />
                  </span>
                );
              })}
            </div>
          </div>
          {c.columns.map((col, ci) => (
            <div key={ci}>
              <div className="text-white font-semibold mb-2 text-[11px]">
                {col.heading}
              </div>
              <ul className="space-y-1.5">
                {col.links.map((l, li) => (
                  <li
                    key={li}
                    className="text-[10px] text-monks-light truncate"
                    title={l.href}
                  >
                    {l.name || <em className="opacity-60">(empty)</em>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-5 pt-3 border-t border-white/10 flex justify-between items-center">
          <p className="text-[10px] text-monks-light">
            {renderCopyright(c.copyright)}
          </p>
          <span className="flex items-center gap-1.5 text-[10px] text-monks-light">
            {c.backToTop}
            <span className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center">
              <ArrowUpRight className="w-3 h-3 -rotate-45" />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

function Card({
  title,
  subtitle,
  actions,
  children,
}: {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-lg border border-border bg-card p-4">
      <header className="mb-3 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
        <div>
          <h3 className="text-sm font-semibold">{title}</h3>
          {subtitle && (
            <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>
          )}
        </div>
        {actions}
      </header>
      {children}
    </section>
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
      <Label className="text-foreground text-xs">{label}</Label>
      {children}
    </div>
  );
}
