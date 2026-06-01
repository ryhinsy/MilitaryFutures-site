"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Pathway =
  | "Service Academy"
  | "ROTC"
  | "Enlisting"
  | "National Guard"
  | "Air National Guard"
  | "Reserves";

type Answer = {
  label: string;
  scores: Partial<Record<Pathway, number>>;
};

type Question = {
  prompt: string;
  answers: Answer[];
};

const pathwayLinks: Record<Pathway, string> = {
  "Service Academy": "/service-academies",
  ROTC: "/rotc",
  Enlisting: "/enlistment-vs-commissioning#enlistment",
  "National Guard": "/national-guard",
  "Air National Guard": "/national-guard",
  Reserves: "/enlistment-vs-commissioning"
};

const pathwayDescriptions: Record<Pathway, string> = {
  "Service Academy":
    "You may like a full-time military college environment with a direct officer pathway and a strong service commitment after graduation.",
  ROTC:
    "You may like a civilian college experience while preparing to commission as an officer through campus-based military training.",
  Enlisting:
    "You may like starting service sooner, learning a military job, and building hands-on experience after high school.",
  "National Guard":
    "You may like part-time service connected to your state while balancing school, work, and local community life.",
  "Air National Guard":
    "You may like part-time service with air, space, cyber, aviation, maintenance, medical, or technical mission areas.",
  Reserves:
    "You may like a federal part-time service option that can fit alongside college, work, and civilian goals."
};

const questions: Question[] = [
  {
    prompt: "What kind of college experience sounds best?",
    answers: [
      { label: "A traditional college campus", scores: { ROTC: 3, Reserves: 1, "National Guard": 1 } },
      { label: "A highly structured military college", scores: { "Service Academy": 4 } },
      { label: "I may want to work or train before college", scores: { Enlisting: 3, "National Guard": 2, "Air National Guard": 2 } }
    ]
  },
  {
    prompt: "Are you interested in becoming an officer?",
    answers: [
      { label: "Yes, that is a major goal", scores: { "Service Academy": 3, ROTC: 3 } },
      { label: "Maybe, but I want to compare options", scores: { ROTC: 2, "National Guard": 1, Reserves: 1 } },
      { label: "Not right now; I want job training first", scores: { Enlisting: 3, "National Guard": 2, "Air National Guard": 2, Reserves: 1 } }
    ]
  },
  {
    prompt: "Do you want to serve full-time or part-time?",
    answers: [
      { label: "Full-time service sounds right", scores: { Enlisting: 3, "Service Academy": 2, ROTC: 2 } },
      { label: "Part-time service sounds better", scores: { "National Guard": 3, "Air National Guard": 3, Reserves: 3 } },
      { label: "I am not sure yet", scores: { ROTC: 1, Enlisting: 1, "National Guard": 1, Reserves: 1 } }
    ]
  },
  {
    prompt: "How important is help paying for college?",
    answers: [
      { label: "Very important", scores: { "Service Academy": 3, ROTC: 3, "National Guard": 2, "Air National Guard": 2 } },
      { label: "Important, but not the only factor", scores: { ROTC: 2, Reserves: 1, Enlisting: 1 } },
      { label: "I am more focused on job training", scores: { Enlisting: 3, "Air National Guard": 1, "National Guard": 1 } }
    ]
  },
  {
    prompt: "When do you want to start serving?",
    answers: [
      { label: "Right after high school", scores: { Enlisting: 4, "National Guard": 2, "Air National Guard": 2, Reserves: 2 } },
      { label: "During college, while preparing for later service", scores: { ROTC: 4, "Service Academy": 2 } },
      { label: "After a four-year military college", scores: { "Service Academy": 4 } }
    ]
  },
  {
    prompt: "Do you want to stay close to home while serving?",
    answers: [
      { label: "Yes, staying local matters", scores: { "National Guard": 4, "Air National Guard": 4, Reserves: 2 } },
      { label: "Maybe, but I can move for school or service", scores: { ROTC: 2, Reserves: 1, Enlisting: 1 } },
      { label: "No, I am open to moving wherever needed", scores: { "Service Academy": 2, ROTC: 2, Enlisting: 2 } }
    ]
  },
  {
    prompt: "Which interests sound most like you?",
    answers: [
      { label: "Aviation, cyber, technical systems, or air missions", scores: { "Air National Guard": 4, ROTC: 2, "Service Academy": 2 } },
      { label: "Leadership, college, and officer development", scores: { "Service Academy": 3, ROTC: 3 } },
      { label: "Hands-on job training and practical skills", scores: { Enlisting: 4, "National Guard": 2, Reserves: 2 } }
    ]
  }
];

const initialScores: Record<Pathway, number> = {
  "Service Academy": 0,
  ROTC: 0,
  Enlisting: 0,
  "National Guard": 0,
  "Air National Guard": 0,
  Reserves: 0
};

export function FindYourPathQuiz() {
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState(initialScores);

  const isComplete = currentIndex >= questions.length;
  const currentQuestion = questions[currentIndex];
  const progress = Math.round(((Math.min(currentIndex, questions.length) + 1) / questions.length) * 100);

  const rankedResults = useMemo(
    () =>
      Object.entries(scores)
        .sort((a, b) => b[1] - a[1])
        .map(([pathway]) => pathway as Pathway),
    [scores]
  );

  function selectAnswer(answer: Answer) {
    setScores((current) => {
      const next = { ...current };
      for (const [pathway, value] of Object.entries(answer.scores)) {
        next[pathway as Pathway] += value ?? 0;
      }
      return next;
    });
    setCurrentIndex((index) => index + 1);
  }

  function resetQuiz() {
    setStarted(false);
    setCurrentIndex(0);
    setScores({ ...initialScores });
  }

  return (
    <section className="quiz-section" aria-labelledby="find-your-path-title">
      <div className="container quiz-shell">
        <div className="quiz-intro">
          <div className="eyebrow">Find Your Path</div>
          <h2 id="find-your-path-title">Explore which military pathway may fit you.</h2>
          <p>
            Answer a few student-friendly questions to compare Service Academy,
            ROTC, Enlisting, Guard, Air Guard, and Reserve options.
          </p>
          <p className="quiz-disclaimer">
            This quiz is not an official military recommendation. It is a
            starting point to help you explore options.
          </p>
        </div>
        <div className="quiz-card">
          {!started ? (
            <button className="button primary quiz-start" onClick={() => setStarted(true)} type="button">
              Take the Find Your Path Quiz
            </button>
          ) : isComplete ? (
            <div className="quiz-result">
              <span className="quiz-progress-label">Results</span>
              <h3>{rankedResults[0]}</h3>
              <p>{pathwayDescriptions[rankedResults[0]]}</p>
              <p className="result-disclaimer">
                This quiz is for informational purposes only and does not
                constitute official military recruiting, admissions, or career
                guidance.
              </p>
              <div className="backup-pathways">
                <strong>Backup pathways to explore</strong>
                <div>
                  {rankedResults.slice(1, 3).map((pathway) => (
                    <Link href={pathwayLinks[pathway]} key={pathway}>
                      {pathway}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="quiz-actions">
                <Link className="button primary" href={pathwayLinks[rankedResults[0]]}>
                  Explore {rankedResults[0]}
                </Link>
                <button className="button secondary" onClick={resetQuiz} type="button">
                  Retake quiz
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="quiz-progress">
                <span className="quiz-progress-label">
                  Question {currentIndex + 1} of {questions.length}
                </span>
                <div aria-hidden="true">
                  <span style={{ width: `${progress}%` }} />
                </div>
              </div>
              <h3>{currentQuestion.prompt}</h3>
              <div className="quiz-options">
                {currentQuestion.answers.map((answer) => (
                  <button key={answer.label} onClick={() => selectAnswer(answer)} type="button">
                    {answer.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
