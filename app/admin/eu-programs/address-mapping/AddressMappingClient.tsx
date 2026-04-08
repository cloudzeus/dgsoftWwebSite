"use client";

import * as React from "react";
import {
  MapPin,
  Loader2,
  CheckCircle2,
  Edit3,
  Sparkles,
  Save,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { toast } from "sonner";
import {
  type DistinctAddressRow,
  type PeriferiaOption,
  runSuggestAndSave,
  saveAddressMapping,
  setAddressMappingConfirmed,
  suggestAndSaveGroup,
  getDistinctCustomerAddresses,
} from "@/app/lib/actions/address-region";
import { getCityZipGroupKey } from "@/lib/address-region-utils";
import { useRouter } from "next/navigation";

type Props = {
  initialAddresses: DistinctAddressRow[];
  periferiesOptions: PeriferiaOption[];
};

export function AddressMappingClient({
  initialAddresses,
  periferiesOptions,
}: Props) {
  const router = useRouter();
  const [addresses, setAddresses] = React.useState<DistinctAddressRow[]>(initialAddresses);
  const [editingKey, setEditingKey] = React.useState<string | null>(null);

  React.useEffect(() => {
    setAddresses(initialAddresses);
  }, [initialAddresses]);
  const [suggestingKey, setSuggestingKey] = React.useState<string | null>(null);
  const [savingKey, setSavingKey] = React.useState<string | null>(null);
  const [selectedPeriferia, setSelectedPeriferia] = React.useState<Record<string, string>>({});

  const handleSuggest = async (row: DistinctAddressRow) => {
    setSuggestingKey(row.addressKey);
    try {
      const result = await runSuggestAndSave(row);
      if (result.success) {
        toast.success(
          result.periferiaId
            ? "Mapping suggested and saved. Confirm or edit below."
            : "No match (outside Greece or ambiguous)."
        );
        router.refresh();
      } else {
        toast.error(result.error ?? "Suggestion failed");
      }
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Suggestion failed");
    } finally {
      setSuggestingKey(null);
    }
  };

  const handleSave = async (row: DistinctAddressRow, periferiaId: string) => {
    setSavingKey(row.addressKey);
    try {
      const result = await saveAddressMapping({
        addressKey: row.addressKey,
        rawAddress: row.rawAddress,
        rawCity: row.rawCity,
        rawZip: row.rawZip,
        countryCode: row.countryCode,
        latitude: row.latitude,
        longitude: row.longitude,
        periferiaId,
        confirmed: row.confirmed,
      });
      if (result.success) {
        toast.success("Mapping saved");
        setEditingKey(null);
        router.refresh();
      } else {
        toast.error(result.error ?? "Save failed");
      }
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Save failed");
    } finally {
      setSavingKey(null);
    }
  };

  const handleConfirm = async (row: DistinctAddressRow, confirmed: boolean) => {
    try {
      const result = await setAddressMappingConfirmed(row.addressKey, confirmed);
      if (result.success) {
        toast.success(confirmed ? "Marked as confirmed" : "Unconfirmed");
        router.refresh();
      } else {
        toast.error(result.error ?? "Update failed");
      }
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Update failed");
    }
  };

  const handleSuggestAll = async () => {
    const toRun = addresses.filter((a) => !a.periferiaId);
    if (toRun.length === 0) {
      toast.info("All addresses already have a mapping. Nothing to suggest.");
      return;
    }
    const groups = new Map<string, DistinctAddressRow[]>();
    for (const row of toRun) {
      const key = getCityZipGroupKey(row.rawCity, row.rawZip);
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key)!.push(row);
    }
    const groupList = Array.from(groups.values());
    const tid = toast.loading(`Area 1 / ${groupList.length} (1 query per city+zip)…`);
    let totalSaved = 0;
    let failedError: string | null = null;
    for (let i = 0; i < groupList.length; i++) {
      const group = groupList[i];
      setSuggestingKey(group[0]?.addressKey ?? null);
      toast.loading(`Area ${i + 1} / ${groupList.length}: ${group.length} address(es)…`, { id: tid });
      try {
        const result = await suggestAndSaveGroup(group);
        if (result.success) {
          totalSaved += result.saved;
        } else {
          failedError = result.error ?? "AI suggestion failed";
          toast.error(failedError, { id: tid, duration: 8000 });
          break;
        }
      } catch (e) {
        failedError = e instanceof Error ? e.message : "Suggest failed";
        toast.error(failedError, { id: tid, duration: 8000 });
        break;
      }
      await new Promise((r) => setTimeout(r, 300));
    }
    setSuggestingKey(null);
    if (failedError == null) {
      toast.success(`Saved ${totalSaved} mapping(s) in ${groupList.length} area(s).`, { id: tid, duration: 4000 });
    }
    try {
      const fresh = await getDistinctCustomerAddresses();
      setAddresses(fresh);
    } catch (_) {}
    router.refresh();
  };

  return (
    <div className="flex min-h-0 flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2 rounded-xl border border-primary/10 bg-gradient-to-r from-violet-500/5 via-transparent to-emerald-500/5 px-3 py-2.5 shadow-sm">
        <Button
          size="sm"
          variant="outline"
          onClick={handleSuggestAll}
          className="h-8 gap-1.5 border-emerald-500/25 bg-gradient-to-r from-emerald-500/12 to-teal-500/8 text-[11px] font-medium text-emerald-900 hover:from-emerald-500/18 hover:to-teal-500/12 dark:text-emerald-100 dark:from-emerald-500/15 dark:to-teal-500/10"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Suggest all with AI
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => router.refresh()}
          className="h-8 gap-1.5 text-[11px] border-slate-200/80 bg-background/80 hover:bg-muted/50 dark:border-slate-700"
        >
          <RefreshCw className="h-3.5 w-3.5" />
          Refresh
        </Button>
        <span className="ml-auto text-[10px] text-muted-foreground tabular-nums">
          {addresses.length} distinct address{addresses.length !== 1 ? "es" : ""}
        </span>
      </div>

      <div className="min-h-0 flex-1 space-y-3 overflow-auto pb-4">
        {addresses.length === 0 ? (
          <Card className="overflow-hidden rounded-2xl border border-primary/15 bg-gradient-to-br from-slate-50/80 via-card to-violet-50/20 dark:from-slate-950 dark:via-card dark:to-violet-950/15 shadow-md">
            <div className="h-0.5 w-full bg-gradient-to-r from-violet-400/60 to-emerald-400/60" aria-hidden />
            <CardContent className="flex flex-col items-center gap-2 py-14 text-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted/80 text-muted-foreground ring-1 ring-border">
                <MapPin className="h-5 w-5" />
              </span>
              <p className="text-[13px] font-medium text-foreground">No distinct addresses</p>
              <p className="max-w-sm text-[11px] leading-relaxed text-muted-foreground">
                Sync customers from ERP first, then return here to map regions.
              </p>
            </CardContent>
          </Card>
        ) : (
          addresses.map((row) => (
            <Card
              key={row.addressKey}
              className="group overflow-hidden rounded-2xl border border-primary/12 bg-card/80 shadow-md shadow-primary/5 transition-all hover:border-primary/20 hover:shadow-lg"
            >
              <div
                className="h-0.5 w-full shrink-0 bg-gradient-to-r from-sky-400/70 via-violet-500/60 to-emerald-400/70"
                aria-hidden
              />
              <CardHeader className="border-b border-border/60 bg-gradient-to-r from-slate-50/90 via-card to-violet-50/20 py-3 pl-4 pr-3 dark:from-slate-900/60 dark:via-card dark:to-violet-950/20">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/15 transition-transform group-hover:scale-[1.02]">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <span className="text-[13px] font-semibold leading-snug tracking-tight text-foreground">
                      {[row.rawAddress, row.rawCity, row.rawZip].filter(Boolean).join(", ") || "(no address)"}
                    </span>
                    <Badge className="h-6 shrink-0 gap-1 border-0 bg-gradient-to-r from-emerald-600 to-teal-600 px-2 text-[10px] font-medium text-white shadow-sm ring-1 ring-emerald-700/30">
                      {row.customerCount} customer{row.customerCount !== 1 ? "s" : ""}
                    </Badge>
                    {(row.latitude != null || row.longitude != null) && (
                      <span className="text-[10px] font-mono text-muted-foreground">
                        {row.latitude?.toFixed(4)}, {row.longitude?.toFixed(4)}
                      </span>
                    )}
                  </div>
                  {row.confirmed && (
                    <Badge className="h-6 shrink-0 gap-1 border-0 bg-gradient-to-r from-emerald-600 to-teal-600 text-[10px] text-white shadow-sm">
                      <CheckCircle2 className="h-3 w-3" /> Confirmed
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="px-4 py-3">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="min-w-[200px] flex-1 space-y-1.5">
                    <Label className="text-[10px] font-bold uppercase tracking-wider text-violet-700/80 dark:text-violet-300/90">
                      Region (Περιφέρεια → Νομός → Δήμος)
                    </Label>
                    {editingKey === row.addressKey ? (
                      <div className="flex flex-wrap items-center gap-2">
                        <Select
                          value={selectedPeriferia[row.addressKey] ?? row.periferiaId ?? ""}
                          onValueChange={(v) =>
                            setSelectedPeriferia((prev) => ({
                              ...prev,
                              [row.addressKey]: v,
                            }))
                          }
                        >
                          <SelectTrigger className="h-8 w-[280px] max-w-full text-[12px]">
                            <SelectValue placeholder="Select Δήμος…" />
                          </SelectTrigger>
                          <SelectContent>
                            {periferiesOptions.map((p) => (
                              <SelectItem key={p.id} value={p.id} className="text-xs">
                                {p.path}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Button
                          size="sm"
                          className="h-8 gap-1 text-[11px]"
                          disabled={savingKey === row.addressKey}
                          onClick={() => {
                            const pid = selectedPeriferia[row.addressKey] ?? row.periferiaId;
                            if (pid) handleSave(row, pid);
                          }}
                        >
                          {savingKey === row.addressKey ? (
                            <Loader2 className="h-3.5 w-3.5 animate-spin" />
                          ) : (
                            <Save className="h-3.5 w-3.5" />
                          )}
                          Save
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 text-[11px]" onClick={() => setEditingKey(null)}>
                          Cancel
                        </Button>
                      </div>
                    ) : (
                      <p className="text-[12px] leading-relaxed text-foreground/90">
                        {row.periferiaPath ?? <span className="italic text-muted-foreground">Not mapped</span>}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {editingKey !== row.addressKey && (
                      <>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 gap-1 border-slate-200/90 text-[11px] dark:border-slate-700"
                          onClick={() => {
                            setEditingKey(row.addressKey);
                            if (row.periferiaId)
                              setSelectedPeriferia((prev) => ({
                                ...prev,
                                [row.addressKey]: row.periferiaId!,
                              }));
                          }}
                        >
                          <Edit3 className="h-3.5 w-3.5" />
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 gap-1 border-violet-500/25 bg-violet-500/8 text-[11px] font-medium text-violet-900 hover:bg-violet-500/14 dark:text-violet-100 dark:bg-violet-500/12"
                          disabled={suggestingKey !== null}
                          onClick={() => handleSuggest(row)}
                        >
                          {suggestingKey === row.addressKey ? (
                            <Loader2 className="h-3.5 w-3.5 animate-spin" />
                          ) : (
                            <Sparkles className="h-3.5 w-3.5" />
                          )}
                          Suggest with AI
                        </Button>
                        {row.periferiaId && (
                          <Button
                            size="sm"
                            variant={row.confirmed ? "secondary" : "default"}
                            className={`h-8 gap-1 text-[11px] ${!row.confirmed ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-600 border-0" : ""}`}
                            onClick={() => handleConfirm(row, !row.confirmed)}
                          >
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            {row.confirmed ? "Unconfirm" : "Confirm"}
                          </Button>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
