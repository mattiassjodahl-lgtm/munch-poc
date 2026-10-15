# MUNCH – prototyp (Strapi + Astro)

Intern prototyp från Consid. Designen efterliknar munch.no; bilder är platshållare och typsnitten är ersatta (Anton/Hanken Grotesk istället för Girott/Aktiv Grotesk).

## Struktur
- `strapi/` – Strapi 5. Content types: Utställning, Evenemang, Startsida (single), Globalt (single). Seedar sig själv vid första start och öppnar publik läsrättighet.
- `web/` – Astro 7 + Tailwind 4, SSR på Vercel. Sidor: `/en/`, `/en/exhibitions`, `/en/exhibitions/[slug]`.

## Lokalt
```bash
cd strapi && cp .env.example .env && npm i && npm run develop   # http://localhost:1337/admin
cd web && npm i && STRAPI_URL=http://localhost:1337 npm run dev # http://localhost:4321
```

## Deploy
- **Strapi Cloud:** nytt projekt → välj repot → *Base directory* `strapi`. Gratisplanen räcker.
- **Vercel:** nytt projekt → *Root directory* `web` → env `STRAPI_URL=<strapi cloud-url>`.

## Redigera
Ändra en utställnings tema (färgpar), text eller bild i Strapi → syns direkt på sajten (30 s cache).
