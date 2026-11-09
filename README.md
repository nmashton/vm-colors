# Colors of Vietnamese Music

A small virtual museum exhibit on three genres of Vietnamese music — red, yellow,
and green — built with [Zola](https://www.getzola.org/). It is a static site: no
JavaScript, no webfonts, one stylesheet.

## Status

| Page | Address | State |
| --- | --- | --- |
| Landing | `/` | Ready |
| Red music | `/red/` | Complete |
| Yellow music | `/yellow/` | Placeholder; waiting for the group's copy |
| Green music | `/green/` | Placeholder; waiting for the group's copy |

## Preview the site

1. Install Zola (version 0.23 or newer) from
   <https://www.getzola.org/documentation/getting-started/installation/>.
2. In this folder, run:

   ```sh
   zola serve
   ```

3. Open <http://127.0.0.1:1111>. The page reloads when you save a file.
4. Press `Ctrl+C` to stop.

If Zola is not installed and you need a one-off build, ask the maintainer.

## Edit or add a page

Every genre page is one Markdown file in `content/`:

- `content/red.md` — Red music
- `content/yellow.md` — Yellow music
- `content/green.md` — Green music

To write a new page, copy the skeleton in [`docs/music-page.md`](docs/music-page.md)
to `content/<genre>.md` and fill in the fields. That file explains every field,
but the short version is:

1. Set `title`, `extra.genre_vi`, `extra.genre_en`, and `extra.accent`
   (`red`, `yellow`, or `green`).
2. Put the English and Vietnamese introductions in the body, inside the two
   language blocks shown in the template.
3. Put the YouTube id in `extra.video.youtube_id` (the part after `v=`).
4. Add one `[[extra.lyrics]]` block per line, with `vi` and `en`.
5. Fill `extra.placard` with the song title, composer, performers, and the two
   interpretations.
6. Set `placeholder = false` when the page is finished.

Save the file and check the page at <http://127.0.0.1:1111>.

### Adding a fourth genre later

Content pages at the root of `content/` appear on the landing page automatically,
ordered by `weight` (10, 20, 30, 40…). Give the new page a weight and it joins the
list; no template edit is needed. Pick an existing accent (`red`, `yellow`,
`green`) or ask for a new one in `static/css/main.css`.

## What not to edit

- `templates/` — the page layouts. Content changes never need them.
- `static/css/main.css` — the exhibit's type, colors, and spacing.
- `zola.toml` — the site URL and build settings.

If something needs to change in those files, ask the maintainer.

## Publishing

The site is set up for GitHub Pages at
<https://nmashton.github.io/vm-colors/>.

- Push to `main` (or run the workflow by hand from the Actions tab).
- `.github/workflows/deploy.yml` installs the pinned Zola version, runs
  `zola build`, and publishes `public/` to GitHub Pages.

First-time setup, once per repository:

1. Make the repository public (Settings → General → Danger Zone → Change
   visibility), unless the account has a plan that includes Pages for private
   repositories.
2. Open Settings → Pages and set **Source** to **GitHub Actions**.
3. Push to `main` or re-run the workflow.

To check the build by hand before pushing:

```sh
zola build
zola check
```

The build uses `base_url` from `zola.toml`; if the site later moves to a custom
domain, change that one line and push again.

## Notes for the group

- The Red page keeps the supplied wording, including the spellings "Nố",
  "tô quốc", and "Bich Liên". These look like they may be typos ("Nối",
  "Tổ quốc", "Bích Liên"); confirm before changing them.
- The Vietnamese subtitle on the landing page, "Sắc màu âm nhạc Việt Nam", is a
  working translation and should be confirmed by the class.
- "Nhạc Vàng" and "Nhạc Xanh" are working titles for the two placeholder pages.
