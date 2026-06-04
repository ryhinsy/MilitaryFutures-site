import { AcademiesNav } from "@/components/AcademiesNav";
import { Checklist } from "@/components/Checklist";
import { ContentCard } from "@/components/ContentCard";
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
          <div className="content-grid stack-title">
            <ContentCard title="How many can I pursue?" kicker="Apply broadly">
              Students can usually apply to multiple nomination sources in the
              same admissions cycle. A typical applicant may pursue both U.S.
              senators, their U.S. representative, the Vice President, and any
              service-connected sources for which they are eligible.
            </ContentCard>
            <ContentCard title="Different offices, different rules" kicker="Verify locally">
              Each nominating office sets its own deadline, forms, essays,
              recommendation rules, interview process, and academy preference
              instructions. Build a separate checklist for every office.
            </ContentCard>
            <ContentCard title="Year-to-year changes" kicker="Check every cycle">
              Nomination applications are tied to a specific academy admissions
              cycle. Procedures can change from one year to the next, so use
              the current instructions from each senator, representative,
              academy, and eligible service-connected source.
            </ContentCard>
          </div>
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
              Some students may qualify for Vice Presidential,
              Presidential, ROTC, active duty, reserve component, or other
              service-connected nomination categories. Eligibility depends on
              the academy and the student&apos;s circumstances.
            </ContentCard>
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
        <div className="container content-grid two">
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
              "Dress neatly, arrive early, and send follow-up materials quickly"
            ]}
          />
        </div>
      </section>
    </>
  );
}
