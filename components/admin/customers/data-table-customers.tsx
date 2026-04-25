"use client"

import * as React from "react"
import { ColumnDef } from "@tanstack/react-table"
import {
    ChevronDown,
    Plus,
    Loader2,
    Search,
    ChevronRight,
    Building2,
    Mail,
    Phone,
    Globe,
    Calendar,
    Users2,
    MapPin,
    Trash2,
    Edit3,
    CheckCircle2,
    ExternalLink,
    Zap,
    RefreshCcw,
    Image,
    Link,
    Hash,
    CloudDownload,
    Database,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useRouter } from "next/navigation"
import { useTransition } from "react"
import { toast } from "sonner"
import { createCustomer, updateCustomer, deleteCustomer, getKAD, updateCustomerCarousel, pushCustomerToErp, syncCustomerFromErpByAfm, syncAllFromSoftOne, syncSoftOneLookups, syncGeodataForCustomers, type SoftOneLookups } from "@/app/lib/actions/trdr"
import { getCoordinates } from "@/app/lib/actions/location"
import { normalizeAddressKey } from "@/lib/address-region-utils"
import { CustomerMapOSM } from "./customer-map-osm"
import { GenericDataTable } from "../shared/generic-data-table"

export type Customer = {
    id: string
    SODTYPE: number
    TRDR: number
    CODE: string
    NAME: string
    AFM: string | null
    COUNTRY?: number | null
    TRDBUSINESS?: number | null
    ADDRESS: string | null
    ZIP?: string | null
    DISTRICT?: string | null
    CITY: string | null
    PHONE01: string | null
    PHONE02?: string | null
    EMAIL: string | null
    EMAILACC?: string | null
    CCCEMAILMAR?: string | null
    logo: string | null
    website: string | null
    WEBPAGE?: string | null
    displayAtCarousel: boolean
    registDate: string | Date | null
    legalStatus: string | null
    legalForm?: string | null
    isFranchise?: boolean
    isHomeAddress?: boolean
    numEmployees: number | null
    REMARKS?: string | null
    ISACTIVE?: number | null
    ISPROSP?: number | null
    LATITUDE?: number | null
    LONGITUDE?: number | null
    OBTYPE?: number | null
    TRDGROUP?: number | null
    TRDPGROUP?: number | null
    CONSENT?: number | null
    PRJCS?: number | null
    JOBTYPETRD?: string | null
    kads?: any[]
    financials?: {
        id?: string
        year: number
        turnover?: string | number | null
        ebitda?: string | number | null
        netProfit?: string | number | null
        eme?: string | number | null
        assets?: string | number | null
        equity?: string | number | null
        totalDeMinimis3Years?: string | number | null
    }[]
}

const defaultLookups: SoftOneLookups = { countries: {}, trdpGroups: {}, trdBusinesses: {} }

type CustomerFilter = "avatar" | "webpage" | "email" | "afm"

const LEGAL_FORM_OPTIONS = [
    { value: "ΑΕ", label: "Ανώνυμη Εταιρεία (ΑΕ)" },
    { value: "ΙΚΕ", label: "Ιδιωτική Κεφαλαιουχική Εταιρεία (ΙΚΕ)" },
    { value: "ΟΕ", label: "Ομόρρυθμη Εταιρεία (ΟΕ)" },
    { value: "ΕΕ", label: "Ετερόρρυθμη Εταιρεία (ΕΕ)" },
    { value: "ΑΤΟΜΙΚΗ", label: "Ατομική Επιχείρηση" },
]

function parseLatLng(value: unknown): number | null {
    if (value == null || value === "") return null;
    const n = typeof value === "string" ? parseFloat(value) : Number(value);
    return Number.isFinite(n) ? n : null;
}

function toDateInputValue(value: string | Date | null | undefined): string {
    if (value == null || value === "") return ""
    const d = value instanceof Date ? value : new Date(value)
    if (Number.isNaN(d.getTime())) return ""
    return d.toISOString().slice(0, 10)
}

function normalizeDateInput(value: string | null | undefined): string {
    if (!value) return ""
    const trimmed = value.trim()
    if (!trimmed) return ""
    if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) return trimmed
    const m = trimmed.match(/^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{2,4})$/)
    if (!m) return ""
    const day = m[1].padStart(2, "0")
    const month = m[2].padStart(2, "0")
    const yearRaw = Number(m[3])
    const year = yearRaw < 100 ? String(yearRaw + 2000) : String(yearRaw)
    return `${year}-${month}-${day}`
}

function legalFormLabel(value: string | null | undefined): string {
    if (!value) return "—"
    const normalized = value.trim().toUpperCase()
    const match = LEGAL_FORM_OPTIONS.find((item) => item.value === normalized)
    return match?.label ?? value
}

function buildAddressQuery(customer: Customer): string {
    return [customer.ADDRESS, customer.ZIP, customer.CITY]
        .filter((v): v is string => v != null && typeof v === "string" && v.trim() !== "")
        .map((v) => v.trim())
        .join(", ")
        .trim()
}

function CustomerMapTab({ customer }: { customer: Customer }) {
    const raw = customer as Record<string, unknown>
    const lat = parseLatLng(raw.LATITUDE ?? raw.latitude)
    const lng = parseLatLng(raw.LONGITUDE ?? raw.longitude)
    const hasCoords = lat != null && lng != null && Number.isFinite(lat) && Number.isFinite(lng)

    const addressQuery = React.useMemo(() => buildAddressQuery(customer), [customer.ADDRESS, customer.ZIP, customer.CITY])
    const [geocoded, setGeocoded] = React.useState<{ lat: number; lng: number } | null>(null)
    const [geocodeLoading, setGeocodeLoading] = React.useState(false)
    const [geocodeError, setGeocodeError] = React.useState<string | null>(null)

    React.useEffect(() => {
        if (hasCoords || !addressQuery) return
        let cancelled = false
        setGeocodeError(null)
        setGeocodeLoading(true)
        getCoordinates(addressQuery)
            .then((res) => {
                if (cancelled) return
                if (res) setGeocoded({ lat: res.latitude, lng: res.longitude })
                else setGeocoded(null)
            })
            .catch((e) => {
                if (!cancelled) setGeocodeError(e instanceof Error ? e.message : "Geocode failed")
            })
            .finally(() => {
                if (!cancelled) setGeocodeLoading(false)
            })
        return () => { cancelled = true }
    }, [hasCoords, addressQuery])

    if (hasCoords) {
        return (
            <CustomerMapOSM
                lat={Number(lat)}
                lng={Number(lng)}
                name={customer.NAME ?? undefined}
                address={addressQuery || undefined}
            />
        )
    }

    if (geocoded) {
        return (
            <CustomerMapOSM
                lat={geocoded.lat}
                lng={geocoded.lng}
                name={customer.NAME ?? undefined}
                address={addressQuery || undefined}
            />
        )
    }

    if (geocodeLoading) {
        return (
            <div className="bg-white rounded-lg border border-[#EDEBE9] p-4 text-center">
                <Loader2 className="w-6 h-6 mx-auto text-[#A19F9D] animate-spin mb-2" />
                <p className="text-xs font-medium text-[#605E5C]">Looking up location…</p>
                <p className="text-[10px] text-[#A19F9D] mt-1">{addressQuery}</p>
            </div>
        )
    }

    if (geocodeError) {
        const searchUrl = `https://www.openstreetmap.org/search?query=${encodeURIComponent(addressQuery)}`
        return (
            <div className="bg-white rounded-lg border border-[#EDEBE9] p-4 text-center">
                <MapPin className="w-6 h-6 mx-auto text-[#A19F9D] mb-2" />
                <p className="text-xs font-medium text-[#605E5C]">Could not find location</p>
                <p className="text-[10px] text-[#A19F9D] mt-1">{geocodeError}</p>
                {addressQuery && (
                    <a href={searchUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-xs text-[#0078D4] underline">
                        Search on OpenStreetMap
                    </a>
                )}
            </div>
        )
    }

    if (!addressQuery) {
        return (
            <div className="bg-white rounded-lg border border-[#EDEBE9] p-4 text-center">
                <MapPin className="w-6 h-6 mx-auto text-[#C8C6C4] mb-2" />
                <p className="text-xs font-medium text-[#605E5C]">No coordinates or address</p>
                <p className="text-[10px] text-[#A19F9D] mt-1">Add address, ZIP, or city, or use &quot;Get coordinates&quot; in row actions.</p>
            </div>
        )
    }

    const searchUrl = `https://www.openstreetmap.org/search?query=${encodeURIComponent(addressQuery)}`
    return (
        <div className="bg-white rounded-lg border border-[#EDEBE9] p-4 text-center">
            <MapPin className="w-6 h-6 mx-auto text-[#A19F9D] mb-2" />
            <p className="text-xs font-medium text-[#605E5C]">Location not found for this address</p>
            <p className="text-[10px] text-[#A19F9D] mt-1">{addressQuery}</p>
            <a href={searchUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-xs text-[#0078D4] underline">
                Search on OpenStreetMap
            </a>
        </div>
    )
}

export function CustomersDataTable({ data: initialData, lookups = defaultLookups, addressRegionMap = {} }: { data: Customer[]; lookups?: SoftOneLookups; addressRegionMap?: Record<string, { path: string; periferiaId: string }> }) {
    const router = useRouter()
    const [isPendingSyncAll, startTransitionSyncAll] = useTransition()
    const [data, setData] = React.useState<Customer[]>(initialData)
    const [isMounted, setIsMounted] = React.useState(false)
    const [filters, setFilters] = React.useState<Record<CustomerFilter, boolean>>({
        avatar: false,
        webpage: false,
        email: false,
        afm: false,
    })

    React.useEffect(() => { setIsMounted(true) }, [])
    React.useEffect(() => { setData(initialData) }, [initialData])

    const filteredData = React.useMemo(() => {
        return data.filter((c) => {
            if (filters.avatar && !(c.logo?.trim())) return false
            if (filters.webpage && !(c.website?.trim() || (c as Customer).WEBPAGE?.trim())) return false
            if (filters.email && !(c.EMAIL?.trim())) return false
            if (filters.afm && !(c.AFM?.trim())) return false
            return true
        })
    }, [data, filters])

    const [isDialogOpen, setIsDialogOpen] = React.useState(false)
    const [editingCustomer, setEditingCustomer] = React.useState<Customer | null>(null)
    const [expandedRowTab, setExpandedRowTab] = React.useState<"stats" | "map" | "kads">("stats")

    const [formData, setFormData] = React.useState({
        SODTYPE: 13, TRDR: 0, CODE: "", NAME: "", AFM: "", ADDRESS: "", ZIP: "", CITY: "",
        PHONE01: "", PHONE02: "", EMAIL: "", EMAILACC: "", CCCEMAILMAR: "", website: "",
        registDate: "", legalStatus: "", legalForm: "", isFranchise: false, isHomeAddress: false,
        numEmployees: "", displayAtCarousel: false, removeBackgroundLogo: true, logo: "",
        kads: [] as any[],
        financials: [] as Array<{ year: string; turnover: string; ebitda: string; netProfit: string; eme: string; assets: string; equity: string; totalDeMinimis3Years: string }>,
        COUNTRY: "" as string, TRDPGROUP: "" as string, TRDBUSINESS: "" as string,
        latitude: "", longitude: "",
    })

    const emptyFormData = (): typeof formData => ({
        SODTYPE: 13, TRDR: 0, CODE: "", NAME: "", AFM: "", ADDRESS: "", ZIP: "", CITY: "",
        PHONE01: "", PHONE02: "", EMAIL: "", EMAILACC: "", CCCEMAILMAR: "", website: "",
        registDate: "", legalStatus: "", legalForm: "", isFranchise: false, isHomeAddress: false,
        numEmployees: "", displayAtCarousel: false, removeBackgroundLogo: true, logo: "",
        kads: [], financials: [], COUNTRY: "", TRDPGROUP: "", TRDBUSINESS: "",
        latitude: "", longitude: "",
    })

    const [isUploading, setIsUploading] = React.useState(false)
    const [isSaving, setIsSaving] = React.useState(false)
    const [isSearchingVat, setIsSearchingVat] = React.useState(false)
    const [isResolvingCoords, setIsResolvingCoords] = React.useState(false)

    const handleFetchVat = async () => {
        if (!formData.AFM || formData.AFM.trim() === "") return toast.error("Provide an AFM first")
        setIsSearchingVat(true)
        const tid = toast.loading("Syncing with Government VAT API...")
        try {
            const res = await fetch("/api/vat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ afm: formData.AFM.trim() })
            })
            const apiData = await res.json()
            if (apiData.basic_rec) {
                const rawItem = apiData.firm_act_tab?.item
                const itemArray = Array.isArray(rawItem) ? rawItem : rawItem != null && typeof rawItem === "object" ? [rawItem] : []
                const fetchedKads = itemArray.map((k: any) => ({
                    afm: formData.AFM.trim(),
                    firm_act_code: String(k.firm_act_code || ""),
                    firm_act_descr: String(k.firm_act_descr || ""),
                    firm_act_kind: k.firm_act_kind === "1"
                }))
                const str = (v: unknown) => (v != null && typeof v === "string" ? v : "")
                setFormData(prev => ({
                    ...prev,
                    NAME: str(apiData.basic_rec?.onomasia) || prev.NAME,
                    ADDRESS: `${str(apiData.basic_rec?.postal_address)} ${str(apiData.basic_rec?.postal_address_no)}`.trim() || prev.ADDRESS,
                    ZIP: str(apiData.basic_rec?.postal_zip_code) || prev.ZIP,
                    registDate: normalizeDateInput(str(apiData.basic_rec?.regist_date)) || prev.registDate,
                    legalStatus: str(apiData.basic_rec?.legal_status_descr) || prev.legalStatus,
                    kads: fetchedKads,
                }))
                toast.success("VIES/VAT Data Retrieved", { id: tid })
            } else throw new Error(apiData.error || "No record found")
        } catch (err: any) { toast.error(err.message, { id: tid }) }
        finally { setIsSearchingVat(false) }
    }

    const handleUploadLogo = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return
        setIsUploading(true)
        const tid = toast.loading("Processing logo with AI...")
        try {
            const form = new FormData()
            form.append("logo", file)
            form.append("removeBackground", String(formData.removeBackgroundLogo))
            const res = await fetch("/api/admin/trdr/upload-logo", { method: "POST", body: form })
            const d = await res.json()
            if (!res.ok) throw new Error(d.error || "Upload failed")
            setFormData(prev => ({ ...prev, logo: d.url }))
            toast.success("Logo Optimized & Uploaded", { id: tid })
        } catch (error: any) { toast.error(error.message, { id: tid }) }
        finally { setIsUploading(false) }
    }

    const handleGetCoordinates = async () => {
        const parts = [formData.ADDRESS, formData.CITY, formData.ZIP].filter(Boolean)
        const query = parts.join(", ").trim()
        if (!query) return toast.error("Enter address, city or ZIP first")
        setIsResolvingCoords(true)
        const tid = toast.loading("Resolving coordinates…")
        try {
            const coords = await getCoordinates(query)
            if (coords) {
                setFormData((prev) => ({ ...prev, latitude: String(coords.latitude), longitude: String(coords.longitude) }))
                toast.success("Coordinates set", { id: tid })
            } else {
                toast.error("No results", { id: tid })
            }
        } catch (e: any) {
            toast.error(e?.message ?? "Failed", { id: tid })
        } finally {
            setIsResolvingCoords(false)
        }
    }

    const handleSyncAllFromSoftOne = () => {
        startTransitionSyncAll(async () => {
            try {
                const result = await syncAllFromSoftOne()
                if (result.success && result.customers) {
                    const c = result.customers
                    const l = result.lookups?.counts
                    const parts = [`${c.synced} customers (${c.created} new, ${c.updated} updated)`]
                    if (l) parts.unshift(`${l.country} countries, ${l.trdpGroup} groups, ${l.trdBusiness} businesses`)
                    toast.success(parts.join(" · "), { duration: 5000 })
                    router.refresh()
                } else {
                    toast.error(result.message ?? "Sync failed", { duration: 5000 })
                    if (result.lookups?.counts) router.refresh()
                }
            } catch (e) {
                toast.error(e instanceof Error ? e.message : "Sync failed")
            }
        })
    }

    const handleSyncLookups = async () => {
        try {
            const result = await syncSoftOneLookups()
            if (result.success && result.counts) {
                toast.success(`Lookups: ${result.counts.country} countries, ${result.counts.trdpGroup} groups, ${result.counts.trdBusiness} businesses.`, { duration: 4000 })
                router.refresh()
            } else {
                toast.error(result.message ?? "Sync lookups failed")
            }
        } catch (e) {
            toast.error(e instanceof Error ? e.message : "Sync lookups failed")
        }
    }

    const handleGetCoordinatesBulk = async () => {
        try {
            const result = await syncGeodataForCustomers()
            if (result.success) {
                toast.success(`Coordinates updated for ${result.updated} customer(s).`, { duration: 4000 })
                router.refresh()
            } else {
                toast.error(result.message ?? "Geodata failed", { description: result.errors?.slice(0, 2).join("; "), duration: 5000 })
                if (result.updated > 0) router.refresh()
            }
        } catch (e) {
            toast.error(e instanceof Error ? e.message : "Get coordinates failed")
        }
    }

    const buildPayload = () => ({
        ...formData,
        TRDR: Number(formData.TRDR),
        SODTYPE: Number(formData.SODTYPE),
        numEmployees: formData.numEmployees ? Number(formData.numEmployees) : null,
        COUNTRY: formData.COUNTRY ? Number(formData.COUNTRY) : null,
        TRDPGROUP: formData.TRDPGROUP ? Number(formData.TRDPGROUP) : null,
        TRDBUSINESS: formData.TRDBUSINESS ? Number(formData.TRDBUSINESS) : null,
        LATITUDE: formData.latitude ? Number(formData.latitude) : null,
        LONGITUDE: formData.longitude ? Number(formData.longitude) : null,
        financials: (formData.financials || [])
            .filter((row) => row.year && String(row.year).trim() !== "")
            .map((row) => ({
                year: Number(row.year),
                turnover: row.turnover ? Number(row.turnover) : null,
                ebitda: row.ebitda ? Number(row.ebitda) : null,
                netProfit: row.netProfit ? Number(row.netProfit) : null,
                eme: row.eme ? Number(row.eme) : null,
                assets: row.assets ? Number(row.assets) : null,
                equity: row.equity ? Number(row.equity) : null,
                totalDeMinimis3Years: row.totalDeMinimis3Years ? Number(row.totalDeMinimis3Years) : null,
            })),
    })

    const handleSave = async (pushToErp: boolean = false) => {
        if (!editingCustomer && pushToErp) return
        setIsSaving(true)
        try {
            const payload = buildPayload()
            if (editingCustomer) {
                const updated = await updateCustomer(editingCustomer.id, payload)
                setData((prev) => prev.map((c) => (c.id === updated.id ? (updated as any) : c)))
                if (pushToErp) {
                    const erpResult = await pushCustomerToErp(editingCustomer.TRDR, payload, editingCustomer)
                    if (erpResult.success) {
                        toast.success("Saved to database and sent to ERP (SetData)")
                    } else {
                        toast.warning("Saved to database, but ERP update failed", {
                            description: erpResult.message ?? "Check SoftOne connection and try again.",
                            duration: 6000,
                        })
                    }
                } else {
                    toast.success("Customer updated in database")
                }
            } else {
                const created = await createCustomer(payload)
                setData((prev) => [created as any, ...prev])
                toast.success("Customer created")
            }
            setIsDialogOpen(false)
        } catch (err: any) { toast.error(err.message) }
        finally { setIsSaving(false) }
    }

    const columns: ColumnDef<Customer>[] = [
        {
            id: "avatar",
            header: "",
            cell: ({ row }) => {
                const logo = row.original.logo?.trim()
                const fallbackSrc = "https://ui-avatars.com/api/?name=" + encodeURIComponent(row.original.NAME ?? "")
                return (
                    <div className="w-9 h-9 rounded-lg overflow-hidden bg-[#F3F2F1] border border-[#EDEBE9] shrink-0 flex items-center justify-center p-1">
                        <img
                            src={logo || fallbackSrc}
                            alt=""
                            className="w-full h-full object-contain"
                            onError={(e) => (e.currentTarget.src = fallbackSrc)}
                        />
                    </div>
                )
            },
            size: 50
        },
        {
            accessorKey: "NAME",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Company</span>,
            cell: ({ row }) => {
                const kadCount = row.original.kads?.length ?? 0
                return (
                    <div className="flex flex-col gap-0.5">
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-sm font-semibold text-[#201F1E]">{row.original.NAME}</span>
                            <Badge variant="secondary" className="text-[10px] font-semibold px-1.5 py-0 h-4 bg-[#EFF6FC] text-[#0078D4] border border-[#C7E0F4]">
                                {kadCount} KAD{kadCount !== 1 ? "s" : ""}
                            </Badge>
                        </div>
                        <span className="text-[11px] text-[#A19F9D] font-mono">{row.original.AFM}</span>
                    </div>
                )
            }
        },
        {
            accessorKey: "CODE",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Code</span>,
            cell: ({ row }) => <code className="text-xs font-mono bg-[#F3F2F1] border border-[#EDEBE9] px-1.5 py-0.5 rounded text-[#605E5C]">{row.original.CODE}</code>
        },
        {
            id: "COUNTRY",
            accessorKey: "COUNTRY",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Country</span>,
            cell: ({ row }) => {
                const code = (row.original as Customer).COUNTRY
                const name = code != null ? lookups.countries[code] : null
                return <span className="text-xs text-[#605E5C]">{name ?? (code != null ? String(code) : "—")}</span>
            }
        },
        {
            accessorKey: "displayAtCarousel",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Homepage</span>,
            cell: ({ row }) => {
                const c = row.original
                const hasLogo = !!(c.logo?.trim())
                const handleChange = async (checked: boolean) => {
                    try {
                        await updateCustomerCarousel(c.id, checked)
                        setData((prev) => prev.map((x) => (x.id === c.id ? { ...x, displayAtCarousel: checked } : x)))
                        toast.success(checked ? "Shown on homepage scroller" : "Removed from homepage scroller")
                    } catch (e: any) {
                        toast.error(e?.message ?? "Update failed")
                    }
                }
                return (
                    <div onClick={(e) => e.stopPropagation()} className="flex items-center">
                        <TooltipProvider delayDuration={200}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <span className="inline-flex">
                                        <Switch
                                            checked={c.displayAtCarousel}
                                            onCheckedChange={handleChange}
                                            disabled={!hasLogo}
                                            className="data-[state=checked]:bg-emerald-600"
                                        />
                                    </span>
                                </TooltipTrigger>
                                <TooltipContent side="left" className="text-xs">
                                    {hasLogo ? (c.displayAtCarousel ? "Shown on first page companies scroller" : "Show on first page scroller") : "Add logo to feature on homepage"}
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                )
            }
        },
        {
            accessorKey: "PHONE02",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Τηλ.2</span>,
            cell: ({ row }) => <span className="text-xs font-mono text-[#605E5C]">{(row.original as Customer).PHONE02 ?? "—"}</span>
        },
        {
            accessorKey: "EMAILACC",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Email Λογ.</span>,
            cell: ({ row }) => <span className="text-xs truncate max-w-[120px] block text-[#605E5C]" title={(row.original as Customer).EMAILACC ?? undefined}>{(row.original as Customer).EMAILACC ?? "—"}</span>
        },
        {
            accessorKey: "CCCEMAILMAR",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Email Μαρ.</span>,
            cell: ({ row }) => <span className="text-xs truncate max-w-[120px] block text-[#605E5C]" title={(row.original as Customer).CCCEMAILMAR ?? undefined}>{(row.original as Customer).CCCEMAILMAR ?? "—"}</span>
        },
        {
            accessorKey: "website",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Web</span>,
            cell: ({ row }) => {
                const url = row.original.website ?? (row.original as Customer).WEBPAGE
                return url ? <a href={url.startsWith("http") ? url : `https://${url}`} target="_blank" rel="noopener noreferrer" className="text-xs text-[#0078D4] hover:underline truncate max-w-[100px] block" title={url}>{url.replace(/^https?:\/\//, "").slice(0, 20)}{url.length > 20 ? "…" : ""}</a> : <span className="text-[#A19F9D]">—</span>
            }
        },
        {
            accessorKey: "ISACTIVE",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Ενεργός</span>,
            cell: ({ row }) => {
                const v = (row.original as Customer).ISACTIVE
                return v == null ? <span className="text-[#A19F9D] text-xs">—</span> : (
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold ${v ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-[#F3F2F1] text-[#605E5C] border border-[#EDEBE9]'}`}>
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${v ? 'bg-emerald-500' : 'bg-[#C8C6C4]'}`} />
                        {v ? "Ναι" : "Όχι"}
                    </span>
                )
            }
        },
        {
            accessorKey: "ISPROSP",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Υποψήφιος</span>,
            cell: ({ row }) => {
                const v = (row.original as Customer).ISPROSP
                return v == null ? <span className="text-[#A19F9D]">—</span> : <span className="text-xs text-[#605E5C]">{v ? "Ναι" : "Όχι"}</span>
            }
        },
        {
            accessorKey: "numEmployees",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Εργαζόμενοι</span>,
            cell: ({ row }) => <span className="text-xs font-medium text-[#605E5C]">{row.original.numEmployees ?? "—"}</span>
        },
        {
            id: "TRDPGROUP",
            accessorKey: "TRDPGROUP",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Τρ.Όμιλος</span>,
            cell: ({ row }) => {
                const code = (row.original as Customer).TRDPGROUP
                const name = code != null ? lookups.trdpGroups[code] : null
                return <span className="text-xs text-[#605E5C]">{name ?? (code != null ? String(code) : "—")}</span>
            }
        },
        {
            id: "TRDBUSINESS",
            accessorKey: "TRDBUSINESS",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Επιχείρηση</span>,
            cell: ({ row }) => {
                const code = (row.original as Customer).TRDBUSINESS
                const name = code != null ? lookups.trdBusinesses[code] : null
                return <span className="text-xs text-[#605E5C]">{name ?? (code != null ? String(code) : "—")}</span>
            }
        },
        {
            accessorKey: "REMARKS",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Παρατηρήσεις</span>,
            cell: ({ row }) => {
                const r = (row.original as Customer).REMARKS
                return r ? <span className="text-xs text-[#A19F9D] max-w-[140px] truncate block" title={r}>{r}</span> : <span className="text-[#A19F9D]">—</span>
            }
        },
        {
            id: "actions",
            cell: ({ row }) => (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild onClick={e => e.stopPropagation()}>
                        <Button variant="outline" size="sm" className="h-8 px-3 text-[12px] font-semibold text-[#201F1E] border-[#C8C6C4] hover:bg-[#EDEBE9] rounded gap-1">
                            Actions <ChevronDown className="w-3.5 h-3.5 text-[#A19F9D]" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[180px] text-xs">
                        <DropdownMenuItem onClick={() => {
                            const c = row.original as Customer;
                            setEditingCustomer(c);
                            const countryVal = (c as any).COUNTRY ?? c.COUNTRY;
                            const trdpVal = (c as any).TRDPGROUP ?? c.TRDPGROUP;
                            const trdbVal = (c as any).TRDBUSINESS ?? c.TRDBUSINESS;
                            setFormData({
                                ...c,
                                ZIP: (c.ZIP ?? "") || "",
                                registDate: toDateInputValue(c.registDate),
                                numEmployees: c.numEmployees?.toString() ?? "",
                                legalForm: ((c as any).legalForm ?? "") || "",
                                isFranchise: Boolean((c as any).isFranchise),
                                isHomeAddress: Boolean((c as any).isHomeAddress),
                                removeBackgroundLogo: true,
                                COUNTRY: countryVal != null && countryVal !== "" ? String(countryVal) : "",
                                TRDPGROUP: trdpVal != null && trdpVal !== "" ? String(trdpVal) : "",
                                TRDBUSINESS: trdbVal != null && trdbVal !== "" ? String(trdbVal) : "",
                                latitude: (c as any).LATITUDE != null ? String((c as any).LATITUDE) : "",
                                longitude: (c as any).LONGITUDE != null ? String((c as any).LONGITUDE) : "",
                                PHONE01: (c.PHONE01 ?? "") || "",
                                PHONE02: ((c as any).PHONE02 ?? c.PHONE02 ?? "") || "",
                                EMAIL: (c.EMAIL ?? "") || "",
                                EMAILACC: ((c as any).EMAILACC ?? c.EMAILACC ?? "") || "",
                                CCCEMAILMAR: ((c as any).CCCEMAILMAR ?? c.CCCEMAILMAR ?? "") || "",
                                financials: (c.financials || []).map((f: any) => ({
                                    year: f.year != null ? String(f.year) : "",
                                    turnover: f.turnover != null ? String(f.turnover) : "",
                                    ebitda: f.ebitda != null ? String(f.ebitda) : "",
                                    netProfit: f.netProfit != null ? String(f.netProfit) : "",
                                    eme: f.eme != null ? String(f.eme) : "",
                                    assets: f.assets != null ? String(f.assets) : "",
                                    equity: f.equity != null ? String(f.equity) : "",
                                    totalDeMinimis3Years: f.totalDeMinimis3Years != null ? String(f.totalDeMinimis3Years) : "",
                                })),
                            } as any);
                            setIsDialogOpen(true);
                        }}><Edit3 className="w-4 h-4 mr-2 text-[#0078D4]" /> Edit Profile</DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={(e) => {
                                e.stopPropagation();
                                if (!row.original.AFM?.trim()) {
                                    toast.error("No AFM – enter AFM to sync KADs");
                                    return;
                                }
                                toast.promise(getKAD(row.original.id, row.original.AFM), {
                                    loading: "Syncing KADs…",
                                    success: (d) => {
                                        setData((prev) => prev.map((c) => (c.id === d.id ? (d as any) : c)));
                                        return "Knowledge database synced";
                                    },
                                    error: (err) => err?.message ?? "Sync failed",
                                });
                            }}
                            className="text-[#0078D4]"
                        >
                            <Zap className="w-4 h-4 mr-2" /> Sync KADs
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={async () => {
                            if (!row.original.AFM?.trim()) {
                                toast.error("Customer has no AFM")
                                return
                            }
                            try {
                                const res = await syncCustomerFromErpByAfm(row.original.id)
                                if (res.success) {
                                    toast.success("Synced from ERP")
                                    router.refresh()
                                } else {
                                    toast.error(res.message ?? "Sync from ERP failed")
                                }
                            } catch (e) {
                                toast.error(e instanceof Error ? e.message : "Sync from ERP failed")
                            }
                        }} className="text-sky-600"><RefreshCcw className="w-4 h-4 mr-2" /> Sync from ERP (AFM)</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={handleSyncAllFromSoftOne} disabled={isPendingSyncAll} className="text-emerald-600">
                            {isPendingSyncAll ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <CloudDownload className="w-4 h-4 mr-2" />}
                            Sync all from SoftOne
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={handleSyncLookups}><Database className="w-4 h-4 mr-2" /> Sync lookups</DropdownMenuItem>
                        <DropdownMenuItem onClick={handleGetCoordinatesBulk}><MapPin className="w-4 h-4 mr-2" /> Get coordinates</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={async () => {
                            if (confirm("Delete client?")) {
                                await deleteCustomer(row.original.id);
                                setData(data.filter(c => c.id !== row.original.id));
                            }
                        }} className="text-red-500"><Trash2 className="w-4 h-4 mr-2" /> Delete Client</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    ]

    const renderExpandedRow = (customer: Customer) => {
        const countryName = customer.COUNTRY != null ? lookups.countries[customer.COUNTRY] : null
        const trdpGroupName = customer.TRDPGROUP != null ? lookups.trdpGroups[customer.TRDPGROUP] : null
        const trdBusinessName = customer.TRDBUSINESS != null ? lookups.trdBusinesses[customer.TRDBUSINESS] : null
        return (
            <div className="mx-4 mb-3 mt-1 rounded-lg border border-[#EDEBE9] bg-[#F3F2F1] overflow-hidden">
                <Tabs value={expandedRowTab} onValueChange={(v) => setExpandedRowTab(v as "stats" | "map" | "kads")}>
                    <div className="px-4 pt-3">
                        <TabsList className="mb-0 bg-white border border-[#EDEBE9] p-0.5 h-8 rounded gap-0.5 w-fit">
                            <TabsTrigger value="stats" className="data-[state=active]:bg-[#F3F2F1] data-[state=active]:text-[#201F1E] text-[11px] font-semibold uppercase tracking-wide px-4 rounded h-7">Intel</TabsTrigger>
                            <TabsTrigger value="kads" className="data-[state=active]:bg-[#F3F2F1] data-[state=active]:text-[#201F1E] text-[11px] font-semibold uppercase tracking-wide px-4 rounded h-7">KAD ({customer.kads?.length || 0})</TabsTrigger>
                            <TabsTrigger value="map" className="data-[state=active]:bg-[#F3F2F1] data-[state=active]:text-[#201F1E] text-[11px] font-semibold uppercase tracking-wide px-4 rounded h-7">Map</TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="stats" className="animate-in fade-in duration-300 p-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#EDEBE9] rounded-lg overflow-hidden mb-3">
                            <div className="bg-white px-3 py-2">
                                <p className="flex items-center gap-1 text-[10px] font-bold text-[#A19F9D] uppercase tracking-wide mb-1"><Users2 className="w-3 h-3" /> Workforce</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-sm font-bold text-[#201F1E]">{customer.numEmployees ?? "0"}</span>
                                    <span className="text-[11px] text-[#A19F9D]">FTEs</span>
                                </div>
                            </div>
                            <div className="bg-white px-3 py-2">
                                <p className="flex items-center gap-1 text-[10px] font-bold text-[#A19F9D] uppercase tracking-wide mb-1"><Calendar className="w-3 h-3" /> Established</p>
                                <span className="text-sm font-semibold text-[#201F1E]">{toDateInputValue(customer.registDate) || "—"}</span>
                            </div>
                            <div className="bg-white px-3 py-2">
                                <p className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-wide mb-1">Country</p>
                                <span className="text-xs font-semibold text-[#605E5C]">{countryName ?? (customer.COUNTRY != null ? String(customer.COUNTRY) : "—")}</span>
                            </div>
                            <div className="bg-white px-3 py-2">
                                <p className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-wide mb-1">Group / Business</p>
                                <p className="text-xs font-semibold text-[#605E5C]">{trdpGroupName ?? "—"}{trdBusinessName ? ` · ${trdBusinessName}` : ""}</p>
                            </div>
                            <div className="md:col-span-2 bg-white px-3 py-2 grid grid-cols-2 gap-3">
                                <div>
                                    <p className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-wide mb-1">Location</p>
                                    <p className="text-xs font-semibold text-[#605E5C] flex items-center gap-1"><MapPin className="w-2.5 h-2.5 text-red-400 shrink-0" />{[customer.ADDRESS, customer.CITY].map((v) => (v != null && typeof v === "string" ? v : "")).filter(Boolean).join(", ") || "—"}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-[#A19F9D] uppercase tracking-wide mb-1">Legal</p>
                                    <p className="text-xs font-semibold text-[#0078D4]">{customer.legalStatus != null && typeof customer.legalStatus === "string" ? customer.legalStatus : "—"}</p>
                                    <p className="text-[11px] text-[#A19F9D] mt-0.5">Form: {legalFormLabel((customer as any).legalForm)}</p>
                                </div>
                            </div>
                            {addressRegionMap && (() => {
                                const key = normalizeAddressKey(customer.ADDRESS, customer.CITY, customer.ZIP ?? null)
                                const mapping = key && key !== "||" ? addressRegionMap[key] : null
                                if (!mapping) return null
                                return (
                                    <div className="md:col-span-2 bg-amber-50/50 px-3 py-2 border-l-2 border-amber-300">
                                        <p className="text-[10px] font-bold text-amber-600 uppercase tracking-wide mb-1">Region</p>
                                        <p className="text-xs font-semibold text-amber-800">{mapping.path}</p>
                                    </div>
                                )
                            })()}
                        </div>
                        <div className="flex flex-wrap gap-0 bg-[#201F1E] rounded-lg overflow-hidden">
                            <div className="flex items-center gap-2 px-3 py-2 text-xs border-r border-white/10"><Mail className="w-3 h-3 text-[#C7E0F4] shrink-0" /><span className="font-medium text-white">{customer.EMAIL ?? "—"}</span></div>
                            <div className="flex items-center gap-2 px-3 py-2 border-r border-white/10 text-xs"><Phone className="w-3 h-3 text-emerald-400 shrink-0" /><span className="font-medium text-white">{customer.PHONE01 ?? "—"}</span></div>
                            <div className="flex items-center gap-2 px-3 py-2 text-xs ml-auto"><Globe className="w-3 h-3 text-sky-400 shrink-0" /><a href={customer.website || "#"} target="_blank" rel="noopener noreferrer" className="font-medium text-white underline decoration-sky-400/30 hover:text-sky-400">{customer.website ? "Web" : "—"}</a></div>
                        </div>
                    </TabsContent>

                    <TabsContent value="map" className="mt-0 p-4 min-h-[250px]">
                        {expandedRowTab === "map" && <CustomerMapTab customer={customer} />}
                    </TabsContent>

                    <TabsContent value="kads" className="p-4">
                        <div className="bg-white rounded-lg border border-[#EDEBE9] overflow-hidden">
                            <table className="w-full text-xs">
                                <thead className="bg-[#F3F2F1] border-b border-[#EDEBE9]">
                                    <tr>
                                        <th className="px-4 py-2 text-left text-[10px] font-bold uppercase text-[#A19F9D] tracking-wide">Code</th>
                                        <th className="px-4 py-2 text-left text-[10px] font-bold uppercase text-[#A19F9D] tracking-wide">Description</th>
                                        <th className="px-4 py-2 text-right text-[10px] font-bold uppercase text-[#A19F9D] tracking-wide">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#EDEBE9]">
                                    {customer.kads?.map((k, i) => (
                                        <tr key={i} className="hover:bg-[#F3F2F1]/50">
                                            <td className="px-4 py-2 font-mono text-xs font-semibold text-[#0078D4]">{k.firm_act_code}</td>
                                            <td className="px-4 py-2 text-xs text-[#605E5C]">{k.firm_act_descr}</td>
                                            <td className="px-4 py-2 text-right">{k.firm_act_kind
                                                ? <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />Primary</span>
                                                : <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F3F2F1] text-[#A19F9D] border border-[#EDEBE9]"><span className="w-1.5 h-1.5 rounded-full bg-[#C8C6C4] shrink-0" />Secondary</span>
                                            }</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {customer.kads?.length === 0 && <div className="p-4 text-center text-[#A19F9D] text-xs font-semibold uppercase tracking-wide">No KAD activities.</div>}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        )
    }

    if (!isMounted) return null

    const toggleFilter = (key: CustomerFilter) => setFilters((prev) => ({ ...prev, [key]: !prev[key] }))

    return (
        <div className="flex flex-col min-h-0 flex-1 gap-3">
            {/* Filter bar */}
            <div className="flex flex-wrap items-center gap-2 text-xs shrink-0">
                <span className="text-[11px] font-semibold text-[#605E5C] mr-1">Show only with:</span>
                {([
                    { key: "avatar" as CustomerFilter, icon: <Image className="w-3 h-3 mr-1" />, label: "Avatar" },
                    { key: "webpage" as CustomerFilter, icon: <Link className="w-3 h-3 mr-1" />, label: "Webpage" },
                    { key: "email" as CustomerFilter, icon: <Mail className="w-3 h-3 mr-1" />, label: "Email" },
                    { key: "afm" as CustomerFilter, icon: <Hash className="w-3 h-3 mr-1" />, label: "AFM" },
                ] as { key: CustomerFilter; icon: React.ReactNode; label: string }[]).map(({ key, icon, label }) => (
                    <Button
                        key={key}
                        variant={filters[key] ? "default" : "outline"}
                        size="sm"
                        className={`h-7 px-2.5 text-[11px] font-semibold rounded border ${filters[key] ? 'bg-[#0078D4] text-white border-[#0078D4]' : 'text-[#605E5C] border-[#C8C6C4] hover:bg-[#EDEBE9]'}`}
                        onClick={() => toggleFilter(key)}
                    >
                        {icon} {label}
                    </Button>
                ))}
                <span className="text-[#A19F9D] ml-1 text-[11px]">({filteredData.length} of {data.length})</span>
            </div>

            <div className="min-h-0 flex-1 flex flex-col">
                <GenericDataTable
                    columns={columns} data={filteredData} searchPlaceholder="Search clients by name or AFM..." searchColumn="NAME"
                    onAddClick={() => { setEditingCustomer(null); setFormData(emptyFormData()); setIsDialogOpen(true); }}
                    addButtonLabel="New Client"
                    renderExpandedRow={renderExpandedRow}
                />
            </div>

            {/* Customer Edit Dialog */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-3xl p-0 overflow-hidden rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.12),0_2px_6px_rgba(0,0,0,0.08)]">
                    <DialogHeader className="px-5 py-4 border-b border-[#EDEBE9] bg-white">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-[#EFF6FC] border border-[#C7E0F4] flex items-center justify-center shrink-0">
                                <Building2 className="w-4 h-4 text-[#0078D4]" />
                            </div>
                            <div>
                                <DialogTitle className="text-sm font-bold text-[#201F1E]">
                                    {editingCustomer ? "Edit customer" : "New customer"}
                                </DialogTitle>
                                <DialogDescription className="text-[11px] text-[#A19F9D]">Save: database only. Save & ERP: also update SoftOne with current fields.</DialogDescription>
                            </div>
                        </div>
                    </DialogHeader>

                    <Tabs defaultValue="identity" className="w-full">
                        <div className="bg-white border-b border-[#EDEBE9] px-4">
                            <TabsList className="w-full justify-start rounded-none bg-transparent p-0 gap-0 h-9">
                                {[
                                    { value: "identity", label: "Identity" },
                                    { value: "contact", label: "Contact" },
                                    { value: "address", label: "Address & map" },
                                    { value: "financials", label: "Financials" },
                                    { value: "branding", label: "Branding" },
                                ].map(tab => (
                                    <TabsTrigger key={tab.value} value={tab.value} className="text-[11px] font-semibold rounded-none border-b-2 border-transparent data-[state=active]:border-[#0078D4] data-[state=active]:bg-transparent data-[state=active]:text-[#0078D4] h-9 px-3 text-[#605E5C]">
                                        {tab.label}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </div>

                        <div className="max-h-[55vh] overflow-y-auto bg-[#F3F2F1] px-4 py-4 space-y-3">
                            <TabsContent value="identity" className="mt-0 space-y-3">
                                {/* Company */}
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Company</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Company name</Label>
                                            <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={formData.NAME ?? ""} onChange={e => setFormData({ ...formData, NAME: e.target.value })} />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">ERP code</Label>
                                            <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm font-mono" value={formData.CODE ?? ""} onChange={e => setFormData({ ...formData, CODE: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <Label className="text-[11px] font-semibold text-[#605E5C]">AFM (VAT)</Label>
                                        <div className="flex gap-2 items-center">
                                            <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm font-mono flex-1" value={formData.AFM ?? ""} onChange={e => setFormData({ ...formData, AFM: e.target.value })} placeholder="801946016" />
                                            <Button type="button" size="sm" disabled={isSearchingVat || !formData.AFM?.trim()} onClick={handleFetchVat} className="h-9 px-3 text-[12px] font-semibold bg-[#0078D4] hover:bg-[#106EBE] text-white rounded">
                                                {isSearchingVat ? <RefreshCcw className="w-3.5 h-3.5 animate-spin" /> : <Search className="w-3.5 h-3.5" />}
                                            </Button>
                                        </div>
                                        <p className="text-[10px] text-[#A19F9D]">Fetch name/address from VAT API (Greek AFM).</p>
                                    </div>
                                </div>
                                {/* Classification */}
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Classification</p>
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Country</Label>
                                            <Select value={formData.COUNTRY && String(formData.COUNTRY).trim() ? String(formData.COUNTRY) : "none"} onValueChange={(v) => setFormData({ ...formData, COUNTRY: v === "none" ? "" : v })}>
                                                <SelectTrigger className="h-9 rounded border-[#C8C6C4] text-sm"><SelectValue placeholder="Select…" /></SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="none">—</SelectItem>
                                                    {formData.COUNTRY && String(formData.COUNTRY).trim() && lookups.countries[Number(formData.COUNTRY)] === undefined && (
                                                        <SelectItem value={String(formData.COUNTRY)}>{`Code ${formData.COUNTRY}`}</SelectItem>
                                                    )}
                                                    {Object.entries(lookups.countries).sort(([, a], [, b]) => (a || "").localeCompare(b || "")).map(([code, name]) => (
                                                        <SelectItem key={code} value={code}>{name || code}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">TRDPGROUP</Label>
                                            <Select value={formData.TRDPGROUP && String(formData.TRDPGROUP).trim() ? String(formData.TRDPGROUP) : "none"} onValueChange={(v) => setFormData({ ...formData, TRDPGROUP: v === "none" ? "" : v })}>
                                                <SelectTrigger className="h-9 rounded border-[#C8C6C4] text-sm"><SelectValue placeholder="Select…" /></SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="none">—</SelectItem>
                                                    {formData.TRDPGROUP && String(formData.TRDPGROUP).trim() && lookups.trdpGroups[Number(formData.TRDPGROUP)] === undefined && (
                                                        <SelectItem value={String(formData.TRDPGROUP)}>{`Code ${formData.TRDPGROUP}`}</SelectItem>
                                                    )}
                                                    {Object.entries(lookups.trdpGroups).sort(([, a], [, b]) => (a || "").localeCompare(b || "")).map(([code, name]) => (
                                                        <SelectItem key={code} value={code}>{name || code}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">TRDBUSINESS</Label>
                                            <Select value={formData.TRDBUSINESS && String(formData.TRDBUSINESS).trim() ? String(formData.TRDBUSINESS) : "none"} onValueChange={(v) => setFormData({ ...formData, TRDBUSINESS: v === "none" ? "" : v })}>
                                                <SelectTrigger className="h-9 rounded border-[#C8C6C4] text-sm"><SelectValue placeholder="Select…" /></SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="none">—</SelectItem>
                                                    {formData.TRDBUSINESS && String(formData.TRDBUSINESS).trim() && lookups.trdBusinesses[Number(formData.TRDBUSINESS)] === undefined && (
                                                        <SelectItem value={String(formData.TRDBUSINESS)}>{`Code ${formData.TRDBUSINESS}`}</SelectItem>
                                                    )}
                                                    {Object.entries(lookups.trdBusinesses).sort(([, a], [, b]) => (a || "").localeCompare(b || "")).map(([code, name]) => (
                                                        <SelectItem key={code} value={code}>{name || code}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Headcount</Label>
                                            <Input type="number" className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm w-24" value={formData.numEmployees ?? ""} onChange={e => setFormData({ ...formData, numEmployees: e.target.value })} />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Registration date</Label>
                                            <Input type="date" className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={formData.registDate ?? ""} onChange={e => setFormData({ ...formData, registDate: e.target.value })} />
                                        </div>
                                    </div>
                                </div>
                                {/* Legal */}
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Legal</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Legal status</Label>
                                            <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={formData.legalStatus ?? ""} onChange={e => setFormData({ ...formData, legalStatus: e.target.value })} />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Legal form</Label>
                                            <Select value={(formData.legalForm && String(formData.legalForm).trim()) ? String(formData.legalForm) : "none"} onValueChange={(v) => setFormData({ ...formData, legalForm: v === "none" ? "" : v })}>
                                                <SelectTrigger className="h-9 rounded border-[#C8C6C4] text-sm"><SelectValue placeholder="Select legal form…" /></SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="none">—</SelectItem>
                                                    {LEGAL_FORM_OPTIONS.map((item) => (
                                                        <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="flex items-center justify-between py-2 px-3 bg-[#F3F2F1] rounded-lg">
                                            <div>
                                                <Label className="text-[11px] font-semibold text-[#605E5C]">Franchise</Label>
                                                <p className="text-[10px] text-[#A19F9D]">Franchise operation</p>
                                            </div>
                                            <Switch checked={!!formData.isFranchise} onCheckedChange={(v) => setFormData({ ...formData, isFranchise: !!v })} className="data-[state=checked]:bg-[#0078D4]" />
                                        </div>
                                        <div className="flex items-center justify-between py-2 px-3 bg-[#F3F2F1] rounded-lg">
                                            <div>
                                                <Label className="text-[11px] font-semibold text-[#605E5C]">Home address</Label>
                                                <p className="text-[10px] text-[#A19F9D]">Residential address</p>
                                            </div>
                                            <Switch checked={!!formData.isHomeAddress} onCheckedChange={(v) => setFormData({ ...formData, isHomeAddress: !!v })} className="data-[state=checked]:bg-[#0078D4]" />
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="contact" className="mt-0 space-y-3">
                                {/* Email Addresses */}
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Email Addresses</p>
                                    <div className="space-y-1">
                                        <Label className="text-[11px] font-semibold text-[#605E5C]">Email</Label>
                                        <Input type="text" className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={formData.EMAIL ?? ""} onChange={e => setFormData({ ...formData, EMAIL: e.target.value })} placeholder="Multiple with ;" />
                                    </div>
                                    <div className="space-y-1">
                                        <Label className="text-[11px] font-semibold text-[#605E5C]">Email (account)</Label>
                                        <Input type="text" className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={formData.EMAILACC ?? ""} onChange={e => setFormData({ ...formData, EMAILACC: e.target.value })} placeholder="Λογ. email (multiple with ;)" />
                                    </div>
                                    <div className="space-y-1">
                                        <Label className="text-[11px] font-semibold text-[#605E5C]">CCCEMAILMAR</Label>
                                        <Input type="text" className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={formData.CCCEMAILMAR ?? ""} onChange={e => setFormData({ ...formData, CCCEMAILMAR: e.target.value })} placeholder="Email Μαρ. (multiple with ;)" />
                                    </div>
                                </div>
                                {/* Phone & Web */}
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Phone & Web</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Phone 1</Label>
                                            <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={formData.PHONE01 ?? ""} onChange={e => setFormData({ ...formData, PHONE01: e.target.value })} />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Phone 2</Label>
                                            <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={formData.PHONE02 ?? ""} onChange={e => setFormData({ ...formData, PHONE02: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <Label className="text-[11px] font-semibold text-[#605E5C]">Website</Label>
                                        <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={formData.website ?? ""} onChange={e => setFormData({ ...formData, website: e.target.value })} placeholder="https://…" />
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="address" className="mt-0 space-y-3">
                                {/* Address */}
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Address</p>
                                    <div className="space-y-1">
                                        <Label className="text-[11px] font-semibold text-[#605E5C]">Street address</Label>
                                        <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={formData.ADDRESS ?? ""} onChange={e => setFormData({ ...formData, ADDRESS: e.target.value })} />
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">ZIP</Label>
                                            <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={formData.ZIP ?? ""} onChange={e => setFormData({ ...formData, ZIP: e.target.value })} />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">City</Label>
                                            <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={formData.CITY ?? ""} onChange={e => setFormData({ ...formData, CITY: e.target.value })} />
                                        </div>
                                    </div>
                                </div>
                                {/* Coordinates */}
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Coordinates</p>
                                    <div className="flex gap-3 items-end flex-wrap">
                                        <div className="space-y-1 flex-1 min-w-[120px]">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Latitude</Label>
                                            <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm font-mono" value={formData.latitude ?? ""} onChange={e => setFormData({ ...formData, latitude: e.target.value })} placeholder="e.g. 37.9838" />
                                        </div>
                                        <div className="space-y-1 flex-1 min-w-[120px]">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Longitude</Label>
                                            <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm font-mono" value={formData.longitude ?? ""} onChange={e => setFormData({ ...formData, longitude: e.target.value })} placeholder="e.g. 23.7275" />
                                        </div>
                                        <Button type="button" size="sm" disabled={isResolvingCoords} onClick={handleGetCoordinates} className="h-9 px-3 text-[12px] font-semibold text-[#201F1E] border-[#C8C6C4] hover:bg-[#EDEBE9] rounded border gap-1.5">
                                            {isResolvingCoords ? <RefreshCcw className="w-3.5 h-3.5 animate-spin" /> : <MapPin className="w-3.5 h-3.5" />}
                                            Get coordinates
                                        </Button>
                                    </div>
                                    <p className="text-[10px] text-[#A19F9D]">Uses address/city/ZIP to resolve lat/long via geocode API.</p>
                                </div>
                            </TabsContent>

                            <TabsContent value="financials" className="mt-0 space-y-3">
                                {/* Annual Figures */}
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                                    <div className="flex items-center justify-between mb-1">
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D]">Annual Figures</p>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            size="sm"
                                            className="h-8 px-3 text-[12px] font-semibold text-[#201F1E] border-[#C8C6C4] hover:bg-[#EDEBE9] rounded"
                                            onClick={() => setFormData((prev) => ({
                                                ...prev,
                                                financials: [...prev.financials, { year: String(new Date().getFullYear() - 1), turnover: "", ebitda: "", netProfit: "", eme: "", assets: "", equity: "", totalDeMinimis3Years: "" }],
                                            }))}
                                        >
                                            <Plus className="w-3 h-3 mr-1" /> Add year
                                        </Button>
                                    </div>
                                    <p className="text-[11px] text-[#605E5C]">Annual figures used by the eligibility engine.</p>
                                    <div className="space-y-2">
                                        {formData.financials.map((f, index) => (
                                            <div key={`${f.year}-${index}`} className="grid grid-cols-14 gap-2 px-3 py-2 bg-[#F3F2F1] rounded-lg border border-[#EDEBE9]">
                                                <Input type="number" className="col-span-2 h-8 text-xs rounded border-[#C8C6C4]" placeholder="Year" value={f.year} onChange={(e) => setFormData((prev) => { const next = [...prev.financials]; next[index] = { ...next[index], year: e.target.value }; return { ...prev, financials: next } })} />
                                                <Input type="number" className="col-span-2 h-8 text-xs rounded border-[#C8C6C4]" placeholder="Turnover" value={f.turnover} onChange={(e) => setFormData((prev) => { const next = [...prev.financials]; next[index] = { ...next[index], turnover: e.target.value }; return { ...prev, financials: next } })} />
                                                <Input type="number" className="col-span-2 h-8 text-xs rounded border-[#C8C6C4]" placeholder="EBITDA" value={f.ebitda} onChange={(e) => setFormData((prev) => { const next = [...prev.financials]; next[index] = { ...next[index], ebitda: e.target.value }; return { ...prev, financials: next } })} />
                                                <Input type="number" className="col-span-2 h-8 text-xs rounded border-[#C8C6C4]" placeholder="Net profit" value={f.netProfit} onChange={(e) => setFormData((prev) => { const next = [...prev.financials]; next[index] = { ...next[index], netProfit: e.target.value }; return { ...prev, financials: next } })} />
                                                <Input type="number" className="col-span-1 h-8 text-xs rounded border-[#C8C6C4]" placeholder="EME" value={f.eme} onChange={(e) => setFormData((prev) => { const next = [...prev.financials]; next[index] = { ...next[index], eme: e.target.value }; return { ...prev, financials: next } })} />
                                                <Input type="number" className="col-span-2 h-8 text-xs rounded border-[#C8C6C4]" placeholder="Assets" value={f.assets} onChange={(e) => setFormData((prev) => { const next = [...prev.financials]; next[index] = { ...next[index], assets: e.target.value }; return { ...prev, financials: next } })} />
                                                <Input type="number" className="col-span-2 h-8 text-xs rounded border-[#C8C6C4]" placeholder="Equity" value={f.equity} onChange={(e) => setFormData((prev) => { const next = [...prev.financials]; next[index] = { ...next[index], equity: e.target.value }; return { ...prev, financials: next } })} />
                                                <Input type="number" className="col-span-2 h-8 text-xs rounded border-[#C8C6C4]" placeholder="De Minimis 3y" value={f.totalDeMinimis3Years} onChange={(e) => setFormData((prev) => { const next = [...prev.financials]; next[index] = { ...next[index], totalDeMinimis3Years: e.target.value }; return { ...prev, financials: next } })} />
                                                <Button type="button" variant="ghost" size="icon" className="col-span-1 h-8 w-8" onClick={() => setFormData((prev) => ({ ...prev, financials: prev.financials.filter((_, i) => i !== index) }))}>
                                                    <Trash2 className="w-4 h-4 text-red-500" />
                                                </Button>
                                            </div>
                                        ))}
                                        {formData.financials.length === 0 && (
                                            <div className="text-xs text-[#A19F9D] bg-[#F3F2F1] border border-[#EDEBE9] rounded-lg p-3">No financial years added yet.</div>
                                        )}
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="branding" className="mt-0 space-y-3">
                                {/* Logo */}
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Logo</p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-lg border border-[#EDEBE9] bg-[#F3F2F1] flex items-center justify-center overflow-hidden p-1.5">
                                            {formData.logo ? <img src={formData.logo} alt="" className="w-full h-full object-contain" /> : <Building2 className="w-6 h-6 text-[#C8C6C4]" />}
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="inline-flex h-8 items-center justify-center rounded bg-[#0078D4] hover:bg-[#106EBE] px-4 text-[12px] font-semibold text-white cursor-pointer active:scale-95 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,120,212,0.25)]">
                                                Choose logo
                                                <input type="file" className="hidden" accept="image/*" onChange={handleUploadLogo} disabled={isUploading} />
                                            </Label>
                                            <div className="flex items-center gap-2">
                                                <Checkbox id="rmbg" checked={formData.removeBackgroundLogo} onCheckedChange={v => setFormData({ ...formData, removeBackgroundLogo: !!v })} />
                                                <Label htmlFor="rmbg" className="text-[11px] text-[#605E5C] cursor-pointer">Remove background</Label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Homepage */}
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Homepage</p>
                                    <div className="flex items-center justify-between py-2 px-3 bg-[#F3F2F1] rounded-lg">
                                        <div>
                                            <p className="text-[11px] font-semibold text-[#201F1E]">Show on homepage scroller</p>
                                            <p className="text-[10px] text-[#A19F9D]">Feature logo on first page (requires logo).</p>
                                        </div>
                                        <Switch checked={formData.displayAtCarousel} onCheckedChange={v => setFormData({ ...formData, displayAtCarousel: v })} className="data-[state=checked]:bg-emerald-500" />
                                    </div>
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>

                    {/* Dialog Footer */}
                    <div className="px-5 py-3 border-t border-[#EDEBE9] bg-white flex justify-end gap-2">
                        <Button variant="ghost" size="sm" onClick={() => setIsDialogOpen(false)} className="h-8 px-4 text-[12px] font-semibold text-[#605E5C] hover:bg-[#EDEBE9] rounded">Cancel</Button>
                        <Button size="sm" disabled={isSaving || isUploading} onClick={() => handleSave(false)} className="h-8 px-5 text-[12px] font-semibold bg-[#0078D4] hover:bg-[#106EBE] text-white rounded shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,120,212,0.25)] active:scale-95">
                            {isSaving ? <RefreshCcw className="w-3.5 h-3.5 animate-spin" /> : editingCustomer ? "Save" : "Create"}
                        </Button>
                        {editingCustomer && (
                            <Button size="sm" disabled={isSaving || isUploading} onClick={() => handleSave(true)} className="h-8 px-5 text-[12px] font-semibold bg-[#0078D4] hover:bg-[#106EBE] text-white rounded shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,120,212,0.25)] active:scale-95">
                                {isSaving ? <RefreshCcw className="w-3.5 h-3.5 animate-spin" /> : "Save & ERP"}
                            </Button>
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
