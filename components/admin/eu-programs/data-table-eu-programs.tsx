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
    { value: "general", label: "1. Ονόματα" },
    { value: "dates", label: "2. Ημερομηνίες" },
    { value: "financials", label: "3. Προϋπολογισμός" },
    { value: "criteria", label: "4. Κανόνες" },
    { value: "requirements", label: "5. Απαιτήσεις" },
    { value: "expenseLimits", label: "6. Όρια" },
    { value: "regions", label: "7. Περιφέρειες" },
    { value: "kads", label: "8. ΚΑΔ & PDF" },
    { value: "media", label: "9. Μέσα" },
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
        setDeepSeekMessage(`Επεξεργασία "${programName}" με DeepSeek. Παρακαλώ περιμένετε...`)
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
            const errMessage = result.error || "Αποτυχία ανάλυσης λεπτομερειών προγράμματος"
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
        setDeepSeekMessage(`Ολοκληρώθηκε η ανάλυση "${programName}".`)
        return { requirements, expenseLimits, kads }
    }

    const handleTranslate = async () => {
        setIsTranslating(true)
        toast.loading("Μετάφραση...", { id: "translate" })
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
            toast.success("Έτοιμο!", { id: "translate" })
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

                toast.success("Αποθηκεύτηκε επιτυχώς")
                window.location.reload()
            }
        } catch (err: any) {
            toast.error(err.message)
        } finally {
            setIsSaving(false)
        }
    }

    const handleDelete = async (id: string) => {
        if (!confirm("Διαγραφή προγράμματος;")) return
        try {
            await deleteEuProgram(id)
            setData(prev => prev.filter(d => d.id !== id))
            toast.success("Διαγράφηκε")
        } catch (err: any) { toast.error(err.message) }
    }

    const handleUploadProgramDetails = async () => {
        if (!editingProgram?.id) {
            toast.error("Αποθηκεύστε πρώτα το πρόγραμμα και μετά ανεβάστε λεπτομέρειες PDF.")
            return
        }
        if (!programDetailsFile) {
            toast.error("Επιλέξτε πρώτα ένα PDF.")
            return
        }

        setIsProcessingProgramDetails(true)
        toast.loading("Επεξεργασία PDF με DeepSeek...", { id: "program-details" })
        try {
            const parsed = await parseProgramDetails(editingProgram.id, programDetailsFile, editingProgram.nameEL)
            toast.success(
                `Αναλύθηκαν ${parsed.requirements} απαιτήσεις, ${parsed.expenseLimits} όρια δαπανών, ${parsed.kads} ΚΑΔ.`,
                { id: "program-details" }
            )
            setProgramDetailsFile(null)
        } catch (error: any) {
            toast.error(error?.message || "Η επεξεργασία απέτυχε", { id: "program-details" })
        } finally {
            setIsProcessingProgramDetails(false)
        }
    }

    const handleRowUploadSubmit = async () => {
        if (!rowUploadProgram?.id) {
            toast.error("Δεν επιλέχθηκε πρόγραμμα.")
            return
        }
        if (!rowUploadFile) {
            toast.error("Επιλέξτε πρώτα ένα PDF.")
            return
        }
        try {
            setIsRowUploadModalOpen(false)
            const parsed = await parseProgramDetails(rowUploadProgram.id, rowUploadFile, rowUploadProgram.nameEL)
            toast.success(`Αναλύθηκαν ${parsed.requirements} απαιτήσεις, ${parsed.expenseLimits} όρια δαπανών, ${parsed.kads} ΚΑΔ.`)
            setRowUploadFile(null)
        } catch (error: any) {
            toast.error(error?.message || "Η επεξεργασία απέτυχε")
        }
    }

    const handleImportManualKads = async () => {
        const parsedCodes = parseKadCodesFromText(manualKadInput)
        if (parsedCodes.length === 0) {
            toast.error("Δεν βρέθηκαν έγκυροι κωδικοί ΚΑΔ. Επικολλήστε τιμές όπως 46.11, 56.10.")
            return
        }

        setIsImportingManualKads(true)
        toast.loading("Εισαγωγή ΚΑΔ από κείμενο...", { id: "manual-kads" })
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
                    throw new Error("Αποθηκεύστε πρώτα το πρόγραμμα για να δημιουργήσετε νέες εγγραφές ΚΑΔ.")
                }
                await processOcrAndCreateKads(
                    editingProgram.id,
                    missingCodes.map((code) => ({ code, desc: "Χειροκίνητη εισαγωγή" }))
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
            toast.success(`Εισήχθησαν ${parsedCodes.length} κωδικοί ΚΑΔ.`, { id: "manual-kads" })
        } catch (error: any) {
            toast.error(error?.message || "Αποτυχία εισαγωγής ΚΑΔ.", { id: "manual-kads" })
        } finally {
            setIsImportingManualKads(false)
        }
    }

    const columns: ColumnDef<EuProgramType>[] = [
        {
            accessorKey: "nameEL",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Όνομα Προγράμματος</span>,
            cell: ({ row }) => (
                <div className="flex max-w-xl flex-col gap-0.5">
                    <span className="text-sm font-semibold text-[#201F1E] line-clamp-2">
                        {row.original.nameEL}
                    </span>
                    {row.original.nameEN ? (
                        <span className="line-clamp-1 text-[11px] text-[#A19F9D]">{row.original.nameEN}</span>
                    ) : null}
                </div>
            )
        },
        {
            accessorKey: "maxBudget",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Μέγ. Προϋπολογισμός</span>,
            cell: ({ row }) => budgetToNumber(row.original.maxBudget) ? (
                <div className="flex items-center gap-1 font-bold text-emerald-600">
                    <Euro className="w-3 h-3" />
                    {budgetToNumber(row.original.maxBudget)?.toLocaleString()}
                </div>
            ) : <span className="text-[#A19F9D]">—</span>
        },
        {
            id: "stats",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Αντιστοίχιση</span>,
            cell: ({ row }) => {
                const summary = parseSummaryByProgram[row.original.id]
                const requirementsCount = summary?.requirements ?? (row.original.requirements?.length || 0)
                const expenseLimitsCount = summary?.expenseLimits ?? (row.original.expenseLimits?.length || 0)
                const kadsCount = summary?.kads ?? (row.original.kads?.length || 0)
                const isParsed = requirementsCount > 0 || expenseLimitsCount > 0 || kadsCount > 0
                return (
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F3F2F1] text-[#605E5C] border border-[#EDEBE9]">{kadsCount} ΚΑΔ</span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F3F2F1] text-[#605E5C] border border-[#EDEBE9]">{row.original.periferies?.length || 0} Περιφέρειες</span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F3F2F1] text-[#605E5C] border border-[#EDEBE9]">{requirementsCount} Απαιτήσεις</span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F3F2F1] text-[#605E5C] border border-[#EDEBE9]">{row.original.criteria?.length || 0} Κανόνες</span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F3F2F1] text-[#605E5C] border border-[#EDEBE9]">{expenseLimitsCount} Όρια Δαπανών</span>
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold ${isParsed ? "bg-[#DFF6DD] text-[#107C10]" : "bg-[#F3F2F1] text-[#A19F9D]"}`}>{isParsed ? "AI Αναλύθηκε" : "Δεν Αναλύθηκε"}</span>
                    </div>
                )
            }
        },
        {
            accessorKey: "active",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Κατάσταση</span>,
            cell: ({ row }) => row.original.active ? (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" /> Ενεργό
                </span>
            ) : (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F3F2F1] text-[#A19F9D] border border-[#EDEBE9]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8C6C4] shrink-0" /> Κλειστό
                </span>
            )
        },
        {
            id: "actions",
            cell: ({ row }) => (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild onClick={e => e.stopPropagation()}>
                        <Button variant="outline" size="sm" className="h-8 px-3 text-[12px] font-semibold border-[#C8C6C4] hover:bg-[#EDEBE9] rounded">
                            Ενέργειες <ChevronDown className="h-4 w-4 ml-1" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                            <Link href={`/admin/eu-programs/${row.original.id}`} className="flex items-center">
                                <ExternalLink className="w-4 h-4 mr-2" /> Λεπτομέρειες προγράμματος
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href={`/admin/eu-programs/${row.original.id}/expense-categories`} className="flex items-center">
                                <Database className="w-4 h-4 mr-2" /> Κατηγορίες δαπανών (OPSKE)
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => openEdit(row.original)}><Edit className="w-4 h-4 mr-2" /> Επεξεργασία Προγράμματος (οδηγός)</DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => {
                                setRowUploadProgram(row.original)
                                setRowUploadFile(null)
                                setIsRowUploadModalOpen(true)
                            }}
                        >
                            <Upload className="w-4 h-4 mr-2" /> Μεταφόρτωση ολόκληρου PDF
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => {
                                setEmailListProgram(row.original)
                                setEmailListModalOpen(true)
                            }}
                        >
                            <Mail className="w-4 h-4 mr-2" /> Δημιουργία Λίστας Email
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => handleDelete(row.original.id)} className="text-red-500"><Trash2 className="w-4 h-4 mr-2" /> Διαγραφή</DropdownMenuItem>
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
                searchPlaceholder="Αναζήτηση προγραμμάτων..."
                searchColumn="nameEL"
                onAddClick={() => openEdit()}
                addButtonLabel="Προσθήκη Προγράμματος ΕΕ"
                renderExpandedRow={(program) => (
                    <div className="mx-4 mb-3 mt-1 rounded-lg border border-[#EDEBE9] bg-[#F3F2F1] overflow-hidden">
                        <div className="grid grid-cols-2 divide-x divide-[#EDEBE9]">
                            <div className="p-4 space-y-2">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] flex items-center gap-2"><FileText className="w-3 h-3" /> Επισκόπηση Προγράμματος</p>
                                <p className="text-xs leading-relaxed text-[#605E5C]">{program.shortDescriptionEL || "Δεν υπάρχει περιγραφή."}</p>
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    {program.submissionDate && <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-white border border-[#EDEBE9] text-[#605E5C]"><Calendar className="w-3 h-3" /> Λήξη: {new Date(program.submissionDate).toLocaleDateString()}</span>}
                                    {program.percentageOfFinance && <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-white border border-[#EDEBE9] text-[#605E5C]">{program.percentageOfFinance} Χρηματοδότηση</span>}
                                    {budgetToNumber(program.minBudget) != null && <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-white border border-[#EDEBE9] text-[#605E5C]">Ελάχ.: {budgetToNumber(program.minBudget)?.toLocaleString()} EUR</span>}
                                    {budgetToNumber(program.maxBudget) != null && <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-white border border-[#EDEBE9] text-[#605E5C]">Μέγ.: {budgetToNumber(program.maxBudget)?.toLocaleString()} EUR</span>}
                                </div>
                            </div>
                            <div className="p-4 space-y-2">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] flex items-center gap-2"><Map className="w-3 h-3" /> Ενεργές Περιφέρειες</p>
                                <div className="flex flex-wrap gap-1">
                                    {program.periferies?.map(p => <span key={p.periferia.id} className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-white border border-[#EDEBE9] text-[#605E5C]">{p.periferia.nameEL}</span>) || <span className="text-[11px] italic text-[#A19F9D]">Δεν συνδέθηκαν</span>}
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-[#EDEBE9] grid grid-cols-2 divide-x divide-[#EDEBE9]">
                            <div className="p-4 space-y-2">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] flex items-center gap-2"><FileCode className="w-3 h-3" /> Κορυφαίοι Συνδεδεμένοι ΚΑΔ</p>
                                <div className="grid grid-cols-2 gap-1">
                                    {program.kads?.slice(0, 10).map(k => <div key={k.kad.id} className="text-[10px] font-mono text-[#605E5C] truncate">{k.kad.code}</div>) || <span className="text-[11px] italic text-[#A19F9D]">Δεν συνδέθηκαν</span>}
                                    {program.kads && program.kads.length > 10 && <div className="text-[10px] font-bold text-[#A19F9D]">+{program.kads.length - 10} more</div>}
                                </div>
                            </div>
                            <div className="p-4 space-y-2">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D]">Εξαγωγή από PDF</p>
                                <div className="grid grid-cols-2 gap-2 text-[11px]">
                                    <div>
                                        <div className="font-semibold text-[#605E5C] mb-1">Απαιτήσεις ({program.requirements?.length || 0})</div>
                                        {program.requirements?.slice(0, 3).map((r) => (
                                            <div key={r.id} className="font-mono text-[#A19F9D] truncate">{r.type} {r.operator} {r.value}</div>
                                        ))}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-[#605E5C] mb-1">Όρια Δαπανών ({program.expenseLimits?.length || 0})</div>
                                        {program.expenseLimits?.slice(0, 3).map((e) => (
                                            <div key={e.id} className="text-[#A19F9D] truncate"><span className="font-mono">{e.expenseCategory.code}</span></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            />

            {/* Main wizard dialog */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-5xl max-h-[90vh] overflow-hidden flex flex-col p-0 rounded-lg">
                    {/* DG Header */}
                    <DialogHeader className="px-5 py-4 border-b border-[#EDEBE9] bg-white">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-[#EFF6FC] border border-[#C7E0F4] flex items-center justify-center shrink-0">
                                <Settings className="w-4 h-4 text-[#0078D4]" />
                            </div>
                            <div>
                                <DialogTitle className="text-sm font-bold text-[#201F1E]">
                                    {editingProgram ? "Ρυθμίσεις Προγράμματος" : "Νέο Πρόγραμμα ΕΕ"}
                                </DialogTitle>
                                <p className="text-[11px] text-[#A19F9D]">
                                    {editingProgram ? `Επεξεργασία: ${editingProgram.nameEL}` : "Συμπληρώστε όλα τα βήματα για τη δημιουργία νέου προγράμματος ΕΕ"}
                                </p>
                            </div>
                        </div>
                    </DialogHeader>

                    <Tabs value={currentStep} onValueChange={(v) => setCurrentStep(v as WizardStepValue)} className="flex-1 overflow-hidden flex flex-col">
                        {/* Step tabs — DG text tabs */}
                        <div className="px-5 bg-white border-b border-[#EDEBE9]">
                            <div className="text-[11px] text-[#A19F9D] pt-3 pb-1">
                                Βήμα {currentStepIndex + 1} από {WIZARD_STEPS.length}
                            </div>
                            <TabsList className="bg-transparent p-0 h-auto flex flex-wrap gap-0 rounded-none border-0 w-full">
                                {WIZARD_STEPS.map((s) => (
                                    <TabsTrigger
                                        key={s.value}
                                        value={s.value}
                                        className="rounded-none border-b-2 border-transparent px-3 py-2 text-[11px] font-semibold text-[#605E5C] data-[state=active]:border-[#0078D4] data-[state=active]:text-[#0078D4] data-[state=active]:bg-transparent bg-transparent shadow-none"
                                    >
                                        {s.label}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </div>

                        {/* Body */}
                        <div className="flex-1 overflow-y-auto bg-[#F3F2F1] p-4">
                            <TabsContent value="general" className="m-0 space-y-3">
                                <div className="flex items-center justify-between bg-white rounded-lg border border-[#EDEBE9] p-3">
                                    <span className="text-[11px] text-[#605E5C]">Διαθέσιμη αυτόματη μετάφραση ελληνικού περιεχομένου.</span>
                                    <Button size="sm" onClick={handleTranslate} disabled={isTranslating} className="h-8 px-5 text-[12px] font-semibold bg-[#0078D4] hover:bg-[#106EBE] text-white rounded shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,120,212,0.25)]">
                                        {isTranslating ? <RefreshCcw className="w-3 h-3 animate-spin mr-2" /> : <Languages className="w-3 h-3 mr-2" />} Μετάφραση στα Αγγλικά
                                    </Button>
                                </div>
                                <div className="bg-white rounded-lg border border-[#EDEBE9] p-4 space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Όνομα (ΕΛ)</Label>
                                            <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={formData.nameEL} onChange={e => setFormData({ ...formData, nameEL: e.target.value })} />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Όνομα (ΑΝ)</Label>
                                            <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={formData.nameEN} onChange={e => setFormData({ ...formData, nameEN: e.target.value })} />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Σύντομη Περιγραφή (ΕΛ)</Label>
                                            <Textarea className="rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={formData.shortDescriptionEL} onChange={e => setFormData({ ...formData, shortDescriptionEL: e.target.value })} />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Σύντομη Περιγραφή (ΑΝ)</Label>
                                            <Textarea className="rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={formData.shortDescriptionEN} onChange={e => setFormData({ ...formData, shortDescriptionEN: e.target.value })} />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Περιγραφή (ΕΛ)</Label>
                                            <Textarea className="h-28 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={formData.descriptionEL} onChange={e => setFormData({ ...formData, descriptionEL: e.target.value })} />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Περιγραφή (ΑΝ)</Label>
                                            <Textarea className="h-28 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={formData.descriptionEN} onChange={e => setFormData({ ...formData, descriptionEN: e.target.value })} />
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="dates" className="m-0">
                                <div className="bg-white rounded-lg border border-[#EDEBE9] p-4 space-y-4">
                                    <p className="text-[11px] font-bold uppercase tracking-widest text-[#A19F9D]">Προθεσμίες & Κατάσταση</p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Ημερομηνία Ανακοίνωσης</Label>
                                            <Input type="date" className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={formData.announcedDate || ""} onChange={e => setFormData({ ...formData, announcedDate: e.target.value })} />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Ημερομηνία Υποβολής</Label>
                                            <Input type="date" className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={formData.submissionDate} onChange={e => setFormData({ ...formData, submissionDate: e.target.value })} />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Ημερομηνία Λήξης</Label>
                                            <Input type="date" className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={formData.endDate || ""} onChange={e => setFormData({ ...formData, endDate: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Checkbox checked={formData.active} onCheckedChange={c => setFormData({ ...formData, active: !!c })} />
                                        <Label className="text-[11px] font-semibold text-[#605E5C]">Το Πρόγραμμα είναι Ενεργό</Label>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="financials" className="m-0">
                                <div className="bg-white rounded-lg border border-[#EDEBE9] p-4 space-y-4">
                                    <p className="text-[11px] font-bold uppercase tracking-widest text-[#A19F9D]">Προϋπολογισμός & Χρηματοδότηση</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Ελάχ. Προϋπολογισμός (€)</Label>
                                            <Input type="number" className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={formData.minBudget} onChange={e => setFormData({ ...formData, minBudget: e.target.value })} />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Μέγ. Προϋπολογισμός (€)</Label>
                                            <Input type="number" className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={formData.maxBudget} onChange={e => setFormData({ ...formData, maxBudget: e.target.value })} />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Χρηματοδότηση %</Label>
                                            <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={formData.percentageOfFinance} onChange={e => setFormData({ ...formData, percentageOfFinance: e.target.value })} />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Έμμεσο Κόστος %</Label>
                                            <Input type="number" step="0.01" className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={formData.indirectCostPercentage} onChange={e => setFormData({ ...formData, indirectCostPercentage: e.target.value })} />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Ελάχιστα έτη εταιρείας</Label>
                                            <Input type="number" className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={formData.minimumCompanyYears || ""} onChange={e => setFormData({ ...formData, minimumCompanyYears: e.target.value })} />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Ελάχιστος αριθμός εργαζομένων</Label>
                                            <Input type="number" className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={formData.minimumEmployees || ""} onChange={e => setFormData({ ...formData, minimumEmployees: e.target.value })} />
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="criteria" className="m-0">
                                <div className="bg-white rounded-lg border border-[#EDEBE9] p-4 space-y-4">
                                    <div className="flex items-center justify-between">
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D]">Κανόνες Επιλεξιμότητας</p>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            size="sm"
                                            className="h-8 px-3 text-[12px] font-semibold border-[#C8C6C4] hover:bg-[#EDEBE9] rounded"
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
                                            <Plus className="w-3 h-3 mr-1" /> Προσθήκη Κανόνα
                                        </Button>
                                    </div>
                                    <div className="space-y-2">
                                        {formData.criteria.map((criterion, idx) => (
                                            <div key={`${criterion.key}-${idx}`} className="grid grid-cols-12 gap-2 bg-[#F3F2F1] border border-[#EDEBE9] rounded p-3">
                                                <Input className="col-span-3 h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" placeholder="AVERAGE_TURNOVER" value={criterion.key} onChange={(e) => setFormData((prev) => { const next = [...prev.criteria]; next[idx] = { ...next[idx], key: e.target.value }; return { ...prev, criteria: next } })} />
                                                <Input className="col-span-2 h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" placeholder=">=" value={criterion.operator} onChange={(e) => setFormData((prev) => { const next = [...prev.criteria]; next[idx] = { ...next[idx], operator: e.target.value }; return { ...prev, criteria: next } })} />
                                                <Input className="col-span-3 h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" placeholder="10000" value={criterion.targetValue} onChange={(e) => setFormData((prev) => { const next = [...prev.criteria]; next[idx] = { ...next[idx], targetValue: e.target.value }; return { ...prev, criteria: next } })} />
                                                <Input className="col-span-3 h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" placeholder="Μήνυμα σφάλματος" value={criterion.errorMessage} onChange={(e) => setFormData((prev) => { const next = [...prev.criteria]; next[idx] = { ...next[idx], errorMessage: e.target.value }; return { ...prev, criteria: next } })} />
                                                <Button type="button" variant="ghost" size="icon" className="col-span-1 h-9 w-9" onClick={() => setFormData((prev) => ({ ...prev, criteria: prev.criteria.filter((_, index) => index !== idx) }))}>
                                                    <Trash2 className="w-4 h-4 text-red-500" />
                                                </Button>
                                            </div>
                                        ))}
                                        {formData.criteria.length === 0 && (
                                            <p className="text-[11px] text-[#A19F9D]">Δεν προστέθηκαν κανόνες ακόμα.</p>
                                        )}
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="requirements" className="m-0">
                                <div className="bg-white rounded-lg border border-[#EDEBE9] p-4 space-y-4">
                                    <div className="flex items-center justify-between">
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D]">Απαιτήσεις Προγράμματος</p>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            size="sm"
                                            className="h-8 px-3 text-[12px] font-semibold border-[#C8C6C4] hover:bg-[#EDEBE9] rounded"
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
                                            <Plus className="w-3 h-3 mr-1" /> Προσθήκη Απαίτησης
                                        </Button>
                                    </div>
                                    <div className="space-y-2">
                                        {formData.requirements.map((req, idx) => (
                                            <div key={`${req.key}-${idx}`} className="grid grid-cols-12 gap-2 bg-[#F3F2F1] border border-[#EDEBE9] rounded p-3">
                                                <Input className="col-span-2 h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" placeholder="TYPE" value={req.type} onChange={(e) => setFormData((prev) => { const next = [...prev.requirements]; next[idx] = { ...next[idx], type: e.target.value.toUpperCase() }; return { ...prev, requirements: next } })} />
                                                <Input className="col-span-2 h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" placeholder="key" value={req.key} onChange={(e) => setFormData((prev) => { const next = [...prev.requirements]; next[idx] = { ...next[idx], key: e.target.value }; return { ...prev, requirements: next } })} />
                                                <Input className="col-span-2 h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" placeholder="operator" value={req.operator} onChange={(e) => setFormData((prev) => { const next = [...prev.requirements]; next[idx] = { ...next[idx], operator: e.target.value.toUpperCase() }; return { ...prev, requirements: next } })} />
                                                <Input className="col-span-2 h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" placeholder="value" value={req.value} onChange={(e) => setFormData((prev) => { const next = [...prev.requirements]; next[idx] = { ...next[idx], value: e.target.value }; return { ...prev, requirements: next } })} />
                                                <Input className="col-span-3 h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" placeholder="μήνυμα σφάλματος (ΕΛ)" value={req.errorMessageEL} onChange={(e) => setFormData((prev) => { const next = [...prev.requirements]; next[idx] = { ...next[idx], errorMessageEL: e.target.value }; return { ...prev, requirements: next } })} />
                                                <div className="col-span-1 flex items-center justify-center gap-1">
                                                    <Checkbox checked={req.isMandatory} onCheckedChange={(v) => setFormData((prev) => { const next = [...prev.requirements]; next[idx] = { ...next[idx], isMandatory: !!v }; return { ...prev, requirements: next } })} />
                                                    <Button type="button" variant="ghost" size="icon" className="h-7 w-7" onClick={() => setFormData((prev) => ({ ...prev, requirements: prev.requirements.filter((_, index) => index !== idx) }))}>
                                                        <Trash2 className="w-3 h-3 text-red-500" />
                                                    </Button>
                                                </div>
                                            </div>
                                        ))}
                                        {formData.requirements.length === 0 && (
                                            <p className="text-[11px] text-[#A19F9D]">Δεν υπάρχουν απαιτήσεις ακόμα.</p>
                                        )}
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="expenseLimits" className="m-0">
                                <div className="bg-white rounded-lg border border-[#EDEBE9] p-4 space-y-4">
                                    <div className="flex items-center justify-between">
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D]">Όρια Δαπανών (OPSKE)</p>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            size="sm"
                                            className="h-8 px-3 text-[12px] font-semibold border-[#C8C6C4] hover:bg-[#EDEBE9] rounded"
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
                                            <Plus className="w-3 h-3 mr-1" /> Προσθήκη Ορίου
                                        </Button>
                                    </div>
                                    <div className="space-y-2">
                                        {formData.expenseLimits.map((limit, idx) => (
                                            <div key={`${limit.code}-${idx}`} className="grid grid-cols-12 gap-2 bg-[#F3F2F1] border border-[#EDEBE9] rounded p-3">
                                                <Input className="col-span-2 h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" placeholder="Κωδ. OPSKE" value={limit.code} onChange={(e) => setFormData((prev) => { const next = [...prev.expenseLimits]; next[idx] = { ...next[idx], code: e.target.value }; return { ...prev, expenseLimits: next } })} />
                                                <Input className="col-span-3 h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" placeholder="περιγραφή" value={limit.description} onChange={(e) => setFormData((prev) => { const next = [...prev.expenseLimits]; next[idx] = { ...next[idx], description: e.target.value }; return { ...prev, expenseLimits: next } })} />
                                                <Input className="col-span-2 h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" placeholder="μέγ. %" value={limit.maxPercentage} onChange={(e) => setFormData((prev) => { const next = [...prev.expenseLimits]; next[idx] = { ...next[idx], maxPercentage: e.target.value }; return { ...prev, expenseLimits: next } })} />
                                                <Input className="col-span-2 h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" placeholder="ελάχ. %" value={limit.minPercentage} onChange={(e) => setFormData((prev) => { const next = [...prev.expenseLimits]; next[idx] = { ...next[idx], minPercentage: e.target.value }; return { ...prev, expenseLimits: next } })} />
                                                <Input className="col-span-2 h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" placeholder="μέγ. ποσό" value={limit.maxAmount} onChange={(e) => setFormData((prev) => { const next = [...prev.expenseLimits]; next[idx] = { ...next[idx], maxAmount: e.target.value }; return { ...prev, expenseLimits: next } })} />
                                                <div className="col-span-1 flex items-center justify-center gap-1">
                                                    <Checkbox checked={limit.isMandatory} onCheckedChange={(v) => setFormData((prev) => { const next = [...prev.expenseLimits]; next[idx] = { ...next[idx], isMandatory: !!v }; return { ...prev, expenseLimits: next } })} />
                                                    <Button type="button" variant="ghost" size="icon" className="h-7 w-7" onClick={() => setFormData((prev) => ({ ...prev, expenseLimits: prev.expenseLimits.filter((_, index) => index !== idx) }))}>
                                                        <Trash2 className="w-3 h-3 text-red-500" />
                                                    </Button>
                                                </div>
                                            </div>
                                        ))}
                                        {formData.expenseLimits.length === 0 && (
                                            <p className="text-[11px] text-[#A19F9D]">Δεν προστέθηκαν όρια δαπανών ακόμα.</p>
                                        )}
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="regions" className="m-0">
                                <div className="bg-white rounded-lg border border-[#EDEBE9] p-4 space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D]">Επιλογή Ενεργών Περιφερειών</p>
                                    <div className="grid grid-cols-3 gap-2">
                                        {allPeriferies.map(p => (
                                            <div
                                                key={p.id}
                                                className={`p-3 rounded border flex items-center gap-2 cursor-pointer transition-colors ${selectedPeriferies.has(p.id) ? 'bg-[#EFF6FC] border-[#C7E0F4]' : 'bg-white border-[#EDEBE9] hover:bg-[#F3F2F1]'}`}
                                                onClick={() => {
                                                    const next = new Set(selectedPeriferies);
                                                    if (next.has(p.id)) next.delete(p.id); else next.add(p.id);
                                                    setSelectedPeriferies(next);
                                                }}
                                            >
                                                <Checkbox checked={selectedPeriferies.has(p.id)} onCheckedChange={() => { }} />
                                                <span className="text-[11px] font-semibold text-[#201F1E]">{p.nameEL}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="kads" className="m-0 space-y-3">
                                <div className="bg-white rounded-lg border border-[#EDEBE9] p-4 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D]">ΚΑΔ & PDF Προγράμματος</p>
                                            <p className="text-[11px] text-[#605E5C] mt-0.5">Εξαγωγή απαιτήσεων, ορίων δαπανών και ΚΑΔ από PDF, ή εισαγωγή ΚΑΔ χειροκίνητα.</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Label className="h-8 px-3 text-[12px] font-semibold border border-[#C8C6C4] hover:bg-[#EDEBE9] rounded flex items-center cursor-pointer">
                                                Επιλογή PDF
                                                <input type="file" className="hidden" accept="application/pdf" onChange={(e) => setProgramDetailsFile(e.target.files?.[0] || null)} />
                                            </Label>
                                            <Button
                                                onClick={handleUploadProgramDetails}
                                                disabled={isProcessingProgramDetails || !programDetailsFile || !editingProgram}
                                                className="h-8 px-5 text-[12px] font-semibold bg-[#0078D4] hover:bg-[#106EBE] text-white rounded shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,120,212,0.25)]"
                                            >
                                                {isProcessingProgramDetails ? <RefreshCcw className="w-3 h-3 animate-spin mr-2" /> : null}
                                                {isProcessingProgramDetails ? "Επεξεργασία..." : "Ανάλυση & Αποθήκευση"}
                                            </Button>
                                        </div>
                                    </div>
                                    {programDetailsFile && <p className="text-[11px] text-[#0078D4]">Επιλέχθηκε: {programDetailsFile.name}</p>}
                                </div>

                                <div className="bg-white rounded-lg border border-[#EDEBE9] p-4 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D]">Χειροκίνητη Εισαγωγή ΚΑΔ</p>
                                        {!editingProgram && <span className="text-[11px] text-[#A19F9D] italic">Αποθηκεύστε πρώτα για να δημιουργήσετε νέους κωδικούς</span>}
                                    </div>
                                    <Textarea
                                        value={manualKadInput}
                                        onChange={(e) => setManualKadInput(e.target.value)}
                                        placeholder="Επικολλήστε κείμενο από prompt ή παράρτημα PDF. Παράδειγμα: 46.11, 56.10, 62.01"
                                        className="rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm min-h-[80px]"
                                    />
                                    <div className="flex items-center justify-between">
                                        <p className="text-[11px] text-[#A19F9D]">Αυτόματη ανίχνευση μοτίβων όπως 46.11 και σύνδεσή τους με αυτό το πρόγραμμα.</p>
                                        <Button
                                            onClick={handleImportManualKads}
                                            disabled={isImportingManualKads || !manualKadInput.trim()}
                                            className="h-8 px-5 text-[12px] font-semibold bg-[#0078D4] hover:bg-[#106EBE] text-white rounded shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,120,212,0.25)]"
                                        >
                                            {isImportingManualKads ? <RefreshCcw className="w-3 h-3 animate-spin mr-2" /> : null}
                                            {isImportingManualKads ? "Εισαγωγή..." : "Εισαγωγή ΚΑΔ"}
                                        </Button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3 h-[360px]">
                                    <div className="bg-white rounded-lg border border-[#EDEBE9] overflow-hidden flex flex-col">
                                        <div className="px-4 py-2 border-b border-[#EDEBE9]">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D]">Συνδεδεμένοι ΚΑΔ ({selectedKads.size})</span>
                                        </div>
                                        <div className="flex-1 overflow-y-auto p-3 space-y-1">
                                            {allKads.filter(k => selectedKads.has(k.id)).map(k => (
                                                <div key={k.id} className="flex items-center gap-2 p-2 bg-[#F3F2F1] rounded">
                                                    <span className="font-mono font-bold text-[11px] text-[#201F1E]">{k.code}</span>
                                                    <span className="text-[10px] text-[#A19F9D] truncate">{k.nameEL}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-lg border border-[#EDEBE9] overflow-hidden flex flex-col">
                                        <div className="p-3 border-b border-[#EDEBE9]">
                                            <Input placeholder="Αναζήτηση κωδικών ΚΑΔ..." value={kadSearch} onChange={e => setKadSearch(e.target.value)} className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" />
                                        </div>
                                        <div className="flex-1 overflow-y-auto p-3 space-y-1">
                                            {allKads.filter(k => !kadSearch || k.code.includes(kadSearch) || k.nameEL.toLowerCase().includes(kadSearch.toLowerCase())).slice(0, 50).map(kad => (
                                                <div key={kad.id} className="flex items-center gap-2 p-2 hover:bg-[#F3F2F1] rounded cursor-pointer" onClick={() => {
                                                    const next = new Set(selectedKads);
                                                    if (next.has(kad.id)) next.delete(kad.id); else next.add(kad.id);
                                                    setSelectedKads(next);
                                                }}>
                                                    <Checkbox checked={selectedKads.has(kad.id)} onCheckedChange={() => { }} />
                                                    <div className="flex flex-col">
                                                        <span className="font-bold text-[11px] text-[#201F1E]">{kad.code}</span>
                                                        <span className="text-[10px] text-[#A19F9D] truncate w-40">{kad.nameEL}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="media" className="m-0">
                                <div className="bg-white rounded-lg border border-[#EDEBE9] p-4 space-y-4">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D]">Μέσα & Αρχεία</p>
                                    <p className="text-[11px] text-[#A19F9D]">URL εικόνας προγράμματος και αρχείου δημοσίευσης. Για περισσότερα μέσα χρησιμοποιήστε τη σελίδα λεπτομερειών.</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">URL Εικόνας</Label>
                                            <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={formData.image || ""} onChange={(e) => setFormData({ ...formData, image: e.target.value })} placeholder="https://..." />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">URL Αρχείου Δημοσίευσης</Label>
                                            <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={formData.publicationFile || ""} onChange={(e) => setFormData({ ...formData, publicationFile: e.target.value })} placeholder="https://..." />
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                        </div>

                        {/* Footer */}
                        <div className="px-5 py-3 border-t border-[#EDEBE9] bg-white flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                                <Button variant="ghost" onClick={goToPreviousStep} disabled={isFirstStep} className="h-8 px-4 text-[12px] font-semibold text-[#605E5C] hover:bg-[#EDEBE9] rounded">Πίσω</Button>
                                <Button variant="ghost" onClick={goToNextStep} disabled={isLastStep} className="h-8 px-4 text-[12px] font-semibold text-[#605E5C] hover:bg-[#EDEBE9] rounded">Επόμενο</Button>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button variant="ghost" onClick={() => setIsDialogOpen(false)} className="h-8 px-4 text-[12px] font-semibold text-[#605E5C] hover:bg-[#EDEBE9] rounded">Ακύρωση</Button>
                                <Button disabled={isSaving} onClick={handleSave} className="h-8 px-5 text-[12px] font-semibold bg-[#0078D4] hover:bg-[#106EBE] text-white rounded shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,120,212,0.25)]">
                                    {isSaving ? <RefreshCcw className="w-3 h-3 animate-spin mr-2" /> : null}
                                    {isSaving ? "Αποθήκευση..." : "Αποθήκευση Αλλαγών"}
                                </Button>
                            </div>
                        </div>
                    </Tabs>
                </DialogContent>
            </Dialog>

            {/* Row upload modal */}
            <Dialog open={isRowUploadModalOpen} onOpenChange={(open) => { if (deepSeekStatus === "processing") return; setIsRowUploadModalOpen(open) }}>
                <DialogContent className="max-w-lg p-0 overflow-hidden rounded-lg">
                    <DialogHeader className="px-5 py-4 border-b border-[#EDEBE9] bg-white">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-[#EFF6FC] border border-[#C7E0F4] flex items-center justify-center shrink-0">
                                <Upload className="w-4 h-4 text-[#0078D4]" />
                            </div>
                            <div>
                                <DialogTitle className="text-sm font-bold text-[#201F1E]">Μεταφόρτωση Ολόκληρου PDF Προγράμματος</DialogTitle>
                                <p className="text-[11px] text-[#A19F9D]">{rowUploadProgram ? rowUploadProgram.nameEL : "Επιλέξτε PDF προγράμματος για ανάλυση."}</p>
                            </div>
                        </div>
                    </DialogHeader>
                    <div className="bg-[#F3F2F1] p-4">
                        <div className="bg-white rounded-lg border border-[#EDEBE9] p-4">
                            <Input type="file" accept="application/pdf" className="h-9 rounded border-[#C8C6C4] text-sm" onChange={(e) => setRowUploadFile(e.target.files?.[0] || null)} />
                        </div>
                    </div>
                    <div className="px-5 py-3 border-t border-[#EDEBE9] bg-white flex justify-end gap-2">
                        <Button variant="ghost" onClick={() => setIsRowUploadModalOpen(false)} disabled={deepSeekStatus === "processing"} className="h-8 px-4 text-[12px] font-semibold text-[#605E5C] hover:bg-[#EDEBE9] rounded">Ακύρωση</Button>
                        <Button onClick={handleRowUploadSubmit} disabled={!rowUploadFile || deepSeekStatus === "processing"} className="h-8 px-5 text-[12px] font-semibold bg-[#0078D4] hover:bg-[#106EBE] text-white rounded shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,120,212,0.25)]">
                            <Upload className="w-3 h-3 mr-2" /> Ανάλυση & Αποθήκευση
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>

            {/* DeepSeek progress modal */}
            <Dialog open={deepSeekModalOpen} onOpenChange={closeDeepSeekModal}>
                <DialogContent className="max-w-md p-0 overflow-hidden rounded-lg">
                    <DialogHeader className="px-5 py-4 border-b border-[#EDEBE9] bg-white">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-[#EFF6FC] border border-[#C7E0F4] flex items-center justify-center shrink-0">
                                {deepSeekStatus === "processing" ? <RefreshCcw className="w-4 h-4 text-[#0078D4] animate-spin" /> : deepSeekStatus === "success" ? <Check className="w-4 h-4 text-[#107C10]" /> : <Trash2 className="w-4 h-4 text-[#A4262C]" />}
                            </div>
                            <div>
                                <DialogTitle className="text-sm font-bold text-[#201F1E]">
                                    {deepSeekStatus === "processing" ? "Επεξεργασία DeepSeek" : deepSeekStatus === "success" ? "Η Ανάλυση Ολοκληρώθηκε" : "Αποτυχία Ανάλυσης"}
                                </DialogTitle>
                                <p className="text-[11px] text-[#A19F9D]">{deepSeekMessage}</p>
                            </div>
                        </div>
                    </DialogHeader>
                    <div className="bg-[#F3F2F1] p-4 space-y-3">
                        {deepSeekStatus === "processing" && (
                            <div className="bg-white rounded-lg border border-[#EDEBE9] p-4 flex items-center gap-3">
                                <RefreshCcw className="w-4 h-4 animate-spin text-[#0078D4]" />
                                <p className="text-[11px] text-[#605E5C]">Εξαγωγή απαιτήσεων, ορίων δαπανών και ΚΑΔ...</p>
                            </div>
                        )}
                        {deepSeekStatus === "success" && deepSeekResult && (
                            <div className="grid grid-cols-3 gap-2">
                                <div className="bg-white rounded-lg border border-[#EDEBE9] p-3 text-center">
                                    <div className="text-sm font-bold text-[#201F1E]">{deepSeekResult.requirements}</div>
                                    <div className="text-[11px] text-[#A19F9D]">Απαιτήσεις</div>
                                </div>
                                <div className="bg-white rounded-lg border border-[#EDEBE9] p-3 text-center">
                                    <div className="text-sm font-bold text-[#201F1E]">{deepSeekResult.expenseLimits}</div>
                                    <div className="text-[11px] text-[#A19F9D]">Όρια</div>
                                </div>
                                <div className="bg-white rounded-lg border border-[#EDEBE9] p-3 text-center">
                                    <div className="text-sm font-bold text-[#201F1E]">{deepSeekResult.kads}</div>
                                    <div className="text-[11px] text-[#A19F9D]">ΚΑΔ</div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="px-5 py-3 border-t border-[#EDEBE9] bg-white flex justify-end gap-2">
                        <Button variant="ghost" onClick={closeDeepSeekModal} disabled={deepSeekStatus === "processing"} className="h-8 px-4 text-[12px] font-semibold text-[#605E5C] hover:bg-[#EDEBE9] rounded">Κλείσιμο</Button>
                        {deepSeekStatus !== "processing" && (
                            <Button onClick={() => { setDeepSeekModalOpen(false); setIsRowUploadModalOpen(false); window.location.reload() }} className="h-8 px-5 text-[12px] font-semibold bg-[#0078D4] hover:bg-[#106EBE] text-white rounded shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,120,212,0.25)]">
                                Ανανέωση Δεδομένων
                            </Button>
                        )}
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
