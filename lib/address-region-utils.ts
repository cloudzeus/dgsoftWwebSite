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

/** Group key: same city (and similar zip) → one DeepSeek query. Same city = one group so we don't repeat the same query. */
export function getCityZipGroupKey(city: string | null, zip: string | null): string {
  const c = (city ?? "").trim().toLowerCase();
  const z = (zip ?? "").trim().toLowerCase();
  if (!c && !z) return "unknown";
  if (!c) return `zip_${z}`;
  return c;
}
