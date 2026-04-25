"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MultiSelectFilter } from "@/components/newsletter/multi-select-filter";
import { CustomerMultiSelect, type CustomerOption } from "@/components/newsletter/customer-multi-select";
import {
  createNewsletterCampaign,
  updateNewsletterCampaign,
  buildCampaignRecipients,
  sendNewsletterCampaign,
  sendNewsletterTestEmail,
  getNewsletterCampaigns,
  getNewsletterCampaign,
  getNewsletterCustomersByIds,
  type NewsletterFilters,
  type EmailFieldKey,
  type RegionOption,
  type CityOption,
  type LegalOption,
  type KadOption,
  type TrdpOption,
  type TrdBusinessOption,
} from "@/app/lib/actions/newsletter";
import { Checkbox } from "@/components/ui/checkbox";
import { PlusIcon, SendIcon, UsersIcon, Loader2Icon, PencilIcon, MailIcon } from "lucide-react";
import { toast } from "sonner";

type Template = { id: string; name: string };
type Campaign = {
  id: string;
  name: string;
  subject: string;
  status: string;
  sentAt: Date | null;
  filters?: unknown;
  templateId: string | null;
  _count: { recipients: number };
  template: { name: string } | null;
  companyCount?: number;
};

type FilterOptions = {
  regions: RegionOption[];
  nomoi: RegionOption[];
  dimoi: RegionOption[];
  cities: CityOption[];
  legalStatuses: LegalOption[];
  kadCodes: KadOption[];
  trdpGroups: TrdpOption[];
  trdBusinesses: TrdBusinessOption[];
};

export function NewsletterCampaignsClient({
  initialCampaigns,
  filterOptions,
  templates,
}: {
  initialCampaigns: Campaign[];
  filterOptions: FilterOptions;
  templates: Template[];
}) {
  const [campaigns, setCampaigns] = React.useState<Campaign[]>(initialCampaigns);
  const [open, setOpen] = React.useState(false);
  const [editingId, setEditingId] = React.useState<string | null>(null);
  const [name, setName] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [templateId, setTemplateId] = React.useState<string>("");
  const [filters, setFilters] = React.useState<NewsletterFilters>({});
  const [selectedCustomers, setSelectedCustomers] = React.useState<CustomerOption[]>([]);
  const [saving, setSaving] = React.useState(false);
  const [building, setBuilding] = React.useState<string | null>(null);
  const [sending, setSending] = React.useState<string | null>(null);
  const [testEmail, setTestEmail] = React.useState("");
  const [testSending, setTestSending] = React.useState(false);
  const [campaignDetail, setCampaignDetail] = React.useState<{
    id: string;
    recipients: { status: string }[];
  } | null>(null);

  const updateFilter = <K extends keyof NewsletterFilters>(key: K, value: NewsletterFilters[K]) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const openCreate = () => {
    setEditingId(null);
    setName("");
    setSubject("");
    setTemplateId("");
    setFilters({});
    setSelectedCustomers([]);
    setTestEmail("");
    setOpen(true);
  };

  const openEdit = async (c: Campaign) => {
    const f = (c.filters as NewsletterFilters | null) ?? {};
    setEditingId(c.id);
    setName(c.name);
    setSubject(c.subject);
    setTemplateId(c.templateId ?? "");
    setFilters(f);
    setTestEmail("");
    const ids = f.manualTrdrIds ?? [];
    if (ids.length > 0) {
      const list = await getNewsletterCustomersByIds(ids);
      setSelectedCustomers(list);
    } else {
      setSelectedCustomers([]);
    }
    setOpen(true);
  };

  const handleTestCampaign = async () => {
    const email = testEmail.trim();
    if (!email) {
      toast.error("Enter an email address for the preview");
      return;
    }
    setTestSending(true);
    try {
      const result = await sendNewsletterTestEmail({
        templateId: templateId || null,
        subject: subject.trim() || "Newsletter preview",
        to: email,
      });
      if (result.success) {
        toast.success(`Test email sent to ${email}`);
      } else {
        toast.error(result.error ?? "Failed to send test");
      }
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Failed to send test");
    } finally {
      setTestSending(false);
    }
  };

  const handleSave = async () => {
    const trimmedName = name.trim();
    if (!trimmedName) {
      toast.error("Campaign name is required");
      return;
    }
    if (!subject.trim()) {
      toast.error("Subject is required");
      return;
    }
    const filtersToSave: NewsletterFilters = {
      ...filters,
      manualTrdrIds: selectedCustomers.map((c) => c.id),
    };
    setSaving(true);
    try {
      if (editingId) {
        await updateNewsletterCampaign(editingId, {
          name: trimmedName,
          subject: subject.trim(),
          templateId: templateId || null,
          filters: filtersToSave,
        });
        const list = await getNewsletterCampaigns();
        setCampaigns(list as Campaign[]);
        toast.success("Campaign updated");
      } else {
        await createNewsletterCampaign({
          name: trimmedName,
          subject: subject.trim(),
          templateId: templateId || null,
          filters: filtersToSave,
        });
        const list = await getNewsletterCampaigns();
        setCampaigns(list as Campaign[]);
        toast.success("Campaign created");
      }
      setOpen(false);
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Failed to save");
    } finally {
      setSaving(false);
    }
  };

  const handleBuildRecipients = async (campaignId: string) => {
    setBuilding(campaignId);
    try {
      const { count, error } = await buildCampaignRecipients(campaignId);
      if (error) {
        toast.error(error);
        return;
      }
      toast.success(`Recipients built: ${count} contact(s)`);
      const list = await getNewsletterCampaigns();
      setCampaigns(list as Campaign[]);
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Build failed");
    } finally {
      setBuilding(null);
    }
  };

  const handleSend = async (campaignId: string) => {
    if (!confirm("Send this campaign now? Emails will be sent via Mailgun.")) return;
    setSending(campaignId);
    try {
      const result = await sendNewsletterCampaign(campaignId);
      if (result.errors?.length) {
        result.errors.forEach((err) => toast.error(err));
      }
      toast.success(`Sent: ${result.sent}, Failed: ${result.failed}`);
      const list = await getNewsletterCampaigns();
      setCampaigns(list as Campaign[]);
      if (campaignDetail?.id === campaignId) {
        const detail = await getNewsletterCampaign(campaignId);
        if (detail?.recipients) setCampaignDetail({ id: campaignId, recipients: detail.recipients });
      }
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Send failed");
    } finally {
      setSending(null);
    }
  };

  const openStats = async (c: Campaign) => {
    const detail = await getNewsletterCampaign(c.id);
    if (detail?.recipients) {
      setCampaignDetail({ id: c.id, recipients: detail.recipients });
    } else {
      setCampaignDetail(null);
    }
  };

  const regionOptions = filterOptions.regions.map((r) => ({ value: r.id, label: r.path || r.nameEL }));
  const nomosOptions = filterOptions.nomoi.map((r) => ({ value: r.id, label: r.path || r.nameEL }));
  const dimosOptions = filterOptions.dimoi.map((r) => ({ value: r.id, label: r.path || r.nameEL }));
  const cityOptions = filterOptions.cities.map((c) => ({ value: c.value, label: c.value }));
  const legalOptions = filterOptions.legalStatuses.map((l) => ({ value: l.value, label: l.value }));
  const kadOptions = filterOptions.kadCodes.map((k) => ({ value: k.value, label: k.value }));
  const trdpOptions = filterOptions.trdpGroups.map((t) => ({ value: String(t.code), label: t.name ?? `Code ${t.code}` }));
  const trdbOptions = filterOptions.trdBusinesses.map((t) => ({ value: String(t.code), label: t.name ?? `Code ${t.code}` }));

  return (
    <div className="space-y-6">
      <Button onClick={openCreate} className="gap-2">
        <PlusIcon className="h-4 w-4" />
        New campaign
      </Button>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {campaigns.map((c) => (
          <Card key={c.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base">{c.name}</CardTitle>
              <Badge variant={c.status === "sent" ? "default" : c.status === "failed" ? "destructive" : "secondary"}>
                {c.status}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-xs text-muted-foreground truncate" title={c.subject}>
                {c.subject}
              </p>
              <p className="text-xs">
                Template: {c.template?.name ?? "—"} · Recipients: {c._count?.recipients ?? 0}
                {(c.companyCount ?? 0) > 0 && ` · Companies: ${c.companyCount}`}
              </p>
              {c.sentAt && (
                <p className="text-xs text-muted-foreground">
                  Sent {new Date(c.sentAt).toLocaleString()}
                </p>
              )}
              <div className="flex flex-wrap gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleBuildRecipients(c.id)}
                  disabled={building === c.id || c.status === "sending"}
                >
                  {building === c.id ? <Loader2Icon className="h-4 w-4 animate-spin" /> : <UsersIcon className="h-4 w-4" />}
                  Build list
                </Button>
                <Button
                  size="sm"
                  onClick={() => handleSend(c.id)}
                  disabled={sending === c.id || c.status === "sending" || (c._count?.recipients ?? 0) === 0}
                >
                  {sending === c.id ? <Loader2Icon className="h-4 w-4 animate-spin" /> : <SendIcon className="h-4 w-4" />}
                  Send
                </Button>
                <Button size="sm" variant="ghost" onClick={() => openStats(c)}>
                  Stats
                </Button>
                <Button size="sm" variant="ghost" onClick={() => openEdit(c)} title="Edit campaign">
                  <PencilIcon className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {campaignDetail && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Campaign statistics</CardTitle>
            <Button variant="ghost" size="sm" onClick={() => setCampaignDetail(null)}>Close</Button>
          </CardHeader>
          <CardContent>
            {(() => {
              const recs = campaignDetail.recipients;
              const pending = recs.filter((r) => r.status === "pending").length;
              const sent = recs.filter((r) => r.status === "sent").length;
              const failed = recs.filter((r) => r.status === "failed").length;
              const opened = recs.filter((r) => r.status === "opened").length;
              const clicked = recs.filter((r) => r.status === "clicked").length;
              return (
                <div className="grid gap-2 text-sm sm:grid-cols-2 md:grid-cols-5">
                  <div>Total: <strong>{recs.length}</strong></div>
                  <div>Pending: <strong>{pending}</strong></div>
                  <div>Sent: <strong>{sent}</strong></div>
                  <div>Failed: <strong>{failed}</strong></div>
                  <div>Opened / Clicked: <strong>{opened} / {clicked}</strong></div>
                </div>
              );
            })()}
          </CardContent>
        </Card>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.12),0_2px_6px_rgba(0,0,0,0.08)]">
          <DialogHeader className="px-5 py-4 border-b border-[#EDEBE9] bg-white">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-[#EFF6FC] border border-[#C7E0F4] flex items-center justify-center shrink-0">
                <MailIcon className="w-4 h-4 text-[#0078D4]" />
              </div>
              <div>
                <DialogTitle className="text-sm font-bold text-[#201F1E]">
                  {editingId ? "Edit campaign" : "New campaign"}
                </DialogTitle>
                <p className="text-[11px] text-[#A19F9D]">Configure recipients and template</p>
              </div>
            </div>
          </DialogHeader>
          <div className="bg-[#F3F2F1] max-h-[75vh] overflow-y-auto px-5 py-4 space-y-3">
            {/* Basic details */}
            <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Campaign Details</p>
              <div className="grid gap-3">
                <div className="space-y-1">
                  <Label className="text-[11px] font-semibold text-[#605E5C]">Campaign name</Label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Q1 2025 Newsletter"
                    className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <Label className="text-[11px] font-semibold text-[#605E5C]">Email subject</Label>
                  <Input
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Subject line"
                    className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <Label className="text-[11px] font-semibold text-[#605E5C]">Template</Label>
                  <Select value={templateId} onValueChange={setTemplateId}>
                    <SelectTrigger className="h-9 rounded border-[#C8C6C4] focus:ring-[#0078D4] text-sm">
                      <SelectValue placeholder="Select template" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[240px] overflow-y-scroll">
                      {templates.map((t) => (
                        <SelectItem key={t.id} value={t.id}>{t.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Manual customers */}
            <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Manual Recipients</p>
              <CustomerMultiSelect
                selected={selectedCustomers}
                onChange={(next) => {
                  setSelectedCustomers(next);
                  setFilters((prev) => ({ ...prev, manualTrdrIds: next.map((c) => c.id) }));
                }}
                placeholder="Search and add customers…"
              />
            </div>

            {/* Test send */}
            <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Test Email</p>
              <div className="flex flex-wrap items-end gap-2">
                <div className="min-w-[200px] flex-1 space-y-1">
                  <Label className="text-[11px] font-semibold text-[#605E5C]">Send preview to</Label>
                  <Input
                    type="email"
                    value={testEmail}
                    onChange={(e) => setTestEmail(e.target.value)}
                    placeholder="email@example.com"
                    className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm"
                  />
                </div>
                <Button
                  type="button"
                  size="sm"
                  onClick={handleTestCampaign}
                  disabled={testSending || !testEmail.trim()}
                  className="h-9 px-4 text-[12px] font-semibold bg-[#0078D4] hover:bg-[#106EBE] text-white rounded gap-1.5"
                >
                  {testSending ? <Loader2Icon className="h-3.5 w-3.5 animate-spin" /> : <MailIcon className="h-3.5 w-3.5" />}
                  Send test
                </Button>
              </div>
            </div>

            {/* Email fields */}
            <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Email Fields</p>
              <p className="text-[11px] text-[#A19F9D]">
                Choose which customer email field(s) to send to. Multiple addresses in one field (separated by ;) are all used.
              </p>
              <div className="flex flex-wrap gap-4">
                {(["EMAIL", "EMAILACC", "CCCEMAILMAR"] as EmailFieldKey[]).map((field) => {
                  const selected = (filters.emailFields?.length ? filters.emailFields : ["EMAIL", "EMAILACC", "CCCEMAILMAR"]).includes(field);
                  return (
                    <label key={field} className="flex items-center gap-2 cursor-pointer text-sm font-semibold text-[#605E5C]">
                      <Checkbox
                        checked={selected}
                        onCheckedChange={(checked) => {
                          const current = filters.emailFields?.length ? [...filters.emailFields] : (["EMAIL", "EMAILACC", "CCCEMAILMAR"] as EmailFieldKey[]);
                          const next = checked ? (current.includes(field) ? current : [...current, field]) : current.filter((f) => f !== field);
                          updateFilter("emailFields", next.length === 3 ? undefined : next);
                        }}
                      />
                      <span>{field}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Recipient filters */}
            <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Recipient Filters</p>
              <p className="text-[11px] text-[#A19F9D]">
                Select regions, cities, legal status, KAD, TRDPGROUP, TRDBUSINESS to build the list. Then use &quot;Build list&quot; on the campaign card.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <MultiSelectFilter
                  label="Region (Περιφέρεια)"
                  options={regionOptions}
                  value={filters.regionIds ?? []}
                  onChange={(v) => updateFilter("regionIds", v)}
                />
                <MultiSelectFilter
                  label="Regional unit (Νομός)"
                  options={nomosOptions}
                  value={filters.nomosIds ?? []}
                  onChange={(v) => updateFilter("nomosIds", v)}
                />
                <MultiSelectFilter
                  label="Municipality (Δήμος)"
                  options={dimosOptions}
                  value={filters.dimosIds ?? []}
                  onChange={(v) => updateFilter("dimosIds", v)}
                />
                <MultiSelectFilter
                  label="City"
                  options={cityOptions}
                  value={filters.cities ?? []}
                  onChange={(v) => updateFilter("cities", v)}
                />
                <MultiSelectFilter
                  label="Legal status"
                  options={legalOptions}
                  value={filters.legalStatuses ?? []}
                  onChange={(v) => updateFilter("legalStatuses", v)}
                />
                <MultiSelectFilter
                  label="KAD"
                  options={kadOptions}
                  value={filters.kadCodes ?? []}
                  onChange={(v) => updateFilter("kadCodes", v)}
                />
                <MultiSelectFilter
                  label="TRDPGROUP"
                  options={trdpOptions}
                  value={filters.trdpGroupIds ?? []}
                  onChange={(v) => updateFilter("trdpGroupIds", v)}
                />
                <MultiSelectFilter
                  label="TRDBUSINESS"
                  options={trdbOptions}
                  value={filters.trdBusinessIds ?? []}
                  onChange={(v) => updateFilter("trdBusinessIds", v)}
                />
              </div>
            </div>
          </div>
          <div className="px-5 py-3 border-t border-[#EDEBE9] bg-white flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setOpen(false)} className="h-8 px-4 text-[12px] font-semibold text-[#605E5C] hover:bg-[#EDEBE9] rounded">Cancel</Button>
            <Button onClick={handleSave} disabled={saving} className="h-8 px-5 text-[12px] font-semibold bg-[#0078D4] hover:bg-[#106EBE] text-white rounded shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,120,212,0.25)]">
              {saving ? "Saving…" : editingId ? "Update" : "Create"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
