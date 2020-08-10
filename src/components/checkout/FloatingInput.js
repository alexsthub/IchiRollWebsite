import React from "react";
import "../../styles/components/FloatingInput.css";

export default class FloatingInput extends React.Component {
  render() {
    return (
      <div className="input-container">
        <label className={this.props.value !== "" ? "label-show" : ""} htmlFor={this.props.name}>
          {this.props.label}
        </label>
        <input
          id={this.props.name}
          type="text"
          name={this.props.name}
          placeholder={this.props.placeholder}
          autoComplete={this.props.autocomplete}
          value={this.props.value}
          onChange={(e) => this.props.onChange(this.props.stateKey, e)}
        />
      </div>
    );
  }
}
