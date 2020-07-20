import React from "react";
import "../styles/Details.css";
import MapContainer from "../components/MapContainer.js";

import { hoursToDateString } from "../helpers/hoursParser";

export default class Details extends React.Component {
  createHoursTable = (openHours) => {
    if (!openHours) return null;

    let rows = [];
    for (let i = 0; i < 7; i++) {
      const range = openHours[i];
      const { day, dateString } = hoursToDateString(i, range);

      const row = (
        <div key={String(i)} className="hours-row">
          <p className="day">{`${day}:`}</p>
          <p className="range">{dateString}</p>
        </div>
      );
      rows.push(row);
    }
    return (
      <div>
        <h3>Opening Hours:</h3>
        {rows}
      </div>
    );
  };

  render() {
    const openHours = this.props.openHours;
    const hoursTable = this.createHoursTable(openHours);

    return (
      <section id="details" className="details-container">
        <div className="details">
          <div className="inline-block hours-table">{hoursTable}</div>
          <div className="inline-block map-container">
            <MapContainer />
          </div>
        </div>
      </section>
    );
  }
}
