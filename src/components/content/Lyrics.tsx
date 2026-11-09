import type { ReactNode } from "react";

type LyricsProps = {
  children?: ReactNode;
  label?: string;
};

export default function Lyrics({
  children,
  label = "Lyrics",
}: LyricsProps) {
  return (
    <section className="lyrics" aria-label={label}>
      <h2 className="section-label">{label}</h2>
      <p className="section-note">Vietnamese and English, line by line.</p>
      <div className="lyric-head" aria-hidden="true">
        <span lang="vi">Tiếng Việt</span>
        <span lang="en">English</span>
      </div>
      <ol className="lyric-list">{children}</ol>
    </section>
  );
}
