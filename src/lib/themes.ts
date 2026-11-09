export type Theme = {
  slug: string;
  name: string;
  subtitle: string;
  thesis: string;
  references: { name: string; url: string }[];
  palette: { name: string; hex: string }[];
  type: string;
  moves: string[];
};

export const themes = [
  {
    slug: "baseline",
    name: "Baseline",
    subtitle: "Paper",
    thesis:
      "The v1 treatment, ported to the new content model as a control: quiet paper, ink, thin rules, and one accent per genre.",
    references: [],
    palette: [
      { name: "Paper", hex: "#f6f2e9" },
      { name: "Ink", hex: "#1b1a17" },
      { name: "Red", hex: "#9b2226" },
      { name: "Ochre", hex: "#8a5d00" },
      { name: "Green", hex: "#2f5d3a" },
    ],
    type: "System geometric and humanist sans",
    moves: ["Generous measure", "Thin rules", "Museum-label placard"],
  },
  {
    slug: "cabinet",
    name: "Cabinet",
    subtitle: "Tủ Trưng Bày",
    thesis:
      "A contemporary cabinet of curiosities: the page as a folio, the video as a vitrine, the lyrics as a broadside, the placard as an engraved label.",
    references: [
      { name: "Rijksmuseum", url: "https://www.rijksmuseum.nl/en" },
      { name: "V&A", url: "https://www.vam.ac.uk/" },
    ],
    palette: [
      { name: "Parchment", hex: "#f1e7d0" },
      { name: "Ink", hex: "#1c1915" },
      { name: "Oxblood", hex: "#7b1e1e" },
      { name: "Ochre", hex: "#8a5d00" },
      { name: "Jade", hex: "#2f5d4a" },
    ],
    type: "Fraunces, Newsreader, Be Vietnam Pro",
    moves: ["Double-rule folio", "Drop cap and small caps", "Engraved placard"],
  },
  {
    slug: "nocturne",
    name: "Nocturne",
    subtitle: "Đêm",
    thesis:
      "A music-forward night mode: the performance is the hero, lyrics read like a live transcript, and each genre gets a signal color.",
    references: [
      { name: "British Museum", url: "https://www.britishmuseum.org/" },
      { name: "Rock & Roll Hall of Fame", url: "https://rockhall.com/" },
      { name: "Nordiska Museet", url: "https://www.nordiskamuseet.se/en/" },
    ],
    palette: [
      { name: "Near black", hex: "#08090a" },
      { name: "Smoke", hex: "#141518" },
      { name: "Bone", hex: "#f2efe6" },
      { name: "Signal red", hex: "#ff453a" },
      { name: "Signal yellow", hex: "#ffd60a" },
      { name: "Signal green", hex: "#32d74b" },
    ],
    type: "Anton, IBM Plex Mono, Be Vietnam Pro",
    moves: ["Full-bleed video", "Timecode labels", "Transcript lyrics"],
  },
  {
    slug: "street-pop",
    name: "Street Pop",
    subtitle: "Phố",
    thesis:
      "A bilingual poster wall: Vietnamese is the headline, English is the annotation, and the three genres form a color-blocked triptych.",
    references: [
      { name: "M+", url: "https://www.mplus.org.hk/en/" },
      {
        name: "Quang San Art Museum",
        url: "https://the-brandidentity.com/project/m-n-associates-creates-a-new-aesthetic-language-for-vietnamese-museums",
      },
      { name: "Cooper Hewitt", url: "https://www.cooperhewitt.org/" },
    ],
    palette: [
      { name: "Rice paper", hex: "#f7f1e3" },
      { name: "Ink", hex: "#111111" },
      { name: "Lacquer red", hex: "#d7261e" },
      { name: "Turmeric", hex: "#f2b705" },
      { name: "Jade", hex: "#0f7a5a" },
    ],
    type: "Bricolage Grotesque, Be Vietnam Pro, IBM Plex Mono",
    moves: ["Oversized Vietnamese", "Asymmetric poster grid", "Zine placard"],
  },
] as const satisfies readonly Theme[];

export type ThemeSlug = (typeof themes)[number]["slug"];

export const defaultTheme: ThemeSlug = "baseline";

export function getTheme(slug: string): Theme | undefined {
  return themes.find((theme) => theme.slug === slug);
}
