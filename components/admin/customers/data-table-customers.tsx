"use client"

import * as React from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
    getExpandedRowModel,
    ExpandedState,
} from "@tanstack/react-table"
import {
    ArrowUpDown,
    ChevronDown,
    MoreHorizontal,
    Plus,
    Loader2,
    Search,
    ChevronRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
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
import { toast } from "sonner"
import { createCustomer, updateCustomer, deleteCustomer, getKAD } from "@/app/lib/actions/trdr"

export type Customer = {
    id: string
    SODTYPE: number
    TRDR: number
    CODE: string
    NAME: string
    AFM: string | null
    ADDRESS: string | null
    CITY: string | null
    PHONE01: string | null
    EMAIL: string | null
    logo: string | null
    website: string | null
    displayAtCarousel: boolean
    registDate: string | null
    legalStatus: string | null
    numEmployees: number | null
    kads?: any[]
}

export function CustomersDataTable({ data: initialData }: { data: Customer[] }) {
    const [data, setData] = React.useState<Customer[]>(initialData)
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})
    const [expanded, setExpanded] = React.useState<ExpandedState>({})

    const [isDialogOpen, setIsDialogOpen] = React.useState(false)
    const [editingCustomer, setEditingCustomer] = React.useState<Customer | null>(null)

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
        EMAIL: "",
        website: "",
        registDate: "",
        legalStatus: "",
        numEmployees: "",
        displayAtCarousel: false,
        removeBackgroundLogo: true,
        logo: "",
        kads: [] as any[],
    })

    const [isUploading, setIsUploading] = React.useState(false)
    const [isSaving, setIsSaving] = React.useState(false)
    const [isSearchingVat, setIsSearchingVat] = React.useState(false)

    const handleFetchVat = async () => {
        if (!formData.AFM || formData.AFM.trim() === "") {
            toast.error("Please enter an AFM first")
            return
        }
        setIsSearchingVat(true)
        try {
            console.log("Fetching VAT details for:", formData.AFM)
            const res = await fetch("/api/vat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ afm: formData.AFM.trim() })
            })
            const apiData = await res.json()
            console.log("VAT API Response:", apiData)

            if (apiData.basic_rec) {
                const fetchedKads = apiData.firm_act_tab?.item?.map((k: any) => ({
                    afm: formData.AFM.trim(),
                    firm_act_code: String(k.firm_act_code || ""),
                    firm_act_descr: String(k.firm_act_descr || ""),
                    firm_act_kind: k.firm_act_kind === "1"
                })) || [];

                setFormData(prev => ({
                    ...prev,
                    NAME: apiData.basic_rec.onomasia || prev.NAME,
                    ADDRESS: `${apiData.basic_rec.postal_address || ""} ${apiData.basic_rec.postal_address_no || ""}`.trim() || prev.ADDRESS,
                    ZIP: apiData.basic_rec.postal_zip_code || prev.ZIP,
                    registDate: apiData.basic_rec.regist_date || prev.registDate,
                    legalStatus: apiData.basic_rec.legal_status_descr || prev.legalStatus,
                    kads: fetchedKads,
                }))
                toast.success("Info fetched from VAT successfully")
            } else if (apiData.error) {
                toast.error(apiData.error || "Failed to fetch. No basic_rec returned.")
            } else {
                toast.error("Invalid response from VAT service.")
            }
        } catch (err) {
            console.error("VAT fetch error:", err)
            toast.error("Failed to connect to VAT service.")
        } finally {
            setIsSearchingVat(false)
        }
    }

    const handleUploadLogo = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return
        setIsUploading(true)
        try {
            const form = new FormData()
            form.append("logo", file)
            form.append("removeBackground", String(formData.removeBackgroundLogo))
            const res = await fetch("/api/admin/trdr/upload-logo", {
                method: "POST",
                body: form
            })
            const resData = await res.json()
            if (!res.ok) throw new Error(resData.error || "Upload failed")
            setFormData(prev => ({ ...prev, logo: resData.url }))
            toast.success("Logo uploaded and processed successfully")
        } catch (error: any) {
            toast.error(error.message)
        } finally {
            setIsUploading(false)
        }
    }

    const handleSave = async () => {
        setIsSaving(true)
        try {
            const payload = {
                SODTYPE: Number(formData.SODTYPE || 13),
                TRDR: Number(formData.TRDR || 0),
                CODE: formData.CODE,
                NAME: formData.NAME,
                AFM: formData.AFM,
                ADDRESS: formData.ADDRESS,
                ZIP: formData.ZIP,
                CITY: formData.CITY,
                PHONE01: formData.PHONE01,
                EMAIL: formData.EMAIL,
                website: formData.website,
                registDate: formData.registDate,
                legalStatus: formData.legalStatus,
                numEmployees: formData.numEmployees ? Number(formData.numEmployees) : null,
                displayAtCarousel: formData.displayAtCarousel,
                logo: formData.logo,
                kads: formData.kads,
            }

            if (editingCustomer) {
                const updated = await updateCustomer(editingCustomer.id, payload)
                setData(data.map(c => c.id === updated.id ? updated as any : c))
                toast.success("Customer updated")
            } else {
                const created = await createCustomer(payload)
                setData([created as any, ...data])
                toast.success("Customer created")
            }
            setIsDialogOpen(false)
        } catch (err: any) {
            toast.error(err.message || "An error occurred")
        } finally {
            setIsSaving(false)
        }
    }

    const handleDelete = async (id: string, e?: React.MouseEvent) => {
        e?.stopPropagation()
        if (!confirm("Are you sure you want to delete this customer?")) return
        try {
            await deleteCustomer(id)
            setData(data.filter(c => c.id !== id))
            toast.success("Customer deleted")
        } catch (err) {
            toast.error("Failed to delete")
        }
    }

    const handleGetKAD = async (customer: Customer, e?: React.MouseEvent) => {
        e?.stopPropagation()
        if (!customer.AFM) {
            toast.error("Customer does not have an AFM saved.")
            return
        }
        try {
            toast.loading("Fetching KAD...", { id: `kad-${customer.id}` })
            const updated = await getKAD(customer.id, customer.AFM)
            setData(data.map(c => c.id === updated.id ? updated as any : c))
            toast.success("KADs updated successfully", { id: `kad-${customer.id}` })
        } catch (error: any) {
            toast.error(error.message, { id: `kad-${customer.id}` })
        }
    }

    const openEdit = (customer: Customer, e?: React.MouseEvent) => {
        e?.stopPropagation()
        setEditingCustomer(customer)
        setFormData({
            SODTYPE: customer.SODTYPE,
            TRDR: customer.TRDR,
            CODE: customer.CODE,
            NAME: customer.NAME,
            AFM: customer.AFM || "",
            ADDRESS: customer.ADDRESS || "",
            ZIP: (customer as any).ZIP || "",
            CITY: customer.CITY || "",
            PHONE01: customer.PHONE01 || "",
            EMAIL: customer.EMAIL || "",
            website: customer.website || "",
            registDate: customer.registDate || "",
            legalStatus: customer.legalStatus || "",
            numEmployees: customer.numEmployees?.toString() || "",
            displayAtCarousel: customer.displayAtCarousel,
            removeBackgroundLogo: true,
            logo: customer.logo || "",
            kads: customer.kads || [],
        })
        setIsDialogOpen(true)
    }

    const openCreate = () => {
        setEditingCustomer(null)
        setFormData({
            SODTYPE: 13,
            TRDR: Math.floor(Math.random() * 1000000),
            CODE: `CMD${Math.floor(Math.random() * 1000)}`,
            NAME: "",
            AFM: "",
            ADDRESS: "",
            ZIP: "",
            CITY: "",
            PHONE01: "",
            EMAIL: "",
            website: "",
            registDate: "",
            legalStatus: "",
            numEmployees: "",
            displayAtCarousel: false,
            removeBackgroundLogo: true,
            logo: "",
            kads: [],
        })
        setIsDialogOpen(true)
    }

    const columns: ColumnDef<Customer>[] = [
        {
            id: "expander",
            header: () => null,
            cell: ({ row }) => (
                <Button
                    variant="ghost"
                    className="p-0 h-6 w-6"
                    onClick={(e) => {
                        e.stopPropagation()
                        row.toggleExpanded()
                    }}
                >
                    <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${row.getIsExpanded() ? 'rotate-90' : ''}`} />
                </Button>
            ),
            enableSorting: false,
            enableHiding: false,
        },
        {
            id: "avatar",
            header: "",
            cell: ({ row }) => {
                const logoInfo = row.original.logo
                const initials = row.original.NAME?.substring(0, 2)?.toUpperCase() || "??"
                return (
                    <Avatar className="h-8 w-8 object-contain">
                        {logoInfo ? <AvatarImage src={logoInfo} className="object-contain" /> : <AvatarFallback>{initials}</AvatarFallback>}
                    </Avatar>
                )
            },
            enableSorting: false,
            enableHiding: false,
        },
        {
            accessorKey: "NAME",
            header: ({ column }) => {
                return (
                    <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                        Name <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
            cell: ({ row }) => <div className="font-medium text-primary">{row.getValue("NAME")}</div>,
        },
        {
            accessorKey: "CODE",
            header: "Code",
            cell: ({ row }) => <div>{row.getValue("CODE")}</div>,
        },
        {
            accessorKey: "AFM",
            header: "AFM",
            cell: ({ row }) => <div>{row.getValue("AFM")}</div>,
        },
        {
            accessorKey: "displayAtCarousel",
            header: "Carousel",
            cell: ({ row }) => <div>{row.getValue("displayAtCarousel") ? "Yes" : "No"}</div>,
        },
        {
            id: "actions",
            enableHiding: false,
            cell: ({ row }) => {
                const customer = row.original
                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild onClick={e => e.stopPropagation()}>
                            <Button variant="outline" className="h-8 flex items-center gap-1 bg-slate-800 text-slate-50 border-slate-700 hover:bg-slate-700 hover:text-white">
                                Actions <ChevronDown className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-slate-800 text-slate-50 border-slate-700">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem onClick={(e) => { e.stopPropagation(); navigator.clipboard.writeText(customer.id); }} className="focus:bg-slate-700 focus:text-white">
                                Copy ID
                            </DropdownMenuItem>
                            <DropdownMenuSeparator className="bg-slate-700" />
                            <DropdownMenuItem onClick={(e) => handleGetKAD(customer, e)} className="text-green-400 focus:bg-slate-700 focus:text-green-300">Get KAD</DropdownMenuItem>
                            <DropdownMenuItem onClick={(e) => openEdit(customer, e)} className="focus:bg-slate-700 focus:text-white">Edit Customer</DropdownMenuItem>
                            <DropdownMenuItem onClick={(e) => handleDelete(customer.id, e)} className="text-red-400 focus:bg-slate-700 focus:text-red-300">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },
    ]

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        onExpandedChange: setExpanded,
        getExpandedRowModel: getExpandedRowModel(),
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
            expanded,
        },
    })

    return (
        <div className="w-full">
            <div className="flex items-center pb-4">
                <Input
                    placeholder="Filter by name..."
                    value={(table.getColumn("NAME")?.getFilterValue() as string) ?? ""}
                    onChange={(event) => table.getColumn("NAME")?.setFilterValue(event.target.value)}
                    className="max-w-sm mr-2"
                />
                <Button onClick={openCreate} className="ms-2">
                    <Plus className="w-4 h-4 mr-2" /> Add Customer
                </Button>
            </div>
            <div className="rounded-md border bg-white">
                <Table>
                    <TableHeader className="bg-muted/50">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(header.column.columnDef.header, header.getContext())}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <React.Fragment key={row.id}>
                                    <TableRow
                                        className="cursor-pointer hover:bg-muted/50 transition-colors"
                                        data-state={row.getIsSelected() && "selected"}
                                        onClick={() => row.toggleExpanded()}
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                    {row.getIsExpanded() && (
                                        <TableRow className="bg-muted/30 hover:bg-muted/30">
                                            <TableCell colSpan={columns.length} className="p-4 border-b border-t shadow-inner">
                                                <Tabs defaultValue="main" className="w-full">
                                                    <TabsList className="mb-4">
                                                        <TabsTrigger value="main">Main Data</TabsTrigger>
                                                        <TabsTrigger value="kads">KAD ({row.original.kads?.length || 0})</TabsTrigger>
                                                    </TabsList>
                                                    <TabsContent value="main">
                                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8 text-sm text-muted-foreground">
                                                            <div>
                                                                <strong className="block text-foreground mb-1">Company Details</strong>
                                                                <div>TRDR DB ID: {row.original.TRDR}</div>
                                                                <div>SODTYPE: {row.original.SODTYPE}</div>
                                                                <div>CITY: {row.original.CITY || "N/A"}</div>
                                                            </div>
                                                            <div>
                                                                <strong className="block text-foreground mb-1">Contact Details</strong>
                                                                <div>Email: {row.original.EMAIL || "N/A"}</div>
                                                                <div>Phone: {row.original.PHONE01 || "N/A"}</div>
                                                                <div>Website: {row.original.website || "N/A"}</div>
                                                                <div>Status: {row.original.legalStatus || "N/A"}</div>
                                                                <div>Reg. Date: {row.original.registDate || "N/A"}</div>
                                                                <div>Employees: {row.original.numEmployees || "N/A"}</div>
                                                            </div>
                                                            <div>
                                                                <strong className="block text-foreground mb-1">Location Details</strong>
                                                                <div>Address: {row.original.ADDRESS || "N/A"}</div>
                                                            </div>
                                                            <div className="flex items-center justify-end">
                                                                <Button variant="outline" size="sm" onClick={(e) => openEdit(row.original, e)}>Edit Customer details</Button>
                                                            </div>
                                                        </div>
                                                    </TabsContent>
                                                    <TabsContent value="kads">
                                                        <div className="bg-white rounded-md border text-sm text-foreground overflow-x-auto">
                                                            <table className="w-full">
                                                                <thead className="bg-muted/50 border-b">
                                                                    <tr>
                                                                        <th className="px-4 py-2 text-left font-medium">KAD Code</th>
                                                                        <th className="px-4 py-2 text-left font-medium">Description</th>
                                                                        <th className="px-4 py-2 text-left font-medium">Type</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {(row.original.kads && row.original.kads.length > 0) ? row.original.kads.map((k, i) => (
                                                                        <tr key={i} className="border-b last:border-0 hover:bg-muted/30">
                                                                            <td className="px-4 py-2 font-mono text-xs">{k.firm_act_code}</td>
                                                                            <td className="px-4 py-2">{k.firm_act_descr}</td>
                                                                            <td className="px-4 py-2">
                                                                                {k.firm_act_kind ? (
                                                                                    <Badge className="bg-green-600 hover:bg-green-700">PRIMARY YES</Badge>
                                                                                ) : (
                                                                                    <Badge variant="outline" className="text-muted-foreground border-muted-foreground">SECONDARY</Badge>
                                                                                )}
                                                                            </td>
                                                                        </tr>
                                                                    )) : (
                                                                        <tr>
                                                                            <td colSpan={3} className="px-4 py-4 text-center text-muted-foreground">No KADs found for this customer.</td>
                                                                        </tr>
                                                                    )}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </TabsContent>
                                                </Tabs>
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </React.Fragment>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground">
                    Total {table.getFilteredRowModel().rows.length} row(s).
                </div>
                <div className="space-x-2">
                    <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                        Previous
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                        Next
                    </Button>
                </div>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto w-full md:p-8 bg-background text-foreground">
                    <DialogHeader>
                        <DialogTitle className="text-2xl text-foreground">{editingCustomer ? "Edit Customer" : "Add Customer"}</DialogTitle>
                        <DialogDescription className="text-muted-foreground">Submit the form below to save customer changes.</DialogDescription>
                    </DialogHeader>

                    <div className="grid gap-6 py-4">
                        <section className="bg-muted/50 p-4 border rounded-md">
                            <h3 className="font-semibold text-sm mb-4 text-foreground">Fast VAT Autofill</h3>
                            <div className="grid gap-2">
                                <Label htmlFor="afm" className="text-foreground font-bold">AFM</Label>
                                <div className="flex gap-2">
                                    <Input
                                        id="afm" value={formData.AFM}
                                        onChange={(e) => setFormData({ ...formData, AFM: e.target.value })}
                                        placeholder="e.g 801946016"
                                        className="bg-background"
                                    />
                                    <Button onClick={handleFetchVat} disabled={isSearchingVat || !formData.AFM} type="button" className="shrink-0">
                                        {isSearchingVat ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Search className="h-4 w-4 mr-2" />} Get Info
                                    </Button>
                                </div>
                                <span className="text-xs text-muted-foreground">Provide an AFM and click button to auto-fetch related fields down below.</span>
                            </div>
                        </section>

                        <div className="grid gap-2 mt-2">
                            <Label htmlFor="name" className="text-foreground font-bold">Company Name</Label>
                            <Input id="name" value={formData.NAME} onChange={(e) => setFormData({ ...formData, NAME: e.target.value })} />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="code" className="text-foreground font-bold">CODE</Label>
                                <Input id="code" value={formData.CODE} onChange={(e) => setFormData({ ...formData, CODE: e.target.value })} />
                            </div>
                            <div className="grid gap-2 flex-1">
                                <Label htmlFor="phone" className="text-foreground font-bold">Phone</Label>
                                <Input id="phone" value={formData.PHONE01} onChange={(e) => setFormData({ ...formData, PHONE01: e.target.value })} />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="sodtype" className="text-foreground font-bold">SODTYPE</Label>
                                <Input id="sodtype" type="number" value={formData.SODTYPE} onChange={(e) => setFormData({ ...formData, SODTYPE: Number(e.target.value) })} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="trdr" className="text-foreground font-bold">TRDR DB ID</Label>
                                <Input id="trdr" type="number" value={formData.TRDR} onChange={(e) => setFormData({ ...formData, TRDR: Number(e.target.value) })} />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-[1fr_120px] gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="address" className="text-foreground font-bold">Address</Label>
                                <Input id="address" value={formData.ADDRESS} onChange={(e) => setFormData({ ...formData, ADDRESS: e.target.value })} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="zip" className="text-foreground font-bold">ZIP</Label>
                                <Input id="zip" value={formData.ZIP} onChange={(e) => setFormData({ ...formData, ZIP: e.target.value })} />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="city" className="text-foreground font-bold">City</Label>
                                <Input id="city" value={formData.CITY} onChange={(e) => setFormData({ ...formData, CITY: e.target.value })} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email" className="text-foreground font-bold">Email</Label>
                                <Input id="email" type="email" value={formData.EMAIL} onChange={(e) => setFormData({ ...formData, EMAIL: e.target.value })} />
                            </div>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="website" className="text-foreground font-bold">Website</Label>
                            <Input id="website" value={formData.website} onChange={(e) => setFormData({ ...formData, website: e.target.value })} placeholder="https://" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_120px] gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="registDate" className="text-foreground font-bold">Register Date</Label>
                                <Input id="registDate" value={formData.registDate} onChange={(e) => setFormData({ ...formData, registDate: e.target.value })} placeholder="e.g. 2022-10-25" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="legalStatus" className="text-foreground font-bold">Legal Status</Label>
                                <Input id="legalStatus" value={formData.legalStatus} onChange={(e) => setFormData({ ...formData, legalStatus: e.target.value })} placeholder="e.g. EE" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="numEmployees" className="text-foreground font-bold">Employees</Label>
                                <Input id="numEmployees" type="number" value={formData.numEmployees} onChange={(e) => setFormData({ ...formData, numEmployees: e.target.value })} placeholder="e.g. 5" />
                            </div>
                        </div>

                        <div className="p-4 border rounded-md">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="carousel" checked={formData.displayAtCarousel} onCheckedChange={(checked) => setFormData({ ...formData, displayAtCarousel: checked as boolean })} />
                                <Label htmlFor="carousel" className="text-sm font-medium leading-none cursor-pointer text-foreground">
                                    Display Logo in Frontend Carousel
                                </Label>
                            </div>
                        </div>

                        <div className="grid gap-2 mt-4 p-4 border border-dashed rounded-md bg-muted/30">
                            <Label htmlFor="logo" className="text-foreground font-bold">Upload Logo (Auto 300x200 padded via Claid)</Label>

                            <div className="flex items-center space-x-2 my-2">
                                <Checkbox
                                    id="removeBg"
                                    checked={formData.removeBackgroundLogo}
                                    onCheckedChange={(checked) => setFormData({ ...formData, removeBackgroundLogo: checked as boolean })}
                                />
                                <Label htmlFor="removeBg" className="text-sm font-medium leading-none cursor-pointer text-foreground">
                                    AI Foreground Extraction (Remove Background) during upload
                                </Label>
                            </div>

                            <Input id="logo" type="file" onChange={handleUploadLogo} disabled={isUploading} accept="image/*" className="bg-background mt-2" />
                            {isUploading && <span className="text-xs text-primary flex items-center gap-1 mt-2 font-medium"><Loader2 className="w-3 h-3 animate-spin" /> Uploading & applying transformations via Claid.ai...</span>}
                            {formData.logo && (
                                <div className="mt-4 border rounded-md p-4 flex justify-center w-fit relative overflow-hidden"
                                    style={{
                                        backgroundImage: 'linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee), linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee)',
                                        backgroundSize: '20px 20px',
                                        backgroundPosition: '0 0, 10px 10px',
                                        backgroundColor: '#fff'
                                    }}>
                                    <img src={formData.logo} alt="Logo preview" className="object-contain" style={{ width: '300px', height: '200px' }} />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex justify-end pt-4 border-t gap-2">
                        <Button variant="secondary" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                        <Button onClick={handleSave} disabled={isSaving || isUploading} className="min-w-32">
                            {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Save Customer"}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
