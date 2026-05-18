// Bundle analyzer — enable with `ANALYZE=true npm run build`. Produces
// .next/analyze/{client,nodejs,edge}.html reports for diagnosing JS bloat.
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Coolify/Docker: standalone output ships only what's needed.
  // Smaller container, faster cold-start. Requires Dockerfile to copy
  // .next/standalone + .next/static + public.
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "dgsmart.b-cdn.net" },
      { protocol: "https", hostname: "dgsoft.gr" },
      { protocol: "https", hostname: "www.dgsmart.gr" },
      { protocol: "https", hostname: "ui-avatars.com" },
    ],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  poweredByHeader: false,
  experimental: {
    // Allow larger multipart payloads from admin PDF uploads (proxy / middleware).
    proxyClientMaxBodySize: "25mb",
    serverActions: {
      bodySizeLimit: "25mb",
    },
    // Tree-shake icon/animation barrel exports so unused symbols don't end up
    // in the route bundle. Cuts ~50 KB off /app/page first-load JS.
    optimizePackageImports: [
      "framer-motion",
      "lucide-react",
      "@radix-ui/react-accordion",
      "@radix-ui/react-avatar",
      "@radix-ui/react-checkbox",
      "@radix-ui/react-dialog",
      "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-label",
      "@radix-ui/react-popover",
      "@radix-ui/react-select",
      "@radix-ui/react-separator",
      "@radix-ui/react-slot",
      "@radix-ui/react-switch",
      "@radix-ui/react-tabs",
      "@radix-ui/react-toggle",
      "@radix-ui/react-toggle-group",
      "@radix-ui/react-tooltip",
    ],
  },
  // Ensures each deployment gets a unique build ID so the browser
  // always fetches fresh JS bundles — prevents "Failed to find Server Action"
  // errors when a new deployment replaces an old one.
  generateBuildId: async () => {
    return `build-${Date.now()}`
  },
  // Canonicalize host: redirect www.dgsoft.gr → dgsoft.gr (avoids duplicate-content split).
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.dgsoft.gr" }],
        destination: "https://dgsoft.gr/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.dgsmart.gr" }],
        destination: "https://dgsmart.gr/:path*",
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            // 1-year HSTS, applies to subdomains.
            // NOT including `preload` — that's a one-way submission to the browser
            // preload list; opt in via hstspreload.org separately if you want it.
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
        ],
      },
    ]
  },
}
module.exports = withBundleAnalyzer(nextConfig)
