import { PlaceholderPage } from "@/components/PlaceholderPage";

export default function StudentChecklistPage() {
  return (
    <PlaceholderPage
      eyebrow="Planning tool"
      title="Student Checklist"
      intro="Use this checklist area to turn broad interest into concrete next steps for research, conversations, applications, and preparation."
      cards={[
        {
          title: "Freshman and sophomore year",
          text: "Explore branches, build good academic habits, try leadership activities, and learn basic fitness expectations."
        },
        {
          title: "Junior year",
          text: "Visit campuses, prepare for tests, contact ROTC programs, review academy timelines, and identify nomination requirements."
        },
        {
          title: "Senior year",
          text: "Finalize applications, request recommendations, complete interviews, compare offers, and understand service commitments."
        },
        {
          title: "Family conversations",
          text: "Discuss cost, location, risk, commitment length, career goals, benefits, and what support looks like at home."
        }
      ]}
    />
  );
}
