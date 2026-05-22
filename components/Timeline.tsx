type TimelineProps = {
  items: Array<{
    time: string;
    title: string;
    text: string;
  }>;
};

export function Timeline({ items }: TimelineProps) {
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li key={`${item.time}-${item.title}`}>
          <span>{item.time}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </li>
      ))}
    </ol>
  );
}

type MilestoneKind = "universal" | "academy" | "notification";

type ComparisonTimelineProps = {
  milestones: Array<{
    period: string;
    title: string;
    text: string;
    kind: MilestoneKind;
    academy?: string;
  }>;
};

const milestoneLabels: Record<MilestoneKind, string> = {
  universal: "Universal Step",
  academy: "Academy-Specific Deadline",
  notification: "Notification / Appointment Window"
};

export function ComparisonTimeline({ milestones }: ComparisonTimelineProps) {
  return (
    <section className="timeline-feature" aria-labelledby="academy-timeline-title">
      <div className="container">
        <div className="timeline-feature-header">
          <div>
            <div className="eyebrow">Application timeline</div>
            <h2 id="academy-timeline-title">Compare Academy Dates at a Glance</h2>
            <p>
              Dates can change each admissions cycle. Use this as a planning
              map, then verify exact deadlines on official academy admissions
              websites and congressional office pages.
            </p>
          </div>
          <div className="timeline-legend" aria-label="Timeline legend">
            {Object.entries(milestoneLabels).map(([kind, label]) => (
              <span className={`legend-pill ${kind}`} key={kind}>
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="comparison-timeline">
          {milestones.map((milestone) => (
            <article
              className={`milestone-card ${milestone.kind}`}
              key={`${milestone.period}-${milestone.title}`}
            >
              <div className="milestone-meta">
                <span>{milestone.period}</span>
                <strong>{milestoneLabels[milestone.kind]}</strong>
              </div>
              {milestone.academy ? <p className="milestone-academy">{milestone.academy}</p> : null}
              <h3>{milestone.title}</h3>
              <p>{milestone.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
