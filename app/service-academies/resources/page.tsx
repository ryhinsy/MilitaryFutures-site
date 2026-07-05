import { AcademiesNav } from "@/components/AcademiesNav";
import { PageHero } from "@/components/PageHero";

const academyResourceGroups = [
  {
    title: "United States Military Academy (West Point)",
    description:
      "Use West Point admissions pages to verify application steps, portal access, summer program details, and current requirements.",
    links: [
      { label: "Admissions homepage", href: "https://www.westpoint.edu/admissions" },
      { label: "Candidate portal", href: "https://apply.westpoint.edu/" },
      { label: "Summer Leaders Experience", href: "https://www.westpoint.edu/admissions/summer-program" },
      {
        label: "Admissions requirements",
        href: "https://www.westpoint.edu/admissions/steps-admission/admissions-requirements"
      }
    ]
  },
  {
    title: "United States Naval Academy",
    description:
      "Use Naval Academy admissions resources to confirm candidate steps, portal access, summer seminar details, and current application guidance.",
    links: [
      { label: "Admissions homepage", href: "https://www.usna.edu/Admissions/" },
      { label: "Candidate Information System", href: "https://candidateinformation.usna.edu/" },
      { label: "Summer Seminar", href: "https://www.usna.edu/Admissions/Programs/NASS.php" },
      { label: "Admissions requirements", href: "https://www.usna.edu/Admissions/Apply/" }
    ]
  },
  {
    title: "United States Air Force Academy",
    description:
      "Use Air Force Academy admissions resources to confirm the application process, candidate guidance, Summer Seminar, and current requirements.",
    links: [
      { label: "Admissions homepage", href: "https://www.academyadmissions.com/" },
      { label: "Candidate portal", href: "https://www.academyadmissions.com/apply/" },
      {
        label: "Summer Seminar",
        href: "https://www.academyadmissions.com/prepare/high-school/summer-seminar/"
      },
      { label: "Admissions requirements", href: "https://www.academyadmissions.com/requirements/" }
    ]
  },
  {
    title: "United States Coast Guard Academy",
    description:
      "Use Coast Guard Academy admissions resources to verify direct application steps, AIM program details, and current admission requirements.",
    links: [
      { label: "Admissions homepage", href: "https://uscga.edu/admissions/" },
      { label: "AIM Program", href: "https://uscga.edu/admissions/aim/" },
      { label: "Admissions requirements", href: "https://uscga.edu/admissions/admission-requirements/" }
    ]
  },
  {
    title: "United States Merchant Marine Academy",
    description:
      "Use Merchant Marine Academy admissions resources to verify application requirements, visit options, and admissions guidance.",
    links: [
      { label: "Admissions homepage", href: "https://www.usmma.edu/admissions" },
      { label: "Admissions requirements", href: "https://www.usmma.edu/admissions/before-you-apply" },
      { label: "Visit information", href: "https://www.usmma.edu/admissions/admissions-visits" }
    ]
  }
];

const additionalResourceGroups = [
  {
    title: "DoDMERB",
    description:
      "Use the official DoDMERB site for medical qualification information and applicant portal access.",
    links: [{ label: "DoDMERB", href: "https://dodmerb.tricare.osd.mil/" }]
  },
  {
    title: "Candidate Fitness Assessment information",
    description:
      "Review academy admissions guidance for current Candidate Fitness Assessment instructions and expectations.",
    links: [
      {
        label: "West Point admissions requirements",
        href: "https://www.westpoint.edu/admissions/steps-admission/admissions-requirements"
      },
      { label: "Naval Academy application guidance", href: "https://www.usna.edu/Admissions/Apply/" }
    ]
  },
  {
    title: "Official military pay tables",
    description:
      "Use DFAS pay tables when comparing officer pay and compensation assumptions.",
    links: [
      {
        label: "DFAS military pay tables",
        href: "https://www.dfas.mil/MilitaryMembers/payentitlements/Pay-Tables/"
      }
    ]
  },
  {
    title: "Congressional nomination information",
    description:
      "Use official congressional lookup tools to find nomination information from a student's senators and representative.",
    links: [
      { label: "U.S. House representative lookup", href: "https://www.house.gov/representatives/find-your-representative" },
      { label: "U.S. Senate state lookup", href: "https://www.senate.gov/states/statesmap.htm" }
    ]
  },
  {
    title: "Vice Presidential nomination information",
    description:
      "Use the White House nomination page for Vice Presidential nomination details.",
    links: [
      {
        label: "Vice Presidential nomination information",
        href: "https://www.whitehouse.gov/service-academy-nominations/"
      }
    ]
  }
];

export default function AcademyResourcesPage() {
  return (
    <>
      <AcademiesNav active="resources" />

      <PageHero eyebrow="Academies" title="Official Service Academy Resources">
        This page provides official admissions resources for each U.S. Service
        Academy. Because admissions requirements and deadlines can change from
        year to year, students should always verify information directly through
        each academy&apos;s admissions website.
      </PageHero>

      <section className="section">
        <div className="container">
          <article className="guide-article wide">
            <div className="guide-block">
              <h3>Official Academy Admissions Links</h3>
              <p>
                Start with the official academy admissions sites below when
                checking current requirements, portals, summer programs, and
                application steps.
              </p>
            </div>
            {academyResourceGroups.map((group) => (
              <div className="guide-block" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div className="link-panel" aria-label={`${group.title} resources`}>
                  {group.links.map((link) => (
                    <a href={link.href} key={link.href} rel="noopener noreferrer" target="_blank">
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </article>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <article className="guide-article wide">
            <div className="guide-block">
              <h3>Additional Official Resources</h3>
              <p>
                These official references can help students and families verify
                medical, fitness, pay, and nomination details.
              </p>
            </div>
            {additionalResourceGroups.map((group) => (
              <div className="guide-block" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div className="link-panel" aria-label={`${group.title} resources`}>
                  {group.links.map((link) => (
                    <a href={link.href} key={link.href} rel="noopener noreferrer" target="_blank">
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
