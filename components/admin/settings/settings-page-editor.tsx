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
  };
}

export function SettingsPageEditor({ initial }: { initial: SiteSettings }) {
  const [tags, setTags] = React.useState<TrackingTag[]>(initial.trackingTags);
  const [saving, setSaving] = React.useState(false);

  function update(id: string, patch: Partial<TrackingTag>) {
    setTags((prev) => prev.map((t) => (t.id === id ? { ...t, ...patch } : t)));
  }

  function remove(id: string) {
    setTags((prev) => prev.filter((t) => t.id !== id));
  }

  async function save() {
    setSaving(true);
    const res = await updateSiteSettingsAction({ trackingTags: tags });
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

      <Tabs defaultValue="tracking" className="w-full">
        <TabsList>
          <TabsTrigger value="tracking">Tracking Tags</TabsTrigger>
        </TabsList>

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
              onValueChange={(v) =>
                onChange({ provider: v as TrackingTag["provider"] })
              }
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
      </div>
    </div>
  );
}
