import { Metadata } from "next";
import { MapPin, Sparkles } from "lucide-react";
import {
  getDistinctCustomerAddresses,
  getPeriferiesFlattened,
} from "@/app/lib/actions/address-region";
import { AddressMappingClient } from "@/app/admin/eu-programs/address-mapping/AddressMappingClient";

export const metadata: Metadata = {
  title: "Address → Region mapping | EU Programs",
  description: "Map customer addresses to periferies/nomoi/dimos for funding programs",
};

export const dynamic = "force-dynamic";

export default async function AddressMappingPage() {
  const [addresses, periferiesOptions] = await Promise.all([
    getDistinctCustomerAddresses(),
    getPeriferiesFlattened(),
  ]);

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-6 p-4 md:p-6">
      <div className="overflow-hidden rounded-2xl border border-primary/15 bg-gradient-to-br from-slate-50/90 via-card to-emerald-50/30 dark:from-slate-950 dark:via-card dark:to-emerald-950/20 shadow-md shadow-primary/5">
        <div
          className="h-1 w-full shrink-0 bg-gradient-to-r from-amber-400 via-violet-500 to-emerald-500"
          aria-hidden
        />
        <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-start sm:gap-4 sm:p-5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/18 to-emerald-500/18 text-primary ring-1 ring-primary/20">
            <MapPin className="h-5 w-5" />
          </span>
          <div className="min-w-0 flex-1 space-y-2">
            <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-violet-500" />
              EU programs · Geo
            </p>
            <h1 className="text-[15px] font-semibold leading-snug tracking-tight text-foreground sm:text-base">
              Address → Region mapping
            </h1>
            <p className="max-w-3xl text-[11px] leading-relaxed text-muted-foreground">
              Map distinct customer addresses (ERP / afm2info) to the administrative tree
              (Περιφέρεια → Νομός → Δήμος). Use AI to suggest mappings, then confirm or edit.
            </p>
          </div>
        </div>
      </div>

      <AddressMappingClient
        initialAddresses={addresses}
        periferiesOptions={periferiesOptions}
      />
    </div>
  );
}
