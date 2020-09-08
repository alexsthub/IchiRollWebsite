import React, { createRef } from "react";
import { clients } from "wix-restaurants-js-sdk";
import DropdownOptions from "../components/DropDownOptions";

import ImageOverlay from "../components/ImageOverlay";
import MenuSection from "../components/menu/MenuSection";
import constructMenu from "../helpers/menuQuery";

import "../styles/Menu.css";

// TODO: Better selected
// TODO: Instead of fade-in transition, go from 0 opacity to 1 after everything is mounted
export default class MenuScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: {},
      loading: true,
      selectedCategoryIndex: -1,
      overlayHeight: null,
      navBreakpointIndex: null,
    };
    this.navOptionRefs = [];
    this.checkBreakpoint = true;
  }

  componentDidMount = async () => {
    window.addEventListener("scroll", this.listenToScroll);
    window.addEventListener("resize", this.resizeListener);

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
    window.removeEventListener("resize", this.resizeListener);
  }

  componentDidUpdate = () => {
    if (this.checkBreakpoint) {
      this.checkBreakpoint = false;
      this.setNavBreakpointIndex();
    }
  };

  setNavBreakpointIndex = () => {
    const firstYPosition = 0;
    const keys = Object.keys(this.navOptionRefs);
    for (let i = 0; i < keys.length; i++) {
      const refTitle = keys[i];
      const yPosition = this.navOptionRefs[refTitle].offsetTop;
      if (yPosition > firstYPosition) {
        if (this.state.navBreakpointIndex !== i) {
          this.setState({ navBreakpointIndex: i });
        }
        return;
      }
    }

    if (this.state.navBreakpointIndex) {
      this.setState({ navBreakpointIndex: null });
    }
  };

  resizeListener = () => {
    this.setNavBreakpointIndex();
  };

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

  handleScrollClick = (option) => {
    const sectionRef = this.sectionRefs[option];
    const scrollLocation = sectionRef.current.offsetTop - 55 - 48;
    window.scrollTo({ top: scrollLocation, behavior: "smooth" });
  };

  render() {
    const { navBreakpointIndex, selectedCategoryIndex, overlayHeight } = this.state;

    const menu = this.renderMenu();
    const navButtons = this.menuOptions
      ? this.menuOptions.map((option, index) => {
          const selectedClass = selectedCategoryIndex === index ? "selected" : "";
          return (
            <button
              ref={(r) => {
                this.navOptionRefs[option] = r;
              }}
              key={option}
              onClick={() => this.handleScrollClick(option)}
              className={selectedClass}
            >
              {option}
            </button>
          );
        })
      : null;

    const dropdownButtons = navBreakpointIndex ? navButtons.slice(navBreakpointIndex) : [];
    const dropdownValue =
      navBreakpointIndex && selectedCategoryIndex >= navBreakpointIndex
        ? this.menuOptions[selectedCategoryIndex]
        : "More";

    let dropdownElement;
    if (this.menuOptions) {
      dropdownElement = (
        <DropdownOptions
          className="category-dropdown"
          options={dropdownButtons}
          onChange={(option) => this.handleScrollClick(option.value.key)}
          value={dropdownValue}
        />
      );
    }
    if (!this.checkBreakpoint && dropdownButtons.length === 0) {
      dropdownElement = null;
    }

    return (
      <div className="menu-container fade-in">
        <ImageOverlay
          backgroundClass="menu-header"
          opacity={0.3}
          style={{ width: "100%", height: "100%" }}
          backgroundStyle={{ height: overlayHeight }}
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
          <div className="menu-nav-content">{navButtons ? navButtons.slice(0, 14) : null}</div>
          {dropdownElement}
        </nav>

        <div className="menu-content">{menu}</div>
        <footer>
          <p style={{ fontSize: "1.3rem", fontWeight: 600 }}>
            {"ICHI ROLL WOK & TERIYAKI (SEATTLE)"}
          </p>
          <div>
            <p style={{ margin: 0, fontSize: ".8rem" }}>(206) 363-5100</p>
            <p style={{ margin: 0, fontSize: ".8rem" }}>306 N 125th St, Seattle, WA 98133</p>
          </div>
          <p style={{ marginBottom: 0, fontSize: "0.8rem" }}>©2020 by Alex Tan</p>
        </footer>
      </div>
    );
  }
}
