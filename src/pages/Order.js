import React from "react";
import "../styles/Order.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faCalendar } from "@fortawesome/free-solid-svg-icons";

export default class OrderScreen extends React.Component {
  render() {
    return (
      <div className="order-outer">
        <div className="order-inner">
          <OrderHeader />
          <OrderTime />
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
// TODO: Time is clickable to have a dropdown for date and time
class OrderTime extends React.Component {
  render() {
    return (
      <div className="order-time-container">
        <div className="pickup oval">Pickup</div>
        <p>for</p>
        <div className="switch oval">ASAP / Scheduled Switch</div>
        <p>at</p>
        <div className="time oval">
          <FontAwesomeIcon style={{ marginRight: 5 }} icon={faCalendar} />
          <div>Tue, July 28 @ 6:15 PM</div>
        </div>
      </div>
    );
  }
}
