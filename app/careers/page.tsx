import { getPublicPositions } from "../lib/actions/career";
import CareersClient from "./CareersClient";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Καριέρα | DGSOFT",
    description: "Ανοιχτές θέσεις εργασίας στη DGSOFT. Γίνε μέλος της ομάδας μας.",
};

export default async function CareersPage() {
    const positions = await getPublicPositions();
    return <CareersClient positions={positions as any[]} />;
}
