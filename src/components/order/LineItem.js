import React from "react";
import "../../styles/Order.css";

import { priceToString } from "../../helpers/utils";

export default class LineItem extends React.Component {
  render() {
    const { instruction, quantity, item, last } = this.props;

    const instructionElement = instruction ? (
      <div className="li-instruction-container">
        <p className="li-instruction">{instruction}</p>
      </div>
    ) : null;

    return (
      <div className={`${!last ? "li-spacing " : ""}line-item`}>
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

        <div className="li-details">
          {instructionElement}
          <div className="li-options">
            <div onClick={this.props.handleEdit}>
              <p>Edit</p>
            </div>
            <div onClick={this.props.handleRemove}>
              <p>Remove</p>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    );
  }
}
