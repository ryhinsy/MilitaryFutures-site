import { Checklist } from "@/components/Checklist";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ContentCard } from "@/components/ContentCard";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Timeline } from "@/components/Timeline";

export default function ServiceAcademiesPage() {
  return (
    <>
      <PageHero eyebrow="College + commissioning" title="Service Academies">
        Service Academies are highly selective federal colleges where students
        earn a degree, receive military leadership training, and usually
        commission as officers after graduation.
      </PageHero>

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
                label: "U.S. Military Academy",
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
                  "Students still complete a competitive academy application, but the nomination process is different."
                ]
              }
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Timeline" title="A Practical Application Rhythm">
            Exact dates vary by academy and nomination source, but this gives
            students a safe planning structure.
          </SectionHeader>
          <Timeline
            items={[
              {
                time: "Freshman to sophomore year",
                title: "Build the foundation",
                text: "Take challenging classes, develop study habits, join activities, pursue leadership, and begin consistent fitness work."
              },
              {
                time: "Junior fall and winter",
                title: "Research and test",
                text: "Compare academies, attend information sessions, prepare for ACT or SAT testing, and learn your congressional district."
              },
              {
                time: "Junior spring and summer",
                title: "Open applications",
                text: "Start academy applications, request teacher recommendations early, schedule medical and fitness preparation, and begin nomination packets."
              },
              {
                time: "Senior fall",
                title: "Submit and interview",
                text: "Finish academy and nomination applications, complete interviews, update test scores, and keep grades strong."
              },
              {
                time: "Senior winter to spring",
                title: "Evaluate outcomes",
                text: "Watch for appointments, waitlist updates, ROTC scholarship options, college backup plans, and alternate routes."
              }
            ]}
          />
        </div>
      </section>

      <section className="section alt">
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
