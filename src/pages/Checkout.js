import React from "react";
import "../styles/Checkout.css";

import FloatingInput from "../components/checkout/FloatingInput";

// TODO: How to get this so that the header doesn't show?
export default class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", phone: "" };
  }

  updateInput = (key, e) => {
    this.setState({ [key]: e.target.value });
  };

  render() {
    return (
      <div className="row">
        <div className="column">
          <h2>Pickup Information</h2>
          <div className="pickup-details" id="address">
            <p>Address</p>
            <p>{"Ichi Roll Wok & Teriyaki"}</p>
            <p>{"306 N 125th St, Seattle, WA 98133"}</p>
          </div>

          <div className="pickup-details" id="time">
            <p>Time</p>
            <p>ASAP (Estimated 20 minutes)</p>
          </div>

          <div className="contact-form">
            <p>Contact</p>

            <FloatingInput
              label={"Name"}
              name={"contact-name"}
              placeholder={"Name"}
              autocomplete={"name"}
              value={this.state.name}
              onChange={this.updateInput}
              stateKey={"name"}
            />

            <FloatingInput
              label={"Email"}
              name={"contact-email"}
              placeholder={"Email Address"}
              autocomplete={"email"}
              value={this.state.email}
              onChange={this.updateInput}
              stateKey={"email"}
            />

            <FloatingInput
              label={"Phone Number"}
              name={"contact-phone"}
              placeholder={"Phone Number"}
              autocomplete={"tel"}
              value={this.state.phone}
              onChange={this.updateInput}
              stateKey={"phone"}
            />
          </div>

          <button>Continue</button>
        </div>
        <div className="column">
          <h2>Order Summary</h2>
        </div>
      </div>
    );
  }
}
