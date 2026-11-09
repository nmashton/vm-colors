# Music page template

Copy the skeleton at the bottom of this file into a new `content/<genre>.md`
(for example `content/red.md`), replace the values, and preview with
`zola serve`. You never need to edit HTML, CSS, or anything in `templates/`.

## Fields

| Field | Required | What it is |
| --- | --- | --- |
| `title` | yes | Vietnamese title of the genre; shown as the page heading. |
| `description` | no | One sentence for search engines and link previews. |
| `weight` | yes | Order on the landing page. Red is 10, Yellow 20, Green 30. |
| `template` | yes | Always `"music.html"`. |
| `extra.accent` | yes | `"red"`, `"yellow"`, or `"green"`; sets the page's accent color. |
| `extra.genre_vi` | yes | Vietnamese genre name for the landing list. |
| `extra.genre_en` | yes | English genre name for the landing list and page eyebrow. |
| `extra.placeholder` | yes | `true` while the page is unfinished (shows a notice); `false` when complete. |
| `extra.about.en` | yes | English introduction, one or more paragraphs. |
| `extra.about.vi` | yes | Vietnamese introduction, one or more paragraphs. |
| `extra.video.youtube_id` | no | The part after `v=` in the YouTube URL. Leave `""` for no video. |
| `extra.video.start` | no | Start time in seconds. `42` means 0:42. Use `0` for the beginning. |
| `extra.video.excerpt` | no | Display label such as `"0:42–1:14"`. Can be empty. |
| `extra.video.title` | no | Song title and translation, shown under the video. |
| `extra.video.credit` | no | Composer and performers, shown under the video. |
| `extra.placard.title` | no | Song title on the museum placard. |
| `extra.placard.artist` | no | Composer, shown as the placard subtitle. |
| `extra.placard.credit` | no | Performer line, for example `"Trình bày: ..."`. |
| `extra.placard.en` | no | English interpretation for the placard. |
| `extra.placard.vi` | no | Vietnamese interpretation for the placard. |
| `[[extra.lyrics]]` | no | One block per lyric line, with `vi` and `en`. Repeat the block for each line. |

Notes:

- Text in `"""triple quotes"""` can contain ordinary quotation marks. A literal
  backslash must be written as `\\`.
- Keep Vietnamese diacritics exactly as written; the files are UTF-8.
- Lyric pairs appear in the order you write them, one table row per block.
- A page with no lyrics yet needs `lyrics = []` inside `[extra]` (see the
  placeholder pages). Once you add `[[extra.lyrics]]` blocks, remove that line.
- The placard is hidden when `extra.placard.title` is empty, and the video is
  hidden when `extra.video.youtube_id` is empty.

## Copyable skeleton

```toml
+++
title = "Nhạc Vàng"
description = "One sentence about this genre."
weight = 20
template = "music.html"

[extra]
accent = "yellow"
genre_vi = "Nhạc Vàng"
genre_en = "Yellow music"
placeholder = false

[extra.about]
en = """English introduction. Use a blank line between paragraphs."""
vi = """Giới thiệu bằng tiếng Việt. Dùng một dòng trống giữa các đoạn."""

[extra.video]
youtube_id = "VIDEO_ID"
start = 0
excerpt = ""
title = "Tên bài hát (Song title)"
credit = "Sáng tác: ... · Trình bày: ..."

[extra.placard]
title = "Tên bài hát"
artist = "Tên tác giả"
credit = "Trình bày: ..."
en = """English interpretation of the song."""
vi = """Cảm nhận bằng tiếng Việt về bài hát."""

[[extra.lyrics]]
vi = "Dòng thứ nhất"
en = "First line"

[[extra.lyrics]]
vi = "Dòng thứ hai"
en = "Second line"
+++
```

Replace every example value, add or remove lyric blocks as needed, and preview
the page with `zola serve`.
