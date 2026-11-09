import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { satteri } from "@astrojs/markdown-satteri";
import { validateContentComponents } from "./src/lib/validate-content-components.mjs";

export default defineConfig({
  site: "https://nmashton.github.io",
  base: "/vm-colors",
  trailingSlash: "always",
  markdown: {
    processor: satteri({
      features: { smartPunctuation: false },
      mdastPlugins: [validateContentComponents],
    }),
  },
  integrations: [
    mdx(),
    react(),
    sitemap({
      filter: (page) => !page.includes("/themes/"),
    }),
  ],
});
