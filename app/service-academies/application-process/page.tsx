import { AcademiesNav } from "@/components/AcademiesNav";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Timeline } from "@/components/Timeline";

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
          <Timeline
            items={[
              {
                time: "Step 1",
                title: "Research academies",
                text: "Compare each academy's branch, majors, campus life, service commitment, nomination rules, and career outcomes."
              },
              {
                time: "Step 2",
                title: "Pre-candidate phase",
                text: "Submit preliminary applications or pre-candidate questionnaires and gather transcripts, scores, activities, and leadership examples."
              },
              {
                time: "Step 3",
                title: "Candidate phase",
                text: "Complete candidate portals, essays, recommendations, fitness assessment, medical steps, and interviews."
              },
              {
                time: "Step 4",
                title: "Congressional nominations",
                text: "Most academies require a nomination. Coast Guard Academy does not require a congressional nomination."
              },
              {
                time: "Step 5",
                title: "Candidate Fitness Assessment",
                text: "Train before testing and follow academy instructions for administration and score submission."
              },
              {
                time: "Step 6",
                title: "Medical qualification and DoDMERB",
                text: "Respond quickly to medical exam, record, waiver, or follow-up requests."
              },
              {
                time: "Step 7",
                title: "Recommendations and interviews",
                text: "Prepare adults who know your performance well, then practice clear answers about service, leadership, and resilience."
              },
              {
                time: "Step 8",
                title: "Appointments and final decisions",
                text: "An appointment is an offer of admission. Students may also see prep school, waitlist, ROTC, or civilian college options."
              }
            ]}
          />
        </div>
      </section>
    </>
  );
}
