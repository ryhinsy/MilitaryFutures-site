import { AcademiesNav } from "@/components/AcademiesNav";
import { ComparisonTable } from "@/components/ComparisonTable";
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
          <SectionHeader eyebrow="Compare" title="Federal Service Academies" />
          <ComparisonTable
            columns={["Primary branch", "Nomination usually required", "Student note"]}
            rows={[
              {
                label: "U.S. Military Academy at West Point",
                values: [
                  "Army",
                  "Yes",
                  "Often called West Point; strong fit for students drawn to Army leadership and land-based missions."
                ]
              },
              {
                label: "U.S. Naval Academy",
                values: [
                  "Navy / Marine Corps",
                  "Yes",
                  "Prepares officers for Navy and Marine Corps communities, including aviation, surface, submarines, and ground roles."
                ]
              },
              {
                label: "U.S. Air Force Academy",
                values: [
                  "Air Force / Space Force",
                  "Yes",
                  "Strong fit for students interested in air, space, cyber, engineering, and technical operations."
                ]
              },
              {
                label: "U.S. Merchant Marine Academy",
                values: [
                  "Maritime service options",
                  "Yes",
                  "Combines maritime training with several service obligation options after graduation."
                ]
              },
              {
                label: "U.S. Coast Guard Academy",
                values: [
                  "Coast Guard",
                  "No congressional nomination",
                  "Students complete a competitive academy application, but a congressional nomination is not required."
                ]
              }
            ]}
          />
        </div>
      </section>
    </>
  );
}
