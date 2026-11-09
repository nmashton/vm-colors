# Colors of Vietnamese Music

A small virtual museum exhibit on three genres of Vietnamese music — red,
yellow, and green — rebuilt as a static [Astro](https://astro.build/) site. The
genre pages are MDX files composed from React content components. The live
design direction is **Cabinet / Tủ Trưng Bày**; the other directions remain
available as a design archive.

## Status

| Page | Address | State |
| --- | --- | --- |
| Landing | `/` | Ready |
| Red music | `/red/` | Complete |
| Yellow music | `/yellow/` | Content received; Vietnamese placard interpretation pending |
| Green music | `/green/` | Content received; song link, title, and artist pending |

The live design direction is Cabinet / Tủ Trưng Bày. Baseline, Nocturne, and
Street Pop are preserved on the design archive at `/themes/`.

## Preview the site

1. Install Node.js 22.23.4 or newer (Node 24 is what the project uses).
2. In this folder, run:

   ```sh
   npm install
   npm run dev
   ```

3. Open <http://localhost:4321/vm-colors/>. The page reloads when you save a
   file.
4. Press `Ctrl+C` to stop.

The design archive is at <http://localhost:4321/vm-colors/themes/>.

To check the production build locally:

```sh
npm run build
npm run preview
```

## Design archive

The board at `/themes/` keeps four renderings of the same three genre pages:

- **Cabinet / Tủ Trưng Bày** — the live direction: serif folio, vitrine video,
  broadside lyrics, engraved placard.
- **Baseline / Paper** — the v1 treatment, kept as a control.
- **Nocturne / Đêm** — a music-forward night mode: full-bleed video, timecode
  labels, transcript lyrics, signal colors.
- **Street Pop / Phố** — a bilingual poster wall: oversized Vietnamese,
  asymmetric grid, color blocks, zine placard.

Each preview is a full working page. The archive is not linked from the live
site, is excluded from the sitemap, and is marked `noindex`; it is available by
direct URL for the group's reference.

## Edit or add a page

Every genre page is one MDX file in `src/content/music/`:

- `src/content/music/red.mdx` — Red music
- `src/content/music/yellow.mdx` — Yellow music
- `src/content/music/green.mdx` — Green music

The full guide, including a copyable skeleton, is
[`docs/music-page.md`](docs/music-page.md). The short version:

1. Set `title`, `description`, `genreEn`, `accent`, `order`, and `status` in the
   frontmatter.
2. Put the two introductions inside `<Intros>`, one `<Intro lang="en">` and one
   `<Intro lang="vi">`.
3. Add `<Video>` if there is a performance. The `id` is the part after `v=` in
   the YouTube URL.
4. Add one `<Line vi="..." en="..." />` per lyric pair inside `<Lyrics>`.
5. Fill `<Placard>` with the song title, composer, performer line, and two
   `<Note>` interpretations.
6. Set `status: "placeholder"` while the page is unfinished; set
   `status: "complete"` when it is ready.

The body is the page, so you can move the video, lyrics, and placard into any
order. There is no `extra` object and no template edit.

### Adding a fourth genre later

Create a new file in `src/content/music/` with an `order` of 40 and an existing
accent (`red`, `yellow`, or `green`). The landing page picks it up
automatically; no template edit is needed. A new accent needs a small style
addition.

## What not to edit

- `src/components/` — the content components and page shell.
- `src/styles/` — the theme styles.
- `src/pages/` — the routes and page templates.
- `astro.config.mjs` — the site URL, base path, and build settings.

If something needs to change in those files, ask the maintainer.

## Publishing

The site is set up for GitHub Pages at
<https://nmashton.github.io/vm-colors/>.

- Push to `main` (or run the workflow by hand from the Actions tab).
- `.github/workflows/deploy.yml` uses the official Astro GitHub Action, builds
  the site, and publishes `dist/` to GitHub Pages.

First-time setup, once per repository:

1. Make the repository public (Settings → General → Danger Zone → Change
   visibility), unless the account has a plan that includes Pages for private
   repositories.
2. Open Settings → Pages and set **Source** to **GitHub Actions**.
3. Push to `main` or re-run the workflow.

The build uses `site` and `base` in `astro.config.mjs`. If the site later moves
to a custom domain, change `site` to the domain and remove `base`; then update
the internal links through the `url()` helper if the path prefix changes.

## Project shape

```text
src/
  components/        page shell, content components, theme bar
  content/music/     the three MDX genre pages
  data/site.ts       landing copy and site metadata
  layouts/Base.astro HTML shell, metadata, header, footer
  lib/               theme registry, URL helper, MDX component map
  pages/             root pages, theme previews, 404
  styles/            base CSS, fonts, theme CSS, board CSS
public/              favicon and robots.txt
scripts/             internal link checker
docs/music-page.md   authoring guide and skeleton
notes/               research, theme briefs, review
```

The pages load no client JavaScript. Fonts are self-hosted from Fontsource,
subset to Latin and Vietnamese. The only third-party embed is the
privacy-enhanced YouTube player.

## Notes for the group

- The Red page keeps the supplied wording, including the spellings "Nố",
  "tô quốc", and "Bich Liên". These look like they may be typos ("Nối",
  "Tổ quốc", "Bích Liên"); confirm before changing them.
- The Vietnamese subtitle on the landing page, "Sắc màu âm nhạc Việt Nam", is a
  working translation and should be confirmed by the class.
- "Nhạc Xanh" is the title supplied with the Green copy. The song title on its
  placard is taken from the opening lyric and still needs confirmation.
- Yellow's Vietnamese placard interpretation is still a `TODO`; the page shows
  the placeholder notice until it is supplied.
- Green has no video link or artist credit yet; the performance section is
  omitted and the placard credits read `TODO`.
