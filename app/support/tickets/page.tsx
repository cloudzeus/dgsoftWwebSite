import type { Metadata } from "next"

import { TicketHistory } from "./ticket-history"

export const metadata: Metadata = {
  title: "Τα αιτήματα υποστήριξής μου | DGsoft",
  description:
    "Ιστορικό και κατάσταση των αιτημάτων υποστήριξης που έχετε υποβάλει.",
  robots: { index: false },
}

export default function SupportTicketsPage() {
  return <TicketHistory />
}
