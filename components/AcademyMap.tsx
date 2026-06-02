const academies = [
  {
    id: 1,
    name: "West Point",
    city: "West Point",
    state: "NY",
    branch: "Army",
    marker: { x: 782, y: 180 }
  },
  {
    id: 2,
    name: "Naval Academy",
    city: "Annapolis",
    state: "MD",
    branch: "Navy / Marine Corps",
    marker: { x: 766, y: 282 }
  },
  {
    id: 3,
    name: "Air Force Academy",
    city: "Colorado Springs",
    state: "CO",
    branch: "Air Force / Space Force",
    marker: { x: 416, y: 284 }
  },
  {
    id: 4,
    name: "Coast Guard Academy",
    city: "New London",
    state: "CT",
    branch: "Coast Guard",
    marker: { x: 834, y: 158 }
  },
  {
    id: 5,
    name: "Merchant Marine Academy",
    city: "Kings Point",
    state: "NY",
    branch: "Merchant Marine / Maritime service options",
    marker: { x: 810, y: 210 }
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
            className="map-water"
            d="M0 0H980V560H0V0Z"
          />
          <path
            className="map-us-shape"
            d="M130 112L180 82L240 90L295 118L356 118L420 98L482 124L556 112L624 124L692 116L760 138L828 176L884 210L910 252L890 298L844 326L808 378L742 400L676 392L616 430L544 416L494 452L418 444L356 410L282 392L230 366L188 356L152 314L124 286L88 272L74 232L104 184L130 112Z"
          />
          <path
            className="map-us-shape secondary"
            d="M206 384L270 420L336 432L392 472L348 504L264 482L196 434L206 384Z"
          />
          <path
            className="map-state-lines"
            d="M220 104L222 364M340 122L330 414M458 120L458 438M574 118L564 416M694 122L682 390M124 286L842 326M170 188L878 210M188 356L808 378"
          />
          {academies.map((academy) => (
            <a href={`#academy-location-${academy.id}`} key={academy.id}>
              <title>
                {academy.name} - {academy.city}, {academy.state}. {academy.branch}
              </title>
              <g className="map-marker-group" transform={`translate(${academy.marker.x} ${academy.marker.y})`}>
                <circle className="map-marker" r="16" />
                <text className="map-marker-text" dy="5" textAnchor="middle">
                  {academy.id}
                </text>
              </g>
            </a>
          ))}
        </svg>
      </div>
      <p className="map-note">
        Locations are approximate for visual clarity. Use official academy
        sources for addresses, campus visits, and travel planning.
      </p>
      <div className="map-list">
        {academies.map((academy) => (
          <div id={`academy-location-${academy.id}`} key={academy.name}>
            <strong>
              {academy.id}. {academy.name}
            </strong>
            <span>
              {academy.city}, {academy.state}
            </span>
            <small>{academy.branch}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

