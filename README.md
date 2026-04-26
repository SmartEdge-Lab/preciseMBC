# Precise MBC

Sitio web bilingue de Precise MBC, una firma de medical billing especializada en practicas OBGYN del sur de Florida. El proyecto esta construido con Astro y publica contenido en ingles y espanol con rutas localizadas, SEO base, sitemap y componentes reutilizables.

## Stack

- Astro 6
- Tailwind CSS 4 via Vite
- Astro Sitemap
- Astro SEO
- Astro Icon con iconos Lucide
- Node.js 22.12 o superior

## Rutas principales

- `/` redirige a `/en/`
- `/en/` pagina principal en ingles
- `/es/` pagina principal en espanol
- `/en/privacy` y `/es/privacy`
- `/en/terms` y `/es/terms`

La configuracion de i18n vive en `astro.config.mjs` y las traducciones estan centralizadas en `src/i18n/ui.ts`.

## Estructura

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

## Desarrollo local

Instala dependencias:

```sh
npm install
```

Inicia el servidor de desarrollo:

```sh
npm run dev
```

Por defecto, Astro levanta el sitio en `http://localhost:4321`.

## Scripts

| Comando | Descripcion |
| --- | --- |
| `npm run dev` | Inicia el servidor local de desarrollo |
| `npm run build` | Genera la version de produccion en `dist/` |
| `npm run preview` | Sirve el build localmente para revisar produccion |
| `npm run astro` | Ejecuta comandos del CLI de Astro |

## Build

```sh
npm run build
```

El build genera las paginas estaticas, el sitemap y los assets optimizados bajo `dist/`.

## Contenido y SEO

- Los metadatos principales se definen desde `src/i18n/ui.ts`.
- El layout base usa `astro-seo` y JSON-LD de tipo `MedicalBusiness`.
- El dominio canonico configurado es `https://precisembc.com`.
- El sitemap incluye los locales `en-US` y `es-MX`.

## Notas de mantenimiento

- Para cambiar textos del sitio, edita `src/i18n/ui.ts`.
- Para agregar una nueva seccion, crea o actualiza componentes en `src/components/sections/`.
- Para agregar una pagina localizada, crea la version correspondiente en `src/pages/en/` y `src/pages/es/`.
- Verifica cambios con `npm run build` antes de publicar.
