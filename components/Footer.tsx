import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Image
            alt=""
            aria-hidden="true"
            className="footer-logo"
            height={36}
            src="/military-futures-logo.png"
            width={54}
          />
          <div>
            <strong>Military Futures</strong>
            <p>Clear, student-friendly information for exploring military options.</p>
          </div>
        </div>
        <div className="footer-meta">
          <p>Built for students, parents, counselors, and mentors.</p>
          <Link href="/about">About Military Futures</Link>
        </div>
      </div>
      <div className="container footer-disclaimer">
        <p>
          Military Futures is an independent educational resource and is not
          affiliated with, endorsed by, or sponsored by the U.S. Department of
          Defense, any branch of the U.S. Armed Forces, any service academy,
          ROTC program, or government agency. Information is provided for
          educational purposes only and should be verified through official
          sources.
        </p>
      </div>
    </footer>
  );
}
