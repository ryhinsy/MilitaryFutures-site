import { AcademiesNav } from "@/components/AcademiesNav";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";

export default function AcademyApplicationProcessPage() {
  return (
    <>
      <PageHero eyebrow="Academies" title="Application Process">
        The academy process is a yearlong project with admissions, fitness,
        medical, recommendations, interviews, nominations, and backup plans
        moving at the same time.
      </PageHero>
      <AcademiesNav active="application-process" />
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Steps" title="The Academy Admissions Journey" />
          <article className="guide-article">
            <div className="guide-block">
              <h3>Start by researching each academy</h3>
              <p>
                Compare the branch, majors, campus environment, service
                commitment, nomination rules, and career paths after graduation.
                Students should also keep ROTC and civilian college options
                active while they explore.
              </p>
            </div>
            <div className="guide-block">
              <h3>Move from pre-candidate to candidate</h3>
              <p>
                Most applicants begin with a preliminary application or
                pre-candidate questionnaire. Competitive students are then
                invited into a fuller candidate phase with portals, essays,
                recommendations, activities, transcripts, and test scores.
              </p>
            </div>
            <div className="guide-block">
              <h3>Complete fitness, medical, and nomination steps</h3>
              <p>
                The Candidate Fitness Assessment and DoDMERB medical process can
                take time, so students should respond quickly to instructions
                and follow-up requests. Most academies also require a nomination;
                the Coast Guard Academy does not require a congressional
                nomination.
              </p>
            </div>
            <div className="guide-block">
              <h3>Prepare for interviews and final decisions</h3>
              <p>
                Students may interview with nomination panels, academy liaison
                officers, or admissions representatives. An appointment is an
                offer of admission. Students may also see prep school, waitlist,
                ROTC, or civilian college outcomes.
              </p>
            </div>
            <div className="note-band">
              <strong>Application rhythm</strong>
              Treat the academy process like several projects happening at once:
              admissions, nominations, fitness, medical qualification,
              recommendations, and backup plans.
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
