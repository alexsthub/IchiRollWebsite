import React from "react";
import "../../styles/Order.css";

import { priceToString } from "../../helpers/utils";

// TODO: Spacing between line items
export default class LineItem extends React.Component {
  render() {
    const { instruction, quantity, item } = this.props;

    const instructionElement = instruction ? <p className="li-instruction">{instruction}</p> : null;

    return (
      <div className="li-container">
        <div className="li-quant-c">
          <p className="li-quantity">{`${quantity}x`}</p>
        </div>
        <div className="li-desc-c">
          <p className="li-title">{item.title.en_US}</p>
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
        <div>
          <p>{priceToString(item.price * quantity)}</p>
        </div>
      </div>
    );
  }
}
