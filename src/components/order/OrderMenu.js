import React from "react";
import "../../styles/Order.css";

import OrderCategory from "./OrderCategory";
import MenuItem from "../MenuItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

export default class OrderMenu extends React.Component {
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
            <p>(0 items)</p>
          </div>
          <div className="ob-summary">
            <FontAwesomeIcon className="shopping-icon" icon={faShoppingBag} size="4x" />
            <p>Choose an item from the menu to get started.</p>
          </div>
          <div className="ob-border" />
          <div className="ob-line-container">
            <div className="ob-summary-line">
              <p>Subtotal</p>
              <p>$13.00</p>
            </div>
            <div className="ob-summary-line">
              <p>Tax:</p>
              <p>$1.00</p>
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
