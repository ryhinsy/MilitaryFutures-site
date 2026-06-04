"use client";

import { useState } from "react";
import type { KeyboardEvent } from "react";

export type DeadlineFlipCard = {
  academy: string;
  location: string;
  summary: string;
  details: string[];
};

type DeadlineFlipCardsProps = {
  cards: DeadlineFlipCard[];
};

export function DeadlineFlipCards({ cards }: DeadlineFlipCardsProps) {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  function toggleCard(academy: string) {
    setFlippedCards((current) => ({
      ...current,
      [academy]: !current[academy]
    }));
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>, academy: string) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleCard(academy);
    }
  }

  return (
    <div className="deadline-card-grid">
      {cards.map((card) => {
        const isFlipped = Boolean(flippedCards[card.academy]);

        return (
          <div
            aria-label={`${isFlipped ? "Show summary for" : "View deadlines for"} ${card.academy}`}
            aria-pressed={isFlipped}
            className={`deadline-flip-card${isFlipped ? " is-flipped" : ""}`}
            key={card.academy}
            onClick={() => toggleCard(card.academy)}
            onKeyDown={(event) => handleKeyDown(event, card.academy)}
            role="button"
            tabIndex={0}
          >
            <div className="deadline-card-inner">
              <div className="deadline-card-face deadline-card-front">
                <span className="eyebrow">{card.location}</span>
                <strong>{card.academy}</strong>
                <span>{card.summary}</span>
                <em>View deadlines</em>
              </div>
              <div className="deadline-card-face deadline-card-back">
                <div>
                  <span className="eyebrow">Deadline details</span>
                  <strong>{card.academy}</strong>
                </div>
                <ul>
                  {card.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <em>Click to flip back</em>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
