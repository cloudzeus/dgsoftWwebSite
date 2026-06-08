/**
 * Rasterize the website's lucide social icons to white PNGs for email use.
 * Output: public/newsletter-icons/{facebook,instagram,linkedin,twitter,website}.png
 * Run: npx tsx scripts/generate-newsletter-icons.ts
 */
import sharp from "sharp";
import fs from "fs";
import path from "path";

// lucide-react icon inner SVG (24x24 viewBox), matching app/components/Footer.tsx
const ICONS: Record<string, string> = {
  facebook: `<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>`,
  instagram: `<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>`,
  linkedin: `<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>`,
  twitter: `<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>`,
  website: `<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 1 0 20 14.5 14.5 0 0 1 0-20"/><path d="M2 12h20"/>`,
};

const SIZE = 96; // rendered @ ~32px in email → crisp on retina

function svg(inner: string): Buffer {
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="${SIZE}" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`
  );
}

async function main() {
  const outDir = path.join(process.cwd(), "public", "newsletter-icons");
  fs.mkdirSync(outDir, { recursive: true });
  for (const [name, inner] of Object.entries(ICONS)) {
    const file = path.join(outDir, `${name}.png`);
    await sharp(svg(inner)).png().toFile(file);
    console.log("✓", path.relative(process.cwd(), file));
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
