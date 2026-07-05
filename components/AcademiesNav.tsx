import Link from "next/link";

const academyNavItems = [
  { href: "/service-academies", label: "Overview", key: "overview" },
  {
    href: "/service-academies/application-process",
    label: "Application Process",
    key: "application-process"
  },
  {
    href: "/service-academies/optional-programs",
    label: "Optional Programs",
    key: "optional-programs"
  },
  {
    href: "/service-academies/after-graduation",
    label: "After Graduation",
    key: "after-graduation"
  },
  {
    href: "/service-academies/resources",
    label: "Resources",
    key: "resources"
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
