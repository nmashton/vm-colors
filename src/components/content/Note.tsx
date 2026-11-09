import type { ReactNode } from "react";

type NoteProps = {
  lang: "en" | "vi";
  children?: ReactNode;
};

export default function Note({ lang, children }: NoteProps) {
  if (lang !== "en" && lang !== "vi") {
    throw new Error('<Note> needs lang="en" or lang="vi".');
  }

  return (
    <div className="placard-note" lang={lang}>
      <p className="note-label">
        {lang === "vi" ? "Cảm nhận · Tiếng Việt" : "Interpretation · English"}
      </p>
      <div className="prose">{children}</div>
    </div>
  );
}
