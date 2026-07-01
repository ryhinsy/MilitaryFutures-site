import { AcademiesNav } from "@/components/AcademiesNav";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";

export default function ServiceAcademiesPage() {
  return (
    <>
      <AcademiesNav active="overview" />

      <PageHero eyebrow="College + commissioning" title="Service Academies">
        The United States Service Academies are among the most prestigious
        colleges and universities in the country. They include the United States
        Military Academy (West Point), the United States Naval Academy, the
        United States Air Force Academy, the United States Merchant Marine
        Academy, and the United States Coast Guard Academy. Admission is highly
        competitive, with acceptance rates often around 10&ndash;20% depending on
        the academy and admissions cycle. Students receive a world-class
        education, military leadership training, and commission as officers upon
        graduation in exchange for a service commitment. If you are interested
        in serving in the military while earning a college degree and developing
        as a leader, a service academy may be the right path for you.
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHeader title="What Students Should Know">
            Academies are not simply colleges with uniforms. They combine
            academics, physical standards, military training, character
            evaluation, and a service commitment.
          </SectionHeader>
          <article className="guide-article">
            <div className="guide-block">
              <h3>Academics</h3>
              <p>
              Students apply to a full undergraduate program and should prepare
              for demanding coursework, especially in math, science, writing,
              and leadership-heavy majors.
              </p>
            </div>
            <div className="guide-block">
              <h3>Leadership</h3>
              <p>
              Admissions teams look for students who lead in school, work,
              athletics, community service, scouting, clubs, faith groups, or
              family responsibilities.
              </p>
            </div>
            <div className="guide-block">
              <h3>Service Commitment</h3>
              <p>
              Most graduates serve as active duty officers for a required
              period. Students should understand the commitment before applying.
              </p>
            </div>
          </article>
        </div>
      </section>

    </>
  );
}
