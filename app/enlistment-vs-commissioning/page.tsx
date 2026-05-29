import { ComparisonTable } from "@/components/ComparisonTable";
import { ContentCard } from "@/components/ContentCard";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";

export default function EnlistmentVsCommissioningPage() {
  return (
    <>
      <PageHero eyebrow="Decision guide" title="Compare Military Pathways">
        This section helps students and parents compare what daily life,
        college, training, benefits, leadership, deployment possibility, and
        service obligations can look like across common military pathways.
      </PageHero>

      <section className="section" id="enlistment">
        <div className="container">
          <SectionHeader title="What Life Looks Like">
            The best path depends on whether the student wants a full-time
            military college, a civilian campus with officer training, immediate
            job training, part-time service, or active duty life after training.
          </SectionHeader>
          <div className="content-grid">
            <ContentCard title="Service Academies" kicker="Officer pathway">
              Daily life is structured around academics, military training,
              fitness, inspections, leadership roles, and a full campus
              community built around service.
            </ContentCard>
            <ContentCard title="ROTC" kicker="College + officer pathway">
              Students attend a civilian college while adding ROTC classes,
              labs, physical training, field training, and summer requirements.
            </ContentCard>
            <ContentCard title="Enlistment" kicker="Job training first">
              Students enter a branch, complete initial training, learn a job
              specialty, and begin serving in an enlisted role.
            </ContentCard>
            <ContentCard title="National Guard" kicker="State + federal">
              Members usually serve part time while balancing school or work,
              but can be activated for state emergencies or federal missions.
            </ContentCard>
            <ContentCard title="Air National Guard" kicker="Air-focused Guard">
              Similar part-time model, often connected to aviation, cyber,
              intelligence, maintenance, medical, security, and mission support
              roles.
            </ContentCard>
            <ContentCard title="Reserves" kicker="Federal part-time">
              Reserve members typically serve part time in a federal reserve
              component and can be mobilized for training or operational needs.
            </ContentCard>
            <ContentCard title="Active Duty" kicker="Full-time service">
              Active Duty means the military is the full-time job. Daily life
              depends heavily on branch, job specialty, unit, and duty station.
            </ContentCard>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeader eyebrow="Side by side" title="Student Experience Comparison" />
          <ComparisonTable
            columns={["Academies", "ROTC", "Enlistment", "Guard / Reserve", "Active Duty"]}
            rows={[
              {
                label: "Daily life",
                values: [
                  "Highly structured military college environment.",
                  "Civilian college schedule plus ROTC commitments.",
                  "Full-time military training and job assignment after entry.",
                  "Part-time service rhythm with school or civilian work.",
                  "Full-time military job with unit routines, training, and duty assignments."
                ]
              },
              {
                label: "College experience",
                values: [
                  "Degree earned at a federal academy.",
                  "Degree earned at a civilian college.",
                  "College may happen before, during, or after service.",
                  "College often happens alongside drill or after training.",
                  "College may happen later using education benefits or off-duty study."
                ]
              },
              {
                label: "Training",
                values: [
                  "Four years of academy academics, military training, and summer programs.",
                  "ROTC classes, labs, PT, field training, and summer training.",
                  "Basic training plus job-specific school.",
                  "Initial training plus regular drill, annual training, and possible mobilization.",
                  "Initial training, job school, unit training, and recurring readiness requirements."
                ]
              },
              {
                label: "Pay / benefits",
                values: [
                  "Education is funded with cadet or midshipman pay and later officer pay.",
                  "Scholarship or stipend possibilities vary by branch and award.",
                  "Military pay, benefits, job training, and education benefits may apply.",
                  "Part-time pay, training benefits, and education benefits vary by component and state.",
                  "Full-time pay, housing or allowances, health care, leave, retirement eligibility, and education benefits may apply."
                ]
              },
              {
                label: "Leadership",
                values: [
                  "Designed to commission officers after graduation.",
                  "Designed to commission officers after college.",
                  "Leadership grows through enlisted rank, experience, and responsibility.",
                  "Leadership can develop through enlisted or officer Guard/Reserve paths.",
                  "Leadership depends on rank, job, time in service, and officer or enlisted path."
                ]
              },
              {
                label: "Deployment possibility",
                values: [
                  "After commissioning, deployment depends on branch, job, and world events.",
                  "After commissioning, deployment depends on branch, job, and world events.",
                  "Possible after training based on unit, job, and branch needs.",
                  "Possible through state activation, federal mobilization, or deployment.",
                  "Possible and often more central to full-time military readiness."
                ]
              },
              {
                label: "Service obligation",
                values: [
                  "Usually a required officer service commitment after graduation.",
                  "Usually a service commitment after commissioning, especially with scholarships.",
                  "Defined by enlistment contract and component.",
                  "Defined by contract, component, unit, and any benefits used.",
                  "Defined by contract, officer program, branch, and training pipeline."
                ]
              }
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Best fit" title="Match the Path to the Goal" />
          <div className="content-grid">
            <ContentCard title="Wants a military college">
              Start with Service Academies and senior military colleges, while
              keeping ROTC backups active.
            </ContentCard>
            <ContentCard title="Wants a traditional campus">
              ROTC may fit well because students can attend a civilian college
              while preparing for an officer commission.
            </ContentCard>
            <ContentCard title="Wants job training soon">
              Enlistment may fit if the student wants hands-on training,
              military experience, and benefits earlier.
            </ContentCard>
            <ContentCard title="Wants to stay local">
              National Guard, Air National Guard, or Reserves may fit students
              balancing school, work, and service.
            </ContentCard>
            <ContentCard title="Wants full-time military life">
              Active Duty may fit students who want the military to be their
              primary full-time job after training.
            </ContentCard>
            <ContentCard title="Still deciding">
              Compare timelines, contracts, branch missions, college goals, and
              family needs before signing or committing.
            </ContentCard>
          </div>
        </div>
      </section>
    </>
  );
}
