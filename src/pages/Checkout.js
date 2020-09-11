import React, { createRef } from "react";
import "../styles/Checkout.css";

import {
  priceToString,
  stringToPrice,
  calculateSubtotal,
  calculateTax,
  calculateTip,
  areAllNullValues,
  getRestaurantDetails,
  getMenuDetails,
} from "../helpers/utils";
import { validateContactInformation, validatePaymentInformation } from "../helpers/validation";
import { cleanValue, getCardType, formatCardNumber, addIdentifier } from "../helpers/ccHelpers";

// Components
import OrderSummary from "../components/checkout/OrderSummary";

import { CSSTransition } from "react-transition-group";
import TextareaAutosize from "react-textarea-autosize";
import FloatingInput from "../components/checkout/FloatingInput";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

import { ccData } from "../constants/ccData";
import { tipValues, TAX_RATE } from "../constants/values";

// Wix
import { fixtures } from "wix-restaurants-js-sdk";
import {
  getContact,
  getOrderItems,
  getDispatch,
  getPlatform,
  getOrderCharges,
  getPayment,
} from "../helpers/checkoutHelpers";

export default class CheckoutScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Alex Tan",
      email: "alextan785@gmail.com",
      phone: "3605151765",
      notes: "",
      cardNumber: "413132321212122",
      cardExpiry: "11/21",
      cardSecurity: "",
      billingName: "Alex Tan",
      billingAddress: "1785 53rd Loop SE",
      billingCity: "Olympia",
      billingState: "WA",
      billingZip: "98501",
      inputErrors: {},

      cart: [],
      scheduledTime: {},
      selectedTipIndex: 0,
      customTip: null,
      appliedTip: 0,

      priceObject: null,
      activeSection: "primary",
      transitionHeight: null,
      loading: true,
    };

    this.transitionDiv = createRef();
    this.cvvInput = createRef();
    this.isBackspace = false;
    this.ccType = null;

    this.addIdentifier = addIdentifier.bind(this);
  }

  componentDidMount = async () => {
    this.restaurantDetails = await getRestaurantDetails();
    this.menu = await getMenuDetails();
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
    this.setState({ loading: false });
  };

  componentDidUpdate = () => {
    if (!this.state.transitionHeight) {
      this.calcHeight(this.transitionDiv.current);
    }
  };

  calcHeight = (el) => {
    if (!el) return;
    const height = el.offsetHeight;
    this.setState({ transitionHeight: height });
  };

  updateInput = (e, key) => {
    if (e.target.value !== this.state[key]) {
      this.updateErrors(key);
      this.setState({ [key]: e.target.value });
    }
  };

  handleExpirationChange = (e) => {
    const { cardExpiry } = this.state;
    let formattedValue;
    const value = e.target.value;

    if (this.isBackspace && cardExpiry.charAt(cardExpiry.length - 1) === "/") {
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

    this.isBackspace = false;
    this.updateErrors("cardExpiry");
    this.setState({ cardExpiry: formattedValue });
  };

  expiryKeydown = (e) => {
    if (e.keyCode === 8) {
      this.isBackspace = true;
    }
    if (e.keyCode === 13) {
      e.preventDefault();
    }
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
        this.setState({ inputErrors: updatedErrors });
      } else {
        this.setState({ activeSection: "secondary" });
      }
    } else {
      const errors = validatePaymentInformation(
        this.state.cardNumber,
        this.state.cardExpiry,
        this.state.cardSecurity,
        this.ccType,
        ccData,
        this.state.billingName,
        this.state.billingAddress,
        this.state.billingCity,
        this.state.billingState,
        this.state.billingZip
      );
      if (!areAllNullValues(errors)) {
        const updatedErrors = { ...this.state.inputErrors, ...errors };
        this.setState({ inputErrors: updatedErrors });
      } else {
        this.handleCheckout();
      }
    }
  };

  handleCheckout = () => {
    const contact = getContact(this.state.name, this.state.email, this.state.phone);
    const orderItems = getOrderItems(this.state.cart);
    const dispatch = getDispatch(this.state.scheduledTime);
    const platform = getPlatform();
    const source = "";

    const orderCharges = getOrderCharges(
      dispatch,
      orderItems,
      stringToPrice(this.state.priceObject.tip),
      source,
      platform,
      this.menu.chargesV2,
      this.restaurantDetails.timezone
    );

    const total = stringToPrice(this.state.priceObject.total);

    // TODO: What is the card object?
    const payment = getPayment(stringToPrice(this.state.priceObject.total), null);

    const order = fixtures
      .Order()
      .setRestaurantId(this.restaurantDetails.id)
      .setDeveloperId(null)
      .setSource(source)
      .setPlatform(platform)
      .setLocale("en_US")
      .setCurrency("USD")
      .setOrderItems(orderItems)
      .setOrderCharges(orderCharges)
      .setContact(contact)
      .setDispatch(dispatch)
      .addPayment(payment)
      .setPrice(total);

    if (this.state.notes !== "") order.setComment(this.state.notes);

    // clients.wixRestaurantsClient.submitOrder({ order }).then((submittedOrder) => {
    //   if (submittedOrder.status === "pending") {
    //     console.log(
    //       `Order has been submitted. Order ID is ${submittedOrder.id}. Order requires SMS confirmation.`
    //     );
    //   } else {
    //     console.log(`Order has been submitted. Order ID is ${submittedOrder.id}.`);
    //   }
    // });
  };

  render() {
    if (this.state.loading) return null;
    const { scheduledTime } = this.state;
    const timeContent = scheduledTime.isNow
      ? "ASAP (Estimated 20 minutes)"
      : `${scheduledTime.selectedDate.label} @ ${scheduledTime.selectedTime.label}`;
    return (
      <div style={{ marginTop: 100 }} className="row" id="checkout">
        <div className="column">
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
              <div style={{ width: "100%", marginRight: "auto" }}>
                <form id="contact-form">
                  <div className="f-section">
                    <p>Contact</p>

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
                  </div>

                  <div className="f-section">
                    <p>Notes for Restaurant</p>
                    <TextareaAutosize
                      placeholder={"Add details for your order pickup here."}
                      value={this.state.notes}
                      onChange={(e) => this.setState({ notes: e.target.value })}
                    />
                  </div>
                </form>
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
                <form id="billing-form">
                  <div className="payment-container">
                    <h2 style={{ marginBottom: 5 }}>Payment Information</h2>

                    <div id="card-info">
                      <h4>Payment Method</h4>
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
                        onChange={(e) => {
                          this.setState({ cardNumber: this.monitorCCFormat(e) });
                          this.updateErrors("cardNumber");
                        }}
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
                          onKeyDown={this.expiryKeydown}
                          onChange={this.handleExpirationChange}
                          stateKey={"cardExpiry"}
                          maxLength={5}
                          errorText={this.state.inputErrors.cardExpiry}
                        />
                        <FloatingInput
                          refProp={this.cvvInput}
                          className="flex1"
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
                      </div>
                    </div>

                    <div id="billing-info">
                      <h4>Billing Address</h4>
                      <FloatingInput
                        label={"Full Name"}
                        name={"billing-name"}
                        placeholder={"Full Name"}
                        autoComplete={"name"}
                        value={this.state.billingName}
                        onChange={this.updateInput}
                        stateKey={"billingName"}
                        errorText={this.state.inputErrors.billingName}
                        onKeyDown={this.preventEnterSubmit}
                      />

                      <FloatingInput
                        label={"Address"}
                        name={"billing-adddress"}
                        placeholder={"Address"}
                        autoComplete={"billing street-address"}
                        value={this.state.billingAddress}
                        onChange={this.updateInput}
                        stateKey={"billingAddress"}
                        errorText={this.state.inputErrors.billingAddress}
                        onKeyDown={this.preventEnterSubmit}
                      />

                      <div style={{ display: "flex" }}>
                        <FloatingInput
                          className="flex1 space-right"
                          label={"City"}
                          name={"billing-city"}
                          placeholder={"City"}
                          autoComplete={"billing address-level2"}
                          value={this.state.billingCity}
                          onChange={this.updateInput}
                          stateKey={"billingCity"}
                          errorText={this.state.inputErrors.billingCity}
                          onKeyDown={this.preventEnterSubmit}
                        />
                        <FloatingInput
                          className="flex1 space-right"
                          label={"State"}
                          name={"billing-state"}
                          placeholder={"State"}
                          autoComplete={"billing address-level1"}
                          value={this.state.billingState}
                          onChange={this.updateInput}
                          stateKey={"billingState"}
                          errorText={this.state.inputErrors.billingState}
                          onKeyDown={this.preventEnterSubmit}
                        />

                        <FloatingInput
                          className="flex1"
                          label={"Zip Code"}
                          name={"card-zip"}
                          placeholder={"Zip Code"}
                          type={"text"}
                          pattern="\d*"
                          autoComplete={"billing postal-code"}
                          autoCapitalize="off"
                          autoCorrect="off"
                          spellCheck="off"
                          value={this.state.billingZip}
                          onChange={this.handlePaymentChange}
                          onKeyDown={this.preventEnterSubmit}
                          stateKey={"billingZip"}
                          maxLength={5}
                          errorText={this.state.inputErrors.billingZip}
                        />
                      </div>
                    </div>

                    <p style={{ color: "#aaa", marginTop: 0 }}>
                      All payments are secure and encrypted.
                    </p>
                  </div>
                </form>
              </div>
            </CSSTransition>
          </div>

          <button className="continue" onClick={this.handleContinue} type="submit">
            {this.state.activeSection === "primary" ? "Continue" : "Complete Purchase"}
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
          tipValues={tipValues}
        />
      </div>
    );
  }
}
