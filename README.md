# DGSOFT — Monks-Inspired Website

A bold, cinematic website inspired by Monks.com aesthetic with dark theme, massive typography, and smooth animations.

## Design Features

- **Dark Cinematic Aesthetic** — Deep blacks with gradient accents (pink/purple/cyan)
- **Massive Typography** — Bold, display-scale headings with tight letter-spacing
- **Numbered Sections** — 01, 02, 03, 04 style section indicators
- **Smooth Animations** — Framer Motion powered scroll reveals and transitions
- **Gradient Accents** — Pink (#ff3366) to Purple (#9933ff) to Cyan (#00ccff)
- **Editorial Layout** — Magazine-style content arrangement

## Sections

1. **Hero** — Full-screen with animated gradient orbs, massive headline, stats row
2. **Solutions** — Numbered cards (01-04) with hover effects and tags
3. **Work** — Client stories list with featured case study
4. **About** — Editorial layout with awards and values
5. **Contact** — Bold two-column layout with form
6. **Footer** — Minimal dark footer with social links

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons

## Getting Started

```bash
# Extract and install
unzip dgsoft-website-v2.zip
cd dgsoft-website-v2
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Build for Production

```bash
npm run build
# Static files in /dist
```

## Customization

- **Colors**: Edit `tailwind.config.ts` — monks colors object
- **Content**: Edit files in `app/sections/`
- **Images**: Add to `public/images/` and update section files

---

Built with passion by DGSOFT Team
