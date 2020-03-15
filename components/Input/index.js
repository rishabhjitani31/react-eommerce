import React, { Component } from "react";
import { InputStyle } from "./styles";

class Input extends Component {
  render() {
    const {
      type = "",
      placeholder = "",
      icon = "",
      error = false,
      img = "",
      errorProps = {}
    } = this.props;
    return (
      <InputStyle className={`input-new ${errorProps.hasError ? "error" : ""}`}>
        <div className={`input-row ${icon ? "input-with-icon" : ""}`}>
          <input
            className="input-block"
            type={type}
            placeholder={placeholder}
          />
          {icon && <div className="icon">{icon}</div>}
          {img && <img src={img} className="icon" />}
        </div>
        {errorProps.hasError && (
          <span className="not-valid error-message">{errorProps.message}</span>
        )}
      </InputStyle>
    );
  }
}

export default Input;
