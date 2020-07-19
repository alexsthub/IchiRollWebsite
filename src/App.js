import React from "react";
// import { Route, Switch, Link, NavLink, Redirect } from "react-router-dom";
import "./styles/App.css";

import constructMenu from "./helpers/menuQuery";
import { convertRawOpenHours } from "./helpers/hoursParser";
import { clients } from "wix-restaurants-js-sdk";

import Header from "./components/Header";
import Background from "./sections/Background";
import Details from "./sections/Details";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menu: {}, openHours: {} };
  }

  componentDidMount = async () => {
    const organizationId = "258553461683418";
    const rest = clients.createRestClient();

    const restaurantDetails = await rest(`/organizations/${organizationId}`);
    const openHours = convertRawOpenHours(restaurantDetails.openTimes);

    const menuObj = await rest(`/organizations/${organizationId}/menu`);
    const menu = constructMenu(menuObj);
    this.setState({ menu: menu, openHours: openHours });
    console.log(menu);
    console.log(openHours);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Background />
        <Details openHours={this.state.openHours} />
      </div>
    );
  }
}
