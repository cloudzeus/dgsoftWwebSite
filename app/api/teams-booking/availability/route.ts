import { NextResponse } from "next/server";
import { getMicrosoftGraphToken, getAvailability } from "@/lib/microsoft-graph";
import { getTeamsBookingMembers } from "@/lib/teams-booking-config";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { startTime, endTime } = body as { startTime?: string; endTime?: string };

    if (!startTime || !endTime) {
      return NextResponse.json(
        { error: "startTime and endTime are required (ISO 8601)" },
        { status: 400 }
      );
    }

    const members = getTeamsBookingMembers();
    if (members.length === 0) {
      return NextResponse.json(
        { error: "No team emails configured. Set TEAMS_BOOKING_EMAILS in .env (comma-separated emails)." },
        { status: 503 }
      );
    }

    const token = await getMicrosoftGraphToken();
    const slots = await getAvailability(token, members, startTime, endTime);
    return NextResponse.json({
      groupName: "DGSMART",
      slots: slots.map((s) => ({
        userId: s.userId,
        userPrincipalName: s.upn,
        displayName: s.displayName,
        available: s.available,
      })),
    });
  } catch (e) {
    console.error("Teams booking availability error:", e);
    const message = e instanceof Error ? e.message : "Availability check failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
