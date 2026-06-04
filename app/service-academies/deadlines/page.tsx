import { AcademiesNav } from "@/components/AcademiesNav";
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
