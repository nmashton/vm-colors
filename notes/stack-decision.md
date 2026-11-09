# Stack decision: Astro 7 + MDX + React components

**Date:** 2026-11-09

**Question:** What should replace Zola for a four-page, content-first exhibit
where authors need explicit control over the sequence of structured sections?

## Constraints

- Static HTML output, deployed to GitHub Pages under `/vm-colors/`.
- Structured content as components with props, not a single `extra` object.
- A page body where prose and components can be interleaved in any order.
- An authoring format that is as close to the content as possible.
- No client JavaScript required for reading the exhibit.
- A small dependency surface and a build that one person can maintain.

## What is available

| Option | Finding | Source |
| --- | --- | --- |
| **Gatsby** | Still installable, but in maintenance mode and widely treated as a framework in decline. Fine for an existing site; not the right base for a new build. | Robin Wieruch, "Is Gatsby.js Still Worth Using in 2026?", 2026-04-30; Gautam Khorana, "Gatsby, Static Site Generator Review (2026)", 2026 |
| **Next.js 16 static export** | Genuinely React-first and supports static HTML, but it is app-oriented. It ships a client runtime and needs extra MDX setup. More framework than a four-page content site needs. | Next.js docs, "How to create a static export", read 2026-11-09 |
| **Astro 7** | Content collections, MDX, React components rendered to static HTML, zero client JavaScript by default, official GitHub Pages support. The best fit for a content site that wants React components without a React runtime. | Astro docs: content collections, MDX, React integration, GitHub Pages; Astro 7 release notes |
| **minista 5** | A minimal React + Vite static site generator with MDX and 100% static output. Credible if React must be the application framework, but a smaller ecosystem and less proven content tooling. | minista docs, read 2026-11-09 |
| **React Router 7** | Pre-rendering works, but the framework is shaped for applications and would add more routing and data-loading machinery than this site needs. | React Router docs, "Pre-Rendering", read 2026-11-09 |

## Decision

Use **Astro 7** with:

- `@astrojs/mdx` for the content files.
- `@astrojs/react` for the content components.
- Astro content collections and a Zod schema for frontmatter.
- `@astrojs/sitemap` for the public pages.
- No client-side hydration directives, so the output is static HTML and CSS.

Astro is not React-first. It is React-compatible. That distinction is the
tradeoff: React owns the content components; Astro owns the page shell and the
build. The site ships no React runtime, which is the right trade for a reading
experience.

## Authoring model

A genre page is `src/content/music/<genre>.mdx`:

```mdx
---
title: "Nhạc Đỏ"
description: "..."
genreEn: "Red music"
accent: "red"
order: 10
status: "complete"
---

<Intros>

<Intro lang="en">...</Intro>
<Intro lang="vi">...</Intro>

</Intros>

<Video id="..." start="42" ... />

<Lyrics>
  <Line vi="..." en="..." />
</Lyrics>

<Placard title="..." composer="..." credit="...">
  <Note lang="en">...</Note>
  <Note lang="vi">...</Note>
</Placard>
```

- Frontmatter holds metadata only.
- The body holds the page, in the author's order.
- Short values are string props; long prose is children.
- The page passes the components to MDX through Astro's `components` prop, so
  content files do not import anything.
- A Satteri mdast plugin rejects unknown component names with a readable error
  and a spelling hint.
- `src/content.config.ts` validates frontmatter and rejects an unknown accent or
  status.
- `docs/music-page.md` is the authoring guide and copyable skeleton.

## Verification

- `npm run build` produces 22 pages: landing, three genres, 404, the review
  board, and four previews of each page.
- `npx astro check` reports 0 errors, 0 warnings, 0 hints.
- The built pages contain no `<script>` elements.
- A scratch page copied from the guide built successfully; its placard rendered
  before its lyrics, proving the sequence is author-controlled.
- An unknown `<Lyric>` component failed the build with: "Unknown content
  component <Lyric> ... Did you mean <Line>?"
- 226 internal links and assets were checked; all are present.
- 22 pages were checked at 390, 768, and 1280 CSS pixels: no horizontal
  overflow; fonts loaded.

## Risks and open questions

- MDX is more readable than a TOML header, but it is still markup. A true
  non-technical editor would need a CMS or form-based editor; that is a later
  decision, not a reason to keep `extra`.
- Astro's MDX `components` prop is the key convenience. If it ever stops
  passing React components cleanly, the fallback is one import line at the top
  of each content file; the authoring model does not change.
- Astro 7 requires Node 22.23.4 or newer. The local environment uses Node 24 and
  the GitHub Action pins Node 24.
- The site's only third-party request is the privacy-enhanced YouTube iframe.

## Sources

- Astro docs, content collections: <https://docs.astro.build/en/guides/content-collections/>
- Astro docs, MDX integration: <https://docs.astro.build/en/guides/integrations-guide/mdx/>
- Astro docs, React integration: <https://docs.astro.build/en/guides/integrations-guide/react/>
- Astro docs, GitHub Pages deployment: <https://docs.astro.build/en/guides/deploy/github/>
- Astro 7 release notes: <https://astro.build/blog/astro-7/>
- Astro install requirements: <https://docs.astro.build/en/install-and-setup/>
- Next.js static exports: <https://nextjs.org/docs/app/building-your-application/deploying/static-exports>
- minista: <https://minista.dev/>
- React Router pre-rendering: <https://reactrouter.com/how-to/pre-rendering>
- Robin Wieruch, "Is Gatsby.js Still Worth Using in 2026?":
  <https://www.robinwieruch.de/react-gatsby-js/>
- Gautam Khorana, "Gatsby, Static Site Generator Review (2026)":
  <https://gautamkhorana.com/static-site-generators/gatsby/>
