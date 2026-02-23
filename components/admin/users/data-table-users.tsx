"use client"

import * as React from "react"
import {
    ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable,
} from "@tanstack/react-table"
import { ChevronDown, Plus, RefreshCcw, User as UserIcon, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { createUser, updateUser, deleteUser } from "@/app/lib/actions/user"

export type User = {
    id: string
    firstName: string | null
    lastName: string | null
    email: string | null
    role: string
    image: string | null
    createdAt: Date
}

export function DataTableUsers({ data: initialData }: { data: User[] }) {
    const [data, setData] = React.useState<User[]>(initialData || [])

    const [isDialogOpen, setIsDialogOpen] = React.useState(false)
    const [editingUser, setEditingUser] = React.useState<User | null>(null)
    const [isSaving, setIsSaving] = React.useState(false)

    // Form states
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "USER",
        image: ""
    })

    const openEdit = (user?: User) => {
        if (user) {
            setEditingUser(user)
            setFormData({
                firstName: user.firstName || "",
                lastName: user.lastName || "",
                email: user.email || "",
                password: "", // never show password hash
                role: user.role,
                image: user.image || ""
            })
        } else {
            setEditingUser(null)
            setFormData({
                firstName: "", lastName: "", email: "", password: "", role: "USER", image: ""
            })
        }
        setIsDialogOpen(true)
    }

    const handleSave = async () => {
        setIsSaving(true)
        try {
            if (editingUser) {
                const res: any = await updateUser(editingUser.id, formData)
                if (res.error) throw new Error(res.error)
                setData(data.map(d => d.id === res.id ? res : d))
                toast.success("User updated")
            } else {
                if (!formData.password) throw new Error("Password is required for new users!")
                if (!formData.email) throw new Error("Email is required!")
                const res: any = await createUser(formData)
                if (res.error) throw new Error(res.error)
                setData([res, ...data])
                toast.success("User created")
            }
            setIsDialogOpen(false)
        } catch (err: any) {
            toast.error(err.message)
        } finally {
            setIsSaving(false)
        }
    }

    const handleAvatarUpload = async (file: File | null) => {
        if (!file) return
        toast.loading("Uploading avatar via Bunny CDN...", { id: "avatar" })
        try {
            const uploadData = new FormData()
            uploadData.append("file", file)
            const res = await fetch("/api/admin/articles/upload", { method: "POST", body: uploadData })
            const d = await res.json()
            if (!res.ok) throw new Error(d.error)
            setFormData(prev => ({ ...prev, image: d.url }))
            toast.success("Avatar converted to WebP & attached!", { id: "avatar" })
        } catch (error: any) {
            toast.error(error.message, { id: "avatar" })
        }
    }

    const columns: ColumnDef<User>[] = [
        {
            id: "avatar",
            header: "",
            cell: ({ row }) => {
                const initials = `${row.original.firstName?.[0] || ""}${row.original.lastName?.[0] || ""}`.trim() || "?"
                return (
                    <Avatar className="h-8 w-8">
                        {row.original.image ? <AvatarImage src={row.original.image} /> : <AvatarFallback className="bg-primary text-primary-foreground font-bold">{initials}</AvatarFallback>}
                    </Avatar>
                )
            },
            enableSorting: false,
        },
        {
            accessorKey: "firstName",
            header: "First Name",
            cell: ({ row }) => <div className="font-medium text-foreground">{row.getValue("firstName")}</div>,
        },
        {
            accessorKey: "lastName",
            header: "Last Name",
            cell: ({ row }) => <div className="font-medium text-foreground">{row.getValue("lastName")}</div>,
        },
        {
            accessorKey: "email",
            header: "Email",
            cell: ({ row }) => <div className="text-muted-foreground">{row.getValue("email")}</div>,
        },
        {
            accessorKey: "role",
            header: "Role",
            cell: ({ row }) => (
                <Badge variant={row.original.role === "ADMIN" ? "default" : "secondary"}>
                    {row.original.role}
                </Badge>
            )
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
                            <DropdownMenuItem className="cursor-pointer" onClick={() => openEdit(row.original)}>Edit User</DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer text-red-500" onClick={async () => {
                                if (confirm("Delete user forever?")) {
                                    await deleteUser(row.original.id)
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
                    <Plus className="mr-2 h-4 w-4" /> Add User
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
                                    No users found.
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
                <DialogContent className="max-w-md w-full bg-background text-foreground md:p-8">
                    <DialogHeader>
                        <DialogTitle className="text-2xl text-foreground">{editingUser ? "Edit User Profile" : "Create New User"}</DialogTitle>
                    </DialogHeader>

                    <div className="grid gap-4 py-4">
                        <div className="flex flex-col items-center justify-center space-y-3 pb-4 border-b">
                            <Avatar className="h-16 w-16 shadow-md border-2 border-primary/20">
                                {formData.image ? <AvatarImage src={formData.image} /> : <AvatarFallback className="bg-primary text-primary-foreground font-bold text-xl">{(formData.firstName?.[0] || "") + (formData.lastName?.[0] || "") || "?"}</AvatarFallback>}
                            </Avatar>
                            <Label className="cursor-pointer bg-secondary text-secondary-foreground hover:bg-secondary/80 px-3 py-1.5 rounded-md text-xs font-semibold transition-colors">
                                Change Avatar (WebP Auto-Convert)
                                <input type="file" className="hidden" accept="image/*" onChange={(e) => handleAvatarUpload(e.target.files?.[0] || null)} />
                            </Label>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label className="text-foreground font-bold">First Name</Label>
                                <Input className="bg-background text-foreground border-input mt-1" value={formData.firstName} onChange={e => setFormData({ ...formData, firstName: e.target.value })} />
                            </div>
                            <div>
                                <Label className="text-foreground font-bold">Last Name</Label>
                                <Input className="bg-background text-foreground border-input mt-1" value={formData.lastName} onChange={e => setFormData({ ...formData, lastName: e.target.value })} />
                            </div>
                        </div>

                        <div>
                            <Label className="text-foreground font-bold">Email</Label>
                            <Input className="bg-background text-foreground border-input mt-1" type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                        </div>

                        <div>
                            <Label className="text-foreground font-bold">Password {editingUser && <span className="text-xs text-muted-foreground font-normal ml-2">(Leave blank to keep current)</span>}</Label>
                            <Input className="bg-background text-foreground border-input mt-1" type="password" value={formData.password} onChange={e => setFormData({ ...formData, password: e.target.value })} />
                        </div>

                        <div>
                            <Label className="text-foreground font-bold">System Role</Label>
                            <Select value={formData.role} onValueChange={(val) => setFormData({ ...formData, role: val })}>
                                <SelectTrigger className="bg-background text-foreground border-input">
                                    <SelectValue placeholder="Select a role" />
                                </SelectTrigger>
                                <SelectContent className="bg-background text-foreground">
                                    <SelectItem value="USER">Standard User (USER)</SelectItem>
                                    <SelectItem value="ADMIN">Administrator (ADMIN)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                    </div>

                    <div className="flex justify-end pt-4 border-t">
                        <Button disabled={isSaving} onClick={handleSave}>
                            {isSaving ? <RefreshCcw className="h-4 w-4 animate-spin mr-2" /> : "Save User"}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
