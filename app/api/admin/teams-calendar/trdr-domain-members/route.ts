import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { getTrdrByEmailDomain } from "@/app/lib/actions/trdr";

export async function GET(req: Request) {
  const session = await auth();
  if (!session?.user || (session.user as { role?: string })?.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const domain = searchParams.get("domain")?.trim() ?? "dgsmart.gr";

  try {
    const members = await getTrdrByEmailDomain(domain);
    return NextResponse.json({ domain, members });
  } catch (e) {
    console.error("TRDR domain members error:", e);
    const message = e instanceof Error ? e.message : "Failed to load TRDR members";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
