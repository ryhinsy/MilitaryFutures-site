import { Checklist } from "@/components/Checklist";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ContentCard } from "@/components/ContentCard";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Timeline } from "@/components/Timeline";

export default function CongressionalNominationsPage() {
  return (
    <>
      <PageHero eyebrow="Academy requirement" title="Congressional Nominations">
        A nomination is a separate application step for most Service Academy
        applicants. Students usually apply through their U.S. Representative,
        both U.S. Senators, and any service-connected category that fits.
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHeader title="Wisconsin Nomination Sources">
            Wisconsin students should check the current nomination instructions
            for their two U.S. Senators and their own U.S. Representative.
          </SectionHeader>
          <div className="content-grid">
            <ContentCard title="Sen. Tammy Baldwin" kicker="Wisconsin senator">
              Review Senator Baldwin&apos;s official academy nomination page for
              the current deadline, packet requirements, and submission method.
            </ContentCard>
            <ContentCard title="Sen. Ron Johnson" kicker="Wisconsin senator">
              Review Senator Johnson&apos;s official academy nomination page for
              the current deadline, interview process, and required documents.
            </ContentCard>
            <ContentCard title="Your U.S. Representative" kicker="House district">
              Use the student&apos;s home address to confirm the congressional
              district. Each House office sets its own deadline and process.
            </ContentCard>
          </div>
          <div className="note-band spaced-top">
            <strong>Why the local check matters</strong>
            <p>
              Congressional offices can change deadlines, forms, interview
              formats, and submission portals each cycle. Always use the
              official office website before sending documents.
            </p>
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
                text: "Prepare essays, resume, activity list, transcript requests, test score reports, and recommendation requests."
              },
              {
                time: "Early senior fall",
                title: "Submit applications",
                text: "Many offices set fall deadlines. Submit early enough to solve transcript, portal, or recommendation problems."
              },
              {
                time: "Fall to early winter",
                title: "Interview",
                text: "Some offices use panels. Practice explaining your motivation, academy choice, leadership experience, and backup plan."
              },
              {
                time: "Winter",
                title: "Monitor academy status",
                text: "A nomination does not guarantee an appointment. Keep academy portals, medical steps, and alternate plans active."
              }
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Compare" title="Common Nomination Sources" />
          <ComparisonTable
            columns={["Who applies", "What to check", "Student strategy"]}
            rows={[
              {
                label: "U.S. Representative",
                values: [
                  "Students living in that congressional district",
                  "District-specific forms, deadline, interview rules, and academy preference rules",
                  "Apply through the representative for the address where the student legally resides."
                ]
              },
              {
                label: "U.S. Senators",
                values: [
                  "Students who are Wisconsin residents",
                  "Each senator's packet requirements, deadline, and interview process",
                  "Apply to both senators unless an office gives different guidance."
                ]
              },
              {
                label: "Vice President",
                values: [
                  "Eligible students nationwide",
                  "Official academy and Vice Presidential nomination instructions",
                  "Use as an additional nomination path, not as the only plan."
                ]
              },
              {
                label: "Service-connected",
                values: [
                  "Students with qualifying military family or service circumstances",
                  "Eligibility category, documentation, and academy instructions",
                  "Ask the academy admissions team which category may apply."
                ]
              }
            ]}
          />
        </div>
      </section>

      <section className="section alt">
        <div className="container content-grid two">
          <Checklist
            title="Document Checklist"
            items={[
              "Completed nomination application form",
              "Official or unofficial high school transcript as requested",
              "ACT or SAT score report if required by the office",
              "Resume or activities list with leadership roles",
              "Personal essay or statement of motivation",
              "Letters of recommendation",
              "Recent photo if requested",
              "Academy preference ranking if requested",
              "Proof of residency or district information if requested"
            ]}
          />
          <Checklist
            title="Interview Preparation"
            items={[
              "Explain why you want to attend a Service Academy",
              "Describe the difference between serving as an officer and simply attending college",
              "Prepare examples of leadership, failure, teamwork, and responsibility",
              "Know your preferred academy and why it fits your goals",
              "Be ready to discuss your backup plan, including ROTC or civilian college",
              "Practice concise answers without sounding memorized",
              "Dress neatly and arrive early for in-person interviews"
            ]}
          />
        </div>
      </section>
    </>
  );
}
