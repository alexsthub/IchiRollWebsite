import React, { createRef } from "react";

// import OptionsDropdown from "react-dropdown";
import DropdownOptions from "../components/DropDownOptions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import "../styles/Order.css";
import "../styles/components/Dropdown.css";

// TODO: animate entry?
// TODO: Change the dropdown package to get rid of outdated functions.
export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.wrapperRef = createRef();
    this.state = {
      isOpen: false,
      selectedDay: "",
      selectedTime: "",
    };
  }

  getDayOptions = () => {
    //
  };

  getTimeOptions = () => {
    //
  };

  componentDidMount() {
    window.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    window.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target) && this.state.isOpen) {
      this.setState({ isOpen: false });
    }
  };

  handleDateChange = () => {
    // TODO: Get days - 3 days out
    // 1.) Get current day.
    // 2.) Get 3 days out
  };

  handleTimeChange = (option) => {
    console.log(option);
    // TODO: Get current time to close in 15 minute incremenets
  };

  handleSave = (event) => {
    event.stopPropagation();
    this.props.onSave();
    this.setState({ isOpen: false });
  };

  render() {
    const menu = this.state.isOpen ? (
      <div className="dropdown-menu">
        <div className="dropdown-content">
          <p>Select Pickup Date</p>
          <DropdownOptions
            className="dd-picker"
            controlClassName="dd-picker-control"
            onChange={this.handleDateChange}
            options={[1, 2, 3]}
            value={"Test"}
          />
          <p>Select Pickup Time</p>
          <DropdownOptions
            className="dd-picker"
            controlClassName="dd-picker-control"
            onChange={this.handleTimeChange}
            options={this.props.hourOptions}
            value={"Test"}
          />
          <div onClick={this.handleSave} className="update-button oval">
            Update Time
          </div>
        </div>
      </div>
    ) : null;

    return (
      <div className="dropdown-container" ref={this.wrapperRef}>
        <div className="time oval" onClick={() => this.setState({ isOpen: !this.state.isOpen })}>
          <FontAwesomeIcon style={{ marginRight: 5 }} icon={faCalendar} />
          <div>Tue, Jul 28 @ 6:15 PM</div>
          <FontAwesomeIcon
            style={{ marginLeft: 10, color: "gray" }}
            icon={this.state.isOpen ? faChevronUp : faChevronDown}
            size="xs"
          />
        </div>
        {menu}
      </div>
    );
  }
}
