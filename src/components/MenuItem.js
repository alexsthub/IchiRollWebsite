import React from "react";
import "../styles/components/MenuItem.css";

import { priceToString } from "../helpers/utils";

export default class MenuItem extends React.Component {
  render() {
    const { item } = this.props;

    const descriptionElement =
      item.description.en_US !== "" ? (
        <p className="item-description">{item.description.en_US}</p>
      ) : null;

    const imageElement = item.media.logo ? (
      <div className="item-image-container">
        <img className="item-image" src={item.media.logo} alt={item.title.en_US} />
      </div>
    ) : null;

    const containerClass = this.props.className
      ? `${this.props.className} item-container`
      : "item-container";

    return (
      <div className={containerClass} onClick={(e) => this.props.onClick(e, item)}>
        <div className="item-details">
          <div id="details-container">
            <p className="item-title">{item.title.en_US}</p>
            {descriptionElement}
          </div>
          <div id="price-container">
            <p className="item-price">{priceToString(item.price)}</p>
          </div>
        </div>
        {imageElement}
      </div>
    );
  }
}
