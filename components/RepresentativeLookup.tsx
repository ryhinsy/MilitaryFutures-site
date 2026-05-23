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
  const [message, setMessage] = useState("");

  const cleanZip = useMemo(() => zip.replace(/\D/g, "").slice(0, 5), [zip]);
  const isValidZip = /^\d{5}$/.test(cleanZip);
  const houseUrl = isValidZip
    ? `https://www.house.gov/htbin/findrep?ZIP=${cleanZip}`
    : "https://www.house.gov/representatives/find-your-representative";

  const senateUrl = `https://www.senate.gov/states/${state}/intro.htm`;

  function handleZipChange(value: string) {
    setZip(value.replace(/\D/g, "").slice(0, 5));
    setMessage("");
  }

  function openOfficialLookup(url: string) {
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function findHouseRepresentative() {
    if (!isValidZip) {
      setMessage(
        "Enter a 5-digit ZIP code first. If you are not sure, use the official House lookup and enter the student's full home address there."
      );
      return;
    }

    setMessage(
      "Opening the official U.S. House lookup. If the ZIP crosses district lines, the site may ask for the student's full home address."
    );
    openOfficialLookup(houseUrl);
  }

  function findSenators() {
    setMessage("Opening the official U.S. Senate state page for the selected state.");
    openOfficialLookup(senateUrl);
  }

  return (
    <div className="lookup-tool">
      <div>
        <h3>Find Your Representatives</h3>
        <p>
          Use the student&apos;s home address or ZIP code to confirm the correct
          House district. Senate pages are organized by state.
        </p>
        <p className="lookup-helper">
          Use the student&apos;s home address because congressional districts are
          based on residence. Official tools may ask for a full address because
          ZIP codes can cross district lines.
        </p>
      </div>
      <div className="lookup-controls">
        <label>
          ZIP code
          <input
            aria-describedby="representative-lookup-message"
            aria-invalid={zip.length > 0 && !isValidZip}
            inputMode="numeric"
            maxLength={5}
            onChange={(event) => handleZipChange(event.target.value)}
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
      {message ? (
        <p className="lookup-message" id="representative-lookup-message" role="status">
          {message}
        </p>
      ) : (
        <p className="lookup-message" id="representative-lookup-message">
          Enter a 5-digit ZIP for the House lookup, then choose the student&apos;s
          state for the Senate lookup.
        </p>
      )}
      <div className="lookup-actions">
        <button onClick={findHouseRepresentative} type="button">
          Find My House Representative
        </button>
        <button onClick={findSenators} type="button">
          Find My Senators
        </button>
      </div>
    </div>
  );
}
