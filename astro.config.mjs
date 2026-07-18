// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://trulecnik.cz',
  integrations: [
    sitemap({
      // Emit xhtml:link hreflang alternates for every URL in the sitemap.
      i18n: {
        defaultLocale: 'cs',
        locales: {
          cs: 'cs',
          en: 'en',
        },
      },
    }),
  ],
  // Czech is the default locale (served at "/"), English lives under "/en/".
  // The game is Czech and the domain is .cz, so Czech is primary — but both
  // languages are first-class and switchable from every page.
  i18n: {
    defaultLocale: 'cs',
    locales: ['cs', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
