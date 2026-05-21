import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
};

export function SectionHeader({ eyebrow, title, children }: SectionHeaderProps) {
  return (
    <div className="section-header">
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}
