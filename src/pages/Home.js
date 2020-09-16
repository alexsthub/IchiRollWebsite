import React from "react";
import Background from "../components/home/Background";
import Details from "../components/home/Details";
import Footer from "../components/Footer";

import ImageOverlay from "../components/ImageOverlay";
import Button from "../components/Button";
import DetailBox from "../components/home/DetailBox";
import { ABOUT_TEXT } from "../constants/values";

import { getRestaurantDetails } from "../helpers/utils";
import { convertRawOpenHours, groupHours } from "../helpers/hoursParser";

import { Link } from "react-router-dom";

import "../styles/App.css";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount = async () => {
    const restaurantDetails = await getRestaurantDetails();
    const openHours = convertRawOpenHours(restaurantDetails.openTimes);
    this.groupedHours = groupHours(openHours);
    this.setState({ loading: false });
  };

  render() {
    const about = ABOUT_TEXT.map((text, i) => {
      return <p key={String(i)}>{text}</p>;
    });

    const containerClass = this.state.loading ? "hidden" : "show";

    return (
      <div className={containerClass} style={{ transition: "opacity 0.3s ease" }}>
        <Background />
        <div className="detail-box-container">
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
                <Link to="/menu" style={{ textDecoration: "none" }}>
                  <Button
                    text={"Show Menu"}
                    className="background-button"
                    pClassName="background-button-text"
                  />
                </Link>
              </div>
            </ImageOverlay>
          </DetailBox>
        </div>
        <Details openHours={this.props.openHours} groupedHours={this.groupedHours} />
        <Footer />
      </div>
    );
  }
}
