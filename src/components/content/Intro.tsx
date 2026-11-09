import type { ReactNode } from "react";

type IntroProps = {
  lang: "en" | "vi";
  children?: ReactNode;
};

export default function Intro({ lang, children }: IntroProps) {
  if (lang !== "en" && lang !== "vi") {
    throw new Error('<Intro> needs lang="en" or lang="vi".');
  }

  return (
    <section className="intro" lang={lang}>
      <p className="intro-label">{lang === "vi" ? "Tiếng Việt" : "English"}</p>
      <div className="prose">{children}</div>
    </section>
  );
}
