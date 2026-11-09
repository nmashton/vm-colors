# GLAM reference brief and theme directions

**Date:** 2026-11-09

**Question:** Which cultural-heritage design languages should inform three
genuinely different renderings of the same exhibit content, without copying
anyone's identity or assets?

## Reference sites

| Reference | What is worth learning | Source |
| --- | --- | --- |
| **Rijksmuseum** | Art first, simple and striking. The collection and the object story do the work; the interface stays quiet. | Numiko, "Best Museum and Gallery Websites 2026", 2026-02-12; <https://www.rijksmuseum.nl/en> |
| **V&A** | Object-centric browsing with rich imagery, clear context, and a distinct background or palette per page. | Numiko, 2026-02-12; <https://www.vam.ac.uk/> |
| **British Museum** | A dark, bold, contemporary treatment with high-contrast type and signal-like accents; the collection is curated into themes and stories. | Heritage Creative, "10 Best Museum Website Design Examples (Updated 2026)", 2026; Numiko, 2026-02-12; <https://www.britishmuseum.org/> |
| **Nordiska Museet** | An award-winning, scroll-led identity: an emblem as a framing device, per-exhibition palettes, and motion that supports the story rather than decorating it. | Numiko, 2026-02-12; <https://www.nordiskamuseet.se/en/> |
| **M+** | Bilingual headline typography as a first-class system, not an afterthought. Contemporary Asian art with a confident, large-scale grid. | <https://www.mplus.org.hk/en/> |
| **Quang San Art Museum** | "Layers of Contemplation": a Vietnamese contemporary museum identity built from the act of looking, architectural rhythm, and a custom typeface with letters in progress. | The Brand Identity, "M — N Associates creates a new aesthetic language for Vietnamese museums", 2025-08-29; <https://the-brandidentity.com/project/m-n-associates-creates-a-new-aesthetic-language-for-vietnamese-museums> |
| **Cooper Hewitt** | A design museum can be playful, colorful, and collection-led without losing clarity. | <https://www.cooperhewitt.org/> |
| **Rock & Roll Hall of Fame** | Music-forward darkness, video throughout, and a publication-like rhythm. The subject licenses a louder visual voice. | WebCitz, "Top Museum Website Designs", 2026; <https://rockhall.com/> |

## Three directions

### Cabinet / Tủ Trưng Bày

**Thesis:** A contemporary cabinet of curiosities. The page is a folio; the
video is a vitrine; the lyrics are a broadside; the placard is an engraved
label.

- **References:** Rijksmuseum and V&A, with the restraint of a printed
  collection catalogue rather than a historic pastiche.
- **Palette:** parchment `#f1e7d0`, ink `#1c1915`, card `#f8f1e0`, oxblood
  `#7b1e1e`, ochre `#8a5d00`, jade `#2f5d4a`.
- **Type:** Fraunces for display, Newsreader for body, Be Vietnam Pro for
  labels. All three cover Vietnamese.
- **Signature moves:**
  1. A centered folio with double rules and a small-caps label system.
  2. A drop cap on the English introduction and a two-column bilingual spread.
  3. A dark vitrine around the video and a numbered broadside for the lyrics.
- **Component treatments:** the video sits in a black frame with a thin brass
  rule and a centered caption; lyrics get line numbers and dotted rules; the
  placard is a bordered card with a double accent rule and a seal-like
  proportion.
- **Accessibility risks:** the ochre accent needed a darker value to pass 4.5:1
  on parchment; the drop cap must not hide the first letter from screen readers
  (it is a CSS pseudo-element on the first letter, so the text remains intact).
- **Anti-generic moves:** no parchment texture image, no faux wax seal, no
  ornamental divider fonts. The period feeling comes from proportion, rules,
  and type, not props.
- **Best for:** the museum framing and the bilingual reading experience.

### Nocturne / Đêm

**Thesis:** A music-forward night mode. The performance is the hero; the lyrics
read like a live transcript; each genre gets a signal color.

- **References:** British Museum's dark, bold treatment; Rock & Roll Hall of
  Fame's music-publication rhythm; Nordiska Museet's per-exhibition palette.
- **Palette:** near-black `#08090a`, smoke `#141518`, bone `#f2efe6`, signal red
  `#ff453a`, signal yellow `#ffd60a`, signal green `#32d74b`.
- **Type:** Anton for display, IBM Plex Mono for labels and translations, Be
  Vietnam Pro for body. All cover Vietnamese.
- **Signature moves:**
  1. A full-bleed video with timecode labels and a full-width performance
     section.
  2. A landing page that reads like a now-showing poster wall, one signal color
     per genre.
  3. A transcript-like lyric sheet: large Vietnamese lines, small mono English
     translations, line numbers, and a hover rule in the genre color.
- **Component treatments:** dark intro cards with a signal top rule; a backlit
  placard with a colored edge and glow; a high-contrast genre title in Anton.
- **Accessibility risks:** dark mode and neon can fail contrast if the accent is
  used for body text; the accent is restricted to labels, borders, and large
  display text. The video iframe sits on black and needs a visible boundary.
- **Anti-generic moves:** no purple gradient, no glassmorphism, no dashboard
  cards. The darkness is the room; the signal colors are the program.
- **Best for:** making the performance the center of the visit.

### Street Pop / Phố

**Thesis:** A bilingual poster wall. Vietnamese is the headline; English is the
annotation; the three genres form a color-blocked triptych.

- **References:** M+'s bilingual typography, Quang San Art Museum's
  contemporary Vietnamese identity, Cooper Hewitt's playful design-museum
  energy.
- **Palette:** rice paper `#f7f1e3`, ink `#111111`, lacquer red `#d7261e`,
  turmeric `#f2b705`, jade `#0f7a5a`.
- **Type:** Bricolage Grotesque for display, Be Vietnam Pro for body, IBM Plex
  Mono for annotations. All cover Vietnamese.
- **Signature moves:**
  1. Oversized Vietnamese titles with English as a small mono annotation.
  2. An asymmetric poster grid on the landing page, one color block per genre,
     with offset ink shadows.
  3. A zine-like placard: a color field, a sticker label, and a rotated insert
     at desktop widths.
- **Component treatments:** intro cards with offset color shadows; a video
  frame with a bold offset shadow; lyric lines with large Vietnamese and small
  mono English; a placard that feels like a printed insert rather than a wall
  label.
- **Accessibility risks:** the busiest direction. The poster grid must keep a
  strict underlying alignment; the yellow accent is used as a field, not as
  small text; the rotation is desktop-only and must not clip on mobile.
- **Anti-generic moves:** no stock “Asian” pattern, no lantern clip art, no
  generic gradient. The Vietnamese language itself is the display system.
- **Best for:** a younger, contemporary audience and the strongest expression
  of bilingual identity.

## Type and production notes

- The display/body/label families were checked against Google Fonts subsets for
  Vietnamese coverage on 2026-11-09: Fraunces, Newsreader, Anton, Bricolage
  Grotesque, IBM Plex Mono, and Be Vietnam Pro all include Vietnamese.
- Fonts are self-hosted through Fontsource. No Google Fonts runtime request.
- No reference assets, logos, screenshots, or layouts were copied into the
  site. The references supply principles only.
- No new photography is used in this batch. The themes work with type, color,
  rules, and the existing video embed. Archival imagery is a separate rights
  and editorial task.

## What this changes in the plan

- The board has three new directions plus the v1 baseline, not four new themes.
- Each theme is CSS and fonts over the same semantic components. The only
  structural difference is the landing layout, which is generated by the page
  template rather than authored content.
- The review should weigh readability of the bilingual text as heavily as
  visual distinctiveness.

## Sources

- Numiko, "Best Museum and Gallery Websites 2026", 2026-02-12:
  <https://numiko.com/insights/best-museum-and-gallery-websites-2026>
- Heritage Creative, "10 Best Museum Website Design Examples (Updated 2026)",
  2026:
  <https://www.heritagecreative.co.uk/insights/10-best-museum-website-design-examples-updated-2026/>
- WebCitz, "Top Museum Website Designs", 2026:
  <https://www.webcitz.com/blog/best-museum-websites/>
- The Brand Identity, "M — N Associates creates a new aesthetic language for
  Vietnamese museums", 2025-08-29:
  <https://the-brandidentity.com/project/m-n-associates-creates-a-new-aesthetic-language-for-vietnamese-museums>
- M+: <https://www.mplus.org.hk/en/>
- Cooper Hewitt: <https://www.cooperhewitt.org/>
- Rijksmuseum: <https://www.rijksmuseum.nl/en>
- V&A: <https://www.vam.ac.uk/>
- British Museum: <https://www.britishmuseum.org/>
- Nordiska Museet: <https://www.nordiskamuseet.se/en/>
- Rock & Roll Hall of Fame: <https://rockhall.com/>
- Google Fonts CSS metadata for Vietnamese subsets, checked 2026-11-09.
