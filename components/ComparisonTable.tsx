type ComparisonTableProps = {
  columns: string[];
  rows: Array<{
    label: string;
    values: string[];
  }>;
};

export function ComparisonTable({ columns, rows }: ComparisonTableProps) {
  return (
    <div className="table-scroll" role="region" aria-label="Comparison table" tabIndex={0}>
      <table className="comparison-table">
        <thead>
          <tr>
            <th scope="col">Topic</th>
            {columns.map((column) => (
              <th scope="col" key={column}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <th scope="row">{row.label}</th>
              {row.values.map((value, index) => (
                <td key={`${row.label}-${columns[index]}`}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
