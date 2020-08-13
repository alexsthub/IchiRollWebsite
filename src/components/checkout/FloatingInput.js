import React from "react";
import "../../styles/components/FloatingInput.css";

export default class FloatingInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { focused: false };
  }

  handleChange = (e) => {
    if (!this.props.onChange) return;

    if (this.props.stateKey) {
      this.props.onChange(e, this.props.stateKey);
    } else {
      this.props.onChange(e);
    }
  };

  render() {
    const { errorText, icon, className } = this.props;

    const cName = className ? "input-container " + className : "input-container";

    const iconElement = icon ? (
      <div style={{ position: "absolute", right: 10, bottom: 0, transform: "translateY(-90%)" }}>
        {icon}
      </div>
    ) : null;

    const invalidStyle =
      errorText && !this.state.focused
        ? {
            paddingLeft: 12,
            borderLeft: "4px solid #c7254e",
          }
        : null;
    const errorElement = errorText ? <div className="error-text">{errorText}</div> : null;

    return (
      <div className={cName}>
        <label className={this.props.value !== "" ? "label-show" : ""} htmlFor={this.props.name}>
          {this.props.label}
        </label>
        <div style={{ position: "relative" }}>
          <input
            style={invalidStyle}
            id={this.props.name}
            type={this.props.type ? this.props.type : "text"}
            name={this.props.name}
            placeholder={this.props.placeholder}
            autoComplete={this.props.autoComplete}
            value={this.props.value}
            onChange={this.handleChange}
            onKeyDown={this.props.onKeyDown}
            maxLength={this.props.maxLength}
            autoCapitalize={this.props.autoCapitalize}
            autoCorrect={this.props.autoCorrect}
            spellCheck={this.props.spellCheck}
            pattern={this.props.pattern}
            onFocus={() => this.setState({ focused: true })}
            onBlur={() => this.setState({ focused: false })}
          />
          {iconElement}
        </div>
        {errorElement}
      </div>
    );
  }
}
