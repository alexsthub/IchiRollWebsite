import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="basic-footer">
        <p style={{ fontSize: "1.3rem", fontWeight: 600 }}>
          {"ICHI ROLL WOK & TERIYAKI (SEATTLE)"}
        </p>
        <div style={{ textAlign: "center" }}>
          <p style={{ margin: 0, fontSize: ".8rem" }}>(206) 363-5100</p>
          <p style={{ margin: 0, fontSize: ".8rem" }}>306 N 125th St, Seattle, WA 98133</p>
        </div>
        <p style={{ marginBottom: 0, fontSize: "0.8rem" }}>©2020 by Alex Tan</p>
      </footer>
    );
  }
}
