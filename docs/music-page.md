# Music page authoring guide

A genre page is one MDX file in `src/content/music/`. The body of the file is
the page: prose, video, lyrics, and placard appear in the order you write them.
There is no `extra` object, and you never edit a page template to change the
order of sections.

## The file

Create or edit a file such as `src/content/music/red.mdx`. It has two parts:

1. **Frontmatter** at the top, between `---` lines, for the page metadata.
2. **The body** below the closing `---`, made of ordinary Markdown and the
   content components described below.

## Frontmatter fields

| Field | Required | What it is |
| --- | --- | --- |
| `title` | yes | Vietnamese title of the genre; shown as the page heading. |
| `description` | yes | One sentence for search engines and link previews. |
| `genreEn` | yes | English genre name for the landing list and page eyebrow. |
| `accent` | yes | `red`, `yellow`, or `green`; sets the page accent color. |
| `order` | yes | Order on the landing page. Red is 10, Yellow 20, Green 30. |
| `status` | yes | `complete`, or `placeholder` while the page is unfinished. A placeholder shows a notice. |

## Content components

The page provides these components. You do not import them; just use the tags.

### Intros and Intro

Wrap the two introductions in `<Intros>` and label each one with `lang`:

```mdx
<Intros>

<Intro lang="en">

English introduction.

</Intro>

<Intro lang="vi">

Giới thiệu bằng tiếng Việt.

</Intro>

</Intros>
```

Use blank lines around the text so Markdown can format paragraphs. The
`<Intros>` wrapper lets each theme place the two languages side by side or
stacked.

### Video

```mdx
<Video
  id="q2evcToj9yQ"
  start="42"
  excerpt="0:42–1:14"
  title="Cô gái mở đường (The Girl who Blazes the Trail)"
  credit="Sáng tác: Xuân Giao · Trình bày: Bich Liên – Vũ Dậu"
/>
```

- `id` is the part after `v=` in a YouTube URL.
- `start` is the start time in seconds. Use `"0"` for the beginning.
- `excerpt` is the visible label, such as `"0:42–1:14"`.
- `title` and `credit` are shown under the film.
- Omit the whole `<Video>` block if there is no film yet.

### Lyrics and Line

```mdx
<Lyrics>

<Line vi="Dòng thứ nhất" en="First line" />
<Line vi="Dòng thứ hai" en="Second line" />

</Lyrics>
```

One `<Line>` per lyric pair, in the order you want them. Each line needs both
`vi` and `en`. Omit `<Lyrics>` if the page has no lyrics yet.

### Placard and Note

```mdx
<Placard
  title="Tên bài hát"
  composer="Tên tác giả"
  credit="Trình bày: ..."
>

<Note lang="en">

English interpretation.

</Note>

<Note lang="vi">

Cảm nhận bằng tiếng Việt.

</Note>

</Placard>
```

- `title` is the song title; the placard is hidden if it is empty.
- `composer` is shown as the placard subtitle.
- `credit` is the performer line, for example `"Trình bày: ..."`.
- `<Note>` children can contain ordinary Markdown, including lists. Keep the
  blank lines after the opening tag and before the closing tag.
- Omit `<Placard>` if the page has no placard yet.

## Reordering sections

The body is the sequence. To put the placard before the lyrics, move the
`<Placard>` block above `<Lyrics>`. To put the video first, move `<Video>` above
`<Intros>`. Every theme follows the order you write. There is no fixed slot.

## Copyable skeleton

```mdx
---
title: "Nhạc Vàng"
description: "One sentence about this genre."
genreEn: "Yellow music"
accent: "yellow"
order: 20
status: "complete"
---

<Intros>

<Intro lang="en">

English introduction. Use a blank line between paragraphs.

</Intro>

<Intro lang="vi">

Giới thiệu bằng tiếng Việt. Dùng một dòng trống giữa các đoạn.

</Intro>

</Intros>

<Video
  id="VIDEO_ID"
  start="0"
  excerpt=""
  title="Tên bài hát (Song title)"
  credit="Sáng tác: ... · Trình bày: ..."
/>

<Lyrics>

<Line vi="Dòng thứ nhất" en="First line" />
<Line vi="Dòng thứ hai" en="Second line" />

</Lyrics>

<Placard
  title="Tên bài hát"
  composer="Tên tác giả"
  credit="Trình bày: ..."
>

<Note lang="en">

English interpretation of the song.

</Note>

<Note lang="vi">

Cảm nhận bằng tiếng Việt về bài hát.

</Note>

</Placard>
```

Replace every example value. Remove any block the page does not need.

## Notes for editors

- **No imports.** The page supplies the components. If you write a component
  name the page does not recognize, the build stops and names the unknown tag.
  Check the spelling against this guide.
- **Use quoted strings, not braces.** Write `start="42"`, not `start={42}`.
- **Quotes inside values.** If a value contains a double quote, use curly quotes
  or single quotes around the attribute, or put the text in a `<Note>` or
  `<Intro>` block instead.
- **Markdown inside components.** Keep blank lines after an opening tag and
  before its closing tag so Markdown paragraphs and lists are parsed.
- **Placeholders.** Set `status: "placeholder"` while a page is unfinished.
  The page shows a notice; set `status: "complete"` when it is ready.
- **Order on the landing page.** The `order` number controls the list. Red is
  10, Yellow 20, Green 30. A fourth genre can use 40.
- **Accents.** Use an existing accent (`red`, `yellow`, `green`). A new accent
  needs a small style addition; ask the maintainer.

## Preview

```sh
npm install
npm run dev
```

Open <http://localhost:4321/vm-colors/>. The page reloads when you save a file.
The design review board is at
<http://localhost:4321/vm-colors/themes/>.

## Adding a fourth genre

1. Copy the skeleton above into `src/content/music/<name>.mdx`.
2. Fill in the frontmatter, prose, video, lyrics, and placard.
3. Set `order` to the next number in the sequence (40).
4. Save. The landing page picks up the new page automatically; no template edit
   is needed.

## What not to edit

- `src/components/` — the content components.
- `src/styles/` — the theme styles.
- `src/pages/` — the page templates and routes.
- `astro.config.mjs` — the site and build settings.

If something needs to change in those files, ask the maintainer.
