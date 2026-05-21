import { PlaceholderPage } from "@/components/PlaceholderPage";

export default function ResourcesPage() {
  return (
    <PlaceholderPage
      eyebrow="Official links + references"
      title="Resources"
      intro="A future home for official military, academy, ROTC, Guard, congressional, scholarship, testing, and student planning resources."
      cards={[
        {
          title: "Official sources",
          text: "Prioritize official branch, academy, ROTC, Guard, and congressional office websites for requirements and deadlines."
        },
        {
          title: "Counselor tools",
          text: "Add printable timelines, comparison worksheets, question lists, and parent meeting guides."
        },
        {
          title: "Student support",
          text: "Include plain-language explainers for acronyms, military ranks, commitments, benefits, and career families."
        },
        {
          title: "Update cadence",
          text: "Because policies and deadlines change, resource pages should show when they were last reviewed."
        }
      ]}
    />
  );
}
