"use server";

import { Prisma } from "@prisma/client";
import pdfParse from "pdf-parse/lib/pdf-parse.js";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { parsePdfToExpenses } from "@/lib/deepseek";

export type UploadProgramDetailsResult = {
  success: boolean;
  createdOrUpdated?: number;
  error?: string;
};

function toDecimalOrNull(value: number | null): Prisma.Decimal | null {
  if (value == null || !Number.isFinite(value)) return null;
  return new Prisma.Decimal(value);
}

export async function uploadProgramDetails(formData: FormData): Promise<UploadProgramDetailsResult> {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") {
    return { success: false, error: "Unauthorized" };
  }

  const euProgramId = String(formData.get("euProgramId") ?? "").trim();
  const file = formData.get("file");
  if (!euProgramId) return { success: false, error: "Missing euProgramId" };
  if (!(file instanceof File)) return { success: false, error: "Missing PDF file" };
  if (file.type !== "application/pdf") return { success: false, error: "Only PDF files are supported" };

  try {
    const exists = await prisma.euProgram.findUnique({
      where: { id: euProgramId },
      select: { id: true },
    });
    if (!exists) return { success: false, error: "EU program not found" };

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const parsedPdf = await pdfParse(buffer);
    const extractedText = parsedPdf.text?.trim() ?? "";
    if (!extractedText) return { success: false, error: "No text could be extracted from this PDF" };

    const limits = await parsePdfToExpenses(extractedText);
    if (limits.length === 0) return { success: false, error: "No expense limits detected by DeepSeek" };

    await prisma.$transaction(async (tx) => {
      for (const limit of limits) {
        const category = await tx.expenseCategory.upsert({
          where: {
            euProgramId_code: { euProgramId, code: limit.code },
          },
          create: {
            euProgramId,
            code: limit.code,
            descriptionEL: limit.description,
            subCategoryEL: null,
          },
          update: {
            descriptionEL: limit.description,
          },
          select: { id: true },
        });

        await tx.euProgramExpenseLimit.upsert({
          where: {
            euProgramId_expenseCategoryId: {
              euProgramId,
              expenseCategoryId: category.id,
            },
          },
          create: {
            euProgramId,
            expenseCategoryId: category.id,
            maxPercentage: limit.maxPercentage,
            minPercentage: limit.minPercentage,
            maxAmount: toDecimalOrNull(limit.maxAmount),
            isMandatory: limit.isMandatory,
            notes: null,
          },
          update: {
            maxPercentage: limit.maxPercentage,
            minPercentage: limit.minPercentage,
            maxAmount: toDecimalOrNull(limit.maxAmount),
            isMandatory: limit.isMandatory,
          },
        });
      }
    });

    return { success: true, createdOrUpdated: limits.length };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to process uploaded PDF";
    return { success: false, error: message };
  }
}
