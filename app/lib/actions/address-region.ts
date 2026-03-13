"use server";

import prisma from "@/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { normalizeAddressKey } from "@/lib/address-region-utils";
import { getVatCompanyInfo, getVatCorrectData } from "@/lib/vat-wwa";

const ADDRESS_MAPPING_PATH = "/admin/eu-programs/address-mapping";

const LEVEL_DIMOS = 5;

/** Call DeepSeek or OpenAI for address→region mapping. Tries DeepSeek first if key set, then OpenAI. */
async function callAddressMappingAI(prompt: string): Promise<{ success: boolean; text?: string; error?: string }> {
  const deepseekKey = process.env.DEEPSEEK_API_KEY?.trim();
  const openaiKey = process.env.OPENAI_API_KEY?.trim();

  if (!deepseekKey && !openaiKey) {
    return {
      success: false,
      error:
        "No AI API key configured. Set DEEPSEEK_API_KEY or OPENAI_API_KEY in your deployment environment variables (e.g. Vercel → Project → Settings → Environment Variables).",
    };
  }

  const tryDeepSeek = async (): Promise<string> => {
    if (!deepseekKey) throw new Error("DEEPSEEK_API_KEY not set");
    const apiUrl = process.env.DEEPSEEK_API_URL || "https://api.deepseek.com/v1/chat/completions";
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${deepseekKey}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.1,
      }),
    });
    if (!res.ok) {
      const t = await res.text();
      throw new Error(`DeepSeek ${res.status}: ${t.slice(0, 200)}`);
    }
    const data = await res.json();
    return (data.choices?.[0]?.message?.content ?? "").trim();
  };

  const tryOpenAI = async (): Promise<string> => {
    if (!openaiKey) throw new Error("OPENAI_API_KEY not set");
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openaiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.1,
      }),
    });
    if (!res.ok) {
      const t = await res.text();
      throw new Error(`OpenAI ${res.status}: ${t.slice(0, 200)}`);
    }
    const data = await res.json();
    return (data.choices?.[0]?.message?.content ?? "").trim();
  };

  try {
    if (deepseekKey) {
      try {
        const text = await tryDeepSeek();
        return { success: true, text };
      } catch (e) {
        if (openaiKey) {
          try {
            const text = await tryOpenAI();
            return { success: true, text };
          } catch (openaiErr) {
            const msg = e instanceof Error ? e.message : String(e);
            return { success: false, error: `DeepSeek failed: ${msg}. OpenAI fallback also failed.` };
          }
        }
        return { success: false, error: e instanceof Error ? e.message : String(e) };
      }
    }
    const text = await tryOpenAI();
    return { success: true, text };
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return { success: false, error: msg };
  }
}

/** If customer(s) at this address lack city, fetch from afm2info, update TRDR, return row with enriched address/city/zip for mapping. */
export async function enrichAddressFromVat(row: DistinctAddressRow): Promise<DistinctAddressRow> {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") return row;

  const hasCity = row.rawCity != null && String(row.rawCity).trim() !== "";
  if (hasCity) return row;

  const customers = await prisma.tRDR.findMany({
    where: {
      ADDRESS: row.rawAddress ?? undefined,
      CITY: row.rawCity ?? undefined,
      ZIP: row.rawZip ?? undefined,
    },
    select: { id: true, AFM: true },
  });

  const withAfm = customers.find((c) => c.AFM != null && String(c.AFM).trim() !== "");
  if (!withAfm?.AFM) return row;

  const vatInfo = await getVatCompanyInfo(String(withAfm.AFM));
  const correct = getVatCorrectData(vatInfo);
  if (!correct || (!correct.CITY && !correct.ADDRESS && !correct.ZIP)) return row;

  const updatePayload = {
    ...(correct.ADDRESS != null && { ADDRESS: correct.ADDRESS }),
    ...(correct.CITY != null && { CITY: correct.CITY }),
    ...(correct.ZIP != null && { ZIP: correct.ZIP }),
    ...(correct.NAME != null && { NAME: correct.NAME }),
    ...(correct.legalStatus != null && { legalStatus: correct.legalStatus }),
    ...(correct.registDate != null && { registDate: correct.registDate }),
  };
  if (Object.keys(updatePayload).length === 0) return row;

  await prisma.tRDR.updateMany({
    where: {
      ADDRESS: row.rawAddress ?? undefined,
      CITY: row.rawCity ?? undefined,
      ZIP: row.rawZip ?? undefined,
    },
    data: updatePayload,
  });

  const rawAddress = correct.ADDRESS ?? row.rawAddress;
  const rawCity = correct.CITY ?? row.rawCity;
  const rawZip = correct.ZIP ?? row.rawZip;
  const enrichedKey = normalizeAddressKey(rawAddress, rawCity, rawZip);

  return {
    ...row,
    addressKey: enrichedKey,
    rawAddress,
    rawCity,
    rawZip,
  };
}

export type DistinctAddressRow = {
  addressKey: string;
  rawAddress: string | null;
  rawCity: string | null;
  rawZip: string | null;
  countryCode: number | null;
  latitude: number | null;
  longitude: number | null;
  customerCount: number;
  periferiaId: string | null;
  periferiaPath: string | null;
  confirmed: boolean;
  mappingId: string | null;
};

/** Get distinct addresses from TRDR with optional existing mapping. */
export async function getDistinctCustomerAddresses(): Promise<DistinctAddressRow[]> {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized");

  const customers = await prisma.tRDR.findMany({
    select: {
      ADDRESS: true,
      CITY: true,
      ZIP: true,
      COUNTRY: true,
      LATITUDE: true,
      LONGITUDE: true,
    },
  });

  const map = new Map<
    string,
    {
      rawAddress: string | null;
      rawCity: string | null;
      rawZip: string | null;
      countryCode: number | null;
      lat: number | null;
      lon: number | null;
      count: number;
    }
  >();

  for (const c of customers) {
    const key = normalizeAddressKey(c.ADDRESS, c.CITY, c.ZIP);
    if (!key || key === "||") continue;
    const existing = map.get(key);
    if (existing) {
      existing.count++;
      if ((c.LATITUDE != null || c.LONGITUDE != null) && existing.lat == null) {
        existing.lat = c.LATITUDE ?? existing.lat;
        existing.lon = c.LONGITUDE ?? existing.lon;
      }
    } else {
      map.set(key, {
        rawAddress: c.ADDRESS ?? null,
        rawCity: c.CITY ?? null,
        rawZip: c.ZIP ?? null,
        countryCode: c.COUNTRY ?? null,
        lat: c.LATITUDE ?? null,
        lon: c.LONGITUDE ?? null,
        count: 1,
      });
    }
  }

  const mappings = await prisma.customerAddressRegion.findMany({
    where: { addressKey: { in: Array.from(map.keys()) } },
    include: { periferia: { include: { parent: { include: { parent: true } } } } },
  });
  const mappingByKey = new Map(mappings.map((m) => [m.addressKey, m]));

  function pathFor(p: { nameEL: string; parent?: { nameEL: string; parent?: { nameEL: string } | null } | null }): string {
    const parts: string[] = [];
    if (p.parent?.parent) parts.push(p.parent.parent.nameEL);
    if (p.parent) parts.push(p.parent.nameEL);
    parts.push(p.nameEL);
    return parts.join(" → ");
  }

  const rows: DistinctAddressRow[] = [];
  for (const [addressKey, agg] of map) {
    const m = mappingByKey.get(addressKey);
    rows.push({
      addressKey,
      rawAddress: agg.rawAddress,
      rawCity: agg.rawCity,
      rawZip: agg.rawZip,
      countryCode: agg.countryCode,
      latitude: agg.lat,
      longitude: agg.lon,
      customerCount: agg.count,
      periferiaId: m?.periferiaId ?? null,
      periferiaPath: m ? pathFor(m.periferia) : null,
      confirmed: m?.confirmed ?? false,
      mappingId: m?.id ?? null,
    });
  }

  rows.sort((a, b) => (b.customerCount - a.customerCount) || (a.rawCity ?? "").localeCompare(b.rawCity ?? ""));
  return rows;
}

export type PeriferiaOption = { id: string; code: string; nameEL: string; level: number; path: string };

/** Flatten tree to list of level-5 (Δήμος) nodes with full path for dropdown and AI. */
export async function getPeriferiesFlattened(): Promise<PeriferiaOption[]> {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized");

  const all = await prisma.periferia.findMany({
    orderBy: [{ level: "asc" }, { nameEL: "asc" }],
  });
  const byCode = new Map(all.map((p) => [p.code, p]));

  function pathFor(node: { code: string; nameEL: string; parentCode: string | null }): string {
    const parts: string[] = [node.nameEL];
    let current = node.parentCode ? byCode.get(node.parentCode) : null;
    while (current) {
      parts.unshift(current.nameEL);
      current = current.parentCode ? byCode.get(current.parentCode) ?? null : null;
    }
    return parts.join(" → ");
  }

  const dimosOnly = all.filter((p) => p.level === LEVEL_DIMOS);
  return dimosOnly.map((p) => ({
    id: p.id,
    code: p.code,
    nameEL: p.nameEL,
    level: p.level,
    path: pathFor(p),
  }));
}

/** Build a compact list of dimos for the LLM (id and path per line). */
function dimosListForPrompt(options: PeriferiaOption[]): string {
  return options.map((o) => `${o.id}\t${o.path}`).join("\n");
}

const BULK_BATCH_SIZE = 15;

export type BulkSuggestResult = {
  addressKey: string;
  periferiaId: string | null;
  saveKey?: string;
  rawAddress?: string | null;
  rawCity?: string | null;
  rawZip?: string | null;
};

/** Suggest mappings for a batch of addresses in one AI call (DeepSeek or OpenAI). */
export async function suggestAddressMappingBulk(
  batch: DistinctAddressRow[]
): Promise<{ success: boolean; results?: BulkSuggestResult[]; error?: string }> {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") return { success: false, error: "Unauthorized" };

  const dimosList = await getPeriferiesFlattened();
  if (dimosList.length === 0) return { success: false, error: "No Δήμοι in database" };

  const N = Math.min(batch.length, BULK_BATCH_SIZE);
  const slice = batch.slice(0, N);

  const enrichedBatch: DistinctAddressRow[] = [];
  for (const row of slice) {
    const enriched = await enrichAddressFromVat(row);
    enrichedBatch.push(enriched);
  }

  const addressLines = enrichedBatch
    .map((row, i) => {
      const parts = [row.rawAddress, row.rawCity, row.rawZip].filter(Boolean);
      const addr = parts.length ? parts.join(", ") : "(no address)";
      const coords =
        row.latitude != null && row.longitude != null
          ? ` Coords: ${row.latitude}, ${row.longitude}.`
          : "";
      return `${i + 1}. ${addr}${coords}`;
    })
    .join("\n");

  const prompt = `You are a Greek geography expert. For each of the following ${N} customer addresses in Greece (address, city, area/zip), choose the single best matching municipality (Δήμος) from the list below.

Addresses (use city and area/address together to match):
${addressLines}

List of valid Δήμοι (one per line: ID then tab then full path "Περιφέρεια → Νομός → Δήμος"):
${dimosListForPrompt(dimosList)}

Reply with exactly ${N} lines. Line i is the result for Address i: either the periferia id (cuid) only, or UNKNOWN. No other text, no numbering.`;

  const ai = await callAddressMappingAI(prompt);
  if (!ai.success || ai.text == null) return { success: false, error: ai.error };

  const lines = ai.text.split(/\r?\n/).map((l: string) => l.trim()).filter(Boolean).slice(0, N);
  const idSet = new Set(dimosList.map((d) => d.id));

  const results: BulkSuggestResult[] = slice.map((row, i) => {
    const line = lines[i] ?? "";
    const id = line.toUpperCase() === "UNKNOWN" ? null : line.split(/\s/)[0]?.trim() ?? null;
    const valid = id && idSet.has(id) ? id : null;
    const enriched = enrichedBatch[i];
    return {
      addressKey: row.addressKey,
      periferiaId: valid,
      saveKey: enriched.addressKey,
      rawAddress: enriched.rawAddress,
      rawCity: enriched.rawCity,
      rawZip: enriched.rawZip,
    };
  });

  return { success: true, results };
}

/** Save multiple suggested mappings (only those with periferiaId). Uses saveKey and raw* when provided (enriched key after VAT). */
export async function saveAddressMappingBulk(
  items: Array<{
    row: DistinctAddressRow;
    periferiaId: string;
    saveKey?: string;
    rawAddress?: string | null;
    rawCity?: string | null;
    rawZip?: string | null;
  }>
): Promise<{ success: boolean; saved: number; error?: string }> {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") return { success: false, saved: 0, error: "Unauthorized" };

  let saved = 0;
  for (const { row, periferiaId, saveKey, rawAddress, rawCity, rawZip } of items) {
    try {
      const result = await saveAddressMapping({
        addressKey: saveKey ?? row.addressKey,
        rawAddress: rawAddress ?? row.rawAddress,
        rawCity: rawCity ?? row.rawCity,
        rawZip: rawZip ?? row.rawZip,
        countryCode: row.countryCode,
        latitude: row.latitude,
        longitude: row.longitude,
        periferiaId,
        confirmed: false,
        suggestedAt: new Date(),
      });
      if (result.success) saved++;
    } catch (_) {}
  }
  if (saved > 0) revalidatePath(ADDRESS_MAPPING_PATH);
  return { success: true, saved };
}

/** Call DeepSeek to suggest the best matching Δήμος (level 5) for an address. */
export async function suggestAddressMapping(params: {
  addressKey: string;
  rawAddress: string | null;
  rawCity: string | null;
  rawZip: string | null;
  countryCode: number | null;
  latitude: number | null;
  longitude: number | null;
}): Promise<{ success: boolean; periferiaId?: string; error?: string; addressKeyToSave?: string; rawAddress?: string | null; rawCity?: string | null; rawZip?: string | null }> {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") return { success: false, error: "Unauthorized" };

  const minimalRow: DistinctAddressRow = {
    addressKey: params.addressKey,
    rawAddress: params.rawAddress,
    rawCity: params.rawCity,
    rawZip: params.rawZip,
    countryCode: params.countryCode,
    latitude: params.latitude,
    longitude: params.longitude,
    customerCount: 0,
    periferiaId: null,
    periferiaPath: null,
    confirmed: false,
    mappingId: null,
  };
  const enriched = await enrichAddressFromVat(minimalRow);

  const dimosList = await getPeriferiesFlattened();
  if (dimosList.length === 0) return { success: false, error: "No Δήμοι in database" };

  const addressPart = [enriched.rawAddress, enriched.rawCity, enriched.rawZip].filter(Boolean).join(", ");
  const coordsPart =
    enriched.latitude != null && enriched.longitude != null
      ? ` Coordinates: ${enriched.latitude}, ${enriched.longitude}.`
      : "";

  const prompt = `You are a Greek geography expert. Given a customer address in Greece, choose the single best matching municipality (Δήμος) from the list below.

Address to match: ${addressPart}${coordsPart}
Country code (if relevant): ${enriched.countryCode ?? "not provided"}.

List of valid Δήμοι (one per line: ID then tab then full path "Περιφέρεια → Νομός → Δήμος"):
${dimosListForPrompt(dimosList)}

Reply with ONLY the id (cuid) of the chosen Δήμος, nothing else. No explanation, no quotes. If the address is clearly outside Greece or cannot be matched, reply with: UNKNOWN`;

  const ai = await callAddressMappingAI(prompt);
  if (!ai.success || ai.text == null) return { success: false, error: ai.error };

  const text = ai.text;
  if (text.toUpperCase() === "UNKNOWN") return { success: true, addressKeyToSave: enriched.addressKey, rawAddress: enriched.rawAddress, rawCity: enriched.rawCity, rawZip: enriched.rawZip };

  const id = text.split(/\s/)[0]?.trim();
  if (!id) return { success: false, error: "Empty response" };

  const found = dimosList.some((d) => d.id === id);
  if (!found) return { success: false, error: `Invalid id: ${id}` };

  return { success: true, periferiaId: id, addressKeyToSave: enriched.addressKey, rawAddress: enriched.rawAddress, rawCity: enriched.rawCity, rawZip: enriched.rawZip };
}

/** Save or update address → periferia mapping. */
export async function saveAddressMapping(params: {
  addressKey: string;
  rawAddress: string | null;
  rawCity: string | null;
  rawZip: string | null;
  countryCode: number | null;
  latitude: number | null;
  longitude: number | null;
  periferiaId: string;
  confirmed?: boolean;
  suggestedAt?: Date | null;
}): Promise<{ success: boolean; error?: string }> {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") return { success: false, error: "Unauthorized" };

  try {
    await prisma.customerAddressRegion.upsert({
      where: { addressKey: params.addressKey },
      create: {
        addressKey: params.addressKey,
        rawAddress: params.rawAddress,
        rawCity: params.rawCity,
        rawZip: params.rawZip,
        countryCode: params.countryCode,
        latitude: params.latitude,
        longitude: params.longitude,
        periferiaId: params.periferiaId,
        confirmed: params.confirmed ?? false,
        suggestedAt: params.suggestedAt ?? undefined,
      },
      update: {
        rawAddress: params.rawAddress,
        rawCity: params.rawCity,
        rawZip: params.rawZip,
        countryCode: params.countryCode,
        latitude: params.latitude,
        longitude: params.longitude,
        periferiaId: params.periferiaId,
        confirmed: params.confirmed ?? undefined,
        suggestedAt: params.suggestedAt ?? undefined,
      },
    });
    revalidatePath(ADDRESS_MAPPING_PATH);
    return { success: true };
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return { success: false, error: msg };
  }
}

/** Get map of addressKey -> { path, periferiaId } for use on customer expanded row. */
export async function getAddressRegionMap(): Promise<Record<string, { path: string; periferiaId: string }>> {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") return {};

  const list = await prisma.customerAddressRegion.findMany({
    include: { periferia: { include: { parent: { include: { parent: true } } } } },
  });
  const out: Record<string, { path: string; periferiaId: string }> = {};
  for (const m of list) {
    const p = m.periferia;
    const parts: string[] = [];
    if (p.parent?.parent) parts.push(p.parent.parent.nameEL);
    if (p.parent) parts.push(p.parent.nameEL);
    parts.push(p.nameEL);
    out[m.addressKey] = { path: parts.join(" → "), periferiaId: m.periferiaId };
  }
  return out;
}

/** Mark mapping as confirmed (or unconfirm). */
export async function setAddressMappingConfirmed(addressKey: string, confirmed: boolean): Promise<{ success: boolean; error?: string }> {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") return { success: false, error: "Unauthorized" };

  try {
    await prisma.customerAddressRegion.update({
      where: { addressKey },
      data: { confirmed },
    });
    return { success: true };
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return { success: false, error: msg };
  }
}

/** Suggest once for a group (same city+zip), then save the same periferia to every row in the group. One DeepSeek call per group. */
export async function suggestAndSaveGroup(rows: DistinctAddressRow[]): Promise<{ success: boolean; saved: number; error?: string }> {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") return { success: false, saved: 0, error: "Unauthorized" };
  if (rows.length === 0) return { success: true, saved: 0 };

  const first = await enrichAddressFromVat(rows[0]);
  const result = await suggestAddressMapping({
    addressKey: first.addressKey,
    rawAddress: first.rawAddress,
    rawCity: first.rawCity,
    rawZip: first.rawZip,
    countryCode: first.countryCode,
    latitude: first.latitude,
    longitude: first.longitude,
  });

  if (!result.success || !result.periferiaId) {
    return { success: false, saved: 0, error: result.error };
  }

  const periferiaId = result.periferiaId;
  let saved = 0;
  for (const row of rows) {
    const enriched = await enrichAddressFromVat(row);
    const saveKey = enriched.addressKey;
    const saveResult = await saveAddressMapping({
      addressKey: saveKey,
      rawAddress: enriched.rawAddress,
      rawCity: enriched.rawCity,
      rawZip: enriched.rawZip,
      countryCode: row.countryCode,
      latitude: row.latitude,
      longitude: row.longitude,
      periferiaId,
      confirmed: false,
      suggestedAt: new Date(),
    });
    if (saveResult.success) saved++;
  }
  revalidatePath(ADDRESS_MAPPING_PATH);
  return { success: true, saved };
}

/** Run AI suggestion for a single address and persist suggested mapping (not confirmed). */
export async function runSuggestAndSave(row: DistinctAddressRow): Promise<{ success: boolean; periferiaId?: string; error?: string }> {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") return { success: false, error: "Unauthorized" };

  const result = await suggestAddressMapping({
    addressKey: row.addressKey,
    rawAddress: row.rawAddress,
    rawCity: row.rawCity,
    rawZip: row.rawZip,
    countryCode: row.countryCode,
    latitude: row.latitude,
    longitude: row.longitude,
  });

  if (!result.success || !result.periferiaId) return result;

  const saveKey = result.addressKeyToSave ?? row.addressKey;
  const saveResult = await saveAddressMapping({
    addressKey: saveKey,
    rawAddress: result.rawAddress ?? row.rawAddress,
    rawCity: result.rawCity ?? row.rawCity,
    rawZip: result.rawZip ?? row.rawZip,
    countryCode: row.countryCode,
    latitude: row.latitude,
    longitude: row.longitude,
    periferiaId: result.periferiaId,
    confirmed: false,
    suggestedAt: new Date(),
  });

  if (!saveResult.success) return { success: false, error: saveResult.error };
  return { success: true, periferiaId: result.periferiaId };
}
