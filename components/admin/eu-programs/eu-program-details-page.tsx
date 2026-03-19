"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
    Save,
    Plus,
    Trash2,
    Image as ImageIcon,
    FileText,
    Calendar,
    Euro,
    MapPin,
    FileCode,
    ImagePlus,
    Loader2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"

import {
    getEuProgramById,
    updateEuProgram,
    updateEuProgramField,
    getAllPeriferies,
    linkPeriferiaToProgram,
    unlinkPeriferiaFromProgram,
    getAllKadsList,
    linkKadToProgram,
    unlinkKadFromProgram,
    addEuProgramMedia,
    deleteEuProgramMedia,
} from "@/app/lib/actions/eu-program"

type Program = Awaited<ReturnType<typeof getEuProgramById>> & {
    requirements?: { id: string; type: string; key: string; operator: string; value: string; isMandatory: boolean; errorMessageEL: string }[]
    criteria?: { id: string; key: string; operator: string; targetValue: string; errorMessage: string }[]
    expenseLimits?: {
        id: string
        maxPercentage: number | null
        minPercentage: number | null
        maxAmount: number | string | null
        isMandatory: boolean
        expenseCategory: { code: string; descriptionEL: string }
    }[]
    periferies?: { periferia: { id: string; nameEL: string } }[]
    kads?: { kad: { id: string; code: string; dotcode?: string | null; nameEL: string | null } }[]
    media?: { id: string; url: string; mediaType: string; title: string | null; order: number }[]
}

type RequirementItem = NonNullable<Program["requirements"]>[number]
type ExpenseLimitItem = NonNullable<Program["expenseLimits"]>[number]
type PeriferiaLink = NonNullable<Program["periferies"]>[number]
type KadLink = NonNullable<Program["kads"]>[number]
type MediaItem = NonNullable<Program["media"]>[number]
type RegionItem = { id: string; nameEL: string }
type KadItem = { id: string; code: string; dotcode?: string | null; nameEL: string | null }

function toDateInput(d: Date | string | null): string {
    if (!d) return ""
    return new Date(d).toISOString().slice(0, 10)
}

export function EuProgramDetailsPage({ program: initialProgram }: { program: NonNullable<Program> }) {
    const router = useRouter()
    const [program, setProgram] = React.useState<Program>(initialProgram)
    const [savingSection, setSavingSection] = React.useState<string | null>(null)
    const [periferies, setPeriferies] = React.useState<{ id: string; nameEL: string; children?: unknown[] }[]>([])
    const [kads, setKads] = React.useState<{ id: string; code: string; dotcode?: string | null; nameEL: string | null }[]>([])
    const [kadSearch, setKadSearch] = React.useState("")
    const [addingKads, setAddingKads] = React.useState(false)
    const [newMediaUrl, setNewMediaUrl] = React.useState("")
    const [addingMedia, setAddingMedia] = React.useState(false)

    React.useEffect(() => {
        getAllPeriferies().then((p: { id: string; nameEL: string; children?: unknown[] }[] | null) => setPeriferies(p || []))
        getAllKadsList().then((k: KadItem[]) => setKads(k || []))
    }, [])

    const refreshProgram = React.useCallback(async () => {
        const next = await getEuProgramById(program.id)
        if (next) setProgram(next as Program)
    }, [program.id])

    /** Only top-level regions (no regional parts / children). */
    const regionsOnly = React.useMemo(() => periferies.map((p: RegionItem & { children?: unknown[] }) => ({ id: p.id, nameEL: p.nameEL })), [periferies])

    const linkedPeriferiaIds = new Set(program.periferies?.map((p: PeriferiaLink) => p.periferia.id) || [])
    const linkedKadIds = new Set(program.kads?.map((k: KadLink) => k.kad.id) || [])

    const saveScalar = async (section: string, payload: Record<string, unknown>) => {
        setSavingSection(section)
        try {
            for (const [field, value] of Object.entries(payload)) {
                const res = await updateEuProgramField(program.id, field, value)
                if (!res.success) throw new Error(res.error)
            }
            setProgram((prev: Program) => ({ ...prev, ...payload }))
            toast.success("Saved")
        } catch (e: unknown) {
            toast.error(e instanceof Error ? e.message : "Save failed")
        } finally {
            setSavingSection(null)
        }
    }

    const saveFull = async (section: string, next: Program) => {
        setSavingSection(section)
        try {
            await updateEuProgram(program.id, {
                ...next,
                criteria: next.criteria || [],
                requirements: next.requirements || [],
                expenseLimits: (next.expenseLimits || []).map((e: ExpenseLimitItem) => ({
                    code: e.expenseCategory?.code ?? "",
                    description: e.expenseCategory?.descriptionEL ?? "",
                    maxPercentage: e.maxPercentage,
                    minPercentage: e.minPercentage,
                    maxAmount: e.maxAmount,
                    isMandatory: e.isMandatory,
                })),
            })
            setProgram(next)
            toast.success("Saved")
        } catch (e: unknown) {
            toast.error(e instanceof Error ? e.message : "Save failed")
        } finally {
            setSavingSection(null)
        }
    }

    const togglePeriferia = async (periferiaId: string) => {
        const linked = linkedPeriferiaIds.has(periferiaId)
        try {
            if (linked) await unlinkPeriferiaFromProgram(program.id, periferiaId)
            else await linkPeriferiaToProgram(program.id, periferiaId)
            await refreshProgram()
            toast.success(linked ? "Region removed" : "Region added")
        } catch (e: unknown) {
            toast.error(e instanceof Error ? e.message : "Failed")
        }
    }

    const toggleKad = async (kadId: string) => {
        const linked = linkedKadIds.has(kadId)
        try {
            if (linked) await unlinkKadFromProgram(program.id, kadId)
            else await linkKadToProgram(program.id, kadId)
            await refreshProgram()
            toast.success(linked ? "KAD removed" : "KAD added")
        } catch (e: unknown) {
            toast.error(e instanceof Error ? e.message : "Failed")
        }
    }

    const addMedia = async () => {
        const url = newMediaUrl.trim()
        if (!url) return
        setAddingMedia(true)
        try {
            await addEuProgramMedia(program.id, { url, mediaType: "IMAGE", title: undefined })
            setNewMediaUrl("")
            await refreshProgram()
            toast.success("Media added")
        } catch (e: unknown) {
            toast.error(e instanceof Error ? e.message : "Failed")
        } finally {
            setAddingMedia(false)
        }
    }

    const removeMedia = async (mediaId: string) => {
        try {
            await deleteEuProgramMedia(mediaId)
            await refreshProgram()
            toast.success("Media removed")
        } catch (e: unknown) {
            toast.error(e instanceof Error ? e.message : "Failed")
        }
    }

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-foreground">{program.nameEL || "Program details"}</h1>
                <Badge variant={program.active ? "default" : "secondary"}>{program.active ? "Active" : "Inactive"}</Badge>
            </div>

            {/* General — names & descriptions */}
            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2"><FileText className="h-4 w-4" /> General</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label>Name (EL)</Label>
                            <Input
                                value={program.nameEL ?? ""}
                                onChange={(e) => setProgram((p: Program) => ({ ...p, nameEL: e.target.value }))}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Name (EN)</Label>
                            <Input
                                value={program.nameEN ?? ""}
                                onChange={(e) => setProgram((p: Program) => ({ ...p, nameEN: e.target.value }))}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label>Short description (EL)</Label>
                            <Textarea
                                value={program.shortDescriptionEL ?? ""}
                                onChange={(e) => setProgram((p: Program) => ({ ...p, shortDescriptionEL: e.target.value }))}
                                rows={2}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Short description (EN)</Label>
                            <Textarea
                                value={program.shortDescriptionEN ?? ""}
                                onChange={(e) => setProgram((p: Program) => ({ ...p, shortDescriptionEN: e.target.value }))}
                                rows={2}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label>Description (EL)</Label>
                            <Textarea
                                value={program.descriptionEL ?? ""}
                                onChange={(e) => setProgram((p: Program) => ({ ...p, descriptionEL: e.target.value }))}
                                rows={4}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Description (EN)</Label>
                            <Textarea
                                value={program.descriptionEN ?? ""}
                                onChange={(e) => setProgram((p: Program) => ({ ...p, descriptionEN: e.target.value }))}
                                rows={4}
                            />
                        </div>
                    </div>
                    <Button
                        onClick={() => saveScalar("general", {
                            nameEL: program.nameEL,
                            nameEN: program.nameEN,
                            shortDescriptionEL: program.shortDescriptionEL,
                            shortDescriptionEN: program.shortDescriptionEN,
                            descriptionEL: program.descriptionEL,
                            descriptionEN: program.descriptionEN,
                        })}
                        disabled={savingSection === "general"}
                    >
                        {savingSection === "general" ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Save className="h-4 w-4 mr-2" />}
                        Save general
                    </Button>
                </CardContent>
            </Card>

            {/* Dates & status */}
            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2"><Calendar className="h-4 w-4" /> Dates & status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <Label>Announced date</Label>
                            <Input
                                type="date"
                                value={toDateInput(program.announcedDate)}
                                onChange={(e) => setProgram((p: Program) => ({ ...p, announcedDate: e.target.value ? new Date(e.target.value) : null }))}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Submission date</Label>
                            <Input
                                type="date"
                                value={toDateInput(program.submissionDate)}
                                onChange={(e) => setProgram((p: Program) => ({ ...p, submissionDate: e.target.value ? new Date(e.target.value) : null }))}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>End date</Label>
                            <Input
                                type="date"
                                value={toDateInput(program.endDate)}
                                onChange={(e) => setProgram((p: Program) => ({ ...p, endDate: e.target.value ? new Date(e.target.value) : null }))}
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox
                            checked={program.active ?? true}
                            onCheckedChange={(c) => setProgram((p: Program) => ({ ...p, active: !!c }))}
                        />
                        <Label>Program is active</Label>
                    </div>
                    <Button
                        onClick={() => saveScalar("dates", {
                            announcedDate: program.announcedDate,
                            submissionDate: program.submissionDate,
                            endDate: program.endDate,
                            active: program.active,
                        })}
                        disabled={savingSection === "dates"}
                    >
                        {savingSection === "dates" ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Save className="h-4 w-4 mr-2" />}
                        Save dates
                    </Button>
                </CardContent>
            </Card>

            {/* Financials */}
            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2"><Euro className="h-4 w-4" /> Financials</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="space-y-2">
                            <Label>Min budget (€)</Label>
                            <Input
                                type="number"
                                value={program.minBudget != null ? String(program.minBudget) : ""}
                                onChange={(e) => setProgram((p: Program) => ({ ...p, minBudget: e.target.value ? Number(e.target.value) : null }))}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Max budget (€)</Label>
                            <Input
                                type="number"
                                value={program.maxBudget != null ? String(program.maxBudget) : ""}
                                onChange={(e) => setProgram((p: Program) => ({ ...p, maxBudget: e.target.value ? Number(e.target.value) : null }))}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Finance %</Label>
                            <Input
                                value={program.percentageOfFinance ?? ""}
                                onChange={(e) => setProgram((p: Program) => ({ ...p, percentageOfFinance: e.target.value }))}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Indirect cost %</Label>
                            <Input
                                type="number"
                                step="0.01"
                                value={program.indirectCostPercentage ?? 0.07}
                                onChange={(e) => setProgram((p: Program) => ({ ...p, indirectCostPercentage: e.target.value ? Number(e.target.value) : 0.07 }))}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label>Minimum company years</Label>
                            <Input
                                type="number"
                                value={program.minimumCompanyYears ?? ""}
                                onChange={(e) => setProgram((p: Program) => ({ ...p, minimumCompanyYears: e.target.value ? parseInt(e.target.value, 10) : null }))}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Minimum employees</Label>
                            <Input
                                type="number"
                                value={program.minimumEmployees ?? ""}
                                onChange={(e) => setProgram((p: Program) => ({ ...p, minimumEmployees: e.target.value ? parseInt(e.target.value, 10) : null }))}
                            />
                        </div>
                    </div>
                    <Button
                        onClick={() => saveScalar("financials", {
                            minBudget: program.minBudget,
                            maxBudget: program.maxBudget,
                            percentageOfFinance: program.percentageOfFinance,
                            indirectCostPercentage: program.indirectCostPercentage,
                            minimumCompanyYears: program.minimumCompanyYears,
                            minimumEmployees: program.minimumEmployees,
                        })}
                        disabled={savingSection === "financials"}
                    >
                        {savingSection === "financials" ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Save className="h-4 w-4 mr-2" />}
                        Save financials
                    </Button>
                </CardContent>
            </Card>

            {/* Image & publication file */}
            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2"><ImageIcon className="h-4 w-4" /> Image & publication file</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label>Image URL</Label>
                        <Input
                            value={program.image ?? ""}
                            onChange={(e) => setProgram((p: Program) => ({ ...p, image: e.target.value }))}
                            placeholder="https://..."
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Publication file URL</Label>
                        <Input
                            value={program.publicationFile ?? ""}
                            onChange={(e) => setProgram((p: Program) => ({ ...p, publicationFile: e.target.value }))}
                            placeholder="https://..."
                        />
                    </div>
                    <Button
                        onClick={() => saveScalar("media-urls", { image: program.image, publicationFile: program.publicationFile })}
                        disabled={savingSection === "media-urls"}
                    >
                        {savingSection === "media-urls" ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Save className="h-4 w-4 mr-2" />}
                        Save
                    </Button>
                </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">Requirements (validator)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {(program.requirements || []).map((r: RequirementItem, idx: number) => (
                        <div key={r.id} className="grid grid-cols-12 gap-2 items-center p-3 rounded-lg border bg-muted/30">
                            <Input
                                className="col-span-2"
                                value={r.type}
                                onChange={(e) =>
                                    setProgram((p: Program) => ({
                                        ...p,
                                        requirements: (p.requirements || []).map((req: RequirementItem, i: number) =>
                                            i === idx ? { ...req, type: e.target.value } : req
                                        ),
                                    }))
                                }
                            />
                            <Input
                                className="col-span-2"
                                value={r.key}
                                onChange={(e) =>
                                    setProgram((p: Program) => ({
                                        ...p,
                                        requirements: (p.requirements || []).map((req: RequirementItem, i: number) =>
                                            i === idx ? { ...req, key: e.target.value } : req
                                        ),
                                    }))
                                }
                            />
                            <Input
                                className="col-span-2"
                                value={r.operator}
                                onChange={(e) =>
                                    setProgram((p: Program) => ({
                                        ...p,
                                        requirements: (p.requirements || []).map((req: RequirementItem, i: number) =>
                                            i === idx ? { ...req, operator: e.target.value } : req
                                        ),
                                    }))
                                }
                            />
                            <Input
                                className="col-span-2"
                                value={r.value}
                                onChange={(e) =>
                                    setProgram((p: Program) => ({
                                        ...p,
                                        requirements: (p.requirements || []).map((req: RequirementItem, i: number) =>
                                            i === idx ? { ...req, value: e.target.value } : req
                                        ),
                                    }))
                                }
                            />
                            <Input
                                className="col-span-3"
                                value={r.errorMessageEL}
                                onChange={(e) =>
                                    setProgram((p: Program) => ({
                                        ...p,
                                        requirements: (p.requirements || []).map((req: RequirementItem, i: number) =>
                                            i === idx ? { ...req, errorMessageEL: e.target.value } : req
                                        ),
                                    }))
                                }
                                placeholder="Error message (EL)"
                            />
                            <div className="col-span-1 flex items-center gap-1">
                                <Checkbox
                                    checked={r.isMandatory}
                                    onCheckedChange={(c) =>
                                        setProgram((p: Program) => ({
                                            ...p,
                                            requirements: (p.requirements || []).map((req: RequirementItem, i: number) =>
                                                i === idx ? { ...req, isMandatory: !!c } : req
                                            ),
                                        }))
                                    }
                                />
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    onClick={() =>
                                        setProgram((p: Program) => ({
                                            ...p,
                                            requirements: (p.requirements || []).filter((_: RequirementItem, i: number) => i !== idx),
                                        }))
                                    }
                                >
                                    <Trash2 className="h-4 w-4 text-destructive" />
                                </Button>
                            </div>
                        </div>
                    ))}
                    <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() =>
                            setProgram((p: Program) => ({
                                ...p,
                                requirements: [
                                    ...(p.requirements || []),
                                    {
                                        id: `new-${Date.now()}`,
                                        type: "TEXT",
                                        key: "",
                                        operator: "EQ",
                                        value: "",
                                        isMandatory: true,
                                        errorMessageEL: "",
                                    },
                                ],
                            }))
                        }
                    >
                        <Plus className="h-4 w-4 mr-2" /> Add requirement
                    </Button>
                    <Button
                        onClick={() => saveFull("requirements", program)}
                        disabled={savingSection === "requirements"}
                    >
                        {savingSection === "requirements" ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Save className="h-4 w-4 mr-2" />}
                        Save requirements
                    </Button>
                </CardContent>
            </Card>

            {/* Expense limits */}
            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="text-base">Expense limits (OPSKE)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {(program.expenseLimits || []).map((e: ExpenseLimitItem, idx: number) => (
                        <div key={e.id} className="grid grid-cols-12 gap-2 items-center p-3 rounded-lg border bg-muted/30">
                            <Input
                                className="col-span-2"
                                value={e.expenseCategory?.code ?? ""}
                                onChange={(ev) =>
                                    setProgram((p: Program) => ({
                                        ...p,
                                        expenseLimits: (p.expenseLimits || []).map((lim: ExpenseLimitItem, i: number) =>
                                            i === idx
                                                ? {
                                                    ...lim,
                                                    expenseCategory: {
                                                        ...lim.expenseCategory,
                                                        code: ev.target.value,
                                                        descriptionEL: lim.expenseCategory?.descriptionEL ?? "",
                                                    },
                                                }
                                                : lim
                                        ),
                                    }))
                                }
                                placeholder="Code"
                            />
                            <Input
                                className="col-span-3"
                                value={e.expenseCategory?.descriptionEL ?? ""}
                                onChange={(ev) =>
                                    setProgram((p: Program) => ({
                                        ...p,
                                        expenseLimits: (p.expenseLimits || []).map((lim: ExpenseLimitItem, i: number) =>
                                            i === idx
                                                ? {
                                                    ...lim,
                                                    expenseCategory: {
                                                        ...lim.expenseCategory,
                                                        code: lim.expenseCategory?.code ?? "",
                                                        descriptionEL: ev.target.value,
                                                    },
                                                }
                                                : lim
                                        ),
                                    }))
                                }
                                placeholder="Description"
                            />
                            <Input
                                className="col-span-2"
                                type="number"
                                value={e.maxPercentage ?? ""}
                                onChange={(ev) =>
                                    setProgram((p: Program) => ({
                                        ...p,
                                        expenseLimits: (p.expenseLimits || []).map((lim: ExpenseLimitItem, i: number) =>
                                            i === idx ? { ...lim, maxPercentage: ev.target.value ? Number(ev.target.value) : null } : lim
                                        ),
                                    }))
                                }
                                placeholder="Max %"
                            />
                            <Input
                                className="col-span-2"
                                type="number"
                                value={e.minPercentage ?? ""}
                                onChange={(ev) =>
                                    setProgram((p: Program) => ({
                                        ...p,
                                        expenseLimits: (p.expenseLimits || []).map((lim: ExpenseLimitItem, i: number) =>
                                            i === idx ? { ...lim, minPercentage: ev.target.value ? Number(ev.target.value) : null } : lim
                                        ),
                                    }))
                                }
                                placeholder="Min %"
                            />
                            <Input
                                className="col-span-2"
                                value={e.maxAmount != null ? String(e.maxAmount) : ""}
                                onChange={(ev) =>
                                    setProgram((p: Program) => ({
                                        ...p,
                                        expenseLimits: (p.expenseLimits || []).map((lim: ExpenseLimitItem, i: number) =>
                                            i === idx ? { ...lim, maxAmount: ev.target.value || null } : lim
                                        ),
                                    }))
                                }
                                placeholder="Max amount"
                            />
                            <div className="col-span-1 flex items-center gap-1">
                                <Checkbox
                                    checked={e.isMandatory}
                                    onCheckedChange={(c) =>
                                        setProgram((p: Program) => ({
                                            ...p,
                                            expenseLimits: (p.expenseLimits || []).map((lim: ExpenseLimitItem, i: number) =>
                                                i === idx ? { ...lim, isMandatory: !!c } : lim
                                            ),
                                        }))
                                    }
                                />
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    onClick={() =>
                                        setProgram((p: Program) => ({
                                            ...p,
                                            expenseLimits: (p.expenseLimits || []).filter((_: ExpenseLimitItem, i: number) => i !== idx),
                                        }))
                                    }
                                >
                                    <Trash2 className="h-4 w-4 text-destructive" />
                                </Button>
                            </div>
                        </div>
                    ))}
                    <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() =>
                            setProgram((p: Program) => ({
                                ...p,
                                expenseLimits: [
                                    ...(p.expenseLimits || []),
                                    {
                                        id: `new-${Date.now()}`,
                                        maxPercentage: null,
                                        minPercentage: null,
                                        maxAmount: null,
                                        isMandatory: false,
                                        expenseCategory: { code: "", descriptionEL: "" },
                                    },
                                ],
                            }))
                        }
                    >
                        <Plus className="h-4 w-4 mr-2" /> Add expense limit
                    </Button>
                    <Button
                        onClick={() => saveFull("expenseLimits", program)}
                        disabled={savingSection === "expenseLimits"}
                    >
                        {savingSection === "expenseLimits" ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Save className="h-4 w-4 mr-2" />}
                        Save expense limits
                    </Button>
                </CardContent>
            </Card>

            {/* Regions — only top-level regions, not regional parts */}
            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2"><MapPin className="h-4 w-4" /> Regions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">Only regions (no regional parts). Click to toggle link. Linked: {linkedPeriferiaIds.size}</p>
                    <div className="flex flex-wrap gap-2">
                        {regionsOnly.map((p: RegionItem) => (
                            <Badge
                                key={p.id}
                                variant={linkedPeriferiaIds.has(p.id) ? "default" : "outline"}
                                className="cursor-pointer"
                                onClick={() => togglePeriferia(p.id)}
                            >
                                {p.nameEL}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* KADs — search and add by prefix (e.g. 71.34* or 74*) */}
            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2"><FileCode className="h-4 w-4" /> KADs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2 items-center">
                        <Input
                            placeholder="Search KAD (e.g. 71.34 or 71.34* to add all starting with 71.34)"
                            value={kadSearch}
                            onChange={(e) => setKadSearch(e.target.value)}
                            className="max-w-sm font-mono"
                        />
                        <Button
                            size="sm"
                            disabled={addingKads || !kadSearch.trim()}
                            onClick={async () => {
                                const query = kadSearch.trim()
                                if (!query) return
                                const isPrefixMatch = query.endsWith("*")
                                const prefix = isPrefixMatch ? query.slice(0, -1).trim() : query
                                const prefixNorm = prefix.replace(/\./g, "")
                                const matches = kads.filter((k) => {
                                    const alreadyLinked = linkedKadIds.has(k.id)
                                    if (isPrefixMatch) {
                                        const match = (k.dotcode && k.dotcode.startsWith(prefix)) || k.code.startsWith(prefixNorm)
                                        return match && !alreadyLinked
                                    }
                                    const codeStr = (k.dotcode ?? k.code).toLowerCase()
                                    const nameStr = (k.nameEL ?? "").toLowerCase()
                                    const q = prefix.toLowerCase()
                                    return (codeStr.includes(q) || nameStr.includes(q)) && !alreadyLinked
                                })
                                if (matches.length === 0) {
                                    toast.info(isPrefixMatch ? `No KADs start with "${prefix}"` : "No matching KADs or already linked")
                                    return
                                }
                                setAddingKads(true)
                                try {
                                    for (const k of matches) {
                                        await linkKadToProgram(program.id, k.id)
                                    }
                                    await refreshProgram()
                                    toast.success(`Added ${matches.length} KAD(s)`)
                                    if (isPrefixMatch) setKadSearch("")
                                } catch (e: unknown) {
                                    toast.error(e instanceof Error ? e.message : "Failed to add KADs")
                                } finally {
                                    setAddingKads(false)
                                }
                            }}
                        >
                            {addingKads ? <Loader2 className="h-4 w-4 animate-spin mr-1" /> : <Plus className="h-4 w-4 mr-1" />}
                            Add to KADs
                        </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">Linked: {linkedKadIds.size}. Use 71.34* to add all KADs starting with 71.34; 74* for all starting with 74.</p>
                    <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto">
                        {(kadSearch.trim()
                            ? kads.filter((k) => {
                                const q = kadSearch.trim().toLowerCase()
                                const codeStr = ((k.dotcode ?? k.code) ?? "").toLowerCase()
                                const nameStr = (k.nameEL ?? "").toLowerCase()
                                if (q.endsWith("*")) {
                                    const prefix = q.slice(0, -1)
                                    const prefixNorm = prefix.replace(/\./g, "")
                                    return (k.dotcode && k.dotcode.toLowerCase().startsWith(prefix)) || k.code.toLowerCase().startsWith(prefixNorm)
                                }
                                return codeStr.includes(q) || nameStr.includes(q)
                            })
                            : kads
                        ).map((k: KadItem) => (
                            <Badge
                                key={k.id}
                                variant={linkedKadIds.has(k.id) ? "default" : "outline"}
                                className="cursor-pointer font-mono"
                                onClick={() => toggleKad(k.id)}
                            >
                                {k.dotcode ?? k.code} {k.nameEL ? `— ${k.nameEL}` : ""}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Media (EuProgramMedia) */}
            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2"><ImagePlus className="h-4 w-4" /> Media</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-4">
                        {(program.media || []).map((m: MediaItem) => (
                            <div key={m.id} className="relative border rounded-lg overflow-hidden w-32 h-32 bg-muted">
                                {m.mediaType === "IMAGE" ? (
                                    <img src={m.url} alt={m.title || ""} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground">File</div>
                                )}
                                <Button
                                    type="button"
                                    variant="destructive"
                                    size="icon"
                                    className="absolute top-1 right-1 h-6 w-6"
                                    onClick={() => removeMedia(m.id)}
                                >
                                    <Trash2 className="h-3 w-3" />
                                </Button>
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        <Input
                            placeholder="Image or file URL"
                            value={newMediaUrl}
                            onChange={(e) => setNewMediaUrl(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && addMedia()}
                        />
                        <Button onClick={addMedia} disabled={addingMedia || !newMediaUrl.trim()}>
                            {addingMedia ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4 mr-2" />}
                            Add media
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
