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

  handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  render() {
    return (
      <div className="nav" style={{ top: this.state.top }}>
        <div onClick={this.handleHomeClick} className="option">
          Home
        </div>
        <div onClick={() => console.log("navigate to menu")} className="option">
          Menu
        </div>
        <Button text="Order Online" onClick={() => console.log("navigate to another page")} />
      </div>
    );
  }
}
