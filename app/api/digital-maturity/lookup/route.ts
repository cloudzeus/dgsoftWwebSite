import { NextResponse } from "next/server";
import { getVatCompanyInfo, getVatCorrectData } from "@/lib/vat-wwa";

export async function POST(req: Request) {
  try {
    const { afm } = (await req.json()) as { afm?: string };
    const trimmed = (afm ?? "").trim();
    if (!/^\d{9}$/.test(trimmed)) {
      return NextResponse.json({ success: false, error: "Μη έγκυρο ΑΦΜ" }, { status: 400 });
    }
    const info = await getVatCompanyInfo(trimmed);
    const correct = getVatCorrectData(info);
    if (!correct || !correct.NAME) {
      return NextResponse.json(
        { success: false, error: "Δεν βρέθηκαν στοιχεία για αυτό το ΑΦΜ." },
        { status: 404 }
      );
    }
    return NextResponse.json({
      success: true,
      company: {
        name: correct.NAME,
        address: correct.ADDRESS,
        city: correct.CITY,
        zip: correct.ZIP,
        legalStatus: correct.legalStatus,
        kads: correct.kads.map((k) => ({
          firm_act_descr: k.firm_act_descr,
          firm_act_kind: k.firm_act_kind,
        })),
      },
    });
  } catch (e) {
    console.error("digital-maturity lookup error", e);
    return NextResponse.json({ success: false, error: "Σφάλμα διακομιστή" }, { status: 500 });
  }
}
