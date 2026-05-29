import Image from "next/image";
import Link from "next/link";
import { NAV_ITEMS } from "@/lib/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" href="/" aria-label="Military Futures home">
          <Image
            alt="Military Futures"
            className="brand-logo"
            height={48}
            priority
            src="/military-futures-logo.png"
            width={72}
          />
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
