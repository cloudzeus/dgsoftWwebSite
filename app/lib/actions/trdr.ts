"use server";

import { Prisma } from "@prisma/client"
import prisma from "@/lib/prisma"
import { auth } from "@/auth"
import { cookies } from "next/headers"
import { getSoftOneTableData, setSoftOneTrdrData, type SetDataTrdrPayload } from "@/lib/softone"
import { SOFTONE_CLIENT_ID_COOKIE } from "@/lib/softone-cookie"
import { getVatCompanyInfo, getVatCorrectData, type VatWwaCompanyInfo } from "@/lib/vat-wwa"
import { getCoordinates } from "@/app/lib/actions/location"

export async function getCustomers() {
    const session = await auth()
    if (!session) throw new Error("Unauthorized")

    try {
        const data = await prisma.tRDR.findMany({
            orderBy: { createdAt: "desc" },
            include: { kads: true }
        })
        return JSON.parse(JSON.stringify(data))
    } catch (error: any) {
        console.error("GET CUSTOMERS Error:", error)
        throw new Error(error.message)
    }
}

/** For first-page companies scroller: customers with displayAtCarousel true (with logo + tooltip). */
export async function getPublicCustomersForCarousel() {
    try {
        const data = await prisma.tRDR.findMany({
            where: { displayAtCarousel: true },
            select: { id: true, NAME: true, CODE: true, logo: true, website: true, WEBPAGE: true },
            orderBy: { createdAt: "asc" },
        })
        return JSON.parse(JSON.stringify(data))
    } catch {
        return []
    }
}

export async function updateCustomerCarousel(id: string, displayAtCarousel: boolean) {
    const session = await auth()
    if (!session) throw new Error("Unauthorized")
    try {
        await prisma.tRDR.update({ where: { id }, data: { displayAtCarousel } })
        return { success: true }
    } catch (error: any) {
        console.error("UPDATE CUSTOMER CAROUSEL Error:", error)
        throw new Error(error.message)
    }
}

/** TRDR scalar fields allowed in update/create (excludes id, createdAt, updatedAt, relations). */
const TRDR_DATA_KEYS = new Set([
    "SODTYPE", "TRDR", "CODE", "NAME", "AFM", "COUNTRY", "SOCURRENCY", "ADDRESS", "ZIP", "DISTRICT", "CITY",
    "AREAS", "PHONE01", "PHONE02", "JOBTYPE", "JOBTYPETRD", "EMAIL", "EMAILACC", "TRDBUSINESS", "SHIPMENT",
    "PAYMENT", "SOCARRIER", "IRSDATA", "REMARKS", "INSDATE", "UPDDATE", "SOTITLE", "ISACTIVE", "ISPROSP",
    "LATITUDE", "LONGITUDE", "OBTYPE", "TRDGROUP", "TRDPGROUP", "WEBPAGE", "CONSENT", "PRJCS",
    "logo", "website", "displayAtCarousel", "registDate", "legalStatus", "numEmployees",
])

function sanitizeTrdrPayload(restData: Record<string, unknown>): Record<string, unknown> {
    const out: Record<string, unknown> = {};
    for (const key of Object.keys(restData)) {
        if (!TRDR_DATA_KEYS.has(key)) continue;
        let val = restData[key];
        if (val === "" && key !== "NAME" && key !== "CODE") val = null;
        out[key] = val;
    }
    return out;
}

/** Fields allowed on trdrKad for nested create (exclude relation id and timestamps). */
const TRDR_KAD_CREATE_KEYS = new Set(["afm", "firm_act_code", "firm_act_descr", "firm_act_kind"]);

type KadCreateItem = { afm?: string | null; firm_act_code: string; firm_act_descr: string; firm_act_kind?: boolean };

function sanitizeKadsForCreate(kads: unknown[]): KadCreateItem[] {
    return kads.map((item) => {
        if (!item || typeof item !== "object") return { firm_act_code: "", firm_act_descr: "" };
        const raw = item as Record<string, unknown>;
        return {
            afm: typeof raw.afm === "string" ? raw.afm : null,
            firm_act_code: typeof raw.firm_act_code === "string" ? raw.firm_act_code.slice(0, 50) : "",
            firm_act_descr: typeof raw.firm_act_descr === "string" ? raw.firm_act_descr.slice(0, 255) : "",
            firm_act_kind: raw.firm_act_kind === true || raw.firm_act_kind === "1",
        };
    }).filter((k) => k.firm_act_code !== "" || k.firm_act_descr !== "");
}

export async function createCustomer(data: any) {
    const session = await auth()
    if (!session) throw new Error("Unauthorized")

    try {
        const { kads, ...restData } = data;
        const sanitized = sanitizeTrdrPayload(restData);

        if (!sanitized.TRDR || sanitized.TRDR === 0) {
            const maxResult = await prisma.tRDR.aggregate({ _max: { TRDR: true } });
            sanitized.TRDR = (maxResult._max.TRDR || 0) + 1;
        }

        if (!sanitized.CODE) {
            sanitized.CODE = `CMD-${sanitized.TRDR}`;
        }

        const kadsToCreate = Array.isArray(kads) && kads.length > 0 ? sanitizeKadsForCreate(kads) : [];
        const createData = {
            ...sanitized,
            ...(kadsToCreate.length > 0 ? { kads: { create: kadsToCreate } } : {}),
        } as Prisma.TRDRCreateInput;
        const res = await prisma.tRDR.create({
            data: createData,
            include: { kads: true }
        })
        return JSON.parse(JSON.stringify(res))
    } catch (error: any) {
        console.error("CREATE CUSTOMER Error:", error)
        throw new Error(error.message)
    }
}

export async function updateCustomer(id: string, data: any) {
    const session = await auth()
    if (!session) throw new Error("Unauthorized")

    try {
        const { kads, ...restData } = data;
        const sanitized = sanitizeTrdrPayload(restData);
        const kadsToCreate = Array.isArray(kads) && kads.length > 0 ? sanitizeKadsForCreate(kads) : undefined;

        const dataOnlyTrdrKeys: Record<string, unknown> = {};
        for (const k of TRDR_DATA_KEYS) {
            if (sanitized[k] !== undefined) dataOnlyTrdrKeys[k] = sanitized[k];
        }

        const updateData = {
            ...dataOnlyTrdrKeys,
            kads: {
                deleteMany: {},
                ...(kadsToCreate && kadsToCreate.length > 0 ? { create: kadsToCreate } : {}),
            },
        } as Prisma.TRDRUpdateInput;
        const res = await prisma.tRDR.update({
            where: { id },
            data: updateData,
            include: { kads: true }
        })
        return JSON.parse(JSON.stringify(res))
    } catch (error: any) {
        console.error("UPDATE CUSTOMER Error:", error)
        throw new Error(error.message)
    }
}

/** Push customer data to SoftOne ERP (SetData). Only ERP-relevant fields are sent. */
export async function pushCustomerToErp(trdrNumber: number, data: Record<string, unknown>): Promise<{ success: boolean; message?: string }> {
    const session = await auth()
    if (!session) return { success: false, message: "Unauthorized" }

    const cookieStore = await cookies()
    const clientId = cookieStore.get(SOFTONE_CLIENT_ID_COOKIE)?.value
    if (!clientId) return { success: false, message: "Not authenticated to SoftOne. Log in at Admin → SoftOne first." }

    const erpPayload: SetDataTrdrPayload = {
        TRDR: trdrNumber,
        CODE: data.CODE != null ? String(data.CODE) : undefined,
        NAME: data.NAME != null ? String(data.NAME) : undefined,
        AFM: data.AFM != null ? String(data.AFM) : undefined,
        COUNTRY: data.COUNTRY != null ? Number(data.COUNTRY) : undefined,
        TRDGROUP: data.TRDGROUP != null ? Number(data.TRDGROUP) : undefined,
        TRDPGROUP: data.TRDPGROUP != null ? Number(data.TRDPGROUP) : undefined,
        TRDBUSINESS: data.TRDBUSINESS != null ? Number(data.TRDBUSINESS) : undefined,
        PHONE01: data.PHONE01 != null ? String(data.PHONE01) : undefined,
        PHONE02: data.PHONE02 != null ? String(data.PHONE02) : undefined,
        ADDRESS: data.ADDRESS != null ? String(data.ADDRESS) : undefined,
        ZIP: data.ZIP != null ? String(data.ZIP) : undefined,
        CITY: data.CITY != null ? String(data.CITY) : undefined,
        EMAIL: data.EMAIL != null ? String(data.EMAIL) : undefined,
        REMARKS: data.REMARKS != null ? String(data.REMARKS) : undefined,
    }
    const result = await setSoftOneTrdrData(clientId, trdrNumber, erpPayload)
    if (result.success) return { success: true }
    return { success: false, message: (result as { message?: string }).message ?? "ERP update failed" }
}

export async function deleteCustomer(id: string) {
    const session = await auth()
    if (!session) throw new Error("Unauthorized")

    try {
        const res = await prisma.tRDR.delete({ where: { id } })
        return JSON.parse(JSON.stringify(res))
    } catch (error: any) {
        console.error("DELETE CUSTOMER Error:", error)
        throw new Error(error.message)
    }
}

export async function getKAD(customerId: string, afm: string) {
    const session = await auth()
    if (!session) throw new Error("Unauthorized")

    if (!afm || afm.trim() === "") throw new Error("No AFM provided")

    try {
        const res = await fetch("https://vat.wwa.gr/afm2info", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ afm: afm.trim() })
        });

        if (!res.ok) throw new Error("VAT API error");
        const apiData = (await res.json()) as VatWwaCompanyInfo & { error?: string };

        if (apiData.error) throw new Error(apiData.error);

        const fetchedKads = apiData.firm_act_tab?.item?.map((k: any) => ({
            afm: afm.trim(),
            firm_act_code: String(k.firm_act_code || ""),
            firm_act_descr: String(k.firm_act_descr || ""),
            firm_act_kind: k.firm_act_kind === "1"
        })) || [];

        const correctData = getVatCorrectData(apiData as VatWwaCompanyInfo);
        const registDate = correctData?.registDate?.slice(0, 50) ?? undefined;
        const legalStatus = correctData?.legalStatus?.slice(0, 128) ?? undefined;

        const dbRes = await prisma.tRDR.update({
            where: { id: customerId },
            data: {
                ...(registDate != null ? { registDate } : {}),
                ...(legalStatus != null ? { legalStatus } : {}),
                kads: {
                    deleteMany: {},
                    ...(fetchedKads.length > 0 ? { create: fetchedKads } : {})
                }
            },
            include: { kads: true }
        });
        return JSON.parse(JSON.stringify(dbRes))

    } catch (error: any) {
        console.error("GET KAD Error:", error)
        throw new Error(error.message)
    }
}

/** SoftOne country code for Greece (vat.wwa.gr only applies to Greek companies). Use env SOFTONE_GREECE_COUNTRY_CODE to override. */
const GREECE_COUNTRY_CODE = typeof process !== "undefined" && process.env.SOFTONE_GREECE_COUNTRY_CODE ? Number(process.env.SOFTONE_GREECE_COUNTRY_CODE) : 1

/** Greek AFM is 9 digits. Non-Greek VAT often has prefix (e.g. CY, BG). Skip vat.wwa.gr for non-Greek. */
function isGreekAfm(afm: string | null | undefined): boolean {
    if (!afm || typeof afm !== "string") return false
    const t = afm.trim()
    return /^\d{9}$/.test(t)
}

function getRowVal(row: Record<string, unknown>, key: string): unknown {
    const k = Object.keys(row).find((kk) => kk.toLowerCase() === key.toLowerCase())
    return k != null ? row[k] : undefined
}

function toInt(v: unknown): number | null {
    if (v == null) return null
    const n = Number(v)
    return Number.isNaN(n) ? null : n
}
function toFloat(v: unknown): number | null {
    if (v == null) return null
    const n = Number(v)
    return Number.isNaN(n) ? null : n
}
function toStr(v: unknown, maxLen?: number): string | null {
    if (v == null) return null
    const s = String(v).trim()
    return s === "" ? null : maxLen ? s.slice(0, maxLen) : s
}
function toDate(v: unknown): Date | null {
    if (v == null) return null
    if (typeof v === "string" || typeof v === "number") {
        const d = new Date(v)
        return isNaN(d.getTime()) ? null : d
    }
    return null
}

export type SyncCustomersResult = {
    success: boolean
    message?: string
    synced: number
    created: number
    updated: number
    errors: string[]
}

/**
 * Sync customers: (1) get all customers from SoftOne ERP, (2) for each pass AFM to vat.wwa.gr to get correct data, (3) update the insertion with that correct data.
 * Server-side: uses softone_client_id cookie, iconv-decoded SoftOne response, and vat.wwa.gr as official source for company identity.
 */
export async function syncCustomersFromSoftOne(): Promise<SyncCustomersResult> {
    console.log("[Sync Action] Start: auth + cookie check")
    const session = await auth()
    if (!session) {
        console.log("[Sync Action] Abort: no session")
        return { success: false, message: "Unauthorized", synced: 0, created: 0, updated: 0, errors: [] }
    }

    const cookieStore = await cookies()
    const clientId = cookieStore.get(SOFTONE_CLIENT_ID_COOKIE)?.value
    if (!clientId) {
        console.log("[Sync Action] Abort: no SoftOne clientId cookie")
        return { success: false, message: "Not authenticated to SoftOne. Log in at Admin → SoftOne first.", synced: 0, created: 0, updated: 0, errors: [] }
    }

    const errors: string[] = []
    let created = 0
    let updated = 0

    try {
        // 1) Get all customers from SoftOne ERP (CUSTOMER / TRDR)
        console.log("[Sync Action] Calling getSoftOneTableData(CUSTOMER, TRDR)...")
        const result = await getSoftOneTableData(clientId, "CUSTOMER", "TRDR")
        if (!("rows" in result) || !result.success) {
            const msg = (result as { message?: string }).message ?? "Failed to get TRDR data from SoftOne"
            console.log("[Sync Action] SoftOne error:", msg)
            return { success: false, message: msg, synced: 0, created: 0, updated: 0, errors: [] }
        }

        const rows = result.rows
        console.log("[Sync Action] Got rows:", rows.length, "| Starting loop (vat.wwa.gr + DB upsert)...")
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i]
            if (i > 0 && i % 500 === 0) console.log("[Sync Action] Progress:", i, "/", rows.length)
            try {
                const trdrNum = toInt(getRowVal(row, "TRDR"))
                const code = toStr(getRowVal(row, "CODE"), 25) ?? (trdrNum != null ? `CMD-${trdrNum}` : null)
                const name = toStr(getRowVal(row, "NAME"), 128)
                const afm = toStr(getRowVal(row, "AFM"), 20)
                // Only save customers with at least name and AFM
                if (code == null || name == null) {
                    errors.push(`Row missing CODE or NAME (TRDR=${trdrNum}), skipped`)
                    continue
                }
                if (!afm || !afm.trim()) {
                    errors.push(`Row missing AFM (TRDR=${trdrNum}), skipped`)
                    continue
                }
                const countryCode = toInt(getRowVal(row, "COUNTRY"))
                // 2) vat.wwa.gr is for Greek companies only: country must be Greece and AFM must be Greek (9 digits). Skip if CY/BG/etc or non-Greek country.
                let vatInfo: Awaited<ReturnType<typeof getVatCompanyInfo>> = null
                if (afm && countryCode === GREECE_COUNTRY_CODE && isGreekAfm(afm)) {
                    vatInfo = await getVatCompanyInfo(afm)
                }
                const correctData = getVatCorrectData(vatInfo)

                const softOneRow = {
                    SODTYPE: toInt(getRowVal(row, "SODTYPE")) ?? 13,
                    TRDR: trdrNum!,
                    CODE: code,
                    NAME: name,
                    AFM: afm,
                    COUNTRY: toInt(getRowVal(row, "COUNTRY")),
                    SOCURRENCY: toInt(getRowVal(row, "SOCURRENCY")),
                    ADDRESS: toStr(getRowVal(row, "ADDRESS"), 100),
                    ZIP: toStr(getRowVal(row, "ZIP"), 10),
                    DISTRICT: toStr(getRowVal(row, "DISTRICT"), 30),
                    CITY: toStr(getRowVal(row, "CITY"), 30),
                    AREAS: toInt(getRowVal(row, "AREAS")),
                    PHONE01: toStr(getRowVal(row, "PHONE01"), 20),
                    PHONE02: toStr(getRowVal(row, "PHONE02"), 20),
                    JOBTYPE: toInt(getRowVal(row, "JOBTYPE")),
                    JOBTYPETRD: toStr(getRowVal(row, "JOBTYPETRD"), 128),
                    EMAIL: toStr(getRowVal(row, "EMAIL"), 128),
                    EMAILACC: toStr(getRowVal(row, "EMAILACC"), 128),
                    TRDBUSINESS: toInt(getRowVal(row, "TRDBUSINESS")),
                    SHIPMENT: toInt(getRowVal(row, "SHIPMENT")),
                    PAYMENT: toInt(getRowVal(row, "PAYMENT")),
                    SOCARRIER: toInt(getRowVal(row, "SOCARRIER")),
                    IRSDATA: toStr(getRowVal(row, "IRSDATA"), 128),
                    REMARKS: toStr(getRowVal(row, "REMARKS")),
                    INSDATE: toDate(getRowVal(row, "INSDATE")),
                    UPDDATE: toDate(getRowVal(row, "UPDDATE")),
                    SOTITLE: toStr(getRowVal(row, "SOTITLE"), 64),
                    ISACTIVE: toInt(getRowVal(row, "ISACTIVE")),
                    ISPROSP: toInt(getRowVal(row, "ISPROSP")),
                    LATITUDE: toFloat(getRowVal(row, "LATITUDE")),
                    LONGITUDE: toFloat(getRowVal(row, "LONGITUDE")),
                    OBTYPE: toInt(getRowVal(row, "OBTYPE")),
                    TRDGROUP: toInt(getRowVal(row, "TRDGROUP")),
                    TRDPGROUP: toInt(getRowVal(row, "TRDPGROUP")),
                    WEBPAGE: toStr(getRowVal(row, "WEBPAGE"), 255),
                    CONSENT: toInt(getRowVal(row, "CONSENT")),
                    PRJCS: toInt(getRowVal(row, "PRJCS")),
                    numEmployees: toInt(getRowVal(row, "numEmployees")) ?? toInt(getRowVal(row, "NUMEMPLOYEES")),
                    legalStatus: null as string | null,
                    registDate: null as string | null,
                }

                // 3) Update the insertion: apply vat.wwa.gr correct data over SoftOne (official source wins)
                const merged = { ...softOneRow }
                if (correctData) {
                    if (correctData.NAME) merged.NAME = correctData.NAME.slice(0, 128)
                    if (correctData.ADDRESS) merged.ADDRESS = correctData.ADDRESS.slice(0, 100)
                    if (correctData.CITY) merged.CITY = correctData.CITY.slice(0, 30)
                    if (correctData.ZIP) merged.ZIP = correctData.ZIP.slice(0, 10)
                    if (correctData.legalStatus) merged.legalStatus = correctData.legalStatus.slice(0, 128)
                    if (correctData.registDate) merged.registDate = correctData.registDate.slice(0, 50)
                }

                const existingByTrdr = await prisma.tRDR.findUnique({ where: { TRDR: merged.TRDR } })
                if (existingByTrdr) {
                    const updatePayload: Record<string, unknown> = { ...merged }
                    delete updatePayload.id
                    delete (updatePayload as any).createdAt
                    delete (updatePayload as any).updatedAt
                    const kadsPayload = correctData?.kads?.length ? correctData.kads : undefined
                    await prisma.tRDR.update({
                        where: { id: existingByTrdr.id },
                        data: {
                            ...(updatePayload as any),
                            ...(kadsPayload != null
                                ? { kads: { deleteMany: {}, create: kadsPayload } }
                                : {}),
                        },
                    })
                    updated++
                } else {
                    // Skip create if another customer with same AFM already exists (avoid duplicate by AFM)
                    if (merged.AFM?.toString().trim()) {
                        const existingByAfm = await prisma.tRDR.findFirst({
                            where: { AFM: merged.AFM.toString().trim() },
                        })
                        if (existingByAfm) {
                            errors.push(`Skipped duplicate AFM ${merged.AFM} (TRDR ${merged.TRDR} already exists as id ${existingByAfm.id})`)
                            continue
                        }
                    }
                    const kadsPayload = correctData?.kads?.length ? correctData.kads : undefined
                    await prisma.tRDR.create({
                        data: {
                            ...(merged as any),
                            ...(kadsPayload != null ? { kads: { create: kadsPayload } } : {}),
                        },
                    })
                    created++
                }
            } catch (rowErr: any) {
                errors.push(`TRDR row ${getRowVal(row, "TRDR")}: ${rowErr?.message ?? String(rowErr)}`)
            }
        }

        console.log("[Sync Action] Done. created:", created, "updated:", updated, "errors:", errors.length)
        return {
            success: errors.length === 0,
            message: errors.length > 0 ? `Synced with ${errors.length} error(s)` : undefined,
            synced: rows.length,
            created,
            updated,
            errors,
        }
    } catch (err: any) {
        console.error("[Sync Action] Exception:", err)
        return {
            success: false,
            message: err?.message ?? "Sync failed",
            synced: 0,
            created: 0,
            updated: 0,
            errors: [err?.message ?? String(err)],
        }
    }
}

/** Lookup maps: code -> display name (from SoftOne help tables). */
export type SoftOneLookups = {
    countries: Record<number, string>
    trdpGroups: Record<number, string>
    trdBusinesses: Record<number, string>
}

export async function getSoftOneLookups(): Promise<SoftOneLookups> {
    const session = await auth()
    if (!session) return { countries: {}, trdpGroups: {}, trdBusinesses: {} }

    const [countries, trdpGroups, trdBusinesses] = await Promise.all([
        prisma.softOneCountry.findMany().then((rows) => Object.fromEntries(rows.map((r) => [r.code, r.name ?? ""]))),
        prisma.softOneTrdpGroup.findMany().then((rows) => Object.fromEntries(rows.map((r) => [r.code, r.name ?? ""]))),
        prisma.softOneTrdBusiness.findMany().then((rows) => Object.fromEntries(rows.map((r) => [r.code, r.name ?? ""]))),
    ])
    return { countries, trdpGroups, trdBusinesses }
}

export type SyncAllFromSoftOneResult = {
    success: boolean
    message?: string
    lookups?: SyncLookupsResult
    customers?: SyncCustomersResult
}

/** Run lookups sync first, then customer sync, so country/group/business names are available and customers get full data. */
export async function syncAllFromSoftOne(): Promise<SyncAllFromSoftOneResult> {
    const session = await auth()
    if (!session) return { success: false, message: "Unauthorized" }

    const cookieStore = await cookies()
    const clientId = cookieStore.get(SOFTONE_CLIENT_ID_COOKIE)?.value
    if (!clientId)
        return { success: false, message: "Not authenticated to SoftOne. Log in at Admin → SoftOne first." }

    try {
        const lookups = await syncSoftOneLookups()
        if (!lookups.success) {
            return { success: false, message: lookups.message ?? "Lookups sync failed", lookups }
        }
        const customers = await syncCustomersFromSoftOne()
        return {
            success: customers.success,
            message: customers.success ? undefined : (customers.message ?? "Customer sync had issues"),
            lookups,
            customers,
        }
    } catch (err: any) {
        console.error("[Sync All From SoftOne]", err)
        return { success: false, message: err?.message ?? "Sync failed" }
    }
}

export type SyncLookupsResult = { success: boolean; message?: string; counts?: { country: number; trdpGroup: number; trdBusiness: number } }

/** Sync SoftOne help tables (COUNTRY, TRDPGROUP, TRDBUSINESS) into local lookup tables. */
export async function syncSoftOneLookups(): Promise<SyncLookupsResult> {
    const session = await auth()
    if (!session) return { success: false, message: "Unauthorized" }

    const cookieStore = await cookies()
    const clientId = cookieStore.get(SOFTONE_CLIENT_ID_COOKIE)?.value
    if (!clientId) return { success: false, message: "Not authenticated to SoftOne. Log in at Admin → SoftOne first." }

    try {
        const tables: { objectName: string; tableName: string }[] = [
            { objectName: "COUNTRY", tableName: "COUNTRY" },
            { objectName: "TRDPGROUP", tableName: "TRDPGROUP" },
            { objectName: "TRDBUSINESS", tableName: "TRDBUSINESS" },
        ]
        let countryCount = 0,
            trdpGroupCount = 0,
            trdBusinessCount = 0

        for (const { objectName, tableName } of tables) {
            const result = await getSoftOneTableData(clientId, objectName, tableName)
            if (!result.success || !("rows" in result)) {
                console.warn("[Sync Lookups]", tableName, (result as { message?: string }).message)
                continue
            }
            for (const row of result.rows) {
                if (tableName === "COUNTRY") {
                    const code = toInt(getRowVal(row, "COUNTRY"))
                    const name = toStr(getRowVal(row, "NAME"), 128)
                    if (code != null) {
                        await prisma.softOneCountry.upsert({
                            where: { code },
                            create: { code, name },
                            update: { name },
                        })
                        countryCount++
                    }
                } else if (tableName === "TRDPGROUP") {
                    const code = toInt(getRowVal(row, "TRDPGROUP"))
                    const shortCode = toStr(getRowVal(row, "CODE"), 25)
                    const name = toStr(getRowVal(row, "NAME"), 255)
                    if (code != null) {
                        await prisma.softOneTrdpGroup.upsert({
                            where: { code },
                            create: { code, shortCode, name },
                            update: { shortCode, name },
                        })
                        trdpGroupCount++
                    }
                } else if (tableName === "TRDBUSINESS") {
                    const code = toInt(getRowVal(row, "TRDBUSINESS"))
                    const shortCode = toStr(getRowVal(row, "CODE"), 25)
                    const name = toStr(getRowVal(row, "NAME"), 255)
                    if (code != null) {
                        await prisma.softOneTrdBusiness.upsert({
                            where: { code },
                            create: { code, shortCode, name },
                            update: { shortCode, name },
                        })
                        trdBusinessCount++
                    }
                }
            }
        }

        return {
            success: true,
            counts: { country: countryCount, trdpGroup: trdpGroupCount, trdBusiness: trdBusinessCount },
        }
    } catch (err: any) {
        console.error("[Sync Lookups]", err)
        return { success: false, message: err?.message ?? "Sync failed" }
    }
}

export type SyncGeodataResult = { success: boolean; message?: string; updated: number; errors: string[] }

/** Resolve LATITUDE/LONGITUDE for customers using geocode.maps.co (same service as locations). Skips rows that already have both set. */
export async function syncGeodataForCustomers(): Promise<SyncGeodataResult> {
    const session = await auth()
    if (!session) return { success: false, message: "Unauthorized", updated: 0, errors: [] }

    const errors: string[] = []
    let updated = 0

    try {
        const customers = await prisma.tRDR.findMany({
            where: {
                OR: [
                    { LATITUDE: null },
                    { LONGITUDE: null },
                ],
            },
            select: { id: true, TRDR: true, NAME: true, ADDRESS: true, CITY: true, ZIP: true, LATITUDE: true, LONGITUDE: true },
        })

        for (const c of customers) {
            const parts = [c.ADDRESS, c.CITY, c.ZIP].filter((s): s is string => !!s?.trim())
            const query = parts.length ? parts.join(", ") : null
            if (!query) continue

            try {
                const coords = await getCoordinates(query)
                if (coords && typeof coords.latitude === "number" && typeof coords.longitude === "number") {
                    await prisma.tRDR.update({
                        where: { id: c.id },
                        data: { LATITUDE: coords.latitude, LONGITUDE: coords.longitude },
                    })
                    updated++
                }
                await new Promise((r) => setTimeout(r, 250))
            } catch (e: any) {
                errors.push(`TRDR ${c.TRDR}: ${e?.message ?? String(e)}`)
            }
        }

        return { success: errors.length === 0, message: errors.length > 0 ? `${errors.length} failed` : undefined, updated, errors }
    } catch (err: any) {
        console.error("[Sync Geodata]", err)
        return { success: false, message: err?.message ?? "Geodata sync failed", updated, errors: [err?.message ?? String(err)] }
    }
}
