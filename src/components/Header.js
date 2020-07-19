import React from "react";
import "../styles/components/Header.css";

export default class ActualHeader extends React.Component {
  render() {
    return (
      <header className="header">
        <p className="title">{"Ichi Roll Wok & Terriyaki"}</p>
        <div className="options-container">
          <div className="option">Home</div>
          <div className="option">Menu</div>
          <div className="option">Order</div>
        </div>
      </header>
    );
  }
}
