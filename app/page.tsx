import Link from "next/link";
import { FindYourPathQuiz } from "@/components/FindYourPathQuiz";
import { InfoCard } from "@/components/InfoCard";
import { HOMEPAGE_ROUTES } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <div className="eyebrow">Plan clearly. Serve thoughtfully.</div>
          <h1>Military Futures</h1>
          <p className="hero-copy">
            A modern guide for students and families comparing academies,
            ROTC, enlistment, commissioning, Guard service, nominations, and
            career pathways without getting lost in acronyms.
            </p>
            <div className="hero-actions">
              <Link className="button primary" href="/compare">
                Compare pathways
              </Link>
              <Link className="button secondary" href="/service-academies">
                Explore pathways
            </Link>
          </div>
        </div>
      </section>

      <FindYourPathQuiz />

      <section className="section alt">
        <div className="container">
          <div className="section-header">
            <h2>Built for first conversations</h2>
            <p>
              Military Futures keeps the tone clear and approachable so students,
              parents, school counselors, and mentors can talk through options
              with shared context.
            </p>
          </div>
          <div className="card-grid">
            <InfoCard icon="01" title="Compare routes">
              See the major differences between academies, ROTC, enlistment,
              commissioning, and Guard service in one place.
            </InfoCard>
            <InfoCard icon="02" title="Understand requirements">
              Track nominations, fitness expectations, applications, scholarship
              windows, and official source links.
            </InfoCard>
            <InfoCard icon="03" title="Plan next steps">
              Use pathway pages, timelines, and official resources to move from
              curiosity to a confident action plan.
            </InfoCard>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Explore the main pathways</h2>
            <p>
              Each section starts simple, then can grow into deeper explainers,
              timelines, FAQs, and state-specific guidance.
            </p>
          </div>
          <div className="route-grid">
            {HOMEPAGE_ROUTES.map((route) => (
              <Link className="route-card" href={route.href} key={route.href}>
                <span>{route.kicker}</span>
                <h3>{route.title}</h3>
                <p>{route.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="callout">
        <div className="container">
          <div>
            <h2>Compare the path before choosing it.</h2>
            <p>
              Each route has different training, college, service commitment,
              lifestyle, and family considerations. Start with the comparison
              guide, then go deeper on the pathway that fits.
            </p>
          </div>
          <Link className="button secondary" href="/compare">
            Open comparison guide
          </Link>
        </div>
      </section>
    </>
  );
}
