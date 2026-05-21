import { PlaceholderPage } from "@/components/PlaceholderPage";

export default function ServiceAcademiesPage() {
  return (
    <PlaceholderPage
      eyebrow="College + commissioning"
      title="Service Academies"
      intro="Learn how the U.S. Service Academies combine a college education, military training, leadership development, and a service commitment after graduation."
      cards={[
        {
          title: "Academies to compare",
          text: "Future content can cover West Point, Naval Academy, Air Force Academy, Coast Guard Academy, and Merchant Marine Academy."
        },
        {
          title: "Application pieces",
          text: "Students usually need strong academics, leadership, fitness preparation, recommendations, interviews, and early deadline tracking."
        },
        {
          title: "Service commitment",
          text: "Academy graduates typically commission as officers and serve for a required period after graduation."
        },
        {
          title: "Good next step",
          text: "Build a timeline during sophomore or junior year so testing, fitness, visits, and nominations do not collide."
        }
      ]}
    />
  );
}
