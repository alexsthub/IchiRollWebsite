import React from "react";
import "../styles/Checkout.css";

import TextareaAutosize from "react-textarea-autosize";
import FloatingInput from "../components/checkout/FloatingInput";

// TODO: How to get this so that the header doesn't show?
// TODO: Custom tip amount
export default class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      notes: "",
      textareaHeight: 54,
      selectedTipIndex: 4,
      customTip: "",
    };
  }

  updateInput = (key, e) => {
    this.setState({ [key]: e.target.value });
  };

  handleChange = (e) => {
    const scrollHeight = e.target.scrollHeight;
    console.log(scrollHeight);
    if (scrollHeight > 54) this.setState({ textareaHeight: scrollHeight });
    this.setState({ notes: e.target.value });
  };

  handleTipClick = (e, index) => {
    e.preventDefault();
    if (this.state.selectedTipIndex !== index) this.setState({ selectedTipIndex: index });
  };

  handleCustomTipChange = (e) => {
    this.setState({ customTip: e.target.value });
  };

  render() {
    const tipButtons = tipValues.map((tip, index) => {
      return (
        <button
          key={tip.label}
          className={`tip-button${this.state.selectedTipIndex === index ? " tip-active" : ""}`}
          onClick={(e) => this.handleTipClick(e, index)}
        >
          {tip.label}
        </button>
      );
    });

    const customTip =
      this.state.selectedTipIndex === 4 ? (
        <div className="custom-tip">
          <input
            id="custom-tip"
            type="text"
            placeholder="$0.00"
            value={this.state.customTip}
            onChange={this.handleCustomTipChange}
          />
          <button>Apply</button>
        </div>
      ) : null;

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

          <div className="f-section">
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

          <div className="f-section">
            <p>Notes for Restaurant</p>
            <TextareaAutosize
              placeholder={"Add details for your order pickup here."}
              value={this.state.notes}
              onChange={this.handleChange}
            />
          </div>

          <button className="continue">Continue</button>
        </div>

        <div className="column">
          <h2>Order Summary</h2>
          <section className="order-summary">
            <div>Menu shit here</div>
            <div className="tip-container">
              <p>Tip Amount</p>
              <div className="tip-row">{tipButtons.slice(0, 3)}</div>
              <div className="tip-row">{tipButtons.slice(3)}</div>
              {customTip}
            </div>
            <div className="os-details">
              <div className="os-details-row">
                <p>Subtotal</p>
                <p>$0.00</p>
              </div>
              <div className="os-details-row">
                <p>Tip Amount</p>
                <p>$0.00</p>
              </div>
              <div className="os-details-row">
                <p>Tax</p>
                <p>$0.00</p>
              </div>
            </div>
            <div className="os-total">
              <div className="os-details-row">
                <p>Total</p>
                <p>$0.00</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

const tipValues = [
  { label: "15%", value: 0.15 },
  { label: "18%", value: 0.18 },
  { label: "20%", value: 0.2 },
  { label: "No Tip", value: 0.0 },
  { label: "Custom", value: null },
];
