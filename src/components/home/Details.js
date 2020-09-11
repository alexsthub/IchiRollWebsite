import React from "react";
import "../../styles/components/home/Details.css";

import HoursBox from "./HoursBox";
import Photogrid from "./Photogrid";
import MapContainer from "./MapContainer.js";

import { getRestaurantDetails } from "../../helpers/utils";
import { convertRawOpenHours, groupHours } from "../../helpers/hoursParser";

import { PHONE_NUMBER } from "../../constants/values";

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
