import { defineConfig, sessionDrivers } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL ?? 'https://maqianke.example.com',
  output: 'server',
  session: { driver: sessionDrivers.lruCache({ max: 16 }) },
  adapter: cloudflare({ imageService: 'compile' }),
});
