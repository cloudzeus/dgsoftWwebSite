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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
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
  const [bulkProgress, setBulkProgress] = React.useState<{
    show: boolean;
    current: number;
    total: number;
    batchIndex: number;
    batchTotal: number;
    phase: "suggesting" | "saving" | "done";
  } | null>(null);

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
    <div className="flex flex-col gap-4 min-h-0">
      <div className="flex flex-wrap items-center gap-2">
        <Button
          size="sm"
          variant="outline"
          onClick={handleSuggestAll}
          className="gap-2 text-emerald-600 border-emerald-200 hover:bg-emerald-50"
        >
          <Sparkles className="w-4 h-4" />
          Suggest all with AI
        </Button>
        <Button size="sm" variant="ghost" onClick={() => router.refresh()} className="gap-2">
          <RefreshCw className="w-4 h-4" />
          Refresh
        </Button>
      </div>

      <div className="flex-1 min-h-0 overflow-auto space-y-3">
        {addresses.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center text-muted-foreground text-sm">
              No distinct addresses found. Sync customers from ERP first.
            </CardContent>
          </Card>
        ) : (
          addresses.map((row) => (
            <Card key={row.addressKey} className="overflow-hidden">
              <CardHeader className="py-3 px-4 bg-zinc-50 dark:bg-zinc-900/50 border-b">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <MapPin className="w-4 h-4 text-zinc-500 shrink-0" />
                    <span className="font-medium text-sm">
                      {[row.rawAddress, row.rawCity, row.rawZip]
                        .filter(Boolean)
                        .join(", ") || "(no address)"}
                    </span>
                    <Badge variant="secondary" className="text-[10px]">
                      {row.customerCount} customer{row.customerCount !== 1 ? "s" : ""}
                    </Badge>
                    {(row.latitude != null || row.longitude != null) && (
                      <span className="text-[10px] text-zinc-500 font-mono">
                        {row.latitude?.toFixed(4)}, {row.longitude?.toFixed(4)}
                      </span>
                    )}
                  </div>
                  {row.confirmed && (
                    <Badge className="bg-emerald-600 text-[10px] gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Confirmed
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="py-3 px-4">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex-1 min-w-[200px] space-y-1">
                    <Label className="text-[10px] font-semibold uppercase text-zinc-500">
                      Region (Περιφέρεια → Νομός → Δήμος)
                    </Label>
                    {editingKey === row.addressKey ? (
                      <div className="flex flex-wrap items-center gap-2">
                        <Select
                          value={
                            selectedPeriferia[row.addressKey] ??
                            row.periferiaId ??
                            ""
                          }
                          onValueChange={(v) =>
                            setSelectedPeriferia((prev) => ({
                              ...prev,
                              [row.addressKey]: v,
                            }))
                          }
                        >
                          <SelectTrigger className="h-8 text-sm w-[280px] max-w-full">
                            <SelectValue placeholder="Select Δήμος…" />
                          </SelectTrigger>
                          <SelectContent>
                            {periferiesOptions.map((p) => (
                              <SelectItem key={p.id} value={p.id}>
                                {p.path}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Button
                          size="sm"
                          className="h-8 gap-1"
                          disabled={savingKey === row.addressKey}
                          onClick={() => {
                            const pid =
                              selectedPeriferia[row.addressKey] ?? row.periferiaId;
                            if (pid) handleSave(row, pid);
                          }}
                        >
                          {savingKey === row.addressKey ? (
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          ) : (
                            <Save className="w-3.5 h-3.5" />
                          )}
                          Save
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8"
                          onClick={() => setEditingKey(null)}
                        >
                          Cancel
                        </Button>
                      </div>
                    ) : (
                      <p className="text-sm text-zinc-700 dark:text-zinc-300">
                        {row.periferiaPath ?? (
                          <span className="italic text-zinc-500">Not mapped</span>
                        )}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {editingKey !== row.addressKey && (
                      <>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 gap-1 text-xs"
                          onClick={() => {
                            setEditingKey(row.addressKey);
                            if (row.periferiaId)
                              setSelectedPeriferia((prev) => ({
                                ...prev,
                                [row.addressKey]: row.periferiaId!,
                              }));
                          }}
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 gap-1 text-xs"
                          disabled={suggestingKey !== null}
                          onClick={() => handleSuggest(row)}
                        >
                          {suggestingKey === row.addressKey ? (
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          ) : (
                            <Sparkles className="w-3.5 h-3.5" />
                          )}
                          Suggest with AI
                        </Button>
                        {row.periferiaId && (
                          <Button
                            size="sm"
                            variant={row.confirmed ? "secondary" : "default"}
                            className="h-8 gap-1 text-xs"
                            onClick={() =>
                              handleConfirm(row, !row.confirmed)
                            }
                          >
                            <CheckCircle2 className="w-3.5 h-3.5" />
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
