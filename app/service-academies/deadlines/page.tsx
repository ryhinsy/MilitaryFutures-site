import { AcademiesNav } from "@/components/AcademiesNav";
import { PageHero } from "@/components/PageHero";

export default function AcademyDeadlinesPage() {
  return (
    <>
      <AcademiesNav active="deadlines" />

      <PageHero eyebrow="Academies" title="Deadlines">
        Quickly scan academy application windows, nomination requirements, final
        deadlines, and appointment timing. Dates can change, so verify official
        sources annually.
      </PageHero>
    </>
  );
}
