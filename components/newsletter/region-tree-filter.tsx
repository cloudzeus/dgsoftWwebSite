"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { CheckIcon, MinusIcon, ChevronDownIcon, ChevronRightIcon, SearchIcon, XIcon, MapPinIcon } from "lucide-react";

// Tri-state checkbox visual (unchecked / checked / indeterminate)
function TriCheckbox({ state, onToggle }: { state: "checked" | "indeterminate" | "unchecked"; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={(e) => { e.stopPropagation(); onToggle(); }}
      className={cn(
        "w-4 h-4 rounded-sm border flex items-center justify-center shrink-0 transition-colors",
        state === "unchecked" && "border-[#C8C6C4] bg-white hover:border-[#0078D4]",
        state === "checked" && "bg-[#0078D4] border-[#0078D4]",
        state === "indeterminate" && "bg-[#0078D4] border-[#0078D4]"
      )}
      aria-checked={state === "checked" ? "true" : state === "indeterminate" ? "mixed" : "false"}
      role="checkbox"
    >
      {state === "checked" && <CheckIcon className="w-3 h-3 text-white" />}
      {state === "indeterminate" && <MinusIcon className="w-3 h-3 text-white" />}
    </button>
  );
}

export type RegionNode = {
  id: string;
  nameEL: string;
  level: number;
  code: string;
  parentCode: string | null;
};

type TreeNode = RegionNode & { children: TreeNode[] };

const norm = (s: string) =>
  s.toLocaleLowerCase("el-GR").normalize("NFD").replace(/[̀-ͯ]/g, "");

function buildTree(regions: RegionNode[], nomoi: RegionNode[], dimoi: RegionNode[]): TreeNode[] {
  const byCode = new Map<string, TreeNode>();
  const all: TreeNode[] = [...regions, ...nomoi, ...dimoi].map((n) => ({ ...n, children: [] as TreeNode[] }));
  for (const n of all) byCode.set(n.code, n);

  const roots: TreeNode[] = [];
  for (const n of all) {
    if (n.parentCode && byCode.has(n.parentCode)) {
      byCode.get(n.parentCode)!.children.push(n);
    } else {
      roots.push(n);
    }
  }

  // Sort children alphabetically at each level
  const sortRec = (nodes: TreeNode[]) => {
    nodes.sort((a, b) => a.nameEL.localeCompare(b.nameEL, "el-GR"));
    for (const n of nodes) sortRec(n.children);
  };
  sortRec(roots);
  return roots;
}

function collectDescendantIds(node: TreeNode, perLevel: { 3: string[]; 4: string[]; 5: string[] }) {
  if (node.level === 3 || node.level === 4 || node.level === 5) {
    perLevel[node.level as 3 | 4 | 5].push(node.id);
  }
  for (const c of node.children) collectDescendantIds(c, perLevel);
}

function nodeMatches(node: TreeNode, q: string): boolean {
  if (!q) return true;
  if (norm(node.nameEL).includes(q)) return true;
  return node.children.some((c) => nodeMatches(c, q));
}

export type RegionTreeSelection = {
  regionIds: string[];
  nomosIds: string[];
  dimosIds: string[];
};

export function RegionTreeFilter({
  regions, nomoi, dimoi,
  selectedRegionIds, selectedNomosIds, selectedDimosIds,
  onChange,
  label = "Γεωγραφική στόχευση",
  className,
}: {
  regions: RegionNode[];
  nomoi: RegionNode[];
  dimoi: RegionNode[];
  selectedRegionIds: string[];
  selectedNomosIds: string[];
  selectedDimosIds: string[];
  onChange: (next: RegionTreeSelection) => void;
  label?: string;
  className?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [expanded, setExpanded] = React.useState<Set<string>>(new Set());

  const tree = React.useMemo(() => buildTree(regions, nomoi, dimoi), [regions, nomoi, dimoi]);

  // Selection sets for fast lookup
  const selR = React.useMemo(() => new Set(selectedRegionIds), [selectedRegionIds]);
  const selN = React.useMemo(() => new Set(selectedNomosIds), [selectedNomosIds]);
  const selD = React.useMemo(() => new Set(selectedDimosIds), [selectedDimosIds]);

  const isNodeSelected = (n: TreeNode): boolean => {
    if (n.level === 3) return selR.has(n.id);
    if (n.level === 4) return selN.has(n.id);
    if (n.level === 5) return selD.has(n.id);
    return false;
  };

  // A node is "effectively included" if itself or any ancestor is selected.
  // For display we compute: checked = all descendants effectively included.
  const computeState = React.useCallback(
    (n: TreeNode): "checked" | "indeterminate" | "unchecked" => {
      const self = isNodeSelected(n);
      if (n.children.length === 0) return self ? "checked" : "unchecked";
      const childStates = n.children.map(computeState);
      const allChecked = childStates.every((s) => s === "checked");
      const noneChecked = childStates.every((s) => s === "unchecked") && !self;
      if (self || allChecked) return "checked";
      if (noneChecked) return "unchecked";
      return "indeterminate";
    },
    [selR, selN, selD] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const totalSelected = selR.size + selN.size + selD.size;

  const toggleNode = (n: TreeNode) => {
    const state = computeState(n);
    const collected = { 3: [] as string[], 4: [] as string[], 5: [] as string[] };
    collectDescendantIds(n, collected);

    const nextR = new Set(selR);
    const nextN = new Set(selN);
    const nextD = new Set(selD);

    if (state === "checked") {
      // Clear self + all descendants
      for (const id of collected[3]) nextR.delete(id);
      for (const id of collected[4]) nextN.delete(id);
      for (const id of collected[5]) nextD.delete(id);
    } else {
      // Select self + all descendants
      for (const id of collected[3]) nextR.add(id);
      for (const id of collected[4]) nextN.add(id);
      for (const id of collected[5]) nextD.add(id);
    }

    onChange({
      regionIds: Array.from(nextR),
      nomosIds: Array.from(nextN),
      dimosIds: Array.from(nextD),
    });
  };

  const clearAll = () => onChange({ regionIds: [], nomosIds: [], dimosIds: [] });

  const expandAll = () => {
    const all = new Set<string>();
    const walk = (nodes: TreeNode[]) => {
      for (const n of nodes) {
        if (n.children.length > 0) {
          all.add(n.id);
          walk(n.children);
        }
      }
    };
    walk(tree);
    setExpanded(all);
  };
  const collapseAll = () => setExpanded(new Set());

  const toggleExpand = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // When searching, auto-expand all ancestors of matches
  React.useEffect(() => {
    if (!query.trim()) return;
    const q = norm(query.trim());
    const next = new Set<string>();
    const walk = (nodes: TreeNode[], chain: TreeNode[]): boolean => {
      let anyMatch = false;
      for (const n of nodes) {
        const isMatch = norm(n.nameEL).includes(q);
        const childMatch = walk(n.children, [...chain, n]);
        if (isMatch || childMatch) {
          for (const c of chain) next.add(c.id);
          if (n.children.length > 0) next.add(n.id);
          anyMatch = true;
        }
      }
      return anyMatch;
    };
    walk(tree, []);
    setExpanded(next);
  }, [query, tree]);

  const triggerText =
    totalSelected === 0
      ? "— Όλη η Ελλάδα —"
      : `${totalSelected} ${totalSelected === 1 ? "περιοχή" : "περιοχές"}`;

  return (
    <div className={cn("space-y-1.5", className)}>
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide flex items-center gap-1">
          <MapPinIcon className="w-3 h-3" /> {label}
        </span>
        {totalSelected > 0 && (
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
              totalSelected > 0 ? "text-[#201F1E]" : "text-[#A19F9D]"
            )}
          >
            <span className="truncate flex-1">{triggerText}</span>
            <ChevronDownIcon className="w-3.5 h-3.5 text-[#A19F9D] shrink-0 ml-2" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[420px] p-0" align="start">
          {/* Search */}
          <div className="p-2 border-b border-[#EDEBE9] bg-white">
            <div className="relative">
              <SearchIcon className="w-3.5 h-3.5 text-[#A19F9D] absolute left-2.5 top-1/2 -translate-y-1/2" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Αναζήτηση περιφέρειας, νομού, δήμου…"
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

          {/* Expand controls */}
          <div className="px-2 py-1.5 flex items-center justify-between border-b border-[#EDEBE9] bg-[#FAFAFA]">
            <span className="text-[10px] text-[#A19F9D]">
              {regions.length} περιφέρειες · {nomoi.length} νομοί · {dimoi.length} δήμοι
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={expandAll}
                className="text-[10px] font-semibold text-[#0078D4] hover:underline"
              >
                Άνοιγμα όλων
              </button>
              <button
                type="button"
                onClick={collapseAll}
                className="text-[10px] font-semibold text-[#605E5C] hover:underline"
              >
                Κλείσιμο
              </button>
            </div>
          </div>

          {/* Tree */}
          <div className="max-h-[360px] overflow-y-auto p-1">
            {tree.length === 0 ? (
              <p className="text-[11px] text-[#A19F9D] py-3 text-center">Καμία διαθέσιμη επιλογή</p>
            ) : (
              <TreeList
                nodes={tree}
                depth={0}
                expanded={expanded}
                query={norm(query.trim())}
                computeState={computeState}
                onToggleNode={toggleNode}
                onToggleExpand={toggleExpand}
              />
            )}
          </div>
        </PopoverContent>
      </Popover>

      {/* Summary chips */}
      {totalSelected > 0 && (
        <div className="flex flex-wrap gap-1 pt-0.5">
          {selR.size > 0 && (
            <span className="inline-flex items-center px-1.5 py-0.5 bg-[#EFF6FC] border border-[#C7E0F4] rounded text-[10px] text-[#0078D4] font-semibold">
              {selR.size} περιφ.
            </span>
          )}
          {selN.size > 0 && (
            <span className="inline-flex items-center px-1.5 py-0.5 bg-[#EFF6FC] border border-[#C7E0F4] rounded text-[10px] text-[#0078D4] font-semibold">
              {selN.size} νομ.
            </span>
          )}
          {selD.size > 0 && (
            <span className="inline-flex items-center px-1.5 py-0.5 bg-[#EFF6FC] border border-[#C7E0F4] rounded text-[10px] text-[#0078D4] font-semibold">
              {selD.size} δήμ.
            </span>
          )}
        </div>
      )}
    </div>
  );
}

// ——— Recursive tree rendering ———

function TreeList({
  nodes, depth, expanded, query, computeState, onToggleNode, onToggleExpand,
}: {
  nodes: TreeNode[];
  depth: number;
  expanded: Set<string>;
  query: string;
  computeState: (n: TreeNode) => "checked" | "indeterminate" | "unchecked";
  onToggleNode: (n: TreeNode) => void;
  onToggleExpand: (id: string) => void;
}) {
  return (
    <>
      {nodes.map((n) => {
        if (query && !nodeMatches(n, query)) return null;
        const isOpen = expanded.has(n.id);
        const hasChildren = n.children.length > 0;
        const state = computeState(n);

        const levelStyles =
          n.level === 3
            ? "font-semibold text-[#201F1E] text-[12px]"
            : n.level === 4
            ? "text-[#201F1E] text-[12px]"
            : "text-[#605E5C] text-[11px]";

        return (
          <React.Fragment key={n.id}>
            <div
              className="flex items-center gap-1 rounded hover:bg-[#F3F2F1] cursor-pointer pr-2"
              style={{ paddingLeft: 4 + depth * 14 }}
            >
              {/* Chevron */}
              {hasChildren ? (
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); onToggleExpand(n.id); }}
                  className="w-4 h-4 flex items-center justify-center shrink-0 text-[#605E5C] hover:text-[#0078D4]"
                  aria-label={isOpen ? "Κλείσιμο" : "Άνοιγμα"}
                >
                  {isOpen
                    ? <ChevronDownIcon className="w-3 h-3" />
                    : <ChevronRightIcon className="w-3 h-3" />}
                </button>
              ) : (
                <span className="w-4 h-4 shrink-0" />
              )}

              <TriCheckbox state={state} onToggle={() => onToggleNode(n)} />
              <button
                type="button"
                onClick={() => (hasChildren ? onToggleExpand(n.id) : onToggleNode(n))}
                className="flex items-center gap-2 py-1 flex-1 min-w-0 text-left"
              >
                <span className={cn("truncate", levelStyles)}>
                  {n.nameEL}
                </span>
                {hasChildren && (
                  <span className="text-[9px] text-[#A19F9D] shrink-0 ml-auto">
                    {n.children.length}
                  </span>
                )}
              </button>
            </div>

            {isOpen && hasChildren && (
              <TreeList
                nodes={n.children}
                depth={depth + 1}
                expanded={expanded}
                query={query}
                computeState={computeState}
                onToggleNode={onToggleNode}
                onToggleExpand={onToggleExpand}
              />
            )}
          </React.Fragment>
        );
      })}
    </>
  );
}
