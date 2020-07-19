import React from "react";
import "../styles/Header.css";

import Button from "../components/Button";

export default class Header extends React.Component {
  render() {
    return (
      <div className="app-header">
        <div className="horizontal">
          <Button text={"See menu"} />
          <Button text={"Order Pick-Up"} />
        </div>
      </div>
    );
  }
}
