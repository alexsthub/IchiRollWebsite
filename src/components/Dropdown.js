import React, { createRef } from "react";

import DropdownOptions from "../components/DropDownOptions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import "../styles/Order.css";
import "../styles/components/Dropdown.css";

// TODO: animate entry?
export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.wrapperRef = createRef();
    this.state = {
      isOpen: false,
      selectedDate: this.props.selectedDate,
      selectedTime: this.props.selectedTime,
    };
  }

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

  handleDateChange = (dateOption) => {
    console.log(dateOption);
    this.setState({ selectedDate: dateOption });
  };

  handleTimeChange = (timeOption) => {
    console.log(timeOption);
    this.setState({ selectedTime: timeOption });
  };

  handleSave = (event) => {
    event.stopPropagation();
    this.props.onSave(this.state.selectedDate, this.state.selectedTime);
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
            options={this.props.dateOptions}
            value={this.props.selectedDate}
          />
          <p>Select Pickup Time</p>
          <DropdownOptions
            className="dd-picker"
            controlClassName="dd-picker-control"
            onChange={this.handleTimeChange}
            options={this.props.hourOptions}
            value={this.props.selectedTime}
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
          <div>{`${this.props.selectedDate.label} @ ${this.props.selectedTime.label}`}</div>
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
