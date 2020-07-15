import React from "react";
import "./App.css";
import constructMenu from "./helpers/menuQuery";
import { clients } from "wix-restaurants-js-sdk";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menu: {} };
  }

  componentDidMount = async () => {
    const organizationId = "258553461683418";
    const rest = clients.createRestClient();
    const menuObj = await rest(`/organizations/${organizationId}/menu`);
    const menu = constructMenu(menuObj);
    this.setState({ menu: menu });
    console.log(menu);
  };

  render() {
    return (
      <div className="App">
        <p>Hello</p>
      </div>
    );
  }
}
