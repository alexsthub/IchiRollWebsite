import React from "react";
import PropTypes from "prop-types";
import "../styles/components/Button.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default class Button extends React.Component {
  render() {
    return (
      <div className="button-container">
        <p className="button-text">{this.props.text}</p>
        <FontAwesomeIcon className="right-arrow" icon={faArrowRight} size="s" />
      </div>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string,
};
