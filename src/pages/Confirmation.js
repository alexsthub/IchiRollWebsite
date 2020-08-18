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
              <div className="flex1 flex-column">
                <div className="cd-group">
                  <h4>Ordered From</h4>
                  <p style={{ fontWeight: 600 }}>{"Ichi Roll Wok & Teriyaki"}</p>
                  <p>{"306 N 125th St, Seattle, WA 98133"}</p>
                  <p style={{ fontSize: 14 }}>(206) 363-5100</p>
                </div>

                <div className="cd-group">
                  <h4>Ordered By</h4>
                  <p>Alex Tan</p>
                  <p>alextan785@gmail.com</p>
                  <p>(360) 515-1765</p>
                </div>
              </div>

              <div className="flex1 flex-column">
                <div className="cd-group">
                  <h4>Order Date</h4>
                  <p>Wed, Aug 19 @ 11:45 AM</p>
                </div>

                <div className="cd-group">
                  <h4>Method of Payment</h4>
                  <p>Visa **********6040</p>
                </div>
              </div>

              <div className="flex1 flex-column">
                <div className="cd-group">
                  <h4>Order Summary</h4>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
