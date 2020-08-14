import React, { createRef } from "react";
import "../styles/Checkout.css";

import {
  priceToString,
  calculateSubtotal,
  calculateTax,
  calculateTip,
  calculateNumberItems,
  areAllNullValues,
} from "../helpers/utils";
import { validateContactInformation, validatePaymentInformation } from "../helpers/validation";
import { cleanValue, getCardType, formatCardNumber, addIdentifier } from "../helpers/ccHelpers";

import { CSSTransition } from "react-transition-group";
import TextareaAutosize from "react-textarea-autosize";
import CurrencyInput from "react-currency-input-field";
import FloatingInput from "../components/checkout/FloatingInput";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

import { ccData } from "../constants/ccData";

// TODO: The text inputs render half then another half for choppiness
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
      cardExpiry: "",
      cardSecurity: "",
      cardZip: "",
      inputErrors: {},

      cart: [],
      scheduledTime: {},
      textareaHeight: 54,
      selectedTipIndex: 0,
      customTip: null,
      appliedTip: 0,

      priceObject: null,
      activeSection: "primary",
      transitionHeight: null,
    };

    this.transitionDiv = createRef();
    this.cvvInput = createRef();
    this.isBackspace = false;
    this.ccType = null;

    this.addIdentifier = addIdentifier.bind(this);
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
    if (e.target.value !== this.state[key]) {
      this.updateErrors(key);
      this.setState({ [key]: e.target.value });
    }
  };

  handleExpirationChange = (e) => {
    let formattedValue;
    const value = e.target.value;
    if (this.isBackspace && value.charAt(value.length - 1) === "/") {
      formattedValue = value.substr(0, value.length - 1);
    } else {
      formattedValue = value
        .replace(/^([1-9]\/|[2-9])$/g, "0$1/")
        .replace(/^(0[1-9]|1[0-2])$/g, "$1/")
        .replace(/^([0-1])([3-9])$/g, "0$1/$2")
        .replace(/^(0?[1-9]|1[0-2])([0-9]{2})$/g, "$1/$2")
        .replace(/^([0]+)\/|[0]+$/g, "0")
        .replace(/[^\d/]|^[/]*$/g, "")
        .replace(/\/\//g, "/");
    }
    this.updateErrors("cardExpiry");
    this.setState({ cardExpiry: formattedValue });
  };

  handlePaymentChange = (e, key) => {
    const value = cleanValue(e.target.value);
    if (value !== this.state[key]) {
      this.updateErrors(key);
      this.setState({ [key]: value });
    }
  };

  updateErrors = (key) => {
    const errors = this.state.inputErrors;
    if (errors[key]) {
      errors[key] = null;
      this.setState({ errors: errors });
    }
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

  monitorCCFormat = (e) => {
    const value = e.target.value;
    const ccNum = value.replace(/\D/g, "");
    const cardType = getCardType(ccNum, ccData);
    const formattedNumber = formatCardNumber(ccNum, cardType, ccData);
    this.addIdentifier(e.target, cardType);

    if (!cardType && this.state.cardSecurity.length > 3) {
      this.setState({ cardSecurity: this.state.cardSecurity.substr(0, 3) });
    }
    return formattedNumber;
  };

  preventEnterSubmit = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };

  handleContinue = (e) => {
    e.preventDefault();
    if (this.state.activeSection === "primary") {
      const errors = validateContactInformation(
        this.state.name,
        this.state.email,
        this.state.phone
      );
      if (!areAllNullValues(errors)) {
        const updatedErrors = { ...this.state.inputErrors, ...errors };
        console.log(updatedErrors);
        this.setState({ inputErrors: updatedErrors });
      } else {
        this.setState({ activeSection: "secondary" });
      }
    } else {
      const errors = validatePaymentInformation(
        this.state.cardNumber,
        this.state.cardExpiry,
        this.state.cardSecurity,
        this.state.cardZip,
        this.ccType,
        ccData
      );
      if (!areAllNullValues(errors)) {
        const updatedErrors = { ...this.state.inputErrors, ...errors };
        this.setState({ inputErrors: updatedErrors });
      } else {
        alert("Checkout!");
      }
    }
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
          <form id="billing-info">
            <h2>Pickup Information</h2>
            <div className="pickup-details" id="address">
              <p>Address</p>
              <p>{"Ichi Roll Wok & Teriyaki"}</p>
              <p>{"306 N 125th St, Seattle, WA 98133"}</p>
            </div>

            <div className="pickup-details" id="time">
              <div className="os-details-row">
                <p>Time</p>
                <Link to="/order" className="checkout-button" style={{ fontSize: 12 }}>
                  Edit
                </Link>
              </div>
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

                    <fieldset>
                      <FloatingInput
                        label={"Name"}
                        name={"contact-name"}
                        placeholder={"Name"}
                        autoComplete={"name"}
                        value={this.state.name}
                        onChange={this.updateInput}
                        stateKey={"name"}
                        errorText={this.state.inputErrors.name}
                        onKeyDown={this.preventEnterSubmit}
                      />

                      <FloatingInput
                        label={"Email"}
                        name={"contact-email"}
                        placeholder={"Email Address"}
                        autoComplete={"email"}
                        value={this.state.email}
                        onChange={this.updateInput}
                        stateKey={"email"}
                        errorText={this.state.inputErrors.email}
                        onKeyDown={this.preventEnterSubmit}
                      />

                      <FloatingInput
                        label={"Phone Number"}
                        name={"contact-phone"}
                        placeholder={"Phone Number"}
                        autoComplete={"tel"}
                        value={this.state.phone}
                        onChange={this.updateInput}
                        stateKey={"phone"}
                        onKeyDown={this.preventEnterSubmit}
                      />
                    </fieldset>
                  </div>

                  <div className="f-section">
                    <p>Notes for Restaurant</p>
                    <fieldset>
                      <TextareaAutosize
                        placeholder={"Add details for your order pickup here."}
                        value={this.state.notes}
                        onChange={this.handleNoteChange}
                      />
                    </fieldset>
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
                    <fieldset>
                      <FloatingInput
                        label={"Card Number"}
                        name={"card-number"}
                        placeholder={"Card Number"}
                        type={"text"}
                        pattern="\d*"
                        autoComplete={"cc-number"}
                        autoCapitalize="off"
                        autoCorrect="off"
                        spellCheck="off"
                        value={this.state.cardNumber}
                        onChange={(e) => this.setState({ cardNumber: this.monitorCCFormat(e) })}
                        onKeyDown={this.preventEnterSubmit}
                        maxLength={19}
                        icon={<FontAwesomeIcon style={{ color: "lightgray" }} icon={faLock} />}
                        errorText={this.state.inputErrors.cardNumber}
                      />

                      <div style={{ display: "flex" }}>
                        <FloatingInput
                          className="flex1 space-right"
                          label={"Card Expiry Date"}
                          name={"card-expiry"}
                          placeholder={"MM/YY"}
                          type={"text"}
                          pattern="\d*"
                          autoCapitalize="off"
                          autoCorrect="off"
                          spellCheck="off"
                          value={this.state.cardExpiry}
                          onKeyDown={(e) => {
                            if (e.keyCode === 8) this.isBackspace = true;
                            if (e.keyCode === 13) e.preventDefault();
                          }}
                          onChange={this.handleExpirationChange}
                          stateKey={"cardExpiry"}
                          maxLength={5}
                          errorText={this.state.inputErrors.cardExpiry}
                        />
                        <FloatingInput
                          refProp={this.cvvInput}
                          className="flex1 space-right"
                          label={"Security Code"}
                          name={"card-sc"}
                          placeholder={"Security Code"}
                          type={"text"}
                          pattern="\d*"
                          autoComplete={"cc-csc"}
                          autoCapitalize="off"
                          autoCorrect="off"
                          spellCheck="off"
                          value={this.state.cardSecurity}
                          onChange={this.handlePaymentChange}
                          onKeyDown={this.preventEnterSubmit}
                          stateKey={"cardSecurity"}
                          maxLength={3}
                          errorText={this.state.inputErrors.cardSecurity}
                        />
                        <FloatingInput
                          className="flex1"
                          label={"Zip Code"}
                          name={"card-zip"}
                          placeholder={"Zip Code"}
                          type={"text"}
                          pattern="\d*"
                          autoComplete={"shipping postal-code"}
                          autoCapitalize="off"
                          autoCorrect="off"
                          spellCheck="off"
                          value={this.state.cardZip}
                          onChange={this.handlePaymentChange}
                          onKeyDown={this.preventEnterSubmit}
                          stateKey={"cardZip"}
                          maxLength={5}
                          errorText={this.state.inputErrors.cardZip}
                        />
                      </div>
                    </fieldset>
                    <p style={{ color: "#aaa", marginTop: 15 }}>
                      All payments are secure and encrypted.
                    </p>
                  </div>
                </div>
              </CSSTransition>
            </div>

            <button className="continue" onClick={this.handleContinue} type="submit">
              {this.state.activeSection === "primary" ? "Continue" : "Complete Purchase"}
            </button>
          </form>
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
            <div className="ci">
              <Link to="/order" className="checkout-button">
                Edit Order
              </Link>
            </div>
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
