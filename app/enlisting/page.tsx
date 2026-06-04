import { Checklist } from "@/components/Checklist";
import { ContentCard } from "@/components/ContentCard";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Timeline } from "@/components/Timeline";

export default function EnlistingPage() {
  return (
    <>
      <PageHero eyebrow="Job training + service" title="Enlisting">
        Enlisting means entering the military in an enlisted role, learning a
        specific job, serving in a unit, and building experience through rank,
        training, and responsibility.
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHeader title="What Enlisting Means">
            Enlisted service can be full time on Active Duty or part time in the
            Guard or Reserves. Students should compare branches, jobs,
            contracts, training timelines, benefits, and long-term goals before
            signing.
          </SectionHeader>
          <div className="content-grid">
            <ContentCard title="Training" kicker="First steps">
              Most enlisted members complete basic training or boot camp, then
              attend job-specific training before reporting to a unit.
            </ContentCard>
            <ContentCard title="Possible Jobs" kicker="Career fields">
              Enlisted jobs can include aviation maintenance, cyber, medical,
              logistics, intelligence, mechanics, infantry, security, maritime
              roles, administration, and many technical specialties.
            </ContentCard>
            <ContentCard title="Benefits" kicker="Verify details">
              Pay, health care, housing or allowances, training, education
              benefits, bonuses, and retirement eligibility vary by component,
              branch, job, contract, and time in service.
            </ContentCard>
            <ContentCard title="Service Commitment" kicker="Contract matters">
              The commitment is defined by the enlistment contract. Students
              should ask what is guaranteed, what is conditional, and what
              happens after initial training.
            </ContentCard>
            <ContentCard title="Daily Life" kicker="Depends on the job">
              Daily routines can include physical training, technical work,
              maintenance, classroom instruction, field training, watchstanding,
              deployments, or shift work.
            </ContentCard>
            <ContentCard title="Best Fit" kicker="Student goals">
              Enlisting may fit students who want hands-on training, earlier
              military experience, a specific job field, or a path that does not
              start with a four-year college.
            </ContentCard>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeader eyebrow="Timeline" title="Typical Enlisting Steps" />
          <Timeline
            items={[
              {
                time: "Explore",
                title: "Compare branches and jobs",
                text: "Research branch missions, job fields, Active Duty, Guard, and Reserve options."
              },
              {
                time: "Qualify",
                title: "Meet entry standards",
                text: "Ask about citizenship, age, education, medical, fitness, background, and testing requirements."
              },
              {
                time: "Choose",
                title: "Review the contract",
                text: "Understand job guarantees, training dates, commitment length, bonuses, and benefits before signing."
              },
              {
                time: "Train",
                title: "Attend initial training",
                text: "Complete basic training or boot camp, then job-specific school."
              },
              {
                time: "Serve",
                title: "Report to a unit",
                text: "Begin applying job skills, gaining experience, and building responsibility through rank."
              }
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="container content-grid two">
          <Checklist
            title="Questions Before Signing"
            items={[
              "Which branch missions and job fields interest me most?",
              "What does the contract guarantee, and what does it not guarantee?",
              "How long are basic training and job-specific school?",
              "What education benefits may apply, and when do they start?",
              "What medical, fitness, citizenship, and test score requirements apply?",
              "What Active Duty, Guard, Reserve, or delayed entry options should I compare?",
              "Who can review the commitment with me before I sign?"
            ]}
          />
          <ContentCard title="Enlisted to Officer" kicker="Commissioning later">
            <p>
              Enlisting does not close the door to becoming an officer. Some
              enlisted members later pursue ROTC, Officer Candidate School,
              Officer Training School, service academy options when eligible, or
              branch-specific enlisted-to-officer programs.
            </p>
            <p>
              These routes are competitive and have different education, age,
              citizenship, fitness, medical, recommendation, and service
              requirements. Students should verify current rules with official
              branch sources.
            </p>
          </ContentCard>
        </div>
      </section>
    </>
  );
}
