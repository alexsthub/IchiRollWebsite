import React from "react";
import MenuItem from "./MenuItem";

import "../styles/Menu.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

// TODO: Be able to collapse the section
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
      return <MenuItem key={item.title.en_US} item={item} />;
    });

    const icon = this.state.showItems ? faChevronDown : faChevronUp;

    return (
      <div className="section-container" key={title}>
        <div className="section-border" />
        <div className="section-title-container" onClick={this.handleClick}>
          <p className="section-title">{title}</p>
          <FontAwesomeIcon style={{ color: "gray" }} icon={icon} size="sm" />
        </div>
        <div className="basic-grid">{items}</div>
      </div>
    );
  }
}
