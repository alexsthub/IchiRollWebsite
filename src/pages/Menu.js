import React from "react";
import { clients } from "wix-restaurants-js-sdk";

import MenuSection from "../components/MenuSection";
import constructMenu from "../helpers/menuQuery";

import "../styles/Menu.css";

// TODO: Show loading
// TODO: Do I want to have a categories thing that updates?
export default class MenuScreen extends React.Component {
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
  };

  renderMenu = () => {
    const keys = Object.keys(this.state.menu);
    if (keys.length === 0) return null;
    const section = keys.map((sectionTitle) => {
      const menuItems = this.state.menu[sectionTitle];
      return <MenuSection key={sectionTitle} title={sectionTitle} menuItems={menuItems} />;
    });
    return section;
  };

  render() {
    const menu = this.renderMenu();
    return (
      <div className="menu-container">
        <div className="menu-header">
          <p className="menu-title">Menu</p>
          <p className="menu-intro">
            Amidst the Covid-19 pandemic, we are only open to takeout during our open hours. Our
            menu offers a wide selection of dishes, such as fried rice, chow mein, sushi, and of
            course, teriyaki. Enjoy our take on traditional asian cusine that we hope you will come
            to love as we have.
          </p>
        </div>
        <div className="menu-content">{menu}</div>
      </div>
    );
  }
}
