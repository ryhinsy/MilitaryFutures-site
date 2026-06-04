import { AcademiesNav } from "@/components/AcademiesNav";
import { DeadlineFlipCards, type DeadlineFlipCard } from "@/components/DeadlineFlipCards";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { academyLinks } from "@/lib/academy-data";

const deadlineCards: DeadlineFlipCard[] = [
  {
    academy: "West Point",
    location: "West Point, NY",
    summary: "Pre-candidate steps often begin junior spring; final application is typically due Jan 31.",
    details: [
      "Preliminary application: Pre-Candidate Questionnaire usually opens in February of junior year.",
      "Summer program: Summer Leaders Experience applications are usually open Jan-Mar.",
      "Nomination requirement: Congressional or other authorized nomination usually required.",
      "Final application: typically Jan 31; verify annually with West Point Admissions.",
      "Decisions: appointments usually release Jan-Apr, with final notifications often by May."
    ]
  },
  {
    academy: "Naval Academy",
    location: "Annapolis, MD",
    summary: "Preliminary application usually opens in April; final application is typically due Jan 31.",
    details: [
      "Preliminary application: usually opens in April of junior year.",
      "Summer program: Summer Seminar applications are usually open Jan-Mar.",
      "Nomination requirement: nomination from an official source is usually required.",
      "Final application: typically Jan 31; verify annually with Naval Academy Admissions.",
      "Decisions: appointments may release from late fall through April."
    ]
  },
  {
    academy: "Air Force Academy",
    location: "Colorado Springs, CO",
    summary: "Candidate Kit often opens in July; final application is typically due Dec 31.",
    details: [
      "Preliminary application: Pre-Candidate Questionnaire usually opens in March of junior year.",
      "Summer program: Summer Seminar applications are usually open Dec-Jan.",
      "Nomination requirement: congressional or other authorized nomination usually required.",
      "Final application: typically Dec 31; verify annually with Air Force Academy Admissions.",
      "Decisions: major appointment period is usually Feb-Apr."
    ]
  },
  {
    academy: "Coast Guard Academy",
    location: "New London, CT",
    summary: "No congressional nomination required; Early Action is Oct 15 and Regular Admission is usually Feb 2.",
    details: [
      "Preliminary application: students apply directly through the Coast Guard Academy process.",
      "Summer program: admissions programs and visits may vary; verify current opportunities.",
      "Nomination requirement: congressional nominations are not required or considered.",
      "Final application: Early Action is listed as Oct 15; Regular Admission for U.S. citizens is usually Feb 2.",
      "Decisions: Early Action decisions are usually in December; Regular Admission decisions are usually in March."
    ]
  },
  {
    academy: "Merchant Marine Academy",
    location: "Kings Point, NY",
    summary: "Application usually opens junior spring; final application is typically around Feb 1.",
    details: [
      "Preliminary application: application usually opens in spring of junior year.",
      "Summer program: verify current visit and outreach opportunities through USMMA Admissions.",
      "Nomination requirement: congressional nomination is generally required, with USMMA-specific rules.",
      "Final application: typically around Feb 1; nomination receipt deadlines may also apply.",
      "Decisions: appointments often release during winter and spring, commonly Feb-Apr."
    ]
  }
];

export default function AcademyDeadlinesPage() {
  return (
    <>
      <PageHero eyebrow="Academies" title="Deadlines">
        Quickly scan academy application windows, nomination requirements, final
        deadlines, and appointment timing. Dates can change, so verify official
        sources annually.
      </PageHero>
      <AcademiesNav active="deadlines" />
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Flip cards" title="Academy Deadlines at a Glance">
            Open each card to see the application windows students and parents
            should track. Treat every date as a planning guide until confirmed
            on the official academy website for the current admissions cycle.
          </SectionHeader>
          <DeadlineFlipCards cards={deadlineCards} />
          <div className="note-band spaced-top">
            <strong>Deadline reminder</strong>
            Academy deadlines, nomination deadlines, testing policies, and
            medical follow-up timing can change. Students should use official
            academy portals and their nominating offices as the final source of
            truth.
          </div>
          <div className="link-panel spaced-top" aria-label="Official academy links">
            {academyLinks.map((link) => (
              <a href={link.href} key={link.href} rel="noopener noreferrer" target="_blank">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
