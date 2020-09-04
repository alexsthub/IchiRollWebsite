import React from "react";
import "../../styles/Order.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default class OrderHeader extends React.Component {
  render() {
    return (
      <div className="order-header">
        <p>{"Ichi Roll Wok & Teriyaki"}</p>
        <div className="order-location">
          <FontAwesomeIcon style={{ marginRight: 10 }} icon={faMapMarkerAlt} size="sm" />
          <p>306 N 125th St, Seattle, WA 98133</p>
        </div>
      </div>
    );
  }
}
