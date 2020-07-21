import React from "react";
import Background from "../sections/Background";
import Details from "../sections/Details";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <div>
        <Background />
        <Details openHours={this.props.openHours} />
      </div>
    );
  }
}
