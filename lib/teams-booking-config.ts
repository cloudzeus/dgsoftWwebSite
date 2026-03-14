/**
 * Teams booking: responsible team emails (from .env).
 * These are the people who handle customer requests from the website.
 * Their calendars are checked for availability and meetings are created on their calendars.
 *
 * Set in .env:
 *   TEAMS_BOOKING_EMAILS=email1@dgsmart.gr,email2@dgsmart.gr
 * Optional display names (same order, comma-separated):
 *   TEAMS_BOOKING_NAMES=Name One,Name Two
 */

export type TeamsBookingMember = {
  id: string;
  userPrincipalName: string;
  displayName: string;
  mail: string;
};

function parseList(value: string | undefined): string[] {
  if (!value?.trim()) return [];
  return value
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

/** Display name from email: "name" from "name@domain.gr", or full email if no @. */
function displayNameFromEmail(email: string): string {
  const at = email.indexOf("@");
  if (at > 0) return email.slice(0, at);
  return email;
}

/**
 * Returns the list of responsible team emails (and optional names) from env.
 * Used for: availability check, creating meetings on their calendars, admin calendar view.
 */
export function getTeamsBookingMembers(): TeamsBookingMember[] {
  const emails = parseList(process.env.TEAMS_BOOKING_EMAILS);
  const names = parseList(process.env.TEAMS_BOOKING_NAMES);
  return emails.map((email, i) => ({
    id: email,
    userPrincipalName: email,
    displayName: names[i]?.trim() || displayNameFromEmail(email),
    mail: email,
  }));
}
