import React from "react";
import "../../styles/Order.css";

import OrderCategory from "./OrderCategory";
import MenuItem from "../MenuItem";
import LineItem from "../order/LineItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

import { priceToString } from "../../helpers/utils";

const TAX_RATE = 0.101;
export default class OrderMenu extends React.Component {
  calculateNumberItems = () => {
    if (this.props.cart.length === 0) return 0;
    let num = 0;
    this.props.cart.forEach((itemObj) => {
      num += itemObj.quantity;
    });
    return num;
  };

  calculatePrices = () => {
    const subtotal = this.calculateSubtotal();
    const tax = this.calculateTax(subtotal);
    const total = subtotal + tax;

    const priceObject = {
      subtotal: priceToString(subtotal),
      tax: priceToString(tax),
      total: priceToString(total),
    };
    return priceObject;
  };

  calculateSubtotal = () => {
    if (this.props.cart.length === 0) return 0;
    let subtotal = 0;
    this.props.cart.forEach((itemObj) => {
      const price = itemObj.item.price;
      const quantity = itemObj.quantity;
      const itemTotal = price * quantity;
      subtotal += itemTotal;
    });
    return subtotal;
  };

  calculateTax = (subtotal) => {
    return subtotal * TAX_RATE;
  };

  render() {
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

    const categoryItems = this.props.menu[this.props.selectedCategory];
    const renderedItems = categoryItems.map((item) => {
      return (
        <MenuItem
          key={item.title.en_US}
          item={item}
          className={"order-item"}
          onClick={this.props.onItemClick}
        />
      );
    });

    const cart =
      this.props.cart.length === 0 ? (
        <div className="ob-summary-empty">
          <FontAwesomeIcon className="shopping-icon" icon={faShoppingBag} size="4x" />
          <p>Choose an item from the menu to get started.</p>
        </div>
      ) : (
        <div style={{ marginLeft: 15, marginRight: 15 }}>
          {this.props.cart.map((orderObject, i) => {
            // TODO: Same key problem
            return (
              <LineItem
                key={orderObject.item.id + orderObject.quantity + orderObject.specialInstruction}
                item={orderObject.item}
                quantity={orderObject.quantity}
                instruction={orderObject.specialInstruction}
                index={i}
                last={i === this.props.cart.length - 1}
                handleEdit={this.props.handleListItemEdit}
                handleRemove={() => this.props.handleListItemRemove(i)}
              />
            );
          })}
        </div>
      );

    const pricingObject = this.calculatePrices();

    return (
      <div className="order-menu">
        <div className="col order-category">
          <p style={{ fontWeight: "bold", marginLeft: 15 }}>Categories</p>
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
          <div className="checkout-container">
            <div className="checkout">Checkout</div>
          </div>
        </div>
      </div>
    );
  }
}
