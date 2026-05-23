"use client";

import type { CSSProperties } from "react";
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
  details?: Array<{
    timeline?: TimelineFilter;
    text: string;
  }>;
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

const timelineColorClasses: Record<TimelineFilter, string> = {
  Universal: "universal-filter",
  "West Point": "west-point",
  "Naval Academy": "naval-academy",
  "Air Force Academy": "air-force-academy",
  "Coast Guard Academy": "coast-guard-academy",
  "Merchant Marine Academy": "merchant-marine-academy"
};

const timelineColors: Record<TimelineFilter, string> = {
  Universal: "#9bab86",
  "West Point": "#5d6b2f",
  "Naval Academy": "#1f4e79",
  "Air Force Academy": "#5d7fa3",
  "Coast Guard Academy": "#b36b2c",
  "Merchant Marine Academy": "#7b5aa6"
};

function getTimelineClass(timeline: TimelineFilter) {
  return timelineColorClasses[timeline];
}

function getNodeStyle(timelines: TimelineFilter[]): CSSProperties {
  const colors = timelines.map((timeline) => timelineColors[timeline]);
  const fallback = timelineColors.Universal;

  if (colors.length <= 1) {
    return {
      "--node-border": colors[0] ?? fallback,
      "--node-fill": "var(--surface)"
    } as CSSProperties;
  }

  const slice = 100 / colors.length;
  const gradientStops = colors
    .map((color, index) => `${color} ${index * slice}% ${(index + 1) * slice}%`)
    .join(", ");

  return {
    "--node-border": colors[0] ?? fallback,
    "--node-fill": `conic-gradient(${gradientStops})`
  } as CSSProperties;
}

export function ComparisonTimeline({
  milestones,
  phases = ["Junior Year", "Senior Year", "Fall", "Winter", "Spring"]
}: ComparisonTimelineProps) {
  const [selectedTimelines, setSelectedTimelines] = useState<TimelineFilter[]>(["Universal"]);

  const visibleMilestones = useMemo(
    () =>
      milestones
        .map((milestone) => {
          const visibleTimelines = milestone.timelines.filter((timeline) =>
            selectedTimelines.includes(timeline)
          );

          if (visibleTimelines.length === 0) {
            return null;
          }

          return {
            ...milestone,
            visibleTimelines,
            visibleDetails: milestone.details?.filter(
              (detail) => !detail.timeline || visibleTimelines.includes(detail.timeline)
            )
          };
        })
        .filter((milestone) => milestone !== null),
    [milestones, selectedTimelines]
  );

  function toggleTimeline(timeline: TimelineFilter) {
    setSelectedTimelines((current) => {
      if (timeline === "Universal") {
        return ["Universal"];
      }

      const currentAcademies = current.filter((selected) => selected !== "Universal");
      const isSelected = current.includes(timeline);
      const next = isSelected
        ? currentAcademies.filter((selected) => selected !== timeline)
        : [...currentAcademies, timeline];

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
                className={`${getTimelineClass(timeline)}${isSelected ? " active" : ""}`}
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
              const nodeStyle = getNodeStyle(milestone.visibleTimelines);

              return (
                <article
                  className={`roadmap-card ${milestone.kind} ${position} ${
                    milestone.visibleTimelines.length > 1 ? "grouped" : getTimelineClass(milestone.visibleTimelines[0])
                  }`}
                  key={`${milestone.period}-${milestone.title}`}
                  style={nodeStyle}
                >
                  <div className="roadmap-connector" aria-hidden="true" />
                  <div className="roadmap-node">{milestone.period}</div>
                  <div className="roadmap-card-inner">
                    <span className="roadmap-kind">{milestoneLabels[milestone.kind]}</span>
                    <h3>{milestone.academy ?? "Universal"}</h3>
                    <p className="roadmap-subtitle">{milestone.title}</p>
                    <div className="timeline-badge-row" aria-label="Timeline labels">
                      {milestone.visibleTimelines.map((timeline) => (
                        <span
                          className={`timeline-badge ${getTimelineClass(timeline)}`}
                          key={timeline}
                        >
                          {timeline}
                        </span>
                      ))}
                    </div>
                    <p>{milestone.text}</p>
                    {milestone.visibleDetails ? (
                      <ul>
                        {milestone.visibleDetails.map((detail) => (
                          <li key={detail.text}>{detail.text}</li>
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
