import React from "react";
import "../../styles/Checkout.css";

import SummaryLineItem from "./SummaryLineItem";
import CurrencyInput from "react-currency-input-field";
import { Link } from "react-router-dom";
import { calculateNumberItems } from "../../helpers/utils";

export default class OrderSummary extends React.Component {
  render() {
    const tipButtons = this.props.tipValues.map((tip, index) => {
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
