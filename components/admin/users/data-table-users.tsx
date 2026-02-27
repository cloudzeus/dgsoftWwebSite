"use client"

import * as React from "react"
import { ColumnDef } from "@tanstack/react-table"
import {
    ChevronDown,
    Plus,
    RefreshCcw,
    User as UserIcon,
    Trash2,
    ArrowUpDown,
    ChevronRight,
    Shield,
    Mail,
    Calendar,
    CloudUpload,
    Fingerprint,
    Search,
    UserCheck,
    UserX,
    BadgeCheck
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { createUser, updateUser, deleteUser } from "@/app/lib/actions/user"
import { GenericDataTable } from "../shared/generic-data-table"

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

    const [formData, setFormData] = React.useState({
        firstName: "", lastName: "", email: "", password: "", role: "USER", image: ""
    })

    const openEdit = (user?: User) => {
        if (user) {
            setEditingUser(user)
            setFormData({
                firstName: user.firstName || "", lastName: user.lastName || "", email: user.email || "",
                password: "", role: user.role, image: user.image || ""
            })
        } else {
            setEditingUser(null)
            setFormData({ firstName: "", lastName: "", email: "", password: "", role: "USER", image: "" })
        }
        setIsDialogOpen(true)
    }

    const handleSave = async () => {
        setIsSaving(true)
        try {
            if (editingUser) {
                const res = await updateUser(editingUser.id, formData)
                setData(data.map(d => d.id === (res as any).id ? res as any : d))
                toast.success("User profile synchronized")
            } else {
                if (!formData.password) throw new Error("A secure password is required")
                const res = await createUser(formData)
                setData([res as any, ...data])
                toast.success("Identity created successfully")
            }
            setIsDialogOpen(false)
        } catch (err: any) { toast.error(err.message) }
        finally { setIsSaving(false) }
    }

    const handleAvatarUpload = async (file: File | null) => {
        if (!file) return
        const tid = toast.loading("Processing biometric avatar...")
        try {
            const upData = new FormData(); upData.append("file", file);
            const res = await fetch("/api/admin/articles/upload", { method: "POST", body: upData })
            const d = await res.json()
            if (!res.ok) throw new Error(d.error)
            setFormData(prev => ({ ...prev, image: d.url }))
            toast.success("Avatar Optimized", { id: tid })
        } catch (error: any) { toast.error(error.message, { id: tid }) }
    }

    const columns: ColumnDef<User>[] = [
        {
            id: "identity",
            header: "",
            cell: ({ row }) => (
                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-zinc-800 shadow-xl overflow-hidden bg-zinc-100">
                    <Avatar className="w-full h-full">
                        {row.original.image && <AvatarImage src={row.original.image} className="object-cover" />}
                        <AvatarFallback className="bg-zinc-800 text-white font-black text-[10px]">{(row.original.firstName?.[0] || "") + (row.original.lastName?.[0] || "")}</AvatarFallback>
                    </Avatar>
                </div>
            ),
            size: 60
        },
        {
            accessorKey: "firstName",
            header: ({ column }) => (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} className="font-black text-[10px] uppercase tracking-widest p-0 hover:bg-transparent">
                    Authenticated User <ArrowUpDown className="ml-2 h-3 w-3" />
                </Button>
            ),
            cell: ({ row }) => (
                <div className="flex flex-col">
                    <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100">{row.original.firstName} {row.original.lastName}</span>
                    <span className="text-[10px] font-mono text-zinc-400 lowercase">{row.original.email}</span>
                </div>
            )
        },
        {
            accessorKey: "role",
            header: "Security Role",
            cell: ({ row }) => (
                row.original.role === "ADMIN" ? (
                    <Badge className="bg-indigo-500/10 text-indigo-600 border-none text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full"><Shield className="w-3 h-3 mr-1" /> Administrator</Badge>
                ) : (
                    <Badge variant="outline" className="text-zinc-400 border-zinc-200 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Standard User</Badge>
                )
            )
        },
        {
            id: "actions",
            cell: ({ row }) => (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild onClick={e => e.stopPropagation()}>
                        <Button variant="outline" size="sm" className="h-9 bg-zinc-800 text-white border-none font-bold hover:bg-zinc-700 rounded-xl">
                            Actions <ChevronDown className="h-4 w-4 ml-1" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[180px]">
                        <DropdownMenuItem onClick={() => openEdit(row.original)}><UserCheck className="w-4 h-4 mr-2" /> Modify Profile</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-500" onClick={async () => {
                            if (confirm("Revoke access and delete user?")) {
                                await deleteUser(row.original.id);
                                setData(data.filter(d => d.id !== row.original.id));
                            }
                        }}><UserX className="w-4 h-4 mr-2" /> Remove Identity</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    ]

    const renderExpandedRow = (user: User) => (
        <div className="py-10 px-8 bg-[#f8fafc] dark:bg-zinc-950/50 rounded-[40px] border border-zinc-200 dark:border-zinc-800 shadow-inner grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-3"><Fingerprint className="w-4 h-4" /> Identity Intelligence</h4>
                <div className="bg-white dark:bg-zinc-900 p-8 rounded-[32px] border shadow-sm flex items-center gap-6">
                    <Avatar className="h-24 w-24 border-4 border-white dark:border-zinc-800 shadow-2xl">
                        {user.image && <AvatarImage src={user.image} className="object-cover" />}
                        <AvatarFallback className="text-2xl font-black bg-zinc-800 text-white">{(user.firstName?.[0] || "") + (user.lastName?.[0] || "")}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <p className="text-2xl font-black text-zinc-800 dark:text-zinc-100 tracking-tighter">{user.firstName} {user.lastName}</p>
                        <div className="flex items-center gap-2">
                            <BadgeCheck className="w-4 h-4 text-emerald-500" />
                            <span className="text-xs font-bold text-zinc-400 italic">verified account</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
                <div className="bg-white dark:bg-zinc-900 p-8 rounded-[32px] border shadow-sm">
                    <h5 className="text-[10px] font-black text-zinc-300 uppercase tracking-widest mb-4 flex items-center gap-2"><Mail className="w-4 h-4" /> Primary Inbox</h5>
                    <p className="text-sm font-bold text-zinc-700 dark:text-zinc-300 truncate">{user.email}</p>
                </div>
                <div className="bg-white dark:bg-zinc-900 p-8 rounded-[32px] border shadow-sm">
                    <h5 className="text-[10px] font-black text-zinc-300 uppercase tracking-widest mb-4 flex items-center gap-2"><Calendar className="w-4 h-4" /> Enrolled On</h5>
                    <p className="text-sm font-bold text-zinc-700 dark:text-zinc-300">{new Date(user.createdAt).toLocaleDateString()}</p>
                </div>
            </div>
        </div>
    )

    return (
        <div className="space-y-4">
            <GenericDataTable
                columns={columns} data={data} searchPlaceholder="Locate user by identity or email..." searchColumn="firstName"
                onAddClick={() => openEdit()} addButtonLabel="Enroll User"
                renderExpandedRow={renderExpandedRow}
            />

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-xl">
                    <DialogHeader className="bg-zinc-800 p-10">
                        <DialogTitle className="text-3xl font-black text-white tracking-tighter flex items-center gap-3"><UserIcon className="w-8 h-8 text-indigo-400" /> {editingUser ? 'Adjust Identity Mapping' : 'Initialize New Account'}</DialogTitle>
                        <DialogDescription className="text-zinc-400 font-medium text-base">Configure security roles and biometric profile identifiers for this user.</DialogDescription>
                    </DialogHeader>

                    <div className="p-10 bg-[#f8fafc] dark:bg-zinc-950 max-h-[70vh] overflow-y-auto scrollbar-hide">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <div className="bg-white dark:bg-zinc-900 p-10 rounded-[32px] border border-dashed border-zinc-200 text-center">
                                    <div className="relative w-32 h-32 mx-auto mb-8">
                                        <Avatar className="w-full h-full border-4 border-white dark:border-zinc-800 shadow-2xl">
                                            {formData.image && <AvatarImage src={formData.image} className="object-cover" />}
                                            <AvatarFallback className="bg-zinc-100 text-zinc-300"><UserIcon className="w-12 h-12" /></AvatarFallback>
                                        </Avatar>
                                        <Label className="absolute -bottom-2 -right-2 w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-indigo-700 shadow-xl shadow-indigo-600/20 active:scale-90 transition-all">
                                            <CloudUpload className="w-5 h-5 text-white" />
                                            <input type="file" className="hidden" accept="image/*" onChange={e => handleAvatarUpload(e.target.files?.[0] || null)} />
                                        </Label>
                                    </div>
                                    <p className="text-[10px] font-black uppercase text-zinc-400">Profile Identifier</p>
                                </div>

                                <div className="space-y-4">
                                    <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Security Clearance Level</Label>
                                    <Select value={formData.role} onValueChange={(val) => setFormData({ ...formData, role: val })}>
                                        <SelectTrigger className="h-14 rounded-2xl border-zinc-200 shadow-sm bg-white font-bold">
                                            <SelectValue placeholder="Define Access Scope" />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-2xl shadow-2xl">
                                            <SelectItem value="USER" className="h-12">Standard User – Limited Access</SelectItem>
                                            <SelectItem value="ADMIN" className="h-12">Administrator – Full Scope Access</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label className="text-[10px] font-black uppercase text-zinc-400">Given Name</Label>
                                        <Input className="h-12 rounded-xl" value={formData.firstName} onChange={e => setFormData({ ...formData, firstName: e.target.value })} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-[10px] font-black uppercase text-zinc-400">Family Name</Label>
                                        <Input className="h-12 rounded-xl" value={formData.lastName} onChange={e => setFormData({ ...formData, lastName: e.target.value })} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-black uppercase text-zinc-400">Authentication Email</Label>
                                    <Input type="email" className="h-12 rounded-xl font-medium" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-black uppercase text-zinc-400">Secure Access Token (Password)</Label>
                                    <Input type="password" placeholder={editingUser ? "••••••••" : "Define secret key..."} className="h-12 rounded-xl font-mono" value={formData.password} onChange={e => setFormData({ ...formData, password: e.target.value })} />
                                    {editingUser && <p className="text-[9px] text-zinc-400 font-medium">Clear identifier only if you wish to reset current password.</p>}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-10 border-t bg-white dark:bg-zinc-950 flex justify-end gap-4 rounded-b-[40px]">
                        <Button variant="ghost" onClick={() => setIsDialogOpen(false)} className="font-black text-xs uppercase tracking-[0.2em] text-zinc-400">Cancel</Button>
                        <Button disabled={isSaving} onClick={handleSave} className="bg-zinc-800 text-white font-black text-xs uppercase tracking-widest h-14 px-12 rounded-[20px] shadow-xl hover:bg-zinc-900 transition-all active:scale-95">
                            {isSaving ? <RefreshCcw className="w-5 h-5 animate-spin" /> : "Provision Identity"}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
