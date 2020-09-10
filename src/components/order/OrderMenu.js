import React from "react";
import "../../styles/Order.css";

import OrderCategory from "./OrderCategory";
import MenuItem from "../menu/MenuItem";
import LineItem from "../order/LineItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

// TODO: order-items class. Grid before
export default class OrderMenu extends React.Component {
  calculateNumberItems = () => {
    if (this.props.cart.length === 0) return 0;
    let num = 0;
    this.props.cart.forEach((itemObj) => {
      num += itemObj.quantity;
    });
    return num;
  };

  render() {
    if (!this.props.menu || !this.props.selectedCategory) return null;

    const categoryItems = this.props.menu[this.props.selectedCategory];

    const categories = Object.keys(this.props.menu).map((category) => {
      return (
        <OrderCategory
          key={category}
          title={category}
          onCategoryClick={this.props.onCategoryClick}
          selected={this.props.selectedCategory === category}
        />
      );
    });

    const renderedItems = categoryItems.map((item, index) => {
      const style = index === categoryItems.length - 1 ? { marginBottom: 0 } : null;
      return (
        <MenuItem
          style={style}
          key={item.title.en_US}
          item={item}
          className={"order-item"}
          onClick={this.props.onItemClick}
        />
      );
    });

    const pricingObject = this.props.priceObject;

    let cart;
    let summary;
    if (this.props.cart.length === 0) {
      cart = (
        <div className="ob-summary-empty">
          <FontAwesomeIcon className="shopping-icon" icon={faShoppingBag} size="4x" />
          <p>Choose an item from the menu to get started.</p>
        </div>
      );
    } else {
      cart = (
        <div style={{ marginLeft: 15, marginRight: 15 }}>
          {this.props.cart.map((orderObject, i) => {
            return (
              <LineItem
                key={orderObject.item.id + orderObject.timestamp}
                item={orderObject.item}
                quantity={orderObject.quantity}
                instruction={orderObject.specialInstruction}
                index={i}
                last={i === this.props.cart.length - 1}
                handleEdit={() => this.props.handleListItemEdit(i)}
                handleRemove={() => this.props.handleListItemRemove(i)}
              />
            );
          })}
        </div>
      );

      summary = (
        <div>
          <div className="ob-line-container">
            <div className="ob-summary-line">
              <p>Subtotal</p>
              <p>{pricingObject.subtotal}</p>
            </div>
            <div className="ob-summary-line">
              <p>Tax:</p>
              <p>{pricingObject.tax}</p>
            </div>
            <div className="ob-summary-line">
              <p>Total:</p>
              <p>{pricingObject.total}</p>
            </div>
          </div>

          <div className="checkout-container" onClick={this.props.handleCheckout}>
            <div className={`checkout${this.props.cart.length === 0 ? " checkout-disabled" : ""}`}>
              Checkout
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="order-menu">
        <div className="col order-category">
          <p style={{ marginLeft: 15, fontWeight: "bold" }}>Categories</p>
          {categories}
        </div>

        <div className="col order-items">{renderedItems}</div>

        <div className="col order-basket">
          <div className="ob-header">
            <p>Order Summary</p>
            <p>{`(${this.calculateNumberItems()} items)`}</p>
          </div>

          {cart}
          <div className="ob-border" />
          {summary}
        </div>
      </div>
    );
  }
}
