import React, { createRef } from "react";
import { clients } from "wix-restaurants-js-sdk";
import DropdownOptions from "../components/DropDownOptions";

import ImageOverlay from "../components/ImageOverlay";
import MenuSection from "../components/menu/MenuSection";
import constructMenu from "../helpers/menuQuery";

import "../styles/Menu.css";

// TODO: Better selected
// TODO: If too many categories, I need to create drop down and update categories there
// TODO: Add padding to the bottom or else we won't reach the bottom category
// TODO: Update menu. Its just kinda ugly
export default class MenuScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menu: {}, loading: true, selectedCategoryIndex: -1, overlayHeight: null };
  }

  componentDidMount = async () => {
    window.addEventListener("scroll", this.listenToScroll);

    const organizationId = "258553461683418";
    const rest = clients.createRestClient();
    const menuObj = await rest(`/organizations/${organizationId}/menu`);
    const menu = constructMenu(menuObj);
    this.menuOptions = Object.keys(menu);
    this.sectionRefs = this.generateSectionRefs(menu);
    this.setState({ menu: menu, loading: false, overlayHeight: this.headerContent.offsetHeight });
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    const yPos = window.scrollY + 55 + 49;
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
    const scrollLocation = sectionRef.current.offsetTop - 55 - 49;
    window.scrollTo({ top: scrollLocation, behavior: "smooth" });
  };

  handleNavClick = (option) => {
    const sectionRef = this.sectionRefs[option];
    const scrollLocation = sectionRef.current.offsetTop - 55 - 49;
    window.scrollTo({ top: scrollLocation, behavior: "smooth" });
  };

  render() {
    const menu = this.renderMenu();
    const navButtons = this.menuOptions
      ? this.menuOptions.map((option, index) => {
          const selectedClass = this.state.selectedCategoryIndex === index ? "selected" : "";
          return (
            <button
              key={option}
              onClick={() => this.handleNavClick(option)}
              className={selectedClass}
            >
              {option}
            </button>
          );
        })
      : null;
    return (
      <div className="menu-container fade-in">
        <ImageOverlay
          backgroundClass="menu-header"
          opacity={0.3}
          style={{ width: "100%", height: "100%" }}
          backgroundStyle={{ height: this.state.overlayHeight }}
        >
          <div className="flex-center">
            <div
              className="menu-hc"
              ref={(header) => {
                this.headerContent = header;
              }}
            >
              <p className="menu-title">MENU</p>
              <p className="menu-intro">
                Amidst the Covid-19 pandemic, we are only open to takeout during our open hours. Our
                menu offers a wide selection of dishes, such as fried rice, chow mein, sushi, and of
                course, teriyaki. Enjoy our take on traditional asian cusine that we hope you will
                come to love as we have.
              </p>
            </div>
          </div>
        </ImageOverlay>

        <nav className="menu-nav">
          <div className="menu-nav-content">{navButtons ? navButtons.slice(0, 10) : null}</div>

          {this.menuOptions ? (
            <DropdownOptions
              className="category-dropdown"
              options={navButtons ? navButtons.slice(10, 14) : []}
              onChange={this.handleDropdownClick}
              value={"More"}
            />
          ) : null}
        </nav>
        {/*  */}
        <div className="menu-content">{menu}</div>
      </div>
    );
  }
}
