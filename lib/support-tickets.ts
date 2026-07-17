"use client"

/**
 * Τοπικό ιστορικό αιτημάτων υποστήριξης — αποθηκεύεται μόνο στον browser
 * του επισκέπτη (localStorage). Το token είναι το publicToken του ticket
 * και επιτρέπει την ανάκτηση κατάστασης χωρίς λογαριασμό.
 */
export type StoredTicket = {
  code: string
  subject: string
  statusUrl: string
  token: string
  createdAt: string // ISO
  attachments?: number
}

const KEY = "dgsoft-support-tickets"
const MAX_ENTRIES = 50

export function loadTickets(): StoredTicket[] {
  if (typeof window === "undefined") return []
  try {
    const raw = window.localStorage.getItem(KEY)
    const arr = raw ? JSON.parse(raw) : []
    return Array.isArray(arr)
      ? arr.filter(
          (t): t is StoredTicket =>
            t && typeof t.code === "string" && typeof t.token === "string"
        )
      : []
  } catch {
    return []
  }
}

export function saveTicket(t: StoredTicket) {
  if (typeof window === "undefined") return
  try {
    const list = loadTickets().filter((x) => x.code !== t.code)
    list.unshift(t)
    window.localStorage.setItem(KEY, JSON.stringify(list.slice(0, MAX_ENTRIES)))
  } catch {
    // quota/private mode — το ιστορικό είναι convenience, όχι κρίσιμο
  }
}

export function removeTicket(code: string) {
  if (typeof window === "undefined") return
  try {
    const list = loadTickets().filter((x) => x.code !== code)
    window.localStorage.setItem(KEY, JSON.stringify(list))
  } catch {}
}

/** Εξαγωγή του publicToken από ένα statusUrl της μορφής .../t/{token}. */
export function tokenFromStatusUrl(statusUrl: string): string {
  const m = statusUrl.match(/\/t\/([^/?#]+)/)
  return m ? m[1] : ""
}
