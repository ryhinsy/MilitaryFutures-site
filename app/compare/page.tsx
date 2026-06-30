import { ComparisonTable } from "@/components/ComparisonTable";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";

export default function ComparePage() {
  return (
    <>
      <PageHero eyebrow="Decision guide" title="Compare Military Pathways">
        Compare what daily life, college, training, benefits, leadership,
        deployment possibility, and service obligations can look like across
        common military pathways.
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHeader title="What Life Looks Like">
            The best path depends on whether the student wants a military
            college, a civilian campus with officer training, immediate job
            training, part-time service, or full-time active duty life.
          </SectionHeader>
          <div className="guide-columns three">
            <div>
              <h3>Service Academies</h3>
              <p>
                Highly structured federal colleges designed to commission
                officers after graduation.
              </p>
            </div>
            <div>
              <h3>ROTC</h3>
              <p>
                Students attend a civilian college while adding military
                classes, labs, physical training, and summer requirements.
              </p>
            </div>
            <div>
              <h3>Enlisting</h3>
              <p>
                Students enter a branch, complete initial training, learn a job
                specialty, and begin serving in an enlisted role.
              </p>
            </div>
            <div>
              <h3>National Guard</h3>
              <p>
                Members often serve part time while balancing school or work,
                with possible state activation or federal mobilization.
              </p>
            </div>
            <div>
              <h3>Reserves</h3>
              <p>
                Reserve members usually serve part time in a federal reserve
                component and can be mobilized for training or operational
                needs.
              </p>
            </div>
            <div>
              <h3>Active Duty</h3>
              <p>
                Active Duty means the military is the full-time job after
                training, with daily life shaped by branch, job, and assignment.
              </p>
            </div>
          </div>
          <div className="note-band spaced-top">
            <strong>Commissioning reminder</strong>
            Multiple pathways can eventually lead to commissioning as an
            officer, including academies, ROTC, enlisted-to-officer programs,
            OCS or OTS, and branch-specific programs. The process, timeline,
            eligibility rules, and competitiveness are different for each route.
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeader eyebrow="Side by side" title="Student Experience Comparison" />
          <ComparisonTable
            columns={["Academies", "ROTC", "Enlisting", "Guard / Reserve", "Active Duty"]}
            rows={[
              {
                label: "Daily life",
                values: [
                  "Structured military college environment.",
                  "Civilian college schedule plus ROTC commitments.",
                  "Military training and job assignment after entry.",
                  "Part-time service rhythm with school or civilian work.",
                  "Full-time military job with unit routines and readiness requirements."
                ]
              },
              {
                label: "College experience",
                values: [
                  "Degree earned at a federal academy.",
                  "Degree earned at a civilian college.",
                  "College may happen before, during, or after service.",
                  "College often happens alongside drill or after initial training.",
                  "College may happen later using education benefits or off-duty study."
                ]
              },
              {
                label: "Training",
                values: [
                  "Academics, military training, and summer programs.",
                  "ROTC classes, labs, PT, field training, and summer training.",
                  "Basic training plus job-specific school.",
                  "Initial training, regular drill, annual training, and possible mobilization.",
                  "Initial training, job school, unit training, and recurring readiness requirements."
                ]
              },
              {
                label: "Pay / benefits",
                values: [
                  "Education generally funded with cadet or midshipman pay and later officer pay.",
                  "Scholarships and stipends vary by branch, award, and school.",
                  "Military pay, benefits, job training, and education benefits may apply.",
                  "Part-time pay and education benefits vary by component and state.",
                  "Full-time pay, allowances, health care, leave, and education benefits may apply."
                ]
              },
              {
                label: "Leadership",
                values: [
                  "Designed to commission officers after graduation.",
                  "Designed to commission officers after college.",
                  "Leadership grows through enlisted rank and experience.",
                  "Leadership can develop through enlisted or officer part-time paths.",
                  "Leadership depends on rank, job, time in service, and officer or enlisted path."
                ]
              },
              {
                label: "Service obligation",
                values: [
                  "Usually a required officer commitment after graduation.",
                  "Usually a commitment after commissioning, especially with scholarships.",
                  "Defined by enlistment contract and component.",
                  "Defined by contract, component, unit, and benefits used.",
                  "Defined by contract, officer program, branch, and training pipeline."
                ]
              }
            ]}
          />
        </div>
      </section>
    </>
  );
}
