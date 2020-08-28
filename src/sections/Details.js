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
    this.state = { loading: true };
  }

  componentDidMount = async () => {
    const restaurantDetails = await getRestaurantDetails();
    const openHours = convertRawOpenHours(restaurantDetails.openTimes);
    this.groupedHours = groupHours(openHours);
    this.setState({ loading: false });
  };

  render() {
    if (this.state.loading) return false;

    const hours = this.groupedHours.map((hourObj) => {
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
    });

    // TODO: Hours-container cannot be space-evenly. needs to be flex: 1??
    return (
      <section id="details" className="details-container">
        <div className="details">
          <p className="opening-hours">Opening Hours</p>
          <div className="hours-container">{hours}</div>
          <p className="phone">{`Tel: ${PHONE_NUMBER}`}</p>
        </div>

        <MapContainer />
        <Photogrid />
      </section>
    );
  }
}

class HoursBox extends React.Component {
  render() {
    let timeRange;
    const { startHour, endHour, startMinute, endMinute, dayRange } = this.props;
    if (!startHour || !endHour || !dayRange) {
      timeRange = <p className="cr-number">Closed</p>;
    } else {
      timeRange = (
        <div style={{ display: "flex", alignItems: "center", textAlign: "center" }}>
          <CustomHour hour={startHour} minute={startMinute} />
          <p className="hours-box-divider">-</p>
          <CustomHour hour={endHour} minute={endMinute} />
        </div>
      );
    }
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {timeRange}
        <p className="cr-range">{dayRange}</p>
      </div>
    );
  }
}

class CustomHour extends React.Component {
  render() {
    const { hour, minute } = this.props;
    const formattedHour = hour > 12 ? hour - 12 : hour;
    const suffix = hour < 12 ? "AM" : "PM";
    const time = minute && minute !== 0 ? `${formattedHour}:${minute}` : formattedHour;
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
