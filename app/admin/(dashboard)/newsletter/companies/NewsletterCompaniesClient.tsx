"use client"

import * as React from "react"
import { toast } from "sonner"
import {
  BuildingIcon, PlusIcon, Trash2Icon, SaveIcon, ChevronDownIcon, ChevronUpIcon, ImagesIcon, Loader2Icon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { NewsletterMediaPickerDialog } from "@/components/newsletter/newsletter-media-picker-dialog"
import {
  createNewsletterSenderProfile,
  updateNewsletterSenderProfile,
  deleteNewsletterSenderProfile,
  type SenderProfileDto,
  type SenderProfileFields,
} from "@/app/lib/actions/newsletter-sender-profiles"

type AvailableLocation = {
  id: string
  nameEL: string
  logo: string | null
  email: string | null
  phone: string | null
  addressEL: string | null
  cityEL: string | null
}

const FIELD_META: { key: keyof SenderProfileFields; label: string; media: boolean; type?: string }[] = [
  { key: "senderName",      label: "Όνομα αποστολέα",          media: false },
  { key: "senderEmail",     label: "Email αποστολέα",           media: false, type: "email" },
  { key: "logoUrl",         label: "URL Λογότυπου",             media: true  },
  { key: "tagline",         label: "Υπότιτλος",                 media: false },
  { key: "facebookUrl",     label: "URL Facebook",              media: true  },
  { key: "instagramUrl",    label: "URL Instagram",             media: true  },
  { key: "linkedinUrl",     label: "URL LinkedIn",              media: true  },
  { key: "xUrl",            label: "URL X (Twitter)",           media: true  },
  { key: "addressLine",     label: "Διεύθυνση",                 media: false },
  { key: "phone",           label: "Τηλέφωνο",                  media: false, type: "tel" },
  { key: "contactEmail",    label: "Email επικοινωνίας",        media: false, type: "email" },
  { key: "privacyPolicyUrl",label: "URL Πολιτικής Απορρήτου",   media: true  },
  { key: "termsUrl",        label: "URL Όρων Χρήσης",           media: true  },
  { key: "unsubscribeUrl",  label: "URL Κατάργησης Εγγραφής",   media: true  },
]

function emptyFields(loc: AvailableLocation): SenderProfileFields {
  return {
    senderName: loc.nameEL,
    senderEmail: loc.email ?? "",
    logoUrl: loc.logo ?? "",
    tagline: "",
    facebookUrl: "",
    instagramUrl: "",
    linkedinUrl: "",
    xUrl: "",
    addressLine: [loc.addressEL, loc.cityEL].filter(Boolean).join(", "),
    phone: loc.phone ?? "",
    contactEmail: loc.email ?? "",
    privacyPolicyUrl: "",
    termsUrl: "",
    unsubscribeUrl: "",
  }
}

// ——— Profile card ———

function ProfileCard({
  profile,
  onSaved,
  onDeleted,
}: {
  profile: SenderProfileDto
  onSaved: (updated: SenderProfileDto) => void
  onDeleted: (id: string) => void
}) {
  const [open, setOpen] = React.useState(false)
  const [fields, setFields] = React.useState<SenderProfileFields>(() => ({ ...profile }))
  const [saving, setSaving] = React.useState(false)
  const [deleting, setDeleting] = React.useState(false)
  const [mediaTarget, setMediaTarget] = React.useState<keyof SenderProfileFields | null>(null)

  const update = (key: keyof SenderProfileFields, val: string) =>
    setFields((f) => ({ ...f, [key]: val }))

  const handleSave = async () => {
    setSaving(true)
    try {
      await updateNewsletterSenderProfile(profile.id, fields)
      onSaved({ ...profile, ...fields })
      toast.success("Αποθηκεύτηκε")
    } catch {
      toast.error("Αποτυχία αποθήκευσης")
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    if (!confirm(`Διαγραφή προφίλ "${profile.presenceName}";`)) return
    setDeleting(true)
    try {
      await deleteNewsletterSenderProfile(profile.id)
      onDeleted(profile.id)
      toast.success("Διαγράφηκε")
    } catch {
      toast.error("Αποτυχία διαγραφής")
    } finally {
      setDeleting(false)
    }
  }

  const logoDisplay = fields.logoUrl || profile.presenceLogoFallback

  return (
    <div className="bg-white border border-[#EDEBE9] rounded-lg overflow-hidden">
      {/* Header */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#F3F2F1] transition-colors text-left"
      >
        <div className="w-9 h-9 rounded border border-[#EDEBE9] bg-[#F3F2F1] overflow-hidden shrink-0 flex items-center justify-center">
          {logoDisplay
            ? <img src={logoDisplay} alt="" className="w-full h-full object-contain" />
            : <BuildingIcon className="w-4 h-4 text-[#A19F9D]" />}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-[#201F1E] truncate">{fields.senderName || profile.presenceName}</p>
          <p className="text-[11px] text-[#A19F9D] truncate">{fields.senderEmail || "—"}</p>
        </div>
        {open
          ? <ChevronUpIcon className="w-4 h-4 text-[#A19F9D] shrink-0" />
          : <ChevronDownIcon className="w-4 h-4 text-[#A19F9D] shrink-0" />}
      </button>

      {/* Fields */}
      {open && (
        <div className="border-t border-[#EDEBE9] p-4 bg-[#F3F2F1] space-y-4">
          <div className="grid gap-3 sm:grid-cols-2">
            {FIELD_META.map(({ key, label, media, type }) => (
              <div key={key} className="space-y-1">
                <Label className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">{label}</Label>
                <div className="flex gap-1.5">
                  <Input
                    type={type ?? "text"}
                    value={fields[key]}
                    onChange={(e) => update(key, e.target.value)}
                    className="h-8 text-sm bg-white border-[#C8C6C4] focus-visible:ring-[#0078D4]"
                  />
                  {media && (
                    <button
                      type="button"
                      onClick={() => setMediaTarget(key)}
                      title="Επιλογή από γκαλερί"
                      className="h-8 w-8 shrink-0 flex items-center justify-center border border-[#C8C6C4] rounded bg-white hover:bg-[#EDEBE9] text-[#605E5C] transition-colors"
                    >
                      <ImagesIcon className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Preview of logo */}
          {fields.logoUrl && (
            <div className="flex items-center gap-3 p-3 bg-white border border-[#EDEBE9] rounded">
              <img src={fields.logoUrl} alt="Logo preview" className="h-10 max-w-[120px] object-contain" />
              <p className="text-[11px] text-[#A19F9D]">Προεπισκόπηση λογότυπου</p>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center justify-between pt-1">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDelete}
              disabled={deleting}
              className="h-8 text-[12px] text-red-500 border-red-200 hover:bg-red-50 hover:border-red-300 gap-1.5"
            >
              {deleting ? <Loader2Icon className="w-3.5 h-3.5 animate-spin" /> : <Trash2Icon className="w-3.5 h-3.5" />}
              Διαγραφή
            </Button>
            <Button
              size="sm"
              onClick={handleSave}
              disabled={saving}
              className="h-8 text-[12px] bg-[#0078D4] hover:bg-[#106EBE] text-white gap-1.5"
            >
              {saving ? <Loader2Icon className="w-3.5 h-3.5 animate-spin" /> : <SaveIcon className="w-3.5 h-3.5" />}
              Αποθήκευση
            </Button>
          </div>
        </div>
      )}

      <NewsletterMediaPickerDialog
        open={mediaTarget !== null}
        onOpenChange={(o) => !o && setMediaTarget(null)}
        title={mediaTarget ? FIELD_META.find((f) => f.key === mediaTarget)?.label : undefined}
        onSelect={(url) => {
          if (mediaTarget) update(mediaTarget, url)
          setMediaTarget(null)
        }}
      />
    </div>
  )
}

// ——— Add from location dialog ———

function AddProfileDialog({
  locations,
  onAdded,
  onClose,
}: {
  locations: AvailableLocation[]
  onAdded: (profile: SenderProfileDto) => void
  onClose: () => void
}) {
  const [selected, setSelected] = React.useState<AvailableLocation | null>(null)
  const [fields, setFields] = React.useState<SenderProfileFields | null>(null)
  const [saving, setSaving] = React.useState(false)
  const [mediaTarget, setMediaTarget] = React.useState<keyof SenderProfileFields | null>(null)

  const handleSelect = (loc: AvailableLocation) => {
    setSelected(loc)
    setFields(emptyFields(loc))
  }

  const update = (key: keyof SenderProfileFields, val: string) =>
    setFields((f) => f ? { ...f, [key]: val } : f)

  const handleCreate = async () => {
    if (!selected || !fields) return
    setSaving(true)
    try {
      const { id } = await createNewsletterSenderProfile(selected.id, fields)
      onAdded({
        id,
        presenceId: selected.id,
        presenceName: selected.nameEL,
        presenceLogoFallback: selected.logo,
        ...fields,
      })
      toast.success("Προφίλ δημιουργήθηκε")
      onClose()
    } catch {
      toast.error("Αποτυχία δημιουργίας")
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.16)] w-full max-w-2xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-5 py-4 border-b border-[#EDEBE9] flex items-center gap-3 shrink-0">
          <div className="w-8 h-8 rounded bg-[#EFF6FC] border border-[#C7E0F4] flex items-center justify-center">
            <BuildingIcon className="w-4 h-4 text-[#0078D4]" />
          </div>
          <h2 className="text-sm font-bold text-[#201F1E]">Προσθήκη εταιρείας αποστολής</h2>
          <button onClick={onClose} className="ml-auto text-[#A19F9D] hover:text-[#201F1E] text-lg leading-none">×</button>
        </div>

        <div className="overflow-y-auto flex-1 p-5 space-y-5">
          {/* Step 1: pick location */}
          {!selected ? (
            <div className="space-y-3">
              <p className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">
                Επιλέξτε τοποθεσία
              </p>
              {locations.length === 0 ? (
                <p className="text-sm text-[#A19F9D] py-6 text-center">
                  Όλες οι τοποθεσίες έχουν ήδη προφίλ newsletter.
                </p>
              ) : (
                <div className="grid gap-2">
                  {locations.map((loc) => (
                    <button
                      key={loc.id}
                      type="button"
                      onClick={() => handleSelect(loc)}
                      className="flex items-center gap-3 p-3 border border-[#EDEBE9] rounded-lg hover:border-[#0078D4] hover:bg-[#EFF6FC] transition-colors text-left"
                    >
                      <div className="w-9 h-9 rounded border border-[#EDEBE9] bg-[#F3F2F1] overflow-hidden shrink-0 flex items-center justify-center">
                        {loc.logo
                          ? <img src={loc.logo} alt="" className="w-full h-full object-contain" />
                          : <BuildingIcon className="w-4 h-4 text-[#A19F9D]" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-[#201F1E]">{loc.nameEL}</p>
                        <p className="text-[11px] text-[#A19F9D] truncate">
                          {[loc.addressEL, loc.cityEL].filter(Boolean).join(", ") || "—"}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded border border-[#EDEBE9] bg-[#F3F2F1] overflow-hidden shrink-0 flex items-center justify-center">
                  {selected.logo
                    ? <img src={selected.logo} alt="" className="w-full h-full object-contain" />
                    : <BuildingIcon className="w-3.5 h-3.5 text-[#A19F9D]" />}
                </div>
                <p className="text-sm font-semibold text-[#201F1E]">{selected.nameEL}</p>
                <button
                  type="button"
                  onClick={() => { setSelected(null); setFields(null) }}
                  className="ml-auto text-[11px] text-[#0078D4] hover:underline"
                >
                  Αλλαγή
                </button>
              </div>

              {fields && (
                <div className="grid gap-3 sm:grid-cols-2">
                  {FIELD_META.map(({ key, label, media, type }) => (
                    <div key={key} className="space-y-1">
                      <Label className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">{label}</Label>
                      <div className="flex gap-1.5">
                        <Input
                          type={type ?? "text"}
                          value={fields[key]}
                          onChange={(e) => update(key, e.target.value)}
                          className="h-8 text-sm bg-white border-[#C8C6C4] focus-visible:ring-[#0078D4]"
                        />
                        {media && (
                          <button
                            type="button"
                            onClick={() => setMediaTarget(key)}
                            className="h-8 w-8 shrink-0 flex items-center justify-center border border-[#C8C6C4] rounded bg-white hover:bg-[#EDEBE9] text-[#605E5C] transition-colors"
                          >
                            <ImagesIcon className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        {selected && (
          <div className="px-5 py-4 border-t border-[#EDEBE9] flex justify-end gap-2 shrink-0">
            <Button variant="outline" onClick={onClose} className="h-9 text-[12px] border-[#C8C6C4]">
              Ακύρωση
            </Button>
            <Button
              onClick={handleCreate}
              disabled={saving}
              className="h-9 text-[12px] bg-[#0078D4] hover:bg-[#106EBE] text-white gap-1.5"
            >
              {saving ? <Loader2Icon className="w-3.5 h-3.5 animate-spin" /> : <PlusIcon className="w-3.5 h-3.5" />}
              Δημιουργία προφίλ
            </Button>
          </div>
        )}

        <NewsletterMediaPickerDialog
          open={mediaTarget !== null}
          onOpenChange={(o) => !o && setMediaTarget(null)}
          title={mediaTarget ? FIELD_META.find((f) => f.key === mediaTarget)?.label : undefined}
          onSelect={(url) => {
            if (mediaTarget) update(mediaTarget, url)
            setMediaTarget(null)
          }}
        />
      </div>
    </div>
  )
}

// ——— Main ———

export function NewsletterCompaniesClient({
  profiles: initialProfiles,
  availableLocations,
}: {
  profiles: SenderProfileDto[]
  availableLocations: AvailableLocation[]
}) {
  const [profiles, setProfiles] = React.useState(initialProfiles)
  const [available, setAvailable] = React.useState(availableLocations)
  const [adding, setAdding] = React.useState(false)

  const handleSaved = (updated: SenderProfileDto) =>
    setProfiles((prev) => prev.map((p) => (p.id === updated.id ? updated : p)))

  const handleDeleted = (id: string) => {
    const deleted = profiles.find((p) => p.id === id)
    setProfiles((prev) => prev.filter((p) => p.id !== id))
    if (deleted) {
      // make the presence available again
      setAvailable((prev) => [
        ...prev,
        {
          id: deleted.presenceId,
          nameEL: deleted.presenceName,
          logo: deleted.presenceLogoFallback,
          email: deleted.contactEmail || null,
          phone: deleted.phone || null,
          addressEL: null,
          cityEL: null,
        },
      ])
    }
  }

  const handleAdded = (profile: SenderProfileDto) => {
    setProfiles((prev) => [...prev, profile])
    setAvailable((prev) => prev.filter((l) => l.id !== profile.presenceId))
  }

  return (
    <div className="space-y-4 max-w-3xl">
      {/* Toolbar */}
      <div className="flex items-center justify-between">
        <p className="text-[11px] text-[#A19F9D]">
          {profiles.length} εταιρεί{profiles.length === 1 ? "α" : "ες"} · κλικ για ανάπτυξη
        </p>
        <Button
          size="sm"
          onClick={() => setAdding(true)}
          disabled={available.length === 0}
          className="h-8 text-[12px] bg-[#0078D4] hover:bg-[#106EBE] text-white gap-1.5"
        >
          <PlusIcon className="w-3.5 h-3.5" />
          Προσθήκη εταιρείας
        </Button>
      </div>

      {/* Profile cards */}
      {profiles.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-[#A19F9D] bg-white border border-[#EDEBE9] rounded-lg">
          <BuildingIcon className="w-10 h-10 mb-3 opacity-40" />
          <p className="text-sm font-medium">Δεν υπάρχουν εταιρείες αποστολής.</p>
          <p className="text-[11px] mt-1">Προσθέστε μια τοποθεσία για να ξεκινήσετε.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {profiles.map((p) => (
            <ProfileCard key={p.id} profile={p} onSaved={handleSaved} onDeleted={handleDeleted} />
          ))}
        </div>
      )}

      {adding && (
        <AddProfileDialog
          locations={available}
          onAdded={handleAdded}
          onClose={() => setAdding(false)}
        />
      )}
    </div>
  )
}
