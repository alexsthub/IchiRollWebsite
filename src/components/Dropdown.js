import React, { createRef } from "react";

import DropdownOptions from "../components/DropDownOptions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import "../styles/Order.css";
import "../styles/components/Dropdown.css";

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
    this.props.updateHourOptions(dateOption.value);
    this.setState({ selectedDate: dateOption, selectedTime: null });
  };

  handleTimeChange = (timeOption) => {
    this.setState({ selectedTime: timeOption });
  };

  handleSave = (event) => {
    event.stopPropagation();
    if (!this.state.selectedTime) return;

    this.props.onSave(this.state.selectedDate, this.state.selectedTime);
    this.setState({ isOpen: false });
  };

  render() {
    const { selectedDate, selectedTime, dateOptions, hourOptions } = this.props;

    const menu = this.state.isOpen ? (
      <div className="dropdown-menu">
        <div className="dropdown-content">
          <p>Select Pickup Date</p>
          <DropdownOptions
            className="dd-picker"
            controlClassName="dd-picker-control"
            onChange={this.handleDateChange}
            options={dateOptions}
            value={selectedDate}
            placeholder={"Select a date"}
          />
          <p>Select Pickup Time</p>
          <DropdownOptions
            className="dd-picker"
            controlClassName="dd-picker-control"
            onChange={this.handleTimeChange}
            options={hourOptions}
            value={this.state.selectedTime}
            placeholder={"Select a time"}
          />
          <div
            onClick={this.handleSave}
            className={`${!this.state.selectedTime ? "disabled " : ""}update-button oval`}
          >
            Update Time
          </div>
        </div>
      </div>
    ) : null;

    return (
      <div className="dropdown-container" ref={this.wrapperRef}>
        <div className="time oval" onClick={() => this.setState({ isOpen: !this.state.isOpen })}>
          <FontAwesomeIcon style={{ marginRight: 5 }} icon={faCalendar} />
          <div>{`${selectedDate.label} @ ${selectedTime.label}`}</div>
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
