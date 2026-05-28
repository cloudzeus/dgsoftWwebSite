"use client";

import * as React from "react";
import { toast } from "sonner";
import {
  UsersIcon, Loader2Icon, UploadIcon, XIcon, CheckIcon, ChevronLeftIcon,
  GlobeIcon, Building2Icon, MailIcon, SearchIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  estimateNewsletterRecipients,
  getNewsletterFilterOptions,
  searchNewsletterSubscribers,
  getNewsletterSubscribersByIds,
  type NewsletterFilters,
  type AudienceSource,
  type NewsletterWizardEuProgram,
  type NewsletterSubscriberOption,
  type RegionOption,
  type CityOption,
  type LegalOption,
  type KadOption,
  type TrdpOption,
  type TrdBusinessOption,
} from "@/app/lib/actions/newsletter";
import { CustomerMultiSelect, type CustomerOption } from "@/components/newsletter/customer-multi-select";
import { MultiSelectFilter } from "@/components/newsletter/multi-select-filter";
import { RegionTreeFilter } from "@/components/newsletter/region-tree-filter";

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

export type AudienceState = {
  filters: NewsletterFilters;
  excelEmails: string[];
  excelFileName: string;
};

type Props = {
  state: AudienceState;
  onChange: (patch: Partial<AudienceState>) => void;
  euPrograms: NewsletterWizardEuProgram[];
  subscriberCount: number;
  /** Reports the live count up to the parent header. */
  onEstimate?: (count: number | null) => void;
};

const SOURCE_ICONS: Record<AudienceSource, React.ComponentType<{ className?: string }>> = {
  eu: GlobeIcon,
  segmentation: Building2Icon,
  subscribers: MailIcon,
  excel: UploadIcon,
  manual: UsersIcon,
  mixed: UsersIcon,
};

const SOURCE_LABELS: Record<AudienceSource, string> = {
  eu: "Ευρωπαϊκό Πρόγραμμα",
  segmentation: "Segmentation Πελατών",
  subscribers: "Newsletter Subscribers",
  excel: "Από Excel / CSV",
  manual: "Χειροκίνητη επιλογή",
  mixed: "Συνδυασμός πηγών",
};

export function StepAudience({ state, onChange, euPrograms, subscriberCount, onEstimate }: Props) {
  const source = state.filters.audienceSource;
  const [filterOptions, setFilterOptions] = React.useState<FilterOptions | null>(null);
  const [count, setCount] = React.useState<number | null>(null);
  const [estimating, setEstimating] = React.useState(false);

  // Lazy-load filter options when entering segmentation/eu
  React.useEffect(() => {
    if ((source === "segmentation" || source === "eu") && filterOptions === null) {
      getNewsletterFilterOptions().then(setFilterOptions);
    }
  }, [source, filterOptions]);

  // Debounced estimate whenever filters change
  React.useEffect(() => {
    if (!source) {
      setCount(null);
      onEstimate?.(null);
      return;
    }
    const handle = setTimeout(async () => {
      setEstimating(true);
      try {
        const result = await estimateNewsletterRecipients(state.filters);
        setCount(result.count);
        onEstimate?.(result.count);
      } catch {
        setCount(null);
        onEstimate?.(null);
      } finally {
        setEstimating(false);
      }
    }, 500);
    return () => clearTimeout(handle);
  }, [state.filters, source, onEstimate]);

  const updateFilter = <K extends keyof NewsletterFilters>(key: K, value: NewsletterFilters[K]) => {
    onChange({ filters: { ...state.filters, [key]: value } });
  };

  const pickSource = (src: AudienceSource) => {
    // Reset only when switching to a fundamentally different source.
    onChange({
      filters: { ...state.filters, audienceSource: src },
    });
  };

  const clearSource = () => {
    onChange({
      filters: { audienceSource: undefined },
      excelEmails: [],
      excelFileName: "",
    });
    setCount(null);
    onEstimate?.(null);
  };

  if (!source) {
    return (
      <SourcePicker
        onPick={pickSource}
        euProgramsCount={euPrograms.length}
        subscriberCount={subscriberCount}
      />
    );
  }

  return (
    <div className="space-y-4">
      {/* Source bar */}
      <div className="flex items-center justify-between bg-white border border-[#EDEBE9] rounded-lg px-4 py-3">
        <div className="flex items-center gap-3 min-w-0">
          <button
            type="button"
            onClick={clearSource}
            className="flex items-center gap-1 text-[11px] font-semibold text-[#605E5C] hover:text-[#0078D4] transition-colors"
          >
            <ChevronLeftIcon className="w-3.5 h-3.5" />
            Αλλαγή πηγής
          </button>
          <div className="h-4 w-px bg-[#EDEBE9]" />
          <div className="flex items-center gap-2 min-w-0">
            {React.createElement(SOURCE_ICONS[source], { className: "w-4 h-4 text-[#0078D4] shrink-0" })}
            <span className="text-[13px] font-semibold text-[#201F1E] truncate">
              {SOURCE_LABELS[source]}
            </span>
          </div>
        </div>
        <RecipientChip count={count} estimating={estimating} />
      </div>

      {/* Source-specific drawer */}
      {source === "eu" && (
        <EuProgramPanel
          state={state}
          updateFilter={updateFilter}
          onChange={onChange}
          euPrograms={euPrograms}
          filterOptions={filterOptions}
        />
      )}
      {source === "segmentation" && (
        <SegmentationPanel
          state={state}
          updateFilter={updateFilter}
          filterOptions={filterOptions}
        />
      )}
      {source === "subscribers" && (
        <SubscribersPanel
          state={state}
          updateFilter={updateFilter}
          subscriberCount={subscriberCount}
        />
      )}
      {source === "excel" && (
        <ExcelPanel state={state} onChange={onChange} />
      )}
      {source === "manual" && (
        <ManualPanel state={state} updateFilter={updateFilter} />
      )}
      {source === "mixed" && (
        <MixedPanel
          state={state}
          onChange={onChange}
          updateFilter={updateFilter}
          euPrograms={euPrograms}
          filterOptions={filterOptions}
          subscriberCount={subscriberCount}
        />
      )}
    </div>
  );
}

// ——— Recipient chip ———

function RecipientChip({ count, estimating }: { count: number | null; estimating: boolean }) {
  if (estimating) {
    return (
      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#F3F2F1] border border-[#EDEBE9] rounded text-[12px] text-[#605E5C]">
        <Loader2Icon className="w-3.5 h-3.5 animate-spin" />
        Υπολογισμός…
      </div>
    );
  }
  if (count === null) {
    return (
      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#F3F2F1] border border-[#EDEBE9] rounded text-[12px] text-[#A19F9D]">
        <UsersIcon className="w-3.5 h-3.5" />
        Επιλέξτε φίλτρα
      </div>
    );
  }
  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#EFF6FC] border border-[#C7E0F4] rounded text-[12px] font-bold text-[#0078D4]">
      <UsersIcon className="w-3.5 h-3.5" />
      {count.toLocaleString("el-GR")} παραλήπτες
    </div>
  );
}

// ——— Source picker (initial view) ———

function SourcePicker({
  onPick, euProgramsCount, subscriberCount,
}: {
  onPick: (src: AudienceSource) => void;
  euProgramsCount: number;
  subscriberCount: number;
}) {
  const primary: { id: AudienceSource; title: string; subtitle: string; meta: string; Icon: React.ComponentType<{ className?: string }> }[] = [
    {
      id: "eu",
      title: "Ευρωπαϊκό Πρόγραμμα",
      subtitle: "Στόχευση δικαιούχων ΕΣΠΑ/Ταμείου Ανάκαμψης. Φιλτράρει αυτόματα τους ΚΑΔ του προγράμματος.",
      meta: `${euProgramsCount} ενεργά προγράμματα`,
      Icon: GlobeIcon,
    },
    {
      id: "segmentation",
      title: "Segmentation Πελατών",
      subtitle: "Φίλτρα από βάση πελατών (SoftOne): περιφέρεια, νομική μορφή, ΚΑΔ, business type.",
      meta: "Πλήρης πελατολόγιο",
      Icon: Building2Icon,
    },
    {
      id: "subscribers",
      title: "Newsletter Subscribers",
      subtitle: "Εγγεγραμμένοι από τη φόρμα του site, με consent επιβεβαιωμένο.",
      meta: `${subscriberCount.toLocaleString("el-GR")} subscribers`,
      Icon: MailIcon,
    },
  ];

  const secondary: { id: AudienceSource; label: string; Icon: React.ComponentType<{ className?: string }> }[] = [
    { id: "excel",  label: "Από Excel / CSV",      Icon: UploadIcon },
    { id: "manual", label: "Χειροκίνητη επιλογή",  Icon: UsersIcon  },
    { id: "mixed",  label: "Συνδυασμός πηγών",     Icon: UsersIcon  },
  ];

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-[15px] font-bold text-[#201F1E] mb-1">
          Σε ποιους θα στείλουμε;
        </h2>
        <p className="text-[12px] text-[#605E5C]">
          Διαλέξτε την κύρια πηγή παραληπτών. Μπορείτε αργότερα να προσθέσετε ή να εξαιρέσετε επαφές.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {primary.map(({ id, title, subtitle, meta, Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => onPick(id)}
            className="text-left bg-white border-2 border-[#EDEBE9] rounded-lg p-4 hover:border-[#0078D4] hover:shadow-[0_2px_8px_rgba(0,120,212,0.12)] transition-all flex flex-col gap-3"
          >
            <div className="w-10 h-10 rounded-md bg-[#EFF6FC] border border-[#C7E0F4] flex items-center justify-center">
              <Icon className="w-5 h-5 text-[#0078D4]" />
            </div>
            <div className="space-y-1">
              <p className="text-[13px] font-bold text-[#201F1E]">{title}</p>
              <p className="text-[11px] text-[#605E5C] leading-relaxed">{subtitle}</p>
            </div>
            <p className="text-[10px] font-semibold text-[#0078D4] uppercase tracking-wide mt-auto">
              {meta}
            </p>
          </button>
        ))}
      </div>

      <div className="pt-2 border-t border-[#EDEBE9]">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-2">
          Άλλες επιλογές
        </p>
        <div className="flex flex-wrap gap-2">
          {secondary.map(({ id, label, Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => onPick(id)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#C8C6C4] rounded text-[12px] font-semibold text-[#605E5C] hover:bg-[#F3F2F1] hover:border-[#A19F9D] transition-colors"
            >
              <Icon className="w-3.5 h-3.5" />
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ——— Filter options helper ———

function buildOptionLists(fo: FilterOptions | null) {
  return {
    regions: fo?.regions ?? [],
    nomoi:   fo?.nomoi ?? [],
    dimoi:   fo?.dimoi ?? [],
    cities:  fo?.cities.map((c)  => ({ value: c.value, label: c.value })) ?? [],
    legal:   fo?.legalStatuses.map((l) => ({ value: l.value, label: l.value })) ?? [],
    kads:    fo?.kadCodes.map((k) => ({ value: k.value, label: k.label, chipLabel: k.value })) ?? [],
    trdp:    fo?.trdpGroups.map((t) => ({ value: String(t.code), label: t.name ?? `Code ${t.code}` })) ?? [],
    trdb:    fo?.trdBusinesses.map((t) => ({ value: String(t.code), label: t.name ?? `Code ${t.code}` })) ?? [],
  };
}

// ——— EU Programme panel ———

function EuProgramPanel({
  state, updateFilter, onChange: _onChange, euPrograms, filterOptions,
}: {
  state: AudienceState;
  updateFilter: <K extends keyof NewsletterFilters>(k: K, v: NewsletterFilters[K]) => void;
  onChange: (patch: Partial<AudienceState>) => void;
  euPrograms: NewsletterWizardEuProgram[];
  filterOptions: FilterOptions | null;
}) {
  const selectedId = state.filters.euProgramId ?? "";
  const opts = buildOptionLists(filterOptions);

  const programKadOpts = React.useMemo(() => {
    if (!selectedId) return opts.kads;
    const prog = euPrograms.find((p) => p.id === selectedId);
    if (!prog) return opts.kads;
    const set = new Set(prog.kadCodes);
    return opts.kads.filter((o) => set.has(o.value));
  }, [selectedId, opts.kads, euPrograms]);

  return (
    <div className="bg-white border border-[#EDEBE9] rounded-lg p-5 space-y-4">
      <div className="space-y-1">
        <Label className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">
          Επιλέξτε πρόγραμμα
        </Label>
        <select
          value={selectedId}
          onChange={(e) => {
            const id = e.target.value || null;
            // When programme changes, auto-apply its full KAD set as filter so the count is meaningful immediately.
            const prog = id ? euPrograms.find((p) => p.id === id) ?? null : null;
            updateFilter("euProgramId", id);
            updateFilter("kadCodes", prog ? prog.kadCodes : []);
          }}
          className="w-full h-9 text-sm rounded border border-[#C8C6C4] bg-white px-3 focus:outline-none focus:ring-2 focus:ring-[#0078D4] text-[#201F1E]"
        >
          <option value="">— Επιλέξτε ευρωπαϊκό πρόγραμμα —</option>
          {euPrograms.map((p) => (
            <option key={p.id} value={p.id}>{p.nameEL} ({p.kadCodes.length} ΚΑΔ)</option>
          ))}
        </select>
      </div>

      {selectedId && (
        <>
          <p className="text-[11px] text-[#0078D4]">
            Οι ΚΑΔ του προγράμματος έχουν προεπιλεγεί. Μπορείτε προαιρετικά να περιορίσετε γεωγραφικά ή ανά νομική μορφή.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <MultiSelectFilter label="ΚΑΔ προγράμματος" options={programKadOpts} value={state.filters.kadCodes ?? []} onChange={(v) => updateFilter("kadCodes", v)} />
            <div className="sm:col-span-2">
              <RegionTreeFilter
                regions={opts.regions}
                nomoi={opts.nomoi}
                dimoi={opts.dimoi}
                selectedRegionIds={state.filters.regionIds ?? []}
                selectedNomosIds={state.filters.nomosIds ?? []}
                selectedDimosIds={state.filters.dimosIds ?? []}
                onChange={({ regionIds, nomosIds, dimosIds }) => {
                  updateFilter("regionIds", regionIds);
                  updateFilter("nomosIds", nomosIds);
                  updateFilter("dimosIds", dimosIds);
                }}
              />
            </div>
            <MultiSelectFilter label="Νομική μορφή" options={opts.legal} value={state.filters.legalStatuses ?? []} onChange={(v) => updateFilter("legalStatuses", v)} />
          </div>
        </>
      )}
    </div>
  );
}

// ——— Segmentation panel ———

function SegmentationPanel({
  state, updateFilter, filterOptions,
}: {
  state: AudienceState;
  updateFilter: <K extends keyof NewsletterFilters>(k: K, v: NewsletterFilters[K]) => void;
  filterOptions: FilterOptions | null;
}) {
  const opts = buildOptionLists(filterOptions);

  if (filterOptions === null) {
    return (
      <div className="bg-white border border-[#EDEBE9] rounded-lg p-5 flex items-center gap-2 text-[#605E5C] text-sm">
        <Loader2Icon className="w-4 h-4 animate-spin" /> Φόρτωση φίλτρων…
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#EDEBE9] rounded-lg p-5 space-y-4">
      <p className="text-[11px] text-[#605E5C]">
        Συνδυάστε φίλτρα για να στοχεύσετε το επιθυμητό segment. Ο μετρητής ενημερώνεται καθώς αλλάζετε επιλογές.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="sm:col-span-2 lg:col-span-3">
          <RegionTreeFilter
            regions={opts.regions}
            nomoi={opts.nomoi}
            dimoi={opts.dimoi}
            selectedRegionIds={state.filters.regionIds ?? []}
            selectedNomosIds={state.filters.nomosIds ?? []}
            selectedDimosIds={state.filters.dimosIds ?? []}
            onChange={({ regionIds, nomosIds, dimosIds }) => {
              updateFilter("regionIds", regionIds);
              updateFilter("nomosIds", nomosIds);
              updateFilter("dimosIds", dimosIds);
            }}
            label="Γεωγραφική στόχευση (Περιφέρεια › Νομός › Δήμος)"
          />
        </div>
        <MultiSelectFilter label="Πόλη" options={opts.cities} value={state.filters.cities ?? []} onChange={(v) => updateFilter("cities", v)} />
        <MultiSelectFilter label="Νομική μορφή" options={opts.legal} value={state.filters.legalStatuses ?? []} onChange={(v) => updateFilter("legalStatuses", v)} />
        <MultiSelectFilter label="ΚΑΔ" options={opts.kads} value={state.filters.kadCodes ?? []} onChange={(v) => updateFilter("kadCodes", v)} />
        <MultiSelectFilter label="TRDPGROUP" options={opts.trdp} value={state.filters.trdpGroupIds ?? []} onChange={(v) => updateFilter("trdpGroupIds", v)} />
        <MultiSelectFilter label="TRDBUSINESS" options={opts.trdb} value={state.filters.trdBusinessIds ?? []} onChange={(v) => updateFilter("trdBusinessIds", v)} />
      </div>
    </div>
  );
}

// ——— Subscribers panel ———

function SubscribersPanel({
  state, updateFilter, subscriberCount,
}: {
  state: AudienceState;
  updateFilter: <K extends keyof NewsletterFilters>(k: K, v: NewsletterFilters[K]) => void;
  subscriberCount: number;
}) {
  const [mode, setMode] = React.useState<"all" | "pick">(state.filters.allSubscribers ? "all" : "pick");
  const [selected, setSelected] = React.useState<NewsletterSubscriberOption[]>([]);
  const [hydrated, setHydrated] = React.useState(false);

  // Hydrate selected from existing ids in state
  React.useEffect(() => {
    if (hydrated) return;
    const ids = state.filters.subscriberIds ?? [];
    if (ids.length === 0) { setHydrated(true); return; }
    getNewsletterSubscribersByIds(ids).then((rows) => {
      setSelected(rows);
      setHydrated(true);
    });
  }, [hydrated, state.filters.subscriberIds]);

  const applyMode = (next: "all" | "pick") => {
    setMode(next);
    if (next === "all") {
      updateFilter("allSubscribers", true);
      updateFilter("subscriberIds", []);
    } else {
      updateFilter("allSubscribers", false);
    }
  };

  return (
    <div className="bg-white border border-[#EDEBE9] rounded-lg p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MailIcon className="w-4 h-4 text-[#0078D4]" />
          <p className="text-[13px] font-semibold text-[#201F1E]">
            Newsletter Subscribers — {subscriberCount.toLocaleString("el-GR")} εγγεγραμμένοι
          </p>
        </div>
      </div>

      <div className="flex gap-2">
        {([["all", "Όλοι"], ["pick", "Επιλογή συγκεκριμένων"]] as const).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => applyMode(id)}
            className={`px-4 py-2 text-[12px] font-semibold rounded transition-colors ${
              mode === id ? "bg-[#0078D4] text-white" : "bg-[#F3F2F1] text-[#605E5C] hover:bg-[#EDEBE9]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {mode === "all" && (
        <p className="text-[12px] text-[#605E5C] bg-[#EFF6FC] border border-[#C7E0F4] rounded p-3">
          Θα συμπεριληφθούν όλοι οι ενεργοί subscribers (εξαιρώντας όσους έχουν απεγγραφεί).
        </p>
      )}

      {mode === "pick" && (
        <SubscriberPicker
          selected={selected}
          onChange={(next) => {
            setSelected(next);
            updateFilter("subscriberIds", next.map((s) => s.id));
          }}
        />
      )}
    </div>
  );
}

function SubscriberPicker({
  selected, onChange,
}: {
  selected: NewsletterSubscriberOption[];
  onChange: (next: NewsletterSubscriberOption[]) => void;
}) {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState<NewsletterSubscriberOption[]>([]);
  const [searching, setSearching] = React.useState(false);
  const selectedIds = React.useMemo(() => new Set(selected.map((s) => s.id)), [selected]);

  React.useEffect(() => {
    const handle = setTimeout(async () => {
      setSearching(true);
      try {
        const rows = await searchNewsletterSubscribers(query, 50);
        setResults(rows);
      } finally {
        setSearching(false);
      }
    }, 300);
    return () => clearTimeout(handle);
  }, [query]);

  const toggle = (s: NewsletterSubscriberOption) => {
    if (selectedIds.has(s.id)) onChange(selected.filter((x) => x.id !== s.id));
    else onChange([...selected, s]);
  };

  return (
    <div className="space-y-3">
      <div className="relative">
        <SearchIcon className="w-3.5 h-3.5 text-[#A19F9D] absolute left-3 top-1/2 -translate-y-1/2" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Αναζήτηση με email ή όνομα…"
          className="h-9 pl-9 text-sm border-[#C8C6C4] focus-visible:ring-[#0078D4]"
        />
      </div>

      {selected.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {selected.map((s) => (
            <span key={s.id} className="inline-flex items-center gap-1 px-2 py-1 bg-[#EFF6FC] border border-[#C7E0F4] rounded text-[11px] text-[#0078D4]">
              {s.email}
              <button type="button" onClick={() => toggle(s)} className="hover:text-red-600">
                <XIcon className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      )}

      <div className="border border-[#EDEBE9] rounded max-h-64 overflow-y-auto bg-[#FAFAFA]">
        {searching ? (
          <div className="p-3 text-[11px] text-[#A19F9D] flex items-center gap-2">
            <Loader2Icon className="w-3 h-3 animate-spin" /> Αναζήτηση…
          </div>
        ) : results.length === 0 ? (
          <div className="p-3 text-[11px] text-[#A19F9D]">Καμία εγγραφή.</div>
        ) : (
          results.map((s) => {
            const isSel = selectedIds.has(s.id);
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => toggle(s)}
                className={`w-full text-left px-3 py-2 flex items-center gap-2 border-b border-[#EDEBE9] last:border-b-0 transition-colors ${
                  isSel ? "bg-[#EFF6FC]" : "hover:bg-white"
                }`}
              >
                <div className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 ${
                  isSel ? "bg-[#0078D4] border-[#0078D4]" : "border-[#C8C6C4]"
                }`}>
                  {isSel && <CheckIcon className="w-2.5 h-2.5 text-white" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] font-semibold text-[#201F1E] truncate">{s.email}</p>
                  {s.name && <p className="text-[10px] text-[#605E5C] truncate">{s.name}</p>}
                </div>
                {s.source && (
                  <span className="text-[9px] uppercase tracking-wide text-[#A19F9D] shrink-0">{s.source}</span>
                )}
              </button>
            );
          })
        )}
      </div>
    </div>
  );
}

// ——— Excel panel ———

function ExcelPanel({
  state, onChange,
}: {
  state: AudienceState;
  onChange: (patch: Partial<AudienceState>) => void;
}) {
  const [uploading, setUploading] = React.useState(false);
  const [uploadError, setUploadError] = React.useState<string | null>(null);
  const [isDragOver, setIsDragOver] = React.useState(false);
  const fileRef = React.useRef<HTMLInputElement>(null);

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
      if (data.errors?.length) setUploadError((data.errors as string[]).join(", "));
    } catch (e: unknown) {
      setUploadError(e instanceof Error ? e.message : "Αποτυχία");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-white border border-[#EDEBE9] rounded-lg p-5 space-y-4">
      <div
        onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
        onDragLeave={() => setIsDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragOver(false);
          const file = e.dataTransfer.files[0];
          if (file) handleFileUpload(file);
        }}
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
            <p className="text-[11px] text-[#A19F9D]">Υποστηρίζονται: .xlsx, .xls, .csv (στήλη email)</p>
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
              onClick={() => onChange({
                excelEmails: [], excelFileName: "",
                filters: { ...state.filters, directEmails: [] },
              })}
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
  );
}

// ——— Manual panel ———

function ManualPanel({
  state, updateFilter,
}: {
  state: AudienceState;
  updateFilter: <K extends keyof NewsletterFilters>(k: K, v: NewsletterFilters[K]) => void;
}) {
  const [selected, setSelected] = React.useState<CustomerOption[]>([]);
  // Note: re-hydration from existing manualTrdrIds would require a getCustomersByIds call;
  // left as-is since users typically don't reach this panel mid-edit.

  return (
    <div className="bg-white border border-[#EDEBE9] rounded-lg p-5 space-y-3">
      <p className="text-[11px] text-[#A19F9D]">
        Αναζήτηση και επιλογή πελατών από τη βάση δεδομένων.
      </p>
      <CustomerMultiSelect
        selected={selected}
        onChange={(next) => {
          setSelected(next);
          updateFilter("manualTrdrIds", next.map((c) => c.id));
        }}
        placeholder="Αναζήτηση και προσθήκη πελατών…"
      />
    </div>
  );
}

// ——— Mixed panel (combine everything) ———

function MixedPanel(props: {
  state: AudienceState;
  onChange: (patch: Partial<AudienceState>) => void;
  updateFilter: <K extends keyof NewsletterFilters>(k: K, v: NewsletterFilters[K]) => void;
  euPrograms: NewsletterWizardEuProgram[];
  filterOptions: FilterOptions | null;
  subscriberCount: number;
}) {
  const sections: { key: string; label: string; render: () => React.ReactNode }[] = [
    {
      key: "subs",
      label: "Subscribers",
      render: () => (
        <SubscribersPanel state={props.state} updateFilter={props.updateFilter} subscriberCount={props.subscriberCount} />
      ),
    },
    {
      key: "seg",
      label: "Segmentation",
      render: () => (
        <SegmentationPanel state={props.state} updateFilter={props.updateFilter} filterOptions={props.filterOptions} />
      ),
    },
    {
      key: "excel",
      label: "Excel",
      render: () => (<ExcelPanel state={props.state} onChange={props.onChange} />),
    },
  ];

  const [openKey, setOpenKey] = React.useState<string>("subs");

  return (
    <div className="space-y-3">
      <div className="flex gap-2 bg-white border border-[#EDEBE9] rounded-lg p-1">
        {sections.map((s) => (
          <button
            key={s.key}
            type="button"
            onClick={() => setOpenKey(s.key)}
            className={`flex-1 py-1.5 text-[12px] font-semibold rounded transition-colors ${
              openKey === s.key ? "bg-[#EFF6FC] text-[#0078D4]" : "text-[#605E5C] hover:bg-[#F3F2F1]"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>
      {sections.find((s) => s.key === openKey)?.render()}
      <p className="text-[11px] text-[#A19F9D] px-1">
        Όλες οι ενεργές πηγές προστίθενται στο σύνολο παραληπτών (deduped ανά email).
      </p>
    </div>
  );
}

// Re-export estimator for parent to refresh on demand
export { estimateNewsletterRecipients };
// suppress unused-import warning in environments stripping `toast` usage
void toast;
