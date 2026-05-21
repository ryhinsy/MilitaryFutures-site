import type { ReactNode } from "react";

type ContentCardProps = {
  title: string;
  kicker?: string;
  children: ReactNode;
};

export function ContentCard({ title, kicker, children }: ContentCardProps) {
  return (
    <article className="content-card">
      {kicker ? <span className="card-kicker">{kicker}</span> : null}
      <h3>{title}</h3>
      <div className="card-body">{children}</div>
    </article>
  );
}
