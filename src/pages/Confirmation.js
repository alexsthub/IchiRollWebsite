import React from "react";
import "../styles/Confirmation.css";

import { formatPriceFloat } from "../helpers/utils";

import SummaryLineItem from "../components/checkout/SummaryLineItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

export default class ConfirmationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { order: {}, loading: true };
  }

  componentDidMount = () => {
    const storageCart = localStorage.getItem("cart");
    if (storageCart) {
      const cart = JSON.parse(storageCart);
      const order = {
        items: cart,
        subtotal: 43.97,
        tip: 6.6,
        tax: 4.44,
        total: 55.01,
      };
      this.setState({ order: order, loading: false });
    }
  };

  render() {
    if (this.state.loading) return null;
    const { order } = this.state;
    const lineItems = order.items.map((itemObj) => {
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
                  <h4>Order Pickup Time</h4>
                  <p>Wed, Aug 19 @ 11:45 AM</p>
                </div>

                <div className="cd-group">
                  <h4>Purchase Date</h4>
                  <p>April 17, 2020</p>
                </div>

                <div className="cd-group">
                  <h4>Method of Payment</h4>
                  <div className="flex align-center">
                    <FontAwesomeIcon
                      icon={faCreditCard}
                      style={{ fontSize: 24, marginRight: 10 }}
                    />
                    <p>Visa ******6040</p>
                  </div>
                </div>
              </div>

              <div className="flex1 flex-column">
                <div className="cd-group">
                  <h4>Order Summary</h4>
                  <div className="conf-summary-li">{lineItems}</div>
                  <div style={{ backgroundColor: "#e0dede", padding: 15 }}>
                    <div className="conf-subtotal">
                      <div className="os-details-row">
                        <p>Subtotal</p>
                        <p>{formatPriceFloat(this.state.order.subtotal)}</p>
                      </div>
                      <div className="os-details-row">
                        <p>Tip</p>
                        <p>{formatPriceFloat(this.state.order.tip)}</p>
                      </div>
                      <div className="os-details-row">
                        <p>Tax</p>
                        <p>{formatPriceFloat(this.state.order.tax)}</p>
                      </div>
                    </div>
                    <div className="os-details-row conf-total">
                      <p>TOTAL</p>
                      <p>{formatPriceFloat(this.state.order.total)}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </section>

          <footer>
            <p>Need Assistance?</p>
          </footer>
        </div>
      </div>
    );
  }
}
