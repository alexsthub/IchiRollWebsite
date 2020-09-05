import React from "react";
import "../styles/components/ImageOverlay.css";

export default class ImageOverlay extends React.Component {
  render() {
    let backgroundClassName = "background flex-center";
    if (this.props.backgroundClass)
      backgroundClassName = backgroundClassName + ` ${this.props.backgroundClass}`;

    return (
      <div className="background-container" ref={this.props.refProp} style={this.props.style}>
        <div className="background-overlay" style={{ opacity: this.props.opacity }}></div>
        <div className={backgroundClassName}></div>
        <div className="background-content flex-center">{this.props.children}</div>
      </div>
    );
  }
}
