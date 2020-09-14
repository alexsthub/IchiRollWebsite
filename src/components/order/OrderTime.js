import React from "react";
import "../../styles/Order.css";

import Dropdown from "../Dropdown";

export default class OrderTime extends React.Component {
  handleClick = (e, isNow) => {
    e.preventDefault();
    if (!this.props.isNowAvailable && isNow) return;

    if (this.props.isNow !== isNow) {
      this.props.handleTimeTypeChange(isNow);
    }
  };

  render() {
    if (!this.props.selectedDate || !this.props.selectedTime) return null;

    const transformLocation = this.props.isNow ? "translateX(0%)" : "translateX(calc(100% - 10px))";

    return (
      <div className="order-time-container">
        <div className="oval-exterior">
          <div className="pickup oval">Pickup</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", marginTop: 3, marginBottom: 3 }}>
          <p className="time-text">for</p>
          <div className="switch">
            <div className="switch-background" style={{ transform: transformLocation }} />
            <div
              className={`switch-option${this.props.isNow ? " switch-select" : ""}${
                this.props.isNowAvailable ? "" : " switch-disabled"
              }`}
              onClick={(e) => this.handleClick(e, true)}
            >
              <span>Now</span>
              {!this.props.isNowAvailable ? <span>Unavailable</span> : null}
            </div>
            <div
              className={`switch-option${!this.props.isNow ? " switch-select" : ""}`}
              onClick={(e) => this.handleClick(e, false)}
            >
              Later
            </div>
          </div>
        </div>

        {!this.props.isNow ? (
          <div className="later-container">
            <p className="time-text">at</p>
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
        ) : null}
      </div>
    );
  }
}
