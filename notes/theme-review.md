# Theme review and recommendation

**Date:** 2026-11-09

**Status:** Chosen: Cabinet, promoted to `/` on 2026-11-09.

**Board:** <http://localhost:4321/vm-colors/themes/>

## What was checked

- `npm run build` and `npx astro check`.
- 22 pages at 390, 768, and 1280 CSS pixels (66 page/width combinations):
  horizontal overflow, client scripts, and font loading.
- Text contrast against the effective background, using WCAG AA thresholds
  (4.5:1 for normal text, 3:1 for large text).
- A content-fidelity diff between the v1 build and the new build.
- An authoring test: a scratch page copied from the guide, with the placard
  deliberately placed before the lyrics.
- An invalid-component test: `<Lyric>` instead of `<Line>`.
- 226 internal links and assets.

## Results

- **Build:** 22 pages built; `astro check` reports 0 errors, 0 warnings, 0
  hints.
- **No JavaScript:** every built page contains zero `<script>` elements.
- **Responsive:** no horizontal overflow at 390, 768, or 1280 on any page.
- **Fonts:** all pages report `document.fonts.status === "loaded"`, including
  Vietnamese subsets.
- **Contrast:** all text passes except the decorative `/` separator in the
  landing intro, which is marked `aria-hidden="true"` and is not meaningful
  content. Cabinet's yellow accent was darkened from `#a8761f` to `#8a5d00`
  after the audit found 3.24:1 on parchment for the eyebrow and placard kicker.
- **Content fidelity:** landing and Green are exact matches. Red differs only
  by the removal of a stray `-->` artifact and a duplicated excerpt label.
  Yellow adds the intended placeholder notice, which the v1 build was missing
  because the page had no `placeholder` flag.
- **Authoring test:** the scratch page built; the placard appeared before the
  lyrics in the HTML; the landing page picked up the new entry automatically.
- **Invalid component:** the build failed with "Unknown content component
  `<Lyric>` ... Did you mean `<Line>`?" as intended.
- **Links:** 226 internal links and assets checked; all present.

## Comparison

| Direction | Strengths | Risks | Best use |
| --- | --- | --- | --- |
| **Baseline / Paper** | Familiar, calm, readable; the v1 copy and layout are preserved. | The original critique stands: it reads as generic editorial web design and does not feel specific to Vietnamese music. | Control only. |
| **Cabinet / Tủ Trưng Bày** | The strongest museum identity; the folio, vitrine, broadside, and engraved placard all reinforce the exhibit frame. The bilingual reading experience is the best of the four: serif body at a comfortable size, clear two-column intros, and a placard that reads as an object label. | The historical register can feel formal or costume-like if overdone; the drop cap and centered layout are deliberate, not neutral. | The default recommendation for a class exhibit. |
| **Nocturne / Đêm** | The most music-forward and memorable. The full-bleed video, timecode labels, and transcript lyrics make the performance the center. The signal-color system gives each genre a clear identity. | Dark mode is a stronger commitment; the mono English translations are small, and the huge Anton titles can dominate the page. | The best alternative if the performance should lead. |
| **Street Pop / Phố** | The most contemporary and the strongest expression of bilingual identity. Vietnamese is the headline, English is the annotation, and the poster triptych is distinctive. | The busiest direction; the offset shadows, rotations, and color blocks need discipline. The small mono English may be harder for some readers. | The best alternative for a younger audience or a more public-facing site. |

## Decision

**Cabinet** was chosen and promoted to `/` on 2026-11-09. It is the best fit
for the museum framing, it treats the bilingual prose and the placard as
first-class objects, and it is the easiest of the three new directions to read
at length. It is also clearly distinct from the v1 baseline, so it answers the
original critique without becoming a costume.

Nocturne and Street Pop remain in the design archive as the performance-led and
contemporary alternatives. The archive is unlinked from the live site, excluded
from the sitemap, and marked `noindex`.

## Notes

- The board and all theme previews are `noindex`; the public sitemap contains
  only the four root pages.
- The theme preview routes duplicate pages for review only. They are generated
  from the same MDX; no content is duplicated.
- The baseline theme is a port of v1, not a pixel-for-pixel copy. The header now
  includes the design-review link, and the content components use the new
  semantic markup.
