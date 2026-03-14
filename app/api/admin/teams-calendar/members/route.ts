import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { getTeamsBookingMembers } from "@/lib/teams-booking-config";

export async function GET() {
  const session = await auth();
  if (!session?.user || (session.user as { role?: string })?.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const members = getTeamsBookingMembers();
  return NextResponse.json({
    groupName: "DGSMART",
    members: members.map((m) => ({
      id: m.id,
      userPrincipalName: m.userPrincipalName,
      displayName: m.displayName,
      mail: m.mail,
    })),
  });
}
