import React from "react";
import "../styles/Order.css";

import { getRestaurantDetails, addDaysToDate } from "../helpers/utils";
import { convertRawOpenHours } from "../helpers/hoursParser";

import Dropdown from "../components/Dropdown";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default class OrderScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { type: "ASAP", date: null, time: null, openHours: null };
  }

  componentDidMount = async () => {
    const restaurantDetails = await getRestaurantDetails();
    const openHours = convertRawOpenHours(restaurantDetails.openTimes);

    const firstDay = this.selectFirstAvailableTime(openHours);
    this.setState({ date: firstDay });
    // this.setState({ openHours: openHours });
  };

  selectFirstAvailableTime = (openHours) => {
    let date = new Date();

    let dayOfWeek = date.getDay() - 1;
    const currentHour = date.getHours();
    const currentMinute = date.getMinutes();
    let hours = openHours[dayOfWeek];
    if (!this._withinTimeRange(hours, currentHour, currentMinute)) {
      let daysAdded = 0;
      while (true) {
        dayOfWeek = dayOfWeek === 6 ? 1 : dayOfWeek + 1;
        hours = openHours[dayOfWeek];
        daysAdded = daysAdded + 1;
        if (hours) {
          date = addDaysToDate(date, daysAdded);
          date.setHours(hours.startHour, hours.startMinute);
          break;
        }
      }
    }
    console.log(date);
    // this.setState({ random: "blah" });
    // TODO: What to do with the date
  };

  _withinTimeRange = (hours, currentHour, currentMinute) => {
    if (!hours) return false;
    return (
      (hours.startHour < currentHour && currentHour < hours.endHour) ||
      (currentHour === hours.startHour && currentMinute >= hours.startMinute) ||
      (currentHour === hours.endHour && currentMinute < hours.endMinute)
    );
  };

  updateScheduledTime = (stuff) => {
    //
  };

  render() {
    if (this.state.date === null) return null;

    return (
      <div className="order-outer">
        <div className="order-inner">
          <OrderHeader />
          <OrderTime openHours={this.state.openHours} onSave={this.updateScheduledTime} />
        </div>
      </div>
    );
  }
}

class OrderHeader extends React.Component {
  render() {
    return (
      <div className="order-header">
        <p>{"Ichi Roll Wok & Teriyaki"}</p>
        <div className="order-location">
          <FontAwesomeIcon
            style={{ color: "#13AA6D", marginRight: 10 }}
            icon={faMapMarkerAlt}
            size="sm"
          />
          <p>306 N 125th St, Seattle, WA 98133</p>
        </div>
      </div>
    );
  }
}

// TODO: How the fuck do i make a switch here
class OrderTime extends React.Component {
  render() {
    return (
      <div className="order-time-container">
        <div className="pickup oval">Pickup</div>
        <p>for</p>
        <div className="switch oval">ASAP / Scheduled Switch</div>
        <p>at</p>
        <Dropdown openHours={this.props.openHours} onSave={this.props.onSave} />
      </div>
    );
  }
}
