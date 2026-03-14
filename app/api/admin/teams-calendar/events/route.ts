import { NextResponse } from "next/server";
import { auth } from "@/auth";
import {
  getMicrosoftGraphToken,
  getCalendarEventsForEmails,
  createOnlineMeetingAdmin,
} from "@/lib/microsoft-graph";
import { getTeamsBookingMembers } from "@/lib/teams-booking-config";

export async function GET(req: Request) {
  const session = await auth();
  if (!session?.user || (session.user as { role?: string })?.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const startParam = searchParams.get("start");
  const endParam = searchParams.get("end");

  if (!startParam || !endParam) {
    return NextResponse.json(
      { error: "Query params 'start' and 'end' are required (ISO 8601)" },
      { status: 400 }
    );
  }

  const members = getTeamsBookingMembers();
  if (members.length === 0) {
    return NextResponse.json({ events: [] });
  }

  try {
    const token = await getMicrosoftGraphToken();
    const events = await getCalendarEventsForEmails(
      token,
      members,
      startParam,
      endParam
    );
    return NextResponse.json({ events });
  } catch (e) {
    console.error("Teams calendar events error:", e);
    const message = e instanceof Error ? e.message : "Failed to load calendar events";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user || (session.user as { role?: string })?.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const {
      hostUserPrincipalName,
      startTime,
      endTime,
      subject,
      body: description,
      attendeeEmails,
    } = body as {
      hostUserPrincipalName: string;
      startTime: string;
      endTime: string;
      subject: string;
      body?: string;
      attendeeEmails?: string[];
    };

    if (!hostUserPrincipalName?.trim() || !startTime || !endTime || !subject?.trim()) {
      return NextResponse.json(
        { error: "hostUserPrincipalName, startTime, endTime, and subject are required" },
        { status: 400 }
      );
    }

    const members = getTeamsBookingMembers();
    const allowed = members.some(
      (m) => m.userPrincipalName.toLowerCase() === hostUserPrincipalName.trim().toLowerCase()
    );
    if (members.length > 0 && !allowed) {
      return NextResponse.json(
        { error: "Host must be one of TEAMS_BOOKING_EMAILS in .env" },
        { status: 400 }
      );
    }

    const token = await getMicrosoftGraphToken();
    const result = await createOnlineMeetingAdmin(token, hostUserPrincipalName.trim(), {
      subject: subject.trim(),
      startTime,
      endTime,
      body: description?.trim() || undefined,
      attendeeEmails: Array.isArray(attendeeEmails) ? attendeeEmails : undefined,
    });
    return NextResponse.json(result);
  } catch (e) {
    console.error("Teams calendar create event error:", e);
    const message = e instanceof Error ? e.message : "Failed to create meeting";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
