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
            <strong>Important exception:</strong>
            The U.S. Coast Guard Academy does not require a congressional
            nomination. Students apply directly through the Coast Guard Academy
            admissions process.
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
              Some students may qualify for Vice Presidential or
              service-connected nomination categories. Academy admissions teams
              can help students understand which categories may apply.
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
