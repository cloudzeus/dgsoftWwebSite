"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

type Option = { value: string; label: string };

export function MultiSelectFilter({
  label,
  options,
  value,
  onChange,
  placeholder = "Select…",
  className,
}: {
  label: string;
  options: Option[];
  value: string[];
  onChange: (v: string[]) => void;
  placeholder?: string;
  className?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const selectedSet = new Set(value);

  const toggle = (v: string) => {
    const next = new Set(selectedSet);
    if (next.has(v)) next.delete(v);
    else next.add(v);
    onChange(Array.from(next));
  };

  return (
    <div className={cn("space-y-1.5", className)}>
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between text-left font-normal h-9"
          >
            {value.length === 0 ? placeholder : `${value.length} selected`}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[280px] p-0" align="start">
          <div className="max-h-[280px] overflow-y-scroll p-2">
            {options.length === 0 ? (
              <p className="text-xs text-muted-foreground py-2">No options</p>
            ) : (
              options.map((opt) => (
                <label
                  key={opt.value}
                  className="flex items-center gap-2 rounded px-2 py-1.5 cursor-pointer hover:bg-muted text-sm"
                >
                  <Checkbox
                    checked={selectedSet.has(opt.value)}
                    onCheckedChange={() => toggle(opt.value)}
                  />
                  <span className="truncate">{opt.label}</span>
                </label>
              ))
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
