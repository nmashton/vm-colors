import type { ReactNode } from "react";

type IntrosProps = {
  children?: ReactNode;
};

export default function Intros({ children }: IntrosProps) {
  return <div className="intros">{children}</div>;
}
