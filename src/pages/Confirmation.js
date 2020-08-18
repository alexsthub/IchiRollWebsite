import React from "react";
import "../styles/Confirmation.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

export default class ConfirmationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: 100,
        }}
      >
        <div className="confirmation">
          <section className="conf-header">
            <FontAwesomeIcon icon={faCheckCircle} className="conf-icon" />
            <p className="ch-title">We've received your order</p>
            <p className="ch-order-no">Order no# 0293120312093</p>
            <p className="ch-desc">A copy of your receipt has been sent to: alextan785@gmail.com</p>
          </section>

          <section className="conf-details">
            <h2>Pickup Details</h2>
            <div className="flex">
              <div className="pd-contact flex1">
                <h3>Pickup For</h3>
                <p>Alex Tan</p>
                <p>Email: alextan785@gmail.com</p>
                <p>Phone: (360) 515-1765</p>
              </div>
              <div className="pd-time flex1">
                <h3>Pickup Time</h3>
                <p>ASAP (Estimated 20 minutes)</p>
                <p style={{ fontWeight: 600 }}>{"Ichi Roll Wok & Teriyaki"}</p>
                <p>{"306 N 125th St, Seattle, WA 98133"}</p>
                <p style={{ fontSize: 14 }}>(206) 363-5100</p>
              </div>
            </div>
          </section>

          <section className="conf-summary">
            <h3>Order Summary</h3>
            <p>Stuff in here don't worry about it yet</p>
          </section>

          <section className="conf-payment flex">
            <div className="flex1">
              <h3>Card Information</h3>
            </div>
            <div className="flex1">
              <h3>Billing Address</h3>
              <p>Alex Tan</p>
              <p>1785 53rd Loop SE</p>
              <p>Olympia, WA 98501</p>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
