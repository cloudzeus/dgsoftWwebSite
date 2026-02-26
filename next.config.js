/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  // Ensures each deployment gets a unique build ID so the browser
  // always fetches fresh JS bundles — prevents "Failed to find Server Action"
  // errors when a new deployment replaces an old one.
  generateBuildId: async () => {
    return `build-${Date.now()}`
  },
}
module.exports = nextConfig