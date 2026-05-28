"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  Loader2Icon, MailIcon, Wand2Icon, CheckIcon,
  ChevronDownIcon, ChevronUpIcon, UsersIcon, PencilIcon, Maximize2Icon,
  EyeIcon, SendIcon, BuildingIcon, ImagesIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  createNewsletterCampaign,
  createNewsletterTemplate,
  buildCampaignRecipients,
  sendNewsletterCampaign,
  sendNewsletterTestEmail,
  estimateNewsletterRecipients,
  type NewsletterFilters,
  type NewsletterWizardTemplate,
  type NewsletterWizardBaseTemplate,
  type NewsletterWizardBaseSettings,
  type NewsletterWizardEuProgram,
  type NewsletterWizardSenderProfile,
} from "@/app/lib/actions/newsletter";
import { VisualDesigner } from "@/components/newsletter/visual-designer";
import type { NewsletterContent } from "@/lib/newsletter-blocks";
import { createBlock, renderBlocksToHtml } from "@/lib/newsletter-blocks";
import { NewsletterMediaPickerDialog } from "@/components/newsletter/newsletter-media-picker-dialog";
import { applyBaseTemplateFields, mergeBaseTemplateWithDynamicContent } from "@/lib/newsletter-dynamic-placeholder";
import { createNewsletterCompanyInline } from "@/app/lib/actions/newsletter-sender-profiles";
import { StepAudience, type AudienceState } from "./StepAudience";

// ——— Constants ———

const BASE_FIELD_META: { key: string; label: string; media: boolean }[] = [
  { key: "companyName",      label: "Όνομα εταιρείας",              media: false },
  { key: "logoUrl",          label: "URL Λογότυπου",                 media: true  },
  { key: "facebookUrl",      label: "URL Facebook",                  media: true  },
  { key: "instagramUrl",     label: "URL Instagram",                 media: true  },
  { key: "linkedinUrl",      label: "URL LinkedIn",                  media: true  },
  { key: "xUrl",             label: "URL X (Twitter)",               media: true  },
  { key: "tagline",          label: "Υπότιτλος",                     media: false },
  { key: "addressLine",      label: "Διεύθυνση",                     media: false },
  { key: "phone",            label: "Τηλέφωνο",                      media: false },
  { key: "contactEmail",     label: "Email επικοινωνίας",            media: false },
  { key: "privacyPolicyUrl", label: "URL Πολιτικής Απορρήτου",       media: true  },
  { key: "termsUrl",         label: "URL Όρων Χρήσης",               media: true  },
  { key: "unsubscribeUrl",   label: "URL Κατάργησης Εγγραφής",       media: true  },
];

const TOTAL_STEPS = 6;
const STEP_LABELS = [
  "Παραλήπτες",      // 1 — Audience (NEW: first step)
  "Περιεχόμενο",     // 2 — Content design
  "Πρότυπο Βάσης",   // 3 — Brand wrapper
  "Στοιχεία",        // 4 — Sender, subject, preheader
  "Έλεγχος",         // 5 — Preview + test send
  "Αποστολή",        // 6 — Final confirm + send
];

// ——— Types ———

type WizardState = {
  // Campaign metadata (step 4)
  name: string;
  subject: string;
  preheader: string;
  senderProfileId: string | null;

  // Content (step 2)
  templateId: string | null;
  inlineTemplate: NewsletterContent | null;

  // Base template (step 3)
  baseTemplateId: string | null;
  baseTemplatePatches: Record<string, string>;

  // Audience (step 1) — embedded via AudienceState shape
  filters: NewsletterFilters;
  excelEmails: string[];
  excelFileName: string;
};

// ——— Step indicator ———

function StepIndicator({ current, onJump }: { current: number; onJump?: (n: number) => void }) {
  return (
    <div className="flex items-center gap-0">
      {STEP_LABELS.map((label, i) => {
        const step = i + 1;
        const done = step < current;
        const active = step === current;
        const clickable = !!onJump && step <= current;
        return (
          <React.Fragment key={step}>
            <button
              type="button"
              onClick={clickable ? () => onJump!(step) : undefined}
              disabled={!clickable}
              className={`flex flex-col items-center gap-1 ${clickable ? "cursor-pointer" : "cursor-default"}`}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold border-2 transition-colors ${
                  done
                    ? "bg-[#0078D4] border-[#0078D4] text-white hover:bg-[#106EBE]"
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
            </button>
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

// ——— Persistent header utilities (recipient chip + test-send button) ———

function PersistentToolbar({
  recipientCount,
  recipientLoading,
  onPreview,
  onTestSend,
  canPreview,
  testSending,
}: {
  recipientCount: number | null;
  recipientLoading: boolean;
  onPreview: () => void;
  onTestSend: () => void;
  canPreview: boolean;
  testSending: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      {/* Live recipient chip */}
      <div
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-[11px] font-bold border ${
          recipientLoading
            ? "bg-[#F3F2F1] border-[#EDEBE9] text-[#605E5C]"
            : recipientCount === null
            ? "bg-[#F3F2F1] border-[#EDEBE9] text-[#A19F9D]"
            : "bg-[#EFF6FC] border-[#C7E0F4] text-[#0078D4]"
        }`}
        title="Εκτιμώμενοι παραλήπτες"
      >
        {recipientLoading
          ? <Loader2Icon className="w-3 h-3 animate-spin" />
          : <UsersIcon className="w-3 h-3" />}
        <span>
          {recipientLoading
            ? "…"
            : recipientCount === null
            ? "—"
            : `${recipientCount.toLocaleString("el-GR")} παραλήπτες`}
        </span>
      </div>

      <button
        type="button"
        onClick={onPreview}
        disabled={!canPreview}
        className="inline-flex items-center gap-1 h-7 px-2.5 rounded border border-[#C8C6C4] bg-white hover:bg-[#F3F2F1] disabled:opacity-50 disabled:cursor-not-allowed text-[11px] font-semibold text-[#605E5C]"
        title="Προεπισκόπηση"
      >
        <EyeIcon className="w-3 h-3" />
        Προεπισκόπηση
      </button>

      <button
        type="button"
        onClick={onTestSend}
        disabled={!canPreview || testSending}
        className="inline-flex items-center gap-1 h-7 px-2.5 rounded border border-[#C8C6C4] bg-white hover:bg-[#F3F2F1] disabled:opacity-50 disabled:cursor-not-allowed text-[11px] font-semibold text-[#605E5C]"
        title="Αποστολή δοκιμαστικού"
      >
        {testSending ? <Loader2Icon className="w-3 h-3 animate-spin" /> : <MailIcon className="w-3 h-3" />}
        Test
      </button>
    </div>
  );
}

// ——— Inline company creation form ———

const EMPTY_COMPANY = {
  presenceName: "",
  senderName: "",
  senderEmail: "",
  logoUrl: "",
  tagline: "",
  facebookUrl: "",
  instagramUrl: "",
  linkedinUrl: "",
  xUrl: "",
  addressLine: "",
  phone: "",
  contactEmail: "",
  privacyPolicyUrl: "",
  termsUrl: "",
  unsubscribeUrl: "",
};

function CompanyForm({
  open, onOpenChange, onCreated,
}: {
  open: boolean;
  onOpenChange: (o: boolean) => void;
  onCreated: (profile: NewsletterWizardSenderProfile) => void;
}) {
  const [form, setForm] = React.useState(EMPTY_COMPANY);
  const [saving, setSaving] = React.useState(false);
  const [mediaTarget, setMediaTarget] = React.useState<"logoUrl" | null>(null);

  React.useEffect(() => {
    if (open) setForm(EMPTY_COMPANY);
  }, [open]);

  const update = <K extends keyof typeof form>(k: K, v: typeof form[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const handleSave = async () => {
    if (!form.presenceName.trim()) { toast.error("Το όνομα εταιρείας είναι υποχρεωτικό"); return; }
    if (!form.senderEmail.trim()) { toast.error("Το email αποστολής (From) είναι υποχρεωτικό"); return; }
    setSaving(true);
    try {
      const dto = await createNewsletterCompanyInline(form);
      // Map SenderProfileDto → NewsletterWizardSenderProfile shape
      onCreated({
        id: dto.id,
        presenceId: dto.presenceId,
        presenceName: dto.presenceName,
        presenceLogo: dto.presenceLogoFallback ?? "",
        senderName: dto.senderName,
        senderEmail: dto.senderEmail,
        logoUrl: dto.logoUrl,
        tagline: dto.tagline,
        facebookUrl: dto.facebookUrl,
        instagramUrl: dto.instagramUrl,
        linkedinUrl: dto.linkedinUrl,
        xUrl: dto.xUrl,
        addressLine: dto.addressLine,
        phone: dto.phone,
        contactEmail: dto.contactEmail,
        privacyPolicyUrl: dto.privacyPolicyUrl,
        termsUrl: dto.termsUrl,
        unsubscribeUrl: dto.unsubscribeUrl,
      });
      toast.success(`Δημιουργήθηκε: ${dto.presenceName}`);
      onOpenChange(false);
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Αποτυχία δημιουργίας");
    } finally {
      setSaving(false);
    }
  };

  const field = (
    key: keyof typeof form,
    label: string,
    placeholder = "",
    opts: { type?: string; media?: boolean; required?: boolean } = {}
  ) => (
    <div className="space-y-1">
      <Label className="text-[10px] font-semibold text-[#605E5C] uppercase tracking-wide">
        {label}{opts.required && <span className="text-red-500"> *</span>}
      </Label>
      <div className="flex gap-1.5">
        <Input
          type={opts.type ?? "text"}
          value={form[key]}
          onChange={(e) => update(key, e.target.value)}
          placeholder={placeholder}
          className="h-8 text-[12px] border-[#C8C6C4] focus-visible:ring-[#0078D4]"
        />
        {opts.media && (
          <button
            type="button"
            onClick={() => setMediaTarget("logoUrl")}
            title="Επιλογή από γκαλερί"
            className="h-8 w-8 shrink-0 flex items-center justify-center border border-[#C8C6C4] rounded bg-white hover:bg-[#EDEBE9] text-[#605E5C] transition-colors"
          >
            <ImagesIcon className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-sm">Νέα εταιρεία αποστολής</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Identity */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-2">Ταυτότητα</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {field("presenceName", "Όνομα εταιρείας", "π.χ. DGsoft", { required: true })}
              {field("tagline", "Υπότιτλος", "π.χ. Λύσεις λογισμικού για επιχειρήσεις")}
              {field("logoUrl", "URL Λογότυπου", "https://…", { media: true })}
            </div>
          </div>

          {/* From */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-2">Αποστολή email</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {field("senderName", "Sender name (εμφανίζεται ως «Από»)", "π.χ. DGsoft Team")}
              {field("senderEmail", "Email From", "noreply@dgsoft.gr", { type: "email", required: true })}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-2">Στοιχεία επικοινωνίας</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {field("contactEmail", "Email επικοινωνίας", "info@dgsoft.gr", { type: "email" })}
              {field("phone", "Τηλέφωνο", "+30 …")}
              <div className="sm:col-span-2">
                {field("addressLine", "Διεύθυνση", "Οδός, αριθμός, ΤΚ, πόλη")}
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-2">Social media</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {field("facebookUrl",  "Facebook URL",  "https://facebook.com/…")}
              {field("instagramUrl", "Instagram URL", "https://instagram.com/…")}
              {field("linkedinUrl",  "LinkedIn URL",  "https://linkedin.com/company/…")}
              {field("xUrl",         "X (Twitter) URL", "https://x.com/…")}
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-2">Νομικά (footer links)</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {field("privacyPolicyUrl", "URL Πολιτικής Απορρήτου", "https://…")}
              {field("termsUrl",         "URL Όρων Χρήσης",         "https://…")}
              {field("unsubscribeUrl",   "URL Κατάργησης Εγγραφής", "https://…")}
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2 border-t border-[#EDEBE9]">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="h-9 px-4 text-[12px] border-[#C8C6C4] text-[#605E5C]"
            >
              Άκυρο
            </Button>
            <Button
              onClick={handleSave}
              disabled={saving}
              className="h-9 px-5 text-[12px] bg-[#0078D4] hover:bg-[#106EBE] text-white"
            >
              {saving ? <Loader2Icon className="w-3.5 h-3.5 animate-spin mr-1.5" /> : <CheckIcon className="w-3.5 h-3.5 mr-1.5" />}
              Δημιουργία
            </Button>
          </div>
        </div>

        <NewsletterMediaPickerDialog
          open={mediaTarget !== null}
          onOpenChange={(o) => !o && setMediaTarget(null)}
          title="Επιλογή λογότυπου"
          onSelect={(url) => {
            if (mediaTarget) update(mediaTarget, url);
            setMediaTarget(null);
          }}
        />
      </DialogContent>
    </Dialog>
  );
}

// ——— Step 4: Campaign details (sender + subject + preheader + name) ———

function StepDetails({
  state,
  onChange,
  senderProfiles,
  onCompanyCreated,
}: {
  state: WizardState;
  onChange: (p: Partial<WizardState>) => void;
  senderProfiles: NewsletterWizardSenderProfile[];
  onCompanyCreated: (p: NewsletterWizardSenderProfile) => void;
}) {
  const selected = senderProfiles.find((p) => p.id === state.senderProfileId) ?? null;
  const [pickerOpen, setPickerOpen] = React.useState(false);
  const [newCompanyOpen, setNewCompanyOpen] = React.useState(false);

  const handlePickProfile = (profileId: string) => {
    const profile = senderProfiles.find((p) => p.id === profileId);
    if (!profile) return;
    onChange({ senderProfileId: profileId });
    setPickerOpen(false);
  };

  const handleCreated = (profile: NewsletterWizardSenderProfile) => {
    onCompanyCreated(profile);
    onChange({ senderProfileId: profile.id });
    setPickerOpen(false);
    setNewCompanyOpen(false);
  };

  return (
    <div className="space-y-4 max-w-2xl">
      <div className="space-y-1.5">
        <Label className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">
          Όνομα εκστρατείας <span className="text-red-500">*</span>
        </Label>
        <Input
          value={state.name}
          onChange={(e) => onChange({ name: e.target.value })}
          placeholder="π.χ. Newsletter Νοεμβρίου 2026"
          className="h-9 text-sm border-[#C8C6C4] focus-visible:ring-[#0078D4]"
        />
        <p className="text-[10px] text-[#A19F9D]">Εσωτερικό όνομα — δεν εμφανίζεται στους παραλήπτες.</p>
      </div>

      <div className="space-y-1.5">
        <Label className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">
          Θέμα email <span className="text-red-500">*</span>
        </Label>
        <Input
          value={state.subject}
          onChange={(e) => onChange({ subject: e.target.value })}
          placeholder="π.χ. Νέα προγράμματα χρηματοδότησης ΕΣΠΑ"
          maxLength={200}
          className="h-9 text-sm border-[#C8C6C4] focus-visible:ring-[#0078D4]"
        />
        <div className="flex justify-between text-[10px] text-[#A19F9D]">
          <span>Καλό μήκος: 30–60 χαρακτήρες για mobile.</span>
          <span className={state.subject.length > 60 ? "text-amber-600" : ""}>{state.subject.length}/200</span>
        </div>
      </div>

      <div className="space-y-1.5">
        <Label className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">
          Προεπισκόπηση κειμένου (preheader)
        </Label>
        <Input
          value={state.preheader}
          onChange={(e) => onChange({ preheader: e.target.value })}
          placeholder="Σύντομη περιγραφή που εμφανίζεται δίπλα στο θέμα"
          maxLength={150}
          className="h-9 text-sm border-[#C8C6C4] focus-visible:ring-[#0078D4]"
        />
        <p className="text-[10px] text-[#A19F9D]">Προαιρετικό. Αυξάνει σημαντικά το open rate.</p>
      </div>

      {/* Sender profile */}
      <div className="space-y-1.5">
        <Label className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">
          Στοιχεία αποστολέα <span className="text-red-500">*</span>
        </Label>

        {!selected ? (
          <button
            type="button"
            onClick={() => setPickerOpen(true)}
            className="w-full bg-white border-2 border-dashed border-[#C8C6C4] hover:border-[#0078D4] hover:bg-[#F3F2F1] rounded-lg p-4 flex items-center gap-3 text-left transition-colors"
          >
            <div className="w-9 h-9 rounded bg-[#F3F2F1] border border-[#EDEBE9] flex items-center justify-center shrink-0">
              <BuildingIcon className="w-4 h-4 text-[#A19F9D]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#201F1E]">Επιλέξτε εταιρεία αποστολής</p>
              <p className="text-[11px] text-[#A19F9D]">{senderProfiles.length} διαθέσιμα προφίλ</p>
            </div>
          </button>
        ) : (
          <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 flex items-center gap-3">
            {selected.presenceLogo ? (
              <img src={selected.presenceLogo} alt="" className="w-9 h-9 rounded object-contain bg-white border border-[#EDEBE9] shrink-0" />
            ) : (
              <div className="w-9 h-9 rounded bg-[#EFF6FC] border border-[#C7E0F4] flex items-center justify-center shrink-0">
                <BuildingIcon className="w-4 h-4 text-[#0078D4]" />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-[#201F1E] truncate">{selected.presenceName}</p>
              <p className="text-[11px] text-[#605E5C] truncate">
                {selected.senderName} &lt;{selected.senderEmail}&gt;
              </p>
            </div>
            <button
              type="button"
              onClick={() => setPickerOpen(true)}
              className="text-[11px] font-semibold text-[#0078D4] hover:underline"
            >
              Αλλαγή
            </button>
          </div>
        )}

        {pickerOpen && (
          <Dialog open onOpenChange={(o) => !o && setPickerOpen(false)}>
            <DialogContent className="max-w-xl">
              <DialogHeader>
                <DialogTitle className="text-sm">Επιλέξτε εταιρεία αποστολής</DialogTitle>
              </DialogHeader>
              <div className="space-y-2 max-h-[60vh] overflow-y-auto">
                {/* Create-new tile */}
                <button
                  type="button"
                  onClick={() => setNewCompanyOpen(true)}
                  className="w-full bg-white hover:bg-[#EFF6FC] border-2 border-dashed border-[#0078D4] rounded-lg p-3 flex items-center gap-3 text-left transition-colors"
                >
                  <div className="w-9 h-9 rounded bg-[#EFF6FC] border border-[#C7E0F4] flex items-center justify-center">
                    <span className="text-[#0078D4] text-lg leading-none">+</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[#0078D4]">Νέα εταιρεία αποστολής</p>
                    <p className="text-[11px] text-[#605E5C]">Λογότυπο, social, στοιχεία επικοινωνίας, email From</p>
                  </div>
                </button>

                {senderProfiles.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => handlePickProfile(p.id)}
                    className="w-full bg-white hover:bg-[#F3F2F1] border border-[#EDEBE9] rounded-lg p-3 flex items-center gap-3 text-left transition-colors"
                  >
                    {p.presenceLogo ? (
                      <img src={p.presenceLogo} alt="" className="w-9 h-9 rounded object-contain bg-white border border-[#EDEBE9]" />
                    ) : (
                      <div className="w-9 h-9 rounded bg-[#F3F2F1] border border-[#EDEBE9] flex items-center justify-center">
                        <BuildingIcon className="w-4 h-4 text-[#A19F9D]" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-[#201F1E] truncate">{p.presenceName}</p>
                      <p className="text-[11px] text-[#605E5C] truncate">
                        {p.senderName} &lt;{p.senderEmail}&gt;
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>

      <CompanyForm
        open={newCompanyOpen}
        onOpenChange={setNewCompanyOpen}
        onCreated={handleCreated}
      />
    </div>
  );
}

// ——— Step 2: Content (split view + full-screen designer modal) ———

function StepContent({
  templates,
  state,
  onChange,
}: {
  templates: NewsletterWizardTemplate[];
  state: WizardState;
  onChange: (p: Partial<WizardState>) => void;
}) {
  const [designerOpen, setDesignerOpen] = React.useState(false);

  const emptyContent: NewsletterContent = React.useMemo(
    () => ({ blocks: [createBlock("paragraph")], bodyOptions: { backgroundColor: "#ffffff" } }),
    []
  );

  const handlePickExisting = (id: string | null) => {
    onChange({ templateId: id, inlineTemplate: null });
  };

  const handleOpenDesigner = () => {
    if (!state.inlineTemplate) {
      onChange({ inlineTemplate: emptyContent, templateId: null });
    }
    setDesignerOpen(true);
  };

  // Preview HTML
  const previewHtml = React.useMemo(() => {
    if (state.inlineTemplate) return renderBlocksToHtml(state.inlineTemplate);
    if (state.templateId) {
      const t = templates.find((x) => x.id === state.templateId);
      if (t?.content) return renderBlocksToHtml(t.content as NewsletterContent);
    }
    return `<div style="padding:48px;text-align:center;color:#A19F9D;font-family:sans-serif;font-size:13px">
              <p>Δεν έχει επιλεγεί περιεχόμενο</p>
              <p style="font-size:11px;margin-top:8px">Επιλέξτε ένα πρότυπο αριστερά ή σχεδιάστε νέο.</p>
            </div>`;
  }, [state.inlineTemplate, state.templateId, templates]);

  return (
    <>
      {/* Full-screen designer modal */}
      <Dialog open={designerOpen} onOpenChange={setDesignerOpen}>
        <DialogContent
          className="!max-w-none w-screen h-screen p-0 gap-0 rounded-none border-0 flex flex-col"
          style={{ width: "100vw", height: "100vh" }}
        >
          <DialogHeader className="px-5 py-3 border-b border-[#EDEBE9] bg-white shrink-0 flex-row items-center justify-between space-y-0">
            <DialogTitle className="text-[13px] font-semibold text-[#201F1E]">
              Visual Designer — Σχεδιασμός περιεχομένου
            </DialogTitle>
            <Button
              size="sm"
              onClick={() => setDesignerOpen(false)}
              className="h-8 text-[12px] bg-[#0078D4] hover:bg-[#106EBE] text-white"
            >
              <CheckIcon className="w-3.5 h-3.5 mr-1.5" />
              Αποθήκευση & κλείσιμο
            </Button>
          </DialogHeader>
          <div className="flex-1 overflow-hidden bg-[#F3F2F1]">
            <VisualDesigner
              value={state.inlineTemplate ?? emptyContent}
              onChange={(content) => onChange({ inlineTemplate: content, templateId: null })}
            />
          </div>
        </DialogContent>
      </Dialog>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-5">
        {/* Left: source picker */}
        <div className="space-y-3">
          <p className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">
            Σημείο εκκίνησης
          </p>

          {/* Design new — most prominent */}
          <button
            type="button"
            onClick={handleOpenDesigner}
            className={`w-full text-left bg-white border-2 rounded-lg p-4 flex items-center gap-3 transition-colors ${
              state.inlineTemplate
                ? "border-[#0078D4] bg-[#EFF6FC]"
                : "border-dashed border-[#0078D4] hover:bg-[#EFF6FC]"
            }`}
          >
            <div className={`w-9 h-9 rounded-md flex items-center justify-center shrink-0 ${
              state.inlineTemplate ? "bg-[#0078D4]" : "bg-[#EFF6FC] border border-[#C7E0F4]"
            }`}>
              <PencilIcon className={`w-4 h-4 ${state.inlineTemplate ? "text-white" : "text-[#0078D4]"}`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-[#201F1E]">
                {state.inlineTemplate ? "Επεξεργασία σχεδίου" : "Σχεδιάστε νέο περιεχόμενο"}
              </p>
              <p className="text-[11px] text-[#605E5C]">
                {state.inlineTemplate
                  ? `${state.inlineTemplate.blocks?.length ?? 0} blocks — κλικ για άνοιγμα`
                  : "Άνοιγμα full-screen Visual Designer"}
              </p>
            </div>
            <Maximize2Icon className="w-3.5 h-3.5 text-[#A19F9D] shrink-0" />
          </button>

          {/* No template */}
          <button
            type="button"
            onClick={() => handlePickExisting(null)}
            className={`w-full text-left border-2 rounded-lg p-3 flex items-center gap-3 transition-colors ${
              state.templateId === null && !state.inlineTemplate
                ? "border-[#0078D4] bg-[#EFF6FC]"
                : "border-[#EDEBE9] bg-white hover:border-[#C8C6C4]"
            }`}
          >
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
              state.templateId === null && !state.inlineTemplate
                ? "border-[#0078D4] bg-[#0078D4]"
                : "border-[#C8C6C4]"
            }`}>
              {state.templateId === null && !state.inlineTemplate && <CheckIcon className="w-3 h-3 text-white" />}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-[#201F1E]">Χωρίς περιεχόμενο</p>
              <p className="text-[11px] text-[#A19F9D]">Μόνο το πρότυπο βάσης (όλο το header/footer χωρίς main content)</p>
            </div>
          </button>

          {/* Existing templates */}
          {templates.length > 0 && (
            <>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] pt-2">
                Ή επιλέξτε υπάρχον πρότυπο
              </p>
              <div className="space-y-2 max-h-[400px] overflow-y-auto pr-1">
                {templates.map((t) => {
                  const selected = state.templateId === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => handlePickExisting(t.id)}
                      className={`w-full text-left border-2 rounded-lg p-3 transition-colors ${
                        selected
                          ? "border-[#0078D4] bg-[#EFF6FC]"
                          : "border-[#EDEBE9] bg-white hover:border-[#C8C6C4]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-[#201F1E] truncate">{t.name}</p>
                          {t.description && (
                            <p className="text-[11px] text-[#605E5C] mt-0.5 line-clamp-2">{t.description}</p>
                          )}
                          <p className="text-[10px] text-[#A19F9D] mt-1">
                            {new Date(t.updatedAt).toLocaleDateString("el-GR")}
                          </p>
                        </div>
                        {selected && (
                          <div className="w-5 h-5 rounded-full bg-[#0078D4] flex items-center justify-center shrink-0">
                            <CheckIcon className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>

        {/* Right: live preview */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">
              Προεπισκόπηση
            </p>
            {state.inlineTemplate && (
              <button
                type="button"
                onClick={handleOpenDesigner}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0078D4] hover:underline"
              >
                <PencilIcon className="w-3 h-3" />
                Άνοιγμα designer
              </button>
            )}
          </div>
          <div className="bg-white border border-[#EDEBE9] rounded-lg overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
            <iframe
              srcDoc={`<html><body style="margin:0;font-family:sans-serif">${previewHtml}</body></html>`}
              title="Content preview"
              className="border-0 w-full"
              style={{ height: 520 }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

// ——— Patch panel (field overrides for base template) ———

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
    <div className="bg-[#F3F2F1] border border-[#EDEBE9] rounded-lg p-4 space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">
          Παραμετροποίηση πεδίων
        </p>
        {Object.keys(patches).length > 0 && (
          <button
            type="button"
            onClick={() => onChange({})}
            className="text-[10px] text-red-500 hover:text-red-700"
          >
            Επαναφορά όλων
          </button>
        )}
      </div>
      <p className="text-[10px] text-[#A19F9D]">
        Τα πεδία εδώ αντικαθιστούν τις προεπιλεγμένες τιμές μόνο για αυτή την εκστρατεία.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {BASE_FIELD_META.map(({ key, label, media }) => (
          <div key={key} className="space-y-1">
            <Label className="text-[10px] font-semibold text-[#605E5C]">{label}</Label>
            <div className="flex gap-1.5">
              <Input
                value={patches[key] ?? ""}
                onChange={(e) => update(key, e.target.value)}
                placeholder="(προεπιλεγμένη τιμή)"
                className="h-8 text-[12px] border-[#C8C6C4] bg-white focus-visible:ring-[#0078D4]"
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

// ——— Step 3: Base template ———

function StepBaseTemplate({
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

  return (
    <div className="space-y-4">
      <p className="text-[12px] text-[#605E5C]">
        Το πρότυπο βάσης είναι το «wrapper» (header/footer/branding) γύρω από το περιεχόμενό σας.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {/* No base */}
        <button
          type="button"
          onClick={() => onChange({ baseTemplateId: null, baseTemplatePatches: {} })}
          className={`text-left border-2 rounded-lg p-4 flex items-center gap-3 transition-colors ${
            state.baseTemplateId === null
              ? "border-[#0078D4] bg-[#EFF6FC]"
              : "border-[#EDEBE9] bg-white hover:border-[#C8C6C4]"
          }`}
        >
          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
            state.baseTemplateId === null ? "border-[#0078D4] bg-[#0078D4]" : "border-[#C8C6C4]"
          }`}>
            {state.baseTemplateId === null && <CheckIcon className="w-3 h-3 text-white" />}
          </div>
          <div>
            <p className="text-sm font-semibold text-[#201F1E]">Χωρίς wrapper</p>
            <p className="text-[11px] text-[#A19F9D]">Μόνο το περιεχόμενο, χωρίς branding</p>
          </div>
        </button>

        {baseTemplates.map((bt) => {
          const selected = state.baseTemplateId === bt.id;
          return (
            <button
              key={bt.id}
              type="button"
              onClick={() => onChange({ baseTemplateId: bt.id })}
              className={`text-left border-2 rounded-lg p-4 relative transition-colors ${
                selected ? "border-[#0078D4] bg-[#EFF6FC]" : "border-[#EDEBE9] bg-white hover:border-[#C8C6C4]"
              }`}
            >
              {selected && (
                <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#0078D4] flex items-center justify-center">
                  <CheckIcon className="w-3 h-3 text-white" />
                </div>
              )}
              <p className="text-sm font-semibold text-[#201F1E] pr-6">{bt.name}</p>
              {bt.description && (
                <p className="text-[11px] text-[#605E5C] mt-1 line-clamp-2">{bt.description}</p>
              )}
              <p className="text-[10px] text-[#A19F9D] mt-2">
                {new Date(bt.updatedAt).toLocaleDateString("el-GR")}
              </p>
            </button>
          );
        })}
      </div>

      {/* Patch toggle */}
      {selectedBase && (
        <>
          <button
            type="button"
            onClick={() => setPatchOpen((v) => !v)}
            className="flex items-center gap-1.5 text-[12px] font-semibold text-[#0078D4] hover:underline"
          >
            {patchOpen ? <ChevronUpIcon className="w-3.5 h-3.5" /> : <ChevronDownIcon className="w-3.5 h-3.5" />}
            Παραμετροποίηση πεδίων ({Object.keys(state.baseTemplatePatches).length})
          </button>
          {patchOpen && (
            <PatchPanel
              patches={state.baseTemplatePatches}
              onChange={(p) => onChange({ baseTemplatePatches: p })}
            />
          )}
        </>
      )}
    </div>
  );
}

// ——— Preview helpers (used by step 5 & test send) ———

/**
 * Build the same override chain the server uses (lib/actions/newsletter sendNewsletterTestEmail):
 *   globalBaseSettings → baseTemplate.fieldOverrides → senderProfile fields → campaign patches.
 * Non-empty sender profile fields override the base template defaults, so picking a different
 * sender swaps the logo / social / address etc. in the live preview.
 */
function senderProfileFields(profile: NewsletterWizardSenderProfile | null): Record<string, string> {
  if (!profile) return {};
  const f: Record<string, string> = {};
  if (profile.logoUrl)          f.logoUrl          = profile.logoUrl;
  if (profile.tagline)          f.tagline          = profile.tagline;
  if (profile.facebookUrl)      f.facebookUrl      = profile.facebookUrl;
  if (profile.instagramUrl)     f.instagramUrl     = profile.instagramUrl;
  if (profile.linkedinUrl)      f.linkedinUrl      = profile.linkedinUrl;
  if (profile.xUrl)             f.xUrl             = profile.xUrl;
  if (profile.addressLine)      f.addressLine      = profile.addressLine;
  if (profile.phone)            f.phone            = profile.phone;
  if (profile.contactEmail)     f.contactEmail     = profile.contactEmail;
  if (profile.privacyPolicyUrl) f.privacyPolicyUrl = profile.privacyPolicyUrl;
  if (profile.termsUrl)         f.termsUrl         = profile.termsUrl;
  if (profile.unsubscribeUrl)   f.unsubscribeUrl   = profile.unsubscribeUrl;
  if (profile.senderName)       f.companyName      = profile.senderName;
  return f;
}

function useBuiltPreview(
  state: WizardState,
  templates: NewsletterWizardTemplate[],
  baseTemplates: NewsletterWizardBaseTemplate[],
  senderProfiles: NewsletterWizardSenderProfile[],
  globalBaseSettings: NewsletterWizardBaseSettings,
) {
  const selectedTemplate = templates.find((t) => t.id === state.templateId) ?? null;
  const selectedBase = baseTemplates.find((bt) => bt.id === state.baseTemplateId) ?? null;
  const selectedProfile = senderProfiles.find((p) => p.id === state.senderProfileId) ?? null;

  const dynamicHtml = React.useMemo(() => {
    if (state.inlineTemplate) return renderBlocksToHtml(state.inlineTemplate);
    if (selectedTemplate?.content) return renderBlocksToHtml(selectedTemplate.content as NewsletterContent);
    if (selectedTemplate) return `<p style="font-family:sans-serif;color:#888;font-size:12px">Περιεχόμενο: ${selectedTemplate.name}</p>`;
    return "";
  }, [state.inlineTemplate, selectedTemplate]);

  const previewSrc = React.useMemo(() => {
    if (selectedBase?.htmlDocument) {
      const merged: Record<string, string> = {
        ...globalBaseSettings,
        ...(selectedBase.fieldOverrides as Record<string, string> ?? {}),
        ...senderProfileFields(selectedProfile),
        ...state.baseTemplatePatches,
      };
      return mergeBaseTemplateWithDynamicContent(
        applyBaseTemplateFields(selectedBase.htmlDocument, merged),
        dynamicHtml || "<p style='color:#A19F9D;font-size:12px;font-family:sans-serif'>Δεν επιλέχθηκε περιεχόμενο</p>"
      );
    }
    if (dynamicHtml) return `<html><body style="font-family:sans-serif;padding:24px;max-width:600px;margin:0 auto">${dynamicHtml}</body></html>`;
    return `<html><body style="font-family:sans-serif;padding:24px;color:#A19F9D;text-align:center"><p>Δεν επιλέχθηκε πρότυπο</p></body></html>`;
  }, [selectedBase, dynamicHtml, state.baseTemplatePatches, selectedProfile, globalBaseSettings]);

  return { previewSrc, dynamicHtml, selectedTemplate, selectedBase };
}

// ——— Spam-score heuristic ———

function computeSpamScore(state: WizardState): { score: number; checks: { label: string; ok: boolean; note?: string }[] } {
  const checks: { label: string; ok: boolean; note?: string }[] = [];
  const subject = state.subject.trim();

  checks.push({
    label: "Θέμα έχει μήκος 30–60 χαρακτήρες",
    ok: subject.length >= 30 && subject.length <= 60,
    note: subject.length < 30 ? "Πολύ μικρό" : subject.length > 60 ? "Πολύ μεγάλο — θα κοπεί σε mobile" : undefined,
  });
  checks.push({
    label: "Χωρίς ΟΛΑ ΚΕΦΑΛΑΙΑ στο θέμα",
    ok: !/[A-ZΑ-Ω]{6,}/.test(subject) && !(subject.length > 4 && subject === subject.toUpperCase()),
  });
  checks.push({
    label: "Λιγότερα από 3 θαυμαστικά",
    ok: (subject.match(/!/g) ?? []).length < 3,
  });
  checks.push({
    label: "Έχει preheader text",
    ok: state.preheader.trim().length >= 20,
    note: state.preheader.trim().length === 0 ? "Λείπει — μειώνει open rate" : state.preheader.trim().length < 20 ? "Πολύ σύντομο" : undefined,
  });
  checks.push({
    label: "Έχει επιλεγεί sender profile",
    ok: state.senderProfileId !== null,
  });
  checks.push({
    label: "Έχει επιλεγεί base template",
    ok: state.baseTemplateId !== null,
    note: state.baseTemplateId === null ? "Συστήνεται για επαγγελματική εμφάνιση" : undefined,
  });

  const passed = checks.filter((c) => c.ok).length;
  const score = Math.round((passed / checks.length) * 100);
  return { score, checks };
}

// ——— Step 5: Review (preview + spam check + test send) ———

function StepReview({
  state,
  templates,
  baseTemplates,
  senderProfiles,
  globalBaseSettings,
  recipientCount,
}: {
  state: WizardState;
  templates: NewsletterWizardTemplate[];
  baseTemplates: NewsletterWizardBaseTemplate[];
  senderProfiles: NewsletterWizardSenderProfile[];
  globalBaseSettings: NewsletterWizardBaseSettings;
  recipientCount: number | null;
}) {
  const { previewSrc, selectedTemplate, selectedBase } = useBuiltPreview(state, templates, baseTemplates, senderProfiles, globalBaseSettings);
  const selectedProfile = senderProfiles.find((p) => p.id === state.senderProfileId) ?? null;
  const { score, checks } = computeSpamScore(state);
  const [device, setDevice] = React.useState<"desktop" | "mobile">("desktop");
  const [fullOpen, setFullOpen] = React.useState(false);

  const audienceSummary = (() => {
    const f = state.filters;
    const parts: string[] = [];
    if (f.allSubscribers) parts.push("όλοι οι subscribers");
    else if (f.subscriberIds?.length) parts.push(`${f.subscriberIds.length} subscribers`);
    if (f.manualTrdrIds?.length) parts.push(`${f.manualTrdrIds.length} χειροκίνητοι`);
    if (state.excelEmails.length > 0) parts.push(`${state.excelEmails.length} από Excel`);
    const hasSeg = [
      f.regionIds, f.nomosIds, f.dimosIds, f.cities, f.legalStatuses,
      f.kadCodes, f.trdpGroupIds, f.trdBusinessIds,
    ].some((v) => v && v.length > 0);
    if (hasSeg) parts.push(f.euProgramId ? "ΕΣΠΑ φίλτρα" : "segmentation");
    return parts.length === 0 ? "Καμία επιλογή" : parts.join(" + ");
  })();

  return (
    <>
      <Dialog open={fullOpen} onOpenChange={setFullOpen}>
        <DialogContent className="max-w-4xl w-full h-[92vh] flex flex-col p-0 gap-0 overflow-hidden">
          <DialogHeader className="px-5 py-3 border-b border-[#EDEBE9] bg-[#F3F2F1] shrink-0">
            <DialogTitle className="text-[13px] font-semibold text-[#201F1E]">
              Πλήρης προεπισκόπηση — {state.subject || "Χωρίς θέμα"}
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 overflow-hidden bg-[#F3F2F1] p-4">
            <div className="h-full rounded-lg overflow-hidden border border-[#EDEBE9] shadow bg-white">
              <iframe srcDoc={previewSrc} title="Email preview full" className="border-0 w-full h-full" />
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-5">
        {/* Left: preview */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 bg-white border border-[#EDEBE9] rounded p-0.5">
              {(["desktop", "mobile"] as const).map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setDevice(d)}
                  className={`px-3 py-1 text-[11px] font-semibold rounded ${
                    device === d ? "bg-[#0078D4] text-white" : "text-[#605E5C] hover:bg-[#F3F2F1]"
                  }`}
                >
                  {d === "desktop" ? "Desktop" : "Mobile"}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setFullOpen(true)}
              className="flex items-center gap-1 h-7 px-2.5 rounded border border-[#C8C6C4] bg-white hover:bg-[#F3F2F1] text-[11px] font-semibold text-[#605E5C]"
            >
              <Maximize2Icon className="w-3 h-3" /> Πλήρης προβολή
            </button>
          </div>

          <div className="rounded-lg overflow-hidden border border-[#EDEBE9] shadow-[0_2px_8px_rgba(0,0,0,0.06)] bg-white">
            <div className="bg-[#F3F2F1] border-b border-[#EDEBE9] px-4 py-2.5 space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-semibold text-[#A19F9D] w-12 shrink-0">Από:</span>
                <span className="text-[11px] text-[#201F1E] font-medium truncate">
                  {selectedProfile ? `${selectedProfile.senderName} <${selectedProfile.senderEmail}>` : "—"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-semibold text-[#A19F9D] w-12 shrink-0">Θέμα:</span>
                <span className="text-[11px] text-[#201F1E] font-semibold truncate">{state.subject || "—"}</span>
              </div>
              {state.preheader && (
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-semibold text-[#A19F9D] w-12 shrink-0">Preheader:</span>
                  <span className="text-[11px] text-[#605E5C] truncate">{state.preheader}</span>
                </div>
              )}
            </div>
            <div className="overflow-hidden bg-[#F3F2F1] flex justify-center" style={{ height: 540 }}>
              <iframe
                srcDoc={previewSrc}
                title="Email preview"
                className="border-0 bg-white"
                style={{
                  width: device === "mobile" ? 375 : "100%",
                  height: "100%",
                  maxWidth: device === "mobile" ? 375 : undefined,
                  boxShadow: device === "mobile" ? "0 0 0 1px #EDEBE9" : undefined,
                }}
              />
            </div>
          </div>
        </div>

        {/* Right: summary + spam score */}
        <div className="space-y-3">
          {/* Summary card */}
          <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D]">Σύνοψη</p>
            {[
              ["Εκστρατεία", state.name || "—"],
              ["Θέμα", state.subject || "—"],
              ["Sender", selectedProfile?.presenceName ?? "—"],
              ["Περιεχόμενο", state.inlineTemplate ? `Νέο σχέδιο (${state.inlineTemplate.blocks?.length ?? 0} blocks)` : selectedTemplate?.name ?? "—"],
              ["Πρότυπο βάσης", selectedBase ? selectedBase.name : "—"],
              ["Παραλήπτες", audienceSummary],
              ["Εκτιμώμενοι", recipientCount === null ? "—" : `${recipientCount.toLocaleString("el-GR")}`],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between text-[12px] gap-2">
                <span className="text-[#A19F9D] font-medium shrink-0">{label}</span>
                <span className="text-[#201F1E] font-semibold text-right truncate">{value}</span>
              </div>
            ))}
          </div>

          {/* Spam score */}
          <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D]">Έλεγχος ποιότητας</p>
              <span className={`text-[13px] font-bold ${
                score >= 80 ? "text-emerald-600" : score >= 50 ? "text-amber-600" : "text-red-600"
              }`}>
                {score}%
              </span>
            </div>
            <div className="space-y-1">
              {checks.map((c) => (
                <div key={c.label} className="flex items-start gap-2 text-[11px]">
                  <div className={`w-3.5 h-3.5 rounded-full shrink-0 mt-0.5 flex items-center justify-center ${
                    c.ok ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                  }`}>
                    {c.ok ? "✓" : "!"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={c.ok ? "text-[#605E5C]" : "text-[#201F1E] font-semibold"}>{c.label}</p>
                    {c.note && <p className="text-[10px] text-[#A19F9D]">{c.note}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// ——— Step 6: Final send ———

function StepSend({
  state,
  recipientCount,
  onSend,
  sending,
}: {
  state: WizardState;
  recipientCount: number | null;
  onSend: () => void;
  sending: boolean;
}) {
  const [confirmed, setConfirmed] = React.useState(false);
  const canSend = state.name.trim() && state.subject.trim() && state.senderProfileId && recipientCount && recipientCount > 0;

  return (
    <div className="max-w-xl mx-auto space-y-5">
      <div className="bg-white border border-[#EDEBE9] rounded-lg p-6 space-y-4">
        <div className="flex flex-col items-center text-center space-y-2 pb-4 border-b border-[#EDEBE9]">
          <div className="w-12 h-12 rounded-full bg-[#EFF6FC] border border-[#C7E0F4] flex items-center justify-center">
            <SendIcon className="w-5 h-5 text-[#0078D4]" />
          </div>
          <h2 className="text-[15px] font-bold text-[#201F1E]">Έτοιμοι για αποστολή</h2>
          <p className="text-[12px] text-[#605E5C]">
            Έλεγξτε τα στοιχεία και επιβεβαιώστε για να ξεκινήσει η αποστολή.
          </p>
        </div>

        <div className="space-y-2">
          {[
            ["Όνομα", state.name || "—"],
            ["Θέμα", state.subject || "—"],
            ["Παραλήπτες", recipientCount === null ? "—" : `${recipientCount.toLocaleString("el-GR")}`],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between text-[13px]">
              <span className="text-[#A19F9D]">{label}</span>
              <span className="text-[#201F1E] font-semibold text-right truncate ml-4 max-w-[60%]">{value}</span>
            </div>
          ))}
        </div>

        <label className="flex items-start gap-2 pt-2 border-t border-[#EDEBE9] cursor-pointer">
          <input
            type="checkbox"
            checked={confirmed}
            onChange={(e) => setConfirmed(e.target.checked)}
            className="mt-0.5 w-4 h-4 accent-[#0078D4]"
          />
          <span className="text-[12px] text-[#605E5C]">
            Επιβεβαιώνω ότι έχω ελέγξει το περιεχόμενο και τους παραλήπτες, και θέλω να ξεκινήσει η αποστολή.
          </span>
        </label>

        <Button
          onClick={onSend}
          disabled={sending || !confirmed || !canSend}
          className="w-full h-11 text-sm font-bold bg-[#0078D4] hover:bg-[#106EBE] text-white rounded shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,120,212,0.3)] disabled:opacity-50"
        >
          {sending
            ? <><Loader2Icon className="w-4 h-4 animate-spin mr-2" />Αποστολή…</>
            : <><SendIcon className="w-4 h-4 mr-2" />Αποστολή σε {recipientCount?.toLocaleString("el-GR") ?? 0} παραλήπτες</>}
        </Button>
      </div>
    </div>
  );
}

// ——— Test-send dialog ———

function TestSendDialog({
  open, onOpenChange, state, previewSrc,
}: {
  open: boolean;
  onOpenChange: (o: boolean) => void;
  state: WizardState;
  previewSrc: string;
}) {
  const [email, setEmail] = React.useState("");
  const [sending, setSending] = React.useState(false);

  const handleSend = async () => {
    const to = email.trim();
    if (!to) { toast.error("Εισάγετε διεύθυνση email"); return; }
    setSending(true);
    try {
      const result = await sendNewsletterTestEmail({
        templateId: state.inlineTemplate ? null : state.templateId,
        inlineHtml: state.inlineTemplate ? previewSrc : null,
        baseTemplateId: state.baseTemplateId,
        baseTemplatePatches: Object.keys(state.baseTemplatePatches).length > 0 ? state.baseTemplatePatches : null,
        senderProfileId: state.senderProfileId,
        subject: state.subject || "Newsletter preview",
        to,
      });
      if (result.success) {
        toast.success(`Δοκιμαστικό στάλθηκε στο ${to}`);
        onOpenChange(false);
      } else toast.error(result.error ?? "Αποτυχία");
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Αποτυχία");
    } finally {
      setSending(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-sm">Αποστολή δοκιμαστικού email</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            className="h-9 text-sm"
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <Button
            onClick={handleSend}
            disabled={sending || !email.trim()}
            className="w-full h-9 text-sm bg-[#0078D4] hover:bg-[#106EBE] text-white"
          >
            {sending ? <Loader2Icon className="w-3.5 h-3.5 animate-spin mr-1.5" /> : <MailIcon className="w-3.5 h-3.5 mr-1.5" />}
            Αποστολή
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// ——— Main wizard ———

export function NewsletterWizardClient({
  templates,
  baseTemplates,
  baseSettings,
  euPrograms,
  senderProfiles: initialSenderProfiles,
  subscriberCount,
}: {
  templates: NewsletterWizardTemplate[];
  baseTemplates: NewsletterWizardBaseTemplate[];
  baseSettings: NewsletterWizardBaseSettings;
  euPrograms: NewsletterWizardEuProgram[];
  senderProfiles: NewsletterWizardSenderProfile[];
  subscriberCount: number;
}) {
  const router = useRouter();
  const [step, setStep] = React.useState(1);
  const [senderProfiles, setSenderProfiles] = React.useState(initialSenderProfiles);
  const handleCompanyCreated = React.useCallback((p: NewsletterWizardSenderProfile) => {
    setSenderProfiles((prev) => [p, ...prev]);
  }, []);
  const [sending, setSending] = React.useState(false);
  const [testOpen, setTestOpen] = React.useState(false);
  const [previewOpen, setPreviewOpen] = React.useState(false);

  // Live recipient count tracked in the persistent header.
  const [recipientCount, setRecipientCount] = React.useState<number | null>(null);
  const [recipientLoading, setRecipientLoading] = React.useState(false);

  const [state, setState] = React.useState<WizardState>({
    name: "",
    subject: "",
    preheader: "",
    senderProfileId: null,
    templateId: null,
    inlineTemplate: null,
    baseTemplateId: null,
    baseTemplatePatches: {},
    filters: {},
    excelEmails: [],
    excelFileName: "",
  });

  const onChange = React.useCallback((patch: Partial<WizardState>) => {
    setState((prev) => ({ ...prev, ...patch }));
  }, []);

  // Debounced live recipient count whenever filters/audience changes.
  React.useEffect(() => {
    if (!state.filters.audienceSource) {
      setRecipientCount(null);
      return;
    }
    setRecipientLoading(true);
    const handle = setTimeout(async () => {
      try {
        const { count } = await estimateNewsletterRecipients(state.filters);
        setRecipientCount(count);
      } catch {
        setRecipientCount(null);
      } finally {
        setRecipientLoading(false);
      }
    }, 600);
    return () => clearTimeout(handle);
  }, [state.filters]);

  const validateStep = (s: number): boolean => {
    if (s === 1) {
      if (!state.filters.audienceSource) {
        toast.error("Επιλέξτε πηγή παραληπτών");
        return false;
      }
      if (recipientCount !== null && recipientCount === 0) {
        toast.error("Δεν βρέθηκαν παραλήπτες με τα τρέχοντα φίλτρα");
        return false;
      }
    }
    if (s === 4) {
      if (!state.name.trim()) { toast.error("Το όνομα εκστρατείας είναι υποχρεωτικό"); return false; }
      if (!state.subject.trim()) { toast.error("Το θέμα email είναι υποχρεωτικό"); return false; }
      if (!state.senderProfileId) { toast.error("Επιλέξτε εταιρεία αποστολής"); return false; }
    }
    return true;
  };

  const handleNext = () => {
    if (!validateStep(step)) return;
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  };
  const handleBack = () => setStep((s) => Math.max(s - 1, 1));
  const handleJump = (n: number) => {
    if (n <= step) setStep(n);
  };

  const { previewSrc } = useBuiltPreview(state, templates, baseTemplates, senderProfiles, baseSettings);

  const handleSend = async () => {
    setSending(true);
    try {
      let resolvedTemplateId = state.templateId;
      if (state.inlineTemplate && state.inlineTemplate.blocks?.length > 0) {
        const saved = await createNewsletterTemplate({
          name: `[Auto] ${state.name || "Campaign"} ${new Date().toLocaleDateString("el-GR")}`,
          description: "Αυτόματα αποθηκευμένο από τον οδηγό",
          content: state.inlineTemplate,
        });
        resolvedTemplateId = saved.id;
      }

      const campaign = await createNewsletterCampaign({
        name: state.name,
        subject: state.subject,
        templateId: resolvedTemplateId,
        baseTemplateId: state.baseTemplateId,
        baseTemplatePatches: Object.keys(state.baseTemplatePatches).length > 0 ? state.baseTemplatePatches : null,
        senderProfileId: state.senderProfileId,
        filters: {
          ...state.filters,
          directEmails: state.excelEmails.length > 0 ? state.excelEmails : undefined,
        },
      });

      const { count, error: buildError } = await buildCampaignRecipients(campaign.id);
      if (buildError) { toast.error(buildError); setSending(false); return; }

      const result = await sendNewsletterCampaign(campaign.id);
      if (result.errors?.length) result.errors.slice(0, 3).forEach((e) => toast.error(e));
      toast.success(`Εστάλησαν: ${result.sent} / Απέτυχαν: ${result.failed} (σε σύνολο ${count})`);
      router.push("/admin/newsletter/campaigns");
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Αποτυχία αποστολής");
      setSending(false);
    }
  };

  const audienceState: AudienceState = {
    filters: state.filters,
    excelEmails: state.excelEmails,
    excelFileName: state.excelFileName,
  };

  const canPreview = !!(state.baseTemplateId || state.inlineTemplate || state.templateId);

  return (
    <div className="min-h-screen bg-[#F3F2F1]">
      {/* Page header with persistent toolbar */}
      <div className="bg-white border-b border-[#EDEBE9] px-5 py-3 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded bg-[#EFF6FC] border border-[#C7E0F4] flex items-center justify-center shrink-0">
              <Wand2Icon className="w-4 h-4 text-[#0078D4]" />
            </div>
            <div className="min-w-0">
              <h1 className="text-sm font-bold text-[#201F1E] truncate">
                {state.name.trim() || "Νέα Εκστρατεία"}
              </h1>
              <p className="text-[11px] text-[#A19F9D]">
                Βήμα {step} από {TOTAL_STEPS} — {STEP_LABELS[step - 1]}
              </p>
            </div>
          </div>
          <PersistentToolbar
            recipientCount={recipientCount}
            recipientLoading={recipientLoading}
            onPreview={() => setPreviewOpen(true)}
            onTestSend={() => setTestOpen(true)}
            canPreview={canPreview}
            testSending={false}
          />
        </div>
      </div>

      {/* Step indicator */}
      <div className="bg-white border-b border-[#EDEBE9] px-5 py-3">
        <div className="max-w-5xl mx-auto">
          <StepIndicator current={step} onJump={handleJump} />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 max-w-5xl mx-auto">
        <div className="mb-5">
          {step === 1 && (
            <StepAudience
              state={audienceState}
              onChange={(p) => onChange(p as Partial<WizardState>)}
              euPrograms={euPrograms}
              subscriberCount={subscriberCount}
              onEstimate={setRecipientCount}
            />
          )}
          {step === 2 && (
            <StepContent templates={templates} state={state} onChange={onChange} />
          )}
          {step === 3 && (
            <StepBaseTemplate baseTemplates={baseTemplates} state={state} onChange={onChange} />
          )}
          {step === 4 && (
            <StepDetails
              state={state}
              onChange={onChange}
              senderProfiles={senderProfiles}
              onCompanyCreated={handleCompanyCreated}
            />
          )}
          {step === 5 && (
            <StepReview
              state={state}
              templates={templates}
              baseTemplates={baseTemplates}
              senderProfiles={senderProfiles}
              globalBaseSettings={baseSettings}
              recipientCount={recipientCount}
            />
          )}
          {step === 6 && (
            <StepSend
              state={state}
              recipientCount={recipientCount}
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
              Επόμενο: {STEP_LABELS[step]}
            </Button>
          )}
        </div>
      </div>

      {/* Persistent test-send dialog */}
      <TestSendDialog open={testOpen} onOpenChange={setTestOpen} state={state} previewSrc={previewSrc} />

      {/* Persistent preview dialog */}
      <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
        <DialogContent className="max-w-4xl w-full h-[90vh] flex flex-col p-0 gap-0 overflow-hidden">
          <DialogHeader className="px-5 py-3 border-b border-[#EDEBE9] bg-[#F3F2F1] shrink-0">
            <DialogTitle className="text-[13px] font-semibold text-[#201F1E]">
              Προεπισκόπηση email — {state.subject || "Χωρίς θέμα"}
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 overflow-hidden bg-[#F3F2F1] p-4">
            <div className="h-full rounded-lg overflow-hidden border border-[#EDEBE9] shadow bg-white">
              <iframe srcDoc={previewSrc} title="Email preview" className="border-0 w-full h-full" />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
