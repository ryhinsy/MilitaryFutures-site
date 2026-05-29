import Image from "next/image";

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
        <p>Built for students, parents, counselors, and mentors.</p>
      </div>
    </footer>
  );
}
