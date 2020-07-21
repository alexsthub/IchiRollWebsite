import React from "react";
import "../styles/Details.css";
import MapContainer from "../components/MapContainer.js";

import { groupHours } from "../helpers/hoursParser";

// TODO: Hours container is hardcoded width, whats the big idea here?
// TODO: Redo hours to date string to fit https://www.google.com/search?q=restaurant+hours+design&sxsrf=ALeKk02IPnUX6aihrYwiSeuvpCnFpboUwQ:1595274473309&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiv0LPCzNzqAhUTNn0KHRohAi0Q_AUoAXoECA8QAw&cshid=1595274661669336&biw=1680&bih=868#imgrc=lkIbizCJrTwRfM
const phoneNumber = "(206) 363-5100";
export default class Details extends React.Component {
  createHoursTable = (openHours) => {
    if (Object.keys(openHours).length === 0 && openHours.constructor === Object) return null;

    const hours = groupHours(openHours);
    const rows = hours.map((hour) => {
      const { dayRange, timeRange } = hour;
      return (
        <div key={dayRange} className="hours-row">
          <p className="day">{dayRange}</p>
          <p className="range">{timeRange}</p>
        </div>
      );
    });
    return (
      <div className="hours-container">
        <div className="hours-descr">
          <h3>Opening Hours</h3>
          <p>{`Tel: ${phoneNumber}`}</p>
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
          {/* <div className="inline-block map-container">
            <MapContainer />
          </div> */}
        </div>
      </section>
    );
  }
}
