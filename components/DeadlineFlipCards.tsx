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
  const [selectedSet, setSelectedSet] = useState("All Academies");
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const [activeDeadlines, setActiveDeadlines] = useState<Record<string, number>>({});
  const visibleCards =
    selectedSet === "All Academies"
      ? cards
      : cards.filter((card) => card.academy === selectedSet);

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
    <>
      <div className="deadline-set-selector" aria-label="Choose academy deadline flashcard set">
        {["All Academies", ...cards.map((card) => card.academy)].map((setName) => (
          <button
            aria-pressed={selectedSet === setName}
            className={selectedSet === setName ? "active" : ""}
            key={setName}
            onClick={() => setSelectedSet(setName)}
            type="button"
          >
            {setName}
          </button>
        ))}
      </div>
      <div className="deadline-card-grid">
        {visibleCards.map((card) => {
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
    </>
  );
}
