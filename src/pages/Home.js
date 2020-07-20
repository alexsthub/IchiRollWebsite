import React from "react";
import Background from "../sections/Background";
import Details from "../sections/Details";
import About from "../sections/About";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <div>
        <Background />
        <Details openHours={this.props.openHours} />
        <About />
      </div>
    );
  }
}
