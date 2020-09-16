import React from "react";
import "../../styles/Order.css";

import MenuItem from "../menu/MenuItem";

import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default class OrderSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showItems: true };
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ showItems: !this.state.showItems });
  };

  render() {
    const { category, categoryItems } = this.props;
    const renderedItems = categoryItems.map((item) => {
      return (
        <MenuItem
          key={item.title.en_US}
          item={item}
          className={"order-item"}
          onClick={this.props.onItemClick}
          style={{ marginBottom: 10 }}
        />
      );
    });

    const icon = this.state.showItems ? faChevronUp : faChevronDown;
    let titleContainerStyle = this.props.index === 0 ? { borderTop: "none" } : null;

    return (
      <div>
        <div
          className="alt-category-title-container"
          onClick={this.handleClick}
          style={titleContainerStyle}
        >
          <p className="alt-category-title">{category}</p>
          <FontAwesomeIcon style={{ color: "gray", marginRight: 10 }} icon={icon} size="sm" />
        </div>

        <SlideDown className="slide-transition" transitionOnAppear={false}>
          {this.state.showItems ? renderedItems : null}
        </SlideDown>
      </div>
    );
  }
}
