import React from "react";
import "../../styles/Order.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import Modal from "react-modal";
Modal.setAppElement("#root");

export default class AltSummaryModal extends React.Component {
  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        style={customStyles}
        overlayClassName={{
          base: "AltSummaryModalOverlay",
          afterOpen: "AltSummaryModalOverlay--after-open",
          beforeClose: "AltSummaryModalOverlay--before-close",
        }}
        closeTimeoutMS={300}
      >
        <div className="alt-summary-container">
          <div>
            <p style={{ fontWeight: 600, fontSize: "1.5rem", marginTop: 0 }}>Order Summary</p>
            <div className="alt-summary-close" onClick={this.props.closeMenu}>
              <FontAwesomeIcon
                style={{ fontSize: 24, padding: 5, cursor: "pointer" }}
                icon={faTimes}
              />
            </div>
          </div>
          <div className="alt-cart-container">
            {this.props.cartElement}
            <div className="ob-border" />
            {this.props.summaryElement}
          </div>
        </div>
      </Modal>
    );
  }
}

const customStyles = {
  content: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
  },
};
