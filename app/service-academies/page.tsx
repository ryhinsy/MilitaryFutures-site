import { Checklist } from "@/components/Checklist";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ContentCard } from "@/components/ContentCard";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Timeline } from "@/components/Timeline";

const academyLinks = [
  { label: "West Point admissions", href: "https://www.westpoint.edu/admissions" },
  { label: "Naval Academy admissions", href: "https://www.usna.edu/Admissions/" },
  { label: "Air Force Academy admissions", href: "https://www.academyadmissions.com/" },
  { label: "Coast Guard Academy admissions", href: "https://uscga.edu/admissions/" },
  { label: "Merchant Marine Academy admissions", href: "https://www.usmma.edu/admissions" }
];

export default function ServiceAcademiesPage() {
  return (
    <>
      <PageHero eyebrow="College + commissioning" title="Service Academies">
        Service Academies are highly selective federal colleges where students
        earn a degree, receive military leadership training, and usually
        commission as officers after graduation.
      </PageHero>

      <nav className="subnav" aria-label="Academies page sections">
        <div className="container subnav-scroll">
          <a href="#overview">Overview</a>
          <a href="#application-process">Application Process</a>
          <a href="#congressional-nominations">Congressional Nominations</a>
          <a href="#requirements">Academy Requirements</a>
          <a href="#deadlines">Deadlines</a>
        </div>
      </nav>

      <section className="section" id="overview">
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

      <section className="section" id="application-process">
        <div className="container">
          <SectionHeader eyebrow="Application process" title="The Academy Admissions Journey">
            The academy process has several moving parts. Students should treat
            it like a yearlong project: academy application, nomination
            applications, fitness testing, medical review, interviews, essays,
            recommendations, and backup plans all move at the same time.
          </SectionHeader>
          <Timeline
            items={[
              {
                time: "Step 1",
                title: "Research academies",
                text: "Compare each academy's branch, majors, campus life, service commitment, nomination rules, and career outcomes. Attend admissions events when possible."
              },
              {
                time: "Step 2",
                title: "Submit preliminary applications",
                text: "Most academies start with a preliminary application or pre-candidate questionnaire. This helps the academy decide whether to open a full candidate file."
              },
              {
                time: "Step 3",
                title: "Pre-candidate phase",
                text: "Students gather transcripts, test scores, activity records, leadership examples, and contact information while learning what the academy will require next."
              },
              {
                time: "Step 4",
                title: "Candidate phase",
                text: "Once a candidate file opens, students complete the academy application, essays, recommendations, fitness assessment, medical steps, and any required interviews."
              },
              {
                time: "Step 5",
                title: "Congressional nominations",
                text: "Most academies require a nomination. Students usually apply through their U.S. Representative, both U.S. Senators, and any service-connected category that fits."
              },
              {
                time: "Step 6",
                title: "Candidate Fitness Assessment",
                text: "The CFA measures physical readiness. Students should train before testing and follow the academy's instructions for administration and score submission."
              },
              {
                time: "Step 7",
                title: "Medical qualification and DoDMERB",
                text: "Academies use a medical review process, often through DoDMERB. Students should respond quickly to requests for exams, records, or follow-up information."
              },
              {
                time: "Step 8",
                title: "Interviews, essays, and recommendations",
                text: "Students explain motivation, leadership, character, and readiness for service. Recommendations should come from adults who can speak to performance and responsibility."
              },
              {
                time: "Step 9",
                title: "Deadlines and updates",
                text: "Students keep academy portals, nomination portals, test scores, transcripts, and medical requests current. Deadlines vary by academy and year."
              },
              {
                time: "Step 10",
                title: "Appointments and final decisions",
                text: "An appointment is an offer of admission. Students may also see waitlist updates, prep school opportunities, ROTC options, or other college decisions."
              }
            ]}
          />
        </div>
      </section>

      <section className="section alt" id="congressional-nominations">
        <div className="container">
          <SectionHeader eyebrow="Nominations" title="Congressional Nominations">
            Most Service Academies require a nomination, but the U.S. Coast
            Guard Academy does not require a congressional nomination. A
            nomination is not the same as an appointment; it is one required
            piece of the admissions process for the academies that use it.
          </SectionHeader>
          <div className="content-grid">
            <ContentCard title="Wisconsin Senators" kicker="Statewide sources">
              Wisconsin students should review the official academy nomination
              instructions for Senator Tammy Baldwin and Senator Ron Johnson
              each application cycle.
            </ContentCard>
            <ContentCard title="U.S. Representative" kicker="District source">
              Students should use their home address to confirm their
              congressional district, then follow that representative's
              nomination application instructions.
            </ContentCard>
            <ContentCard title="Other Sources" kicker="Eligibility varies">
              Some students may qualify for Vice Presidential or
              service-connected nomination categories. Academy admissions teams
              can help students understand which categories may apply.
            </ContentCard>
          </div>
          <div className="content-grid two spaced-top">
            <Checklist
              title="Nomination Document Checklist"
              items={[
                "Completed nomination application form",
                "High school transcript",
                "ACT or SAT scores if requested",
                "Activities, employment, athletics, and leadership resume",
                "Personal essay or motivation statement",
                "Letters of recommendation",
                "Academy preference ranking if requested",
                "Interview date, location, and contact information"
              ]}
            />
            <Checklist
              title="Interview Preparation"
              items={[
                "Explain why you want to serve as an officer",
                "Know why each academy on your list fits your goals",
                "Prepare examples of leadership, teamwork, failure, and resilience",
                "Practice concise answers with a counselor, teacher, or mentor",
                "Be ready to discuss ROTC or civilian college backup plans",
                "Dress neatly, arrive early, and send any follow-up materials quickly"
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section" id="requirements">
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

      <section className="section alt" id="deadlines">
        <div className="container">
          <SectionHeader eyebrow="Deadlines" title="Academy Deadline and Process Notes">
            Deadlines vary by academy and application year. Students should use
            official academy websites and congressional office websites as the
            source of truth before submitting any application materials.
          </SectionHeader>
          <ComparisonTable
            columns={["Process notes", "Nomination note", "Official source placeholder"]}
            rows={[
              {
                label: "U.S. Military Academy at West Point",
                values: [
                  "Begins with candidate information and a full candidate file for competitive applicants. Students complete academic, leadership, fitness, medical, and interview steps.",
                  "Congressional nomination usually required.",
                  "West Point admissions page"
                ]
              },
              {
                label: "U.S. Naval Academy",
                values: [
                  "Students typically begin with preliminary application information, then complete candidate materials, recommendations, CFA, medical review, and nomination steps.",
                  "Congressional nomination usually required.",
                  "Naval Academy admissions page"
                ]
              },
              {
                label: "U.S. Air Force Academy",
                values: [
                  "Students move from pre-candidate to candidate phases and complete academic records, activities, essays, evaluations, CFA, medical review, and nomination steps.",
                  "Congressional nomination usually required.",
                  "Air Force Academy admissions page"
                ]
              },
              {
                label: "U.S. Coast Guard Academy",
                values: [
                  "Students apply directly through the Coast Guard Academy process with academic, leadership, fitness, essay, recommendation, and medical review components.",
                  "Congressional nomination is not required.",
                  "Coast Guard Academy admissions page"
                ]
              },
              {
                label: "U.S. Merchant Marine Academy",
                values: [
                  "Students complete academy admissions requirements and should pay close attention to maritime-specific service obligation information.",
                  "Congressional nomination usually required.",
                  "Merchant Marine Academy admissions page"
                ]
              }
            ]}
          />
          <div className="link-panel spaced-top" aria-label="Official academy links">
            {academyLinks.map((link) => (
              <a href={link.href} key={link.href} rel="noopener noreferrer" target="_blank">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
