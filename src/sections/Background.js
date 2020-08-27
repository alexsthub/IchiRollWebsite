import React from "react";
import "../styles/Background.css";

export default class Background extends React.Component {
  render() {
    return (
      <div className="background-container">
        <div className="background-overlay"></div>
        <div className="background"></div>
        <div className="background-content">
          <p>Welcome</p>
          <p>Something something text here maybe.</p>
        </div>

        {/* <div className="background">
          <div className="background-content">
            <p>Welcome</p>
            <p>Something something text here maybe.</p>
          </div>
        </div> */}
      </div>
    );
  }
}
