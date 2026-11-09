import type { ReactNode } from "react";

type PlacardProps = {
  title?: string;
  composer?: string;
  performers?: string;
  credit?: string;
  children?: ReactNode;
};

export default function Placard({
  title,
  composer,
  performers,
  credit,
  children,
}: PlacardProps) {
  if (!title) return null;

  return (
    <aside className="placard" aria-label="Museum placard">
      <p className="placard-kicker">Museum placard</p>
      <h2 className="placard-title">{title}</h2>
      {composer && <p className="placard-subtitle">{composer}</p>}
      {performers && <p className="placard-performers">{performers}</p>}
      {credit && <p className="placard-credit">{credit}</p>}
      {children && <div className="placard-notes">{children}</div>}
    </aside>
  );
}
