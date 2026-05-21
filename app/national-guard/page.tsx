import { PlaceholderPage } from "@/components/PlaceholderPage";

export default function NationalGuardPage() {
  return (
    <PlaceholderPage
      eyebrow="Local + federal service"
      title="National Guard"
      intro="The National Guard and Air National Guard allow service members to serve part time in their state while also being available for federal missions."
      cards={[
        {
          title: "Army National Guard",
          text: "The Army National Guard includes combat, support, technical, aviation, medical, and leadership roles connected to state and federal needs."
        },
        {
          title: "Air National Guard",
          text: "The Air National Guard often centers on aviation, cyber, intelligence, maintenance, security forces, medical, and mission support roles."
        },
        {
          title: "State benefits",
          text: "Benefits can vary by state, so Wisconsin-specific tuition and education options should be verified with official sources."
        },
        {
          title: "Lifestyle fit",
          text: "Students should understand drill schedules, training periods, activation possibilities, and how service fits with school or work."
        }
      ]}
    />
  );
}
