import { NextResponse } from "next/server";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  const session = await auth();
  if (!session?.user || (session.user as { role?: string })?.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const afm = searchParams.get("afm")?.trim();
  if (!afm) {
    return NextResponse.json({ error: "afm query param required" }, { status: 400 });
  }

  try {
    const customer = await prisma.tRDR.findFirst({
      where: { AFM: afm },
      select: {
        id: true,
        NAME: true,
        CODE: true,
        kads: {
          select: {
            firm_act_code: true,
            firm_act_descr: true,
            firm_act_kind: true,
          },
        },
      },
    });
    if (!customer) return NextResponse.json({ kads: [], companyName: null });
    return NextResponse.json({
      companyName: customer.NAME,
      code: customer.CODE,
      kads: customer.kads,
    });
  } catch (e) {
    console.error("KADs by AFM error:", e);
    return NextResponse.json({ error: "Failed to load KADs" }, { status: 500 });
  }
}
