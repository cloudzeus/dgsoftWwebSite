"use client"

import * as React from "react"
import {
    ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable,
} from "@tanstack/react-table"
import { ChevronDown, Plus, RefreshCcw, MapPin, Trash2, Map } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


import { createLocation, updateLocation, deleteLocation, getCoordinates } from "@/app/lib/actions/location"

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

    // Form states
    const [formData, setFormData] = React.useState({
        nameEL: "",
        nameEN: "",
        addressEL: "",
        addressEN: "",
        zip: "",
        cityEL: "",
        cityEN: "",
        countryEL: "",
        countryEN: "",
        email: "",
        phone: "",
        website: "",
        logo: "",
        latitude: "",
        longitude: "",
        order: "0",
        published: true,
    })

    const openEdit = (location?: Location) => {
        if (location) {
            setEditingLocation(location)
            setFormData({
                nameEL: location.nameEL || "",
                nameEN: location.nameEN || "",
                addressEL: location.addressEL || "",
                addressEN: location.addressEN || "",
                zip: location.zip || "",
                cityEL: location.cityEL || "",
                cityEN: location.cityEN || "",
                countryEL: location.countryEL || "",
                countryEN: location.countryEN || "",
                email: location.email || "",
                phone: location.phone || "",
                website: location.website || "",
                logo: location.logo || "",
                latitude: location.latitude ? String(location.latitude) : "",
                longitude: location.longitude ? String(location.longitude) : "",
                order: String(location.order || 0),
                published: location.published ?? true,
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
            if (!formData.nameEL) throw new Error("Name (EL) is required!")

            if (editingLocation) {
                const res: any = await updateLocation(editingLocation.id, formData)
                if (res.error) throw new Error(res.error)
                setData(data.map(d => d.id === res.id ? res : d))
                toast.success("Location updated")
            } else {
                const res: any = await createLocation(formData)
                if (res.error) throw new Error(res.error)
                setData([...data, res])
                toast.success("Location created")
            }
            setIsDialogOpen(false)
        } catch (err: any) {
            toast.error(err.message)
        } finally {
            setIsSaving(false)
        }
    }

    React.useEffect(() => {
        const queryParts = [
            formData.addressEN || formData.addressEL,
            formData.cityEN || formData.cityEL,
            formData.countryEN || formData.countryEL
        ].filter(Boolean);
        setGeocodeQuery(queryParts.join(", "));
    }, [formData.addressEL, formData.addressEN, formData.cityEL, formData.cityEN, formData.countryEL, formData.countryEN]);

    const handleLogoUpload = async (file: File | null) => {
        if (!file) return
        toast.loading("Uploading logo via Bunny CDN...", { id: "logo" })
        try {
            const uploadData = new FormData()
            uploadData.append("file", file)
            const res = await fetch("/api/admin/articles/upload", { method: "POST", body: uploadData })
            const d = await res.json()
            if (!res.ok) throw new Error(d.error)
            setFormData(prev => ({ ...prev, logo: d.url }))
            toast.success("Logo uploaded!", { id: "logo" })
        } catch (error: any) {
            toast.error(error.message, { id: "logo" })
        }
    }

    const handleGeocode = async () => {
        if (!geocodeQuery.trim()) {
            toast.error("Please enter a Geocode Query first.");
            return;
        }

        setIsGeocoding(true);
        toast.loading(`Geocoding: ${geocodeQuery}...`, { id: "geocode" });
        try {
            const coordsResult = await getCoordinates(geocodeQuery);
            if (coordsResult) {
                setFormData(prev => ({
                    ...prev,
                    latitude: String(coordsResult.latitude),
                    longitude: String(coordsResult.longitude)
                }));
                toast.success("Coordinates retrieved and set successfully!", { id: "geocode" });
            } else {
                toast.error("Could not find coordinates for this address.", { id: "geocode" });
            }
        } catch (error: any) {
            toast.error(error.message, { id: "geocode" });
        } finally {
            setIsGeocoding(false);
        }
    }

    const columns: ColumnDef<Location>[] = [
        {
            id: "logo",
            header: "",
            cell: ({ row }) => {
                const initials = (row.original.nameEL[0] || "?").toUpperCase();
                return (
                    <Avatar className="h-8 w-8">
                        {row.original.logo ? <AvatarImage src={row.original.logo} /> : <AvatarFallback className="bg-primary text-primary-foreground font-bold">{initials}</AvatarFallback>}
                    </Avatar>
                )
            },
            enableSorting: false,
        },
        {
            accessorKey: "nameEL",
            header: "Name",
            cell: ({ row }) => <div className="font-medium text-foreground">{row.original.nameEL}</div>,
        },
        {
            accessorKey: "cityEL",
            header: "City",
            cell: ({ row }) => <div className="text-muted-foreground">{row.original.cityEL || "-"}</div>,
        },
        {
            accessorKey: "countryEL",
            header: "Country",
            cell: ({ row }) => <div className="text-muted-foreground">{row.original.countryEL || "-"}</div>,
        },
        {
            accessorKey: "phone",
            header: "Phone",
            cell: ({ row }) => <div className="text-muted-foreground">{row.original.phone || "-"}</div>,
        },
        {
            id: "actions",
            cell: ({ row }) => {
                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" className="h-8">Actions <ChevronDown className="h-4 w-4 ml-1" /></Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-background text-foreground border border-input">
                            <DropdownMenuItem className="cursor-pointer" onClick={() => openEdit(row.original)}>Edit</DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer text-red-500" onClick={async () => {
                                if (confirm("Delete location forever?")) {
                                    await deleteLocation(row.original.id)
                                    setData(data.filter(d => d.id !== row.original.id))
                                }
                            }}>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            }
        }
    ]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    })

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <Button onClick={() => openEdit()} className="bg-primary shadow-md hover:shadow-lg transition-all">
                    <Plus className="mr-2 h-4 w-4" /> Add Location
                </Button>
            </div>

            <div className="rounded-md border bg-card text-card-foreground shadow overflow-hidden">
                <Table>
                    <TableHeader className="bg-muted">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No locations found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            <div className="flex items-center justify-end space-x-2 py-4">
                <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                    Previous
                </Button>
                <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                    Next
                </Button>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-2xl w-full bg-background text-foreground md:p-8 max-h-[90vh] overflow-hidden flex flex-col">
                    <DialogHeader>
                        <DialogTitle className="text-2xl text-foreground">{editingLocation ? "Edit Location" : "Create New Location"}</DialogTitle>
                    </DialogHeader>

                    <div className="flex-1 px-4 py-4 -mx-4 h-full overflow-y-auto">
                        <div className="grid gap-4 py-2 px-1">
                            <div className="flex flex-col items-center justify-center space-y-3 pb-4 border-b">
                                <Avatar className="h-16 w-16 shadow-md border-2 border-primary/20 bg-muted flex items-center justify-center overflow-hidden">
                                    {formData.logo ? (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img src={formData.logo} alt="Logo" className="w-full h-full object-contain bg-white" />
                                    ) : (
                                        <AvatarFallback className="bg-primary text-primary-foreground font-bold text-xl">
                                            {formData.nameEL?.[0] || "?"}
                                        </AvatarFallback>
                                    )}
                                </Avatar>
                                <Label className="cursor-pointer bg-secondary text-secondary-foreground hover:bg-secondary/80 px-3 py-1.5 rounded-md text-xs font-semibold transition-colors">
                                    Change Logo
                                    <input type="file" className="hidden" accept="image/*" onChange={(e) => handleLogoUpload(e.target.files?.[0] || null)} />
                                </Label>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label className="text-foreground font-bold">Name (EL) *</Label>
                                    <Input className="bg-background text-foreground border-input mt-1" value={formData.nameEL} onChange={e => setFormData({ ...formData, nameEL: e.target.value })} />
                                </div>
                                <div>
                                    <Label className="text-foreground font-bold">Name (EN)</Label>
                                    <Input className="bg-background text-foreground border-input mt-1" value={formData.nameEN} onChange={e => setFormData({ ...formData, nameEN: e.target.value })} />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label className="text-foreground font-bold">Address (EL)</Label>
                                    <Input className="bg-background text-foreground border-input mt-1" value={formData.addressEL} onChange={e => setFormData({ ...formData, addressEL: e.target.value })} />
                                </div>
                                <div>
                                    <Label className="text-foreground font-bold">Address (EN)</Label>
                                    <Input className="bg-background text-foreground border-input mt-1" value={formData.addressEN} onChange={e => setFormData({ ...formData, addressEN: e.target.value })} />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label className="text-foreground font-bold">City (EL)</Label>
                                    <Input className="bg-background text-foreground border-input mt-1" value={formData.cityEL} onChange={e => setFormData({ ...formData, cityEL: e.target.value })} />
                                </div>
                                <div>
                                    <Label className="text-foreground font-bold">City (EN)</Label>
                                    <Input className="bg-background text-foreground border-input mt-1" value={formData.cityEN} onChange={e => setFormData({ ...formData, cityEN: e.target.value })} />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <Label className="text-foreground font-bold">Country (EL)</Label>
                                    <Input className="bg-background text-foreground border-input mt-1" value={formData.countryEL} onChange={e => setFormData({ ...formData, countryEL: e.target.value })} />
                                </div>
                                <div>
                                    <Label className="text-foreground font-bold">Country (EN)</Label>
                                    <Input className="bg-background text-foreground border-input mt-1" value={formData.countryEN} onChange={e => setFormData({ ...formData, countryEN: e.target.value })} />
                                </div>
                                <div>
                                    <Label className="text-foreground font-bold">Zip Code</Label>
                                    <Input className="bg-background text-foreground border-input mt-1" value={formData.zip} onChange={e => setFormData({ ...formData, zip: e.target.value })} />
                                </div>
                            </div>

                            <div className="flex flex-col my-1 pt-2 space-y-2">
                                <Label className="text-foreground font-bold text-xs text-muted-foreground">Geocode Search Query (Edit if exact location not found)</Label>
                                <div className="flex gap-2">
                                    <Input
                                        className="bg-background text-foreground border-input flex-1"
                                        value={geocodeQuery}
                                        onChange={e => setGeocodeQuery(e.target.value)}
                                        placeholder="e.g. Λεωφόρος Κηφισίας 1, Μαρούσι, Ελλάδα"
                                    />
                                    <Button
                                        type="button"
                                        variant="secondary"
                                        size="sm"
                                        onClick={handleGeocode}
                                        disabled={isGeocoding}
                                        className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 border border-indigo-200 shadow-sm px-6"
                                    >
                                        {isGeocoding ? <RefreshCcw className="mr-2 h-4 w-4 animate-spin" /> : <Map className="mr-2 h-4 w-4" />}
                                        Fetch Coordinates
                                    </Button>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label className="text-foreground font-bold">Latitude</Label>
                                    <Input className="bg-background text-foreground border-input mt-1" placeholder="e.g. 37.9838" value={formData.latitude} onChange={e => setFormData({ ...formData, latitude: e.target.value })} />
                                </div>
                                <div>
                                    <Label className="text-foreground font-bold">Longitude</Label>
                                    <Input className="bg-background text-foreground border-input mt-1" placeholder="e.g. 23.7275" value={formData.longitude} onChange={e => setFormData({ ...formData, longitude: e.target.value })} />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <Label className="text-foreground font-bold">Email</Label>
                                    <Input className="bg-background text-foreground border-input mt-1" type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                                </div>
                                <div>
                                    <Label className="text-foreground font-bold">Phone</Label>
                                    <Input className="bg-background text-foreground border-input mt-1" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                                </div>
                                <div>
                                    <Label className="text-foreground font-bold">Website</Label>
                                    <Input className="bg-background text-foreground border-input mt-1" value={formData.website} onChange={e => setFormData({ ...formData, website: e.target.value })} />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label className="text-foreground font-bold">Order (Display weight)</Label>
                                    <Input type="number" className="bg-background text-foreground border-input mt-1" value={formData.order} onChange={e => setFormData({ ...formData, order: e.target.value })} />
                                </div>
                                <div className="flex flex-col justify-end pb-2">
                                    <label className="flex items-center space-x-2 cursor-pointer">
                                        <input type="checkbox" checked={formData.published} onChange={e => setFormData({ ...formData, published: e.target.checked })} className="form-checkbox h-4 w-4 text-primary rounded" />
                                        <span className="text-sm font-bold">Published</span>
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="flex justify-end pt-4 border-t mt-4 gap-2">
                        <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                        <Button disabled={isSaving} onClick={handleSave}>
                            {isSaving ? <RefreshCcw className="h-4 w-4 animate-spin mr-2" /> : "Save Location"}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
