import React from "react";
import "../styles/Details.css";

import { hoursToDateString } from "../helpers/hoursParser";

export default class Details extends React.Component {
  createHoursTable = (openHours) => {
    if (!openHours) return null;

    let rows = [];
    for (let i = 0; i < 7; i++) {
      const range = openHours[i];
      const { day, dateString } = hoursToDateString(i, range);

      const row = (
        <div className="hours-row">
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
          {hoursTable}
          <p style={{ marginLeft: 100 }}>The google maps over here</p>
        </div>
      </section>
    );
  }
}
