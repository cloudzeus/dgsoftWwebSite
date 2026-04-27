import { NextRequest, NextResponse } from "next/server";
import { getLegalPage } from "@/app/lib/actions/legal";

const ALLOWED = ["privacy-policy", "cookie-policy", "terms"];

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  if (!ALLOWED.includes(slug)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  const data = await getLegalPage(slug);
  return NextResponse.json(data);
}
