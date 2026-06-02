import Image from "next/image";
import { AcademiesNav } from "@/components/AcademiesNav";
import { Checklist } from "@/components/Checklist";
import { ContentCard } from "@/components/ContentCard";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { academyDetails } from "@/lib/academy-data";

export default function AcademyRequirementsPage() {
  return (
    <>
      <PageHero eyebrow="Academies" title="Academy Requirements">
        Compare academy locations, cost explanations, commissioning timelines,
        service obligations, and starting officer pay resources.
      </PageHero>
      <AcademiesNav active="academy-requirements" />
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Cost + commitment" title="Academy Cost, Location, and Officer Pay">
            Service academies are generally tuition-funded in exchange for a
            service obligation, and most graduates commission after four years
            as officers. Verify current details with official academy sources.
          </SectionHeader>
          <div className="content-grid">
            {academyDetails.map((academy) => (
              <ContentCard title={academy.name} kicker={academy.formalName} key={academy.name}>
                <ul>
                  <li>
                    <strong>Location:</strong> {academy.location}
                  </li>
                  <li>
                    <strong>Estimated cost:</strong> Tuition, room, board, and
                    related academy costs are generally funded, with cadets or
                    midshipmen receiving pay or allowances while enrolled.
                  </li>
                  <li>
                    <strong>Commissioning:</strong> {academy.commitment}
                  </li>
                  <li>
                    <strong>Starting officer pay:</strong> A newly commissioned
                    O-1 basic pay estimate is about $4,150/month in 2026 before
                    housing, food, tax, location, and specialty factors.
                  </li>
                </ul>
                <a className="text-link" href={academy.source} rel="noopener noreferrer" target="_blank">
                  Verify academy details
                </a>
              </ContentCard>
            ))}
          </div>
          <div className="note-band spaced-top">
            <strong>Pay estimate note</strong>
            <p>
              Officer pay changes by year and includes more than basic pay.
              Review official DFAS pay tables and the DoD Regular Military
              Compensation calculator before making financial assumptions.
            </p>
          </div>
          <div className="link-panel spaced-top" aria-label="Official military pay links">
            <a
              href="https://www.dfas.mil/Pressroom/Article/4391719/2026-military-pay-tables-on-dfas-website/"
              rel="noopener noreferrer"
              target="_blank"
            >
              DFAS military pay tables
            </a>
            <a
              href="https://militarypay.defense.gov/calculators/"
              rel="noopener noreferrer"
              target="_blank"
            >
              DoD compensation calculators
            </a>
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <SectionHeader eyebrow="Map" title="Where the Academies Are Located">
            Locations are approximate for visual clarity. Use official academy
            sites for addresses, visits, and travel planning.
          </SectionHeader>
          <div className="academy-map-image-wrap">
            <Image
              alt="Map showing the locations of the five U.S. service academies."
              className="academy-map-image"
              height={1024}
              sizes="(max-width: 900px) 100vw, 1120px"
              src="/service-academies-map.png"
              width={1536}
            />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container content-grid two">
          <Checklist
            title="Academy Application Checklist"
            items={[
              "Strong transcript with challenging courses",
              "ACT or SAT plan and score reporting",
              "Leadership resume with activities and responsibilities",
              "Teacher, counselor, or mentor recommendations",
              "Candidate fitness assessment preparation",
              "Medical qualification steps when requested",
              "Congressional nomination applications where required",
              "Backup college, ROTC, or enlistment plan"
            ]}
          />
          <ContentCard title="Best For" kicker="Student fit">
            <ul>
              <li>Students who want a full-time military college environment.</li>
              <li>Students ready for structure, accountability, and leadership pressure.</li>
              <li>Students interested in commissioning as officers after graduation.</li>
              <li>Students who can manage academics, fitness, service, and deadlines at once.</li>
            </ul>
          </ContentCard>
        </div>
      </section>
    </>
  );
}
