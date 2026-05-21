import { PlaceholderPage } from "@/components/PlaceholderPage";

export default function EnlistmentVsCommissioningPage() {
  return (
    <PlaceholderPage
      eyebrow="Career entry points"
      title="Enlistment vs Commissioning"
      intro="Enlistment and commissioning are both meaningful ways to serve, but they differ in role, training path, education expectations, and career timeline."
      cards={[
        {
          title: "Enlisted careers",
          text: "Enlisted service members often enter after high school, train for a specialty, and build technical or operational expertise."
        },
        {
          title: "Officer careers",
          text: "Officers usually need a college degree and are responsible for leadership, planning, management, and mission execution."
        },
        {
          title: "Education planning",
          text: "Students can compare direct enlistment, college first, ROTC, academies, OCS, and other commissioning programs."
        },
        {
          title: "Questions to ask",
          text: "Ask about job guarantees, contract length, training pipeline, benefits, deployments, and options after the first commitment."
        }
      ]}
    />
  );
}
