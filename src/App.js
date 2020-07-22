// Libraries
import React, { createRef } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { clients } from "wix-restaurants-js-sdk";

// Helpers
import { convertRawOpenHours } from "./helpers/hoursParser";

// Components
import Navbar from "./components/Navbar";
import Header from "./components/Header";

// Pages
import HomeScreen from "./pages/Home";
import MenuScreen from "./pages/Menu";
import OrderScreen from "./pages/Order";

import "./styles/App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openHours: {} };
  }

  componentDidMount = async () => {
    this.headerRef = createRef();

    const organizationId = "258553461683418";
    const rest = clients.createRestClient();

    const restaurantDetails = await rest(`/organizations/${organizationId}`);
    // console.log(restaurantDetails);
    const openHours = convertRawOpenHours(restaurantDetails.openTimes);

    this.setState({ openHours: openHours });
    // console.log(menu);
    // console.log(openHours);
  };

  render() {
    return (
      <div className="App">
        <Navbar headerRef={this.headerRef} />
        <Header refProp={this.headerRef} />
        <Switch>
          <Route exact path="/" render={() => <HomeScreen openHours={this.state.openHours} />} />
          <Route path="/menu" component={MenuScreen} />
          <Route path="/order" component={OrderScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}
