# Local → GitHub → GitHub Pages Workflow

Documento complementario a `AGENTS.md` para cambios locales que deben sincronizarse con el repo público y su deploy en GitHub Pages.

## Objetivo

Este repo se desarrolla **localmente en el servidor** y luego se sincroniza con GitHub.

La versión pública depende de:

- la rama `main`
- GitHub Actions
- GitHub Pages en:

```text
https://calebdani23.github.io/caleb-portfolio/
```

## Flujo recomendado para cualquier cambio

1. Hacer cambios en local.
2. Validar siempre con:

```sh
npm run build
```

3. Si el build pasa:

```sh
git status
git add <archivos>
git commit -m "mensaje claro"
git push origin main
```

4. Esperar a que GitHub Actions publique el cambio.
5. Verificar la URL pública.

## Reglas importantes

### 1. No romper la base path de GitHub Pages

Este proyecto **no** publica en `/`, publica en:

```text
/caleb-portfolio/
```

Por eso hay que cuidar especialmente:

- `astro.config.mjs`
- `src/utils/paths.ts`
- links internos
- rutas de imágenes, PDFs y media pública

### 2. Archivos críticos de publicación

No tocar sin cuidado:

- `astro.config.mjs`
- `.github/workflows/deploy-pages.yml`
- `src/utils/paths.ts`

### 3. Validación mínima obligatoria

En este repo, la validación formal es:

```sh
npm run build
```

No hacer push sin que eso pase.

## Configuración actual relevante

### Astro

`astro.config.mjs` debe conservar correctamente:

```js
site: "https://calebdani23.github.io"
base: "/caleb-portfolio"
```

### Deploy

GitHub Pages usa:

- `.github/workflows/deploy-pages.yml`

Y en GitHub debe estar activado:

- **Settings → Pages**
- **Source: GitHub Actions**

## Qué hacer si la URL pública falla

### Revisar primero en este orden

1. Build local:

```sh
npm run build
```

2. Estado git:

```sh
git status
```

3. Push correcto a `main`:

```sh
git push origin main
```

4. Workflow en GitHub Actions:

- revisar si `build` pasó
- revisar si `deploy` pasó

5. Settings de GitHub Pages:

- confirmar que sigue en **GitHub Actions**

## Casos comunes

### El build pasa, pero la web pública no carga assets

Probable causa:

- rutas sin base path

Revisar uso de:

- `withBase(...)`
- `withoutBase(...)`

### La web da 404

Probable causa:

- GitHub Pages no está activado
- el workflow de deploy falló
- el repo no terminó de publicar todavía

### El deploy falló pero antes sí funcionaba

Normalmente el sitio anterior sigue visible hasta que haya un deploy exitoso nuevo.

## Recomendación práctica para agentes futuros

- editar libremente `src/components`, `src/pages`, `src/data`, `src/styles` y `public`
- tratar deploy/base-path como infraestructura sensible
- no cambiar workflow/base sin intención clara
- después de cualquier cambio serio:

```sh
npm run build
```

## Nota final

El servidor local es la **fuente principal de desarrollo**.
GitHub actúa como espejo versionado y como origen del deploy público.
