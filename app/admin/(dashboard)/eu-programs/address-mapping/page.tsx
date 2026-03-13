import { Metadata } from "next";
import {
  getDistinctCustomerAddresses,
  getPeriferiesFlattened,
} from "@/app/lib/actions/address-region";
import { AddressMappingClient } from "@/app/admin/eu-programs/address-mapping/AddressMappingClient";

export const metadata: Metadata = {
  title: "Address → Region mapping | EU Programs",
  description: "Map customer addresses to periferies/nomoi/dimos for funding programs",
};

export default async function AddressMappingPage() {
  const [addresses, periferiesOptions] = await Promise.all([
    getDistinctCustomerAddresses(),
    getPeriferiesFlattened(),
  ]);

  return (
    <div className="p-4 md:p-6 flex flex-col min-h-0">
      <div className="flex flex-col gap-2 mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Address → Region mapping
        </h1>
        <p className="text-sm text-muted-foreground">
          Map distinct customer addresses (from ERP and afm2info) to the administrative tree
          (Περιφέρεια → Νομός → Δήμος). Use AI to suggest mappings, then confirm or edit.
        </p>
      </div>
      <AddressMappingClient
        initialAddresses={addresses}
        periferiesOptions={periferiesOptions}
      />
    </div>
  );
}
