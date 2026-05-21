import { PageHero } from "@/components/PageHero";

type PlaceholderPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  cards: Array<{
    title: string;
    text: string;
  }>;
};

export function PlaceholderPage({
  eyebrow,
  title,
  intro,
  cards
}: PlaceholderPageProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title}>
        {intro}
      </PageHero>
      <section className="section">
        <div className="container page-grid">
          {cards.map((card) => (
            <article className="page-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
