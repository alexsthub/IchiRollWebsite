import React from "react";
import "../../styles/components/menu/MenuItem.css";

import { priceToString } from "../../helpers/utils";

export default class MenuItem extends React.Component {
  handleClick = (e) => {
    if (this.props.onClick) this.props.onClick(e, this.props.item);
  };

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

    let content;
    if (!item.media.logo) {
      content = (
        <div className={`item-container-sm`} onClick={this.handleClick}>
          <div className="item-details-sm">
            <p className="item-title">{item.title.en_US}</p>
            <p className="item-price-sm">{priceToString(item.price)}</p>
          </div>
          {descriptionElement}
        </div>
      );
    } else {
      content = (
        <div className={containerClass} onClick={this.handleClick} style={this.props.style}>
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

    return content;
  }
}
