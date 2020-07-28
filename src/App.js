// Libraries
import React, { createRef } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

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
    this.headerRef = createRef();
  }

  render() {
    return (
      <div className="App">
        <Navbar headerRef={this.headerRef} />
        <Header refProp={this.headerRef} />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/menu" component={MenuScreen} />
          <Route path="/order" component={OrderScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}
