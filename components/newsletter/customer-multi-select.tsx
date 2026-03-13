"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";
import { searchNewsletterCustomers } from "@/app/lib/actions/newsletter";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, XIcon } from "lucide-react";

export type CustomerOption = {
  id: string;
  name: string;
  code: string;
  email: string;
};

export function CustomerMultiSelect({
  selected,
  onChange,
  placeholder = "Search customers…",
  className,
}: {
  selected: CustomerOption[];
  onChange: (selected: CustomerOption[]) => void;
  placeholder?: string;
  className?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [options, setOptions] = React.useState<CustomerOption[]>([]);
  const [loading, setLoading] = React.useState(false);

  const selectedIds = React.useMemo(() => new Set(selected.map((c) => c.id)), [selected]);

  const search = React.useCallback(async (q: string) => {
    if (!q.trim()) {
      setOptions([]);
      return;
    }
    setLoading(true);
    try {
      const list = await searchNewsletterCustomers(q.trim(), 25);
      setOptions(list);
    } catch {
      setOptions([]);
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    const t = setTimeout(() => search(query), 200);
    return () => clearTimeout(t);
  }, [query, search]);

  const add = (c: CustomerOption) => {
    if (selectedIds.has(c.id)) return;
    onChange([...selected, c]);
  };

  const remove = (id: string) => {
    onChange(selected.filter((x) => x.id !== id));
  };

  return (
    <div className={cn("space-y-2", className)}>
      <span className="text-xs font-medium text-muted-foreground">Add specific customers</span>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between font-normal h-9"
          >
            {placeholder}
            <ChevronDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[400px] p-0" align="start">
          <Command shouldFilter={false}>
            <CommandInput
              placeholder="Search by name, code, or email…"
              value={query}
              onValueChange={setQuery}
            />
            <CommandList>
              <CommandEmpty>
                {loading ? "Searching…" : query.trim() ? "No customers found." : "Type to search."}
              </CommandEmpty>
              <CommandGroup>
                {options.map((c) => (
                  <CommandItem
                    key={c.id}
                    value={c.id}
                    onSelect={() => add(c)}
                    className="cursor-pointer"
                  >
                    <div className="flex flex-col gap-0.5">
                      <span className="font-medium">{c.name || c.code || "—"}</span>
                      {(c.code || c.email) && (
                        <span className="text-xs text-muted-foreground">
                          {[c.code, c.email].filter(Boolean).join(" · ")}
                        </span>
                      )}
                    </div>
                    {selectedIds.has(c.id) && (
                      <span className="ml-auto text-xs text-muted-foreground">Added</span>
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {selected.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {selected.map((c) => (
            <Badge
              key={c.id}
              variant="secondary"
              className="pr-1 gap-1 font-normal"
            >
              <span className="max-w-[160px] truncate" title={c.name || c.code}>
                {c.name || c.code || c.email || c.id}
              </span>
              <button
                type="button"
                onClick={() => remove(c.id)}
                className="rounded-full p-0.5 hover:bg-muted-foreground/20"
                aria-label={`Remove ${c.name || c.code}`}
              >
                <XIcon className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
