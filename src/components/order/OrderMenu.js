import React from "react";
import "../../styles/Order.css";

import OrderCategory from "./OrderCategory";
import MenuItem from "../menu/MenuItem";
import LineItem from "../order/LineItem";
import AltSummaryModal from "../order/AltSummaryModal";
import AltOrderSection from "../order/AltOrderSection";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

import Modal from "react-modal";
Modal.setAppElement("#root");

// TODO: Add a back button to checkout?
const MEDIA_BREAKPOINT = 1000;
export default class OrderMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openModal: false, isAltMenu: false };
  }

  componentDidMount = () => {
    if (window.innerWidth < MEDIA_BREAKPOINT) {
      this.setState({ isAltMenu: true });
    }
    window.addEventListener("resize", this.handleModalResize);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.handleModalResize);
  };

  handleModalResize = () => {
    const width = window.innerWidth;
    if (this.state.openModal && width > MEDIA_BREAKPOINT) {
      this.setState({ openModal: false });
    }
    if (this.state.isAltMenu && width > MEDIA_BREAKPOINT) {
      this.setState({ isAltMenu: false });
    }
    if (!this.state.isAltMenu && width < MEDIA_BREAKPOINT) {
      this.setState({ isAltMenu: true });
    }
  };

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
        <div className="order-cart">
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

    const numItems = this.calculateNumberItems();

    const altNumItemText = numItems === 1 ? "1 Item in Order" : `${numItems} Items in Order`;

    let content;
    if (!this.state.isAltMenu) {
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
            key={item.title.en_US}
            style={style}
            item={item}
            className={"order-item"}
            onClick={this.props.onItemClick}
          />
        );
      });

      const numItemText = numItems === 1 ? "(1 item)" : `(${numItems} items)`;
      content = [
        <div className="col order-category" key="order-category">
          <p style={{ marginLeft: 15, fontWeight: "bold" }}>Categories</p>
          {categories}
        </div>,
        <div className="col order-items" key="order-items">
          {renderedItems}
        </div>,
        <div className="col order-basket" key="order-basket">
          <div className="ob-header">
            <p>Order Summary</p>
            <p>{numItemText}</p>
          </div>

          {cart}
          <div className="ob-border" />
          {summary}
        </div>,
      ];
    } else {
      const menuCategories = Object.keys(this.props.menu);
      const totalRenderedItems = menuCategories.map((category) => {
        const categoryItems = this.props.menu[category];
        return (
          <AltOrderSection
            key={category}
            category={category}
            categoryItems={categoryItems}
            onItemClick={this.props.onItemClick}
          />
        );
      });

      const altCheckout =
        numItems !== 0 ? (
          <div
            className="checkout-alt"
            onClick={() => this.setState({ openModal: true })}
            key="checkout-alt"
          >
            {altNumItemText}
          </div>
        ) : null;
      content = [
        <div className="col order-items" key={"alt-order-items"} style={{ marginTop: 10 }}>
          {totalRenderedItems}
        </div>,
        altCheckout,
      ];
    }

    return (
      <div className="order-menu">
        {content}

        {this.state.isAltMenu && numItems !== 0 ? (
          <div className="checkout-alt" onClick={() => this.setState({ openModal: true })}>
            {altNumItemText}
          </div>
        ) : null}

        <AltSummaryModal
          isOpen={this.state.openModal}
          closeMenu={() => this.setState({ openModal: false })}
          cartElement={cart}
          summaryElement={summary}
        />
      </div>
    );
  }
}
