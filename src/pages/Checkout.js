import React from "react";
import "../styles/Checkout.css";

import {
  priceToString,
  calculateSubtotal,
  calculateTax,
  calculateTip,
  calculateNumberItems,
} from "../helpers/utils";

import TextareaAutosize from "react-textarea-autosize";
import CurrencyInput from "react-currency-input-field";
import FloatingInput from "../components/checkout/FloatingInput";
import LineItem from "../components/order/LineItem";

// TODO: How to get this so that the header doesn't show?
const TAX_RATE = 0.101;
export default class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      notes: "",
      textareaHeight: 54,
      selectedTipIndex: 0,
      appliedTip: 0,
      customTip: null,
      cart: [],
      priceObject: null,
    };
  }

  componentDidMount = () => {
    const storageCart = localStorage.getItem("cart");
    if (storageCart) {
      const cart = JSON.parse(storageCart);
      this.calculatePrices(cart);
      this.setState({ cart: cart });
    }
  };

  updateInput = (key, e) => {
    this.setState({ [key]: e.target.value });
  };

  handleNoteChange = (e) => {
    const scrollHeight = e.target.scrollHeight;
    if (scrollHeight > 54) this.setState({ textareaHeight: scrollHeight });
    this.setState({ notes: e.target.value });
  };

  handleTipClick = (e, index) => {
    e.preventDefault();
    if (this.state.selectedTipIndex !== index) this.calculatePrices(null, index);
    if (index === 4) this.setState({ customTip: null });
    this.setState({ selectedTipIndex: index, appliedTip: 0 });
  };

  // TODO: Whitespace in the beginning
  onTipValueChange = (value) => {
    if (value !== undefined) value = value.replace(/\s/g, "");
    if (value === undefined || !Number.isNaN(Number(value))) {
      this.setState({ customTip: value });
    }
  };

  applyTip = (e) => {
    e.preventDefault();
    const tip = Number.parseFloat(this.state.customTip) * 100;
    const appliedTip = isNaN(tip) ? 0 : tip;
    if (appliedTip) {
      const tipStr = (appliedTip / 100).toFixed(2).toString();
      this.setState({ customTip: tipStr });
    }
    this.calculatePrices(null, null, appliedTip);
    this.setState({ appliedTip: appliedTip });
  };

  calculatePrices = (cart = null, tipIndex = null, appliedTip = null) => {
    const subtotal = calculateSubtotal(cart || this.state.cart);
    const tax = calculateTax(subtotal, TAX_RATE);
    const tip = calculateTip(
      subtotal,
      tipValues[tipIndex !== null ? tipIndex : this.state.selectedTipIndex],
      appliedTip !== null ? appliedTip : this.state.appliedTip
    );
    const total = subtotal + tax + tip;

    const priceObject = {
      subtotal: priceToString(subtotal),
      tax: priceToString(tax),
      tip: priceToString(tip),
      total: priceToString(total),
    };
    this.setState({ priceObject: priceObject });
  };

  render() {
    if (!this.state.priceObject) return null;

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
          <CurrencyInput
            id="custom-tip"
            name="custom-tip"
            placeholder="$0.00"
            value={this.state.customTip}
            allowDecimals={true}
            decimalsLimit={2}
            maxLength={8}
            prefix={"$"}
            onChange={this.onTipValueChange}
            onBlur={() => {}}
          />
          <button onClick={this.applyTip}>Apply</button>
        </div>
      ) : null;

    return (
      <div style={{ marginTop: 60 }} className="row">
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
              onChange={this.handleNoteChange}
            />
          </div>

          <button className="continue">Continue</button>
        </div>

        <div className="column">
          <h2>Order Summary</h2>
          <section className="order-summary">
            <div className="os-items-container">
              <div className="os-details-row">
                <p>My Order</p>
                <p>{`(${calculateNumberItems(this.state.cart)} items)`}</p>
              </div>
            </div>
            <div className="tip-container">
              <p>Tip Amount</p>
              <div className="tip-row">{tipButtons.slice(0, 3)}</div>
              <div className="tip-row">{tipButtons.slice(3)}</div>
              {customTip}
            </div>
            <div className="os-details">
              <div className="os-details-row">
                <p>Subtotal</p>
                <p>{this.state.priceObject.subtotal}</p>
              </div>
              <div className="os-details-row">
                <p>Tip Amount</p>
                <p>{this.state.priceObject.tip}</p>
              </div>
              <div className="os-details-row">
                <p>Tax</p>
                <p>{this.state.priceObject.tax}</p>
              </div>
            </div>
            <div className="os-total">
              <div className="os-details-row">
                <p>Total</p>
                <p>{this.state.priceObject.total}</p>
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
  { label: "No Tip", value: 0 },
  { label: "Custom", value: null },
];
