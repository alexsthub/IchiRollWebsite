import React from "react";
import Background from "../components/home/Background";
import Details from "../components/home/Details";

import ImageOverlay from "../components/ImageOverlay";
import Button from "../components/Button";
import DetailBox from "../components/home/DetailBox";
import { ABOUT_TEXT } from "../constants/values";

export default class HomeScreen extends React.Component {
  handleMenuClick = () => {
    window.open("/menu", "_self");
  };

  render() {
    const about = ABOUT_TEXT.map((text, i) => {
      return <p key={String(i)}>{text}</p>;
    });

    return (
      <div>
        <Background />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <DetailBox className="about">
            <div className="detail-box">
              <h2>ABOUT US</h2>
              <div className="about-text">{about}</div>
            </div>
          </DetailBox>
          <DetailBox>
            <ImageOverlay
              style={{ width: "100%", height: "100%" }}
              opacity={0.45}
              backgroundClass="sub-hero"
            >
              <div className="flex-center">
                <div className="menu-section">
                  <p>LOOK AT OUR MENU</p>
                  <p>FULL OF DELICIOUS DISHES</p>
                </div>
                <Button
                  text={"Show Menu"}
                  onClick={this.handleMenuClick}
                  className="background-button test"
                  pClassName="background-button-text"
                />
              </div>
            </ImageOverlay>
          </DetailBox>
        </div>
        <Details openHours={this.props.openHours} />
      </div>
    );
  }
}
