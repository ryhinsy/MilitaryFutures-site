import { AcademiesNav } from "@/components/AcademiesNav";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";

const summerPrograms = [
  {
    title: "West Point Summer Leaders Experience",
    for: "High school juniors exploring West Point and Army officer life.",
    window:
      "For Summer 2026, West Point lists the SLE application opening as Feb. 15, 2026 and the final deadline as Apr. 15, 2026.",
    why: "It gives students a short look at cadet academics, military training, athletics, and leadership expectations.",
    href: "https://www.westpoint.edu/admissions/summer-program"
  },
  {
    title: "Naval Academy Summer Seminar",
    for: "High school juniors considering the Naval Academy, Navy, or Marine Corps pathways.",
    window: "For 2026, the application opens Jan. 6, 2026 and closes Mar. 31, 2026.",
    why: "It helps students experience Naval Academy academics, physical training, midshipman life, and leadership activities.",
    href: "https://www.usna.edu/Admissions/Programs/NASS.php"
  },
  {
    title: "Air Force Academy Summer Seminar",
    for: "High school juniors interested in Air Force or Space Force officer pathways.",
    window:
      "The Summer Seminar deadline is Jan. 15; verify current-year opening dates and session details through USAFA admissions.",
    why: "It introduces students to academy academics, cadet life, physical expectations, aviation, space, and technical mission areas.",
    href: "https://www.academyadmissions.com/"
  },
  {
    title: "Coast Guard Academy AIM",
    for: "High school juniors who want to experience Coast Guard Academy life.",
    window:
      "AIM applications usually open in early February; students should apply by Apr. 1 of junior year and verify current scholarship deadlines.",
    why: "AIM gives students a realistic look at cadet life, academics, physical demands, and Coast Guard missions.",
    href: "https://uscga.edu/admissions/aim/"
  },
  {
    title: "Merchant Marine Academy Visits",
    for: "High school juniors, seniors, and college students exploring USMMA.",
    window:
      "USMMA offers admissions visits rather than a direct equivalent to academy summer seminar programs.",
    why: "Visits can include admissions briefings, tours, and a closer look at waterfront campus life and maritime training.",
    href: "https://www.usmma.edu/admissions/admissions-visits"
  }
];

export default function OptionalProgramsPage() {
  return (
    <>
      <AcademiesNav active="optional-programs" />

      <PageHero eyebrow="Academies" title="Optional Programs">
        Summer seminars, academy visits, and exploratory programs can help
        students understand academy life before applying.
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Optional programs" title="Summer Seminars and Academy Summer Programs">
            These programs can help students explore academy life, but they are
            optional and are not required for admission. Dates, eligibility, and
            selection processes can change, so verify each program annually.
          </SectionHeader>
          <article className="guide-article">
            {summerPrograms.map((program) => (
              <div className="guide-block" key={program.title}>
                <h3>{program.title}</h3>
                <p>
                  <strong>Who it is for:</strong> {program.for}
                </p>
                <p>
                  <strong>Application window:</strong> {program.window}
                </p>
                <p>
                  <strong>Why it matters:</strong> {program.why}
                </p>
                <p>
                  Reminder: this program is optional and is not required for
                  admission.
                </p>
                <a className="text-link" href={program.href} rel="noopener noreferrer" target="_blank">
                  Official program information
                </a>
              </div>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
