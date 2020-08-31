import React from "react";
import "../styles/Background.css";

import Button from "../components/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const NAVBAR_HEIGHT = 55;
export default class Background extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
  }

  handleLearnMore = () => {
    const ref = this.containerRef.current;
    if (ref) {
      const top = ref.offsetHeight + ref.offsetTop - NAVBAR_HEIGHT;
      window.scrollTo({ top: top, behavior: "smooth" });
    }
  };

  handleOrder = () => {
    window.open("/order", "_self");
  };

  render() {
    return (
      <div className="background-container" ref={this.containerRef}>
        <div className="background-overlay"></div>
        <div className="background"></div>
        <div className="background-content">
          <p className="bc-title">{"Ichi Roll Wok & Teriyaki"}</p>
          <p className="bc-subtitle">Something something text here maybe.</p>

          <div className="background-buttons">
            <Button
              text={"LEARN MORE"}
              onClick={this.handleLearnMore}
              icon={<FontAwesomeIcon className="button-icon trans-down" icon={faArrowDown} />}
              className="background-button"
              pClassName="background-button-text"
            />

            <Button
              text={"ORDER NOW"}
              onClick={this.handleOrder}
              icon={<FontAwesomeIcon className="button-icon trans-right" icon={faArrowRight} />}
              className="background-button"
              pClassName="background-button-text"
            />
          </div>
        </div>
      </div>
    );
  }
}
