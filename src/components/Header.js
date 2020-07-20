import React from "react";
import "../styles/components/Header.css";

import { Link } from "react-router-dom";

// TODO: Do not want to links to be purple?
export default class Header extends React.Component {
  render() {
    return (
      <header className="header" ref={this.props.refProp}>
        <p className="title">{"Ichi Roll Wok & Terriyaki"}</p>
        <div className="options-container">
          <Link to="/" className="option">
            Home
          </Link>
          <Link to="/menu" className="option">
            Menu
          </Link>
          <Link to="/order" className="option">
            Order
          </Link>
        </div>
      </header>
    );
  }
}
