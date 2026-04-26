"use client"

import * as React from "react"
import { ColumnDef } from "@tanstack/react-table"
import {
    ChevronDown,
    RefreshCcw,
    User as UserIcon,
    Trash2,
    ArrowUpDown,
    Shield,
    Mail,
    Calendar,
    CloudUpload,
    Fingerprint,
    UserCheck,
    UserX,
    BadgeCheck
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
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
                toast.success("Ο χρήστης ενημερώθηκε")
            } else {
                if (!formData.password) throw new Error("Ο κωδικός είναι υποχρεωτικός")
                const res = await createUser(formData)
                setData([res as any, ...data])
                toast.success("Ο χρήστης δημιουργήθηκε")
            }
            setIsDialogOpen(false)
        } catch (err: any) { toast.error(err.message) }
        finally { setIsSaving(false) }
    }

    const handleAvatarUpload = async (file: File | null) => {
        if (!file) return
        const tid = toast.loading("Μεταφόρτωση φωτογραφίας…")
        try {
            const upData = new FormData(); upData.append("file", file);
            const res = await fetch("/api/admin/articles/upload", { method: "POST", body: upData })
            const d = await res.json()
            if (!res.ok) throw new Error(d.error)
            setFormData(prev => ({ ...prev, image: d.url }))
            toast.success("Η φωτογραφία μεταφορτώθηκε", { id: tid })
        } catch (error: any) { toast.error(error.message, { id: tid }) }
    }

    const columns: ColumnDef<User>[] = [
        {
            id: "avatar",
            header: "",
            cell: ({ row }) => (
                <div className="w-9 h-9 rounded-lg overflow-hidden bg-[#F3F2F1] border border-[#EDEBE9] p-0.5 flex items-center justify-center shrink-0">
                    <Avatar className="w-full h-full">
                        {row.original.image && <AvatarImage src={row.original.image} className="object-cover" />}
                        <AvatarFallback className="bg-[#F3F2F1] text-[#605E5C] font-semibold text-[10px]">
                            {(row.original.firstName?.[0] || "") + (row.original.lastName?.[0] || "")}
                        </AvatarFallback>
                    </Avatar>
                </div>
            ),
            size: 48
        },
        {
            accessorKey: "firstName",
            header: ({ column }) => (
                <button
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="flex items-center gap-1 text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide hover:text-[#201F1E]"
                >
                    Χρήστης <ArrowUpDown className="h-3 w-3" />
                </button>
            ),
            cell: ({ row }) => (
                <div>
                    <p className="font-semibold text-sm text-[#201F1E] leading-tight">
                        {row.original.firstName} {row.original.lastName}
                    </p>
                    <p className="text-[11px] text-[#A19F9D] flex items-center gap-1 mt-0.5">
                        <Mail className="w-2.5 h-2.5 shrink-0" />
                        {row.original.email || "—"}
                    </p>
                </div>
            )
        },
        {
            accessorKey: "role",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Ρόλος</span>,
            cell: ({ row }) => (
                row.original.role === "ADMIN" ? (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-[#EFF6FC] text-[#0078D4] border border-[#C7E0F4]">
                        <Shield className="w-3 h-3 shrink-0" /> Διαχειριστής
                    </span>
                ) : (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F3F2F1] text-[#605E5C] border border-[#EDEBE9]">
                        <UserIcon className="w-3 h-3 shrink-0" /> Χρήστης
                    </span>
                )
            )
        },
        {
            id: "joined",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Εγγράφηκε</span>,
            cell: ({ row }) => (
                <span className="text-xs text-[#605E5C] flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#A19F9D] shrink-0" />
                    {new Date(row.original.createdAt).toLocaleDateString()}
                </span>
            )
        },
        {
            id: "actions",
            cell: ({ row }) => (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild onClick={e => e.stopPropagation()}>
                        <Button variant="outline" size="sm" className="h-8 px-3 text-[12px] font-semibold text-[#201F1E] border-[#C8C6C4] hover:bg-[#EDEBE9] hover:border-[#A19F9D] rounded gap-1">
                            Ενέργειες <ChevronDown className="h-3.5 w-3.5 text-[#A19F9D]" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-44">
                        <DropdownMenuItem onClick={() => openEdit(row.original)} className="text-sm">
                            <UserCheck className="w-3.5 h-3.5 mr-2 text-[#0078D4]" /> Επεξεργασία χρήστη
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            className="text-red-500 text-sm"
                            onClick={async () => {
                                if (confirm("Διαγραφή αυτού του χρήστη;")) {
                                    await deleteUser(row.original.id);
                                    setData(data.filter(d => d.id !== row.original.id));
                                }
                            }}
                        >
                            <UserX className="w-3.5 h-3.5 mr-2" /> Διαγραφή χρήστη
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    ]

    const renderExpandedRow = (user: User) => (
        <div className="mx-4 mb-3 mt-1 rounded-lg border border-[#EDEBE9] bg-[#F3F2F1] overflow-hidden">
            <div className="grid grid-cols-3 divide-x divide-[#EDEBE9]">
                {/* Identity */}
                <div className="p-4 space-y-3 bg-white">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] flex items-center gap-1.5">
                        <Fingerprint className="w-3 h-3" /> Ταυτότητα
                    </p>
                    <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10 border border-[#EDEBE9] shrink-0">
                            {user.image && <AvatarImage src={user.image} className="object-cover" />}
                            <AvatarFallback className="text-sm font-semibold bg-[#F3F2F1] text-[#605E5C]">
                                {(user.firstName?.[0] || "") + (user.lastName?.[0] || "")}
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-sm font-semibold text-[#201F1E] leading-tight">{user.firstName} {user.lastName}</p>
                            <div className="flex items-center gap-1 mt-0.5">
                                <BadgeCheck className="w-3 h-3 text-emerald-500" />
                                <span className="text-[11px] text-[#605E5C]">επαληθευμένος</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Email */}
                <div className="p-4 space-y-3 bg-white">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] flex items-center gap-1.5">
                        <Mail className="w-3 h-3" /> Email
                    </p>
                    <p className="text-sm font-medium text-[#201F1E] truncate">{user.email || "—"}</p>
                </div>

                {/* Joined */}
                <div className="p-4 space-y-3 bg-white">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" /> Εγγράφηκε
                    </p>
                    <p className="text-sm font-medium text-[#201F1E]">{new Date(user.createdAt).toLocaleDateString()}</p>
                    <p className="text-xs text-[#605E5C]">{user.role === "ADMIN" ? "Διαχειριστής" : "Τυπικός Χρήστης"}</p>
                </div>
            </div>
        </div>
    )

    return (
        <div className="space-y-4">
            <GenericDataTable
                columns={columns} data={data} searchPlaceholder="Αναζήτηση με όνομα ή email…" searchColumn="firstName"
                onAddClick={() => openEdit()} addButtonLabel="Προσθήκη Χρήστη"
                renderExpandedRow={renderExpandedRow}
            />

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-2xl p-0 overflow-hidden rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.12),0_2px_6px_rgba(0,0,0,0.08)]">
                    {/* Header */}
                    <DialogHeader className="px-5 py-4 border-b border-[#EDEBE9] bg-white">
                        <div className="flex items-center gap-2.5">
                            <div className="w-9 h-9 rounded-lg bg-[#EFF6FC] border border-[#C7E0F4] flex items-center justify-center shrink-0">
                                <UserIcon className="w-4 h-4 text-[#0078D4]" />
                            </div>
                            <div>
                                <DialogTitle className="text-sm font-bold text-[#201F1E]">
                                    {editingUser ? "Επεξεργασία Χρήστη" : "Νέος Χρήστης"}
                                </DialogTitle>
                                <DialogDescription className="text-[11px] text-[#A19F9D]">
                                    {editingUser ? editingUser.email || editingUser.firstName || "" : "Ρύθμιση ρόλου και στοιχείων προφίλ."}
                                </DialogDescription>
                            </div>
                        </div>
                    </DialogHeader>

                    {/* Body */}
                    <div className="bg-[#F3F2F1] max-h-[75vh] overflow-y-auto px-5 py-4">
                        <div className="grid grid-cols-[180px_1fr] gap-4">

                            {/* Left sidebar: avatar + role */}
                            <div className="space-y-3">
                                {/* Avatar upload */}
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-3 flex flex-col items-center gap-2.5">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] self-start mb-1">Φωτογραφία</p>
                                    <div className="relative">
                                        <Avatar className="h-14 w-14 border border-[#EDEBE9]">
                                            {formData.image && <AvatarImage src={formData.image} className="object-cover" />}
                                            <AvatarFallback className="bg-[#F3F2F1] text-[#A19F9D]">
                                                <UserIcon className="w-5 h-5" />
                                            </AvatarFallback>
                                        </Avatar>
                                        <Label className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#0078D4] hover:bg-[#106EBE] rounded flex items-center justify-center cursor-pointer shadow transition-colors active:scale-90">
                                            <CloudUpload className="w-3 h-3 text-white" />
                                            <input type="file" className="hidden" accept="image/*" onChange={e => handleAvatarUpload(e.target.files?.[0] || null)} />
                                        </Label>
                                    </div>
                                </div>

                                {/* Role */}
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-3 space-y-1.5">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-1">Ρόλος</p>
                                    <Select value={formData.role} onValueChange={val => setFormData({ ...formData, role: val })}>
                                        <SelectTrigger className="h-9 rounded border-[#C8C6C4] focus:ring-[#0078D4] bg-white text-sm font-medium">
                                            <SelectValue placeholder="Επιλογή ρόλου" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="USER">Τυπικός Χρήστης</SelectItem>
                                            <SelectItem value="ADMIN">Διαχειριστής</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <p className="text-[10px] text-[#A19F9D]">
                                        {formData.role === "ADMIN" ? "Πλήρης πρόσβαση διαχείρισης." : "Πρόσβαση μόνο ανάγνωσης."}
                                    </p>
                                </div>
                            </div>

                            {/* Right form */}
                            <div className="space-y-3">
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Προφίλ</p>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Όνομα</Label>
                                            <Input
                                                className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm"
                                                value={formData.firstName}
                                                onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                                                placeholder="π.χ. Γιώργης"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Επώνυμο</Label>
                                            <Input
                                                className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm"
                                                value={formData.lastName}
                                                onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                                                placeholder="π.χ. Παπαδόπουλος"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Στοιχεία Πρόσβασης</p>
                                    <div className="space-y-2">
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Email</Label>
                                            <Input
                                                type="email"
                                                className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm"
                                                value={formData.email}
                                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                placeholder="user@example.com"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">
                                                Κωδικός {editingUser && <span className="text-[#A19F9D] font-normal normal-case">(αφήστε κενό για να διατηρηθεί)</span>}
                                            </Label>
                                            <Input
                                                type="password"
                                                placeholder={editingUser ? "••••••••" : "Ορίστε ασφαλή κωδικό…"}
                                                className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm font-mono"
                                                value={formData.password}
                                                onChange={e => setFormData({ ...formData, password: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="px-5 py-3 border-t border-[#EDEBE9] bg-white flex justify-end gap-2">
                        <Button
                            variant="ghost"
                            onClick={() => setIsDialogOpen(false)}
                            className="h-8 px-4 text-[12px] font-semibold text-[#605E5C] hover:bg-[#EDEBE9] hover:text-[#201F1E] rounded"
                        >
                            Ακύρωση
                        </Button>
                        <Button
                            disabled={isSaving}
                            onClick={handleSave}
                            className="h-8 px-5 text-[12px] font-semibold bg-[#0078D4] hover:bg-[#106EBE] text-white rounded shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,120,212,0.25)] transition-colors active:scale-95"
                        >
                            {isSaving ? <><RefreshCcw className="w-3 h-3 animate-spin mr-1.5" />Αποθήκευση…</> : (editingUser ? "Αποθήκευση Αλλαγών" : "Δημιουργία Χρήστη")}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
