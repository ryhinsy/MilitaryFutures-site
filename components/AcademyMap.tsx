const academies = [
  {
    name: "West Point",
    city: "West Point",
    state: "NY",
    x: 78,
    y: 33
  },
  {
    name: "Naval Academy",
    city: "Annapolis",
    state: "MD",
    x: 76,
    y: 45
  },
  {
    name: "Air Force Academy",
    city: "Colorado Springs",
    state: "CO",
    x: 43,
    y: 47
  },
  {
    name: "Coast Guard Academy",
    city: "New London",
    state: "CT",
    x: 83,
    y: 31
  },
  {
    name: "Merchant Marine Academy",
    city: "Kings Point",
    state: "NY",
    x: 81,
    y: 35
  }
];

export function AcademyMap() {
  return (
    <div className="academy-map">
      <div className="map-canvas" aria-label="Map of U.S. service academy locations">
        <div className="map-shape" aria-hidden="true" />
        {academies.map((academy) => (
          <div
            className="map-pin"
            key={academy.name}
            style={{ left: `${academy.x}%`, top: `${academy.y}%` }}
          >
            <span aria-hidden="true" />
            <strong>{academy.name}</strong>
            <small>
              {academy.city}, {academy.state}
            </small>
          </div>
        ))}
      </div>
      <div className="map-list">
        {academies.map((academy) => (
          <div key={academy.name}>
            <strong>{academy.name}</strong>
            <span>
              {academy.city}, {academy.state}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
