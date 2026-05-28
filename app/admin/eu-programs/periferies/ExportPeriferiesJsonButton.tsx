"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function ExportPeriferiesJsonButton({ data }: { data: unknown }) {
    const handleExport = () => {
        const json = JSON.stringify(data, null, 2)
        const blob = new Blob([json], { type: "application/json" })
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = `periferies-${new Date().toISOString().slice(0, 10)}.json`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
    }

    return (
        <Button onClick={handleExport} variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export JSON
        </Button>
    )
}
