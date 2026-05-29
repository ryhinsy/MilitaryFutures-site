import { AcademiesNav } from "@/components/AcademiesNav";
import { ComparisonTable } from "@/components/ComparisonTable";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { ComparisonTimeline } from "@/components/Timeline";
import { academyLinks, academyTimelineMilestones } from "@/lib/academy-data";

export default function AcademyDeadlinesPage() {
  return (
    <>
      <PageHero eyebrow="Academies" title="Deadlines">
        Compare universal academy milestones, academy-specific deadlines, and
        appointment windows. Dates vary, so verify official sources annually.
      </PageHero>
      <AcademiesNav active="deadlines" />
      <ComparisonTimeline milestones={academyTimelineMilestones} />
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Deadlines" title="Academy Deadline and Process Notes">
            Students should use official academy websites and congressional
            office websites as the source of truth before submitting materials.
          </SectionHeader>
          <ComparisonTable
            columns={["Process notes", "Nomination note", "Official source placeholder"]}
            rows={[
              {
                label: "U.S. Military Academy at West Point",
                values: [
                  "Begins with candidate information and a full candidate file for competitive applicants.",
                  "Congressional nomination usually required.",
                  "West Point admissions page"
                ]
              },
              {
                label: "U.S. Naval Academy",
                values: [
                  "Students typically begin with preliminary application information, then complete candidate materials.",
                  "Congressional nomination usually required.",
                  "Naval Academy admissions page"
                ]
              },
              {
                label: "U.S. Air Force Academy",
                values: [
                  "Students move from pre-candidate to candidate phases and complete candidate kit requirements.",
                  "Congressional nomination usually required.",
                  "Air Force Academy admissions page"
                ]
              },
              {
                label: "U.S. Coast Guard Academy",
                values: [
                  "Students apply directly through the Coast Guard Academy process.",
                  "Congressional nomination is not required.",
                  "Coast Guard Academy admissions page"
                ]
              },
              {
                label: "U.S. Merchant Marine Academy",
                values: [
                  "Students should pay close attention to maritime-specific obligation information.",
                  "Congressional nomination usually required.",
                  "Merchant Marine Academy admissions page"
                ]
              }
            ]}
          />
          <div className="link-panel spaced-top" aria-label="Official academy links">
            {academyLinks.map((link) => (
              <a href={link.href} key={link.href} rel="noopener noreferrer" target="_blank">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
