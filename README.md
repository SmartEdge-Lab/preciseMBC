# Precise MBC

Precise MBC is a bilingual marketing website for an OBGYN medical billing company serving South Florida practices. The site is built with Astro and includes localized English and Spanish routes, reusable content sections, baseline SEO, sitemap generation, and structured business metadata.

## Stack

- Astro 6
- Tailwind CSS 4 via Vite
- Astro Sitemap
- Astro SEO
- Astro Icon with Lucide icons
- Node.js 22.12 or newer

## Main Routes

- `/` redirects to `/en/`
- `/en/` English home page
- `/es/` Spanish home page
- `/en/privacy` and `/es/privacy`
- `/en/terms` and `/es/terms`

The i18n configuration lives in `astro.config.mjs`, and site copy is centralized in `src/i18n/ui.ts`.

## Project Structure

```text
/
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── hero_img.png
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   ├── ui/
│   │   └── widgets/
│   ├── i18n/
│   ├── layouts/
│   ├── pages/
│   │   ├── en/
│   │   ├── es/
│   │   └── index.astro
│   └── styles/
├── astro.config.mjs
├── package.json
└── README.md
```

## Local Development

Install dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

Astro serves the site at `http://localhost:4321` by default.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the local development server |
| `npm run build` | Builds the production site into `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run astro` | Runs Astro CLI commands |

## Build

```sh
npm run build
```

The build generates the static pages, sitemap, and optimized assets in `dist/`.

## Content and SEO

- Primary metadata is defined in `src/i18n/ui.ts`.
- The base layout uses `astro-seo` and `MedicalBusiness` JSON-LD.
- The canonical site URL is configured as `https://precisembc.com`.
- The sitemap includes the `en-US` and `es-MX` locales.

## Maintenance Notes

- Update site copy in `src/i18n/ui.ts`.
- Add or edit homepage sections in `src/components/sections/`.
- Add localized pages in both `src/pages/en/` and `src/pages/es/`.
- Run `npm run build` before publishing changes.
