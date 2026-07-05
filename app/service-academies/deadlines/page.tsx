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
        text: "West Point lists Feb. 15 as the USMA application opening date for the 2026 cycle. Verify the current cycle in the admissions portal."
      },
      {
        title: "Summer Leaders Experience",
        text: "For Summer 2026, West Point lists the SLE application final deadline as Apr. 15, 2026."
      },
      {
        title: "Nomination Requirement",
        text: "A congressional or other authorized nomination is usually required."
      },
      {
        title: "Final Application",
        text: "The Candidate Checklist deadline is Jan. 31 of senior year. Verify annually with West Point Admissions."
      },
      {
        title: "Medical Exam Window",
        text: "West Point's timeline places the medical exam window from July 1 through Apr. 1 where applicable."
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
        text: "The Naval Academy preliminary application generally begins during junior year. Verify the current candidate portal timing annually."
      },
      {
        title: "Summer Seminar",
        text: "For 2026, Naval Academy Summer Seminar opens Jan. 6, 2026 and closes Mar. 31, 2026."
      },
      {
        title: "Nomination Requirement",
        text: "A nomination from an official source is usually required."
      },
      {
        title: "Final Application",
        text: "The admissions application submission deadline is Jan. 31. Verify annually with Naval Academy Admissions."
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
        text: "The Air Force Academy Pre-Candidate Questionnaire opens Mar. 1 and the deadline is Dec. 31."
      },
      {
        title: "Summer Seminar",
        text: "The Air Force Academy Summer Seminar deadline is Jan. 15. Verify the current year's opening date and session details."
      },
      {
        title: "Nomination Requirement",
        text: "A congressional or other authorized nomination is usually required."
      },
      {
        title: "Final Application",
        text: "The Pre-Candidate Questionnaire deadline is Dec. 31, and candidate-phase deadlines should be verified in the portal annually."
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
        text: "Students apply directly through the Coast Guard Academy admissions process; no congressional nomination is required."
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
        text: "Early Action decisions are released by Dec. 23. Regular Admission decisions are released by Apr. 1."
      },
      {
        title: "Important Note",
        text: "Appointment acceptance is due May 1. Coast Guard Academy is the major federal service academy exception for congressional nominations."
      }
    ]
  },
  {
    academy: "Merchant Marine Academy",
    deadlines: [
      {
        title: "Application Opens",
        text: "USMMA applications are typically open before senior year. Verify the current applicant portal timing annually."
      },
      {
        title: "Visit Opportunities",
        text: "Verify current visit, outreach, and admissions event opportunities through USMMA Admissions."
      },
      {
        title: "Nomination Requirement",
        text: "Nominations must be received by Jan. 31. USMMA does not accept Vice Presidential or military service-connected nominations."
      },
      {
        title: "Final Application",
        text: "The completed application deadline is Feb. 1 of the year of entry. Verify the current class deadline annually."
      },
      {
        title: "Appointment Window",
        text: "Decisions are typically released by spring, after application, nomination, medical, and fitness requirements are reviewed."
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
      <AcademiesNav active="deadlines" />

      <PageHero eyebrow="Academies" title="Deadlines">
        Quickly scan academy application windows, nomination requirements, final
        deadlines, and appointment timing. Dates can change, so verify official
        sources annually.
      </PageHero>
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
