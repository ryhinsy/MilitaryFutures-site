import { AcademiesNav } from "@/components/AcademiesNav";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Timeline } from "@/components/Timeline";

export default function AcademyNominationsPage() {
  return (
    <>
      <PageHero eyebrow="Academies" title="Congressional Nominations">
        Most Service Academies require a nomination, but the Coast Guard Academy
        does not require a congressional nomination. A nomination is not the
        same as an appointment.
      </PageHero>
      <AcademiesNav active="congressional-nominations" />
      <section className="section">
        <div className="container">
          <SectionHeader title="Nomination Sources" />
          <div className="note-band stack-title">
            <strong>Important Coast Guard Academy Exception</strong>
            <p>
              Most federal service academies require a congressional nomination
              as part of the admissions process.
            </p>
            <p>
              The U.S. Coast Guard Academy is the major exception. Students
              apply directly through the Coast Guard Academy admissions process
              and do not need a congressional nomination.
            </p>
            <p>
              Always verify current requirements through official academy
              admissions websites because policies and procedures can change.
            </p>
          </div>
          <article className="guide-article stack-title">
            <div className="guide-block">
              <h3>Students can usually pursue more than one source</h3>
              <p>
                A typical applicant may apply to both U.S. senators, their U.S.
                representative, the Vice President, and any service-connected
                source for which they are eligible. Applying broadly can help,
                but every office has its own process.
              </p>
            </div>
            <div className="guide-block">
              <h3>Common nomination sources</h3>
              <ul className="guide-list">
                <li>U.S. senators from the student&apos;s home state.</li>
                <li>The U.S. representative for the student&apos;s congressional district.</li>
                <li>The Vice President nomination process.</li>
                <li>Service-connected categories when a student is eligible.</li>
              </ul>
            </div>
            <div className="guide-block">
              <h3>Rules vary by office and year</h3>
              <p>
                Each nominating office sets its own deadline, forms, essays,
                recommendation rules, interview process, and academy preference
                instructions. Nomination applications are tied to a specific
                admissions cycle, so students should verify current rules every
                year.
              </p>
            </div>
          </article>
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
            <a
              href="https://www.whitehouse.gov/service-academy-nominations/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Vice Presidential nomination information
            </a>
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
