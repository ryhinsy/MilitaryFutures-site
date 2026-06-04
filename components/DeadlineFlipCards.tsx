"use client";

import { useState } from "react";

export type DeadlineItem = {
  title: string;
  text: string;
};

export type DeadlineFlipCard = {
  academy: string;
  deadlines: DeadlineItem[];
};

type DeadlineFlipCardsProps = {
  cards: DeadlineFlipCard[];
};

export function DeadlineFlipCards({ cards }: DeadlineFlipCardsProps) {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const [activeDeadlines, setActiveDeadlines] = useState<Record<string, number>>({});

  function toggleCard(academy: string) {
    setFlippedCards((current) => ({
      ...current,
      [academy]: !current[academy]
    }));
  }

  function changeDeadline(academy: string, direction: "next" | "previous", total: number) {
    setActiveDeadlines((current) => {
      const activeIndex = current[academy] ?? 0;
      const nextIndex =
        direction === "next"
          ? (activeIndex + 1) % total
          : (activeIndex - 1 + total) % total;

      return {
        ...current,
        [academy]: nextIndex
      };
    });
  }

  return (
    <div className="deadline-card-grid">
      {cards.map((card) => {
        const isFlipped = Boolean(flippedCards[card.academy]);
        const activeIndex = activeDeadlines[card.academy] ?? 0;
        const activeDeadline = card.deadlines[activeIndex];

        return (
          <div className={`deadline-flip-card${isFlipped ? " is-flipped" : ""}`} key={card.academy}>
            <div className="deadline-card-inner">
              <button
                aria-label={`View deadlines for ${card.academy}`}
                className="deadline-card-face deadline-card-front"
                onClick={() => toggleCard(card.academy)}
                type="button"
              >
                <strong>{card.academy}</strong>
                <em>Click to view deadlines</em>
              </button>
              <div className="deadline-card-face deadline-card-back">
                <div>
                  <span className="eyebrow">
                    {activeIndex + 1} of {card.deadlines.length}
                  </span>
                  <strong>{card.academy}</strong>
                </div>
                <div className="deadline-carousel-item">
                  <h3>{activeDeadline.title}</h3>
                  <p>{activeDeadline.text}</p>
                </div>
                <div className="deadline-card-controls">
                  <button
                    aria-label={`Previous deadline for ${card.academy}`}
                    onClick={() => changeDeadline(card.academy, "previous", card.deadlines.length)}
                    type="button"
                  >
                    Prev
                  </button>
                  <button onClick={() => toggleCard(card.academy)} type="button">
                    Back to academy
                  </button>
                  <button
                    aria-label={`Next deadline for ${card.academy}`}
                    onClick={() => changeDeadline(card.academy, "next", card.deadlines.length)}
                    type="button"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
