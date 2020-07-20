import React from "react";
import "../styles/Background.css";

// import Button from "../components/Button";

export default class Background extends React.Component {
  render() {
    return (
      <div className="background" ref={this.props.refProp}>
        <div className="background-content">
          <p className="greet">Welcome</p>
          <p>Something something text here maybe.</p>
        </div>
      </div>
    );
  }
}
