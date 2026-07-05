import { AcademiesNav } from "@/components/AcademiesNav";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Timeline } from "@/components/Timeline";

export default function AcademyApplicationProcessPage() {
  return (
    <>
      <AcademiesNav active="application-process" />

      <PageHero eyebrow="Academies" title="Application Process">
        The academy process is a yearlong project with admissions, fitness,
        medical, recommendations, interviews, nominations, and backup plans
        moving at the same time.
      </PageHero>
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
              <h3>Applications and nominations work together</h3>
              <p>
                The application process for the academies is one of the things
                that makes these colleges so highly regarded. Each of the
                academies besides the Coast Guard Academy includes pre-candidate
                questionnaires. These usually open during your junior year of
                high school. They are required before the final application
                process, which usually opens around July before senior year.
              </p>
              <p>
                Compared to most colleges, several service academies also
                require a congressional nomination. This includes the Air Force
                Academy, Naval Academy, West Point, and the Merchant Marine
                Academy. The Coast Guard Academy does not require a
                congressional nomination.
              </p>
            </div>
            <div className="guide-block">
              <h3>What is a Congressional Nomination?</h3>
              <p>
                A congressional nomination is a recommendation from a U.S.
                senator, U.S. representative, or the Vice President. It is
                required for most federal service academies, except the Coast
                Guard Academy.
              </p>
              <p>
                A typical applicant may apply to both U.S. senators, their U.S.
                representative, the Vice President, and any service-connected
                source for which they are eligible. Applying broadly can help,
                but every office has its own process.
              </p>
              <p>
                Each nominating office sets its own deadline, forms, essays,
                recommendation rules, interview process, and academy preference
                instructions. Nomination applications are tied to a specific
                admissions cycle, so students should verify current rules every
                year.
              </p>
              <div className="resource-group">
                <h4>Official Nomination Resources</h4>
                <p>
                  Use the official resources below to learn about nomination
                  requirements and application procedures.
                </p>
                <div className="link-panel" aria-label="Official nomination resources">
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
                  <a
                    href="https://www.whitehouse.gov/service-academy-nominations/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Vice Presidential nomination information
                  </a>
                </div>
              </div>
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
          <div className="link-panel spaced-top" aria-label="Official academy nomination links">
            <a
              href="https://www.westpoint.edu/admissions/steps-to-admission"
              rel="noopener noreferrer"
              target="_blank"
            >
              West Point nomination guidance
            </a>
            <a
              href="https://usna.edu/Admissions/Apply/Nomination-Sources.php"
              rel="noopener noreferrer"
              target="_blank"
            >
              Naval Academy nomination sources
            </a>
            <a
              href="https://www.academyadmissions.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Air Force Academy admissions
            </a>
            <a
              href="https://www.usmma.edu/admissions/apply-nomination"
              rel="noopener noreferrer"
              target="_blank"
            >
              Merchant Marine Academy nomination guidance
            </a>
            <a
              href="https://uscga.edu/admissions/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Coast Guard Academy admissions
            </a>
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <SectionHeader eyebrow="Timeline" title="Nomination Planning Timeline" />
          <Timeline
            items={[
              {
                time: "Junior spring",
                title: "Identify offices",
                text: "Confirm your congressional district, bookmark both senators' nomination pages, and create one deadline tracker."
              },
              {
                time: "Summer before senior year",
                title: "Draft the packet",
                text: "Prepare essays, resume, activity list, transcript requests, test scores, and recommendation requests."
              },
              {
                time: "Senior fall",
                title: "Submit and interview",
                text: "Many offices set fall deadlines and may use panel interviews. Submit early and practice concise answers."
              },
              {
                time: "Winter",
                title: "Monitor academy status",
                text: "A nomination does not guarantee an appointment. Keep academy portals, medical steps, and backup plans active."
              }
            ]}
          />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeader title="Documents and Interview Preparation" />
          <div className="guide-columns">
            <div>
              <h3>Common documents</h3>
              <ul>
                <li>Completed nomination application form.</li>
                <li>High school transcript and test scores if requested.</li>
                <li>Activities, employment, athletics, and leadership resume.</li>
                <li>Personal essay or motivation statement.</li>
                <li>Letters of recommendation.</li>
                <li>Academy preference ranking if requested.</li>
              </ul>
            </div>
            <div>
              <h3>Interview preparation</h3>
              <ul>
                <li>Explain why you want to serve as an officer.</li>
                <li>Know why each academy on your list fits your goals.</li>
                <li>Prepare examples of leadership, teamwork, failure, and resilience.</li>
                <li>Practice concise answers with a counselor, teacher, or mentor.</li>
                <li>Be ready to discuss ROTC or civilian college backup plans.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
