import React from "react";
import "../styles/components/Navbar.css";

import Button from "./Button";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { top: -70 };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    const headerRef = this.props.headerRef;
    if (!headerRef) return;
    const currentScrollPos = window.pageYOffset;
    const bottom = headerRef.current.offsetTop + headerRef.current.offsetHeight;
    if (currentScrollPos >= bottom && this.state.top === -70) {
      this.setState({ top: 0 });
    } else if (currentScrollPos < bottom && this.state.top === 0) {
      this.setState({ top: -70 });
    }
  };

  handleNavigation = (path) => {
    const url = window.location.pathname;
    if (url === path) window.scrollTo({ top: 0, behavior: "smooth" });
    else window.open(path, "_self");
  };

  render() {
    return (
      <nav className="nav" style={{ top: this.state.top }}>
        <div className="nav-content">
          <div style={{ display: "flex" }}>
            <div onClick={() => this.handleNavigation("/")} className="option">
              Home
            </div>
            <div onClick={() => this.handleNavigation("/menu")} className="option">
              Menu
            </div>
          </div>

          <div style={{ fontWeight: "bold", paddingBottom: 5, fontSize: "1.5rem" }}>
            {"Ichi Roll Wok & Teriyaki"}
          </div>

          <Button text="Order Online" onClick={() => this.handleNavigation("/order")} />
        </div>
        {/* <div className="nav-border" /> */}
      </nav>
    );
  }
}
