import { ContentCard } from "@/components/ContentCard";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Timeline } from "@/components/Timeline";

const rotcLinks = [
  {
    label: "Army ROTC school search",
    href: "https://www.goarmy.com/careers-and-jobs/find-your-path/army-officers/rotc/find-schools.ALL-UPR.results.html"
  },
  {
    label: "Navy/Marine ROTC schools",
    href: "https://www.netc.navy.mil/NSTC/NROTC/Navy-ROTC-Schools/"
  },
  {
    label: "Air Force ROTC college locator",
    href: "https://www.afrotc.com/college-locator/"
  }
];

const scholarshipLinks = [
  {
    label: "Army ROTC scholarship application",
    href: "https://armyrotc.army.mil/scholarships/"
  },
  {
    label: "Navy ROTC scholarship information",
    href: "https://www.netc.navy.mil/NSTC/NROTC/"
  },
  {
    label: "Air Force ROTC scholarship information",
    href: "https://www.afrotc.com/scholarships/"
  }
];

export default function RotcPage() {
  return (
    <>
      <PageHero eyebrow="College route" title="ROTC">
        ROTC lets students attend college while preparing to commission as
        officers. Students can apply for scholarships, join a campus program, or
        participate through a nearby cross-town school.
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHeader title="Find Colleges That Offer ROTC">
            Not every college hosts every ROTC branch directly. Some students
            enroll at one school but complete ROTC through a nearby host campus
            or cross-town agreement.
          </SectionHeader>
          <div className="content-grid">
            <ContentCard title="Army ROTC" kicker="Army">
              Army ROTC is available through host programs and partner schools.
              Students should search by school or state, then contact the local
              battalion to confirm scholarship, enrollment, and cross-town
              options.
            </ContentCard>
            <ContentCard title="Navy/Marine ROTC" kicker="Navy + Marine Corps">
              NROTC units prepare students for Navy or Marine Corps commissions.
              Students should verify whether a school hosts a unit, participates
              as a cross-town school, or has Marine-option availability.
            </ContentCard>
            <ContentCard title="Air Force/Space Force ROTC" kicker="Air + Space">
              AFROTC detachments support Air Force and Space Force officer
              pathways. Students should use the college locator to find host
              detachments and cross-town schools.
            </ContentCard>
          </div>
          <div className="link-panel spaced-top" aria-label="Official ROTC locator links">
            {rotcLinks.map((link) => (
              <a href={link.href} key={link.href} rel="noopener noreferrer" target="_blank">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeader eyebrow="Applications" title="When to Apply for ROTC">
            ROTC has two common entry points: national scholarship applications
            during high school and regular ROTC enrollment after a student starts
            college. Dates change, so students should verify deadlines every
            year with the official branch pages and the campus ROTC unit.
          </SectionHeader>
          <Timeline
            items={[
              {
                time: "Junior Year",
                title: "Research ROTC branches and colleges",
                text: "Compare Army, Navy/Marine, and Air Force/Space Force ROTC options, majors, host campuses, cross-town schools, and scholarship requirements."
              },
              {
                time: "Summer before Senior Year",
                title: "Prepare applications and fitness",
                text: "Gather transcripts, test scores if required, activities, recommendations, medical history, and begin branch-specific fitness preparation."
              },
              {
                time: "Senior Year Fall",
                title: "Submit scholarship applications",
                text: "National scholarship applications are usually active during senior year. Submit early enough to handle interviews, missing documents, and portal issues."
              },
              {
                time: "Senior Year Winter/Spring",
                title: "Scholarship boards and decisions",
                text: "Branches usually review applicants through board or selection periods. Students may hear back in waves and should keep college backup plans active."
              },
              {
                time: "College Freshman Year",
                title: "Join ROTC without a national scholarship",
                text: "Students can often enroll in ROTC after starting college, then ask about campus-based scholarships, contracting requirements, and cross-town participation."
              }
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader title="ROTC Scholarship Application Paths">
            These cards summarize common planning windows. They are not a
            substitute for official branch instructions.
          </SectionHeader>
          <div className="content-grid">
            <ContentCard title="Army ROTC Scholarship" kicker="Army">
              <ul>
                <li>Applications typically open after junior year or before senior year.</li>
                <li>Students usually complete online forms, school choices, records, and an interview.</li>
                <li>Army scholarship boards usually review applicants in multiple rounds.</li>
                <li>Students may hear back after board periods or later in senior year.</li>
                <li>Verify dates every year on the official Army ROTC scholarship page.</li>
              </ul>
            </ContentCard>
            <ContentCard title="Navy/Marine ROTC Scholarship" kicker="Navy + Marine">
              <ul>
                <li>Students can usually begin the process during junior or senior year.</li>
                <li>The application may include school choices, recommendations, fitness, and an officer interview.</li>
                <li>Review periods can vary by program option and application cycle.</li>
                <li>Students may receive updates in waves as applications are reviewed.</li>
                <li>Verify dates every year through official NROTC sources.</li>
              </ul>
            </ContentCard>
            <ContentCard title="Air Force/Space Force ROTC Scholarship" kicker="Air + Space">
              <ul>
                <li>High school scholarship program timing can change by academic year.</li>
                <li>Applicants usually complete a portal application, eligibility steps, interview, and fitness requirements.</li>
                <li>Selection boards or review periods are published in current applicant guidance.</li>
                <li>Students may hear back after scheduled review periods.</li>
                <li>Verify dates every year on official AFROTC scholarship guidance.</li>
              </ul>
            </ContentCard>
          </div>
          <div className="link-panel spaced-top" aria-label="Official ROTC scholarship links">
            {scholarshipLinks.map((link) => (
              <a href={link.href} key={link.href} rel="noopener noreferrer" target="_blank">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container content-grid two">
          <ContentCard title="Regular ROTC Enrollment" kicker="No national scholarship required">
            <ul>
              <li>Students can often join ROTC after enrolling in college without a national scholarship.</li>
              <li>Contact the ROTC unit at the college before registering for classes.</li>
              <li>Ask how to enroll in the freshman ROTC class, leadership lab, and physical training.</li>
              <li>Ask about campus-based scholarships after joining the program.</li>
              <li>Confirm cross-town agreements if the college does not host that branch directly.</li>
            </ul>
          </ContentCard>
          <ContentCard title="Requirements to Confirm" kicker="Before enrolling">
            <ul>
              <li>Physical fitness expectations and testing schedule.</li>
              <li>Academic requirements and major restrictions, if any.</li>
              <li>Citizenship and age requirements for scholarship or contracting.</li>
              <li>Medical qualification steps before contracting or scholarship activation.</li>
              <li>Service obligation rules before accepting a scholarship or signing a contract.</li>
            </ul>
          </ContentCard>
        </div>
      </section>
    </>
  );
}
