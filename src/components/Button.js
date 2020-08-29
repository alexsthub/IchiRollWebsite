import React from "react";
import PropTypes from "prop-types";
import "../styles/components/Button.css";

export default class Button extends React.Component {
  render() {
    const icon = this.props.icon;
    const containerClass = this.props.className
      ? `${this.props.className} button-container`
      : "button-container";
    const pClass = this.props.pClassName ? `${this.props.pClassName} button-text` : "button-text";

    return (
      <div className={containerClass} onClick={this.props.onClick}>
        <p className={pClass}>{this.props.text}</p>
        {icon}
      </div>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.element,
  className: PropTypes.string,
  pClassName: PropTypes.string,
};
