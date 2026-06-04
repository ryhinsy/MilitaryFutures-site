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
          <article className="guide-article">
            <div className="guide-block">
              <h3>Training comes first</h3>
              <p>
                Most enlisted members complete basic training or boot camp, then
                attend job-specific training before reporting to a unit.
              </p>
            </div>
            <div className="guide-block">
              <h3>Jobs can be technical, hands-on, or mission-focused</h3>
              <p>
                Enlisted jobs can include aviation maintenance, cyber, medical,
                logistics, intelligence, mechanics, infantry, security, maritime
                roles, administration, and many other specialties.
              </p>
            </div>
            <div className="guide-block">
              <h3>Benefits and commitments depend on the contract</h3>
              <p>
                Pay, health care, housing or allowances, training, education
                benefits, bonuses, and retirement eligibility vary by component,
                branch, job, contract, and time in service. Students should ask
                what is guaranteed, what is conditional, and what happens after
                initial training.
              </p>
            </div>
            <div className="guide-block">
              <h3>Daily life depends heavily on the job</h3>
              <p>
                Daily routines can include physical training, technical work,
                maintenance, classroom instruction, field training,
                watchstanding, deployments, or shift work.
              </p>
            </div>
          </article>
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
        <div className="container">
          <div className="guide-columns">
            <div>
              <h3>Questions before signing</h3>
              <ul>
                <li>Which branch missions and job fields interest me most?</li>
                <li>What does the contract guarantee, and what does it not guarantee?</li>
                <li>How long are basic training and job-specific school?</li>
                <li>What education benefits may apply, and when do they start?</li>
                <li>What medical, fitness, citizenship, and test score requirements apply?</li>
                <li>Who can review the commitment with me before I sign?</li>
              </ul>
            </div>
            <div>
              <h3>Enlisted to officer</h3>
              <p>
                Enlisting does not close the door to becoming an officer. Some
                enlisted members later pursue ROTC, Officer Candidate School,
                Officer Training School, service academy options when eligible,
                or branch-specific enlisted-to-officer programs.
              </p>
              <p>
                These routes are competitive and have different education, age,
                citizenship, fitness, medical, recommendation, and service
                requirements. Students should verify current rules with official
                branch sources.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
