"use server";

import prisma from "@/lib/prisma"
import { auth } from "@/auth"

export async function getLocations() {
    const session = await auth()
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized access. Admin only.")

    try {
        return await prisma.presence.findMany({
            orderBy: { order: "asc" },
        })
    } catch (error: any) {
        console.error("GET LOCATIONS Error:", error)
        throw new Error(error.message)
    }
}

export async function getPublicLocations() {
    try {
        return await prisma.presence.findMany({
            where: { published: true },
            orderBy: { order: "asc" },
        })
    } catch (error: any) {
        console.error("GET PUBLIC LOCATIONS Error:", error)
        return []
    }
}

export async function getLocation(id: string) {
    const session = await auth()
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized access. Admin only.")

    try {
        return await prisma.presence.findUnique({
            where: { id }
        })
    } catch (error: any) {
        console.error("GET LOCATION Error:", error)
        throw new Error(error.message)
    }
}

export async function createLocation(data: any) {
    const session = await auth()
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized access. Admin only.")

    try {
        return await prisma.presence.create({
            data: {
                ...data,
                latitude: data.latitude ? parseFloat(data.latitude) : null,
                longitude: data.longitude ? parseFloat(data.longitude) : null,
                order: data.order ? parseInt(data.order, 10) : 0,
                published: data.published ?? true,
            }
        })
    } catch (error: any) {
        console.error("CREATE LOCATION Error:", error)
        throw new Error(error.message)
    }
}

export async function updateLocation(id: string, data: any) {
    const session = await auth()
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized access. Admin only.")

    try {
        return await prisma.presence.update({
            where: { id },
            data: {
                ...data,
                latitude: data.latitude ? parseFloat(data.latitude) : null,
                longitude: data.longitude ? parseFloat(data.longitude) : null,
                order: data.order ? parseInt(data.order, 10) : 0,
                published: data.published ?? true,
            }
        })
    } catch (error: any) {
        console.error("UPDATE LOCATION Error:", error)
        throw new Error(error.message)
    }
}

export async function deleteLocation(id: string) {
    const session = await auth()
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized access. Admin only.")

    try {
        return await prisma.presence.delete({ where: { id } })
    } catch (error: any) {
        console.error("DELETE LOCATION Error:", error)
        throw new Error(error.message)
    }
}

/** Parse coordinate from API (geocode.maps.co returns lat/lon as strings). */
function parseCoord(value: unknown): number | null {
    if (value == null) return null;
    const n = typeof value === "string" ? parseFloat(value) : Number(value);
    return Number.isFinite(n) ? n : null;
}

export async function getCoordinates(query: string): Promise<{ latitude: number; longitude: number } | null> {
    const session = await auth();
    const role = (session?.user as { role?: string } | undefined)?.role ?? session?.user?.role;
    if (!session || role !== "ADMIN") throw new Error("Unauthorized access. Admin only.");

    const apiKey = process.env.GEOCODE_API?.trim();
    if (!apiKey) throw new Error("Geocode API key is missing. Set GEOCODE_API in .env (get a free key at geocode.maps.co).");

    let q = (query ?? "").trim();
    if (!q) return null;

    // Improve results for Greek addresses: append country if not already present
    const lower = q.toLowerCase();
    if (!lower.includes("greece") && !lower.includes("ελλάδα") && !lower.includes("ellada")) {
        q = `${q}, Greece`;
    }

    try {
        const url = `https://geocode.maps.co/search?q=${encodeURIComponent(q)}&api_key=${encodeURIComponent(apiKey)}&limit=1`;
        const res = await fetch(url, { next: { revalidate: 0 } });
        const text = await res.text();

        if (!res.ok) {
            let msg = `Geocode API error ${res.status}: ${text || res.statusText}`;
            if (res.status === 401 || res.status === 403) msg = "Invalid or missing GEOCODE_API key. Check .env and geocode.maps.co.";
            if (res.status === 429) msg = "Geocode rate limit exceeded. Try again in a few minutes.";
            console.error("GEOCODE Error:", msg);
            throw new Error(msg);
        }

        let data: unknown;
        try {
            data = JSON.parse(text);
        } catch {
            throw new Error("Invalid geocode API response");
        }
        if (!Array.isArray(data) || data.length === 0) return null;

        const first = data[0] as Record<string, unknown>;
        const lat = parseCoord(first?.lat ?? first?.latitude);
        const lon = parseCoord(first?.lon ?? first?.longitude);
        if (lat == null || lon == null) return null;

        return { latitude: lat, longitude: lon };
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        console.error("GEOCODE Error:", message);
        throw new Error(message);
    }
}
