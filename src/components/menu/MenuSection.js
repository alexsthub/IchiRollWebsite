import React from "react";

import "../../styles/Menu.css";

import { priceToString } from "../../helpers/utils";

import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default class MenuSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showItems: true };
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ showItems: !this.state.showItems });
  };

  render() {
    const { title, menuItems } = this.props;
    const items = menuItems.map((item) => {
      return (
        <div style={{ marginBottom: 40 }} key={item.id}>
          <div className="mic">
            <div className="mid">
              <span className="mis">{item.title.en_US}</span>
              <div className="mi-spacing">
                .......................................................................................................................................................................................................................................
              </div>
            </div>
            <div className="mip">{priceToString(item.price)}</div>
          </div>
          {item.description.en_US !== "" ? (
            <p className="mi-desc">{item.description.en_US}</p>
          ) : null}
        </div>
      );
    });

    const icon = this.state.showItems ? faChevronUp : faChevronDown;

    return (
      <div className="section-container" key={title} ref={this.props.refProp}>
        <div className="section-title-container" onClick={this.handleClick}>
          <p className="section-title">{title}</p>
          <FontAwesomeIcon style={{ color: "black", marginRight: 10 }} icon={icon} size="sm" />
        </div>
        <SlideDown className="slide-transition" transitionOnAppear={false}>
          {this.state.showItems ? <div style={{ marginTop: 36 }}>{items}</div> : null}
        </SlideDown>
      </div>
    );
  }
}
