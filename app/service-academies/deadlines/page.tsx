import { AcademiesNav } from "@/components/AcademiesNav";
import { DeadlineFlipCards, type DeadlineFlipCard } from "@/components/DeadlineFlipCards";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { academyLinks } from "@/lib/academy-data";

const deadlineCards: DeadlineFlipCard[] = [
  {
    academy: "West Point",
    deadlines: [
      {
        title: "Preliminary Application",
        text: "The Pre-Candidate Questionnaire usually opens in February of junior year."
      },
      {
        title: "Summer Leaders Experience",
        text: "SLE applications are usually open from January through March."
      },
      {
        title: "Nomination Requirement",
        text: "A congressional or other authorized nomination is usually required."
      },
      {
        title: "Final Application",
        text: "The final application deadline is typically January 31. Verify annually with West Point Admissions."
      },
      {
        title: "Appointment Window",
        text: "Appointments usually release January through April, with final notifications often by May."
      },
      {
        title: "Important Note",
        text: "A nomination is required for most applicants, but it does not guarantee an appointment."
      }
    ]
  },
  {
    academy: "Naval Academy",
    deadlines: [
      {
        title: "Preliminary Application",
        text: "The preliminary application usually opens in April of junior year."
      },
      {
        title: "Summer Seminar",
        text: "Summer Seminar applications are usually open from January through March."
      },
      {
        title: "Nomination Requirement",
        text: "A nomination from an official source is usually required."
      },
      {
        title: "Final Application",
        text: "The final application deadline is typically January 31. Verify annually with Naval Academy Admissions."
      },
      {
        title: "Appointment Window",
        text: "Appointments may release from late fall through April."
      },
      {
        title: "Important Note",
        text: "Students should keep academy, nomination, medical, and backup college plans moving at the same time."
      }
    ]
  },
  {
    academy: "Air Force Academy",
    deadlines: [
      {
        title: "Pre-Candidate Questionnaire",
        text: "The Pre-Candidate Questionnaire usually opens in March of junior year."
      },
      {
        title: "Summer Seminar",
        text: "Summer Seminar applications are usually open from December through January."
      },
      {
        title: "Nomination Requirement",
        text: "A congressional or other authorized nomination is usually required."
      },
      {
        title: "Final Application",
        text: "The final application deadline is typically December 31. Verify annually with Air Force Academy Admissions."
      },
      {
        title: "Appointment Window",
        text: "The major appointment period is usually February through April."
      },
      {
        title: "Important Note",
        text: "Eligible candidates usually receive a Candidate Kit around July before senior year."
      }
    ]
  },
  {
    academy: "Coast Guard Academy",
    deadlines: [
      {
        title: "Direct Application",
        text: "Students apply directly through the Coast Guard Academy admissions process."
      },
      {
        title: "Admissions Programs",
        text: "Admissions programs and visit opportunities may vary. Verify current options on the official admissions site."
      },
      {
        title: "Nomination Requirement",
        text: "Congressional nominations are not required or considered."
      },
      {
        title: "Final Application",
        text: "Early Action is listed as October 15. Regular Admission for U.S. citizens is usually February 2."
      },
      {
        title: "Decision Window",
        text: "Early Action decisions are usually in December. Regular Admission decisions are usually in March."
      },
      {
        title: "Important Note",
        text: "Coast Guard Academy is the major federal service academy exception for congressional nominations."
      }
    ]
  },
  {
    academy: "Merchant Marine Academy",
    deadlines: [
      {
        title: "Application Opens",
        text: "The application usually opens in spring of junior year."
      },
      {
        title: "Visit Opportunities",
        text: "Verify current visit, outreach, and admissions event opportunities through USMMA Admissions."
      },
      {
        title: "Nomination Requirement",
        text: "A congressional nomination is generally required, with USMMA-specific rules."
      },
      {
        title: "Final Application",
        text: "The final application is typically around February 1. Nomination receipt deadlines may also apply."
      },
      {
        title: "Appointment Window",
        text: "Appointments often release during winter and spring, commonly February through April."
      },
      {
        title: "Important Note",
        text: "USMMA nomination rules differ from several other academies, so students should verify current requirements carefully."
      }
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
