"use client";

import * as React from "react";
import { Loader2, Plus, Save, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { updateSiteSettingsAction } from "@/app/lib/actions/settings";
import {
  GA4_ID_PATTERN,
  TRACKING_TAG_CATEGORIES,
  TRACKING_TAG_STRATEGIES,
  type SiteSettings,
  type TrackingTag,
} from "@/lib/site-settings";

function uid() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}

function newTag(): TrackingTag {
  return {
    id: uid(),
    name: "New tag",
    type: "custom",
    provider: "other",
    pixelId: "",
    scriptBody: "",
    noscriptBody: "",
    strategy: "afterInteractive",
    enabled: true,
    category: "marketing",
  };
}

const CATEGORY_LABEL: Record<(typeof TRACKING_TAG_CATEGORIES)[number], string> = {
  necessary: "Αναγκαία (πάντα φορτώνει)",
  analytics: "Analytics (απαιτεί consent)",
  marketing: "Marketing (απαιτεί consent)",
};

function defaultCategoryFor(provider: TrackingTag["provider"]): TrackingTag["category"] {
  if (provider === "google-analytics") return "analytics";
  return "marketing";
}

export function SettingsPageEditor({ initial }: { initial: SiteSettings }) {
  const [tags, setTags] = React.useState<TrackingTag[]>(initial.trackingTags);
  const [ga4Id, setGa4Id] = React.useState(initial.ga4MeasurementId ?? "");
  const [saving, setSaving] = React.useState(false);

  const ga4Trimmed = ga4Id.trim();
  const ga4Invalid = ga4Trimmed.length > 0 && !GA4_ID_PATTERN.test(ga4Trimmed);

  function update(id: string, patch: Partial<TrackingTag>) {
    setTags((prev) => prev.map((t) => (t.id === id ? { ...t, ...patch } : t)));
  }

  function remove(id: string) {
    setTags((prev) => prev.filter((t) => t.id !== id));
  }

  async function save() {
    if (ga4Invalid) {
      toast.error("Μη έγκυρο GA4 Measurement ID (μορφή: G-XXXXXXXXXX)");
      return;
    }
    setSaving(true);
    const res = await updateSiteSettingsAction({
      trackingTags: tags,
      ga4MeasurementId: ga4Trimmed,
    });
    setSaving(false);
    if (res.success) toast.success("Οι ρυθμίσεις αποθηκεύτηκαν");
    else toast.error(res.error || "Σφάλμα αποθήκευσης");
  }

  return (
    <div className="mx-auto w-full max-w-5xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Ρυθμίσεις</h1>
          <p className="text-sm text-muted-foreground">
            Διαχείριση tracking, pixels & analytics της ιστοσελίδας.
          </p>
        </div>
        <Button onClick={save} disabled={saving}>
          {saving ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Save className="mr-2 h-4 w-4" />
          )}
          Αποθήκευση
        </Button>
      </div>

      <Tabs defaultValue="seo" className="w-full">
        <TabsList>
          <TabsTrigger value="seo">SEO & Analytics</TabsTrigger>
          <TabsTrigger value="tracking">Tracking Tags</TabsTrigger>
        </TabsList>

        <TabsContent value="seo" className="space-y-4">
          <div className="rounded-lg border bg-card p-4 space-y-4">
            <div>
              <h2 className="text-base font-semibold">Google Analytics 4</h2>
              <p className="text-sm text-muted-foreground">
                Εισάγετε το Measurement ID του GA4. Το script φορτώνεται αυτόματα
                σε όλες τις σελίδες (εκτός /admin) μόλις ο επισκέπτης αποδεχθεί τα
                cookies analytics.
              </p>
            </div>
            <div className="max-w-md">
              <Label htmlFor="ga4-id" className="mb-1 block">
                GA4 Measurement ID
              </Label>
              <Input
                id="ga4-id"
                value={ga4Id}
                onChange={(e) => setGa4Id(e.target.value)}
                placeholder="G-XXXXXXXXXX"
                aria-invalid={ga4Invalid}
              />
              {ga4Invalid ? (
                <p className="mt-1 text-xs text-destructive">
                  Μη έγκυρη μορφή. Αναμενόμενη: G-XXXXXXXXXX
                </p>
              ) : (
                <p className="mt-1 text-xs text-muted-foreground">
                  Θα το βρείτε στο Google Analytics → Admin → Data Streams →
                  (το stream σας).
                </p>
              )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="tracking" className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Facebook Pixel, Google Analytics, GTM, custom scripts…
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setTags((p) => [...p, newTag()])}
            >
              <Plus className="mr-2 h-4 w-4" /> Προσθήκη tag
            </Button>
          </div>

          {tags.length === 0 ? (
            <div className="rounded-md border border-dashed p-8 text-center text-sm text-muted-foreground">
              Δεν υπάρχουν tags ακόμη.
            </div>
          ) : (
            <div className="space-y-4">
              {tags.map((tag) => (
                <TagCard
                  key={tag.id}
                  tag={tag}
                  onChange={(patch) => update(tag.id, patch)}
                  onRemove={() => remove(tag.id)}
                />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

function TagCard({
  tag,
  onChange,
  onRemove,
}: {
  tag: TrackingTag;
  onChange: (patch: Partial<TrackingTag>) => void;
  onRemove: () => void;
}) {
  return (
    <div className="rounded-lg border bg-card p-4 space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <Label className="mb-1 block">Όνομα / Τίτλος</Label>
            <Input
              value={tag.name}
              onChange={(e) => onChange({ name: e.target.value })}
              placeholder="π.χ. Facebook Pixel"
            />
          </div>
          <div>
            <Label className="mb-1 block">Τύπος Tag</Label>
            <Select
              value={tag.type}
              onValueChange={(v) =>
                onChange({ type: v as TrackingTag["type"] })
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="custom">Custom Code</SelectItem>
                <SelectItem value="pixel-id">Pixel / Measurement ID</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-2">
            <Label className="text-xs">{tag.enabled ? "Ενεργό" : "Ανενεργό"}</Label>
            <Switch
              checked={tag.enabled}
              onCheckedChange={(v) => onChange({ enabled: v })}
            />
          </div>
          <Button variant="ghost" size="icon" onClick={onRemove}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {tag.type === "pixel-id" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <Label className="mb-1 block">Πάροχος</Label>
            <Select
              value={tag.provider ?? "other"}
              onValueChange={(v) => {
                const provider = v as TrackingTag["provider"];
                onChange({ provider, category: defaultCategoryFor(provider) });
              }}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="facebook-pixel">Facebook Pixel</SelectItem>
                <SelectItem value="google-analytics">Google Analytics (GA4)</SelectItem>
                <SelectItem value="google-tag-manager">Google Tag Manager</SelectItem>
                <SelectItem value="other">Άλλο</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="mb-1 block">Pixel / Measurement ID</Label>
            <Input
              value={tag.pixelId ?? ""}
              onChange={(e) => onChange({ pixelId: e.target.value })}
              placeholder="π.χ. G-XXXXXXX / GTM-XXXX / 1234567890"
            />
          </div>
        </div>
      ) : (
        <div>
          <Label className="mb-1 block">Κύριο Σώμα Script</Label>
          <Textarea
            value={tag.scriptBody ?? ""}
            onChange={(e) => onChange({ scriptBody: e.target.value })}
            placeholder="<script>...</script> ή σκέτο JS"
            className="font-mono text-xs min-h-[140px]"
          />
        </div>
      )}

      <div>
        <Label className="mb-1 block">Σώμα NoScript (προαιρετικό)</Label>
        <Textarea
          value={tag.noscriptBody ?? ""}
          onChange={(e) => onChange({ noscriptBody: e.target.value })}
          placeholder='<img height="1" width="1" ... />'
          className="font-mono text-xs min-h-[80px]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <Label className="mb-1 block">Στρατηγική Φόρτωσης</Label>
          <Select
            value={tag.strategy}
            onValueChange={(v) =>
              onChange({ strategy: v as TrackingTag["strategy"] })
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {TRACKING_TAG_STRATEGIES.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="mb-1 block">Κατηγορία Cookie / Consent</Label>
          <Select
            value={tag.category}
            onValueChange={(v) =>
              onChange({ category: v as TrackingTag["category"] })
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {TRACKING_TAG_CATEGORIES.map((c) => (
                <SelectItem key={c} value={c}>
                  {CATEGORY_LABEL[c]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
