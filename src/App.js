// Libraries
import React, { createRef } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import HomeScreen from "./pages/Home";
import MenuScreen from "./pages/Menu";
import OrderScreen from "./pages/Order";
import CheckoutScreen from "./pages/Checkout";
import ConfirmationScreen from "./pages/Confirmation";

import "./styles/App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.headerRef = createRef();
  }

  render() {
    return (
      <div className="App">
        <Navbar headerRef={this.headerRef} />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/menu" component={MenuScreen} />
          <Route exact path="/order/checkout" component={CheckoutScreen} />
          <Route path="/order" component={OrderScreen} />
          <Route path="/confirmation" component={ConfirmationScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}
