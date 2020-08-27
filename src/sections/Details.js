import React from "react";
import "../styles/Details.css";

import Photogrid from "../components/home/Photogrid";
import MapContainer from "../components/MapContainer.js";

import { getRestaurantDetails } from "../helpers/utils";
import { convertRawOpenHours, groupHours } from "../helpers/hoursParser";

import { PHONE_NUMBER } from "../constants/values";

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openHours: {} };
  }

  componentDidMount = async () => {
    const restaurantDetails = await getRestaurantDetails();
    const openHours = convertRawOpenHours(restaurantDetails.openTimes);
    this.setState({ openHours: openHours });
  };

  createHoursTable = (openHours) => {
    if (Object.keys(openHours).length === 0 && openHours.constructor === Object) return null;

    // TODO: Refactor createHoursTable to return start/end HOUR, start/end PREFIX, and just full date string (MON - FRI)
    const hours = groupHours(openHours);
    console.log(hours);
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
          <p className="phone">{`Tel: ${PHONE_NUMBER}`}</p>
        </div>
        <div className="border" />
        <div className="hours">{rows}</div>
      </div>
    );
  };

  render() {
    const hoursTable = this.createHoursTable(this.state.openHours);

    // TODO: Make the number component
    return (
      <section id="details" className="details-container">
        <div className="details">
          <p className="opening-hours">Opening Hours</p>
          <div className="hours-container">
            <HoursBox startHour={8} endHour={23} dayRange={"MON - FRI"} />
            <HoursBox startHour={8} endHour={11} dayRange={"MON - FRI"} />
            <HoursBox startHour={8} endHour={11} dayRange={"MON - FRI"} />
          </div>

          {/* <div className="hours-table">{hoursTable}</div> */}
        </div>

        {/* <MapContainer /> */}
        <Photogrid />
      </section>
    );
  }
}

class HoursBox extends React.Component {
  render() {
    const { startHour, endHour, startMinute, endMinute, dayRange } = this.props;
    return (
      <div style={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <CustomHour hour={startHour} minute={startMinute} />
        <p className="hours-box-divider">-</p>
        <CustomHour hour={endHour} minute={endMinute} />
      </div>
    );
  }
}

class CustomHour extends React.Component {
  render() {
    const { hour, minute } = this.props;
    const formattedHour = hour > 12 ? hour - 12 : hour;
    const suffix = hour < 12 ? "AM" : "PM";

    const time = minute ? `${formattedHour}:${minute}` : formattedHour;
    return (
      <div className="cr-container">
        <div className="cr-number">
          <p>{time}</p>
        </div>
        <div className="cr-suffix">
          <p>{suffix}</p>
        </div>
      </div>
    );
  }
}
