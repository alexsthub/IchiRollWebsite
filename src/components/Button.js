import React from "react";
import PropTypes from "prop-types";
import "../styles/components/Button.css";

export default class Button extends React.Component {
  render() {
    return (
      <div className="button-container">
        <p className="button-text">{this.props.text}</p>
      </div>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string,
};
