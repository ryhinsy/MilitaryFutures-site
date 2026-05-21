type ChecklistProps = {
  title?: string;
  items: string[];
};

export function Checklist({ title, items }: ChecklistProps) {
  return (
    <div className="checklist">
      {title ? <h3>{title}</h3> : null}
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
