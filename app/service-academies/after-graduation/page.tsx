import { AcademiesNav } from "@/components/AcademiesNav";
import { ComparisonTable } from "@/components/ComparisonTable";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { academyDetails } from "@/lib/academy-data";

export default function AfterGraduationPage() {
  return (
    <>
      <AcademiesNav active="after-graduation" />

      <PageHero eyebrow="Academies" title="After Graduation">
        Academy graduation is usually the start of an officer career. Graduates
        move from student life into leading people, learning a specialty, and
        serving in their branch.
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHeader title="Commissioning After Graduation">
            Most academy graduates commission after four years as junior
            officers. The exact branch, career field, training path, and service
            obligation can vary by academy, service needs, student preference,
            performance, medical qualification, and current policy.
          </SectionHeader>
          <article className="guide-article">
            <div className="guide-block">
              <h3>New officer rank</h3>
              <p>
                Graduates usually begin as O-1 officers. Army, Air Force, Space
                Force, and Marine officers usually start as second lieutenants.
                Navy and Coast Guard officers usually start as ensigns.
              </p>
            </div>
            <div className="guide-block">
              <h3>Officer life starts with learning</h3>
              <p>
                New officers are responsible for leading teams, learning from
                experienced enlisted leaders, managing training, meeting
                standards, and making decisions that affect people and missions.
              </p>
            </div>
            <div className="guide-block">
              <h3>First assignments often include more training</h3>
              <p>
                Many graduates report to follow-on training before their first
                operational unit. That could mean flight training, shipboard
                training, cyber school, infantry training, engineering training,
                maritime work, or another branch-specific pipeline.
              </p>
            </div>
          </article>
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
          <article className="guide-article wide">
            <div className="guide-block">
              <p>
                Tuition, room, board, and related academy costs are generally
                funded in exchange for a service obligation. Cadets or
                midshipmen may receive pay or allowances while enrolled. A newly
                commissioned O-1 officer&apos;s pay changes by year and can be
                affected by housing, food, taxes, location, and specialty
                factors.
              </p>
            </div>
            <div className="guide-columns">
              {academyDetails.map((academy) => (
                <div key={academy.name}>
                  <h3>{academy.name}</h3>
                  <p>{academy.commitment}</p>
                  <a className="text-link" href={academy.source} rel="noopener noreferrer" target="_blank">
                    Verify {academy.formalName} details
                  </a>
                </div>
              ))}
            </div>
          </article>
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
          <article className="guide-article">
            <p>
              Graduation does not mean training is over. New officers usually
              attend additional schools, complete qualifications, and learn the
              details of their career field.
            </p>
            <ul className="guide-list">
              <li>Junior officers may lead small teams, sections, platoons, divisions, flights, crews, or project groups.</li>
              <li>Daily life might include physical training, planning meetings, technical work, maintenance, watchstanding, training events, travel, field time, deployments, or shift work.</li>
              <li>Officers are expected to keep learning, take feedback, develop judgment, and prepare for larger leadership roles.</li>
              <li>Assignments, moves, deployments, and training timelines can affect family routines.</li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
