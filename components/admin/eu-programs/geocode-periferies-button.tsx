"use client";

import * as React from "react";
import { MapPin, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { geocodePeriferies } from "@/app/lib/actions/eu-program";

export function GeocodePeriferiesButton() {
  const router = useRouter();
  const [pending, setPending] = React.useState(false);

  const handleClick = async () => {
    setPending(true);
    const tid = toast.loading("Geocoding regions (skipping those with coordinates)…");
    try {
      const result = await geocodePeriferies();
      if (result.updated > 0 || result.skipped > 0) {
        toast.success(
          `Updated ${result.updated} region(s). ${result.skipped} already had coordinates.`,
          { id: tid, duration: 4000 }
        );
        router.refresh();
      }
      if (result.errors.length > 0) {
        toast.error(result.errors.slice(0, 2).join("; "), { id: tid, duration: 5000 });
        if (result.updated > 0) router.refresh();
      }
      if (result.updated === 0 && result.errors.length === 0 && result.skipped >= 0) {
        toast.success("All regions already have coordinates.", { id: tid });
        router.refresh();
      }
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Geocoding failed", { id: tid });
    } finally {
      setPending(false);
    }
  };

  return (
    <Button
      size="sm"
      variant="outline"
      onClick={handleClick}
      disabled={pending}
      className="gap-2 border-sky-200 text-sky-600 hover:bg-sky-50"
    >
      {pending ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <MapPin className="w-4 h-4" />
      )}
      Get coordinates
    </Button>
  );
}
