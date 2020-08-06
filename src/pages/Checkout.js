import React from "react";
import "../styles/Checkout.css";

// TODO: How to get this so that the header doesn't show?
export default class Checkout extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="column">
          <p>Pickup Information</p>
        </div>
        <div className="column">
          <p>Order Summary</p>
        </div>
      </div>
    );
  }
}
