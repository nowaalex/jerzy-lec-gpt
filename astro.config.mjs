import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://nowaalex.github.io",
  base: "/jerzy-lec-gpt",
  integrations: [tailwind()],
});
