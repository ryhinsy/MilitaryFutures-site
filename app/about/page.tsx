import { ContentCard } from "@/components/ContentCard";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="About Military Futures">
        Military Futures is an independent informational website built to help
        students and families understand military education and career pathways.
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHeader title="Independent Educational Resource">
            This site is designed to make a complicated research process easier
            to understand. It is not an official military, academy, ROTC, or
            government website.
          </SectionHeader>
          <div className="content-grid two">
            <ContentCard title="What This Site Does">
              Military Futures organizes general information about Service
              Academies, ROTC, enlistment, Guard and Reserve options,
              nominations, timelines, and planning questions so students can
              compare pathways more clearly.
            </ContentCard>
            <ContentCard title="What This Site Does Not Do">
              Military Futures does not provide official admissions decisions,
              recruiting guidance, legal advice, financial advice, medical
              qualification guidance, or binding information about military
              benefits or obligations.
            </ContentCard>
          </div>
          <div className="disclaimer-panel spaced-top">
            <strong>Disclaimer</strong>
            <p>
              Military Futures is an independent educational resource and is not
              affiliated with, endorsed by, or sponsored by the U.S. Department
              of Defense, any branch of the U.S. Armed Forces, any service
              academy, ROTC program, or government agency. Information is
              provided for educational purposes only and should be verified
              through official sources.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
