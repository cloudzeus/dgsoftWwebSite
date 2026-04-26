"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  Loader2Icon, MailIcon, Wand2Icon, CheckIcon, UploadIcon, XIcon,
  ChevronDownIcon, ChevronUpIcon, UsersIcon, PencilIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  createNewsletterCampaign,
  buildCampaignRecipients,
  sendNewsletterCampaign,
  sendNewsletterTestEmail,
  getNewsletterFilterOptions,
  estimateNewsletterRecipients,
  type NewsletterFilters,
  type RegionOption,
  type CityOption,
  type LegalOption,
  type KadOption,
  type TrdpOption,
  type TrdBusinessOption,
  type NewsletterWizardTemplate,
  type NewsletterWizardBaseTemplate,
  type NewsletterWizardBaseSettings,
  type NewsletterWizardEuProgram,
} from "@/app/lib/actions/newsletter";
import { CustomerMultiSelect, type CustomerOption } from "@/components/newsletter/customer-multi-select";
import { MultiSelectFilter } from "@/components/newsletter/multi-select-filter";
import { VisualDesigner } from "@/components/newsletter/visual-designer";
import type { NewsletterContent } from "@/lib/newsletter-blocks";
import { createBlock, renderBlocksToHtml } from "@/lib/newsletter-blocks";
import { NewsletterMediaPickerDialog } from "@/components/newsletter/newsletter-media-picker-dialog";
import { applyBaseTemplateFields, mergeBaseTemplateWithDynamicContent } from "@/lib/newsletter-dynamic-placeholder";
import { ImagesIcon } from "lucide-react";

// ——— Types ———

const BASE_FIELD_META: { key: string; label: string; media: boolean }[] = [
  { key: "companyName",      label: "Όνομα εταιρείας",              media: false },
  { key: "logoUrl",          label: "URL Λογότυπου",                 media: true  },
  { key: "facebookUrl",      label: "URL Facebook",                  media: true  },
  { key: "instagramUrl",     label: "URL Instagram",                 media: true  },
  { key: "linkedinUrl",      label: "URL LinkedIn",                  media: true  },
  { key: "xUrl",             label: "URL X (Twitter)",               media: true  },
  { key: "tagline",          label: "Υπότιτλος",                     media: false },
  { key: "addressLine",      label: "Διεύθυνση",                     media: false },
  { key: "contactEmail",     label: "Email επικοινωνίας",            media: false },
  { key: "privacyPolicyUrl", label: "URL Πολιτικής Απορρήτου",       media: true  },
  { key: "termsUrl",         label: "URL Όρων Χρήσης",               media: true  },
  { key: "unsubscribeUrl",   label: "URL Κατάργησης Εγγραφής",       media: true  },
];

type WizardState = {
  name: string;
  subject: string;
  templateId: string | null;
  inlineTemplate: NewsletterContent | null;
  baseTemplateId: string | null;
  baseTemplatePatches: Record<string, string>;
  recipientMode: "filters" | "excel" | "manual";
  filters: NewsletterFilters;
  excelEmails: string[];
  excelFileName: string;
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

const TOTAL_STEPS = 5;
const STEP_LABELS = ["Στοιχεία", "Περιεχόμενο", "Πρότυπο Βάσης", "Παραλήπτες", "Αποστολή"];

// ——— Step Indicator ———

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center gap-0">
      {STEP_LABELS.map((label, i) => {
        const step = i + 1;
        const done = step < current;
        const active = step === current;
        return (
          <React.Fragment key={step}>
            <div className="flex flex-col items-center gap-1">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold border-2 transition-colors ${
                  done
                    ? "bg-[#0078D4] border-[#0078D4] text-white"
                    : active
                    ? "bg-white border-[#0078D4] text-[#0078D4]"
                    : "bg-white border-[#C8C6C4] text-[#A19F9D]"
                }`}
              >
                {done ? <CheckIcon className="w-3.5 h-3.5" /> : step}
              </div>
              <span
                className={`text-[10px] font-semibold whitespace-nowrap ${
                  active ? "text-[#0078D4]" : done ? "text-[#0078D4]" : "text-[#A19F9D]"
                }`}
              >
                {label}
              </span>
            </div>
            {i < STEP_LABELS.length - 1 && (
              <div
                className={`h-[2px] flex-1 mx-1 mb-4 ${step < current ? "bg-[#0078D4]" : "bg-[#EDEBE9]"}`}
                style={{ minWidth: 16 }}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

// ——— Step 1: Campaign Details ———

function Step1({ state, onChange }: { state: WizardState; onChange: (p: Partial<WizardState>) => void }) {
  return (
    <div className="bg-white border border-[#EDEBE9] rounded-lg p-5 space-y-4">
      <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D]">Στοιχεία Εκστρατείας</p>
      <div className="space-y-1">
        <Label className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">
          Όνομα εκστρατείας <span className="text-red-500">*</span>
        </Label>
        <Input
          value={state.name}
          onChange={(e) => onChange({ name: e.target.value })}
          placeholder="π.χ. Ενημερωτικό Δελτίο Q1 2025"
          className="h-9 text-sm border-[#C8C6C4] focus-visible:ring-[#0078D4]"
        />
      </div>
      <div className="space-y-1">
        <Label className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">
          Θέμα email <span className="text-red-500">*</span>
        </Label>
        <Input
          value={state.subject}
          onChange={(e) => onChange({ subject: e.target.value })}
          placeholder="Γραμμή θέματος"
          className="h-9 text-sm border-[#C8C6C4] focus-visible:ring-[#0078D4]"
        />
      </div>
    </div>
  );
}

// ——— Step 2: Template (with inline designer) ———

function Step2({
  templates,
  state,
  onChange,
}: {
  templates: NewsletterWizardTemplate[];
  state: WizardState;
  onChange: (p: Partial<WizardState>) => void;
}) {
  const [designMode, setDesignMode] = React.useState(false);

  const emptyContent: NewsletterContent = React.useMemo(
    () => ({ blocks: [createBlock("paragraph")], bodyOptions: { backgroundColor: "#ffffff" } }),
    []
  );

  const handlePickExisting = (id: string | null) => {
    onChange({ templateId: id, inlineTemplate: null });
    setDesignMode(false);
  };

  const handleOpenDesigner = () => {
    if (!state.inlineTemplate) {
      onChange({ inlineTemplate: emptyContent, templateId: null });
    }
    setDesignMode(true);
  };

  if (designMode) {
    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Σχεδιασμός περιεχομένου</p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setDesignMode(false)}
            className="h-8 text-[12px] border-[#C8C6C4] text-[#605E5C] hover:bg-[#EDEBE9]"
          >
            Επιστροφή στη λίστα
          </Button>
        </div>
        <div className="bg-white border border-[#EDEBE9] rounded-lg overflow-hidden">
          <VisualDesigner
            value={state.inlineTemplate ?? emptyContent}
            onChange={(content) => onChange({ inlineTemplate: content, templateId: null })}
          />
        </div>
        <div className="flex justify-end">
          <Button
            size="sm"
            onClick={() => setDesignMode(false)}
            className="h-8 text-[12px] bg-[#0078D4] hover:bg-[#106EBE] text-white"
          >
            <CheckIcon className="w-3.5 h-3.5 mr-1.5" />
            Αποθήκευση σχεδιασμού
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-[11px] font-semibold text-[#605E5C]">
        Επιλέξτε πρότυπο περιεχομένου ή σχεδιάστε νέο. Η επιλογή είναι προαιρετική.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {/* No template */}
        <div
          onClick={() => handlePickExisting(null)}
          className={`cursor-pointer border-2 rounded-lg p-4 flex items-center gap-3 transition-colors ${
            state.templateId === null && !state.inlineTemplate
              ? "border-[#0078D4] bg-[#EFF6FC]"
              : "border-[#EDEBE9] bg-white hover:border-[#C8C6C4]"
          }`}
        >
          <div
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
              state.templateId === null && !state.inlineTemplate
                ? "border-[#0078D4] bg-[#0078D4]"
                : "border-[#C8C6C4]"
            }`}
          >
            {state.templateId === null && !state.inlineTemplate && <CheckIcon className="w-3 h-3 text-white" />}
          </div>
          <div>
            <p className="text-sm font-semibold text-[#201F1E]">Χωρίς πρότυπο</p>
            <p className="text-[11px] text-[#A19F9D]">Αποστολή χωρίς HTML πρότυπο</p>
          </div>
        </div>

        {/* Design new */}
        <div
          onClick={handleOpenDesigner}
          className={`cursor-pointer border-2 rounded-lg p-4 flex items-center gap-3 transition-colors ${
            state.inlineTemplate
              ? "border-[#0078D4] bg-[#EFF6FC]"
              : "border-dashed border-[#C8C6C4] bg-white hover:border-[#0078D4] hover:bg-[#F3F2F1]"
          }`}
        >
          <div
            className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 ${
              state.inlineTemplate ? "bg-[#0078D4]" : "bg-[#F3F2F1] border border-[#EDEBE9]"
            }`}
          >
            <PencilIcon className={`w-3.5 h-3.5 ${state.inlineTemplate ? "text-white" : "text-[#A19F9D]"}`} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-[#201F1E]">
              {state.inlineTemplate ? "Επεξεργασία σχεδίου" : "Σχεδιάστε νέο"}
            </p>
            <p className="text-[11px] text-[#A19F9D]">
              {state.inlineTemplate
                ? `${state.inlineTemplate.blocks?.length ?? 0} block(s) δημιουργήθηκαν`
                : "Ανοίξτε τον visual designer"}
            </p>
          </div>
          {state.inlineTemplate && <CheckIcon className="w-4 h-4 text-[#0078D4] shrink-0" />}
        </div>

        {/* Existing templates */}
        {templates.map((t) => {
          const selected = state.templateId === t.id;
          return (
            <div
              key={t.id}
              onClick={() => handlePickExisting(t.id)}
              className={`cursor-pointer border-2 rounded-lg p-4 relative transition-colors ${
                selected ? "border-[#0078D4] bg-[#EFF6FC]" : "border-[#EDEBE9] bg-white hover:border-[#C8C6C4]"
              }`}
            >
              {selected && (
                <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#0078D4] flex items-center justify-center">
                  <CheckIcon className="w-3 h-3 text-white" />
                </div>
              )}
              <p className="text-sm font-semibold text-[#201F1E] pr-6">{t.name}</p>
              {t.description && (
                <p className="text-[11px] text-[#605E5C] mt-1 line-clamp-2">{t.description}</p>
              )}
              <p className="text-[10px] text-[#A19F9D] mt-2">
                {new Date(t.updatedAt).toLocaleDateString("el-GR")}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ——— Patch Panel (field overrides with media picker) ———

function PatchPanel({
  patches,
  onChange,
}: {
  patches: Record<string, string>;
  onChange: (patches: Record<string, string>) => void;
}) {
  const [mediaTarget, setMediaTarget] = React.useState<string | null>(null);

  const update = (key: string, value: string) => onChange({ ...patches, [key]: value });

  return (
    <div className="border-t border-[#EDEBE9] p-4 space-y-3 bg-[#F3F2F1]">
      <p className="text-[11px] text-[#A19F9D]">
        Τα πεδία που συμπληρώνετε εδώ αντικαθιστούν τις προεπιλεγμένες τιμές μόνο για αυτή την εκστρατεία.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {BASE_FIELD_META.map(({ key, label, media }) => (
          <div key={key} className="space-y-1">
            <Label className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">
              {label}
            </Label>
            <div className="flex gap-1.5">
              <Input
                value={patches[key] ?? ""}
                onChange={(e) => update(key, e.target.value)}
                placeholder="(προεπιλεγμένη τιμή)"
                className="h-8 text-sm border-[#C8C6C4] bg-white focus-visible:ring-[#0078D4]"
              />
              {media && (
                <button
                  type="button"
                  onClick={() => setMediaTarget(key)}
                  title="Επιλογή από γκαλερί"
                  className="h-8 w-8 shrink-0 flex items-center justify-center border border-[#C8C6C4] rounded bg-white hover:bg-[#EDEBE9] text-[#605E5C] transition-colors"
                >
                  <ImagesIcon className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      {Object.keys(patches).length > 0 && (
        <button
          type="button"
          onClick={() => onChange({})}
          className="text-[11px] text-red-500 hover:text-red-700"
        >
          Επαναφορά όλων
        </button>
      )}

      <NewsletterMediaPickerDialog
        open={mediaTarget !== null}
        onOpenChange={(o) => !o && setMediaTarget(null)}
        title={mediaTarget ? `Επιλογή για: ${BASE_FIELD_META.find((f) => f.key === mediaTarget)?.label ?? mediaTarget}` : undefined}
        onSelect={(url) => {
          if (mediaTarget) update(mediaTarget, url);
          setMediaTarget(null);
        }}
      />
    </div>
  );
}

// ——— Step 3: Base Template (with on-the-fly field overrides) ———

function Step3({
  baseTemplates,
  state,
  onChange,
}: {
  baseTemplates: NewsletterWizardBaseTemplate[];
  state: WizardState;
  onChange: (p: Partial<WizardState>) => void;
}) {
  const [patchOpen, setPatchOpen] = React.useState(false);
  const selectedBase = baseTemplates.find((bt) => bt.id === state.baseTemplateId) ?? null;

  const updatePatch = (key: string, value: string) => {
    onChange({ baseTemplatePatches: { ...state.baseTemplatePatches, [key]: value } });
  };

  return (
    <div className="space-y-4">
      <p className="text-[11px] font-semibold text-[#605E5C]">
        Επιλέξτε πρότυπο βάσης (HTML wrapper). Μετά την επιλογή, μπορείτε να τροποποιήσετε τα πεδία του.
      </p>

      {/* No base template */}
      <div
        onClick={() => onChange({ baseTemplateId: null, baseTemplatePatches: {} })}
        className={`cursor-pointer border-2 rounded-lg p-4 flex items-center gap-3 transition-colors ${
          state.baseTemplateId === null
            ? "border-[#0078D4] bg-[#EFF6FC]"
            : "border-[#EDEBE9] bg-white hover:border-[#C8C6C4]"
        }`}
      >
        <div
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
            state.baseTemplateId === null ? "border-[#0078D4] bg-[#0078D4]" : "border-[#C8C6C4]"
          }`}
        >
          {state.baseTemplateId === null && <CheckIcon className="w-3 h-3 text-white" />}
        </div>
        <div>
          <p className="text-sm font-semibold text-[#201F1E]">Χωρίς πρότυπο βάσης</p>
          <p className="text-[11px] text-[#A19F9D]">Χρήση μόνο του περιεχομένου template</p>
        </div>
      </div>

      {/* Base template grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {baseTemplates.map((bt) => {
          const selected = state.baseTemplateId === bt.id;
          return (
            <div
              key={bt.id}
              onClick={() => onChange({ baseTemplateId: bt.id })}
              className={`cursor-pointer border-2 rounded-lg overflow-hidden transition-colors ${
                selected ? "border-[#0078D4]" : "border-[#EDEBE9] hover:border-[#C8C6C4]"
              }`}
            >
              <div className={`p-3 ${selected ? "bg-[#EFF6FC]" : "bg-white"}`}>
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-semibold text-[#201F1E]">{bt.name}</p>
                  {selected && (
                    <div className="w-5 h-5 rounded-full bg-[#0078D4] flex items-center justify-center shrink-0">
                      <CheckIcon className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>
                {bt.description && (
                  <p className="text-[11px] text-[#605E5C] line-clamp-1">{bt.description}</p>
                )}
              </div>
              <div className="w-full overflow-hidden bg-[#F3F2F1]" style={{ height: 300 }}>
                <iframe
                  srcDoc={bt.htmlDocument ?? undefined}
                  title={`Preview: ${bt.name}`}
                  className="w-full h-full border-0"
                  style={{ pointerEvents: "none", transform: "scale(0.6)", transformOrigin: "top left", width: "167%", height: "167%" }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* On-the-fly field overrides for selected template */}
      {selectedBase && (
        <div className="bg-white border border-[#EDEBE9] rounded-lg overflow-hidden">
          <button
            type="button"
            onClick={() => setPatchOpen((o) => !o)}
            className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-[#F3F2F1] transition-colors"
          >
            <div className="flex items-center gap-2">
              <PencilIcon className="w-3.5 h-3.5 text-[#0078D4]" />
              <span className="text-sm font-semibold text-[#201F1E]">Προσαρμογή πεδίων: {selectedBase.name}</span>
              {Object.keys(state.baseTemplatePatches).length > 0 && (
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#0078D4] text-white">
                  {Object.keys(state.baseTemplatePatches).length} αλλαγές
                </span>
              )}
            </div>
            {patchOpen
              ? <ChevronUpIcon className="w-4 h-4 text-[#A19F9D] shrink-0" />
              : <ChevronDownIcon className="w-4 h-4 text-[#A19F9D] shrink-0" />}
          </button>

          {patchOpen && (
            <PatchPanel
              patches={state.baseTemplatePatches}
              onChange={(patches) => onChange({ baseTemplatePatches: patches })}
            />
          )}
        </div>
      )}
    </div>
  );
}

// ——— Step 4: Recipients ———

function Step4({
  state,
  onChange,
  filterOptions,
  euPrograms,
}: {
  state: WizardState;
  onChange: (p: Partial<WizardState>) => void;
  filterOptions: FilterOptions | null;
  euPrograms: NewsletterWizardEuProgram[];
}) {
  const [uploading, setUploading] = React.useState(false);
  const [uploadError, setUploadError] = React.useState<string | null>(null);
  const [isDragOver, setIsDragOver] = React.useState(false);
  const [selectedCustomers, setSelectedCustomers] = React.useState<CustomerOption[]>([]);
  const [selectedEuProgramId, setSelectedEuProgramId] = React.useState<string>("");
  const [estimating, setEstimating] = React.useState(false);
  const [estimatedCount, setEstimatedCount] = React.useState<number | null>(null);
  const fileRef = React.useRef<HTMLInputElement>(null);

  const updateFilter = <K extends keyof NewsletterFilters>(key: K, value: NewsletterFilters[K]) => {
    onChange({ filters: { ...state.filters, [key]: value } });
    setEstimatedCount(null);
  };

  const handleFileUpload = async (file: File) => {
    setUploading(true);
    setUploadError(null);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/admin/newsletter/excel-recipients", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) { setUploadError(data.error ?? "Αποτυχία επεξεργασίας αρχείου"); return; }
      onChange({
        excelEmails: data.emails as string[],
        excelFileName: file.name,
        filters: { ...state.filters, directEmails: data.emails as string[] },
      });
      setEstimatedCount(null);
      if (data.errors?.length) setUploadError((data.errors as string[]).join(", "));
    } catch (e: unknown) {
      setUploadError(e instanceof Error ? e.message : "Αποτυχία");
    } finally {
      setUploading(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileUpload(file);
  };

  const handleEstimate = async () => {
    setEstimating(true);
    try {
      const { count } = await estimateNewsletterRecipients({
        ...state.filters,
        directEmails: state.excelEmails.length > 0 ? state.excelEmails : state.filters.directEmails,
      });
      setEstimatedCount(count);
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Αποτυχία εκτίμησης");
    } finally {
      setEstimating(false);
    }
  };

  // Filter KAD options by selected EU program
  const allKadOptions = filterOptions?.kadCodes.map((k) => ({ value: k.value, label: k.value })) ?? [];
  const kadOptions = React.useMemo(() => {
    if (!selectedEuProgramId) return allKadOptions;
    const prog = euPrograms.find((p) => p.id === selectedEuProgramId);
    if (!prog) return allKadOptions;
    const set = new Set(prog.kadCodes);
    return allKadOptions.filter((o) => set.has(o.value));
  }, [selectedEuProgramId, allKadOptions, euPrograms]);

  const regionOptions = filterOptions?.regions.map((r) => ({ value: r.id, label: r.path || r.nameEL })) ?? [];
  const nomosOptions = filterOptions?.nomoi.map((r) => ({ value: r.id, label: r.path || r.nameEL })) ?? [];
  const dimosOptions = filterOptions?.dimoi.map((r) => ({ value: r.id, label: r.path || r.nameEL })) ?? [];
  const cityOptions = filterOptions?.cities.map((c) => ({ value: c.value, label: c.value })) ?? [];
  const legalOptions = filterOptions?.legalStatuses.map((l) => ({ value: l.value, label: l.value })) ?? [];
  const trdpOptions = filterOptions?.trdpGroups.map((t) => ({ value: String(t.code), label: t.name ?? `Code ${t.code}` })) ?? [];
  const trdbOptions = filterOptions?.trdBusinesses.map((t) => ({ value: String(t.code), label: t.name ?? `Code ${t.code}` })) ?? [];

  const tabs = [
    { id: "filters" as const, label: "Φίλτρα" },
    { id: "excel" as const, label: "Excel / CSV" },
    { id: "manual" as const, label: "Χειροκίνητη" },
  ];

  return (
    <div className="space-y-4">
      {/* Tabs */}
      <div className="flex border-b border-[#EDEBE9]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => { onChange({ recipientMode: tab.id }); setEstimatedCount(null); }}
            className={`px-4 py-2 text-sm font-semibold border-b-2 transition-colors ${
              state.recipientMode === tab.id
                ? "border-[#0078D4] text-[#0078D4]"
                : "border-transparent text-[#605E5C] hover:text-[#201F1E]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Filters tab */}
      {state.recipientMode === "filters" && (
        <div className="bg-white border border-[#EDEBE9] rounded-lg p-5 space-y-4">
          {filterOptions === null ? (
            <div className="flex items-center gap-2 text-[#605E5C] text-sm">
              <Loader2Icon className="w-4 h-4 animate-spin" />
              Φόρτωση φίλτρων…
            </div>
          ) : (
            <>
              {/* EU Program filter → narrows KAD list */}
              <div className="space-y-1">
                <Label className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">
                  Πρόγραμμα ΕΣΠΑ (φιλτράρει KAD)
                </Label>
                <select
                  value={selectedEuProgramId}
                  onChange={(e) => {
                    setSelectedEuProgramId(e.target.value);
                    // clear KAD selection when program changes
                    updateFilter("kadCodes", []);
                  }}
                  className="w-full h-9 text-sm rounded border border-[#C8C6C4] bg-white px-3 focus:outline-none focus:ring-2 focus:ring-[#0078D4] text-[#201F1E]"
                >
                  <option value="">— Όλα τα προγράμματα —</option>
                  {euPrograms.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.nameEL} ({p.kadCodes.length} KAD)
                    </option>
                  ))}
                </select>
                {selectedEuProgramId && (
                  <p className="text-[11px] text-[#0078D4]">
                    Εμφανίζονται {kadOptions.length} KAD κωδικοί για το επιλεγμένο πρόγραμμα
                  </p>
                )}
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <MultiSelectFilter label="Περιφέρεια" options={regionOptions} value={state.filters.regionIds ?? []} onChange={(v) => updateFilter("regionIds", v)} />
                <MultiSelectFilter label="Νομός / Περιφερειακή Ενότητα" options={nomosOptions} value={state.filters.nomosIds ?? []} onChange={(v) => updateFilter("nomosIds", v)} />
                <MultiSelectFilter label="Δήμος" options={dimosOptions} value={state.filters.dimosIds ?? []} onChange={(v) => updateFilter("dimosIds", v)} />
                <MultiSelectFilter label="Πόλη" options={cityOptions} value={state.filters.cities ?? []} onChange={(v) => updateFilter("cities", v)} />
                <MultiSelectFilter label="Νομική μορφή" options={legalOptions} value={state.filters.legalStatuses ?? []} onChange={(v) => updateFilter("legalStatuses", v)} />
                <MultiSelectFilter
                  label={selectedEuProgramId ? "KAD (φιλτραρισμένο)" : "KAD"}
                  options={kadOptions}
                  value={state.filters.kadCodes ?? []}
                  onChange={(v) => updateFilter("kadCodes", v)}
                />
                <MultiSelectFilter label="TRDPGROUP" options={trdpOptions} value={state.filters.trdpGroupIds ?? []} onChange={(v) => updateFilter("trdpGroupIds", v)} />
                <MultiSelectFilter label="TRDBUSINESS" options={trdbOptions} value={state.filters.trdBusinessIds ?? []} onChange={(v) => updateFilter("trdBusinessIds", v)} />
              </div>
            </>
          )}
        </div>
      )}

      {/* Excel tab */}
      {state.recipientMode === "excel" && (
        <div className="bg-white border border-[#EDEBE9] rounded-lg p-5 space-y-4">
          <div
            onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
            onDragLeave={() => setIsDragOver(false)}
            onDrop={handleDrop}
            onClick={() => fileRef.current?.click()}
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
              isDragOver ? "border-[#0078D4] bg-[#EFF6FC]" : "border-[#C8C6C4] hover:border-[#0078D4] hover:bg-[#F3F2F1]"
            }`}
          >
            <input
              ref={fileRef}
              type="file"
              accept=".xlsx,.xls,.csv"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleFileUpload(file);
                e.target.value = "";
              }}
            />
            {uploading ? (
              <div className="flex flex-col items-center gap-2">
                <Loader2Icon className="w-8 h-8 text-[#0078D4] animate-spin" />
                <p className="text-sm text-[#605E5C]">Επεξεργασία αρχείου…</p>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2">
                <UploadIcon className="w-8 h-8 text-[#A19F9D]" />
                <p className="text-sm font-semibold text-[#201F1E]">
                  {state.excelFileName || "Σύρτε & αποθέστε ή κάντε κλικ για επιλογή"}
                </p>
                <p className="text-[11px] text-[#A19F9D]">Υποστηρίζονται: .xlsx, .xls, .csv</p>
              </div>
            )}
          </div>
          {uploadError && <p className="text-sm text-red-500">{uploadError}</p>}
          {state.excelEmails.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">
                  {state.excelEmails.length} emails βρέθηκαν
                </p>
                <button
                  onClick={() => { onChange({ excelEmails: [], excelFileName: "", filters: { ...state.filters, directEmails: [] } }); setEstimatedCount(null); }}
                  className="text-[11px] text-red-500 hover:text-red-700 flex items-center gap-1"
                >
                  <XIcon className="w-3 h-3" /> Εκκαθάριση
                </button>
              </div>
              <div className="bg-[#F3F2F1] rounded p-3 text-[11px] text-[#605E5C] space-y-0.5 max-h-40 overflow-y-auto">
                {state.excelEmails.slice(0, 10).map((email, i) => <div key={i}>{email}</div>)}
                {state.excelEmails.length > 10 && (
                  <div className="text-[#A19F9D] pt-1">…και {state.excelEmails.length - 10} ακόμα</div>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Manual tab */}
      {state.recipientMode === "manual" && (
        <div className="bg-white border border-[#EDEBE9] rounded-lg p-5 space-y-3">
          <p className="text-[11px] text-[#A19F9D]">Αναζήτηση και επιλογή πελατών από τη βάση δεδομένων.</p>
          <CustomerMultiSelect
            selected={selectedCustomers}
            onChange={(next) => {
              setSelectedCustomers(next);
              onChange({ filters: { ...state.filters, manualTrdrIds: next.map((c) => c.id) } });
              setEstimatedCount(null);
            }}
            placeholder="Αναζήτηση και προσθήκη πελατών…"
          />
        </div>
      )}

      {/* Live recipient count estimator */}
      <div className="flex items-center gap-3 pt-1">
        <Button
          variant="outline"
          size="sm"
          onClick={handleEstimate}
          disabled={estimating}
          className="h-8 text-[12px] border-[#C8C6C4] text-[#605E5C] hover:bg-[#EDEBE9] gap-1.5"
        >
          {estimating
            ? <Loader2Icon className="w-3.5 h-3.5 animate-spin" />
            : <UsersIcon className="w-3.5 h-3.5" />}
          Εκτίμηση παραληπτών
        </Button>
        {estimatedCount !== null && (
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#EFF6FC] border border-[#C7E0F4] rounded text-sm font-bold text-[#0078D4]">
            <UsersIcon className="w-3.5 h-3.5" />
            {estimatedCount.toLocaleString("el-GR")} παραλήπτες
          </div>
        )}
      </div>
    </div>
  );
}

// ——— Step 5: Preview & Send ———

function Step5({
  state,
  templates,
  baseTemplates,
  onSend,
  sending,
}: {
  state: WizardState;
  templates: NewsletterWizardTemplate[];
  baseTemplates: NewsletterWizardBaseTemplate[];
  onSend: () => void;
  sending: boolean;
}) {
  const [testEmail, setTestEmail] = React.useState("");
  const [testSending, setTestSending] = React.useState(false);

  const selectedTemplate = templates.find((t) => t.id === state.templateId) ?? null;
  const selectedBase = baseTemplates.find((bt) => bt.id === state.baseTemplateId) ?? null;

  const handleTest = async () => {
    const email = testEmail.trim();
    if (!email) { toast.error("Εισάγετε διεύθυνση email"); return; }
    setTestSending(true);
    try {
      const result = await sendNewsletterTestEmail({
        templateId: state.templateId,
        subject: state.subject || "Newsletter preview",
        to: email,
      });
      if (result.success) toast.success(`Δοκιμαστικό email στάλθηκε στο ${email}`);
      else toast.error(result.error ?? "Αποτυχία");
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Αποτυχία");
    } finally {
      setTestSending(false);
    }
  };

  const recipientSummary = (() => {
    const parts: string[] = [];
    if (state.excelEmails.length > 0) parts.push(`${state.excelEmails.length} από Excel`);
    const manualCount = state.filters.manualTrdrIds?.length ?? 0;
    if (manualCount > 0) parts.push(`${manualCount} χειροκίνητοι`);
    const hasFilters = [
      state.filters.regionIds, state.filters.nomosIds, state.filters.dimosIds,
      state.filters.cities, state.filters.legalStatuses, state.filters.kadCodes,
      state.filters.trdpGroupIds, state.filters.trdBusinessIds,
    ].some((f) => f && f.length > 0);
    if (hasFilters) parts.push("φίλτρα εφαρμόζονται");
    return parts.length ? parts.join(" + ") : "Κανένας παραλήπτης";
  })();

  const contentLabel = state.inlineTemplate
    ? `Νέο σχέδιο (${state.inlineTemplate.blocks?.length ?? 0} blocks)`
    : selectedTemplate?.name ?? "—";

  const patchCount = Object.keys(state.baseTemplatePatches).length;

  // Build dynamic content HTML from inline design or existing template
  const dynamicHtml = React.useMemo(() => {
    if (state.inlineTemplate) return renderBlocksToHtml(state.inlineTemplate);
    if (selectedTemplate?.content) return renderBlocksToHtml(selectedTemplate.content as NewsletterContent);
    if (selectedTemplate) return `<p style="font-family:sans-serif;color:#888;font-size:12px">Περιεχόμενο: ${selectedTemplate.name}</p>`;
    return "";
  }, [state.inlineTemplate, selectedTemplate]);

  // Merge dynamic content into base template with field patches applied
  const previewSrc = React.useMemo(() => {
    if (selectedBase?.htmlDocument) {
      const merged = mergeBaseTemplateWithDynamicContent(
        applyBaseTemplateFields(selectedBase.htmlDocument, {
          ...(selectedBase.fieldOverrides as Record<string, string> ?? {}),
          ...state.baseTemplatePatches,
        }),
        dynamicHtml || "<p style='color:#A19F9D;font-size:12px;font-family:sans-serif'>Δεν επιλέχθηκε περιεχόμενο</p>"
      );
      return merged;
    }
    if (dynamicHtml) return `<html><body style="font-family:sans-serif;padding:24px;max-width:600px;margin:0 auto">${dynamicHtml}</body></html>`;
    return `<html><body style="font-family:sans-serif;padding:24px;color:#A19F9D;text-align:center"><p>Δεν επιλέχθηκε πρότυπο</p></body></html>`;
  }, [selectedBase, dynamicHtml, state.baseTemplatePatches]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {/* Left: Preview */}
      <div className="space-y-3">
        <p className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Προεπισκόπηση email</p>
        <div className="bg-white border border-[#EDEBE9] rounded-lg overflow-hidden">
          <iframe
            srcDoc={previewSrc}
            title="Email preview"
            className="border-0"
            style={{ width: "100%", height: 480, pointerEvents: "none" }}
          />
        </div>
        <p className="text-[11px] text-[#A19F9D]">Παραλήπτες: {recipientSummary}</p>
      </div>

      {/* Right: Summary + Actions */}
      <div className="space-y-4">
        <div className="bg-white border border-[#EDEBE9] rounded-lg p-5 space-y-3">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D]">Σύνοψη εκστρατείας</p>
          {[
            ["Εκστρατεία", state.name || "—"],
            ["Θέμα", state.subject || "—"],
            ["Περιεχόμενο", contentLabel],
            ["Πρότυπο βάσης", selectedBase ? `${selectedBase.name}${patchCount ? ` (${patchCount} παραμετροποιήσεις)` : ""}` : "—"],
            ["Παραλήπτες", recipientSummary],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between text-sm">
              <span className="text-[#A19F9D] font-medium">{label}</span>
              <span className="text-[#201F1E] font-semibold text-right ml-4 max-w-[200px] truncate">{value}</span>
            </div>
          ))}
        </div>

        {/* Test email */}
        <div className="bg-white border border-[#EDEBE9] rounded-lg p-5 space-y-3">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D]">Δοκιμαστικό Email</p>
          <div className="flex gap-2">
            <Input
              type="email"
              value={testEmail}
              onChange={(e) => setTestEmail(e.target.value)}
              placeholder="email@example.com"
              className="h-9 text-sm flex-1 border-[#C8C6C4] focus-visible:ring-[#0078D4]"
            />
            <Button
              onClick={handleTest}
              disabled={testSending || !testEmail.trim()}
              size="sm"
              variant="outline"
              className="h-9 px-3 bg-white border border-[#C8C6C4] text-[#201F1E] hover:bg-[#F3F2F1] text-[12px] font-semibold"
            >
              {testSending ? <Loader2Icon className="w-3.5 h-3.5 animate-spin" /> : <MailIcon className="w-3.5 h-3.5" />}
              <span className="ml-1.5">Αποστολή δοκιμής</span>
            </Button>
          </div>
        </div>

        <Button
          onClick={onSend}
          disabled={sending}
          className="w-full h-11 text-sm font-bold bg-[#0078D4] hover:bg-[#106EBE] text-white rounded shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,120,212,0.3)]"
        >
          {sending
            ? <><Loader2Icon className="w-4 h-4 animate-spin mr-2" />Αποστολή…</>
            : "Αποστολή εκστρατείας"}
        </Button>
      </div>
    </div>
  );
}

// ——— Main Wizard ———

export function NewsletterWizardClient({
  templates,
  baseTemplates,
  baseSettings: _baseSettings,
  euPrograms,
}: {
  templates: NewsletterWizardTemplate[];
  baseTemplates: NewsletterWizardBaseTemplate[];
  baseSettings: NewsletterWizardBaseSettings;
  euPrograms: NewsletterWizardEuProgram[];
}) {
  const router = useRouter();
  const [step, setStep] = React.useState(1);
  const [sending, setSending] = React.useState(false);
  const [filterOptions, setFilterOptions] = React.useState<FilterOptions | null>(null);

  const [state, setState] = React.useState<WizardState>({
    name: "",
    subject: "",
    templateId: null,
    inlineTemplate: null,
    baseTemplateId: null,
    baseTemplatePatches: {},
    recipientMode: "filters",
    filters: {},
    excelEmails: [],
    excelFileName: "",
  });

  const onChange = React.useCallback((patch: Partial<WizardState>) => {
    setState((prev) => ({ ...prev, ...patch }));
  }, []);

  React.useEffect(() => {
    if (step === 4 && filterOptions === null) {
      getNewsletterFilterOptions().then((opts) => setFilterOptions(opts));
    }
  }, [step, filterOptions]);

  const validateStep = (): boolean => {
    if (step === 1) {
      if (!state.name.trim()) { toast.error("Το όνομα εκστρατείας είναι υποχρεωτικό"); return false; }
      if (!state.subject.trim()) { toast.error("Το θέμα email είναι υποχρεωτικό"); return false; }
    }
    return true;
  };

  const handleNext = () => { if (!validateStep()) return; setStep((s) => Math.min(s + 1, TOTAL_STEPS)); };
  const handleBack = () => setStep((s) => Math.max(s - 1, 1));

  const handleSend = async () => {
    setSending(true);
    try {
      const campaign = await createNewsletterCampaign({
        name: state.name,
        subject: state.subject,
        templateId: state.templateId,
        filters: {
          ...state.filters,
          directEmails: state.excelEmails.length > 0 ? state.excelEmails : undefined,
        },
      });

      const { count, error: buildError } = await buildCampaignRecipients(campaign.id);
      if (buildError) { toast.error(buildError); setSending(false); return; }

      const confirmed = window.confirm(
        `Η εκστρατεία θα σταλεί σε ${count} παραλήπτη(-ες). Επιβεβαίωση;`
      );
      if (!confirmed) { setSending(false); return; }

      const result = await sendNewsletterCampaign(campaign.id);
      if (result.errors?.length) result.errors.slice(0, 3).forEach((e) => toast.error(e));
      toast.success(`Εστάλησαν: ${result.sent}, Απέτυχαν: ${result.failed}`);
      router.push("/admin/newsletter/campaigns");
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Αποτυχία αποστολής");
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F2F1]">
      {/* Page header */}
      <div className="bg-white border-b border-[#EDEBE9] px-5 py-4">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-[#EFF6FC] border border-[#C7E0F4] flex items-center justify-center shrink-0">
            <Wand2Icon className="w-4 h-4 text-[#0078D4]" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-[#201F1E]">Οδηγός Δημιουργίας Εκστρατείας</h1>
            <p className="text-[11px] text-[#A19F9D]">Βήμα {step} από {TOTAL_STEPS}</p>
          </div>
        </div>
      </div>

      {/* Step indicator */}
      <div className="bg-white border-b border-[#EDEBE9] px-5 py-3">
        <div className="max-w-4xl mx-auto">
          <StepIndicator current={step} />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 max-w-4xl mx-auto">
        <div className="mb-5">
          {step === 1 && <Step1 state={state} onChange={onChange} />}
          {step === 2 && <Step2 templates={templates} state={state} onChange={onChange} />}
          {step === 3 && <Step3 baseTemplates={baseTemplates} state={state} onChange={onChange} />}
          {step === 4 && (
            <Step4
              state={state}
              onChange={onChange}
              filterOptions={filterOptions}
              euPrograms={euPrograms}
            />
          )}
          {step === 5 && (
            <Step5
              state={state}
              templates={templates}
              baseTemplates={baseTemplates}
              onSend={handleSend}
              sending={sending}
            />
          )}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={step === 1 ? () => router.push("/admin/newsletter/campaigns") : handleBack}
            className="h-9 px-4 text-[12px] font-semibold text-[#605E5C] border-[#C8C6C4] hover:bg-[#EDEBE9]"
          >
            {step === 1 ? "Ακύρωση" : "Πίσω"}
          </Button>
          {step < TOTAL_STEPS && (
            <Button
              onClick={handleNext}
              className="h-9 px-5 text-[12px] font-semibold bg-[#0078D4] hover:bg-[#106EBE] text-white"
            >
              Επόμενο
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
