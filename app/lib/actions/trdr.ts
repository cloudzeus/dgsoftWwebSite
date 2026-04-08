"use server";

import { Prisma } from "@prisma/client"
import prisma from "@/lib/prisma"
import { auth } from "@/auth"
import { cookies } from "next/headers"
import { getSoftOneTableData, getSoftOneTableDataWithFilter, getSoftOneTrdrByAfm, setSoftOneTrdrData, type SetDataTrdrPayload } from "@/lib/softone"
import { SOFTONE_CLIENT_ID_COOKIE } from "@/lib/softone-cookie"
import { getVatCompanyInfo, getVatCorrectData, type VatWwaCompanyInfo } from "@/lib/vat-wwa"
import { getCoordinates } from "@/app/lib/actions/location"
import { getAddressRegionMap } from "@/app/lib/actions/address-region"
import { normalizeAddressKey } from "@/lib/address-region-utils"

export async function getCustomers() {
    const session = await auth()
    if (!session) throw new Error("Unauthorized")

    try {
        const data = await prisma.tRDR.findMany({
            orderBy: { createdAt: "desc" },
            include: {
                kads: true,
                financials: { orderBy: { year: "desc" } }
            }
        })
        return JSON.parse(JSON.stringify(data))
    } catch (error: any) {
        console.error("GET CUSTOMERS Error:", error)
        throw new Error(error.message)
    }
}

/** Find TRDR (customer) records where any email field (EMAIL, EMAILACC, CCCEMAILMAR) contains the given domain (e.g. "dgsmart.gr"). */
export async function getTrdrByEmailDomain(domain: string) {
    const session = await auth()
    if (!session) throw new Error("Unauthorized")

    const needle = domain.includes("@") ? domain : `@${domain}`
    const data = await prisma.tRDR.findMany({
        where: {
            OR: [
                { EMAIL: { contains: needle } },
                { EMAILACC: { contains: needle } },
                { CCCEMAILMAR: { contains: needle } },
            ],
        },
        select: {
            id: true,
            TRDR: true,
            CODE: true,
            NAME: true,
            EMAIL: true,
            EMAILACC: true,
            CCCEMAILMAR: true,
            PHONE01: true,
            PHONE02: true,
        },
        orderBy: { NAME: "asc" },
    })
    return JSON.parse(JSON.stringify(data))
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
    "AREAS", "PHONE01", "PHONE02", "JOBTYPE", "JOBTYPETRD", "EMAIL", "EMAILACC", "CCCEMAILMAR", "TRDBUSINESS", "SHIPMENT",
    "PAYMENT", "SOCARRIER", "IRSDATA", "REMARKS", "INSDATE", "UPDDATE", "SOTITLE", "ISACTIVE", "ISPROSP",
    "LATITUDE", "LONGITUDE", "OBTYPE", "TRDGROUP", "TRDPGROUP", "WEBPAGE", "CONSENT", "PRJCS",
    "logo", "website", "displayAtCarousel", "registDate", "legalStatus", "legalForm", "isFranchise", "isHomeAddress", "numEmployees",
])

type CompanyFinancialsCreateItem = {
    year: number
    turnover: Prisma.Decimal
    ebitda: Prisma.Decimal
    netProfit: Prisma.Decimal
    eme: Prisma.Decimal
    assets: Prisma.Decimal
    equity: Prisma.Decimal
    totalDeMinimis3Years: Prisma.Decimal
}

function parseToDateOrNull(value: unknown): Date | null {
    if (value == null || value === "") return null
    if (value instanceof Date) return Number.isNaN(value.getTime()) ? null : value
    const raw = String(value).trim()
    if (!raw) return null
    const isoCandidate = new Date(raw)
    if (!Number.isNaN(isoCandidate.getTime())) return isoCandidate
    const match = raw.match(/^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{2,4})$/)
    if (!match) return null
    const day = Number(match[1])
    const month = Number(match[2]) - 1
    let year = Number(match[3])
    if (year < 100) year += 2000
    const parsed = new Date(Date.UTC(year, month, day))
    return Number.isNaN(parsed.getTime()) ? null : parsed
}

function toDecimalOrNull(value: unknown): Prisma.Decimal | null {
    if (value == null || value === "") return null
    const normalized = String(value).replace(",", ".").trim()
    if (!normalized) return null
    const n = Number(normalized)
    if (!Number.isFinite(n)) return null
    return new Prisma.Decimal(n)
}

function toDecimalOrZero(value: unknown): Prisma.Decimal {
    return toDecimalOrNull(value) ?? new Prisma.Decimal(0)
}

function sanitizeCompanyFinancialsForCreate(financials: unknown[]): CompanyFinancialsCreateItem[] {
    return financials
        .map((row) => {
            if (!row || typeof row !== "object") return null
            const raw = row as Record<string, unknown>
            const year = Number(raw.year)
            if (!Number.isInteger(year) || year < 1900 || year > 3000) return null
            return {
                year,
                turnover: toDecimalOrZero(raw.turnover),
                ebitda: toDecimalOrZero(raw.ebitda),
                netProfit: toDecimalOrZero(raw.netProfit),
                eme: toDecimalOrZero(raw.eme),
                assets: toDecimalOrZero(raw.assets),
                equity: toDecimalOrZero(raw.equity),
                totalDeMinimis3Years: toDecimalOrZero(raw.totalDeMinimis3Years),
            } satisfies CompanyFinancialsCreateItem
        })
        .filter((row): row is CompanyFinancialsCreateItem => row != null)
}

function sanitizeTrdrPayload(restData: Record<string, unknown>): Record<string, unknown> {
    const out: Record<string, unknown> = {};
    for (const key of Object.keys(restData)) {
        if (!TRDR_DATA_KEYS.has(key)) continue;
        let val = restData[key];
        if (val === "" && key !== "NAME" && key !== "CODE") val = null;
        if (key === "registDate") val = parseToDateOrNull(val);
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
        const { kads, financials, ...restData } = data;
        const sanitized = sanitizeTrdrPayload(restData);

        if (!sanitized.TRDR || sanitized.TRDR === 0) {
            const maxResult = await prisma.tRDR.aggregate({ _max: { TRDR: true } });
            sanitized.TRDR = (maxResult._max.TRDR || 0) + 1;
        }

        if (!sanitized.CODE) {
            sanitized.CODE = `CMD-${sanitized.TRDR}`;
        }

        const kadsToCreate = Array.isArray(kads) && kads.length > 0 ? sanitizeKadsForCreate(kads) : [];
        const financialsToCreate = Array.isArray(financials) && financials.length > 0 ? sanitizeCompanyFinancialsForCreate(financials) : [];
        const createData = {
            ...sanitized,
            ...(kadsToCreate.length > 0 ? { kads: { create: kadsToCreate } } : {}),
            ...(financialsToCreate.length > 0 ? { financials: { create: financialsToCreate } } : {}),
        } as Prisma.TRDRCreateInput;
        const res = await prisma.tRDR.create({
            data: createData,
            include: {
                kads: true,
                financials: { orderBy: { year: "desc" } }
            }
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
        const { kads, financials, ...restData } = data;
        const sanitized = sanitizeTrdrPayload(restData);
        const kadsToCreate = Array.isArray(kads) && kads.length > 0 ? sanitizeKadsForCreate(kads) : undefined;
        const financialsToCreate = Array.isArray(financials) && financials.length > 0 ? sanitizeCompanyFinancialsForCreate(financials) : undefined;

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
            financials: {
                deleteMany: {},
                ...(financialsToCreate && financialsToCreate.length > 0 ? { create: financialsToCreate } : {}),
            },
        } as Prisma.TRDRUpdateInput;
        const res = await prisma.tRDR.update({
            where: { id },
            data: updateData,
            include: {
                kads: true,
                financials: { orderBy: { year: "desc" } }
            }
        })
        return JSON.parse(JSON.stringify(res))
    } catch (error: any) {
        console.error("UPDATE CUSTOMER Error:", error)
        throw new Error(error.message)
    }
}

function toNum(v: unknown): number | undefined {
    if (v == null || v === "") return undefined
    const n = Number(v)
    return Number.isFinite(n) ? n : undefined
}

/** Push customer data to SoftOne ERP (SetData). When original is provided, only changed fields are sent to avoid erasing other ERP values. */
export async function pushCustomerToErp(
    trdrNumber: number,
    data: Record<string, unknown>,
    original?: Record<string, unknown> | null
): Promise<{ success: boolean; message?: string }> {
    const session = await auth()
    if (!session) return { success: false, message: "Unauthorized" }

    const cookieStore = await cookies()
    const clientId = cookieStore.get(SOFTONE_CLIENT_ID_COOKIE)?.value
    if (!clientId) return { success: false, message: "Not authenticated to SoftOne. Log in at Admin → SoftOne first." }

    const numKeys = ["COUNTRY", "TRDGROUP", "TRDPGROUP", "TRDBUSINESS"] as const
    const strKeys = ["CODE", "NAME", "AFM", "PHONE01", "PHONE02", "ADDRESS", "ZIP", "CITY", "EMAIL", "REMARKS"] as const

    const getCurrent = (key: string): string | number | null | undefined => {
        if (numKeys.includes(key as any)) return toNum(data[key]) ?? undefined
        if (key === "AFM") return data.AFM != null ? String(data.AFM).trim() || undefined : undefined
        return data[key] != null ? String(data[key]).trim() || undefined : undefined
    }
    const getOriginal = (key: string): string | number | null | undefined => {
        if (!original) return undefined
        if (numKeys.includes(key as any)) return toNum(original[key]) ?? undefined
        return original[key] != null ? String(original[key]).trim() || undefined : undefined
    }

    const erpPayload: SetDataTrdrPayload = { TRDR: trdrNumber }

    if (original != null) {
        for (const key of numKeys) {
            const cur = getCurrent(key)
            const orig = getOriginal(key)
            if (cur !== orig) (erpPayload as Record<string, unknown>)[key] = cur ?? ""
        }
        for (const key of strKeys) {
            const cur = getCurrent(key)
            const orig = getOriginal(key)
            if (cur !== orig) (erpPayload as Record<string, unknown>)[key] = cur ?? ""
        }
    } else {
        erpPayload.CODE = data.CODE != null ? String(data.CODE) : undefined
        erpPayload.NAME = data.NAME != null ? String(data.NAME) : undefined
        erpPayload.AFM = data.AFM != null ? String(data.AFM).trim() || undefined : undefined
        erpPayload.COUNTRY = toNum(data.COUNTRY)
        erpPayload.TRDGROUP = toNum(data.TRDGROUP)
        erpPayload.TRDPGROUP = toNum(data.TRDPGROUP)
        erpPayload.TRDBUSINESS = toNum(data.TRDBUSINESS)
        erpPayload.PHONE01 = data.PHONE01 != null ? String(data.PHONE01) : undefined
        erpPayload.PHONE02 = data.PHONE02 != null ? String(data.PHONE02) : undefined
        erpPayload.ADDRESS = data.ADDRESS != null ? String(data.ADDRESS) : undefined
        erpPayload.ZIP = data.ZIP != null ? String(data.ZIP) : undefined
        erpPayload.CITY = data.CITY != null ? String(data.CITY) : undefined
        erpPayload.EMAIL = data.EMAIL != null ? String(data.EMAIL) : undefined
        erpPayload.REMARKS = data.REMARKS != null ? String(data.REMARKS) : undefined
    }

    const result = await setSoftOneTrdrData(clientId, trdrNumber, erpPayload)
    if (result.success) return { success: true }
    return { success: false, message: (result as { message?: string }).message ?? "ERP update failed" }
}

export type SyncFromErpByAfmResult = { success: boolean; message?: string; updated?: boolean }

/** Query ERP by customer AFM and update our DB with the result. Enriches with vat.wwa.gr for Greek AFM. */
export async function syncCustomerFromErpByAfm(customerId: string): Promise<SyncFromErpByAfmResult> {
    const session = await auth()
    if (!session) return { success: false, message: "Unauthorized" }

    const cookieStore = await cookies()
    const clientId = cookieStore.get(SOFTONE_CLIENT_ID_COOKIE)?.value
    if (!clientId) return { success: false, message: "Not authenticated to SoftOne. Log in at Admin → SoftOne first." }

    const customer = await prisma.tRDR.findUnique({
        where: { id: customerId },
        include: { kads: true, financials: { orderBy: { year: "desc" } } }
    })
    if (!customer) return { success: false, message: "Customer not found" }
    const afm = customer.AFM?.trim()
    if (!afm) return { success: false, message: "Customer has no AFM" }

    const result = await getSoftOneTrdrByAfm(clientId, afm)
    if (!("rows" in result) || !result.success) {
        return { success: false, message: (result as { message?: string }).message ?? "ERP request failed" }
    }
    const rows = result.rows
    if (!rows.length) return { success: false, message: "No record in ERP for this AFM" }

    const row = rows[0]
    const trdrNum = toInt(getRowVal(row, "TRDR"))
    const code = toStr(getRowVal(row, "CODE"), 25) ?? (trdrNum != null ? `CMD-${trdrNum}` : null)
    const name = toStr(getRowVal(row, "NAME"), 128)
    const countryCode = toInt(getRowVal(row, "COUNTRY"))
    let vatInfo: Awaited<ReturnType<typeof getVatCompanyInfo>> = null
    if (afm && countryCode === GREECE_COUNTRY_CODE && isGreekAfm(afm)) {
        vatInfo = await getVatCompanyInfo(afm)
    }
    const correctData = getVatCorrectData(vatInfo)

    const softOneRow = {
        SODTYPE: toInt(getRowVal(row, "SODTYPE")) ?? 13,
        TRDR: trdrNum ?? customer.TRDR,
        CODE: code ?? customer.CODE,
        NAME: name ?? customer.NAME,
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
        CCCEMAILMAR: toStr(getRowVal(row, "CCCEMAILMAR"), 255),
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
        registDate: null as Date | null,
    }
    const merged = { ...softOneRow }
    if (correctData) {
        if (correctData.NAME) merged.NAME = correctData.NAME.slice(0, 128)
        if (correctData.ADDRESS) merged.ADDRESS = correctData.ADDRESS.slice(0, 100)
        if (correctData.CITY) merged.CITY = correctData.CITY.slice(0, 30)
        if (correctData.ZIP) merged.ZIP = correctData.ZIP.slice(0, 10)
        if (correctData.legalStatus) merged.legalStatus = correctData.legalStatus.slice(0, 128)
        if (correctData.registDate) merged.registDate = parseToDateOrNull(correctData.registDate)
    }

    const updatePayload: Record<string, unknown> = { ...merged }
    delete updatePayload.id
    delete (updatePayload as any).createdAt
    delete (updatePayload as any).updatedAt
    const dataOnlyTrdrKeys: Record<string, unknown> = {}
    for (const k of TRDR_DATA_KEYS) {
        if (updatePayload[k] !== undefined) dataOnlyTrdrKeys[k] = updatePayload[k]
    }
    const kadsPayload = correctData?.kads?.length ? correctData.kads : undefined
    const kadsToCreate = kadsPayload && kadsPayload.length > 0 ? sanitizeKadsForCreate(kadsPayload as unknown[]) : undefined

    const updateData = {
        ...dataOnlyTrdrKeys,
        kads: {
            deleteMany: {},
            ...(kadsToCreate && kadsToCreate.length > 0 ? { create: kadsToCreate } : {}),
        },
    } as Prisma.TRDRUpdateInput

    await prisma.tRDR.update({
        where: { id: customerId },
        data: updateData,
        include: { kads: true, financials: { orderBy: { year: "desc" } } },
    })
    return { success: true, updated: true }
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

export type DeleteInactiveResult = { success: boolean; deleted: number; message?: string }

/** Fetch TRDR numbers with ISACTIVE=0 from SoftOne, then delete those from our MySQL database. Admin only. */
export async function deleteInactiveCustomers(): Promise<DeleteInactiveResult> {
    const session = await auth()
    if (!session || (session.user as { role?: string })?.role !== "ADMIN") {
        return { success: false, deleted: 0, message: "Unauthorized" }
    }

    const cookieStore = await cookies()
    const clientId = cookieStore.get(SOFTONE_CLIENT_ID_COOKIE)?.value
    if (!clientId) {
        return { success: false, deleted: 0, message: "Not authenticated to SoftOne. Log in at Admin → SoftOne first." }
    }

    try {
        const result = await getSoftOneTableDataWithFilter(
            clientId,
            "CUSTOMER",
            "TRDR",
            "ISACTIVE=0",
            "TRDR"
        )
        if (!("rows" in result) || !result.success) {
            const msg = (result as { message?: string }).message ?? "Failed to get inactive TRDR list from SoftOne"
            return { success: false, deleted: 0, message: msg }
        }

        const trdrNumbers = result.rows
            .map((row) => toInt(getRowVal(row, "TRDR")))
            .filter((n): n is number => n != null && Number.isFinite(n))

        console.log("[Delete inactive] SoftOne returned", result.rows.length, "customers with ISACTIVE=0. Parsed TRDR count:", trdrNumbers.length)

        if (trdrNumbers.length === 0) {
            console.log("[Delete inactive] No inactive TRDRs to delete.")
            return { success: true, deleted: 0 }
        }

        const foundInDb = await prisma.tRDR.findMany({
            where: { TRDR: { in: trdrNumbers } },
            select: { id: true },
        })
        console.log("[Delete inactive] Found", foundInDb.length, "of those in MySQL.")

        const deleteResult = await prisma.tRDR.deleteMany({
            where: { TRDR: { in: trdrNumbers } },
        })
        console.log("[Delete inactive] Deleted all those records. Deleted count:", deleteResult.count)
        return { success: true, deleted: deleteResult.count }
    } catch (err: any) {
        console.error("[Delete inactive customers]", err)
        return { success: false, deleted: 0, message: err?.message ?? "Delete failed" }
    }
}

export async function getKAD(customerId: string, afm: string) {
    const session = await auth()
    if (!session) throw new Error("Unauthorized")

    if (!afm || afm.trim() === "") {
        const existing = await prisma.tRDR.findUnique({
            where: { id: customerId },
            include: { kads: true, financials: { orderBy: { year: "desc" } } }
        })
        if (!existing) throw new Error("Customer not found")
        return JSON.parse(JSON.stringify(existing))
    }

    try {
        const res = await fetch("https://vat.wwa.gr/afm2info", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ afm: afm.trim() })
        });

        if (!res.ok) throw new Error("VAT API error");
        const apiData = (await res.json()) as VatWwaCompanyInfo & { error?: string };

        if (apiData.error) throw new Error(apiData.error);

        const rawItems = apiData.firm_act_tab?.item;
        const itemArray: unknown[] = Array.isArray(rawItems)
            ? rawItems
            : rawItems != null && typeof rawItems === "object"
                ? [rawItems]
                : [];
        const fetchedKads = itemArray.map((k: any) => ({
            afm: afm.trim(),
            firm_act_code: String(k?.firm_act_code ?? "").trim().slice(0, 50),
            firm_act_descr: String(k?.firm_act_descr ?? "").trim().slice(0, 255),
            firm_act_kind: k?.firm_act_kind === "1"
        }));

        const correctData = getVatCorrectData(apiData as VatWwaCompanyInfo);
        const registDate = parseToDateOrNull(correctData?.registDate);
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
            include: { kads: true, financials: { orderBy: { year: "desc" } } }
        });
        return JSON.parse(JSON.stringify(dbRes))

    } catch (error: any) {
        console.error("GET KAD Error:", error)
        throw new Error(error.message)
    }
}

/** Customer considered to have KAD/legal/established data if any of these is set. */
function hasKadLegalData(row: { legalStatus: string | null; registDate: Date | string | null; kads: unknown[] }): boolean {
    const hasLegal = row.legalStatus != null && row.legalStatus.trim() !== ""
    const hasRegist = row.registDate != null
    const hasKads = Array.isArray(row.kads) && row.kads.length > 0
    return hasLegal || hasRegist || hasKads
}

export type CustomersKadSyncStatus = {
    success: boolean
    message?: string
    /** Customers with Greek AFM that already have KAD/legal/established. */
    alreadyComplete: number
    /** Customers with Greek AFM that still need sync. */
    toSync: Array<{ id: string; AFM: string }>
    /** Customers without Greek AFM (skipped). */
    noGreekAfm: number
}

/** Find which customers already have KAD/legal/established and which need syncing (Greek AFM only). */
export async function getCustomersKadSyncStatus(): Promise<CustomersKadSyncStatus> {
    const session = await auth()
    if (!session) return { success: false, message: "Unauthorized", alreadyComplete: 0, toSync: [], noGreekAfm: 0 }

    try {
        const all = await prisma.tRDR.findMany({
            select: { id: true, AFM: true, legalStatus: true, registDate: true, kads: { select: { id: true } } },
        })
        let alreadyComplete = 0
        const toSync: Array<{ id: string; AFM: string }> = []
        let noGreekAfm = 0
        for (const row of all) {
            const afm = row.AFM?.trim() ?? ""
            if (!isGreekAfm(afm)) {
                noGreekAfm++
                continue
            }
            const kads = row.kads ?? []
            const hasAnyKads = Array.isArray(kads) && kads.length > 0
            const hasData = hasKadLegalData({ legalStatus: row.legalStatus, registDate: row.registDate, kads })
            if (hasData && hasAnyKads) {
                alreadyComplete++
            } else {
                toSync.push({ id: row.id, AFM: afm })
            }
        }
        return { success: true, alreadyComplete, toSync, noGreekAfm }
    } catch (err: any) {
        console.error("[getCustomersKadSyncStatus]", err)
        return { success: false, message: err?.message ?? "Failed to get status", alreadyComplete: 0, toSync: [], noGreekAfm: 0 }
    }
}

export type SyncKadLegalResult = {
    success: boolean
    message?: string
    alreadyComplete: number
    synced: number
    errors: string[]
}

/** First get status (already complete vs to sync), then fetch KAD/legal/established from vat.wwa.gr for all that need it. */
export async function syncKadAndLegalForAllMissing(): Promise<SyncKadLegalResult> {
    const session = await auth()
    if (!session) {
        return { success: false, message: "Unauthorized", alreadyComplete: 0, synced: 0, errors: [] }
    }
    const status = await getCustomersKadSyncStatus()
    if (!status.success) {
        return { success: false, message: status.message, alreadyComplete: 0, synced: 0, errors: [] }
    }
    const errors: string[] = []
    let synced = 0

    // Run in parallel batches of 5 to avoid hammering vat.wwa.gr
    for (const batch of chunk(status.toSync, 5)) {
        await Promise.all(
            batch.map(({ id, AFM }) =>
                getKAD(id, AFM)
                    .then(() => { synced++ })
                    .catch((e: unknown) => { errors.push(`${AFM}: ${e instanceof Error ? e.message : String(e)}`) })
            )
        )
    }
    return {
        success: true,
        alreadyComplete: status.alreadyComplete,
        synced,
        errors,
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

function chunk<T>(arr: T[], size: number): T[][] {
    const out: T[][] = []
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size))
    return out
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
        console.log("[Sync Action] Calling getSoftOneTableData(CUSTOMER, TRDR)...")
        const result = await getSoftOneTableData(clientId, "CUSTOMER", "TRDR")
        if (!("rows" in result) || !result.success) {
            const msg = (result as { message?: string }).message ?? "Failed to get TRDR data from SoftOne"
            return { success: false, message: msg, synced: 0, created: 0, updated: 0, errors: [] }
        }

        const rows = result.rows
        console.log("[Sync Action] Got", rows.length, "rows. Pre-loading DB maps...")

        // 1) Single query — build TRDR→id and AFM→id maps, eliminating N findUnique calls
        const existingAll = await prisma.tRDR.findMany({ select: { id: true, TRDR: true, AFM: true } })
        const byTrdr = new Map<number, string>()
        const byAfm  = new Map<string, string>()
        for (const r of existingAll) {
            byTrdr.set(r.TRDR, r.id)
            if (r.AFM?.trim()) byAfm.set(r.AFM.trim(), r.id)
        }
        console.log("[Sync Action] DB map:", byTrdr.size, "existing records")

        // 2) Validate rows
        const validRows: typeof rows = []
        for (const row of rows) {
            const trdrNum = toInt(getRowVal(row, "TRDR"))
            const code    = toStr(getRowVal(row, "CODE"), 25) ?? (trdrNum != null ? `CMD-${trdrNum}` : null)
            const name    = toStr(getRowVal(row, "NAME"), 128)
            const afm     = toStr(getRowVal(row, "AFM"), 20)
            if (code == null || name == null) { errors.push(`Row missing CODE or NAME (TRDR=${trdrNum}), skipped`); continue }
            if (!afm?.trim())                  { errors.push(`Row missing AFM (TRDR=${trdrNum}), skipped`);         continue }
            validRows.push(row)
        }

        // 3) Process vat.wwa.gr calls in parallel batches of 10 (was fully sequential)
        type ProcessedRow = {
            merged: Record<string, unknown>
            kadsPayload: unknown[] | undefined
            isNew: boolean
            existingId?: string
        }
        const processed: ProcessedRow[] = []

        for (const batch of chunk(validRows, 10)) {
            const batchResults = await Promise.all(
                batch.map(async (row): Promise<ProcessedRow | null> => {
                    try {
                        const trdrNum     = toInt(getRowVal(row, "TRDR"))!
                        const code        = toStr(getRowVal(row, "CODE"), 25) ?? `CMD-${trdrNum}`
                        const name        = toStr(getRowVal(row, "NAME"), 128)!
                        const afm         = toStr(getRowVal(row, "AFM"), 20)!
                        const countryCode = toInt(getRowVal(row, "COUNTRY"))

                        let vatInfo: Awaited<ReturnType<typeof getVatCompanyInfo>> = null
                        if (countryCode === GREECE_COUNTRY_CODE && isGreekAfm(afm)) {
                            vatInfo = await getVatCompanyInfo(afm)
                        }
                        const correctData = getVatCorrectData(vatInfo)

                        const softOneRow = {
                            SODTYPE: toInt(getRowVal(row, "SODTYPE")) ?? 13,
                            TRDR: trdrNum,
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
                            EMAIL:       toStr(getRowVal(row, "EMAIL"), 128),
                            EMAILACC:    toStr(getRowVal(row, "EMAILACC"), 128),
                            CCCEMAILMAR: toStr(getRowVal(row, "CCCEMAILMAR"), 255),
                            TRDBUSINESS: toInt(getRowVal(row, "TRDBUSINESS")),
                            SHIPMENT:    toInt(getRowVal(row, "SHIPMENT")),
                            PAYMENT:     toInt(getRowVal(row, "PAYMENT")),
                            SOCARRIER:   toInt(getRowVal(row, "SOCARRIER")),
                            IRSDATA:     toStr(getRowVal(row, "IRSDATA"), 128),
                            REMARKS:     toStr(getRowVal(row, "REMARKS")),
                            INSDATE:     toDate(getRowVal(row, "INSDATE")),
                            UPDDATE:     toDate(getRowVal(row, "UPDDATE")),
                            SOTITLE:     toStr(getRowVal(row, "SOTITLE"), 64),
                            ISACTIVE:    toInt(getRowVal(row, "ISACTIVE")),
                            ISPROSP:     toInt(getRowVal(row, "ISPROSP")),
                            LATITUDE:    toFloat(getRowVal(row, "LATITUDE")),
                            LONGITUDE:   toFloat(getRowVal(row, "LONGITUDE")),
                            OBTYPE:      toInt(getRowVal(row, "OBTYPE")),
                            TRDGROUP:    toInt(getRowVal(row, "TRDGROUP")),
                            TRDPGROUP:   toInt(getRowVal(row, "TRDPGROUP")),
                            WEBPAGE:     toStr(getRowVal(row, "WEBPAGE"), 255),
                            CONSENT:     toInt(getRowVal(row, "CONSENT")),
                            PRJCS:       toInt(getRowVal(row, "PRJCS")),
                            numEmployees: toInt(getRowVal(row, "numEmployees")) ?? toInt(getRowVal(row, "NUMEMPLOYEES")),
                            legalStatus:  null as string | null,
                            registDate:   null as Date | null,
                        }

                        // Apply vat.wwa.gr data over SoftOne (official source wins)
                        const merged = { ...softOneRow }
                        if (correctData) {
                            if (correctData.NAME)        merged.NAME        = correctData.NAME.slice(0, 128)
                            if (correctData.ADDRESS)     merged.ADDRESS     = correctData.ADDRESS.slice(0, 100)
                            if (correctData.CITY)        merged.CITY        = correctData.CITY.slice(0, 30)
                            if (correctData.ZIP)         merged.ZIP         = correctData.ZIP.slice(0, 10)
                            if (correctData.legalStatus) merged.legalStatus = correctData.legalStatus.slice(0, 128)
                            if (correctData.registDate)  merged.registDate  = parseToDateOrNull(correctData.registDate)
                        }

                        const kadsPayload = correctData?.kads?.length ? correctData.kads : undefined
                        const existingId  = byTrdr.get(trdrNum)
                        return { merged, kadsPayload, isNew: !existingId, existingId }
                    } catch (e: any) {
                        errors.push(`TRDR row ${getRowVal(row, "TRDR")}: ${e?.message ?? String(e)}`)
                        return null
                    }
                })
            )
            for (const r of batchResults) if (r) processed.push(r)
            console.log("[Sync Action] Processed:", processed.length, "/", validRows.length)
        }

        // 4) Deduplicate new records by AFM (guard against AFM collisions within the sync batch)
        const seenAfms = new Set<string>(byAfm.keys())
        const toCreate: ProcessedRow[] = []
        const toUpdate: ProcessedRow[] = processed.filter(p => !p.isNew)

        for (const p of processed.filter(p => p.isNew)) {
            const afm = (p.merged.AFM as string)?.trim()
            if (afm && seenAfms.has(afm)) {
                errors.push(`Skipped duplicate AFM ${afm} (TRDR ${p.merged.TRDR})`)
                continue
            }
            if (afm) seenAfms.add(afm)
            toCreate.push(p)
        }

        console.log("[Sync Action] DB writes: create", toCreate.length, "update", toUpdate.length)

        // 5) Batch creates — createMany for records without kads (single INSERT), individual for those with kads
        const simpleCreates = toCreate.filter(p => !p.kadsPayload?.length)
        const complexCreates = toCreate.filter(p =>  p.kadsPayload?.length)

        for (const batch of chunk(simpleCreates, 200)) {
            try {
                await prisma.tRDR.createMany({ data: batch.map(p => p.merged) as any[], skipDuplicates: true })
                created += batch.length
            } catch (e: any) {
                // Fallback: individual creates to preserve per-row error tracking
                for (const p of batch) {
                    try { await prisma.tRDR.create({ data: p.merged as any }); created++ }
                    catch (err: any) { errors.push(`TRDR ${p.merged.TRDR}: ${err?.message}`) }
                }
            }
        }
        for (const p of complexCreates) {
            try {
                await prisma.tRDR.create({ data: { ...(p.merged as any), kads: { create: p.kadsPayload as any } } })
                created++
            } catch (e: any) { errors.push(`TRDR ${p.merged.TRDR}: ${e?.message}`) }
        }

        // 6) Batch updates — $transaction per chunk, fallback to individual on error
        for (const batch of chunk(toUpdate, 50)) {
            try {
                await prisma.$transaction(
                    batch.map(p => prisma.tRDR.update({
                        where: { id: p.existingId! },
                        data: {
                            ...(p.merged as any),
                            ...(p.kadsPayload != null ? { kads: { deleteMany: {}, create: p.kadsPayload as any } } : {}),
                        },
                    }))
                )
                updated += batch.length
            } catch {
                for (const p of batch) {
                    try {
                        await prisma.tRDR.update({
                            where: { id: p.existingId! },
                            data: {
                                ...(p.merged as any),
                                ...(p.kadsPayload != null ? { kads: { deleteMany: {}, create: p.kadsPayload as any } } : {}),
                            },
                        })
                        updated++
                    } catch (err: any) { errors.push(`TRDR ${p.merged.TRDR}: ${err?.message}`) }
                }
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
        return { success: false, message: err?.message ?? "Sync failed", synced: 0, created: 0, updated: 0, errors: [err?.message ?? String(err)] }
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

export type SyncEmailAccResult = { success: boolean; updated: number; message?: string }

/** Fetch TRDR + EMAILACC + CCCEMAILMAR from SoftOne and update our DB. Use after full sync to refresh email fields. */
export async function syncEmailAccFromSoftOne(): Promise<SyncEmailAccResult> {
    const session = await auth()
    if (!session) return { success: false, updated: 0, message: "Unauthorized" }

    const cookieStore = await cookies()
    const clientId = cookieStore.get(SOFTONE_CLIENT_ID_COOKIE)?.value
    if (!clientId)
        return { success: false, updated: 0, message: "Not authenticated to SoftOne. Log in at Admin → SoftOne first." }

    try {
        const result = await getSoftOneTableDataWithFilter(
            clientId,
            "CUSTOMER",
            "TRDR",
            "1=1",
            "TRDR,EMAILACC,CCCEMAILMAR"
        )
        if (!("rows" in result) || !result.success) {
            const msg = (result as { message?: string }).message ?? "Failed to get email fields from SoftOne"
            return { success: false, updated: 0, message: msg }
        }

        // Pre-load TRDR→id map — 1 query instead of N findUnique calls
        const existing = await prisma.tRDR.findMany({ select: { id: true, TRDR: true } })
        const byTrdr = new Map<number, string>()
        for (const r of existing) byTrdr.set(r.TRDR, r.id)

        // Build all update operations upfront
        const ops = result.rows
            .map(row => {
                const trdrNum = toInt(getRowVal(row, "TRDR"))
                if (trdrNum == null) return null
                const id = byTrdr.get(trdrNum)
                if (!id) return null
                return prisma.tRDR.update({
                    where: { id },
                    data: {
                        EMAILACC:    toStr(getRowVal(row, "EMAILACC"), 128) ?? null,
                        CCCEMAILMAR: toStr(getRowVal(row, "CCCEMAILMAR"), 255) ?? null,
                    },
                })
            })
            .filter((op): op is NonNullable<typeof op> => op != null)

        // Execute in batched transactions of 100
        for (const batch of chunk(ops, 100)) {
            await prisma.$transaction(batch)
        }

        return { success: true, updated: ops.length }
    } catch (err: any) {
        console.error("[Sync email fields From SoftOne]", err)
        return { success: false, updated: 0, message: err?.message ?? "Sync failed" }
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

            if (tableName === "COUNTRY") {
                const upserts = result.rows
                    .map(row => ({ code: toInt(getRowVal(row, "COUNTRY")), name: toStr(getRowVal(row, "NAME"), 128) }))
                    .filter((r): r is { code: number; name: string | null } => r.code != null)
                for (const batch of chunk(upserts, 100)) {
                    await prisma.$transaction(batch.map(r =>
                        prisma.softOneCountry.upsert({ where: { code: r.code }, create: r, update: { name: r.name } })
                    ))
                }
                countryCount = upserts.length
            } else if (tableName === "TRDPGROUP") {
                const upserts = result.rows
                    .map(row => ({ code: toInt(getRowVal(row, "TRDPGROUP")), shortCode: toStr(getRowVal(row, "CODE"), 25), name: toStr(getRowVal(row, "NAME"), 255) }))
                    .filter((r): r is { code: number; shortCode: string | null; name: string | null } => r.code != null)
                for (const batch of chunk(upserts, 100)) {
                    await prisma.$transaction(batch.map(r =>
                        prisma.softOneTrdpGroup.upsert({ where: { code: r.code }, create: r, update: { shortCode: r.shortCode, name: r.name } })
                    ))
                }
                trdpGroupCount = upserts.length
            } else if (tableName === "TRDBUSINESS") {
                const upserts = result.rows
                    .map(row => ({ code: toInt(getRowVal(row, "TRDBUSINESS")), shortCode: toStr(getRowVal(row, "CODE"), 25), name: toStr(getRowVal(row, "NAME"), 255) }))
                    .filter((r): r is { code: number; shortCode: string | null; name: string | null } => r.code != null)
                for (const batch of chunk(upserts, 100)) {
                    await prisma.$transaction(batch.map(r =>
                        prisma.softOneTrdBusiness.upsert({ where: { code: r.code }, create: r, update: { shortCode: r.shortCode, name: r.name } })
                    ))
                }
                trdBusinessCount = upserts.length
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

        // Run in parallel batches of 5; 400ms delay between batches (not per item) for rate limiting
        const addressable = customers.filter(c =>
            [c.ADDRESS, c.CITY, c.ZIP].some(s => s?.trim())
        )
        for (const batch of chunk(addressable, 5)) {
            await Promise.all(
                batch.map(async c => {
                    const parts = [c.ADDRESS, c.CITY, c.ZIP].filter((s): s is string => !!s?.trim())
                    try {
                        const coords = await getCoordinates(`${parts.join(", ")}, Greece`)
                        if (coords && Number.isFinite(coords.latitude) && Number.isFinite(coords.longitude)) {
                            await prisma.tRDR.update({
                                where: { id: c.id },
                                data: { LATITUDE: coords.latitude, LONGITUDE: coords.longitude },
                            })
                            updated++
                        }
                    } catch (e: any) {
                        errors.push(`TRDR ${c.TRDR}: ${e?.message ?? String(e)}`)
                    }
                })
            )
            await new Promise(r => setTimeout(r, 400))
        }

        return { success: errors.length === 0, message: errors.length > 0 ? `${errors.length} failed` : undefined, updated, errors }
    } catch (err: any) {
        console.error("[Sync Geodata]", err)
        return { success: false, message: err?.message ?? "Geodata sync failed", updated, errors: [err?.message ?? String(err)] }
    }
}
