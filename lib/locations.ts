import { cache } from "react";
import prisma from "@/lib/prisma";

/**
 * Office locations, shaped for the /locations pages.
 *
 * The Presence model has no slug column, so slugs are derived from the Greek
 * city name via a fixed transliteration table. That keeps the URLs stable and
 * readable (/locations/peristeri) without a migration, and an unknown city
 * simply gets a transliterated fallback rather than breaking the page.
 */

export type OfficeLocation = {
  id: string;
  slug: string;
  name: string;
  city: string;
  region: string | null;
  address: string | null;
  zip: string | null;
  country: string;
  countryCode: string;
  phone: string | null;
  email: string | null;
  latitude: number | null;
  longitude: number | null;
  isHeadquarters: boolean;
  /** Nearby areas this office serves, used in copy and areaServed markup. */
  serves: string[];
};

/** Same normalisation as normalizeCity, usable at module scope. */
function normalizeCityLiteral(v: string): string {
  return v.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ς/g, "σ");
}

/** The registered seat. Everything else is a branch. */
const HQ_CITY = normalizeCityLiteral("Περιστέρι");

const CITY_SLUGS: Record<string, string> = {
  περιστερι: "peristeri",
  αθηνα: "athina",
  βολος: "volos",
  ρεθυμνο: "rethymno",
  ιωαννινα: "ioannina",
  λευκωσια: "lefkosia",
};

/** Region and served-area context per city — used in copy and schema. */
const CITY_CONTEXT: Record<string, { region: string; serves: string[] }> = {
  περιστερι: {
    region: "Αττική",
    serves: ["Περιστέρι", "Αιγάλεω", "Χαϊδάρι", "Πετρούπολη", "Ίλιον", "Αθήνα", "Αττική"],
  },
  αθηνα: {
    region: "Αττική",
    serves: ["Αθήνα", "Κολωνάκι", "Αμπελόκηποι", "Πειραιάς", "Αττική"],
  },
  βολος: {
    region: "Θεσσαλία",
    serves: ["Βόλος", "Νέα Ιωνία", "Λάρισα", "Μαγνησία", "Θεσσαλία"],
  },
  ρεθυμνο: {
    region: "Κρήτη",
    serves: ["Ρέθυμνο", "Χανιά", "Ηράκλειο", "Κρήτη"],
  },
  ιωαννινα: {
    region: "Ήπειρος",
    serves: ["Ιωάννινα", "Άρτα", "Πρέβεζα", "Ήπειρος"],
  },
  λευκωσια: {
    region: "Κύπρος",
    serves: ["Λευκωσία", "Λεμεσός", "Λάρνακα", "Κύπρος"],
  },
};

/** Strip accents and lowercase, so lookups tolerate the data's stray spaces. */
function normalizeCity(city: string): string {
  return normalizeCityLiteral(city);
}

const GREEK_TO_LATIN: Record<string, string> = {
  α: "a", β: "v", γ: "g", δ: "d", ε: "e", ζ: "z", η: "i", θ: "th", ι: "i",
  κ: "k", λ: "l", μ: "m", ν: "n", ξ: "x", ο: "o", π: "p", ρ: "r", σ: "s",
  τ: "t", υ: "y", φ: "f", χ: "ch", ψ: "ps", ω: "o",
};

function transliterate(city: string): string {
  return normalizeCity(city)
    .split("")
    .map((ch) => GREEK_TO_LATIN[ch] ?? (/[a-z0-9]/.test(ch) ? ch : "-"))
    .join("")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Re-key a table through normalizeCity so keys and lookups always agree. */
function normalizeKeys<T>(table: Record<string, T>): Record<string, T> {
  return Object.fromEntries(Object.entries(table).map(([k, v]) => [normalizeCity(k), v]));
}

const CITY_SLUGS_N = normalizeKeys(CITY_SLUGS);
const CITY_CONTEXT_N = normalizeKeys(CITY_CONTEXT);

export function slugForCity(city: string): string {
  return CITY_SLUGS_N[normalizeCity(city)] ?? transliterate(city);
}

function toOffice(row: any): OfficeLocation {
  const city = (row.cityEL || row.cityEN || "").trim();
  const key = normalizeCity(city);
  const ctx = CITY_CONTEXT_N[key];
  const isCyprus = key === "λευκωσια";
  return {
    id: row.id,
    slug: slugForCity(city),
    name: (row.nameEL || row.nameEN || "DGSOFT").trim(),
    city,
    region: ctx?.region ?? null,
    address: row.addressEL || row.addressEN || null,
    zip: row.zip || null,
    country: isCyprus ? "Κύπρος" : "Ελλάδα",
    countryCode: isCyprus ? "CY" : "GR",
    phone: row.phone || null,
    email: row.email || null,
    latitude: row.latitude ?? null,
    longitude: row.longitude ?? null,
    isHeadquarters: key === HQ_CITY,
    serves: ctx?.serves ?? (city ? [city] : []),
  };
}

export const getOfficeLocations = cache(async (): Promise<OfficeLocation[]> => {
  try {
    const rows = await prisma.presence.findMany({
      where: { published: true },
      orderBy: { order: "asc" },
    });
    const offices = rows.map(toOffice).filter((o) => o.slug && o.city);
    // Headquarters first, then the order configured in the admin.
    return offices.sort((a, b) => Number(b.isHeadquarters) - Number(a.isHeadquarters));
  } catch (error) {
    console.error("getOfficeLocations failed:", error);
    return [];
  }
});

export const getOfficeBySlug = cache(async (slug: string): Promise<OfficeLocation | null> => {
  const all = await getOfficeLocations();
  return all.find((o) => o.slug === slug) ?? null;
});
