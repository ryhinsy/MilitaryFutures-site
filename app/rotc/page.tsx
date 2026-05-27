import { ContentCard } from "@/components/ContentCard";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";

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
    </>
  );
}
