import { PlaceholderPage } from "@/components/PlaceholderPage";

export default function WisconsinRepresentativesPage() {
  return (
    <PlaceholderPage
      eyebrow="Local nomination research"
      title="Wisconsin Representatives"
      intro="This section will help Wisconsin students identify their congressional district, U.S. Representative, Senators, and nomination application links."
      cards={[
        {
          title: "District lookup",
          text: "Add official lookup tools so families can confirm the student address and current congressional district."
        },
        {
          title: "Representative pages",
          text: "Use each office's official academy nomination page to confirm requirements, submission method, interview process, and stated deadline."
        },
        {
          title: "Senator pages",
          text: "Wisconsin students should also review both U.S. Senators' nomination instructions and timelines."
        },
        {
          title: "Verification note",
          text: "Representative names and deadlines change, so this page should be reviewed every application cycle."
        }
      ]}
    />
  );
}
