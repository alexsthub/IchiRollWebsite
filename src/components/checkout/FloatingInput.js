import React from "react";
import "../../styles/components/FloatingInput.css";

export default class FloatingInput extends React.Component {
  handleChange = (e) => {
    if (this.props.stateKey) {
      this.props.onChange(e, this.props.stateKey);
    } else {
      this.props.onChange(e);
    }
  };

  render() {
    const className = this.props.className
      ? "input-container " + this.props.className
      : "input-container";

    return (
      <div className={className}>
        <label className={this.props.value !== "" ? "label-show" : ""} htmlFor={this.props.name}>
          {this.props.label}
        </label>
        <input
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
        />
      </div>
    );
  }
}
