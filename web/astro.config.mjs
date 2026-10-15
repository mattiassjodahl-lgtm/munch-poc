// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// SSR så att ändringar i Strapi syns direkt utan ombygge.
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  vite: { plugins: [tailwindcss()] },
  image: { domains: ['picsum.photos'] },
});
