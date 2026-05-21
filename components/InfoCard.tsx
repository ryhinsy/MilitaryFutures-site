import type { ReactNode } from "react";

type InfoCardProps = {
  icon: string;
  title: string;
  children: ReactNode;
};

export function InfoCard({ icon, title, children }: InfoCardProps) {
  return (
    <article className="info-card">
      <span className="icon" aria-hidden="true">
        {icon}
      </span>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
