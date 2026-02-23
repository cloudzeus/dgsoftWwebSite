"use server";

import prisma from "@/lib/prisma"
import { auth } from "@/auth"

export async function getCustomers() {
    const session = await auth()
    if (!session) throw new Error("Unauthorized")

    try {
        return await prisma.tRDR.findMany({
            orderBy: { createdAt: "desc" },
            include: { kads: true }
        })
    } catch (error: any) {
        console.error("GET CUSTOMERS Error:", error)
        throw new Error(error.message)
    }
}

export async function createCustomer(data: any) {
    const session = await auth()
    if (!session) throw new Error("Unauthorized")

    try {
        const { kads, ...restData } = data;
        const sanitized = { ...restData };
        for (const key in sanitized) {
            if (sanitized[key] === "" && key !== "NAME" && key !== "CODE") {
                sanitized[key] = null;
            }
        }

        if (!sanitized.TRDR || sanitized.TRDR === 0) {
            const maxResult = await prisma.tRDR.aggregate({ _max: { TRDR: true } });
            sanitized.TRDR = (maxResult._max.TRDR || 0) + 1;
        }

        if (!sanitized.CODE) {
            sanitized.CODE = `CMD-${sanitized.TRDR}`;
        }

        return await prisma.tRDR.create({
            data: {
                ...sanitized,
                ...(kads && kads.length > 0 ? { kads: { create: kads } } : {})
            },
            include: { kads: true }
        })
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
        const sanitized = { ...restData };
        for (const key in sanitized) {
            if (sanitized[key] === "" && key !== "NAME" && key !== "CODE") {
                sanitized[key] = null;
            }
        }

        return await prisma.tRDR.update({
            where: { id },
            data: {
                ...sanitized,
                kads: {
                    deleteMany: {},
                    ...(kads && kads.length > 0 ? { create: kads } : {})
                }
            },
            include: { kads: true }
        })
    } catch (error: any) {
        console.error("UPDATE CUSTOMER Error:", error)
        throw new Error(error.message)
    }
}

export async function deleteCustomer(id: string) {
    const session = await auth()
    if (!session) throw new Error("Unauthorized")

    try {
        return await prisma.tRDR.delete({ where: { id } })
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
        const apiData = await res.json();

        if (apiData.error) throw new Error(apiData.error);

        const fetchedKads = apiData.firm_act_tab?.item?.map((k: any) => ({
            afm: afm.trim(),
            firm_act_code: String(k.firm_act_code || ""),
            firm_act_descr: String(k.firm_act_descr || ""),
            firm_act_kind: k.firm_act_kind === "1"
        })) || [];

        return await prisma.tRDR.update({
            where: { id: customerId },
            data: {
                kads: {
                    deleteMany: {},
                    ...(fetchedKads.length > 0 ? { create: fetchedKads } : {})
                }
            },
            include: { kads: true }
        });

    } catch (error: any) {
        console.error("GET KAD Error:", error)
        throw new Error(error.message)
    }
}
