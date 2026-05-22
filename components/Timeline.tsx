"use client";

import { useMemo, useState } from "react";

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
export type TimelineFilter =
  | "Universal"
  | "West Point"
  | "Naval Academy"
  | "Air Force Academy"
  | "Coast Guard Academy"
  | "Merchant Marine Academy";

export type ComparisonTimelineMilestone = {
  period: string;
  title: string;
  text: string;
  kind: MilestoneKind;
  academy?: string;
  timelines: TimelineFilter[];
  details?: string[];
};

type ComparisonTimelineProps = {
  milestones: ComparisonTimelineMilestone[];
  phases?: string[];
};

const milestoneLabels: Record<MilestoneKind, string> = {
  universal: "Universal Step",
  academy: "Academy-Specific Deadline",
  notification: "Notification / Appointment Window"
};

const timelineFilters: TimelineFilter[] = [
  "Universal",
  "West Point",
  "Naval Academy",
  "Air Force Academy",
  "Coast Guard Academy",
  "Merchant Marine Academy"
];

export function ComparisonTimeline({
  milestones,
  phases = ["Junior Year", "Senior Year", "Fall", "Winter", "Spring"]
}: ComparisonTimelineProps) {
  const [selectedTimelines, setSelectedTimelines] = useState<TimelineFilter[]>(["Universal"]);

  const visibleMilestones = useMemo(
    () =>
      milestones.filter((milestone) =>
        milestone.timelines.some((timeline) => selectedTimelines.includes(timeline))
      ),
    [milestones, selectedTimelines]
  );

  function toggleTimeline(timeline: TimelineFilter) {
    setSelectedTimelines((current) => {
      const isSelected = current.includes(timeline);
      const next = isSelected
        ? current.filter((selected) => selected !== timeline)
        : [...current, timeline];

      return next.length > 0 ? next : ["Universal"];
    });
  }

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
        <div className="timeline-filter-bar" aria-label="Timeline filters">
          {timelineFilters.map((timeline) => {
            const isSelected = selectedTimelines.includes(timeline);

            return (
              <button
                aria-pressed={isSelected}
                className={isSelected ? "active" : ""}
                key={timeline}
                onClick={() => toggleTimeline(timeline)}
                type="button"
              >
                {timeline}
              </button>
            );
          })}
        </div>
        <div className="roadmap-shell" aria-label="Service Academy application roadmap">
          <div className="roadmap-phases" aria-hidden="true">
            {phases.map((phase) => (
              <span key={phase}>{phase}</span>
            ))}
          </div>
          <div className="roadmap-track">
            <div className="roadmap-line" aria-hidden="true" />
            {visibleMilestones.map((milestone, index) => {
              const position = index % 2 === 0 ? "top" : "bottom";

              return (
                <article
                  className={`roadmap-card ${milestone.kind} ${position}`}
                  key={`${milestone.period}-${milestone.title}`}
                >
                  <div className="roadmap-connector" aria-hidden="true" />
                  <div className="roadmap-node" aria-hidden="true" />
                  <div className="roadmap-card-inner">
                    <div className="roadmap-meta">
                      <span>{milestone.period}</span>
                      <strong>{milestoneLabels[milestone.kind]}</strong>
                    </div>
                    {milestone.academy ? (
                      <p className="milestone-academy">{milestone.academy}</p>
                    ) : null}
                    <div className="timeline-badge-row" aria-label="Timeline labels">
                      {milestone.timelines.map((timeline) => (
                        <span className="timeline-badge" key={timeline}>
                          {timeline}
                        </span>
                      ))}
                    </div>
                    <h3>{milestone.title}</h3>
                    <p>{milestone.text}</p>
                    {milestone.details ? (
                      <ul>
                        {milestone.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
