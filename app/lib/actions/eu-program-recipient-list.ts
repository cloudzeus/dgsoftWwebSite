"use server";

import prisma from "@/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { normalizeAddressKey } from "@/lib/address-region-utils";
import { hasKadPrefixMatch, normalizeKad } from "@/lib/validator";
import { getEmailsForCustomer } from "@/lib/customer-emails";

const EU_PROGRAMS_PATH = "/admin/eu-programs";
const EU_LISTS_PATH = "/admin/newsletter/eu-lists";

export type EuProgramRecipientPreviewRow = {
  trdrId: string;
  customerName: string;
  customerCode: string;
  email: string;
};

export type EuProgramRecipientStored = {
  email: string;
  trdrId: string;
  customerName?: string;
  customerCode?: string;
};

/** Expand linked periferia IDs (any level 3/4/5) to level-5 dimos IDs, same tree walk as newsletter filters. */
async function expandPeriferiaIdsToDimosSet(periferiaIds: string[]): Promise<Set<string>> {
  const result = new Set<string>();
  if (!periferiaIds.length) return result;

  const all = await prisma.periferia.findMany({
    select: { id: true, code: true, level: true, parentCode: true },
  });
  const byId = new Map(all.map((p) => [p.id, p]));

  function addDescendantDimos(code: string) {
    const children = all.filter((c) => c.parentCode === code);
    for (const c of children) {
      if (c.level === 5) result.add(c.id);
      else addDescendantDimos(c.code);
    }
  }

  for (const id of periferiaIds) {
    const p = byId.get(id);
    if (!p) continue;
    if (p.level === 5) {
      result.add(id);
    } else if (p.level === 4) {
      const children = all.filter((c) => c.parentCode === p.code);
      for (const c of children) {
        if (c.level === 5) result.add(c.id);
        else if (c.level === 4) {
          const grand = all.filter((x) => x.parentCode === c.code);
          for (const g of grand) if (g.level === 5) result.add(g.id);
        }
      }
    } else if (p.level === 3) {
      addDescendantDimos(p.code);
    }
  }

  return result;
}

/** Customers with at least one email field; KAD prefix rules match program validator; region via address mapping when program has periferies. */
export async function previewEuProgramRecipientList(programId: string): Promise<EuProgramRecipientPreviewRow[]> {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized access. Admin only.");

  const program = await prisma.euProgram.findUnique({
    where: { id: programId },
    include: {
      kads: { include: { kad: true } },
      periferies: true,
    },
  });
  if (!program) throw new Error("Program not found");

  const programKadPrefixes = program.kads
    .map((k) => normalizeKad(k.kad.dotcode || k.kad.code))
    .filter(Boolean);

  const periferiaIds = program.periferies.map((p) => p.periferiaId);
  let addressKeys: Set<string> | null = null;
  if (periferiaIds.length > 0) {
    const dimosSet = await expandPeriferiaIdsToDimosSet(periferiaIds);
    if (dimosSet.size > 0) {
      const mappings = await prisma.customerAddressRegion.findMany({
        where: { periferiaId: { in: Array.from(dimosSet) } },
        select: { addressKey: true },
      });
      addressKeys = new Set(mappings.map((m) => m.addressKey));
    } else {
      addressKeys = new Set();
    }
  }

  const customers = await prisma.tRDR.findMany({
    where: {
      OR: [
        { EMAIL: { not: null, notIn: [""] } },
        { EMAILACC: { not: null, notIn: [""] } },
        { CCCEMAILMAR: { not: null, notIn: [""] } },
      ],
    },
    select: {
      id: true,
      NAME: true,
      CODE: true,
      EMAIL: true,
      EMAILACC: true,
      CCCEMAILMAR: true,
      ADDRESS: true,
      CITY: true,
      ZIP: true,
      kads: { select: { firm_act_code: true } },
    },
  });

  const rows: EuProgramRecipientPreviewRow[] = [];
  const seenEmail = new Set<string>();

  for (const c of customers) {
    const companyKadPrefixes = c.kads.map((k) => normalizeKad(k.firm_act_code)).filter(Boolean);
    const kadOk =
      programKadPrefixes.length === 0
        ? true
        : companyKadPrefixes.length > 0 && hasKadPrefixMatch(companyKadPrefixes, programKadPrefixes);
    if (!kadOk) continue;

    if (addressKeys !== null) {
      if (addressKeys.size === 0) continue;
      if (!addressKeys.has(normalizeAddressKey(c.ADDRESS, c.CITY, c.ZIP))) continue;
    }

    const emails = getEmailsForCustomer(c);
    for (const email of emails) {
      const key = email.toLowerCase();
      if (seenEmail.has(key)) continue;
      seenEmail.add(key);
      rows.push({
        trdrId: c.id,
        customerName: c.NAME,
        customerCode: c.CODE,
        email,
      });
    }
  }

  return rows;
}

export async function saveEuProgramRecipientList(
  programId: string,
  recipients: EuProgramRecipientStored[]
): Promise<{ id: string }> {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized access. Admin only.");

  const program = await prisma.euProgram.findUnique({
    where: { id: programId },
    select: { id: true, nameEL: true },
  });
  if (!program) throw new Error("Program not found");

  const clean: EuProgramRecipientStored[] = recipients.map((r) => ({
    email: String(r.email ?? "").trim(),
    trdrId: String(r.trdrId ?? "").trim(),
    customerName: r.customerName,
    customerCode: r.customerCode,
  })).filter((r) => r.email.length > 0 && r.trdrId.length > 0);

  const created = await prisma.euProgramRecipientList.create({
    data: {
      euProgramId: program.id,
      programNameSnapshot: program.nameEL.slice(0, 255),
      recipients: JSON.parse(JSON.stringify(clean)),
      recipientCount: clean.length,
    },
    select: { id: true },
  });

  revalidatePath(EU_LISTS_PATH);
  revalidatePath(EU_PROGRAMS_PATH);
  return { id: created.id };
}

export type EuProgramRecipientListSummary = {
  id: string;
  euProgramId: string;
  programNameSnapshot: string;
  recipientCount: number;
  createdAt: Date;
};

export async function getEuProgramRecipientLists(): Promise<EuProgramRecipientListSummary[]> {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") return [];

  const rows = await prisma.euProgramRecipientList.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      euProgramId: true,
      programNameSnapshot: true,
      recipientCount: true,
      createdAt: true,
    },
  });
  return rows.map((r) => ({ ...r, createdAt: r.createdAt }));
}

export async function getEuProgramRecipientListById(id: string) {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") return null;

  return prisma.euProgramRecipientList.findUnique({
    where: { id },
    select: {
      id: true,
      euProgramId: true,
      programNameSnapshot: true,
      recipientCount: true,
      recipients: true,
      createdAt: true,
    },
  });
}

export type EuListCriteriaSummary = {
  programKadLabels: string[];
  programRegionLabels: string[];
  regionFilterActive: boolean;
};

export type EuListRecipientTableRow = {
  id: string;
  trdrId: string;
  customerName: string;
  customerCode: string;
  email: string;
  kadMatch: string;
  regionMatch: string;
};

function firstKadMatchDescription(
  companyFirmCodes: string[],
  programKads: { code: string; dotcode: string | null }[]
): string {
  const programEntries = programKads
    .map((k) => {
      const label = (k.dotcode || k.code || "").trim();
      const norm = normalizeKad(k.dotcode || k.code);
      return label ? { label, norm } : null;
    })
    .filter((x): x is { label: string; norm: string } => x != null && x.norm.length > 0);

  if (programEntries.length === 0) {
    return "Any KAD (program has no eligible KADs)";
  }

  for (const raw of companyFirmCodes) {
    const cn = normalizeKad(raw);
    if (!cn) continue;
    for (const pe of programEntries) {
      if (cn.startsWith(pe.norm)) {
        return `Company ${raw || cn} ⊆ program ${pe.label}`;
      }
    }
  }
  return "—";
}

/** Full modal payload: saved recipients + program criteria + per-row KAD/region match text. */
export async function getEuProgramRecipientListTableDetail(
  listId: string
): Promise<{
  programNameSnapshot: string;
  euProgramId: string;
  criteria: EuListCriteriaSummary;
  rows: EuListRecipientTableRow[];
} | null> {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") return null;

  const list = await prisma.euProgramRecipientList.findUnique({
    where: { id: listId },
    select: {
      programNameSnapshot: true,
      euProgramId: true,
      recipients: true,
    },
  });
  if (!list) return null;

  const program = await prisma.euProgram.findUnique({
    where: { id: list.euProgramId },
    include: {
      kads: { include: { kad: { select: { code: true, dotcode: true } } } },
      periferies: { include: { periferia: { select: { nameEL: true } } } },
    },
  });
  if (!program) return null;

  const programKadLabels = program.kads.map((x) => (x.kad.dotcode || x.kad.code).trim()).filter(Boolean);
  const programRegionLabels = program.periferies.map((x) => x.periferia.nameEL).filter(Boolean);
  const regionFilterActive = program.periferies.length > 0;

  const criteria: EuListCriteriaSummary = {
    programKadLabels,
    programRegionLabels,
    regionFilterActive,
  };

  const raw = list.recipients as unknown;
  const arr = Array.isArray(raw) ? raw : [];
  const stored: EuProgramRecipientStored[] = arr.map((item: unknown) => {
    if (!item || typeof item !== "object") return { email: "", trdrId: "" };
    const o = item as Record<string, unknown>;
    return {
      email: String(o.email ?? ""),
      trdrId: String(o.trdrId ?? ""),
      customerName: o.customerName != null ? String(o.customerName) : undefined,
      customerCode: o.customerCode != null ? String(o.customerCode) : undefined,
    };
  });
  const valid = stored.filter((r) => r.email && r.trdrId);
  const trdrIds = [...new Set(valid.map((r) => r.trdrId))];

  const customers = await prisma.tRDR.findMany({
    where: { id: { in: trdrIds } },
    select: {
      id: true,
      NAME: true,
      CODE: true,
      ADDRESS: true,
      CITY: true,
      ZIP: true,
      kads: { select: { firm_act_code: true } },
    },
  });
  const byId = new Map(customers.map((c) => [c.id, c]));

  const keys = customers.map((c) => normalizeAddressKey(c.ADDRESS, c.CITY, c.ZIP)).filter((k) => k !== "||");
  const mappings =
    keys.length > 0
      ? await prisma.customerAddressRegion.findMany({
          where: { addressKey: { in: keys } },
          select: { addressKey: true, periferia: { select: { nameEL: true } } },
        })
      : [];
  const regionByKey = new Map(mappings.map((m) => [m.addressKey, m.periferia.nameEL]));

  const programKadModels = program.kads.map((x) => x.kad);

  const rows: EuListRecipientTableRow[] = valid.map((r) => {
    const c = byId.get(r.trdrId);
    const firmCodes = c?.kads.map((k) => k.firm_act_code) ?? [];
    const kadMatch = firstKadMatchDescription(firmCodes, programKadModels);

    let regionMatch = "—";
    if (!regionFilterActive) {
      regionMatch = "Not filtered by region";
    } else if (c) {
      const key = normalizeAddressKey(c.ADDRESS, c.CITY, c.ZIP);
      const name = regionByKey.get(key);
      regionMatch = name ? `Mapped: ${name}` : "No address→region mapping";
    }

    return {
      id: `${r.trdrId}::${r.email.toLowerCase()}`,
      trdrId: r.trdrId,
      customerName: r.customerName ?? c?.NAME ?? "—",
      customerCode: r.customerCode ?? c?.CODE ?? "—",
      email: r.email,
      kadMatch,
      regionMatch,
    };
  });

  return {
    programNameSnapshot: list.programNameSnapshot,
    euProgramId: list.euProgramId,
    criteria,
    rows,
  };
}

export async function deleteEuProgramRecipientList(id: string): Promise<void> {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized access. Admin only.");

  await prisma.euProgramRecipientList.delete({ where: { id } });
  revalidatePath(EU_LISTS_PATH);
}
