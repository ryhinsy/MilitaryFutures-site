import { Checklist } from "@/components/Checklist";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ContentCard } from "@/components/ContentCard";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { ComparisonTimeline, Timeline } from "@/components/Timeline";
import type { ComparisonTimelineMilestone } from "@/components/Timeline";

const academyLinks = [
  { label: "West Point admissions", href: "https://www.westpoint.edu/admissions" },
  { label: "Naval Academy admissions", href: "https://www.usna.edu/Admissions/" },
  { label: "Air Force Academy admissions", href: "https://www.academyadmissions.com/" },
  { label: "Coast Guard Academy admissions", href: "https://uscga.edu/admissions/" },
  { label: "Merchant Marine Academy admissions", href: "https://www.usmma.edu/admissions" }
];

const academyTimelineMilestones: ComparisonTimelineMilestone[] = [
  {
    period: "Junior Year Winter/Spring",
    title: "Build the foundation",
    text: "Research academies, prepare for SAT/ACT testing, and begin fitness preparation.",
    kind: "universal" as const,
    timelines: ["Universal"]
  },
  {
    period: "Dec-Mar",
    academy: "Summer programs",
    title: "Summer seminar windows",
    text: "Optional academy summer programs usually open during winter and early spring. Verify exact dates annually.",
    kind: "academy" as const,
    timelines: ["West Point", "Naval Academy", "Air Force Academy"],
    details: [
      {
        timeline: "Air Force Academy",
        text: "Air Force Academy: Summer Seminar usually Dec-Jan"
      },
      {
        timeline: "West Point",
        text: "West Point: SLE applications usually Jan-Mar"
      },
      {
        timeline: "Naval Academy",
        text: "Naval Academy: Summer Seminar usually Jan-Mar"
      }
    ]
  },
  {
    period: "Feb-Apr",
    academy: "Preliminary applications",
    title: "Pre-candidate doors open",
    text: "Several academies open the first application step during spring of junior year.",
    kind: "academy" as const,
    timelines: ["West Point", "Naval Academy", "Air Force Academy"],
    details: [
      {
        timeline: "West Point",
        text: "West Point: Pre-Candidate Questionnaire usually opens February"
      },
      {
        timeline: "Air Force Academy",
        text: "Air Force Academy: Pre-Candidate Questionnaire usually opens March"
      },
      {
        timeline: "Naval Academy",
        text: "Naval Academy: preliminary application usually opens April"
      }
    ]
  },
  {
    period: "Junior Year Spring",
    title: "Preliminary applications begin",
    text: "Students start preliminary applications, track summer seminar options, and keep test scores and activities organized.",
    kind: "universal" as const,
    timelines: ["Universal"]
  },
  {
    period: "Spring Junior Year",
    academy: "Merchant Marine Academy",
    title: "Application usually opens",
    text: "The Merchant Marine Academy application usually opens in spring of junior year.",
    kind: "academy" as const,
    timelines: ["Merchant Marine Academy"]
  },
  {
    period: "Junior Year Summer",
    title: "Pre-candidate phase",
    text: "Contact academy liaison officers, research nomination requirements, and prepare for candidate portals.",
    kind: "universal" as const,
    timelines: ["Universal"]
  },
  {
    period: "July",
    academy: "Air Force Academy",
    title: "Candidate Kit opens",
    text: "The Candidate Kit usually opens in July before senior year for eligible applicants.",
    kind: "academy" as const,
    timelines: ["Air Force Academy"]
  },
  {
    period: "Senior Summer/Early Fall",
    title: "Candidate phase begins",
    text: "Candidate portals open, full applications begin, and students request recommendations.",
    kind: "universal" as const,
    timelines: ["Universal"]
  },
  {
    period: "Around October",
    academy: "Coast Guard Academy",
    title: "Early Action deadline",
    text: "Early Action is usually due around October. The Coast Guard Academy does not require a congressional nomination.",
    kind: "academy" as const,
    timelines: ["Coast Guard Academy"]
  },
  {
    period: "Senior Year Fall",
    title: "Applications, nominations, and interviews",
    text: "Complete congressional nomination applications where required, essays, transcripts, interviews, and CFA preparation.",
    kind: "universal" as const,
    timelines: ["Universal"],
    details: [
      {
        text: "Most federal service academies require a nomination"
      },
      {
        text: "Coast Guard Academy does not require a congressional nomination"
      },
      {
        text: "Students should keep ROTC and college backup plans active"
      }
    ]
  },
  {
    period: "Senior Year Fall/Winter",
    title: "CFA and DoDMERB",
    text: "Complete the Candidate Fitness Assessment and respond quickly to DoDMERB medical qualification follow-up.",
    kind: "universal" as const,
    timelines: ["Universal"]
  },
  {
    period: "Dec 31-Jan 31",
    academy: "Major final deadlines",
    title: "Final application deadlines",
    text: "Several final deadlines fall in winter. These dates are typical and must be verified annually.",
    kind: "academy" as const,
    timelines: ["West Point", "Naval Academy", "Air Force Academy"],
    details: [
      {
        timeline: "Air Force Academy",
        text: "Air Force Academy: final application typically Dec 31"
      },
      {
        timeline: "West Point",
        text: "West Point: final application typically Jan 31"
      },
      {
        timeline: "Naval Academy",
        text: "Naval Academy: final application typically Jan 31"
      }
    ]
  },
  {
    period: "Dec-Mar",
    academy: "Coast Guard Academy",
    title: "Decisions and regular admission",
    text: "Early Action decisions are usually in December, Regular Admission is usually around January, and Regular Admission decisions are usually in March.",
    kind: "notification" as const,
    timelines: ["Coast Guard Academy"]
  },
  {
    period: "Around February",
    academy: "Merchant Marine Academy",
    title: "Final application deadline",
    text: "The final application deadline is typically around February. A congressional nomination is required for most applicants.",
    kind: "academy" as const,
    timelines: ["Merchant Marine Academy"]
  },
  {
    period: "Senior Year Winter",
    title: "Final submissions",
    text: "Finish final submissions, nomination follow-up, medical follow-up, essays, recommendations, and portal updates.",
    kind: "universal" as const,
    timelines: ["Universal"]
  },
  {
    period: "Late Fall-Apr",
    academy: "Appointment windows",
    title: "Appointments begin releasing",
    text: "Appointment windows vary by academy and cycle. Students should keep checking portals and official messages.",
    kind: "notification" as const,
    timelines: ["West Point", "Naval Academy", "Air Force Academy", "Merchant Marine Academy"],
    details: [
      {
        timeline: "Naval Academy",
        text: "Naval Academy: usually late fall-Apr"
      },
      {
        timeline: "West Point",
        text: "West Point: usually Jan-Apr, often final notifications by May"
      },
      {
        timeline: "Air Force Academy",
        text: "Air Force Academy: major appointment period usually Feb-Apr"
      },
      {
        timeline: "Merchant Marine Academy",
        text: "Merchant Marine Academy: often Feb-Apr"
      }
    ]
  },
  {
    period: "Senior Year Spring",
    title: "Accept, decline, and prepare",
    text: "Students receive appointment decisions, accept or decline offers, and prepare for reporting day or basic training.",
    kind: "notification" as const,
    timelines: ["Universal"]
  }
];

export default function ServiceAcademiesPage() {
  return (
    <>
      <PageHero eyebrow="College + commissioning" title="Service Academies">
        Service Academies are highly selective federal colleges where students
        earn a degree, receive military leadership training, and usually
        commission as officers after graduation.
      </PageHero>

      <ComparisonTimeline milestones={academyTimelineMilestones} />

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
            <ContentCard title="Your U.S. Senators" kicker="Statewide sources">
              Students should review the official academy nomination
              instructions for both senators from their home state each
              application cycle.
            </ContentCard>
            <ContentCard title="U.S. Representative" kicker="District source">
              Students should use their home address to confirm their
              congressional district, then follow that representative&apos;s
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
          <div className="link-panel spaced-top" aria-label="Official nomination lookup links">
            <a
              href="https://www.house.gov/representatives/find-your-representative"
              rel="noopener noreferrer"
              target="_blank"
            >
              U.S. House representative lookup
            </a>
            <a
              href="https://www.senate.gov/states/statesmap.htm"
              rel="noopener noreferrer"
              target="_blank"
            >
              U.S. Senate state lookup
            </a>
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
