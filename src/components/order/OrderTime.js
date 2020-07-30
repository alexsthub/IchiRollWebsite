import React from "react";
import "../../styles/Order.css";

import Dropdown from "../Dropdown";

// TODO: How the fuck do i make a switch here
export default class OrderTime extends React.Component {
  render() {
    return (
      <div className="order-time-container">
        <div className="pickup oval">Pickup</div>
        <p>for</p>
        <div className="switch oval">ASAP / Scheduled Switch</div>
        <p>at</p>
        <Dropdown
          openHours={this.props.openHours}
          dateOptions={this.props.dateOptions}
          hourOptions={this.props.hourOptions}
          selectedDate={this.props.selectedDate}
          selectedTime={this.props.selectedTime}
          updateHourOptions={this.props.updateHourOptions}
          onSave={this.props.onSave}
        />
      </div>
    );
  }
}
