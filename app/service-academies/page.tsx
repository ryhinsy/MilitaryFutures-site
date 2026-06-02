import Image from "next/image";
import { AcademiesNav } from "@/components/AcademiesNav";
import { ContentCard } from "@/components/ContentCard";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";

export default function ServiceAcademiesPage() {
  return (
    <>
      <PageHero eyebrow="College + commissioning" title="Service Academies">
        Service Academies are highly selective federal colleges where students
        earn a degree, receive military leadership training, and usually
        commission as officers after graduation.
      </PageHero>

      <AcademiesNav active="overview" />

      <section className="section">
        <div className="container">
          <SectionHeader title="What Students Should Know">
            Academies are not simply colleges with uniforms. They combine
            academics, physical standards, military training, character
            evaluation, and a service commitment.
          </SectionHeader>
          <div className="content-grid">
            <ContentCard title="Academics" kicker="College degree">
              Students apply to a full undergraduate program and should prepare
              for demanding coursework, especially in math, science, writing,
              and leadership-heavy majors.
            </ContentCard>
            <ContentCard title="Leadership" kicker="Whole person review">
              Admissions teams look for students who lead in school, work,
              athletics, community service, scouting, clubs, faith groups, or
              family responsibilities.
            </ContentCard>
            <ContentCard title="Service Commitment" kicker="After graduation">
              Most graduates serve as active duty officers for a required
              period. Students should understand the commitment before applying.
            </ContentCard>
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

    </>
  );
}
