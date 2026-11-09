type VideoProps = {
  id?: string;
  start?: string | number;
  excerpt?: string;
  title?: string;
  credit?: string;
};

export default function Video({
  id,
  start,
  excerpt,
  title,
  credit,
}: VideoProps) {
  if (!id) return null;

  const startSeconds = Number(start ?? 0);
  const query = Number.isFinite(startSeconds) && startSeconds > 0
    ? `?start=${startSeconds}`
    : "";

  return (
    <figure className="video">
      <h2 className="section-label">Performance</h2>
      <div className="video-frame">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}${query}`}
          title={title || "Performance video"}
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      {(title || credit || excerpt) && (
        <figcaption className="video-caption">
          {title && <span className="video-title">{title}</span>}
          {credit && <span className="video-credit" lang="vi">{credit}</span>}
          {excerpt && <span className="video-excerpt">Excerpt {excerpt}</span>}
        </figcaption>
      )}
    </figure>
  );
}
