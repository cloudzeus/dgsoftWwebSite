/**
 * Server-side client for https://vat.wwa.gr/ (afm2info).
 * Flow: get all customers from SoftOne ERP → for each, pass AFM to this service to get correct/official data → use it to update the insertion.
 */

const VAT_WWA_URL = "https://vat.wwa.gr/afm2info"

/** Raw basic_rec from vat.wwa.gr (official company data). */
export type VatWwaBasicRec = {
  onomasia?: string
  postal_address?: string
  postal_address_no?: string
  postal_zip_code?: string
  postal_area_description?: string
  regist_date?: string
  legal_status_descr?: string
  [key: string]: unknown
}

export type VatWwaCompanyInfo = {
  afm?: string
  basic_rec?: VatWwaBasicRec
  firm_act_tab?: {
    item?: Array<{
      firm_act_code?: string
      firm_act_descr?: string
      firm_act_kind?: string
    }>
  }
  [key: string]: unknown
}

/**
 * Normalized "correct data" from vat.wwa.gr to use for DB insertion/update.
 * Use these values to update the customer record (official source).
 */
export type VatWwaCorrectData = {
  NAME: string | null
  ADDRESS: string | null
  CITY: string | null
  ZIP: string | null
  legalStatus: string | null
  registDate: string | null
  kads: Array<{ afm: string; firm_act_code: string; firm_act_descr: string; firm_act_kind: boolean }>
}

function toStr(s: unknown, max: number): string | null {
  if (s == null || s === "") return null
  if (typeof s === "object") return null // avoid [object Object] from malformed API
  const t = String(s).trim()
  return t === "" || t === "[object Object]" ? null : t.slice(0, max)
}

/**
 * Fetch company info by AFM from vat.wwa.gr and return normalized correct data for DB insertion.
 * Server-side only. Returns null on error or invalid AFM.
 */
export async function getVatCompanyInfo(afm: string): Promise<VatWwaCompanyInfo | null> {
  const trimmed = afm?.trim()
  if (!trimmed) return null
  try {
    const res = await fetch(VAT_WWA_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ afm: trimmed }),
    })
    if (!res.ok) return null
    const data = (await res.json()) as VatWwaCompanyInfo & { error?: string }
    if (data.error) return null
    return { ...data, afm: trimmed }
  } catch {
    return null
  }
}

/**
 * vat.wwa.gr → SoftOne/DB field mapping (address data from both APIs):
 * - onomasia                    → NAME
 * - postal_address + postal_address_no → ADDRESS (e.g. "ΑΛΕΞΑΝΔΡΟΥΠΟΛΕΩΣ" + " " + "25" → "ΑΛΕΞΑΝΔΡΟΥΠΟΛΕΩΣ 25")
 * - postal_zip_code             → ZIP (e.g. "11527")
 * - postal_area_description     → CITY (e.g. "ΑΘΗΝΑ")
 */
export function getVatCorrectData(vatInfo: VatWwaCompanyInfo | null): VatWwaCorrectData | null {
  if (!vatInfo) return null
  const br = vatInfo.basic_rec
  const name = toStr(br?.onomasia, 128) // onomasia → NAME (same as SoftOne)
  const address = toStr(
    [br?.postal_address, br?.postal_address_no].filter(Boolean).join(" ").trim(),
    100
  ) || null // postal_address + postal_address_no → ADDRESS
  const zip = toStr(br?.postal_zip_code, 10) // postal_zip_code → ZIP
  const city = toStr(br?.postal_area_description, 30) // postal_area_description → CITY
  const legalStatus = toStr(br?.legal_status_descr, 128)
  const registDate = toStr(br?.regist_date, 50)
  const kads = (vatInfo.firm_act_tab?.item ?? []).map((k) => ({
    afm: toStr(vatInfo.afm ?? "", 20) ?? "",
    firm_act_code: (String(k.firm_act_code ?? "").trim().slice(0, 50)) || "",
    firm_act_descr: (String(k.firm_act_descr ?? "").trim().slice(0, 255)) || "",
    firm_act_kind: k.firm_act_kind === "1",
  }))
  return { NAME: name, ADDRESS: address, CITY: city, ZIP: zip, legalStatus, registDate, kads }
}
