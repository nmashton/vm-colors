import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const music = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/music" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    genreEn: z.string(),
    accent: z.enum(["red", "yellow", "green"]),
    order: z.number().int(),
    status: z.enum(["complete", "placeholder"]).default("complete"),
  }),
});

export const collections = { music };
