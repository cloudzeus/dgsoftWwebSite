"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, SearchIcon, XIcon } from "lucide-react";

type Option = { value: string; label: string; chipLabel?: string };

const VIRTUAL_THRESHOLD = 100; // when options > this, cap rendered list to first N matches

export function MultiSelectFilter({
  label,
  options,
  value,
  onChange,
  placeholder = "— Επιλέξτε —",
  className,
  searchPlaceholder = "Αναζήτηση…",
}: {
  label: string;
  options: Option[];
  value: string[];
  onChange: (v: string[]) => void;
  placeholder?: string;
  className?: string;
  searchPlaceholder?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const selectedSet = React.useMemo(() => new Set(value), [value]);

  // Greek-friendly case-insensitive normalisation (strip diacritics).
  const norm = React.useCallback(
    (s: string) => s.toLocaleLowerCase("el-GR").normalize("NFD").replace(/[̀-ͯ]/g, ""),
    []
  );

  const filtered = React.useMemo(() => {
    if (!query.trim()) return options;
    const q = norm(query);
    return options.filter(
      (o) => norm(o.label).includes(q) || norm(o.value).includes(q)
    );
  }, [options, query, norm]);

  const visible = React.useMemo(
    () => (filtered.length > VIRTUAL_THRESHOLD ? filtered.slice(0, VIRTUAL_THRESHOLD) : filtered),
    [filtered]
  );

  const toggle = (v: string) => {
    const next = new Set(selectedSet);
    if (next.has(v)) next.delete(v);
    else next.add(v);
    onChange(Array.from(next));
  };

  const selectAllVisible = () => {
    const next = new Set(selectedSet);
    for (const o of visible) next.add(o.value);
    onChange(Array.from(next));
  };

  const clearAll = () => onChange([]);

  // Lookup selected labels for chip rendering (chipLabel preferred, falls back to label)
  const labelByValue = React.useMemo(() => {
    const m = new Map<string, string>();
    for (const o of options) m.set(o.value, o.chipLabel ?? o.label);
    return m;
  }, [options]);

  const triggerText =
    value.length === 0
      ? placeholder
      : value.length === 1
      ? labelByValue.get(value[0]) ?? value[0]
      : `${value.length} επιλεγμένα`;

  return (
    <div className={cn("space-y-1.5", className)}>
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">{label}</span>
        {value.length > 0 && (
          <button
            type="button"
            onClick={clearAll}
            className="text-[10px] text-red-500 hover:text-red-700 flex items-center gap-0.5"
          >
            <XIcon className="w-2.5 h-2.5" /> Καθαρισμός
          </button>
        )}
      </div>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "w-full justify-between text-left font-normal h-9 text-sm border-[#C8C6C4] bg-white hover:bg-[#F3F2F1]",
              value.length > 0 ? "text-[#201F1E]" : "text-[#A19F9D]"
            )}
          >
            <span className="truncate flex-1">{triggerText}</span>
            <ChevronDownIcon className="w-3.5 h-3.5 text-[#A19F9D] shrink-0 ml-2" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[320px] p-0" align="start">
          {/* Search */}
          <div className="p-2 border-b border-[#EDEBE9] sticky top-0 bg-white">
            <div className="relative">
              <SearchIcon className="w-3.5 h-3.5 text-[#A19F9D] absolute left-2.5 top-1/2 -translate-y-1/2" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={searchPlaceholder}
                className="h-8 pl-8 pr-7 text-[12px] border-[#C8C6C4] focus-visible:ring-[#0078D4]"
                autoFocus
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-[#A19F9D] hover:text-[#605E5C]"
                >
                  <XIcon className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>

          {/* Bulk actions */}
          <div className="px-2 py-1.5 flex items-center justify-between border-b border-[#EDEBE9] bg-[#FAFAFA]">
            <span className="text-[10px] text-[#A19F9D]">
              {filtered.length === options.length
                ? `${options.length} επιλογές`
                : `${filtered.length} από ${options.length}`}
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={selectAllVisible}
                disabled={visible.length === 0}
                className="text-[10px] font-semibold text-[#0078D4] hover:underline disabled:opacity-40"
              >
                Επιλογή όλων
              </button>
              {value.length > 0 && (
                <button
                  type="button"
                  onClick={clearAll}
                  className="text-[10px] font-semibold text-[#605E5C] hover:underline"
                >
                  Καθαρισμός
                </button>
              )}
            </div>
          </div>

          {/* Option list */}
          <div className="max-h-[280px] overflow-y-auto p-1">
            {visible.length === 0 ? (
              <p className="text-[11px] text-[#A19F9D] py-3 text-center">
                {options.length === 0 ? "Καμία διαθέσιμη επιλογή" : "Δεν βρέθηκαν αποτελέσματα"}
              </p>
            ) : (
              <>
                {visible.map((opt) => (
                  <label
                    key={opt.value}
                    className="flex items-center gap-2 rounded px-2 py-1.5 cursor-pointer hover:bg-[#F3F2F1] text-[12px]"
                  >
                    <Checkbox
                      checked={selectedSet.has(opt.value)}
                      onCheckedChange={() => toggle(opt.value)}
                    />
                    <span className="truncate flex-1 text-[#201F1E]">{opt.label}</span>
                  </label>
                ))}
                {filtered.length > VIRTUAL_THRESHOLD && (
                  <p className="text-[10px] text-[#A19F9D] text-center py-2 border-t border-[#EDEBE9] mt-1">
                    Εμφανίζονται τα πρώτα {VIRTUAL_THRESHOLD} από {filtered.length}. Πληκτρολογήστε για να φιλτράρετε.
                  </p>
                )}
              </>
            )}
          </div>
        </PopoverContent>
      </Popover>

      {/* Selected chips (up to 4, then +N) */}
      {value.length > 0 && (
        <div className="flex flex-wrap gap-1 pt-0.5">
          {value.slice(0, 4).map((v) => (
            <span
              key={v}
              className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-[#EFF6FC] border border-[#C7E0F4] rounded text-[10px] text-[#0078D4] max-w-[180px]"
            >
              <span className="truncate">{labelByValue.get(v) ?? v}</span>
              <button
                type="button"
                onClick={() => toggle(v)}
                className="hover:text-red-600 shrink-0"
                aria-label="Αφαίρεση"
              >
                <XIcon className="w-2.5 h-2.5" />
              </button>
            </span>
          ))}
          {value.length > 4 && (
            <span className="inline-flex items-center px-1.5 py-0.5 bg-[#F3F2F1] border border-[#EDEBE9] rounded text-[10px] text-[#605E5C]">
              +{value.length - 4}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
