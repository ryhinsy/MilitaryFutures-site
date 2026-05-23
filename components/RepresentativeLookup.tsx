"use client";

import { useMemo, useState } from "react";

const states = [
  ["AL", "Alabama"],
  ["AK", "Alaska"],
  ["AZ", "Arizona"],
  ["AR", "Arkansas"],
  ["CA", "California"],
  ["CO", "Colorado"],
  ["CT", "Connecticut"],
  ["DE", "Delaware"],
  ["FL", "Florida"],
  ["GA", "Georgia"],
  ["HI", "Hawaii"],
  ["ID", "Idaho"],
  ["IL", "Illinois"],
  ["IN", "Indiana"],
  ["IA", "Iowa"],
  ["KS", "Kansas"],
  ["KY", "Kentucky"],
  ["LA", "Louisiana"],
  ["ME", "Maine"],
  ["MD", "Maryland"],
  ["MA", "Massachusetts"],
  ["MI", "Michigan"],
  ["MN", "Minnesota"],
  ["MS", "Mississippi"],
  ["MO", "Missouri"],
  ["MT", "Montana"],
  ["NE", "Nebraska"],
  ["NV", "Nevada"],
  ["NH", "New Hampshire"],
  ["NJ", "New Jersey"],
  ["NM", "New Mexico"],
  ["NY", "New York"],
  ["NC", "North Carolina"],
  ["ND", "North Dakota"],
  ["OH", "Ohio"],
  ["OK", "Oklahoma"],
  ["OR", "Oregon"],
  ["PA", "Pennsylvania"],
  ["RI", "Rhode Island"],
  ["SC", "South Carolina"],
  ["SD", "South Dakota"],
  ["TN", "Tennessee"],
  ["TX", "Texas"],
  ["UT", "Utah"],
  ["VT", "Vermont"],
  ["VA", "Virginia"],
  ["WA", "Washington"],
  ["WV", "West Virginia"],
  ["WI", "Wisconsin"],
  ["WY", "Wyoming"]
];

export function RepresentativeLookup() {
  const [zip, setZip] = useState("");
  const [state, setState] = useState("WI");

  const houseUrl = useMemo(() => {
    const cleanZip = zip.replace(/\D/g, "").slice(0, 5);
    return cleanZip
      ? `https://www.house.gov/htbin/findrep?ZIP=${cleanZip}`
      : "https://www.house.gov/representatives/find-your-representative";
  }, [zip]);

  const senateUrl = `https://www.senate.gov/states/${state}/intro.htm`;

  return (
    <div className="lookup-tool">
      <div>
        <h3>Find Your Representatives</h3>
        <p>
          Use the student&apos;s home address or ZIP code to confirm the correct
          House district. Senate pages are organized by state.
        </p>
      </div>
      <div className="lookup-controls">
        <label>
          ZIP code
          <input
            inputMode="numeric"
            maxLength={5}
            onChange={(event) => setZip(event.target.value)}
            pattern="[0-9]*"
            placeholder="Enter ZIP"
            value={zip}
          />
        </label>
        <label>
          State
          <select onChange={(event) => setState(event.target.value)} value={state}>
            {states.map(([abbr, name]) => (
              <option key={abbr} value={abbr}>
                {name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="lookup-actions">
        <a href={houseUrl} rel="noopener noreferrer" target="_blank">
          U.S. House representative lookup
        </a>
        <a href={senateUrl} rel="noopener noreferrer" target="_blank">
          U.S. Senate state lookup
        </a>
      </div>
    </div>
  );
}
