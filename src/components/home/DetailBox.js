import React from "react";
import "../../styles/components/home/DetailBox.css";

export default class DetailBox extends React.Component {
  render() {
    const className = this.props.className ? `${this.props.className} detail-box` : "detail-box";
    return <div className={className}>{this.props.children}</div>;
  }
}
