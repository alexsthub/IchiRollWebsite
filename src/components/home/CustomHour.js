import React from "react";
import "../../styles/components/home/Details.css";

export default class CustomHour extends React.Component {
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
