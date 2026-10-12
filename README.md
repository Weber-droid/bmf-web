# BringMe-Food website

Marketing site for [BringMe-Food](https://bringme-food.com), the food delivery platform based in Accra, Ghana.

Built with **Next.js 15** (App Router, TypeScript strict), **Tailwind CSS v4**, **Framer Motion**, **shadcn/ui** primitives (Radix Dialog) and **lucide-react** icons.

## Getting started

Requires Node.js 18.18 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script                 | What it does                                 |
| ---------------------- | -------------------------------------------- |
| `npm run dev`          | Start the dev server (Turbopack)             |
| `npm run build`        | Production build (type-checks and lints too) |
| `npm run start`        | Serve the production build                   |
| `npm run lint`         | ESLint                                       |
| `npm run typecheck`    | TypeScript, no emit                          |
| `npm run format`       | Prettier (with Tailwind class sorting)       |
| `npm run format:check` | Prettier, check only                         |

### Deploying

The project deploys to Vercel with zero configuration: import the repo and keep the defaults. Every page is statically generated.

If the production domain changes, update `url` in `content/site.ts`. It drives canonical URLs, Open Graph tags, the sitemap, robots.txt and the JSON-LD.

## Editing content

**All copy lives in `/content`**, and components only read from it. To change wording, edit the relevant file and save. TypeScript will flag anything that no longer fits the expected shape.

| File                                 | What's in it                                                                                                |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| `content/site.ts`                    | Site name and URL, navigation, the "Get the App" button, app store links, contact details, footer, 404 copy |
| `content/home.ts`                    | Home page: hero, marquee words, community statement, How it Works, Riders/Vendors teasers, Lunch Scheme     |
| `content/vendors.ts`                 | Vendors page: hero, services, technology, How it Works, Why BMF lists                                       |
| `content/riders.ts`                  | Riders page: hero, benefits, requirements                                                                   |
| `content/legal/privacy-policy.ts`    | Privacy Policy, as structured blocks                                                                        |
| `content/legal/terms-conditions.ts`  | Terms & conditions, as structured blocks                                                                    |
| `content/types.ts`, `legal/types.ts` | The shapes the content must follow                                                                          |

## Folder structure

```
app/                       Routes (App Router)
  layout.tsx               Fonts, header, footer, skip link, JSON-LD, motion provider
  page.tsx                 Home
  vendors/  riders/        Marketing pages
  privacy-policy/  terms-conditions/
  not-found.tsx            404
  sitemap.ts  robots.ts    SEO routes
  opengraph-image.tsx      Generated social card (also twitter-image.tsx)
  icon.png                 Favicon
  globals.css              Design tokens, type scale, keyframes, utilities

components/
  ui/                      shadcn/ui primitives (dialog, sheet)
  motion/                  Client-side motion: Reveal, WordReveal, Parallax, Counter, ProgressRing
  layout/                  Header, mobile menu, footer, logo
  home/  vendors/  riders/  legal/   Page-specific sections
  decor/                   Decorative SVGs (blobs, Accra map, kente strip)
  button.tsx  section.tsx  section-heading.tsx  app-store-buttons.tsx
  step-card.tsx  feature-card.tsx  check-list.tsx  contact-section.tsx
  marquee-strip.tsx  scroll-cue.tsx  page-hero.tsx

content/                   Editable copy (see above)
lib/                       Helpers: fonts, metadata, utils, OG image renderer
public/images/             Photos, illustrations, store badges
```

## Design system

Tokens are CSS variables in `app/globals.css`, exposed to Tailwind through `@theme`:

| Token                      | Value                 | Use                                                  |
| -------------------------- | --------------------- | ---------------------------------------------------- |
| `indigo`                   | `#2B2A63`             | Primary brand colour, from the logo                  |
| `saffron`                  | `#FFB020`             | Highlights, badges, blobs, from the app UI           |
| `jollof`                   | `#E8462B`             | Decorative accent and large type                     |
| `jollof-strong`            | `#C93A1F`             | Buttons and small text on cream (WCAG AA with white) |
| `ink`                      | `#14122B`             | Body text, dark sections, footer                     |
| `cream` / `cream-2`        | `#FFF7EC` / `#FCEBD3` | Page background and alternate sections               |
| `text-hero` … `text-title` | `clamp()` scale       | Fluid headings                                       |

Fonts are loaded with `next/font`: **Bricolage Grotesque** for display and **Plus Jakarta Sans** for body text.

Motion respects `prefers-reduced-motion`: Framer Motion uses `reducedMotion="user"`, and CSS animations are neutralised by a media query. Scroll-reveal content stays visible without JavaScript thanks to a `<noscript>` style.
