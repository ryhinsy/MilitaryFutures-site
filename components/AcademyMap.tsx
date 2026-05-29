const academies = [
  {
    id: 1,
    name: "West Point",
    city: "West Point",
    state: "NY",
    marker: { x: 760, y: 210 },
    label: { x: 650, y: 116 }
  },
  {
    id: 2,
    name: "Naval Academy",
    city: "Annapolis",
    state: "MD",
    marker: { x: 750, y: 330 },
    label: { x: 650, y: 420 }
  },
  {
    id: 3,
    name: "Air Force Academy",
    city: "Colorado Springs",
    state: "CO",
    marker: { x: 420, y: 330 },
    label: { x: 250, y: 420 }
  },
  {
    id: 4,
    name: "Coast Guard Academy",
    city: "New London",
    state: "CT",
    marker: { x: 820, y: 185 },
    label: { x: 690, y: 56 }
  },
  {
    id: 5,
    name: "Merchant Marine Academy",
    city: "Kings Point",
    state: "NY",
    marker: { x: 800, y: 235 },
    label: { x: 676, y: 270 }
  }
];

export function AcademyMap() {
  return (
    <div className="academy-map">
      <div className="map-canvas">
        <svg
          aria-label="Approximate U.S. map showing service academy locations"
          className="academy-map-svg"
          role="img"
          viewBox="0 0 980 560"
        >
          <title>Service Academy Locations</title>
          <path
            className="map-us-shape"
            d="M86 250L132 186L220 164L306 182L379 158L482 178L576 155L676 174L776 204L878 253L908 316L842 363L745 374L662 415L548 402L469 442L372 418L292 383L188 374L112 326L86 250Z"
          />
          <path
            className="map-us-shape secondary"
            d="M220 390L278 430L352 438L416 474L358 500L274 482L204 432L220 390Z"
          />
          {academies.map((academy) => (
            <g key={academy.id}>
              <line
                className="map-callout-line"
                x1={academy.marker.x}
                x2={academy.label.x + 76}
                y1={academy.marker.y}
                y2={academy.label.y + 24}
              />
              <g transform={`translate(${academy.label.x} ${academy.label.y})`}>
                <rect className="map-label-box" height="48" rx="7" width="152" />
                <text className="map-label-title" x="12" y="20">
                  {academy.id}. {academy.name}
                </text>
                <text className="map-label-location" x="12" y="36">
                  {academy.city}, {academy.state}
                </text>
              </g>
              <g transform={`translate(${academy.marker.x} ${academy.marker.y})`}>
                <circle className="map-marker" r="16" />
                <text className="map-marker-text" dy="5" textAnchor="middle">
                  {academy.id}
                </text>
              </g>
            </g>
          ))}
        </svg>
      </div>
      <p className="map-note">
        Locations are approximate for visual clarity. Use official academy
        sources for addresses, campus visits, and travel planning.
      </p>
      <div className="map-list">
        {academies.map((academy) => (
          <div key={academy.name}>
            <strong>
              {academy.id}. {academy.name}
            </strong>
            <span>
              {academy.city}, {academy.state}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
