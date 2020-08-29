import React from "react";
import Background from "../sections/Background";
import Details from "../sections/Details";

import DetailBox from "../components/home/DetailBox";
import { ABOUT_TEXT } from "../constants/values";

export default class HomeScreen extends React.Component {
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
          <DetailBox className="">
            <p>Temp</p>
          </DetailBox>
        </div>
        <Details openHours={this.props.openHours} />
      </div>
    );
  }
}
