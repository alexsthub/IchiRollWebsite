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
    if (!this.props.backgroundRef) return;
    const currentScrollPos = window.pageYOffset;
    const backgroundTop = this.props.backgroundRef.current.offsetTop + 1;
    if (currentScrollPos >= backgroundTop && this.state.top === -70) {
      this.setState({ top: 0 });
    } else if (currentScrollPos < backgroundTop && this.state.top === 0) {
      this.setState({ top: -70 });
    }
  };

  render() {
    return (
      <div className="nav" style={{ top: this.state.top }}>
        <div className="option">Home</div>
        <div className="option">Menu</div>
        <Button text="Order Online" />
      </div>
    );
  }
}
