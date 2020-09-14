import React from "react";
import "../../styles/Order.css";

import OrderCategory from "./OrderCategory";
import MenuItem from "../menu/MenuItem";
import LineItem from "../order/LineItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faTimes } from "@fortawesome/free-solid-svg-icons";

import Modal from "react-modal";
Modal.setAppElement("#root");

// TODO: Make the "at (later)" thing go down to the row below at some width
// TODO: Figure out what to do with the FUCKING CATEGORIES!!!!!!!!!!

// TODO: Add a back button to checkout?
const MEDIA_BREAKPOINT = 1000;
export default class OrderMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openModal: false };
  }

  componentDidMount = () => {
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
    const numItemText = numItems === 1 ? "(1 item)" : `(${numItems} items)`;
    const altNumItemText = numItems === 1 ? "1 Item in Order" : `${numItems} Items in Order`;
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
            <p>{numItemText}</p>
          </div>

          {cart}
          <div className="ob-border" />
          {summary}
        </div>

        {numItems !== 0 ? (
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

class AltSummaryModal extends React.Component {
  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        style={customStyles}
        overlayClassName={{
          base: "AltSummaryModalOverlay",
          afterOpen: "AltSummaryModalOverlay--after-open",
          beforeClose: "AltSummaryModalOverlay--before-close",
        }}
        closeTimeoutMS={300}
      >
        <div className="alt-summary-container">
          <div>
            <p style={{ fontWeight: 600, fontSize: "1.5rem", marginTop: 0 }}>Order Summary</p>
            <div className="alt-summary-close" onClick={this.props.closeMenu}>
              <FontAwesomeIcon
                style={{ fontSize: 24, padding: 5, cursor: "pointer" }}
                icon={faTimes}
              />
            </div>
          </div>
          <div className="alt-cart-container">
            {this.props.cartElement}
            <div className="ob-border" />
            {this.props.summaryElement}
          </div>
        </div>
      </Modal>
    );
  }
}

const customStyles = {
  content: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
  },
};
