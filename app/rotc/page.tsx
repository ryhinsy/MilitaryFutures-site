import { PlaceholderPage } from "@/components/PlaceholderPage";

export default function RotcPage() {
  return (
    <PlaceholderPage
      eyebrow="College route"
      title="ROTC"
      intro="ROTC lets students attend a civilian college while training toward a future officer commission, with scholarship and non-scholarship options."
      cards={[
        {
          title: "Programs",
          text: "Compare Army ROTC, Navy ROTC, Marine-option Navy ROTC, Air Force ROTC, and Space Force opportunities."
        },
        {
          title: "Scholarships",
          text: "Scholarship processes vary by branch and can include national applications, campus-based awards, and service commitments."
        },
        {
          title: "Campus fit",
          text: "Students should compare majors, host campuses, cross-town options, battalion culture, and travel requirements."
        },
        {
          title: "Officer outcome",
          text: "Successful ROTC students commission as officers after college and move into branch-specific training."
        }
      ]}
    />
  );
}
