# Caleb Portfolio

Portafolio personal de Caleb Perez: una experiencia single-page con case studies internos para comunicar trabajo en IA, travel tech, automatización, servidores propios, UX/UI y desarrollo de producto.

El sitio está pensado como un portfolio narrativo, no como CV genérico. La home presenta el perfil y los proyectos destacados; las rutas internas documentan case studies concretos como Zalmar Travel, AI Booking Orchestrator, Visual Runner Server y Travel Booking UX System.

## Stack

- Astro 6
- TypeScript
- Tailwind CSS 4 mediante `@tailwindcss/vite`
- CSS global con `@import "tailwindcss"`
- Deploy estático, sin backend, sin autenticación y sin base de datos

## Instalación

Requisitos:

- Node.js `>=22.12.0`
- npm

```sh
npm install
```

## Desarrollo

```sh
npm run dev
```

Servidor local por defecto:

```text
http://localhost:4321
```

## Build

```sh
npm run build
```

El build genera el sitio estático en `dist/`. En este repo, `npm run build` es la validación formal principal.

## Preview

```sh
npm run preview
```

## Deploy recomendado: Vercel

El proyecto es estático y la opción gratuita recomendada para este portfolio es Vercel, porque detecta Astro automáticamente, ofrece preview deployments y asigna un subdominio gratuito `*.vercel.app` sin requerir dominio propio.

Nombre recomendado del proyecto en Vercel:

```text
caleb-perez-portfolio
```

Subdominio esperado si está disponible:

```text
caleb-perez-portfolio.vercel.app
```

No se hardcodea esa URL en el código porque la disponibilidad del subdominio solo puede confirmarse al crear el proyecto en Vercel.

Configuración recomendada:

- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`
- Node version: `22` o superior

## Estructura principal

```text
src/
├── components/        # Componentes reutilizables de home y UI
├── data/              # Datos editables de proyectos, stack, timeline y case studies
├── layouts/           # BaseLayout y layout de case studies
├── pages/             # Home y rutas internas /proyectos/[slug]
└── styles/            # Estilos globales y Tailwind v4
```

## Notas de contenido

- Los enlaces sociales se mantienen como placeholders honestos hasta tener URLs reales.
- La foto del hero se controla desde `src/data/profile.ts`; por defecto usa `public/images/profile-placeholder.svg`, que puede reemplazarse por un asset local real. El campo `photo.objectFit` está en `contain` para respetar mejor retratos SVG sin recorte agresivo.
- Los visuales de proyectos son intencionalmente abstractos por ahora; pueden reemplazarse con capturas o assets en una iteración futura.
- `src/content/projects` existe como espacio futuro, pero el contenido actual vive en `src/data` para mantener edición simple.
- Dominio gratis: usa Vercel con el nombre recomendado `caleb-perez-portfolio`. Cuando Vercel confirme el subdominio final, conviene actualizar la configuración `site`/canonicals si se desea una URL absoluta de producción.
