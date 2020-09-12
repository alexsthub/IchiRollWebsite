import React from "react";
import "../styles/components/Navbar.css";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeMenu: false };
  }

  handleNavigation = (e, path) => {
    const url = window.location.pathname;
    if (url === path) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  openMenu = () => {
    document.body.style.height = "100vh";
    document.body.style.overflowY = "hidden";
    this.setState({ activeMenu: true });
  };

  closeMenu = () => {
    document.body.style.height = "auto";
    document.body.style.overflowY = "scroll";
    this.setState({ activeMenu: false });
  };

  render() {
    return (
      <nav className="nav">
        <div className="nav-content">
          <p className="nav-title">{"ICHI ROLL WOK & TERIYAKI (SEATTLE)"}</p>
          <div className="nav-option-container">
            <Link to="/" className="option" onClick={(e) => this.handleNavigation(e, "/")}>
              HOME
            </Link>
            <Dot />
            <Link to="/menu" className="option" onClick={(e) => this.handleNavigation(e, "/menu")}>
              MENU
            </Link>
            <Dot />
            <Link
              to="/order"
              className="option"
              onClick={(e) => this.handleNavigation(e, "/order")}
            >
              ORDER ONLINE
            </Link>
            <Dot />
            <Link
              to="/delivery"
              className="option"
              onClick={(e) => this.handleNavigation(e, "/delivery")}
              style={{ marginRight: 0 }}
            >
              DELIVERY
            </Link>
          </div>
          <FontAwesomeIcon className="menu-sm" icon={faBars} onClick={this.openMenu} />
        </div>

        <SlidingMenu
          active={this.state.activeMenu}
          closeMenu={this.closeMenu}
          handleNavigation={this.handleNavigation}
        />
      </nav>
    );
  }
}

class SlidingMenu extends React.Component {
  handleClick = (e, path) => {
    this.props.closeMenu();
    this.props.handleNavigation(e, path);
  };

  render() {
    const { active } = this.props;
    const activeStyle = { width: active ? "100%" : 0 };
    return (
      <div className="sliding-menu" style={activeStyle}>
        <div className="sliding-menu-content">
          <div className="option-sm">
            <Link to="/" className="option" onClick={(e) => this.handleClick(e, "/")}>
              HOME
            </Link>
          </div>

          <div className="option-sm">
            <Link to="/menu" className="option" onClick={(e) => this.handleClick(e, "/menu")}>
              MENU
            </Link>
          </div>

          <div className="option-sm">
            <Link to="/order" className="option" onClick={(e) => this.handleClick(e, "/order")}>
              ORDER ONLINE
            </Link>
          </div>

          <div className="option-sm">
            <Link
              to="/delivery"
              className="option"
              onClick={(e) => this.handleClick(e, "/delivery")}
            >
              DELIVERY
            </Link>
          </div>
        </div>
        <div className="sliding-menu-close" onClick={this.props.closeMenu}>
          <FontAwesomeIcon className="menu-sm" icon={faTimes} />
        </div>
      </div>
    );
  }
}

class Dot extends React.Component {
  render() {
    return <div className="dot" />;
  }
}
