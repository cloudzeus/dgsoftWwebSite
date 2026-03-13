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
    BadgeCheck,
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
    DropdownMenuLabel,
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
    registDate: string | null
    legalStatus: string | null
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
}

const defaultLookups: SoftOneLookups = { countries: {}, trdpGroups: {}, trdBusinesses: {} }

type CustomerFilter = "avatar" | "webpage" | "email" | "afm"

/** Parse numeric coordinate from customer (may be number or string from JSON). */
function parseLatLng(value: unknown): number | null {
    if (value == null || value === "") return null;
    const n = typeof value === "string" ? parseFloat(value) : Number(value);
    return Number.isFinite(n) ? n : null;
}

/** Build a single-line address string from ADDRESS, ZIP, CITY for geocoding. */
function buildAddressQuery(customer: Customer): string {
    return [customer.ADDRESS, customer.ZIP, customer.CITY]
        .filter((v): v is string => v != null && typeof v === "string" && v.trim() !== "")
        .map((v) => v.trim())
        .join(", ")
        .trim()
}

/** Map tab content: interactive OpenStreetMap. Uses LAT/LNG if present, otherwise geocodes ADDRESS + ZIP + CITY. */
function CustomerMapTab({ customer }: { customer: Customer }) {
    const raw = customer as Record<string, unknown>
    const lat = parseLatLng(raw.LATITUDE ?? raw.latitude)
    const lng = parseLatLng(raw.LONGITUDE ?? raw.longitude)
    const hasCoords = lat != null && lng != null && Number.isFinite(lat) && Number.isFinite(lng)

    const addressQuery = React.useMemo(() => buildAddressQuery(customer), [customer.ADDRESS, customer.ZIP, customer.CITY])
    const [geocoded, setGeocoded] = React.useState<{ lat: number; lng: number } | null>(null)
    const [geocodeLoading, setGeocodeLoading] = React.useState(false)
    const [geocodeError, setGeocodeError] = React.useState<string | null>(null)

    // When no stored coords but we have address text, geocode on mount
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

    // Use stored coords if present
    if (hasCoords) {
        const latNum = Number(lat)
        const lngNum = Number(lng)
        const addressLine = addressQuery || undefined
        return (
            <CustomerMapOSM
                lat={latNum}
                lng={lngNum}
                name={customer.NAME ?? undefined}
                address={addressLine}
            />
        )
    }

    // Use geocoded coords when we had address and got a result
    if (geocoded) {
        const addressLine = addressQuery || undefined
        return (
            <CustomerMapOSM
                lat={geocoded.lat}
                lng={geocoded.lng}
                name={customer.NAME ?? undefined}
                address={addressLine}
            />
        )
    }

    if (geocodeLoading) {
        return (
            <div className="bg-white dark:bg-zinc-900 rounded-xl border shadow-sm p-6 text-center">
                <Loader2 className="w-8 h-8 mx-auto text-zinc-400 animate-spin mb-2" />
                <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400">Looking up location…</p>
                <p className="text-[10px] text-zinc-400 mt-1">{addressQuery}</p>
            </div>
        )
    }

    if (geocodeError) {
        const searchUrl = `https://www.openstreetmap.org/search?query=${encodeURIComponent(addressQuery)}`
        return (
            <div className="bg-white dark:bg-zinc-900 rounded-xl border shadow-sm p-6 text-center">
                <MapPin className="w-8 h-8 mx-auto text-zinc-400 mb-2" />
                <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400">Could not find location</p>
                <p className="text-[10px] text-zinc-400 mt-1">{geocodeError}</p>
                {addressQuery && (
                    <a href={searchUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-xs text-primary underline">
                        Search on OpenStreetMap
                    </a>
                )}
            </div>
        )
    }

    // No coords and no address to geocode
    if (!addressQuery) {
        return (
            <div className="bg-white dark:bg-zinc-900 rounded-xl border shadow-sm p-6 text-center">
                <MapPin className="w-8 h-8 mx-auto text-zinc-300 dark:text-zinc-600 mb-2" />
                <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400">No coordinates or address</p>
                <p className="text-[10px] text-zinc-400 mt-1">Add address, ZIP, or city, or use &quot;Get coordinates&quot; in row actions.</p>
            </div>
        )
    }

    // Address was sent but no result (geocode returned null)
    const searchUrl = `https://www.openstreetmap.org/search?query=${encodeURIComponent(addressQuery)}`
    return (
        <div className="bg-white dark:bg-zinc-900 rounded-xl border shadow-sm p-6 text-center">
            <MapPin className="w-8 h-8 mx-auto text-zinc-400 mb-2" />
            <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400">Location not found for this address</p>
            <p className="text-[10px] text-zinc-400 mt-1">{addressQuery}</p>
            <a href={searchUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-xs text-primary underline">
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
    // Filters: when a key is true, only show customers that have that field set. Default: show all (filters off).
    const [filters, setFilters] = React.useState<Record<CustomerFilter, boolean>>({
        avatar: false,
        webpage: false,
        email: false,
        afm: false,
    })

    React.useEffect(() => {
        setIsMounted(true)
    }, [])

    React.useEffect(() => {
        setData(initialData)
    }, [initialData])

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
    /** Controlled tab for expanded row so the map mounts only when Map tab is visible (Leaflet needs a visible container). */
    const [expandedRowTab, setExpandedRowTab] = React.useState<"stats" | "map" | "kads">("stats")

    const [formData, setFormData] = React.useState({
        SODTYPE: 13,
        TRDR: 0,
        CODE: "",
        NAME: "",
        AFM: "",
        ADDRESS: "",
        ZIP: "",
        CITY: "",
        PHONE01: "",
        PHONE02: "",
        EMAIL: "",
        EMAILACC: "",
        CCCEMAILMAR: "",
        website: "",
        registDate: "",
        legalStatus: "",
        numEmployees: "",
        displayAtCarousel: false,
        removeBackgroundLogo: true,
        logo: "",
        kads: [] as any[],
        COUNTRY: "" as string,
        TRDPGROUP: "" as string,
        TRDBUSINESS: "" as string,
        latitude: "",
        longitude: "",
    })

    const emptyFormData = (): typeof formData => ({
        SODTYPE: 13,
        TRDR: 0,
        CODE: "",
        NAME: "",
        AFM: "",
        ADDRESS: "",
        ZIP: "",
        CITY: "",
        PHONE01: "",
        PHONE02: "",
        EMAIL: "",
        EMAILACC: "",
        CCCEMAILMAR: "",
        website: "",
        registDate: "",
        legalStatus: "",
        numEmployees: "",
        displayAtCarousel: false,
        removeBackgroundLogo: true,
        logo: "",
        kads: [],
        COUNTRY: "",
        TRDPGROUP: "",
        TRDBUSINESS: "",
        latitude: "",
        longitude: "",
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
                const fetchedKads = apiData.firm_act_tab?.item?.map((k: any) => ({
                    afm: formData.AFM.trim(),
                    firm_act_code: String(k.firm_act_code || ""),
                    firm_act_descr: String(k.firm_act_descr || ""),
                    firm_act_kind: k.firm_act_kind === "1"
                })) || [];

                const str = (v: unknown) => (v != null && typeof v === "string" ? v : "")
                setFormData(prev => ({
                    ...prev,
                    NAME: str(apiData.basic_rec?.onomasia) || prev.NAME,
                    ADDRESS: `${str(apiData.basic_rec?.postal_address)} ${str(apiData.basic_rec?.postal_address_no)}`.trim() || prev.ADDRESS,
                    ZIP: str(apiData.basic_rec?.postal_zip_code) || prev.ZIP,
                    registDate: str(apiData.basic_rec?.regist_date) || prev.registDate,
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
                    <div className="w-12 h-12 rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 border shadow-sm p-1.5 flex items-center justify-center">
                        <img
                            src={logo || fallbackSrc}
                            alt=""
                            className="w-full h-full object-contain"
                            onError={(e) => (e.currentTarget.src = fallbackSrc)}
                        />
                    </div>
                )
            },
            size: 60
        },
        {
            accessorKey: "NAME",
            header: "Company",
            cell: ({ row }) => (
                <div className="flex flex-col">
                    <span className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">{row.original.NAME}</span>
                    <span className="text-[10px] uppercase tracking-wide text-zinc-400 font-mono">{row.original.AFM}</span>
                </div>
            )
        },
        {
            accessorKey: "CODE",
            header: "Code",
            cell: ({ row }) => <code className="text-xs font-mono bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">{row.original.CODE}</code>
        },
        {
            id: "COUNTRY",
            accessorKey: "COUNTRY",
            header: "Country",
            cell: ({ row }) => {
                const code = (row.original as Customer).COUNTRY
                const name = code != null ? lookups.countries[code] : null
                return <span className="text-xs text-zinc-600 dark:text-zinc-400">{name ?? (code != null ? String(code) : "—")}</span>
            }
        },
        {
            accessorKey: "displayAtCarousel",
            header: "Homepage",
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
            header: "Τηλ.2",
            cell: ({ row }) => <span className="text-xs font-mono">{(row.original as Customer).PHONE02 ?? "—"}</span>
        },
        {
            accessorKey: "EMAILACC",
            header: "Email Λογ.",
            cell: ({ row }) => <span className="text-xs truncate max-w-[120px] block" title={(row.original as Customer).EMAILACC ?? undefined}>{(row.original as Customer).EMAILACC ?? "—"}</span>
        },
        {
            accessorKey: "CCCEMAILMAR",
            header: "Email Μαρ.",
            cell: ({ row }) => <span className="text-xs truncate max-w-[120px] block" title={(row.original as Customer).CCCEMAILMAR ?? undefined}>{(row.original as Customer).CCCEMAILMAR ?? "—"}</span>
        },
        {
            accessorKey: "website",
            header: "Web",
            cell: ({ row }) => {
                const url = row.original.website ?? (row.original as Customer).WEBPAGE
                return url ? <a href={url.startsWith("http") ? url : `https://${url}`} target="_blank" rel="noopener noreferrer" className="text-xs text-sky-600 hover:underline truncate max-w-[100px] block" title={url}>{url.replace(/^https?:\/\//, "").slice(0, 20)}{url.length > 20 ? "…" : ""}</a> : <span className="text-zinc-400">—</span>
            }
        },
        {
            accessorKey: "ISACTIVE",
            header: "Ενεργός",
            cell: ({ row }) => {
                const v = (row.original as Customer).ISACTIVE
                return v == null ? <span className="text-zinc-400 text-xs">—</span> : <Badge variant={v ? "default" : "secondary"} className="text-xs">{v ? "Ναι" : "Όχι"}</Badge>
            }
        },
        {
            accessorKey: "ISPROSP",
            header: "Υποψήφιος",
            cell: ({ row }) => {
                const v = (row.original as Customer).ISPROSP
                return v == null ? <span className="text-zinc-400">—</span> : <span className="text-xs">{v ? "Ναι" : "Όχι"}</span>
            }
        },
        {
            accessorKey: "numEmployees",
            header: "Εργαζόμενοι",
            cell: ({ row }) => <span className="text-xs font-medium">{row.original.numEmployees ?? "—"}</span>
        },
        {
            id: "TRDPGROUP",
            accessorKey: "TRDPGROUP",
            header: "Τρ.Όμιλος",
            cell: ({ row }) => {
                const code = (row.original as Customer).TRDPGROUP
                const name = code != null ? lookups.trdpGroups[code] : null
                return <span className="text-xs text-zinc-600 dark:text-zinc-400">{name ?? (code != null ? String(code) : "—")}</span>
            }
        },
        {
            id: "TRDBUSINESS",
            accessorKey: "TRDBUSINESS",
            header: "Επιχείρηση",
            cell: ({ row }) => {
                const code = (row.original as Customer).TRDBUSINESS
                const name = code != null ? lookups.trdBusinesses[code] : null
                return <span className="text-xs text-zinc-600 dark:text-zinc-400">{name ?? (code != null ? String(code) : "—")}</span>
            }
        },
        {
            accessorKey: "REMARKS",
            header: "Παρατηρήσεις",
            cell: ({ row }) => {
                const r = (row.original as Customer).REMARKS
                return r ? <span className="text-xs text-zinc-500 max-w-[140px] truncate block" title={r}>{r}</span> : <span className="text-zinc-400">—</span>
            }
        },
        {
            id: "actions",
            cell: ({ row }) => (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild onClick={e => e.stopPropagation()}>
                        <Button variant="outline" size="sm" className="h-7 text-xs bg-zinc-800 text-white border-none font-semibold hover:bg-zinc-700 rounded-lg px-2.5">
                            Actions <ChevronDown className="h-3 w-3 ml-1" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[160px] text-xs">
                        <DropdownMenuItem onClick={() => {
                            const c = row.original as Customer;
                            setEditingCustomer(c);
                            const countryVal = (c as any).COUNTRY ?? c.COUNTRY;
                            const trdpVal = (c as any).TRDPGROUP ?? c.TRDPGROUP;
                            const trdbVal = (c as any).TRDBUSINESS ?? c.TRDBUSINESS;
                            setFormData({
                                ...c,
                                ZIP: (c.ZIP ?? "") || "",
                                numEmployees: c.numEmployees?.toString() ?? "",
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
                            } as any);
                            setIsDialogOpen(true);
                        }}><Edit3 className="w-4 h-4 mr-2" /> Modify Profile</DropdownMenuItem>
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
                            className="text-indigo-600"
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
                        }} className="text-red-500"><Trash2 className="w-4 h-4 mr-2" /> Expunge Client</DropdownMenuItem>
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
        <div className="py-4 px-4 bg-[#f8fafc] dark:bg-zinc-950/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-inner">
            <Tabs value={expandedRowTab} onValueChange={(v) => setExpandedRowTab(v as "stats" | "map" | "kads")}>
                <TabsList className="mb-4 bg-white dark:bg-zinc-900 p-1 h-8 rounded-lg border shadow-sm w-fit gap-1">
                    <TabsTrigger value="stats" className="data-[state=active]:bg-zinc-800 data-[state=active]:text-white font-semibold text-xs uppercase tracking-wide px-4 rounded-md h-6">Market Intelligence</TabsTrigger>
                    <TabsTrigger value="kads" className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white font-semibold text-xs uppercase tracking-wide px-4 rounded-md h-6">KAD ({customer.kads?.length || 0})</TabsTrigger>
                    <TabsTrigger value="map" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white font-semibold text-xs uppercase tracking-wide px-4 rounded-md h-6">Map</TabsTrigger>
                </TabsList>

                <TabsContent value="stats" className="animate-in fade-in duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                        <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border shadow-sm">
                            <h5 className="flex items-center gap-1.5 text-[10px] font-bold text-zinc-400 uppercase tracking-wide mb-2"><Users2 className="w-3 h-3" /> Workforce</h5>
                            <div className="flex items-baseline gap-1">
                                <span className="text-xl font-bold text-zinc-800 dark:text-zinc-100">{customer.numEmployees ?? "0"}</span>
                                <span className="text-xs text-zinc-400">FTEs</span>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border shadow-sm">
                            <h5 className="flex items-center gap-1.5 text-[10px] font-bold text-zinc-400 uppercase tracking-wide mb-2"><Calendar className="w-3 h-3" /> Established</h5>
                            <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">{customer.registDate != null && typeof customer.registDate === "string" ? customer.registDate : "—"}</span>
                        </div>
                        <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border shadow-sm">
                            <h5 className="text-[10px] font-bold text-zinc-400 uppercase tracking-wide mb-1">Country</h5>
                            <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">{countryName ?? (customer.COUNTRY != null ? String(customer.COUNTRY) : "—")}</span>
                        </div>
                        <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border shadow-sm">
                            <h5 className="text-[10px] font-bold text-zinc-400 uppercase tracking-wide mb-1">Group / Business</h5>
                            <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">{trdpGroupName ?? "—"} {trdBusinessName ? ` · ${trdBusinessName}` : ""}</p>
                        </div>
                        <div className="md:col-span-2 bg-white dark:bg-zinc-900 p-3 rounded-xl border shadow-sm grid grid-cols-2 gap-3">
                            <div>
                                <h5 className="text-[10px] font-bold text-zinc-400 uppercase tracking-wide mb-1">Location</h5>
                                <p className="text-xs font-semibold flex items-center gap-1"><MapPin className="w-2.5 h-2.5 text-red-500 shrink-0" /> {[customer.ADDRESS, customer.CITY].map((v) => (v != null && typeof v === "string" ? v : "")).filter(Boolean).join(", ") || "—"}</p>
                            </div>
                            <div>
                                <h5 className="text-[10px] font-bold text-zinc-400 uppercase tracking-wide mb-1">Legal</h5>
                                <p className="text-xs font-semibold text-indigo-600">{customer.legalStatus != null && typeof customer.legalStatus === "string" ? customer.legalStatus : "—"}</p>
                            </div>
                        </div>
                        {addressRegionMap && (() => {
                            const key = normalizeAddressKey(customer.ADDRESS, customer.CITY, customer.ZIP ?? null)
                            const mapping = key && key !== "||" ? addressRegionMap[key] : null
                            if (!mapping) return null
                            return (
                                <div className="md:col-span-2 bg-amber-50/50 dark:bg-amber-900/10 p-3 rounded-xl border border-amber-200/50 dark:border-amber-800/50 shadow-sm">
                                    <h5 className="text-[10px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wide mb-1">Region (Περιφέρεια → Νομός → Δήμος)</h5>
                                    <p className="text-xs font-semibold text-amber-800 dark:text-amber-200">{mapping.path}</p>
                                </div>
                            )
                        })()}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2 bg-zinc-800 p-3 rounded-xl text-white">
                        <div className="flex items-center gap-2 px-2 text-xs"><Mail className="w-3 h-3 text-indigo-400 shrink-0" /><span className="font-medium">{customer.EMAIL ?? "—"}</span></div>
                        <div className="flex items-center gap-2 px-2 border-l border-white/10 text-xs"><Phone className="w-3 h-3 text-emerald-400 shrink-0" /><span className="font-medium">{customer.PHONE01 ?? "—"}</span></div>
                        <div className="flex items-center gap-2 px-2 border-l border-white/10 text-xs ml-auto"><Globe className="w-3 h-3 text-sky-400 shrink-0" /><a href={customer.website || "#"} target="_blank" rel="noopener noreferrer" className="font-medium underline decoration-sky-400/30 hover:text-sky-400">{customer.website ? "Web" : "—"}</a></div>
                    </div>
                </TabsContent>

                <TabsContent value="map" className="mt-0 min-h-[250px]">
                    {expandedRowTab === "map" && <CustomerMapTab customer={customer} />}
                </TabsContent>

                <TabsContent value="kads">
                    <div className="bg-white dark:bg-zinc-900 rounded-xl border overflow-hidden shadow-sm">
                        <table className="w-full text-xs">
                            <thead className="bg-zinc-50 border-b">
                                <tr>
                                    <th className="px-4 py-2 text-left text-[10px] font-bold uppercase text-zinc-400">Code</th>
                                    <th className="px-4 py-2 text-left text-[10px] font-bold uppercase text-zinc-400">Description</th>
                                    <th className="px-4 py-2 text-right text-[10px] font-bold uppercase text-zinc-400">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {customer.kads?.map((k, i) => (
                                    <tr key={i} className="hover:bg-zinc-50/50">
                                        <td className="px-4 py-2 font-mono text-xs font-semibold text-indigo-600">{k.firm_act_code}</td>
                                        <td className="px-4 py-2 text-xs text-zinc-600">{k.firm_act_descr}</td>
                                        <td className="px-4 py-2 text-right">{k.firm_act_kind ? <Badge className="bg-emerald-500/10 text-emerald-600 border-none rounded-full h-5 px-2 text-[10px]">Primary</Badge> : <Badge variant="outline" className="rounded-full h-5 px-2 text-[10px] text-zinc-400">Secondary</Badge>}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {customer.kads?.length === 0 && <div className="p-6 text-center text-zinc-400 text-xs font-semibold uppercase tracking-wide">No KAD activities.</div>}
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
            <div className="flex flex-wrap items-center gap-2 text-xs shrink-0">
                <span className="font-semibold text-muted-foreground mr-1">Show:</span>
                <Button variant={filters.avatar ? "default" : "outline"} size="sm" className="h-6 px-2 text-xs" onClick={() => toggleFilter("avatar")}>
                    <Image className="w-3 h-3 mr-1" /> Avatar
                </Button>
                <Button variant={filters.webpage ? "default" : "outline"} size="sm" className="h-6 px-2 text-xs" onClick={() => toggleFilter("webpage")}>
                    <Link className="w-3 h-3 mr-1" /> Webpage
                </Button>
                <Button variant={filters.email ? "default" : "outline"} size="sm" className="h-6 px-2 text-xs" onClick={() => toggleFilter("email")}>
                    <Mail className="w-3 h-3 mr-1" /> Email
                </Button>
                <Button variant={filters.afm ? "default" : "outline"} size="sm" className="h-6 px-2 text-xs" onClick={() => toggleFilter("afm")}>
                    <Hash className="w-3 h-3 mr-1" /> AFM
                </Button>
                <span className="text-muted-foreground ml-1">({filteredData.length} of {data.length})</span>
            </div>
            <div className="min-h-0 flex-1 flex flex-col">
            <GenericDataTable
                columns={columns} data={filteredData} searchPlaceholder="Search clients by name or AFM..." searchColumn="NAME"
                onAddClick={() => { setEditingCustomer(null); setFormData(emptyFormData()); setIsDialogOpen(true); }}
                addButtonLabel="Onboard Client"
                renderExpandedRow={renderExpandedRow}
            />
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-3xl p-0 overflow-hidden rounded-lg">
                    <DialogHeader className="bg-zinc-800/95 px-6 py-4 border-b border-zinc-700">
                        <DialogTitle className="text-lg font-semibold text-white flex items-center gap-2">
                            <Building2 className="w-5 h-5 text-indigo-400" />
                            {editingCustomer ? "Edit customer" : "New customer"}
                        </DialogTitle>
                        <DialogDescription className="text-zinc-400 text-xs">Save: database only. Save & ERP: also update SoftOne with current fields.</DialogDescription>
                    </DialogHeader>

                    <Tabs defaultValue="identity" className="w-full">
                        <TabsList className="w-full justify-start rounded-none border-b bg-zinc-100 dark:bg-zinc-900/50 px-4 gap-0 h-9">
                            <TabsTrigger value="identity" className="text-xs rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent h-9 px-3">Identity</TabsTrigger>
                            <TabsTrigger value="contact" className="text-xs rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent h-9 px-3">Contact</TabsTrigger>
                            <TabsTrigger value="address" className="text-xs rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent h-9 px-3">Address & map</TabsTrigger>
                            <TabsTrigger value="branding" className="text-xs rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent h-9 px-3">Branding</TabsTrigger>
                        </TabsList>

                        <div className="max-h-[55vh] overflow-y-auto p-4 bg-[#f8fafc] dark:bg-zinc-950">
                            <TabsContent value="identity" className="mt-0 space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <Label className="text-[10px] font-semibold uppercase text-zinc-500">Company name</Label>
                                        <Input className="h-8 text-sm rounded-md" value={formData.NAME ?? ""} onChange={e => setFormData({ ...formData, NAME: e.target.value })} />
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label className="text-[10px] font-semibold uppercase text-zinc-500">ERP code</Label>
                                        <Input className="h-8 text-sm rounded-md font-mono" value={formData.CODE ?? ""} onChange={e => setFormData({ ...formData, CODE: e.target.value })} />
                                    </div>
                                </div>
                                <div className="flex gap-2 items-end">
                                    <div className="flex-1 space-y-1.5">
                                        <Label className="text-[10px] font-semibold uppercase text-zinc-500">AFM (VAT)</Label>
                                        <Input className="h-8 text-sm rounded-md font-mono" value={formData.AFM ?? ""} onChange={e => setFormData({ ...formData, AFM: e.target.value })} placeholder="801946016" />
                                    </div>
                                    <Button type="button" size="sm" disabled={isSearchingVat || !formData.AFM?.trim()} onClick={handleFetchVat} className="h-8 px-3 text-xs bg-indigo-600 hover:bg-indigo-700">
                                        {isSearchingVat ? <RefreshCcw className="w-3.5 h-3.5 animate-spin" /> : <Search className="w-3.5 h-3.5" />}
                                    </Button>
                                </div>
                                <p className="text-[10px] text-zinc-400">Fetch name/address from VAT API (Greek AFM).</p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="space-y-1.5">
                                        <Label className="text-[10px] font-semibold uppercase text-zinc-500">Country</Label>
                                        <Select value={formData.COUNTRY && String(formData.COUNTRY).trim() ? String(formData.COUNTRY) : "none"} onValueChange={(v) => setFormData({ ...formData, COUNTRY: v === "none" ? "" : v })}>
                                            <SelectTrigger className="h-8 text-sm rounded-md"><SelectValue placeholder="Select…" /></SelectTrigger>
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
                                    <div className="space-y-1.5">
                                        <Label className="text-[10px] font-semibold uppercase text-zinc-500">TRDPGROUP</Label>
                                        <Select value={formData.TRDPGROUP && String(formData.TRDPGROUP).trim() ? String(formData.TRDPGROUP) : "none"} onValueChange={(v) => setFormData({ ...formData, TRDPGROUP: v === "none" ? "" : v })}>
                                            <SelectTrigger className="h-8 text-sm rounded-md"><SelectValue placeholder="Select…" /></SelectTrigger>
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
                                    <div className="space-y-1.5">
                                        <Label className="text-[10px] font-semibold uppercase text-zinc-500">TRDBUSINESS</Label>
                                        <Select value={formData.TRDBUSINESS && String(formData.TRDBUSINESS).trim() ? String(formData.TRDBUSINESS) : "none"} onValueChange={(v) => setFormData({ ...formData, TRDBUSINESS: v === "none" ? "" : v })}>
                                            <SelectTrigger className="h-8 text-sm rounded-md"><SelectValue placeholder="Select…" /></SelectTrigger>
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
                                <div className="space-y-1.5">
                                    <Label className="text-[10px] font-semibold uppercase text-zinc-500">Headcount</Label>
                                    <Input type="number" className="h-8 text-sm rounded-md w-24" value={formData.numEmployees ?? ""} onChange={e => setFormData({ ...formData, numEmployees: e.target.value })} />
                                </div>
                            </TabsContent>

                            <TabsContent value="contact" className="mt-0 space-y-4">
                                <div className="space-y-1.5">
                                    <Label className="text-[10px] font-semibold uppercase text-zinc-500">Email</Label>
                                    <Input type="text" className="h-8 text-sm rounded-md" value={formData.EMAIL ?? ""} onChange={e => setFormData({ ...formData, EMAIL: e.target.value })} placeholder="Multiple with ;" />
                                </div>
                                <div className="space-y-1.5">
                                    <Label className="text-[10px] font-semibold uppercase text-zinc-500">Email (account)</Label>
                                    <Input type="text" className="h-8 text-sm rounded-md" value={formData.EMAILACC ?? ""} onChange={e => setFormData({ ...formData, EMAILACC: e.target.value })} placeholder="Λογ. email (multiple with ;)" />
                                </div>
                                <div className="space-y-1.5">
                                    <Label className="text-[10px] font-semibold uppercase text-zinc-500">CCCEMAILMAR</Label>
                                    <Input type="text" className="h-8 text-sm rounded-md" value={formData.CCCEMAILMAR ?? ""} onChange={e => setFormData({ ...formData, CCCEMAILMAR: e.target.value })} placeholder="Email Μαρ. (multiple with ;)" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <Label className="text-[10px] font-semibold uppercase text-zinc-500">Phone 1</Label>
                                        <Input className="h-8 text-sm rounded-md" value={formData.PHONE01 ?? ""} onChange={e => setFormData({ ...formData, PHONE01: e.target.value })} />
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label className="text-[10px] font-semibold uppercase text-zinc-500">Phone 2</Label>
                                        <Input className="h-8 text-sm rounded-md" value={formData.PHONE02 ?? ""} onChange={e => setFormData({ ...formData, PHONE02: e.target.value })} />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <Label className="text-[10px] font-semibold uppercase text-zinc-500">Website</Label>
                                    <Input className="h-8 text-sm rounded-md" value={formData.website ?? ""} onChange={e => setFormData({ ...formData, website: e.target.value })} placeholder="https://…" />
                                </div>
                            </TabsContent>

                            <TabsContent value="address" className="mt-0 space-y-4">
                                <div className="space-y-1.5">
                                    <Label className="text-[10px] font-semibold uppercase text-zinc-500">Address</Label>
                                    <Input className="h-8 text-sm rounded-md" value={formData.ADDRESS ?? ""} onChange={e => setFormData({ ...formData, ADDRESS: e.target.value })} />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <Label className="text-[10px] font-semibold uppercase text-zinc-500">ZIP</Label>
                                        <Input className="h-8 text-sm rounded-md" value={formData.ZIP ?? ""} onChange={e => setFormData({ ...formData, ZIP: e.target.value })} />
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label className="text-[10px] font-semibold uppercase text-zinc-500">City</Label>
                                        <Input className="h-8 text-sm rounded-md" value={formData.CITY ?? ""} onChange={e => setFormData({ ...formData, CITY: e.target.value })} />
                                    </div>
                                </div>
                                <div className="flex gap-2 items-end flex-wrap">
                                    <div className="space-y-1.5 flex-1 min-w-[120px]">
                                        <Label className="text-[10px] font-semibold uppercase text-zinc-500">Latitude</Label>
                                        <Input className="h-8 text-sm rounded-md font-mono" value={formData.latitude ?? ""} onChange={e => setFormData({ ...formData, latitude: e.target.value })} placeholder="e.g. 37.9838" />
                                    </div>
                                    <div className="space-y-1.5 flex-1 min-w-[120px]">
                                        <Label className="text-[10px] font-semibold uppercase text-zinc-500">Longitude</Label>
                                        <Input className="h-8 text-sm rounded-md font-mono" value={formData.longitude ?? ""} onChange={e => setFormData({ ...formData, longitude: e.target.value })} placeholder="e.g. 23.7275" />
                                    </div>
                                    <Button type="button" size="sm" disabled={isResolvingCoords} onClick={handleGetCoordinates} className="h-8 px-3 text-xs gap-1.5">
                                        {isResolvingCoords ? <RefreshCcw className="w-3.5 h-3.5 animate-spin" /> : <MapPin className="w-3.5 h-3.5" />}
                                        Get coordinates
                                    </Button>
                                </div>
                                <p className="text-[10px] text-zinc-400">Uses address/city/ZIP to resolve lat/long via geocode API.</p>
                            </TabsContent>

                            <TabsContent value="branding" className="mt-0 space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-lg border bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center overflow-hidden p-1.5">
                                        {formData.logo ? <img src={formData.logo} alt="" className="w-full h-full object-contain" /> : <Building2 className="w-6 h-6 text-zinc-400" />}
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="inline-flex h-7 items-center justify-center rounded-md bg-zinc-700 px-2.5 text-[10px] font-medium text-white cursor-pointer hover:bg-zinc-600">
                                            Choose logo
                                            <input type="file" className="hidden" accept="image/*" onChange={handleUploadLogo} disabled={isUploading} />
                                        </Label>
                                        <div className="flex items-center gap-2">
                                            <Checkbox id="rmbg" checked={formData.removeBackgroundLogo} onCheckedChange={v => setFormData({ ...formData, removeBackgroundLogo: !!v })} />
                                            <Label htmlFor="rmbg" className="text-[10px] text-zinc-500 cursor-pointer">Remove background</Label>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-2 border-t border-zinc-200 dark:border-zinc-800">
                                    <div>
                                        <p className="text-xs font-medium text-zinc-700 dark:text-zinc-300">Show on homepage scroller</p>
                                        <p className="text-[10px] text-zinc-400">Feature logo on first page (requires logo).</p>
                                    </div>
                                    <Switch checked={formData.displayAtCarousel} onCheckedChange={v => setFormData({ ...formData, displayAtCarousel: v })} />
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>

                    <div className="px-4 py-3 border-t bg-white dark:bg-zinc-900 flex justify-end gap-2">
                        <Button variant="ghost" size="sm" onClick={() => setIsDialogOpen(false)} className="h-8 text-xs text-zinc-500">Cancel</Button>
                        <Button size="sm" disabled={isSaving || isUploading} onClick={() => handleSave(false)} className="h-8 px-4 text-xs bg-zinc-700 hover:bg-zinc-600">
                            {isSaving ? <RefreshCcw className="w-3.5 h-3.5 animate-spin" /> : editingCustomer ? "Save" : "Create"}
                        </Button>
                        {editingCustomer && (
                            <Button size="sm" disabled={isSaving || isUploading} onClick={() => handleSave(true)} className="h-8 px-4 text-xs bg-indigo-600 hover:bg-indigo-700">
                                {isSaving ? <RefreshCcw className="w-3.5 h-3.5 animate-spin" /> : "Save & ERP"}
                            </Button>
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
