import React, { createRef } from "react";
import { clients } from "wix-restaurants-js-sdk";
import Loader from "react-loader-spinner";
import Dropdown from "react-dropdown";

import MenuSection from "../components/MenuSection";
import constructMenu from "../helpers/menuQuery";

import "../styles/Menu.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "react-dropdown/style.css";

// TODO: Style categories & Turn into a drop down
export default class MenuScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menu: {}, loading: true, selectedCategoryIndex: -1 };
  }

  componentDidMount = async () => {
    window.addEventListener("scroll", this.listenToScroll);

    const organizationId = "258553461683418";
    const rest = clients.createRestClient();
    const menuObj = await rest(`/organizations/${organizationId}/menu`);
    const menu = constructMenu(menuObj);
    this.menuOptions = Object.keys(menu);
    this.sectionRefs = this.generateSectionRefs(menu);
    this.setState({ menu: menu, loading: false });
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    const yPos = window.scrollY + 52;
    let start = this.state.selectedCategoryIndex;
    let end = start + 1;
    const maxLength = this.menuOptions.length;
    while (start >= -1 || end < maxLength) {
      if (start >= -1 && this.checkRange(start, yPos)) {
        if (this.state.selectedCategoryIndex !== start) {
          this.setState({ selectedCategoryIndex: start });
        }
        break;
      }
      start--;
      if (end < maxLength && this.checkRange(end, yPos)) {
        if (this.state.selectedCategoryIndex !== end) {
          this.setState({ selectedCategoryIndex: end });
        }
        break;
      }
      end++;
    }
  };

  checkRange(index, yPos) {
    if (index === -1) {
      const ref = this.sectionRefs[this.menuOptions[0]];
      const offsetTop = ref.current.offsetTop;
      return yPos <= offsetTop;
    }

    const ref = this.sectionRefs[this.menuOptions[index]];
    const offsetTop = ref.current.offsetTop;
    const offsetBottom = offsetTop + ref.current.offsetHeight;
    return offsetTop <= yPos && yPos <= offsetBottom;
  }

  generateSectionRefs = (menu) => {
    const sectionRefs = {};
    const keys = Object.keys(menu);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      sectionRefs[key] = createRef();
    }
    return sectionRefs;
  };

  renderMenu = () => {
    const keys = Object.keys(this.state.menu);
    if (keys.length === 0) return null;
    const section = keys.map((sectionTitle) => {
      const menuItems = this.state.menu[sectionTitle];
      const ref = this.sectionRefs[sectionTitle];
      return (
        <MenuSection key={sectionTitle} title={sectionTitle} menuItems={menuItems} refProp={ref} />
      );
    });
    return section;
  };

  handleDropdownClick = (option) => {
    const sectionTitle = option.value;
    const sectionRef = this.sectionRefs[sectionTitle];
    const scrollLocation = sectionRef.current.offsetTop - 52;
    window.scrollTo({ top: scrollLocation, behavior: "smooth" });
  };

  render() {
    if (this.state.loading) {
      return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Loader type="TailSpin" color="gray" height={75} width={75} />
        </div>
      );
    }

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
        <div className="menu-content">
          <div className="category-container">
            <Dropdown
              className="category-dropdown"
              menuClassName="shit"
              options={this.menuOptions}
              onChange={this.handleDropdownClick}
              value={
                this.state.selectedCategoryIndex === -1
                  ? "Categories"
                  : this.menuOptions[this.state.selectedCategoryIndex]
              }
            />
          </div>
          {menu}
        </div>
      </div>
    );
  }
}
