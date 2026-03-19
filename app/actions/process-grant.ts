"use server";

import { Prisma } from "@prisma/client";
import pdfParse from "pdf-parse/lib/pdf-parse.js";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { parseGrantPdf } from "@/lib/deepseek-parser";

export type ProcessGrantResult = {
  success: boolean;
  programUpdated?: boolean;
  requirementsCount?: number;
  expenseLimitsCount?: number;
  eligibleKadsCount?: number;
  error?: string;
};

function toDecimalOrNull(v: number | null): Prisma.Decimal | null {
  if (v == null || !Number.isFinite(v)) return null;
  return new Prisma.Decimal(v);
}

function toDateOrNull(v: string | null): Date | null {
  if (!v) return null;
  const d = new Date(v);
  return Number.isNaN(d.getTime()) ? null : d;
}

function normalizeGreekText(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toUpperCase();
}

function parseRegionCandidates(value: string): string[] {
  return value
    .split(/[,;|\n]+/)
    .map((part) => part.trim())
    .filter(Boolean);
}

export async function processGrantPdfAction(formData: FormData): Promise<ProcessGrantResult> {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") return { success: false, error: "Unauthorized" };

  const euProgramId = String(formData.get("euProgramId") ?? "").trim();
  const file = formData.get("file");

  if (!euProgramId) return { success: false, error: "Missing euProgramId" };
  if (!(file instanceof File)) return { success: false, error: "Missing PDF file" };
  if (file.type !== "application/pdf") return { success: false, error: "Only PDF files are supported" };

  try {
    const program = await prisma.euProgram.findUnique({ where: { id: euProgramId }, select: { id: true } });
    if (!program) return { success: false, error: "EU program not found" };

    const arrayBuffer = await file.arrayBuffer();
    // Use Buffer.from (recommended); DEP0005 warning comes from pdf-parse/pdf.js dependency
    const textResult = await pdfParse(Buffer.from(arrayBuffer));
    const text = textResult.text?.trim() ?? "";
    if (!text) return { success: false, error: "No text could be extracted from this PDF" };

    const parsed = await parseGrantPdf(text);

    await prisma.$transaction(async (tx) => {
      const meta = parsed.programMeta;
      const updatePayload: Prisma.EuProgramUpdateInput = {};
      if (meta.nameEL) updatePayload.nameEL = meta.nameEL;
      if (meta.shortDescriptionEL) updatePayload.shortDescriptionEL = meta.shortDescriptionEL;
      if (meta.descriptionEL) updatePayload.descriptionEL = meta.descriptionEL;
      if (meta.announcedDate) updatePayload.announcedDate = toDateOrNull(meta.announcedDate);
      if (meta.submissionDate) updatePayload.submissionDate = toDateOrNull(meta.submissionDate);
      if (meta.endDate) updatePayload.endDate = toDateOrNull(meta.endDate);
      if (meta.percentageOfFinance) updatePayload.percentageOfFinance = meta.percentageOfFinance;
      if (meta.minBudget != null) updatePayload.minBudget = toDecimalOrNull(meta.minBudget);
      if (meta.maxBudget != null) updatePayload.maxBudget = toDecimalOrNull(meta.maxBudget);
      if (meta.minimumCompanyYears != null) updatePayload.minimumCompanyYears = meta.minimumCompanyYears;
      if (meta.minimumEmployees != null) updatePayload.minimumEmployees = meta.minimumEmployees;
      if (meta.indirectCostPercentage != null) updatePayload.indirectCostPercentage = meta.indirectCostPercentage;
      if (Object.keys(updatePayload).length > 0) {
        await tx.euProgram.update({
          where: { id: euProgramId },
          data: updatePayload,
        });
      }

      // Merge requirements: keep existing, add or update from new PDF (match by type+key)
      const existingReqs = await tx.euProgramRequirement.findMany({
        where: { euProgramId },
        select: { id: true, type: true, key: true },
      });
      const existingByTypeKey = new Map(existingReqs.map((r) => [`${r.type}:${r.key}`, r]));

      for (const r of parsed.requirements) {
        const existing = existingByTypeKey.get(`${r.type}:${r.key}`);
        if (existing) {
          await tx.euProgramRequirement.update({
            where: { id: existing.id },
            data: {
              operator: r.operator,
              value: r.value,
              isMandatory: r.isMandatory,
              errorMessageEL: r.errorMessageEL,
            },
          });
        } else {
          await tx.euProgramRequirement.create({
            data: {
              euProgramId,
              type: r.type,
              key: r.key,
              operator: r.operator,
              value: r.value,
              isMandatory: r.isMandatory,
              errorMessageEL: r.errorMessageEL,
            },
          });
        }
      }

      // Try to map REGION requirements into EuProgramPeriferia links.
      const regionRequirementValues = parsed.requirements
        .filter((r) => r.type === "REGION")
        .flatMap((r) => parseRegionCandidates(r.value));
      if (regionRequirementValues.length > 0) {
        const allPeriferies = await tx.periferia.findMany({
          select: { id: true, nameEL: true },
        });
        const normalizedRequested = Array.from(new Set(regionRequirementValues.map(normalizeGreekText)));
        const matchedPeriferiaIds = new Set<string>();
        for (const p of allPeriferies) {
          const pNorm = normalizeGreekText(p.nameEL);
          if (
            normalizedRequested.some(
              (requested) =>
                pNorm.includes(requested) ||
                requested.includes(pNorm)
            )
          ) {
            matchedPeriferiaIds.add(p.id);
          }
        }

        // Merge regions: add new PDF regions, keep existing links
        if (matchedPeriferiaIds.size > 0) {
          await tx.euProgramPeriferia.createMany({
            data: Array.from(matchedPeriferiaIds).map((periferiaId) => ({
              euProgramId,
              periferiaId,
            })),
            skipDuplicates: true,
          });
        }
      }

      // Pre-upsert expense categories in bulk-like mode to reduce transaction roundtrips.
      const uniqueCategoryCodes = Array.from(
        new Set(parsed.expenseLimits.map((limit) => limit.expenseCategoryId).filter(Boolean))
      );
      if (uniqueCategoryCodes.length > 0) {
        await tx.expenseCategory.createMany({
          data: uniqueCategoryCodes.map((code) => ({
            code,
            descriptionEL: "Parsed from grant PDF",
          })),
          skipDuplicates: true,
        });
      }

      for (const limit of parsed.expenseLimits) {
        if (limit.descriptionEL && limit.descriptionEL.trim() !== "") {
          await tx.expenseCategory.updateMany({
            where: { code: limit.expenseCategoryId },
            data: { descriptionEL: limit.descriptionEL },
          });
        }

        await tx.euProgramExpenseLimit.upsert({
          where: {
            euProgramId_expenseCategoryId: {
              euProgramId,
              expenseCategoryId: limit.expenseCategoryId,
            },
          },
          create: {
            euProgramId,
            expenseCategoryId: limit.expenseCategoryId,
            maxPercentage: limit.maxPercentage,
            minPercentage: limit.minPercentage,
            maxAmount: toDecimalOrNull(limit.maxAmount),
            isMandatory: limit.isMandatory,
          },
          update: {
            maxPercentage: limit.maxPercentage,
            minPercentage: limit.minPercentage,
            maxAmount: toDecimalOrNull(limit.maxAmount),
            isMandatory: limit.isMandatory,
          },
        });
      }

      for (const kadCodeRaw of parsed.eligibleKads) {
        const normalizedCode = kadCodeRaw.replace(/\./g, "").trim();
        if (!normalizedCode) continue;

        // Associate with our master KADs: link to existing Kad when matched by code or dotcode
        const existing = await tx.kad.findFirst({
          where: {
            OR: [
              { code: normalizedCode },
              { code: kadCodeRaw },
              { dotcode: kadCodeRaw },
            ],
          },
          select: { id: true },
        });

        const kad = existing
          ? existing
          : await tx.kad.create({
              data: {
                code: normalizedCode,
                dotcode: kadCodeRaw,
                nameEL: "Parsed from grant PDF",
              },
              select: { id: true },
            });

        await tx.kadEuProgram.upsert({
          where: {
            kadId_euProgramId: {
              kadId: kad.id,
              euProgramId,
            },
          },
          create: {
            kadId: kad.id,
            euProgramId,
          },
          update: {},
        });
      }
    }, {
      // Large PDFs can generate many upserts (requirements, limits, KAD links).
      // Increase interactive transaction limits to avoid default 5s timeout.
      maxWait: 15_000,
      timeout: 180_000,
    });

    return {
      success: true,
      programUpdated: true,
      requirementsCount: parsed.requirements.length,
      expenseLimitsCount: parsed.expenseLimits.length,
      eligibleKadsCount: parsed.eligibleKads.length,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to process grant PDF";
    return { success: false, error: message };
  }
}
