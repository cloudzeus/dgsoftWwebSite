/**
 * Microsoft Graph API helpers for Teams booking:
 * - OAuth2 client credentials (APPLICATION_ID, TENANT_ID, CLIENT_SECRET_VALUE)
 * - Find DGSMART group, list members, get calendar availability, create online meeting
 *
 * Required Azure AD app permissions (Application):
 * - Group.Read.All (or GroupMember.Read.All) — list group and members
 * - Calendars.Read — getSchedule for availability
 * - Calendars.ReadWrite — create calendar events with isOnlineMeeting
 */

const GRAPH_BASE = "https://graph.microsoft.com/v1.0";
const TIMEZONE = "Europe/Athens";

export async function getMicrosoftGraphToken(): Promise<string> {
  const tokenUrl = `https://login.microsoftonline.com/${process.env.TENANT_ID}/oauth2/v2.0/token`;
  const res = await fetch(tokenUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: process.env.APPLICATION_ID!,
      client_secret: process.env.CLIENT_SECRET_VALUE!,
      scope: "https://graph.microsoft.com/.default",
      grant_type: "client_credentials",
    }),
  });
  const data = (await res.json()) as { access_token?: string; error_description?: string };
  if (!res.ok) throw new Error(`Microsoft token error: ${data.error_description ?? res.statusText}`);
  if (!data.access_token) throw new Error("No access_token in Microsoft token response");
  return data.access_token;
}

export type GraphUser = { id: string; userPrincipalName: string; displayName: string; mail?: string };

/** Throws a clear error when Graph returns Authorization_RequestDenied (missing app permission). */
function checkGraphError(res: Response, body: string, context: string): void {
  if (!res.ok) {
    try {
      const json = JSON.parse(body) as { error?: { code?: string; message?: string } };
      if (json.error?.code === "Authorization_RequestDenied") {
        throw new Error(
          `Microsoft Graph: insufficient privileges (${context}). Add application permission Group.Read.All in Azure Portal (App registration → API permissions) and grant admin consent.`
        );
      }
    } catch (e) {
      if (e instanceof Error && e.message.startsWith("Microsoft Graph:")) throw e;
    }
    throw new Error(`Graph ${context} failed: ${body}`);
  }
}

/** Find a group by display name (e.g. "DGSMART"). */
export async function findGroupByDisplayName(
  token: string,
  displayName: string
): Promise<{ id: string; displayName: string } | null> {
  const q = encodeURIComponent(`displayName eq '${displayName.replace(/'/g, "''")}'`);
  const res = await fetch(`${GRAPH_BASE}/groups?$filter=${q}&$select=id,displayName`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const body = await res.text();
  checkGraphError(res, body, "groups list");
  const data = JSON.parse(body) as { value?: { id: string; displayName: string }[] };
  const group = data.value?.[0] ?? null;
  return group ? { id: group.id, displayName: group.displayName } : null;
}

/** List direct members of a group that are users (not nested groups). */
export async function getGroupMemberUsers(
  token: string,
  groupId: string
): Promise<GraphUser[]> {
  const res = await fetch(
    `${GRAPH_BASE}/groups/${groupId}/members/microsoft.graph.user?$select=id,userPrincipalName,displayName,mail`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  if (!res.ok) throw new Error(`Graph group members failed: ${await res.text()}`);
  const data = (await res.json()) as { value?: GraphUser[] };
  return data.value ?? [];
}

export type ScheduleSlot = { userId: string; upn: string; displayName: string; available: boolean };

/**
 * Get calendar availability for the given users in the time range.
 * Uses the first user's calendar to call getSchedule (Graph requirement).
 * Merges result with users list to get displayName and userId.
 */
export async function getAvailability(
  token: string,
  users: GraphUser[],
  startTime: string,
  endTime: string
): Promise<ScheduleSlot[]> {
  if (users.length === 0) return [];
  const userEmails = users.map((u) => u.userPrincipalName);
  const byUpn = new Map(users.map((u) => [u.userPrincipalName.toLowerCase(), u]));

  const res = await fetch(
    `${GRAPH_BASE}/users/${encodeURIComponent(userEmails[0])}/calendar/getSchedule`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "Prefer": 'outlook.timezone="' + TIMEZONE + '"',
      },
      body: JSON.stringify({
        schedules: userEmails,
        startTime: { dateTime: startTime, timeZone: TIMEZONE },
        endTime: { dateTime: endTime, timeZone: TIMEZONE },
        availabilityViewInterval: 30,
      }),
    }
  );

  if (!res.ok) throw new Error(`Graph getSchedule failed: ${await res.text()}`);
  const data = (await res.json()) as {
    value?: Array<{
      scheduleId: string;
      scheduleItems?: Array<{ status: string; start: { dateTime: string }; end: { dateTime: string } }>;
    }>;
  };

  const startMs = new Date(startTime).getTime();
  const endMs = new Date(endTime).getTime();

  return (data.value ?? []).map((s) => {
    const hasBusyInRange = (s.scheduleItems ?? []).some((item) => {
      if (item.status === "free" || item.status === "workingElsewhere") return false;
      const itemStart = new Date(item.start.dateTime).getTime();
      const itemEnd = new Date(item.end.dateTime).getTime();
      return itemStart < endMs && itemEnd > startMs;
    });
    const user = byUpn.get(s.scheduleId.toLowerCase());
    return {
      userId: user?.id ?? "",
      upn: s.scheduleId,
      displayName: user?.displayName ?? s.scheduleId,
      available: !hasBusyInRange,
    };
  });
}

export type CreateMeetingResult = {
  joinUrl: string;
  eventId: string;
  subject: string;
  start: string;
  end: string;
};

/**
 * Create a Teams online meeting on the given user's calendar and add the guest as attendee.
 */
export async function createOnlineMeeting(
  token: string,
  hostUserPrincipalName: string,
  options: {
    subject: string;
    startTime: string;
    endTime: string;
    guestEmail: string;
    guestName?: string;
    body?: string;
  }
): Promise<CreateMeetingResult> {
  const res = await fetch(
    `${GRAPH_BASE}/users/${encodeURIComponent(hostUserPrincipalName)}/calendar/events`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject: options.subject,
        body: options.body
          ? { contentType: "HTML", content: options.body }
          : undefined,
        start: {
          dateTime: options.startTime,
          timeZone: TIMEZONE,
        },
        end: {
          dateTime: options.endTime,
          timeZone: TIMEZONE,
        },
        isOnlineMeeting: true,
        onlineMeetingProvider: "teamsForBusiness",
        attendees: [
          {
            emailAddress: {
              address: options.guestEmail,
              name: options.guestName ?? options.guestEmail,
            },
            type: "required",
          },
        ],
      }),
    }
  );

  const responseText = await res.text();
  if (!res.ok) {
    let parsed: { error?: { code?: string; message?: string } } = {};
    try {
      parsed = JSON.parse(responseText) as typeof parsed;
    } catch {
      /* ignore */
    }
    if (parsed.error?.code === "ErrorAccessDenied") {
      throw new Error(
        "Microsoft Graph: Access denied when creating calendar event. " +
          "1) Add application permission Calendars.ReadWrite in Azure Portal (App registration → API permissions) and grant admin consent. " +
          "2) TEAMS_BOOKING_EMAILS must be a licensed user account (not a shared mailbox); shared mailboxes cannot host Teams meetings."
      );
    }
    throw new Error(`Graph create event failed: ${responseText}`);
  }
  const event = JSON.parse(responseText) as {
    id: string;
    subject: string;
    start: { dateTime: string; timeZone: string };
    end: { dateTime: string; timeZone: string };
    onlineMeeting?: { joinUrl?: string };
  };

  const joinUrl = event.onlineMeeting?.joinUrl;
  if (!joinUrl) throw new Error("Created event has no online meeting join URL");

  return {
    joinUrl,
    eventId: event.id,
    subject: event.subject,
    start: event.start.dateTime,
    end: event.end.dateTime,
  };
}

/**
 * Create a Teams online meeting (admin): host calendar, optional attendees.
 * Use for admin-created meetings; Graph sends calendar invites to attendees.
 */
export async function createOnlineMeetingAdmin(
  token: string,
  hostUserPrincipalName: string,
  options: {
    subject: string;
    startTime: string;
    endTime: string;
    body?: string;
    attendeeEmails?: string[];
  }
): Promise<CreateMeetingResult> {
  const attendees = (options.attendeeEmails ?? [])
    .filter((e) => e?.trim())
    .map((email) => ({
      emailAddress: { address: email.trim(), name: email.trim() },
      type: "required" as const,
    }));
  const res = await fetch(
    `${GRAPH_BASE}/users/${encodeURIComponent(hostUserPrincipalName)}/calendar/events`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject: options.subject,
        body: options.body
          ? { contentType: "HTML", content: options.body }
          : undefined,
        start: { dateTime: options.startTime, timeZone: TIMEZONE },
        end: { dateTime: options.endTime, timeZone: TIMEZONE },
        isOnlineMeeting: true,
        onlineMeetingProvider: "teamsForBusiness",
        ...(attendees.length > 0 && { attendees }),
      }),
    }
  );
  const responseTextAdmin = await res.text();
  if (!res.ok) {
    let parsed: { error?: { code?: string; message?: string } } = {};
    try {
      parsed = JSON.parse(responseTextAdmin) as typeof parsed;
    } catch {
      /* ignore */
    }
    if (parsed.error?.code === "ErrorAccessDenied") {
      throw new Error(
        "Microsoft Graph: Access denied when creating calendar event. " +
          "1) Add application permission Calendars.ReadWrite in Azure Portal (App registration → API permissions) and grant admin consent. " +
          "2) The host email must be a licensed user account (not a shared mailbox); shared mailboxes cannot host Teams meetings."
      );
    }
    throw new Error(`Graph create event failed: ${responseTextAdmin}`);
  }
  const event = JSON.parse(responseTextAdmin) as {
    id: string;
    subject: string;
    start: { dateTime: string; timeZone: string };
    end: { dateTime: string; timeZone: string };
    onlineMeeting?: { joinUrl?: string };
  };
  const joinUrl = event.onlineMeeting?.joinUrl;
  if (!joinUrl) throw new Error("Created event has no online meeting join URL");
  return {
    joinUrl,
    eventId: event.id,
    subject: event.subject,
    start: event.start.dateTime,
    end: event.end.dateTime,
  };
}

export type CalendarEvent = {
  id: string;
  subject: string;
  start: string;
  end: string;
  organizerDisplayName: string;
  organizerUpn: string;
  isOnlineMeeting: boolean;
  joinUrl?: string;
  webLink?: string;
  /** HTML or plain text body (company details for website-origin meetings). */
  body?: string;
};

/**
 * List calendar events (calendarView) for a single user in a date range.
 */
export async function getCalendarViewForUser(
  token: string,
  userPrincipalName: string,
  startDateTime: string,
  endDateTime: string
): Promise<Array<Omit<CalendarEvent, "organizerDisplayName" | "organizerUpn"> & { organizerDisplayName?: string; organizerUpn?: string }>> {
  const startEnc = encodeURIComponent(startDateTime);
  const endEnc = encodeURIComponent(endDateTime);
  const res = await fetch(
    `${GRAPH_BASE}/users/${encodeURIComponent(userPrincipalName)}/calendar/calendarView?startDateTime=${startEnc}&endDateTime=${endEnc}&$select=id,subject,start,end,organizer,isOnlineMeeting,onlineMeeting,webLink,body`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  if (!res.ok) throw new Error(`Graph calendarView failed: ${await res.text()}`);
  const data = (await res.json()) as {
    value?: Array<{
      id: string;
      subject: string;
      start: { dateTime: string; timeZone: string };
      end: { dateTime: string; timeZone: string };
      organizer?: { emailAddress?: { name?: string; address?: string } };
      isOnlineMeeting?: boolean;
      onlineMeeting?: { joinUrl?: string };
      webLink?: string;
      body?: { content?: string; contentType?: string };
    }>;
  };
  return (data.value ?? []).map((e) => ({
    id: e.id,
    subject: e.subject ?? "(No subject)",
    start: e.start.dateTime,
    end: e.end.dateTime,
    organizerDisplayName: e.organizer?.emailAddress?.name,
    organizerUpn: e.organizer?.emailAddress?.address,
    isOnlineMeeting: e.isOnlineMeeting ?? false,
    joinUrl: e.onlineMeeting?.joinUrl,
    webLink: e.webLink,
    body: e.body?.content,
  }));
}

/**
 * Get calendar events for all users in the group for the given date range.
 * Each event is tagged with the calendar owner (whose calendar we read) as fallback if organizer is external.
 */
export async function getCalendarEventsForGroup(
  token: string,
  groupName: string,
  startDateTime: string,
  endDateTime: string
): Promise<CalendarEvent[]> {
  const group = await findGroupByDisplayName(token, groupName);
  if (!group) return [];
  const allMembers = await getGroupMemberUsers(token, group.id);
  const members = allMembers.filter((u) => u?.userPrincipalName?.trim());
  return getCalendarEventsForEmails(token, members, startDateTime, endDateTime);
}

/**
 * Get calendar events for a given list of users (by email/UPN) for the date range.
 * Use this when the team list comes from config (TEAMS_BOOKING_EMAILS) instead of an Azure AD group.
 */
export async function getCalendarEventsForEmails(
  token: string,
  users: GraphUser[],
  startDateTime: string,
  endDateTime: string
): Promise<CalendarEvent[]> {
  const members = users.filter((u) => u?.userPrincipalName?.trim());
  const results: CalendarEvent[] = [];
  for (const user of members) {
    try {
      const events = await getCalendarViewForUser(
        token,
        user.userPrincipalName!,
        startDateTime,
        endDateTime
      );
      for (const e of events) {
        results.push({
          id: e.id,
          subject: e.subject,
          start: e.start,
          end: e.end,
          organizerDisplayName: e.organizerDisplayName ?? user.displayName,
          organizerUpn: e.organizerUpn ?? user.userPrincipalName,
          isOnlineMeeting: e.isOnlineMeeting ?? false,
          joinUrl: e.joinUrl,
          webLink: e.webLink,
          body: e.body,
        });
      }
    } catch (err) {
      console.warn(`[Teams calendar] Skipped ${user.userPrincipalName}:`, err);
    }
  }
  results.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
  return results;
}
