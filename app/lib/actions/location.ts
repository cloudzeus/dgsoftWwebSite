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
    const session = await auth()
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized access. Admin only.")

    const apiKey = process.env.GEOCODE_API;
    if (!apiKey?.trim()) throw new Error("Geocode API key is missing");

    const q = query?.trim();
    if (!q) return null;

    try {
        const url = `https://geocode.maps.co/search?q=${encodeURIComponent(q)}&api_key=${apiKey}&limit=1`;
        const res = await fetch(url, { next: { revalidate: 0 } });
        if (!res.ok) {
            const text = await res.text();
            throw new Error(`Geocode API error ${res.status}: ${text || res.statusText}`);
        }

        const data = await res.json();
        if (!Array.isArray(data) || data.length === 0) return null;

        const first = data[0];
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
