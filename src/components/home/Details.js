import React from "react";
import "../../styles/components/home/Details.css";

import HoursBox from "./HoursBox";
import Photogrid from "./Photogrid";
import MapContainer from "./MapContainer.js";

import { PHONE_NUMBER } from "../../constants/values";

// TODO: Make the hours container responsive
// TODO: Make the photogrid responsive
export default class Details extends React.Component {
  render() {
    const hours = this.props.groupedHours
      ? this.props.groupedHours.map((hourObj) => {
          const { timeRange, dayRange } = hourObj;
          return (
            <HoursBox
              key={dayRange}
              startHour={timeRange.startHour}
              startMinute={timeRange.startMinute}
              endHour={timeRange.endHour}
              endMinute={timeRange.endMinute}
              dayRange={dayRange}
            />
          );
        })
      : null;

    return (
      <section id="details" className="details-container">
        <div className="details">
          <p className="opening-hours">Opening Hours</p>
          <div className="hours-container">{hours}</div>
          <p className="phone">{`Tel: ${PHONE_NUMBER}`}</p>
        </div>

        {/* <MapContainer /> */}
        {/* <Photogrid /> */}
      </section>
    );
  }
}
