import React from "react";
import "../../styles/components/home/Background.css";

import Button from "../Button";
import ImageOverlay from "../ImageOverlay";
import { Link } from "react-router-dom";

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

  render() {
    return (
      <ImageOverlay backgroundClass="hero" opacity={0.55} refProp={this.containerRef}>
        <div className="flex-center" style={{ fontFamily: "Futura" }}>
          <div style={{ paddingLeft: 20, paddingRight: 20 }}>
            <p className="bc-title">{"Ichi Roll Wok & Teriyaki"}</p>
            <p className="bc-subtitle">Something something text here maybe.</p>
          </div>

          <div className="background-buttons">
            <Button
              text={"LEARN MORE"}
              onClick={this.handleLearnMore}
              icon={<FontAwesomeIcon className="button-icon trans-down" icon={faArrowDown} />}
              className="background-button"
              pClassName="background-button-text"
            />

            <Link to="/order" style={{ textDecoration: "none" }}>
              <Button
                text={"ORDER NOW"}
                icon={<FontAwesomeIcon className="button-icon trans-right" icon={faArrowRight} />}
                className="background-button"
                pClassName="background-button-text"
              />
            </Link>
          </div>
        </div>
      </ImageOverlay>
    );
  }
}
