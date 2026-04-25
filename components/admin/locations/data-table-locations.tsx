"use client"

import * as React from "react"
import { ColumnDef } from "@tanstack/react-table"
import {
    ChevronDown,
    Plus,
    RefreshCcw,
    MapPin,
    Trash2,
    Map,
    ChevronRight,
    ArrowUpDown,
    Globe,
    Phone,
    Mail,
    ExternalLink,
    Compass,
    Layers,
    Navigation,
    Home
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"

import { createLocation, updateLocation, deleteLocation, getCoordinates } from "@/app/lib/actions/location"
import { GenericDataTable } from "../shared/generic-data-table"

export type Location = {
    id: string;
    nameEL: string;
    nameEN: string | null;
    addressEL: string | null;
    addressEN: string | null;
    zip: string | null;
    cityEL: string | null;
    cityEN: string | null;
    countryEL: string | null;
    countryEN: string | null;
    email: string | null;
    phone: string | null;
    website: string | null;
    logo: string | null;
    latitude: number | null;
    longitude: number | null;
    order: number;
    published: boolean;
    createdAt: Date;
}

export function DataTableLocations({ data: initialData }: { data: Location[] }) {
    const [data, setData] = React.useState<Location[]>(initialData || [])
    const [isDialogOpen, setIsDialogOpen] = React.useState(false)
    const [editingLocation, setEditingLocation] = React.useState<Location | null>(null)
    const [isSaving, setIsSaving] = React.useState(false)
    const [isGeocoding, setIsGeocoding] = React.useState(false)
    const [geocodeQuery, setGeocodeQuery] = React.useState("")

    const [formData, setFormData] = React.useState({
        nameEL: "", nameEN: "", addressEL: "", addressEN: "", zip: "", cityEL: "", cityEN: "", countryEL: "", countryEN: "",
        email: "", phone: "", website: "", logo: "", latitude: "", longitude: "", order: "0", published: true
    })

    const openEdit = (location?: Location) => {
        if (location) {
            setEditingLocation(location)
            setFormData({
                nameEL: location.nameEL || "", nameEN: location.nameEN || "",
                addressEL: location.addressEL || "", addressEN: location.addressEN || "",
                zip: location.zip || "", cityEL: location.cityEL || "", cityEN: location.cityEN || "",
                countryEL: location.countryEL || "", countryEN: location.countryEN || "",
                email: location.email || "", phone: location.phone || "", website: location.website || "",
                logo: location.logo || "", latitude: location.latitude ? String(location.latitude) : "",
                longitude: location.longitude ? String(location.longitude) : "",
                order: String(location.order || 0), published: location.published ?? true,
            })
        } else {
            setEditingLocation(null)
            setFormData({
                nameEL: "", nameEN: "", addressEL: "", addressEN: "", zip: "", cityEL: "", cityEN: "", countryEL: "", countryEN: "",
                email: "", phone: "", website: "", logo: "", latitude: "", longitude: "", order: "0", published: true
            })
        }
        setIsDialogOpen(true)
    }

    const handleSave = async () => {
        setIsSaving(true)
        try {
            if (!formData.nameEL) throw new Error("Regional Name (EL) is required")
            if (editingLocation) {
                const res = await updateLocation(editingLocation.id, formData)
                setData(data.map(d => d.id === (res as any).id ? res as any : d))
                toast.success("Location updated")
            } else {
                const res = await createLocation(formData)
                setData([...data, res as any])
                toast.success("Branch location created")
            }
            setIsDialogOpen(false)
        } catch (err: any) { toast.error(err.message) }
        finally { setIsSaving(false) }
    }

    React.useEffect(() => {
        const query = [formData.addressEL || formData.addressEN, formData.cityEL || formData.cityEN, formData.countryEL || formData.countryEN].filter(Boolean).join(", ")
        setGeocodeQuery(query)
    }, [formData.addressEL, formData.addressEN, formData.cityEL, formData.cityEN, formData.countryEL, formData.countryEN])

    const handleLogoUpload = async (file: File | null) => {
        if (!file) return
        const tid = toast.loading("Uploading branding assets...")
        try {
            const form = new FormData(); form.append("file", file);
            const res = await fetch("/api/admin/articles/upload", { method: "POST", body: form })
            const d = await res.json()
            if (!res.ok) throw new Error(d.error)
            setFormData(prev => ({ ...prev, logo: d.url }))
            toast.success("Identity Asset Verified", { id: tid })
        } catch (error: any) { toast.error(error.message, { id: tid }) }
    }

    const handleGeocode = async () => {
        if (!geocodeQuery.trim()) return toast.error("Provide a location query")
        setIsGeocoding(true)
        const tid = toast.loading(`Resolving coordinates for "${geocodeQuery}"...`)
        try {
            const coords = await getCoordinates(geocodeQuery)
            if (coords) {
                setFormData(prev => ({ ...prev, latitude: String(coords.latitude), longitude: String(coords.longitude) }))
                toast.success("GPS Lock Established", { id: tid })
            } else throw new Error("Location resolution failed")
        } catch (error: any) { toast.error(error.message, { id: tid }) }
        finally { setIsGeocoding(false) }
    }

    const columns: ColumnDef<Location>[] = [
        {
            id: "branding",
            header: "",
            cell: ({ row }) => (
                <div className="w-9 h-9 rounded-lg overflow-hidden bg-[#F3F2F1] border border-[#EDEBE9] p-1 flex items-center justify-center shrink-0">
                    {row.original.logo
                        ? <img src={row.original.logo} className="w-full h-full object-contain" />
                        : <Home className="w-4 h-4 text-[#C8C6C4]" />}
                </div>
            ),
            size: 48
        },
        {
            accessorKey: "nameEL",
            header: ({ column }) => (
                <button onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} className="flex items-center gap-1 text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide hover:text-[#201F1E]">
                    Location <ArrowUpDown className="h-3 w-3" />
                </button>
            ),
            cell: ({ row }) => (
                <div>
                    <p className="font-semibold text-sm text-[#201F1E] leading-tight">{row.original.nameEL}</p>
                    <p className="text-[11px] text-[#A19F9D] flex items-center gap-1 mt-0.5">
                        <MapPin className="w-2.5 h-2.5 text-[#E31E2A] shrink-0" />
                        {[row.original.cityEL, row.original.countryEL].filter(Boolean).join(", ") || "—"}
                    </p>
                </div>
            )
        },
        {
            accessorKey: "phone",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Contact</span>,
            cell: ({ row }) => (
                <div className="space-y-0.5">
                    <p className="text-xs text-[#605E5C] flex items-center gap-1.5">
                        <Phone className="w-3 h-3 text-[#A19F9D] shrink-0" />
                        {row.original.phone || <span className="text-[#C8C6C4]">—</span>}
                    </p>
                    <p className="text-xs text-[#605E5C] flex items-center gap-1.5">
                        <Mail className="w-3 h-3 text-[#A19F9D] shrink-0" />
                        {row.original.email || <span className="text-[#C8C6C4]">—</span>}
                    </p>
                </div>
            )
        },
        {
            accessorKey: "published",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Status</span>,
            cell: ({ row }) => row.original.published ? (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    Live
                </span>
            ) : (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F3F2F1] text-[#A19F9D] border border-[#EDEBE9]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8C6C4] shrink-0" />
                    Off
                </span>
            )
        },
        {
            id: "actions",
            cell: ({ row }) => (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild onClick={e => e.stopPropagation()}>
                        <Button variant="outline" size="sm" className="h-8 px-3 text-[12px] font-semibold text-[#201F1E] border-[#C8C6C4] hover:bg-[#EDEBE9] hover:border-[#A19F9D] rounded gap-1">
                            Actions <ChevronDown className="h-3.5 w-3.5 text-[#A19F9D]" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-44">
                        <DropdownMenuItem onClick={() => openEdit(row.original)} className="text-sm">
                            <Navigation className="w-3.5 h-3.5 mr-2 text-[#0078D4]" /> Edit location
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => window.open(row.original.website || '#', '_blank')} disabled={!row.original.website} className="text-sm">
                            <ExternalLink className="w-3.5 h-3.5 mr-2" /> Open website
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-500 text-sm" onClick={async () => {
                            if (confirm("Delete this location?")) {
                                await deleteLocation(row.original.id);
                                setData(data.filter(d => d.id !== row.original.id));
                            }
                        }}>
                            <Trash2 className="w-3.5 h-3.5 mr-2" /> Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    ]

    const renderExpandedRow = (location: Location) => (
        <div className="mx-4 mb-3 mt-1 rounded-lg border border-[#EDEBE9] bg-[#F3F2F1] overflow-hidden">
            <div className="grid grid-cols-3 divide-x divide-[#EDEBE9]">
                {/* Address */}
                <div className="p-4 space-y-3">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] flex items-center gap-1.5">
                        <Compass className="w-3 h-3" /> Address
                    </p>
                    <div className="space-y-2">
                        <div>
                            <p className="text-[10px] font-semibold text-[#A19F9D] mb-0.5">Ελληνικά</p>
                            <p className="text-sm font-medium text-[#201F1E]">{location.addressEL || "—"}</p>
                            <p className="text-xs text-[#605E5C]">{[location.zip, location.cityEL, location.countryEL].filter(Boolean).join(" ")}</p>
                        </div>
                        {(location.addressEN || location.cityEN) && (
                            <div>
                                <p className="text-[10px] font-semibold text-[#A19F9D] mb-0.5">English</p>
                                <p className="text-sm font-medium text-[#201F1E]">{location.addressEN || "—"}</p>
                                <p className="text-xs text-[#605E5C]">{[location.cityEN, location.countryEN].filter(Boolean).join(", ")}</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Geolocation */}
                <div className="p-4 space-y-3">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] flex items-center gap-1.5">
                        <Navigation className="w-3 h-3" /> Coordinates
                    </p>
                    {location.latitude && location.longitude ? (
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-[#EFF6FC] border border-[#C7E0F4] flex items-center justify-center shrink-0">
                                <MapPin className="w-4 h-4 text-[#0078D4]" />
                            </div>
                            <div>
                                <p className="text-xs font-mono font-semibold text-[#201F1E]">{location.latitude}</p>
                                <p className="text-xs font-mono font-semibold text-[#201F1E]">{location.longitude}</p>
                            </div>
                        </div>
                    ) : (
                        <p className="text-xs text-[#A19F9D]">No coordinates set</p>
                    )}
                </div>

                {/* Contact */}
                <div className="p-4 space-y-3">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] flex items-center gap-1.5">
                        <Globe className="w-3 h-3" /> Online
                    </p>
                    <div className="space-y-2">
                        <p className="text-xs flex items-center gap-2 text-[#605E5C]">
                            <Mail className="w-3.5 h-3.5 text-[#A19F9D] shrink-0" />
                            {location.email || <span className="text-[#C8C6C4]">—</span>}
                        </p>
                        <p className="text-xs flex items-center gap-2 text-[#605E5C]">
                            <Globe className="w-3.5 h-3.5 text-[#A19F9D] shrink-0" />
                            {location.website
                                ? <a href={location.website} target="_blank" rel="noopener noreferrer" className="text-[#0078D4] hover:underline truncate max-w-[160px]">{location.website}</a>
                                : <span className="text-[#C8C6C4]">—</span>}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div className="space-y-4">
            <GenericDataTable
                columns={columns} data={data} searchPlaceholder="Locate branch name..." searchColumn="nameEL"
                onAddClick={() => openEdit()} addButtonLabel="Deploy New Point"
                renderExpandedRow={renderExpandedRow}
            />

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-3xl p-0 overflow-hidden rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.12),0_2px_6px_rgba(0,0,0,0.08)]">
                    {/* Header */}
                    <DialogHeader className="px-5 py-4 border-b border-[#EDEBE9] bg-white">
                        <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded bg-[#EFF6FC] border border-[#C7E0F4] flex items-center justify-center shrink-0">
                                <Map className="w-4 h-4 text-[#0078D4]" />
                            </div>
                            <div>
                                <DialogTitle className="text-sm font-bold text-[#201F1E]">
                                    {editingLocation ? 'Edit Location' : 'New Location'}
                                </DialogTitle>
                                <DialogDescription className="text-[11px] text-[#A19F9D]">
                                    {editingLocation ? editingLocation.nameEL : 'Add a new office or presence point'}
                                </DialogDescription>
                            </div>
                        </div>
                    </DialogHeader>

                    {/* Body */}
                    <div className="bg-[#F3F2F1] max-h-[75vh] overflow-y-auto px-5 py-4">
                        <div className="grid grid-cols-[220px_1fr] gap-4">

                            {/* Left sidebar */}
                            <div className="space-y-3">
                                {/* Logo */}
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-3 text-center">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-2">Logo</p>
                                    <div className="w-14 h-14 rounded-lg bg-[#F3F2F1] flex items-center justify-center mx-auto mb-2 border border-[#EDEBE9]">
                                        {formData.logo
                                            ? <img src={formData.logo} className="w-full h-full object-contain p-1 rounded-lg" />
                                            : <Home className="w-5 h-5 text-[#C8C6C4]" />}
                                    </div>
                                    <Label className="inline-flex h-7 items-center justify-center rounded border border-[#C8C6C4] bg-white px-3 text-[11px] font-medium text-[#201F1E] cursor-pointer hover:bg-[#EDEBE9] transition-colors">
                                        <input type="file" className="hidden" accept="image/*" onChange={e => handleLogoUpload(e.target.files?.[0] || null)} />
                                        Upload logo
                                    </Label>
                                </div>

                                {/* Geocode */}
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-3 space-y-2.5">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] flex items-center gap-1">
                                        <Compass className="w-3 h-3" /> Geolocation
                                    </p>
                                    <div className="space-y-1">
                                        <Label className="text-[10px] font-semibold text-[#605E5C] uppercase">Address lookup</Label>
                                        <div className="flex gap-1.5">
                                            <Input className="h-8 rounded text-xs border-[#C8C6C4] focus-visible:ring-[#0078D4]" value={geocodeQuery} onChange={e => setGeocodeQuery(e.target.value)} placeholder="Street, city…" />
                                            <Button disabled={isGeocoding} onClick={handleGeocode} className="h-8 w-8 p-0 shrink-0 rounded bg-[#0078D4] hover:bg-[#106EBE]">
                                                {isGeocoding ? <RefreshCcw className="w-3 h-3 animate-spin" /> : <Map className="w-3 h-3" />}
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="space-y-1">
                                            <Label className="text-[10px] font-semibold text-[#605E5C] uppercase">Lat</Label>
                                            <Input className="h-8 rounded font-mono text-xs border-[#C8C6C4] focus-visible:ring-[#0078D4]" value={formData.latitude} onChange={e => setFormData({ ...formData, latitude: e.target.value })} />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[10px] font-semibold text-[#605E5C] uppercase">Lng</Label>
                                            <Input className="h-8 rounded font-mono text-xs border-[#C8C6C4] focus-visible:ring-[#0078D4]" value={formData.longitude} onChange={e => setFormData({ ...formData, longitude: e.target.value })} />
                                        </div>
                                    </div>
                                </div>

                                {/* Status */}
                                <div className="bg-white border border-[#EDEBE9] rounded-lg px-3 py-2.5 flex items-center justify-between">
                                    <div>
                                        <p className="text-[12px] font-semibold text-[#201F1E]">Published</p>
                                        <p className="text-[10px] text-[#A19F9D]">Visible on public maps</p>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <span className={`text-[10px] font-bold ${formData.published ? 'text-emerald-600' : 'text-[#A19F9D]'}`}>
                                            {formData.published ? 'Live' : 'Off'}
                                        </span>
                                        <Switch checked={formData.published} onCheckedChange={v => setFormData({ ...formData, published: v })} className="data-[state=checked]:bg-emerald-500 scale-90" />
                                    </div>
                                </div>
                            </div>

                            {/* Right form area */}
                            <div className="space-y-3">
                                {/* Identity */}
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Identity</p>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Όνομα (ΕΛ) <span className="text-red-500">*</span></Label>
                                            <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] font-medium text-sm" value={formData.nameEL ?? ""} onChange={e => setFormData({ ...formData, nameEL: e.target.value })} placeholder="π.χ. Αθήνα" />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Name (EN)</Label>
                                            <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={formData.nameEN ?? ""} onChange={e => setFormData({ ...formData, nameEN: e.target.value })} placeholder="e.g. Athens" />
                                        </div>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Address</p>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Διεύθυνση (ΕΛ)</Label>
                                            <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={formData.addressEL ?? ""} onChange={e => setFormData({ ...formData, addressEL: e.target.value })} placeholder="Οδός, αριθμός" />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Address (EN)</Label>
                                            <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={formData.addressEN ?? ""} onChange={e => setFormData({ ...formData, addressEN: e.target.value })} placeholder="Street, number" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-[1fr_1fr_1fr_1fr_100px] gap-2">
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Πόλη (ΕΛ)</Label>
                                            <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={formData.cityEL ?? ""} onChange={e => setFormData({ ...formData, cityEL: e.target.value })} placeholder="Πόλη" />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">City (EN)</Label>
                                            <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={formData.cityEN ?? ""} onChange={e => setFormData({ ...formData, cityEN: e.target.value })} placeholder="City" />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Χώρα (ΕΛ)</Label>
                                            <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={formData.countryEL ?? ""} onChange={e => setFormData({ ...formData, countryEL: e.target.value })} placeholder="Χώρα" />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Country (EN)</Label>
                                            <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={formData.countryEN ?? ""} onChange={e => setFormData({ ...formData, countryEN: e.target.value })} placeholder="Country" />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Post code</Label>
                                            <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] font-mono text-sm" value={formData.zip ?? ""} onChange={e => setFormData({ ...formData, zip: e.target.value })} placeholder="TK" />
                                        </div>
                                    </div>
                                </div>

                                {/* Contact */}
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Contact</p>
                                    <div className="grid grid-cols-3 gap-2">
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Phone</Label>
                                            <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={formData.phone ?? ""} onChange={e => setFormData({ ...formData, phone: e.target.value })} placeholder="+30 210 0000000" />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Email</Label>
                                            <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" type="email" value={formData.email ?? ""} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="info@example.com" />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Website</Label>
                                            <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" type="url" value={formData.website ?? ""} onChange={e => setFormData({ ...formData, website: e.target.value })} placeholder="https://example.com" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="px-5 py-3 border-t border-[#EDEBE9] bg-white flex justify-end gap-2">
                        <Button variant="ghost" onClick={() => setIsDialogOpen(false)} className="h-8 px-4 text-[12px] font-semibold text-[#605E5C] hover:bg-[#EDEBE9] hover:text-[#201F1E] rounded">
                            Cancel
                        </Button>
                        <Button disabled={isSaving} onClick={handleSave} className="h-8 px-5 text-[12px] font-semibold bg-[#0078D4] hover:bg-[#106EBE] text-white rounded shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,120,212,0.25)] transition-colors active:scale-95">
                            {isSaving ? <><RefreshCcw className="w-3 h-3 animate-spin mr-1.5" />Saving…</> : "Save location"}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
