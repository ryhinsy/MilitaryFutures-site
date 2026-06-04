import { AcademiesNav } from "@/components/AcademiesNav";
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
