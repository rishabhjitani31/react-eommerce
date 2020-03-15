import React, { Component } from "react";
import { CheckoutAddMethodStyle } from "./styles";
import PlusIcon from "~/icons/plus-icon.js";

class CheckoutAddMethod extends Component {
  render() {
    const {
      name = "",
      addressLine1 = "",
      addressLine2 = "",
      pinCode = "",
      mobile = "",
      addInfo = "",
      title = ""
    } = this.props.data;
    return (
      <CheckoutAddMethodStyle className="checkout-method-block">
        <div className="title">{title}</div>
        <label className="checkout-listing" htmlFor="address1">
          <input type="radio" className="radio-button" id="address1" />
          <div className="radio-btn-style" />
          <div className="radio-content">
            <p className="main-title">{name}</p>
            <span className="address">
              {addressLine1}
              <br /> {addressLine2}
              <br /> {pinCode}
              <br /> {mobile}
            </span>
          </div>
        </label>
        <div className="add-repetor">
          <div className="icon">
            <PlusIcon />
          </div>
          <span className="method-name">{addInfo}</span>
        </div>
      </CheckoutAddMethodStyle>
    );
  }
}

export default CheckoutAddMethod;
