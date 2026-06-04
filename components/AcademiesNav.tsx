import Link from "next/link";

const academyNavItems = [
  { href: "/service-academies", label: "Overview", key: "overview" },
  {
    href: "/service-academies/application-process",
    label: "Application Process",
    key: "application-process"
  },
  {
    href: "/service-academies/congressional-nominations",
    label: "Congressional Nominations",
    key: "congressional-nominations"
  },
  { href: "/service-academies/deadlines", label: "Deadlines", key: "deadlines" },
  {
    href: "/service-academies/after-graduation",
    label: "After Graduation",
    key: "after-graduation"
  }
];

type AcademiesNavProps = {
  active: string;
};

export function AcademiesNav({ active }: AcademiesNavProps) {
  return (
    <nav className="subnav" aria-label="Academies pages">
      <div className="container subnav-scroll">
        {academyNavItems.map((item) => (
          <Link
            aria-current={active === item.key ? "page" : undefined}
            className={active === item.key ? "active" : ""}
            href={item.href}
            key={item.key}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
