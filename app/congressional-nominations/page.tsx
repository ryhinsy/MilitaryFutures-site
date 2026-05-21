import { PlaceholderPage } from "@/components/PlaceholderPage";

export default function CongressionalNominationsPage() {
  return (
    <PlaceholderPage
      eyebrow="Academy requirement"
      title="Congressional Nominations"
      intro="Most applicants to federal Service Academies need a nomination, commonly from a U.S. Representative, Senator, or other authorized source."
      cards={[
        {
          title: "Who needs one",
          text: "Students applying to most federal Service Academies should track nomination requirements alongside the academy application."
        },
        {
          title: "Who provides them",
          text: "Common sources include U.S. Representatives, U.S. Senators, the Vice President, and service-connected nomination categories."
        },
        {
          title: "What to prepare",
          text: "Applications may ask for essays, transcripts, test scores, recommendations, resumes, photos, and interviews."
        },
        {
          title: "Deadline awareness",
          text: "Congressional offices set their own deadlines, often earlier than students expect, so local verification matters."
        }
      ]}
    />
  );
}
