import { Checklist } from "@/components/Checklist";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ContentCard } from "@/components/ContentCard";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Timeline } from "@/components/Timeline";

export default function EnlistmentVsCommissioningPage() {
  return (
    <>
      <PageHero eyebrow="Compare pathways" title="ROTC vs Academies vs Enlistment">
        Students can serve through several routes. The biggest early question is
        whether they want to enter as an enlisted service member, train toward an
        officer commission in college, or attend a Service Academy.
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHeader title="Officer vs Enlisted, in Plain Language">
            Both paths matter. Enlisted members become trained specialists,
            operators, technicians, and team leaders. Officers are commissioned
            leaders responsible for planning, management, decisions, and the
            welfare of the people they lead.
          </SectionHeader>
          <div className="content-grid two">
            <ContentCard title="Enlisted Path" kicker="Career specialist">
              <ul>
                <li>Can begin after high school with a qualifying contract.</li>
                <li>Usually starts with basic training and job-specific school.</li>
                <li>Often provides earlier hands-on technical experience.</li>
                <li>Can later connect to college benefits or commissioning programs.</li>
              </ul>
            </ContentCard>
            <ContentCard title="Officer Path" kicker="Commissioned leader">
              <ul>
                <li>Usually requires a college degree.</li>
                <li>Can begin through an academy, ROTC, or officer candidate route.</li>
                <li>Focuses on leadership, planning, accountability, and mission execution.</li>
                <li>Often includes branch-specific training after commissioning.</li>
              </ul>
            </ContentCard>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeader eyebrow="Side by side" title="Major Pathway Comparison" />
          <ComparisonTable
            columns={["Service Academy", "ROTC", "Enlistment"]}
            rows={[
              {
                label: "Primary goal",
                values: [
                  "Earn a degree at a federal academy and commission as an officer.",
                  "Attend a civilian college while training to commission as an officer.",
                  "Enter the military workforce and train for an enlisted specialty."
                ]
              },
              {
                label: "College experience",
                values: [
                  "Full-time military college environment with strict structure.",
                  "Civilian campus experience with military classes, labs, and training.",
                  "College may happen before, during, or after service depending on the plan."
                ]
              },
              {
                label: "Cost and benefits",
                values: [
                  "Education is funded, with a service commitment after graduation.",
                  "Scholarships may cover tuition, fees, books, or living support depending on award.",
                  "Pay, benefits, training, and education benefits vary by branch and component."
                ]
              },
              {
                label: "Application style",
                values: [
                  "Highly competitive college application plus nomination for most academies.",
                  "College admission plus ROTC scholarship or campus enrollment process.",
                  "Recruiter-guided process with testing, medical qualification, and contract review."
                ]
              },
              {
                label: "Best for",
                values: [
                  "Students seeking a structured academy environment and officer commission.",
                  "Students wanting a civilian college campus with an officer pathway.",
                  "Students ready for job training, earlier service, or a technical career start."
                ]
              }
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Best for" title="How to Match a Student to a Path" />
          <div className="content-grid">
            <ContentCard title="Academies may fit if">
              The student wants a highly structured college experience, is
              comfortable with intense competition, and wants officer leadership
              immediately after graduation.
            </ContentCard>
            <ContentCard title="ROTC may fit if">
              The student wants a broader civilian college experience while
              still preparing for military leadership, scholarships, and a
              future commission.
            </ContentCard>
            <ContentCard title="Enlistment may fit if">
              The student wants to begin service sooner, learn a specific job,
              gain technical skills, or use military benefits to support future
              education.
            </ContentCard>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container content-grid two">
          <Checklist
            title="Questions Before Choosing"
            items={[
              "Do I want to be an officer, enlisted member, or am I still deciding?",
              "Do I want a traditional college campus experience?",
              "Am I ready for a full-time military college environment?",
              "Which branch missions interest me most?",
              "What job fields or majors fit my strengths?",
              "What service commitment am I willing to make?",
              "What backup plan keeps me moving if my first choice does not work?"
            ]}
          />
          <div>
            <h2 className="stack-title">Decision Timeline</h2>
            <Timeline
              items={[
                {
                  time: "Sophomore year",
                  title: "Explore broadly",
                  text: "Learn the branches, talk with trusted adults, and avoid locking onto one path too early."
                },
                {
                  time: "Junior year",
                  title: "Compare requirements",
                  text: "Map academy, ROTC, enlistment, testing, fitness, and college deadlines on one calendar."
                },
                {
                  time: "Senior year",
                  title: "Keep options alive",
                  text: "Apply, interview, compare offers or contracts, and read every service commitment carefully."
                }
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
