import React from "react";
import "../../styles/Checkout.css";

import { priceToString } from "../../helpers/utils";

export default class SummaryLineItem extends React.Component {
  render() {
    const { instruction, quantity, item } = this.props;
    const instructionElement = instruction ? (
      <div className="li-instruction-container">
        <p className="li-instruction">{instruction}</p>
      </div>
    ) : null;
    return (
      <div style={{ marginTop: 10, marginBottom: 10 }}>
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

        <div className="li-details">{instructionElement}</div>
      </div>
    );
  }
}
