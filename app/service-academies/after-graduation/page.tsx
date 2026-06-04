import { AcademiesNav } from "@/components/AcademiesNav";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ContentCard } from "@/components/ContentCard";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { academyDetails } from "@/lib/academy-data";

export default function AfterGraduationPage() {
  return (
    <>
      <PageHero eyebrow="Academies" title="After Graduation">
        Academy graduation is usually the start of an officer career. Graduates
        move from student life into leading people, learning a specialty, and
        serving in their branch.
      </PageHero>

      <AcademiesNav active="after-graduation" />

      <section className="section">
        <div className="container">
          <SectionHeader title="Commissioning After Graduation">
            Most academy graduates commission after four years as junior
            officers. The exact branch, career field, training path, and service
            obligation can vary by academy, service needs, student preference,
            performance, medical qualification, and current policy.
          </SectionHeader>
          <div className="content-grid">
            <ContentCard title="New Officer Rank" kicker="Starting point">
              Graduates usually begin as O-1 officers. Army, Air Force, Space
              Force, and Marine officers usually start as second lieutenants.
              Navy and Coast Guard officers usually start as ensigns.
            </ContentCard>
            <ContentCard title="Officer Life" kicker="Leadership role">
              New officers are responsible for leading teams, learning from
              experienced enlisted leaders, managing training, meeting standards,
              and making decisions that affect people and missions.
            </ContentCard>
            <ContentCard title="First Assignments" kicker="Training first">
              Many graduates report to follow-on training before their first
              operational unit. That could mean flight training, shipboard
              training, cyber school, infantry training, engineering training,
              maritime work, or another branch-specific pipeline.
            </ContentCard>
          </div>
          <div className="note-band spaced-top">
            <strong>Verify each year</strong>
            Obligations, career field options, assignment rules, and training
            pipelines can change by academy, branch, and year. Students should
            confirm current details with official academy and service sources.
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeader eyebrow="Branch differences" title="Where Graduates May Go" />
          <ComparisonTable
            columns={["Typical commissioning path", "Career examples", "Student note"]}
            rows={[
              {
                label: "West Point",
                values: [
                  "Army officer, usually second lieutenant.",
                  "Infantry, armor, aviation, engineers, cyber, logistics, intelligence, medical-related pathways, and more.",
                  "Graduates lead soldiers and often begin with branch-specific officer training."
                ]
              },
              {
                label: "Naval Academy",
                values: [
                  "Navy ensign or Marine Corps second lieutenant.",
                  "Surface warfare, submarines, aviation, Marine ground, cyber, special warfare screening, and support communities.",
                  "Career paths are shaped by service assignment, qualifications, and branch needs."
                ]
              },
              {
                label: "Air Force Academy",
                values: [
                  "Air Force or Space Force officer, usually second lieutenant.",
                  "Pilot, space operations, cyber, intelligence, engineering, acquisitions, maintenance, security forces, and more.",
                  "Some fields have long technical or aviation training pipelines after graduation."
                ]
              },
              {
                label: "Coast Guard Academy",
                values: [
                  "Coast Guard officer, usually ensign.",
                  "Cutter operations, aviation, prevention, response, engineering, cyber, intelligence, and mission support.",
                  "Many graduates begin in operational Coast Guard units with maritime-focused missions."
                ]
              },
              {
                label: "Merchant Marine Academy",
                values: [
                  "Options can include maritime service with a reserve commission or active duty service.",
                  "Maritime industry, Strategic Sealift Officer work, active duty roles, logistics, engineering, and transportation fields.",
                  "USMMA obligations are different from the other academies, so students should verify current requirements carefully."
                ]
              }
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Cost + commitment" title="Academy Cost, Commitment, and Officer Pay">
            Service academies are generally tuition-funded in exchange for a
            service obligation, and most graduates commission after four years
            as officers. Students should verify current costs, benefits, and
            obligations with official academy sources.
          </SectionHeader>
          <div className="content-grid">
            {academyDetails.map((academy) => (
              <ContentCard title={academy.name} kicker={academy.formalName} key={academy.name}>
                <ul>
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
                    O-1 basic pay estimate changes by year and can be affected
                    by housing, food, taxes, location, and specialty factors.
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
              href="https://www.dfas.mil/MilitaryMembers/payentitlements/Pay-Tables/"
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
          <SectionHeader eyebrow="Daily life" title="What the First Years Can Feel Like">
            The first officer years are often about learning fast, earning
            trust, and taking care of people while building technical skill.
          </SectionHeader>
          <div className="content-grid">
            <ContentCard title="Training Continues">
              Graduation does not mean training is over. New officers usually
              attend additional schools, complete qualifications, and learn the
              details of their career field.
            </ContentCard>
            <ContentCard title="Leadership Starts Early">
              Junior officers may lead small teams, sections, platoons,
              divisions, flights, crews, or project groups depending on the
              branch and assignment.
            </ContentCard>
            <ContentCard title="Service Commitment">
              Academy graduates generally owe a required service commitment.
              The length and type of obligation can vary, especially for
              aviation, maritime, graduate school, or specialized training.
            </ContentCard>
            <ContentCard title="Daily Schedule">
              Daily life might include physical training, planning meetings,
              technical work, maintenance, watchstanding, training events,
              travel, field time, deployments, or shift work.
            </ContentCard>
            <ContentCard title="Career Growth">
              Officers are expected to keep learning, take feedback, develop
              judgment, and prepare for larger leadership roles over time.
            </ContentCard>
            <ContentCard title="Family Planning">
              Assignments, moves, deployments, and training timelines can affect
              family routines. Students should talk with current officers and
              academy admissions teams about realistic expectations.
            </ContentCard>
          </div>
        </div>
      </section>
    </>
  );
}
