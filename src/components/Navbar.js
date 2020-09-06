import React from "react";
import "../styles/components/Navbar.css";

export default class Navbar extends React.Component {
  handleNavigation = (e, path) => {
    const url = window.location.pathname;
    if (url === path) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  render() {
    return (
      <nav className="nav">
        <div className="nav-content">
          <p className="nav-title">{"ICHI ROLL WOK & TERIYAKI (SEATTLE)"}</p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <a onClick={(e) => this.handleNavigation(e, "/")} className="option" href="/">
              HOME
            </a>
            <Dot />
            <a onClick={(e) => this.handleNavigation(e, "/menu")} className="option" href="/menu">
              MENU
            </a>
            <Dot />
            <a onClick={(e) => this.handleNavigation(e, "/order")} className="option" href="/order">
              ORDER ONLINE
            </a>
            <Dot />
            <a
              onClick={(e) => this.handleNavigation(e, "/delivery")}
              className="option"
              href="/delivery"
              style={{ marginRight: 0 }}
            >
              DELIVERY
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

class Dot extends React.Component {
  render() {
    return <div className="dot" />;
  }
}
