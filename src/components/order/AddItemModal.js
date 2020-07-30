import React from "react";
import "../../styles/Order.css";

import { priceToString } from "../../helpers/utils";

// 3P Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
Modal.setAppElement("#root");

const MAX_LENGTH = 80;
export default class AddItemModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quantity: 1, specialInstructions: "" };
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.item === null) {
      return { quantity: 1, specialInstructions: "" };
    }
    return null;
  }

  handleChange = (e) => {
    this.setState({ specialInstructions: e.target.value });
  };

  handleQuantity = (value) => {
    if (value === 1) this.setState({ quantity: this.state.quantity + 1 });
    else if (value === -1 && this.state.quantity > 1)
      this.setState({ quantity: this.state.quantity - 1 });
  };

  handleAdd = (e) => {
    e.preventDefault();
    this.props.onAdd(this.props.item, this.state.quantity, this.state.specialInstructions);
  };

  render() {
    const { item } = this.props;
    const content = item ? (
      <div className="m-content-container">
        <div className="m-details">
          <div style={{ display: "flex" }}>
            <p className="m-title">{item.title.en_US}</p>
          </div>
          {item.description.en_US !== "" ? <p>{item.description.en_US}</p> : null}
          <p>{priceToString(item.price)}</p>
        </div>

        <div className="m-instructions">
          <p className="m-request-header">Special requests?</p>
          <div className="textarea-wrapper">
            <textarea
              className="m-text"
              value={this.state.specialInstructions}
              onChange={this.handleChange}
              maxLength={MAX_LENGTH}
              placeholder={"Add them here. We will do our best to make it happen."}
            />
            <div className="textarea-counter">
              {MAX_LENGTH - this.state.specialInstructions.length}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: 15 }}>
          <div className="quantity-container oval">
            <div className="clickable" onClick={() => this.handleQuantity(-1)}>
              <FontAwesomeIcon style={{ color: "white" }} icon={faMinus} size="sm" />
            </div>
            <span className="quantity">{this.state.quantity}</span>
            <div className="clickable" onClick={() => this.handleQuantity(1)}>
              <FontAwesomeIcon style={{ color: "white" }} icon={faPlus} size="sm" />
            </div>
          </div>

          <div onClick={this.handleAdd} className="m-add oval">
            <span>Add to Order</span>
            <span>{priceToString(item.price * this.state.quantity)}</span>
          </div>
        </div>
      </div>
    ) : null;

    return (
      <Modal
        isOpen={item !== null}
        onRequestClose={this.props.closeModal}
        style={customStyles}
        contentLabel="add item modal"
        shouldCloseOnOverlayClick={true}
        closeTimeoutMS={0}
        overlayClassName={"ReactModal__Overlay"}
      >
        {content}
      </Modal>
    );
  }
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
