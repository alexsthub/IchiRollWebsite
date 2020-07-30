import React from "react";
import "../../styles/Order.css";

export default class OrderCategory extends React.Component {
  render() {
    return (
      <div
        className={`oc-option${this.props.selected ? " oc-selected" : ""}`}
        onClick={(e) => this.props.onCategoryClick(e, this.props.title)}
      >
        <p>{this.props.title}</p>
      </div>
    );
  }
}
