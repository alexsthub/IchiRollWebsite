import React from "react";
import "../styles/Details.css";
import MapContainer from "../components/MapContainer.js";

import { groupHours } from "../helpers/hoursParser";

// TODO: Add an image of the building next to the hours?
const phoneNumber = "(206) 363-5100";
export default class Details extends React.Component {
  createHoursTable = (openHours) => {
    if (Object.keys(openHours).length === 0 && openHours.constructor === Object) return null;

    const hours = groupHours(openHours);
    const length = hours.length - 1;
    const rows = hours.map((hour, index) => {
      const { dayRange, timeRange } = hour;
      let addedStyle;
      if (index === 0) addedStyle = { marginTop: 0 };
      else if (index === length) addedStyle = { marginBottom: 0 };
      return (
        <div key={dayRange} className="hours-row" style={addedStyle}>
          <p className="day">{dayRange}</p>
          <p className="range">{timeRange}</p>
        </div>
      );
    });
    return (
      <div className="hours-container">
        <div className="hours-descr">
          <div>
            <p className="opening-hours">{`Opening`}</p>
            <p className="opening-hours">{`Hours`}</p>
          </div>
          <p className="phone">{`Tel: ${phoneNumber}`}</p>
        </div>
        <div className="border" />
        <div style={{ display: "flex", flexDirection: "column" }}>{rows}</div>
      </div>
    );
  };

  render() {
    const openHours = this.props.openHours;
    const hoursTable = this.createHoursTable(openHours);

    return (
      <section id="details" className="details-container">
        <div className="details">
          <div className="hours-table">{hoursTable}</div>
          <div className="inline-block map-container">
            <MapContainer />
          </div>
        </div>
      </section>
    );
  }
}
