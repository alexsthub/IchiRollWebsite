import React, { Component, createRef } from "react";
import classNames from "classnames";
import "../styles/components/DropDownOptions.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const DEFAULT_PLACEHOLDER_STRING = "Select...";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.parseValue(props.value, props.options) || {
        label:
          typeof props.placeholder === "undefined" ? DEFAULT_PLACEHOLDER_STRING : props.placeholder,
        value: "",
      },
      isOpen: false,
    };
    this.wrapperRef = createRef();
    this.mounted = true;
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      if (this.props.value) {
        let selected = this.parseValue(this.props.value, this.props.options);
        if (selected !== this.state.selected) {
          this.setState({ selected });
        }
      } else {
        this.setState({
          selected: {
            label:
              typeof this.props.placeholder === "undefined"
                ? DEFAULT_PLACEHOLDER_STRING
                : this.props.placeholder,
            value: "",
          },
        });
      }
    }
  }

  componentDidMount() {
    document.addEventListener("click", this.handleDocumentClick, false);
    document.addEventListener("touchend", this.handleDocumentClick, false);
  }

  componentWillUnmount() {
    this.mounted = false;
    document.removeEventListener("click", this.handleDocumentClick, false);
    document.removeEventListener("touchend", this.handleDocumentClick, false);
  }

  handleMouseDown = (event) => {
    if (this.props.onFocus && typeof this.props.onFocus === "function") {
      this.props.onFocus(this.state.isOpen);
    }
    if (event.type === "mousedown" && event.button !== 0) return;
    event.stopPropagation();
    event.preventDefault();
    if (!this.props.disabled) {
      this.setState({
        isOpen: !this.state.isOpen,
      });
    }
  };

  parseValue = (value, options) => {
    let option;

    if (typeof value === "string") {
      for (var i = 0, num = options.length; i < num; i++) {
        if (options[i].type === "group") {
          const match = options[i].items.filter((item) => item.value === value);
          if (match.length) {
            option = match[0];
          }
        } else if (typeof options[i].value !== "undefined" && options[i].value === value) {
          option = options[i];
        }
      }
    }

    return option || value;
  };

  setValue = (value, label, e) => {
    let newState = {
      selected: {
        value,
        label,
      },
      isOpen: false,
    };
    e.stopPropagation();
    this.fireChangeEvent(newState);
    this.setState(newState);
  };

  fireChangeEvent = (newState) => {
    if (newState.selected !== this.state.selected && this.props.onChange) {
      this.props.onChange(newState.selected);
    }
  };

  renderOption = (option, index) => {
    const { optionClassName } = this.props;
    let value = option.value;
    if (typeof value === "undefined") {
      value = option.label || option;
    }
    let label = option.label || option.value || option;
    let isSelected = value === this.state.selected.value || value === this.state.selected;

    const classes = {
      [`${this.props.baseClassName}-option`]: true,
      [option.className]: !!option.className,
      "is-selected": isSelected,
      [optionClassName]: !!optionClassName,
    };
    const optionClass = classNames(classes);
    return (
      <div
        key={String(index)}
        className={optionClass}
        onMouseDown={(e) => this.setValue(value, label, e)}
        onClick={(e) => this.setValue(value, label, e)}
        role="option"
        aria-selected={isSelected ? "true" : "false"}
      >
        {label}
      </div>
    );
  };

  buildMenu = () => {
    let { options, baseClassName } = this.props;
    let ops = options.map((option, index) => {
      if (option.type === "group") {
        let groupTitle = <div className={`${baseClassName}-title`}>{option.name}</div>;
        let _options = option.items.map((item) => this.renderOption(item));
        return (
          <div className={`${baseClassName}-group`} key={option.name} role="listbox" tabIndex="-1">
            {groupTitle}
            {_options}
          </div>
        );
      } else {
        return this.renderOption(option, index);
      }
    });

    return ops.length ? ops : <div className={`${baseClassName}-noresults`}>No options found</div>;
  };

  handleDocumentClick = (event) => {
    if (this.mounted && !this.wrapperRef.current.contains(event.target) && this.state.isOpen) {
      this.setState({ isOpen: false });
    }
  };

  isValueSelected = () => {
    return typeof this.state.selected === "string" || this.state.selected.value !== "";
  };

  render() {
    const {
      baseClassName,
      controlClassName,
      placeholderClassName,
      menuClassName,
      className,
    } = this.props;

    const disabledClass = this.props.disabled ? "Dropdown-disabled" : "";

    const placeHolderValue =
      typeof this.state.selected === "string" ? this.state.selected : this.state.selected.label;

    const dropdownClass = classNames({
      [`${baseClassName}-root`]: true,
      [className]: !!className,
      "is-open": this.state.isOpen,
    });
    const controlClass = classNames({
      [`${baseClassName}-control`]: true,
      [controlClassName]: !!controlClassName,
      [disabledClass]: !!disabledClass,
    });
    const placeholderClass = classNames({
      [`${baseClassName}-placeholder`]: true,
      [placeholderClassName]: !!placeholderClassName,
      "is-selected": this.isValueSelected(),
    });
    const menuClass = classNames({
      [`${baseClassName}-menu`]: true,
      [menuClassName]: !!menuClassName,
    });

    const value = <div className={placeholderClass}>{placeHolderValue}</div>;

    const menu = this.state.isOpen ? (
      <div className={menuClass} aria-expanded="true">
        {this.buildMenu()}
      </div>
    ) : null;

    return (
      <div className={dropdownClass} ref={this.wrapperRef}>
        <div
          className={controlClass}
          onMouseDown={this.handleMouseDown}
          onTouchEnd={this.handleMouseDown}
          aria-haspopup="listbox"
        >
          {value}
          <FontAwesomeIcon
            style={{ color: "white", marginLeft: 10 }}
            icon={this.state.isOpen ? faChevronDown : faChevronUp}
            size="sm"
          />
        </div>
        {menu}
      </div>
    );
  }
}

Dropdown.defaultProps = { baseClassName: "Dropdown" };
export default Dropdown;
