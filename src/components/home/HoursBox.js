import React from "react";
import "../../styles/Details.css";

import CustomHour from "./CustomHour";

export default class HoursBox extends React.Component {
  render() {
    let timeRange;
    const { startHour, endHour, startMinute, endMinute, dayRange } = this.props;
    if (!startHour || !endHour || !dayRange) {
      timeRange = <p className="cr-number">Closed</p>;
    } else {
      timeRange = (
        <div className="cr-timerange">
          <CustomHour hour={startHour} minute={startMinute} />
          <p className="hours-box-divider">-</p>
          <CustomHour hour={endHour} minute={endMinute} />
        </div>
      );
    }
    return (
      <div className="hours-box">
        {timeRange}
        <p className="cr-range">{dayRange}</p>
      </div>
    );
  }
}
