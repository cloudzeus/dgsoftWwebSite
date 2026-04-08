"use client"

import * as React from "react"
import { ColumnDef } from "@tanstack/react-table"
import {
    ChevronDown,
    Plus,
    RefreshCcw,
    Upload,
    FileText,
    Settings,
    Map,
    FileCode,
    Database,
    Check,
    Image as ImageIcon,
    Briefcase,
    Languages,
    Edit,
    Trash2,
    Calendar,
    Euro,
    ExternalLink,
    Mail,
} from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"

import {
    createEuProgram, updateEuProgram, deleteEuProgram, getEuPrograms,
    getAllPeriferies, linkPeriferiaToProgram, unlinkPeriferiaFromProgram,
    processOcrAndCreateKads, linkKadToProgram, unlinkKadFromProgram, getAllKadsList
} from "@/app/lib/actions/eu-program"
import { processGrantPdfAction } from "@/app/actions/process-grant"
import { GenericDataTable } from "../shared/generic-data-table"
import { GenerateEuProgramEmailListModal } from "@/components/admin/eu-programs/generate-eu-program-email-list-modal"

export type EuProgramType = {
    id: string; nameEL: string; nameEN: string | null; shortDescriptionEL: string | null; shortDescriptionEN: string | null; descriptionEL: string | null; descriptionEN: string | null;
    announcedDate: Date | null; submissionDate: Date | null; endDate: Date | null; active: boolean; publicationFile: string | null; image: string | null;
    minimumCompanyYears: number | null; minimumEmployees: number | null; percentageOfFinance: string | null; minBudget: number | string | null; maxBudget: number | string | null; indirectCostPercentage: number | null;
    technologiesEL: any; technologiesEN: any; companyTypes: any;
    criteria?: { id: string; key: string; operator: string; targetValue: string; errorMessage: string }[];
    requirements?: { id: string; type: string; key: string; operator: string; value: string; isMandatory: boolean; errorMessageEL: string }[];
    expenseLimits?: {
        id: string;
        maxPercentage: number | null;
        minPercentage: number | null;
        maxAmount: number | string | null;
        isMandatory: boolean;
        expenseCategory: { code: string; descriptionEL: string };
    }[];
    kads?: { kad: { id: string; code: string; dotcode?: string | null; nameEL: string | null } }[];
    periferies?: { periferia: { id: string; nameEL: string } }[];
};

type CriterionFormItem = {
    key: string
    operator: string
    targetValue: string
    errorMessage: string
}

type RequirementFormItem = {
    type: string
    key: string
    operator: string
    value: string
    isMandatory: boolean
    errorMessageEL: string
}

type ExpenseLimitFormItem = {
    code: string
    description: string
    maxPercentage: string
    minPercentage: string
    maxAmount: string
    isMandatory: boolean
}

const WIZARD_STEPS = [
    { value: "general", label: "1. Names" },
    { value: "dates", label: "2. Dates" },
    { value: "financials", label: "3. Budget" },
    { value: "criteria", label: "4. Rules" },
    { value: "requirements", label: "5. Reqs" },
    { value: "expenseLimits", label: "6. Limits" },
    { value: "regions", label: "7. Regions" },
    { value: "kads", label: "8. KADs & PDF" },
    { value: "media", label: "9. Media" },
] as const

type WizardStepValue = (typeof WIZARD_STEPS)[number]["value"]

function budgetToNumber(value: number | string | null | undefined): number | null {
    if (value == null || value === "") return null
    const n = Number(value)
    return Number.isFinite(n) ? n : null
}

export function DataTableEuPrograms({ data: initialData }: { data: EuProgramType[] }) {
    const [data, setData] = React.useState<EuProgramType[]>(initialData || [])
    const [isDialogOpen, setIsDialogOpen] = React.useState(false)
    const [editingProgram, setEditingProgram] = React.useState<EuProgramType | null>(null)
    const [isSaving, setIsSaving] = React.useState(false)

    // Master lists
    const [allPeriferies, setAllPeriferies] = React.useState<any[]>([])
    const [allKads, setAllKads] = React.useState<any[]>([])

    // States for relational links
    const [selectedPeriferies, setSelectedPeriferies] = React.useState<Set<string>>(new Set())
    const [selectedKads, setSelectedKads] = React.useState<Set<string>>(new Set())
    const [kadSearch, setKadSearch] = React.useState("")

    // PDF parser states
    const [isProcessingProgramDetails, setIsProcessingProgramDetails] = React.useState(false)
    const [programDetailsFile, setProgramDetailsFile] = React.useState<File | null>(null)
    const [manualKadInput, setManualKadInput] = React.useState("")
    const [isImportingManualKads, setIsImportingManualKads] = React.useState(false)
    const [isTranslating, setIsTranslating] = React.useState(false)
    const [currentStep, setCurrentStep] = React.useState<WizardStepValue>("general")
    const [rowUploadProgram, setRowUploadProgram] = React.useState<EuProgramType | null>(null)
    const [rowUploadFile, setRowUploadFile] = React.useState<File | null>(null)
    const [isRowUploadModalOpen, setIsRowUploadModalOpen] = React.useState(false)
    const [deepSeekModalOpen, setDeepSeekModalOpen] = React.useState(false)
    const [deepSeekStatus, setDeepSeekStatus] = React.useState<"idle" | "processing" | "success" | "error">("idle")
    const [deepSeekMessage, setDeepSeekMessage] = React.useState("")
    const [deepSeekResult, setDeepSeekResult] = React.useState<{ requirements: number; expenseLimits: number; kads: number } | null>(null)
    const [parseSummaryByProgram, setParseSummaryByProgram] = React.useState<Record<string, { requirements: number; expenseLimits: number; kads: number }>>({})
    const [emailListProgram, setEmailListProgram] = React.useState<EuProgramType | null>(null)
    const [emailListModalOpen, setEmailListModalOpen] = React.useState(false)

    const [formData, setFormData] = React.useState({
        nameEL: "", nameEN: "", shortDescriptionEL: "", shortDescriptionEN: "", descriptionEL: "", descriptionEN: "",
        announcedDate: "", submissionDate: "", endDate: "", active: true, publicationFile: "", image: "",
        minimumCompanyYears: "", minimumEmployees: "", percentageOfFinance: "", minBudget: "", maxBudget: "", indirectCostPercentage: "0.07",
        criteria: [] as CriterionFormItem[],
        requirements: [] as RequirementFormItem[],
        expenseLimits: [] as ExpenseLimitFormItem[],
    })

    React.useEffect(() => {
        getAllPeriferies().then(p => setAllPeriferies(p || []))
        getAllKadsList().then(k => setAllKads(k || []))
    }, [])

    const applyProgramToEditor = React.useCallback((program: EuProgramType) => {
        setEditingProgram(program)
        setFormData({
            nameEL: program.nameEL || "", nameEN: program.nameEN || "", shortDescriptionEL: program.shortDescriptionEL || "", shortDescriptionEN: program.shortDescriptionEN || "",
            descriptionEL: program.descriptionEL || "", descriptionEN: program.descriptionEN || "",
            announcedDate: program.announcedDate ? new Date(program.announcedDate).toISOString().split('T')[0] : "",
            submissionDate: program.submissionDate ? new Date(program.submissionDate).toISOString().split('T')[0] : "",
            endDate: program.endDate ? new Date(program.endDate).toISOString().split('T')[0] : "",
            active: program.active ?? true, publicationFile: program.publicationFile || "", image: program.image || "",
            minimumCompanyYears: program.minimumCompanyYears ? String(program.minimumCompanyYears) : "",
            minimumEmployees: program.minimumEmployees ? String(program.minimumEmployees) : "",
            percentageOfFinance: program.percentageOfFinance || "",
            minBudget: program.minBudget != null ? String(program.minBudget) : "",
            maxBudget: program.maxBudget != null ? String(program.maxBudget) : "",
            indirectCostPercentage: program.indirectCostPercentage != null ? String(program.indirectCostPercentage) : "0.07",
            criteria: (program.criteria || []).map((c) => ({
                key: c.key || "",
                operator: c.operator || ">=",
                targetValue: c.targetValue || "",
                errorMessage: c.errorMessage || "",
            })),
            requirements: (program.requirements || []).map((r) => ({
                type: r.type || "TEXT",
                key: r.key || "",
                operator: r.operator || "EQ",
                value: r.value || "",
                isMandatory: r.isMandatory !== false,
                errorMessageEL: r.errorMessageEL || "",
            })),
            expenseLimits: (program.expenseLimits || []).map((e) => ({
                code: e.expenseCategory?.code || "",
                description: e.expenseCategory?.descriptionEL || "",
                maxPercentage: e.maxPercentage != null ? String(e.maxPercentage) : "",
                minPercentage: e.minPercentage != null ? String(e.minPercentage) : "",
                maxAmount: e.maxAmount != null ? String(e.maxAmount) : "",
                isMandatory: e.isMandatory === true,
            })),
        })
        setSelectedPeriferies(new Set(program.periferies?.map(p => p.periferia.id) || []))
        setSelectedKads(new Set(program.kads?.map(k => k.kad.id) || []))
    }, [])

    const refreshProgramFromDb = React.useCallback(async (programId: string) => {
        const allPrograms = await getEuPrograms()
        const refreshedProgram = (allPrograms || []).find((p: EuProgramType) => p.id === programId)
        if (!refreshedProgram) return
        setData((prev) => prev.map((item) => (item.id === programId ? refreshedProgram : item)))
        if (editingProgram?.id === programId) {
            applyProgramToEditor(refreshedProgram)
        }
    }, [applyProgramToEditor, editingProgram?.id])

    const openEdit = (program?: EuProgramType) => {
        setCurrentStep("general")
        setManualKadInput("")
        if (program) {
            applyProgramToEditor(program)
        } else {
            setEditingProgram(null)
            setFormData({
                nameEL: "", nameEN: "", shortDescriptionEL: "", shortDescriptionEN: "", descriptionEL: "", descriptionEN: "",
                announcedDate: "", submissionDate: "", endDate: "", active: true, publicationFile: "", image: "",
                minimumCompanyYears: "", minimumEmployees: "", percentageOfFinance: "", minBudget: "", maxBudget: "", indirectCostPercentage: "0.07",
                criteria: [], requirements: [], expenseLimits: []
            })
            setSelectedPeriferies(new Set())
            setSelectedKads(new Set())
        }
        setIsDialogOpen(true)
    }

    const currentStepIndex = WIZARD_STEPS.findIndex((s) => s.value === currentStep)
    const isFirstStep = currentStepIndex <= 0
    const isLastStep = currentStepIndex >= WIZARD_STEPS.length - 1

    const goToPreviousStep = () => {
        if (isFirstStep) return
        setCurrentStep(WIZARD_STEPS[currentStepIndex - 1].value)
    }

    const goToNextStep = () => {
        if (isLastStep) return
        setCurrentStep(WIZARD_STEPS[currentStepIndex + 1].value)
    }

    const parseKadCodesFromText = (raw: string): string[] => {
        const matches = raw.match(/\d{2}(?:[.,]\d{2}){1,3}/g) || []
        return Array.from(new Set(matches.map((m) => m.replace(",", ".").trim())))
    }

    const openDeepSeekProgress = (programName: string) => {
        setDeepSeekStatus("processing")
        setDeepSeekMessage(`Processing "${programName}" with DeepSeek. Please wait...`)
        setDeepSeekResult(null)
        setDeepSeekModalOpen(true)
    }

    const closeDeepSeekModal = () => {
        if (deepSeekStatus === "processing") return
        setDeepSeekModalOpen(false)
    }

    const applyParseSummary = (programId: string, requirements: number, expenseLimits: number, kads: number) => {
        setParseSummaryByProgram((prev) => ({
            ...prev,
            [programId]: { requirements, expenseLimits, kads }
        }))
    }

    const parseProgramDetails = async (programId: string, file: File, programName: string) => {
        openDeepSeekProgress(programName)
        const formData = new FormData()
        formData.append("euProgramId", programId)
        formData.append("file", file)
        const result = await processGrantPdfAction(formData)
        if (!result.success) {
            const errMessage = result.error || "Failed to parse program details"
            setDeepSeekStatus("error")
            setDeepSeekMessage(errMessage)
            throw new Error(errMessage)
        }
        const requirements = result.requirementsCount ?? 0
        const expenseLimits = result.expenseLimitsCount ?? 0
        const kads = result.eligibleKadsCount ?? 0
        applyParseSummary(programId, requirements, expenseLimits, kads)
        await refreshProgramFromDb(programId)
        setDeepSeekStatus("success")
        setDeepSeekResult({ requirements, expenseLimits, kads })
        setDeepSeekMessage(`Finished parsing "${programName}".`)
        return { requirements, expenseLimits, kads }
    }

    const handleTranslate = async () => {
        setIsTranslating(true)
        toast.loading("Translating...", { id: "translate" })
        try {
            const updates: any = {}
            const fields = [['nameEL', 'nameEN'], ['shortDescriptionEL', 'shortDescriptionEN'], ['descriptionEL', 'descriptionEN']]
            for (const [src, dst] of fields) {
                if (formData[src as keyof typeof formData] && !formData[dst as keyof typeof formData]) {
                    const res = await fetch("/api/admin/translate", { method: "POST", body: JSON.stringify({ text: formData[src as keyof typeof formData], targetLang: "en" }) })
                    const d = await res.json()
                    if (d.translated) updates[dst] = d.translated
                }
            }
            setFormData(prev => ({ ...prev, ...updates }))
            toast.success("Ready!", { id: "translate" })
        } catch (err: any) {
            toast.error(err.message, { id: "translate" })
        } finally {
            setIsTranslating(false)
        }
    }

    const handleSave = async () => {
        setIsSaving(true)
        try {
            let resProgram: any = editingProgram
                ? await updateEuProgram(editingProgram.id, formData)
                : await createEuProgram(formData)

            if (resProgram && resProgram.id) {
                // Sync Periferies
                const previouslySelectedPerifs = editingProgram?.periferies?.map((p: any) => p.periferia.id) || [];
                for (let pId of previouslySelectedPerifs) if (!selectedPeriferies.has(pId)) await unlinkPeriferiaFromProgram(resProgram.id, pId)
                for (let pId of Array.from(selectedPeriferies)) if (!previouslySelectedPerifs.includes(pId)) await linkPeriferiaToProgram(resProgram.id, pId)

                // Sync KADs
                const previouslySelectedKads = editingProgram?.kads?.map((k: any) => k.kad.id) || [];
                for (let kId of previouslySelectedKads) if (!selectedKads.has(kId)) await unlinkKadFromProgram(resProgram.id, kId)
                for (let kId of Array.from(selectedKads)) if (!previouslySelectedKads.includes(kId)) await linkKadToProgram(resProgram.id, kId)

                toast.success("Saved successfully")
                window.location.reload()
            }
        } catch (err: any) {
            toast.error(err.message)
        } finally {
            setIsSaving(false)
        }
    }

    const handleDelete = async (id: string) => {
        if (!confirm("Delete program?")) return
        try {
            await deleteEuProgram(id)
            setData(prev => prev.filter(d => d.id !== id))
            toast.success("Deleted")
        } catch (err: any) { toast.error(err.message) }
    }

    const handleUploadProgramDetails = async () => {
        if (!editingProgram?.id) {
            toast.error("Save program first, then upload PDF details.")
            return
        }
        if (!programDetailsFile) {
            toast.error("Choose a PDF first.")
            return
        }

        setIsProcessingProgramDetails(true)
        toast.loading("Processing PDF with DeepSeek...", { id: "program-details" })
        try {
            const parsed = await parseProgramDetails(editingProgram.id, programDetailsFile, editingProgram.nameEL)
            toast.success(
                `Parsed ${parsed.requirements} requirements, ${parsed.expenseLimits} expense limits, ${parsed.kads} KADs.`,
                { id: "program-details" }
            )
            setProgramDetailsFile(null)
        } catch (error: any) {
            toast.error(error?.message || "Processing failed", { id: "program-details" })
        } finally {
            setIsProcessingProgramDetails(false)
        }
    }

    const handleRowUploadSubmit = async () => {
        if (!rowUploadProgram?.id) {
            toast.error("No program selected.")
            return
        }
        if (!rowUploadFile) {
            toast.error("Choose a PDF first.")
            return
        }
        try {
            setIsRowUploadModalOpen(false)
            const parsed = await parseProgramDetails(rowUploadProgram.id, rowUploadFile, rowUploadProgram.nameEL)
            toast.success(`Parsed ${parsed.requirements} requirements, ${parsed.expenseLimits} expense limits, ${parsed.kads} KADs.`)
            setRowUploadFile(null)
        } catch (error: any) {
            toast.error(error?.message || "Processing failed")
        }
    }

    const handleImportManualKads = async () => {
        const parsedCodes = parseKadCodesFromText(manualKadInput)
        if (parsedCodes.length === 0) {
            toast.error("No valid KAD codes found. Paste values like 46.11, 56.10.")
            return
        }

        setIsImportingManualKads(true)
        toast.loading("Importing KADs from text...", { id: "manual-kads" })
        try {
            const normalize = (value: string) => value.replace(/\./g, "").trim()
            const knownByCode = new globalThis.Map<string, any>()
            for (const kad of allKads) {
                const codeNorm = normalize(String(kad.code ?? ""))
                const dotNorm = normalize(String(kad.dotcode ?? ""))
                if (codeNorm) knownByCode.set(codeNorm, kad)
                if (dotNorm) knownByCode.set(dotNorm, kad)
            }

            const existingToSelect = new Set<string>()
            const missingCodes: string[] = []
            for (const code of parsedCodes) {
                const known = knownByCode.get(normalize(code))
                if (known?.id) existingToSelect.add(known.id)
                else missingCodes.push(code)
            }

            if (missingCodes.length > 0) {
                if (!editingProgram?.id) {
                    throw new Error("Save program first to create new KAD entries from manual input.")
                }
                await processOcrAndCreateKads(
                    editingProgram.id,
                    missingCodes.map((code) => ({ code, desc: "Manual import from admin prompt" }))
                )
                const refreshed = await getAllKadsList()
                setAllKads(refreshed || [])
                for (const kad of refreshed || []) {
                    const codeNorm = normalize(String(kad.code ?? ""))
                    const dotNorm = normalize(String(kad.dotcode ?? ""))
                    if (missingCodes.some((m) => normalize(m) === codeNorm || normalize(m) === dotNorm)) {
                        existingToSelect.add(kad.id)
                    }
                }
            }

            setSelectedKads((prev) => {
                const next = new Set(prev)
                for (const id of existingToSelect) next.add(id)
                return next
            })
            toast.success(`Imported ${parsedCodes.length} KAD codes.`, { id: "manual-kads" })
        } catch (error: any) {
            toast.error(error?.message || "Manual KAD import failed.", { id: "manual-kads" })
        } finally {
            setIsImportingManualKads(false)
        }
    }

    const columns: ColumnDef<EuProgramType>[] = [
        {
            accessorKey: "nameEL",
            header: "Program Name",
            cell: ({ row }) => (
                <div className="flex flex-col">
                    <span className="font-bold text-sm lg:text-base">{row.original.nameEL}</span>
                    {row.original.nameEN && <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{row.original.nameEN}</span>}
                </div>
            )
        },
        {
            accessorKey: "maxBudget",
            header: "Max Budget",
            cell: ({ row }) => budgetToNumber(row.original.maxBudget) ? (
                <div className="flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400">
                    <Euro className="w-3 h-3" />
                    {budgetToNumber(row.original.maxBudget)?.toLocaleString()}
                </div>
            ) : "—"
        },
        {
            id: "stats",
            header: "Mapping",
            cell: ({ row }) => {
                const summary = parseSummaryByProgram[row.original.id]
                const requirementsCount = summary?.requirements ?? (row.original.requirements?.length || 0)
                const expenseLimitsCount = summary?.expenseLimits ?? (row.original.expenseLimits?.length || 0)
                const kadsCount = summary?.kads ?? (row.original.kads?.length || 0)
                const isParsed = requirementsCount > 0 || expenseLimitsCount > 0 || kadsCount > 0
                return (
                    <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant="outline" className="text-[10px] h-5 bg-zinc-100 dark:bg-zinc-800">{kadsCount} KADs</Badge>
                        <Badge variant="outline" className="text-[10px] h-5 bg-zinc-100 dark:bg-zinc-800">{row.original.periferies?.length || 0} Regions</Badge>
                        <Badge variant="outline" className="text-[10px] h-5 bg-zinc-100 dark:bg-zinc-800">{requirementsCount} Requirements</Badge>
                        <Badge variant="outline" className="text-[10px] h-5 bg-zinc-100 dark:bg-zinc-800">{row.original.criteria?.length || 0} Rules</Badge>
                        <Badge variant="outline" className="text-[10px] h-5 bg-zinc-100 dark:bg-zinc-800">{expenseLimitsCount} Expense Limits</Badge>
                        <Badge variant={isParsed ? "default" : "secondary"} className="text-[10px] h-5">{isParsed ? "AI Parsed" : "Not Parsed"}</Badge>
                    </div>
                )
            }
        },
        {
            accessorKey: "active",
            header: "Status",
            cell: ({ row }) => (
                <Badge variant={row.original.active ? "default" : "destructive"} className="text-[10px] font-bold">
                    {row.original.active ? "ACTIVE" : "CLOSED"}
                </Badge>
            )
        },
        {
            id: "actions",
            cell: ({ row }) => (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild onClick={e => e.stopPropagation()}>
                        <Button variant="outline" size="sm" className="bg-zinc-700 text-white border-none font-bold h-8">
                            Actions <ChevronDown className="h-4 w-4 ml-1" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                            <Link href={`/admin/eu-programs/${row.original.id}`} className="flex items-center">
                                <ExternalLink className="w-4 h-4 mr-2" /> Program details
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href={`/admin/eu-programs/${row.original.id}/expense-categories`} className="flex items-center">
                                <Database className="w-4 h-4 mr-2" /> Expense categories (OPSKE)
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => openEdit(row.original)}><Edit className="w-4 h-4 mr-2" /> Edit Program (wizard)</DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => {
                                setRowUploadProgram(row.original)
                                setRowUploadFile(null)
                                setIsRowUploadModalOpen(true)
                            }}
                        >
                            <Upload className="w-4 h-4 mr-2" /> Upload Entire PDF
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => {
                                setEmailListProgram(row.original)
                                setEmailListModalOpen(true)
                            }}
                        >
                            <Mail className="w-4 h-4 mr-2" /> Generate email list
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => handleDelete(row.original.id)} className="text-red-500"><Trash2 className="w-4 h-4 mr-2" /> Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    ]

    return (
        <div className="space-y-4">
            <GenericDataTable
                columns={columns}
                data={data}
                searchPlaceholder="Search programs..."
                searchColumn="nameEL"
                onAddClick={() => openEdit()}
                addButtonLabel="Add EU Program"
                renderExpandedRow={(program) => (
                    <div className="space-y-4 py-4 px-2">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white dark:bg-zinc-950 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                                <h5 className="text-[10px] font-black text-zinc-400 uppercase mb-3 flex items-center gap-2"><FileText className="w-3 h-3" /> Program Overview</h5>
                                <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">{program.shortDescriptionEL || "No description provided."}</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {program.submissionDate && <Badge variant="secondary" className="text-[10px]"><Calendar className="w-3 h-3 mr-1" /> Ends: {new Date(program.submissionDate).toLocaleDateString()}</Badge>}
                                    {program.percentageOfFinance && <Badge variant="secondary" className="text-[10px]">{program.percentageOfFinance} Finance</Badge>}
                                    {budgetToNumber(program.minBudget) != null && <Badge variant="secondary" className="text-[10px]">Min: {budgetToNumber(program.minBudget)?.toLocaleString()} EUR</Badge>}
                                    {budgetToNumber(program.maxBudget) != null && <Badge variant="secondary" className="text-[10px]">Max: {budgetToNumber(program.maxBudget)?.toLocaleString()} EUR</Badge>}
                                </div>
                            </div>
                            <div className="bg-white dark:bg-zinc-950 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                                <h5 className="text-[10px] font-black text-zinc-400 uppercase mb-3 flex items-center gap-2"><Map className="w-3 h-3" /> Active Regions</h5>
                                <div className="flex flex-wrap gap-1">
                                    {program.periferies?.map(p => <Badge key={p.periferia.id} variant="outline" className="text-[9px]">{p.periferia.nameEL}</Badge>) || <span className="text-[10px] italic text-zinc-500">None linked</span>}
                                </div>
                            </div>
                            <div className="bg-white dark:bg-zinc-950 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                                <h5 className="text-[10px] font-black text-zinc-400 uppercase mb-3 flex items-center gap-2"><FileCode className="w-3 h-3" /> Top Linked KADs</h5>
                                <div className="grid grid-cols-2 gap-1">
                                    {program.kads?.slice(0, 10).map(k => <div key={k.kad.id} className="text-[10px] font-mono text-zinc-500 truncate">{k.kad.code}</div>) || <span className="text-[10px] italic text-zinc-500">None linked</span>}
                                    {program.kads && program.kads.length > 10 && <div className="text-[10px] font-bold text-zinc-400">+{program.kads.length - 10} more</div>}
                                </div>
                            </div>
                        </div>
                        {/* Captured from PDF — confirm what was parsed and saved */}
                        <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-xl border border-amber-200 dark:border-amber-800 shadow-sm">
                            <h5 className="text-[10px] font-black text-amber-700 dark:text-amber-400 uppercase mb-3 flex items-center gap-2">Captured from PDF (confirm)</h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-[10px]">
                                <div>
                                    <div className="font-semibold text-zinc-600 dark:text-zinc-400 mb-1">Requirements</div>
                                    {program.requirements?.length ? (
                                        <ul className="space-y-1 max-h-32 overflow-y-auto">
                                            {program.requirements.map((r) => (
                                                <li key={r.id} className="font-mono text-zinc-600 dark:text-zinc-400">
                                                    {r.type} {r.operator} {r.value}
                                                    {r.errorMessageEL && <span className="block text-zinc-500 truncate" title={r.errorMessageEL}>{r.errorMessageEL}</span>}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : <span className="italic text-zinc-500">None</span>}
                                </div>
                                <div>
                                    <div className="font-semibold text-zinc-600 dark:text-zinc-400 mb-1">Expense limits (OPSKE)</div>
                                    {program.expenseLimits?.length ? (
                                        <ul className="space-y-1 max-h-32 overflow-y-auto">
                                            {program.expenseLimits.map((e) => (
                                                <li key={e.id} className="text-zinc-600 dark:text-zinc-400">
                                                    <span className="font-mono">{e.expenseCategory.code}</span> — {e.expenseCategory.descriptionEL}
                                                    {(e.maxPercentage != null || e.minPercentage != null || e.maxAmount) && (
                                                        <span className="block text-zinc-500">max% {e.maxPercentage ?? "—"} min% {e.minPercentage ?? "—"} max€ {e.maxAmount ?? "—"}</span>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : <span className="italic text-zinc-500">None</span>}
                                </div>
                                <div>
                                    <div className="font-semibold text-zinc-600 dark:text-zinc-400 mb-1">KADs (code + description)</div>
                                    {program.kads?.length ? (
                                        <ul className="space-y-0.5 max-h-32 overflow-y-auto">
                                            {program.kads.map((k) => (
                                                <li key={k.kad.id} className="text-zinc-600 dark:text-zinc-400">
                                                    <span className="font-mono">{k.kad.dotcode ?? k.kad.code}</span>
                                                    {k.kad.nameEL ? ` — ${k.kad.nameEL}` : ""}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : <span className="italic text-zinc-500">None</span>}
                                </div>
                                <div>
                                    <div className="font-semibold text-zinc-600 dark:text-zinc-400 mb-1">Regions</div>
                                    {program.periferies?.length ? (
                                        <ul className="space-y-0.5 max-h-32 overflow-y-auto">
                                            {program.periferies.map((p) => (
                                                <li key={p.periferia.id} className="text-zinc-600 dark:text-zinc-400">{p.periferia.nameEL}</li>
                                            ))}
                                        </ul>
                                    ) : <span className="italic text-zinc-500">None</span>}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            />

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-5xl max-h-[90vh] overflow-hidden flex flex-col p-0 rounded-xl">
                    <DialogHeader className="bg-zinc-800 p-8">
                        <DialogTitle className="text-2xl font-bold text-white">{editingProgram ? "Program Settings" : "New EU Program"}</DialogTitle>
                    </DialogHeader>

                    <Tabs value={currentStep} onValueChange={(v) => setCurrentStep(v as WizardStepValue)} className="flex-1 overflow-hidden flex flex-col">
                        <div className="px-8 pt-4 pb-0 bg-white dark:bg-zinc-950 border-b">
                            <div className="text-[11px] font-semibold text-zinc-500 mb-2">
                                {`Step ${currentStepIndex + 1} of ${WIZARD_STEPS.length}`}
                            </div>
                            <TabsList className="bg-zinc-100 dark:bg-zinc-900 p-1 min-h-12 rounded-2xl border mb-4 w-full flex flex-wrap gap-1">
                                {WIZARD_STEPS.map((s, i) => (
                                    <TabsTrigger
                                        key={s.value}
                                        value={s.value}
                                        className="rounded-xl font-bold text-[10px] uppercase px-2 py-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                                    >
                                        {s.label}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </div>

                        <div className="flex-1 overflow-y-auto p-8 bg-zinc-50 dark:bg-zinc-950">
                            <TabsContent value="general" className="m-0 space-y-6">
                                <div className="flex items-center justify-between bg-blue-50 dark:bg-blue-900/10 p-4 rounded-2xl border border-blue-100 dark:border-blue-800">
                                    <span className="text-xs text-blue-700 dark:text-blue-300 font-medium">Automatic translation is available for Greek content.</span>
                                    <Button size="sm" onClick={handleTranslate} disabled={isTranslating} className="bg-zinc-800 text-white font-bold h-9">
                                        {isTranslating ? <RefreshCcw className="w-4 h-4 animate-spin mr-2" /> : <Languages className="w-4 h-4 mr-2" />} Translate to English
                                    </Button>
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div><Label>Name (GR)</Label><Input value={formData.nameEL} onChange={e => setFormData({ ...formData, nameEL: e.target.value })} /></div>
                                        <div><Label>Short Description (GR)</Label><Textarea value={formData.shortDescriptionEL} onChange={e => setFormData({ ...formData, shortDescriptionEL: e.target.value })} /></div>
                                        <div><Label>Description (GR)</Label><Textarea className="h-32" value={formData.descriptionEL} onChange={e => setFormData({ ...formData, descriptionEL: e.target.value })} /></div>
                                    </div>
                                    <div className="space-y-4">
                                        <div><Label>Name (EN)</Label><Input value={formData.nameEN} onChange={e => setFormData({ ...formData, nameEN: e.target.value })} /></div>
                                        <div><Label>Short Description (EN)</Label><Textarea value={formData.shortDescriptionEN} onChange={e => setFormData({ ...formData, shortDescriptionEN: e.target.value })} /></div>
                                        <div><Label>Description (EN)</Label><Textarea className="h-32" value={formData.descriptionEN} onChange={e => setFormData({ ...formData, descriptionEN: e.target.value })} /></div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="dates" className="m-0 space-y-6">
                                <p className="text-xs text-zinc-500">Set deadlines and active status.</p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div><Label>Announced Date</Label><Input type="date" value={formData.announcedDate || ""} onChange={e => setFormData({ ...formData, announcedDate: e.target.value })} /></div>
                                    <div><Label>Submission Date</Label><Input type="date" value={formData.submissionDate} onChange={e => setFormData({ ...formData, submissionDate: e.target.value })} /></div>
                                    <div><Label>End Date</Label><Input type="date" value={formData.endDate || ""} onChange={e => setFormData({ ...formData, endDate: e.target.value })} /></div>
                                </div>
                                <div className="flex items-center gap-2"><Checkbox checked={formData.active} onCheckedChange={c => setFormData({ ...formData, active: !!c })} /><Label className="font-bold">Program is Active</Label></div>
                            </TabsContent>

                            <TabsContent value="financials" className="m-0 space-y-6">
                                <p className="text-xs text-zinc-500">Budget and finance percentage.</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div><Label>Min Budget (€)</Label><Input type="number" value={formData.minBudget} onChange={e => setFormData({ ...formData, minBudget: e.target.value })} /></div>
                                    <div><Label>Max Budget (€)</Label><Input type="number" value={formData.maxBudget} onChange={e => setFormData({ ...formData, maxBudget: e.target.value })} /></div>
                                    <div><Label>Finance %</Label><Input value={formData.percentageOfFinance} onChange={e => setFormData({ ...formData, percentageOfFinance: e.target.value })} /></div>
                                    <div><Label>Indirect Cost %</Label><Input type="number" step="0.01" value={formData.indirectCostPercentage} onChange={e => setFormData({ ...formData, indirectCostPercentage: e.target.value })} /></div>
                                    <div><Label>Minimum company years</Label><Input type="number" value={formData.minimumCompanyYears || ""} onChange={e => setFormData({ ...formData, minimumCompanyYears: e.target.value })} /></div>
                                    <div><Label>Minimum employees</Label><Input type="number" value={formData.minimumEmployees || ""} onChange={e => setFormData({ ...formData, minimumEmployees: e.target.value })} /></div>
                                </div>
                            </TabsContent>

                            <TabsContent value="criteria" className="m-0 space-y-6">
                                <p className="text-xs text-zinc-500">Custom eligibility rules (key, operator, value).</p>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-bold text-zinc-400 uppercase text-[10px] tracking-widest">Eligibility Rules</h4>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            size="sm"
                                            className="h-8"
                                            onClick={() =>
                                                setFormData((prev) => ({
                                                    ...prev,
                                                    criteria: [
                                                        ...prev.criteria,
                                                        { key: "", operator: ">=", targetValue: "", errorMessage: "" },
                                                    ],
                                                }))
                                            }
                                        >
                                            <Plus className="w-3 h-3 mr-1" /> Add Rule
                                        </Button>
                                    </div>
                                    <div className="space-y-2">
                                        {formData.criteria.map((criterion, idx) => (
                                            <div key={`${criterion.key}-${idx}`} className="grid grid-cols-12 gap-2 bg-white dark:bg-zinc-900 border rounded-xl p-3">
                                                <Input
                                                    className="col-span-3"
                                                    placeholder="AVERAGE_TURNOVER"
                                                    value={criterion.key}
                                                    onChange={(e) =>
                                                        setFormData((prev) => {
                                                            const next = [...prev.criteria]
                                                            next[idx] = { ...next[idx], key: e.target.value }
                                                            return { ...prev, criteria: next }
                                                        })
                                                    }
                                                />
                                                <Input
                                                    className="col-span-2"
                                                    placeholder=">="
                                                    value={criterion.operator}
                                                    onChange={(e) =>
                                                        setFormData((prev) => {
                                                            const next = [...prev.criteria]
                                                            next[idx] = { ...next[idx], operator: e.target.value }
                                                            return { ...prev, criteria: next }
                                                        })
                                                    }
                                                />
                                                <Input
                                                    className="col-span-3"
                                                    placeholder="10000"
                                                    value={criterion.targetValue}
                                                    onChange={(e) =>
                                                        setFormData((prev) => {
                                                            const next = [...prev.criteria]
                                                            next[idx] = { ...next[idx], targetValue: e.target.value }
                                                            return { ...prev, criteria: next }
                                                        })
                                                    }
                                                />
                                                <Input
                                                    className="col-span-3"
                                                    placeholder="Error message"
                                                    value={criterion.errorMessage}
                                                    onChange={(e) =>
                                                        setFormData((prev) => {
                                                            const next = [...prev.criteria]
                                                            next[idx] = { ...next[idx], errorMessage: e.target.value }
                                                            return { ...prev, criteria: next }
                                                        })
                                                    }
                                                />
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="icon"
                                                    className="col-span-1"
                                                    onClick={() =>
                                                        setFormData((prev) => ({
                                                            ...prev,
                                                            criteria: prev.criteria.filter((_, index) => index !== idx),
                                                        }))
                                                    }
                                                >
                                                    <Trash2 className="w-4 h-4 text-red-500" />
                                                </Button>
                                            </div>
                                        ))}
                                        {formData.criteria.length === 0 && (
                                            <p className="text-xs text-zinc-500">No custom rules added yet.</p>
                                        )}
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="requirements" className="m-0 space-y-6">
                                <p className="text-xs text-zinc-500">Validator requirements (type, key, operator, value).</p>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-bold text-zinc-400 uppercase text-[10px] tracking-widest">Program Requirements</h4>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            size="sm"
                                            className="h-8"
                                            onClick={() =>
                                                setFormData((prev) => ({
                                                    ...prev,
                                                    requirements: [
                                                        ...prev.requirements,
                                                        { type: "TEXT", key: "", operator: "EQ", value: "", isMandatory: true, errorMessageEL: "" },
                                                    ],
                                                }))
                                            }
                                        >
                                            <Plus className="w-3 h-3 mr-1" /> Add Requirement
                                        </Button>
                                    </div>
                                    <div className="space-y-2">
                                        {formData.requirements.map((req, idx) => (
                                            <div key={`${req.key}-${idx}`} className="grid grid-cols-12 gap-2 bg-white dark:bg-zinc-900 border rounded-xl p-3">
                                                <Input className="col-span-2" placeholder="TYPE" value={req.type} onChange={(e) => setFormData((prev) => { const next = [...prev.requirements]; next[idx] = { ...next[idx], type: e.target.value.toUpperCase() }; return { ...prev, requirements: next } })} />
                                                <Input className="col-span-2" placeholder="key" value={req.key} onChange={(e) => setFormData((prev) => { const next = [...prev.requirements]; next[idx] = { ...next[idx], key: e.target.value }; return { ...prev, requirements: next } })} />
                                                <Input className="col-span-2" placeholder="operator" value={req.operator} onChange={(e) => setFormData((prev) => { const next = [...prev.requirements]; next[idx] = { ...next[idx], operator: e.target.value.toUpperCase() }; return { ...prev, requirements: next } })} />
                                                <Input className="col-span-2" placeholder="value" value={req.value} onChange={(e) => setFormData((prev) => { const next = [...prev.requirements]; next[idx] = { ...next[idx], value: e.target.value }; return { ...prev, requirements: next } })} />
                                                <Input className="col-span-3" placeholder="error message (EL)" value={req.errorMessageEL} onChange={(e) => setFormData((prev) => { const next = [...prev.requirements]; next[idx] = { ...next[idx], errorMessageEL: e.target.value }; return { ...prev, requirements: next } })} />
                                                <div className="col-span-1 flex items-center justify-center">
                                                    <Checkbox checked={req.isMandatory} onCheckedChange={(v) => setFormData((prev) => { const next = [...prev.requirements]; next[idx] = { ...next[idx], isMandatory: !!v }; return { ...prev, requirements: next } })} />
                                                </div>
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="icon"
                                                    className="col-span-1"
                                                    onClick={() =>
                                                        setFormData((prev) => ({
                                                            ...prev,
                                                            requirements: prev.requirements.filter((_, index) => index !== idx),
                                                        }))
                                                    }
                                                >
                                                    <Trash2 className="w-4 h-4 text-red-500" />
                                                </Button>
                                            </div>
                                        ))}
                                        {formData.requirements.length === 0 && (
                                            <p className="text-xs text-zinc-500">No validator requirements yet.</p>
                                        )}
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="expenseLimits" className="m-0 space-y-6">
                                <p className="text-xs text-zinc-500">Expense category limits (OPSKE codes and caps).</p>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-bold text-zinc-400 uppercase text-[10px] tracking-widest">Expense Limits (OPSKE)</h4>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            size="sm"
                                            className="h-8"
                                            onClick={() =>
                                                setFormData((prev) => ({
                                                    ...prev,
                                                    expenseLimits: [
                                                        ...prev.expenseLimits,
                                                        { code: "", description: "", maxPercentage: "", minPercentage: "", maxAmount: "", isMandatory: false },
                                                    ],
                                                }))
                                            }
                                        >
                                            <Plus className="w-3 h-3 mr-1" /> Add Limit
                                        </Button>
                                    </div>
                                    <div className="space-y-2">
                                        {formData.expenseLimits.map((limit, idx) => (
                                            <div key={`${limit.code}-${idx}`} className="grid grid-cols-12 gap-2 bg-white dark:bg-zinc-900 border rounded-xl p-3">
                                                <Input className="col-span-2" placeholder="OPSKE code" value={limit.code} onChange={(e) => setFormData((prev) => { const next = [...prev.expenseLimits]; next[idx] = { ...next[idx], code: e.target.value }; return { ...prev, expenseLimits: next } })} />
                                                <Input className="col-span-3" placeholder="description" value={limit.description} onChange={(e) => setFormData((prev) => { const next = [...prev.expenseLimits]; next[idx] = { ...next[idx], description: e.target.value }; return { ...prev, expenseLimits: next } })} />
                                                <Input className="col-span-2" placeholder="max %" value={limit.maxPercentage} onChange={(e) => setFormData((prev) => { const next = [...prev.expenseLimits]; next[idx] = { ...next[idx], maxPercentage: e.target.value }; return { ...prev, expenseLimits: next } })} />
                                                <Input className="col-span-2" placeholder="min %" value={limit.minPercentage} onChange={(e) => setFormData((prev) => { const next = [...prev.expenseLimits]; next[idx] = { ...next[idx], minPercentage: e.target.value }; return { ...prev, expenseLimits: next } })} />
                                                <Input className="col-span-2" placeholder="max amount" value={limit.maxAmount} onChange={(e) => setFormData((prev) => { const next = [...prev.expenseLimits]; next[idx] = { ...next[idx], maxAmount: e.target.value }; return { ...prev, expenseLimits: next } })} />
                                                <div className="col-span-1 flex items-center justify-center">
                                                    <Checkbox checked={limit.isMandatory} onCheckedChange={(v) => setFormData((prev) => { const next = [...prev.expenseLimits]; next[idx] = { ...next[idx], isMandatory: !!v }; return { ...prev, expenseLimits: next } })} />
                                                </div>
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="icon"
                                                    className="col-span-1"
                                                    onClick={() =>
                                                        setFormData((prev) => ({
                                                            ...prev,
                                                            expenseLimits: prev.expenseLimits.filter((_, index) => index !== idx),
                                                        }))
                                                    }
                                                >
                                                    <Trash2 className="w-4 h-4 text-red-500" />
                                                </Button>
                                            </div>
                                        ))}
                                        {formData.expenseLimits.length === 0 && (
                                            <p className="text-xs text-zinc-500">No expense limits added yet.</p>
                                        )}
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="regions" className="m-0">
                                <div className="grid grid-cols-3 gap-3">
                                    {allPeriferies.map(p => (
                                        <div key={p.id} className={`p-4 rounded-2xl border flex items-center gap-3 transition-all cursor-pointer ${selectedPeriferies.has(p.id) ? 'bg-amber-50 border-amber-300 dark:bg-amber-900/20' : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800'}`} onClick={() => {
                                            const next = new Set(selectedPeriferies);
                                            if (next.has(p.id)) next.delete(p.id); else next.add(p.id);
                                            setSelectedPeriferies(next);
                                        }}>
                                            <Checkbox checked={selectedPeriferies.has(p.id)} onCheckedChange={() => { }} />
                                            <span className="text-xs font-bold">{p.nameEL}</span>
                                        </div>
                                    ))}
                                </div>
                            </TabsContent>

                            <TabsContent value="kads" className="m-0 space-y-6">
                                <div className="bg-emerald-600 p-6 rounded-3xl text-white flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-2xl">
                                    <div>
                                        <h3 className="text-lg font-bold">Step 4 - KADs & Program PDF</h3>
                                        <p className="text-sm opacity-90 mt-1">Parse requirements, expense limits, and KADs from PDF, or insert KADs manually from prompt text.</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Label className="bg-white text-emerald-700 px-4 py-2 rounded-xl font-bold text-xs cursor-pointer shadow-lg">
                                            Choose PDF
                                            <input
                                                type="file"
                                                className="hidden"
                                                accept="application/pdf"
                                                onChange={(e) => setProgramDetailsFile(e.target.files?.[0] || null)}
                                            />
                                        </Label>
                                        <Button
                                            onClick={handleUploadProgramDetails}
                                            disabled={isProcessingProgramDetails || !programDetailsFile || !editingProgram}
                                            className="bg-zinc-900 text-white font-bold hover:bg-zinc-800"
                                        >
                                            {isProcessingProgramDetails ? <RefreshCcw className="w-4 h-4 animate-spin mr-2" /> : null}
                                            {isProcessingProgramDetails ? "Processing..." : "Parse & Save"}
                                        </Button>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-zinc-900 border rounded-2xl p-4 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-xs font-black uppercase tracking-widest text-zinc-500">Manual KAD Input</h4>
                                        {!editingProgram ? (
                                            <Badge variant="outline" className="text-[10px]">Save first to create new codes</Badge>
                                        ) : null}
                                    </div>
                                    <Textarea
                                        value={manualKadInput}
                                        onChange={(e) => setManualKadInput(e.target.value)}
                                        placeholder="Paste text from prompt or PDF appendix. Example: 46.11, 56.10, 62.01"
                                        className="min-h-[90px]"
                                    />
                                    <div className="flex items-center justify-between">
                                        <p className="text-[11px] text-zinc-500">The importer auto-detects patterns like 46.11 and links them to this program.</p>
                                        <Button
                                            onClick={handleImportManualKads}
                                            disabled={isImportingManualKads || !manualKadInput.trim()}
                                            className="bg-zinc-800 text-white font-bold"
                                        >
                                            {isImportingManualKads ? <RefreshCcw className="w-4 h-4 animate-spin mr-2" /> : null}
                                            {isImportingManualKads ? "Importing..." : "Import KADs"}
                                        </Button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-6 h-[400px]">
                                    <div className="bg-white dark:bg-zinc-900 border rounded-2xl overflow-hidden flex flex-col pt-4">
                                        <div className="px-4 pb-4 border-b flex justify-between items-center"><span className="text-xs font-black uppercase tracking-widest text-zinc-400">Linked KADs ({selectedKads.size})</span></div>
                                        <div className="flex-1 overflow-y-auto p-4 space-y-1">
                                            {allKads.filter(k => selectedKads.has(k.id)).map(k => (
                                                <div key={k.id} className="flex items-center gap-2 p-2 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                                                    <span className="font-mono font-bold text-xs">{k.code}</span>
                                                    <span className="text-[10px] text-zinc-500 truncate">{k.nameEL}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="bg-white dark:bg-zinc-900 border rounded-2xl overflow-hidden flex flex-col">
                                        <div className="p-4 border-b"><Input placeholder="Search KAD codes..." value={kadSearch} onChange={e => setKadSearch(e.target.value)} className="h-9 text-xs" /></div>
                                        <div className="flex-1 overflow-y-auto p-4 space-y-1">
                                            {allKads.filter(k => !kadSearch || k.code.includes(kadSearch) || k.nameEL.toLowerCase().includes(kadSearch.toLowerCase())).slice(0, 50).map(kad => (
                                                <div key={kad.id} className="flex items-center gap-3 p-2 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg cursor-pointer" onClick={() => {
                                                    const next = new Set(selectedKads);
                                                    if (next.has(kad.id)) next.delete(kad.id); else next.add(kad.id);
                                                    setSelectedKads(next);
                                                }}>
                                                    <Checkbox checked={selectedKads.has(kad.id)} onCheckedChange={() => { }} />
                                                    <div className="flex flex-col">
                                                        <span className="font-bold text-xs">{kad.code}</span>
                                                        <span className="text-[9px] text-zinc-500 truncate w-40">{kad.nameEL}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="media" className="m-0 space-y-6">
                                <p className="text-xs text-zinc-500">Program image and publication file URLs. For multiple media items use the Program details page.</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>Image URL</Label>
                                        <Input
                                            value={formData.image || ""}
                                            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                            placeholder="https://..."
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Publication file URL</Label>
                                        <Input
                                            value={formData.publicationFile || ""}
                                            onChange={(e) => setFormData({ ...formData, publicationFile: e.target.value })}
                                            placeholder="https://..."
                                        />
                                    </div>
                                </div>
                            </TabsContent>
                        </div>

                        <div className="p-8 border-t bg-white dark:bg-zinc-950 flex items-center justify-between gap-3 rounded-b-3xl">
                            <div className="flex items-center gap-2">
                                <Button variant="outline" onClick={goToPreviousStep} disabled={isFirstStep} className="font-bold uppercase tracking-widest text-xs">Back</Button>
                                <Button variant="outline" onClick={goToNextStep} disabled={isLastStep} className="font-bold uppercase tracking-widest text-xs">Next</Button>
                            </div>
                            <div className="flex items-center gap-3">
                                <Button variant="ghost" onClick={() => setIsDialogOpen(false)} className="font-bold uppercase tracking-widest text-xs">Cancel</Button>
                                <Button disabled={isSaving} onClick={handleSave} className="bg-zinc-800 text-white font-bold h-12 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all">
                                {isSaving ? <RefreshCcw className="w-4 h-4 animate-spin mr-2" /> : "Save Changes"}
                                </Button>
                            </div>
                        </div>
                    </Tabs>
                </DialogContent>
            </Dialog>

            <Dialog
                open={isRowUploadModalOpen}
                onOpenChange={(open) => {
                    if (deepSeekStatus === "processing") return
                    setIsRowUploadModalOpen(open)
                }}
            >
                <DialogContent className="max-w-lg">
                    <DialogHeader>
                        <DialogTitle>Upload Entire Program PDF</DialogTitle>
                        <DialogDescription>
                            {rowUploadProgram ? `Program: ${rowUploadProgram.nameEL}` : "Select a program PDF to parse."}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                        <Input
                            type="file"
                            accept="application/pdf"
                            onChange={(e) => setRowUploadFile(e.target.files?.[0] || null)}
                        />
                        <div className="flex justify-end gap-2">
                            <Button variant="outline" onClick={() => setIsRowUploadModalOpen(false)} disabled={deepSeekStatus === "processing"}>
                                Cancel
                            </Button>
                            <Button onClick={handleRowUploadSubmit} disabled={!rowUploadFile || deepSeekStatus === "processing"}>
                                <Upload className="w-4 h-4 mr-2" />
                                Parse & Save
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            <Dialog open={deepSeekModalOpen} onOpenChange={closeDeepSeekModal}>
                <DialogContent className="max-w-md">
                    <DialogHeader>
                        <DialogTitle>
                            {deepSeekStatus === "processing" ? "DeepSeek Processing" : deepSeekStatus === "success" ? "Parsing Completed" : "Parsing Failed"}
                        </DialogTitle>
                        <DialogDescription>{deepSeekMessage}</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                        {deepSeekStatus === "processing" ? (
                            <div className="flex items-center gap-3 rounded-lg border p-4 bg-zinc-50 dark:bg-zinc-900">
                                <RefreshCcw className="w-5 h-5 animate-spin text-emerald-600" />
                                <p className="text-sm">Please wait while requirements, expense limits, and KADs are extracted...</p>
                            </div>
                        ) : null}
                        {deepSeekStatus === "success" && deepSeekResult ? (
                            <div className="grid grid-cols-3 gap-2">
                                <Badge className="justify-center py-2">{deepSeekResult.requirements} Requirements</Badge>
                                <Badge className="justify-center py-2">{deepSeekResult.expenseLimits} Limits</Badge>
                                <Badge className="justify-center py-2">{deepSeekResult.kads} KADs</Badge>
                            </div>
                        ) : null}
                        <div className="flex justify-end gap-2">
                            <Button variant="outline" onClick={closeDeepSeekModal} disabled={deepSeekStatus === "processing"}>
                                Close
                            </Button>
                            {deepSeekStatus !== "processing" ? (
                                <Button
                                    onClick={() => {
                                        setDeepSeekModalOpen(false)
                                        setIsRowUploadModalOpen(false)
                                        window.location.reload()
                                    }}
                                >
                                    Refresh Data
                                </Button>
                            ) : null}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            <GenerateEuProgramEmailListModal
                program={emailListProgram ? { id: emailListProgram.id, nameEL: emailListProgram.nameEL } : null}
                open={emailListModalOpen}
                onOpenChange={(o) => {
                    setEmailListModalOpen(o);
                    if (!o) setEmailListProgram(null);
                }}
            />
        </div>
    )
}
