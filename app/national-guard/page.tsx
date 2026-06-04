import { ComparisonTable } from "@/components/ComparisonTable";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Timeline } from "@/components/Timeline";

export default function NationalGuardPage() {
  return (
    <>
      <PageHero eyebrow="Local + federal service" title="National Guard">
        The National Guard lets students serve part time in their state while
        staying connected to federal military missions. It can support school,
        work, career training, and local service, but students should understand
        activation and training obligations.
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHeader title="What Makes the Guard Different">
            Guard service is often described as part-time, but it is still a real
            military commitment. Members train regularly, attend job school, and
            can be activated for state emergencies or federal missions.
          </SectionHeader>
          <article className="guide-article">
            <div className="guide-block">
              <h3>State mission</h3>
              <p>
                Guard members can support emergencies such as severe weather,
                public safety needs, disaster response, and other state-directed
                missions.
              </p>
            </div>
            <div className="guide-block">
              <h3>Federal mission</h3>
              <p>
                Guard units can also deploy or activate under federal authority,
                depending on branch needs, unit mission, and world events.
              </p>
            </div>
            <div className="guide-block">
              <h3>Civilian life</h3>
              <p>
                Many members balance Guard service with college,
                apprenticeships, full-time work, family responsibilities, and
                community life.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeader eyebrow="Compare" title="Army National Guard vs Air National Guard" />
          <ComparisonTable
            columns={["Army National Guard", "Air National Guard"]}
            rows={[
              {
                label: "Service connection",
                values: [
                  "Part of the Army structure, with state and federal roles.",
                  "Part of the Air Force structure, with state and federal roles."
                ]
              },
              {
                label: "Common job areas",
                values: [
                  "Infantry, aviation, logistics, engineering, medical, cyber, intelligence, maintenance, and support.",
                  "Aircraft maintenance, security forces, cyber, intelligence, medical, logistics, operations, and mission support."
                ]
              },
              {
                label: "Training rhythm",
                values: [
                  "Basic combat training, job training, regular drill, annual training, and possible activations.",
                  "Basic military training, technical school, regular drill, annual training, and possible activations."
                ]
              },
              {
                label: "Student fit",
                values: [
                  "Good for students interested in Army missions, field leadership, ground operations, or broad unit types.",
                  "Good for students interested in aviation, technical systems, base operations, or Air Force-style missions."
                ]
              }
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="guide-columns">
            <div>
              <h3>Best for</h3>
            <ul>
              <li>Students who want to serve while staying connected to their state.</li>
              <li>Students interested in part-time service with military job training.</li>
              <li>Students who want to combine college, work, and service.</li>
              <li>Students who understand that activation can interrupt normal plans.</li>
            </ul>
            </div>
            <div>
              <h3>Questions for a Guard recruiter</h3>
              <ul>
                <li>What job openings are available in units near my home or school?</li>
                <li>Where is the unit located, and how far is drill from home or college?</li>
                <li>How long are basic training and job training for this role?</li>
                <li>What education benefits apply, and what are the eligibility rules?</li>
                <li>How often has this unit deployed or activated recently?</li>
                <li>Can this contract work with my intended college schedule?</li>
                <li>What happens if I transfer schools or move?</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeader eyebrow="Timeline" title="Guard Planning Timeline" />
          <Timeline
            items={[
              {
                time: "Before meeting a recruiter",
                title: "Know your goals",
                text: "Write down whether college, job training, staying local, aviation, medical, cyber, or leadership is the main priority."
              },
              {
                time: "Recruiter conversations",
                title: "Compare actual units",
                text: "Ask about real job openings, unit locations, training dates, contract length, bonuses, and education benefits."
              },
              {
                time: "Before signing",
                title: "Review the commitment",
                text: "Read the contract carefully with a trusted adult and confirm the job, training timeline, benefits, and obligations."
              },
              {
                time: "After joining",
                title: "Coordinate school and training",
                text: "Communicate early with colleges, employers, coaches, and family about training dates and drill expectations."
              }
            ]}
          />
        </div>
      </section>
    </>
  );
}
