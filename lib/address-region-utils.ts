/** Normalize to a stable key for deduplication (address|city|zip, trimmed and lowercased). */
export function normalizeAddressKey(
  address: string | null,
  city: string | null,
  zip: string | null
): string {
  const a = (address ?? "").trim().toLowerCase();
  const c = (city ?? "").trim().toLowerCase();
  const z = (zip ?? "").trim().toLowerCase();
  return `${a}|${c}|${z}`;
}
