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
