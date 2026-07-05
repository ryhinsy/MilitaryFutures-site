import { AcademiesNav } from "@/components/AcademiesNav";
import { PageHero } from "@/components/PageHero";

export default function ServiceAcademiesPage() {
  return (
    <>
      <AcademiesNav active="overview" />

      <PageHero eyebrow="College + commissioning" title="Service Academies">
        A student guide to federal service academies, officer commissioning,
        academy admissions, and the service commitment after graduation.
      </PageHero>

      <section className="section">
        <div className="container">
          <article className="guide-article">
            <div className="guide-block">
              <h3>What are the Service Academies?</h3>
              <p>
                The United States Service Academies are among the most
                prestigious colleges and universities in the country. They
                include the United States Military Academy (West Point), the
                United States Naval Academy, the United States Air Force
                Academy, the United States Merchant Marine Academy, and the
                United States Coast Guard Academy. Admission is highly
                competitive, with acceptance rates often around 10&ndash;20%
                depending on the academy and admissions cycle. Students receive
                a world-class education, military leadership training, and
                commission as officers upon graduation in exchange for a service
                commitment. If you are interested in serving in the military
                while earning a college degree and developing as a leader, a
                service academy may be the right path for you.
              </p>
            </div>
            <div className="guide-block">
              <h3>What does military life look like at the academies?</h3>
              <p>
                Service academy students are not only full-time college
                students. In addition to working toward a degree, they are
                expected to learn and practice military culture, customs,
                standards, leadership, discipline, and professional expectations
                every day.
              </p>
              <p>
                Students also complete additional required training and
                coursework beyond a typical college schedule. This may include
                military studies, physical education, leadership development,
                inspections, formations, fitness requirements, and other
                academy-specific training. These requirements are part of the
                academy experience and may count toward the student&apos;s academic
                or military development program.
              </p>
              <p>
                One major benefit of attending a service academy is that
                tuition, room, and board are generally fully funded in exchange
                for a service commitment after graduation. Students should still
                verify current details with each academy because benefits, fees,
                and obligations can vary or change.
              </p>
            </div>
            <div className="guide-block">
              <h3>Academics</h3>
              <p>
                Students apply to a full undergraduate program and should
                prepare for demanding coursework, especially in math, science,
                writing, and leadership-heavy majors.
              </p>
            </div>
            <div className="guide-block">
              <h3>Leadership</h3>
              <p>
                Admissions teams look for students who lead in school, work,
                athletics, community service, scouting, clubs, faith groups, or
                family responsibilities.
              </p>
            </div>
            <div className="guide-block">
              <h3>Service Commitment</h3>
              <p>
                Most graduates serve as active duty officers for a required
                period. Students should understand the commitment before
                applying.
              </p>
            </div>
          </article>
        </div>
      </section>

    </>
  );
}
