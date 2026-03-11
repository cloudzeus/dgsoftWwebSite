"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"
import type { SoftOneObjectItem } from "@/lib/softone"
import { SoftOneObjectCard } from "./object-card"

type Props = {
  objects: SoftOneObjectItem[]
}

export function ObjectCardsWithSearch({ objects }: Props) {
  const [search, setSearch] = useState("")

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return objects
    return objects.filter(
      (obj) =>
        obj.name.toLowerCase().includes(q) ||
        (obj.caption && obj.caption.toLowerCase().includes(q)) ||
        (obj.type && obj.type.toLowerCase().includes(q))
    )
  }, [objects, search])

  return (
    <div className="space-y-4">
      <div className="relative max-w-sm">
        <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search objects by name, caption, type…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>
      <p className="text-sm text-muted-foreground">
        {filtered.length} of {objects.length} object{objects.length !== 1 ? "s" : ""}
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((obj, index) => (
          <SoftOneObjectCard key={`${obj.name}-${index}`} object={obj} />
        ))}
      </div>
    </div>
  )
}
