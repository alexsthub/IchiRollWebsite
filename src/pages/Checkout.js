import React, { createRef } from "react";
import "../styles/Checkout.css";

import {
  priceToString,
  calculateSubtotal,
  calculateTax,
  calculateTip,
  calculateNumberItems,
} from "../helpers/utils";

import { CSSTransition } from "react-transition-group";
import TextareaAutosize from "react-textarea-autosize";
import CurrencyInput from "react-currency-input-field";
import FloatingInput from "../components/checkout/FloatingInput";

// TODO: Editing

// TODO: The text inputs render half then another half for choppiness
// TODO: Height does not transition the first time unless width style is already applied

// TODO: How to get this so that the header doesn't show?
const TAX_RATE = 0.101;
export default class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Alex Tan",
      email: "alextan785@gmail.com",
      phone: "3605151765",
      notes: "",
      cardNumber: "",
      textareaHeight: 54,
      selectedTipIndex: 0,
      appliedTip: 0,
      customTip: null,
      cart: [],
      priceObject: null,
      scheduledTime: {},
      activeSection: "secondary",
      transitionHeight: null,
    };

    this.transitionDiv = createRef();
  }

  componentDidMount = () => {
    const storageCart = localStorage.getItem("cart");
    const scheduledTimeStr = localStorage.getItem("time");
    if (storageCart) {
      const cart = JSON.parse(storageCart);
      this.calculatePrices(cart);
      this.setState({ cart: cart });
    }
    if (scheduledTimeStr) {
      const scheduledTime = JSON.parse(scheduledTimeStr);
      this.setState({ scheduledTime: scheduledTime });
    }
  };

  updateInput = (e, key) => {
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

  // TODO: Field verification
  handleContinue = (e) => {
    e.preventDefault();
    if (this.state.activeSection === "primary") {
      console.log("ye");
      this.setState({ activeSection: "secondary" });
    } else {
      this.setState({ activeSection: "primary" });
    }
    // this.setState({ activeSection: "secondary" });
  };

  calcHeight = (el) => {
    const height = el.offsetHeight;
    this.setState({ transitionHeight: height });
  };

  render() {
    if (!this.state.priceObject) return null;
    const { scheduledTime } = this.state;
    const timeContent = scheduledTime.isNow
      ? "ASAP (Estimated 20 minutes)"
      : `${scheduledTime.selectedDate.label} @ ${scheduledTime.selectedTime.label}`;

    return (
      <div style={{ marginTop: 60 }} className="row" id="checkout">
        <div className="column">
          <h2>Pickup Information</h2>
          <div className="pickup-details" id="address">
            <p>Address</p>
            <p>{"Ichi Roll Wok & Teriyaki"}</p>
            <p>{"306 N 125th St, Seattle, WA 98133"}</p>
          </div>

          <div className="pickup-details" id="time">
            <p>Time</p>
            <p>{timeContent}</p>
          </div>

          <div
            className="trans-div"
            style={{ height: this.state.transitionHeight }}
            ref={this.transitionDiv}
          >
            <CSSTransition
              in={this.state.activeSection === "primary"}
              timeout={400}
              classNames="primary"
              unmountOnExit
              onEnter={this.calcHeight}
            >
              <div>
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
              </div>
            </CSSTransition>

            <CSSTransition
              in={this.state.activeSection === "secondary"}
              timeout={400}
              classNames="secondary"
              unmountOnExit
              onEnter={this.calcHeight}
            >
              <div>
                <div className="contact-container">
                  <div className="os-details-row ci">
                    <p>Contact Information</p>
                    <button onClick={() => this.setState({ activeSection: "primary" })}>
                      Edit
                    </button>
                  </div>
                  <p>{this.state.name}</p>
                  <p>{this.state.email}</p>
                  <p>{this.state.phone}</p>
                </div>
                <div className="payment-container">
                  <h2>Payment Information</h2>
                  <FloatingInput
                    label={"Card Number"}
                    name={"card-number"}
                    placeholder={"Card Number"}
                    type={"tel"}
                    autoComplete={"cc-number"}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="off"
                    pattern="\d*"
                    value={this.state.cardNumber}
                    onChange={this.updateInput}
                    stateKey={"cardNumber"}
                    maxLength={18}
                  />

                  <div style={{ display: "flex" }}>
                    <FloatingInput
                      className="flex1 space-right"
                      label={"Card Expiry Date"}
                      name={"card-expiry"}
                      placeholder={"MM/YY"}
                      type={"tel"}
                      autoCapitalize="off"
                      autoCorrect="off"
                      spellCheck="off"
                      pattern="\d*"
                      value={this.state.cardNumber}
                      onChange={this.updateInput}
                      stateKey={"cardNumber"}
                      maxLength={5}
                    />
                    <FloatingInput
                      className="flex1 space-right"
                      label={"Security Code"}
                      name={"card-sc"}
                      placeholder={"Security Code"}
                      type={"tel"}
                      autoComplete={"cc-number"}
                      autoCapitalize="off"
                      autoCorrect="off"
                      spellCheck="off"
                      pattern="\d*"
                      value={this.state.cardNumber}
                      onChange={this.updateInput}
                      stateKey={"cardNumber"}
                      maxLength={4}
                    />
                    <FloatingInput
                      className="flex1"
                      label={"Zip Code"}
                      name={"card-zip"}
                      placeholder={"Zip Code"}
                      type={"text"}
                      autoComplete={"shipping postal-code"}
                      autoCapitalize="off"
                      autoCorrect="off"
                      spellCheck="off"
                      value={this.state.cardNumber}
                      onChange={this.updateInput}
                      stateKey={"cardNumber"}
                      maxLength={10}
                    />
                  </div>
                </div>
              </div>
            </CSSTransition>
          </div>

          <button className="continue" onClick={this.handleContinue}>
            Continue
          </button>
        </div>

        <OrderSummary
          cart={this.state.cart}
          priceObject={this.state.priceObject}
          selectedTipIndex={this.state.selectedTipIndex}
          handleTipClick={this.handleTipClick}
          onTipValueChange={this.onTipValueChange}
          customTip={this.state.customTip}
          applyTip={this.applyTip}
        />
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

class OrderSummary extends React.Component {
  render() {
    const tipButtons = tipValues.map((tip, index) => {
      return (
        <button
          key={tip.label}
          className={`tip-button${this.props.selectedTipIndex === index ? " tip-active" : ""}`}
          onClick={(e) => this.props.handleTipClick(e, index)}
        >
          {tip.label}
        </button>
      );
    });

    const customTip =
      this.props.selectedTipIndex === 4 ? (
        <div className="custom-tip">
          <CurrencyInput
            id="custom-tip"
            name="custom-tip"
            placeholder="$0.00"
            value={this.props.customTip}
            allowDecimals={true}
            decimalsLimit={2}
            maxLength={8}
            prefix={"$"}
            onChange={this.props.onTipValueChange}
            onBlur={() => {}}
          />
          <button onClick={this.props.applyTip}>Apply</button>
        </div>
      ) : null;

    const lineItems = this.props.cart.map((itemObj) => {
      return (
        <SummaryLineItem
          key={itemObj.item.id + itemObj.timestamp}
          item={itemObj.item}
          quantity={itemObj.quantity}
          instruction={itemObj.specialInstruction}
        />
      );
    });

    return (
      <div className="column">
        <h2>Order Summary</h2>
        <section className="order-summary">
          <div className="os-items-container">
            <div className="os-details-row">
              <h4>My Order</h4>
              <p>{`(${calculateNumberItems(this.props.cart)} items)`}</p>
            </div>
            {lineItems}
            <a>Edit Order</a>
          </div>
          <div className="tip-container">
            <h4>Tip Amount</h4>
            <div className="tip-row">{tipButtons.slice(0, 3)}</div>
            <div className="tip-row">{tipButtons.slice(3)}</div>
            {customTip}
          </div>
          <div className="os-details">
            <div className="os-details-row">
              <p>Subtotal</p>
              <p>{this.props.priceObject.subtotal}</p>
            </div>
            <div className="os-details-row">
              <p>Tip Amount</p>
              <p>{this.props.priceObject.tip}</p>
            </div>
            <div className="os-details-row">
              <p>Tax</p>
              <p>{this.props.priceObject.tax}</p>
            </div>
          </div>
          <div className="os-total">
            <div className="os-details-row">
              <p>Total</p>
              <p>{this.props.priceObject.total}</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

class SummaryLineItem extends React.Component {
  render() {
    const { instruction, quantity, item } = this.props;
    const instructionElement = instruction ? (
      <div className="li-instruction-container">
        <p className="li-instruction">{instruction}</p>
      </div>
    ) : null;
    return (
      <div style={{ marginTop: 10, marginBottom: 10 }}>
        <div className="li-container">
          <div className="li-quant-c">
            <p className="li-quantity">{`${quantity}x`}</p>
          </div>
          <div className="li-desc-c">
            <p className="li-title">{item.title.en_US}</p>
          </div>
          <div>
            <p>{priceToString(item.price * quantity)}</p>
          </div>
        </div>

        <div className="li-details">{instructionElement}</div>
      </div>
    );
  }
}
