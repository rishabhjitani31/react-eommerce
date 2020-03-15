import React, { Component } from "react";
import Input from "~/components/Input";
import Button from "~/components/Button";
import flagUrl from "~/static/images/country-flag.png";
import ArrowUrl from "~/icons/arrow-drop-down.js";
import { StyledShipping } from "./styles";

class ShippingAddress extends Component {
  render() {
    return (
      <StyledShipping>
        <div className="shipping-address">SHIPPING ADDRESS</div>
        <div className="form-row">
          <Input type="text" placeholder="Your Name" />
        </div>
        <div className="form-row">
          <Input type="text" placeholder="Address" />
        </div>
        <div className="form-row">
          <Input type="text" placeholder="Apartment, Suite (optional)" />
        </div>
        <div className="form-row">
          <Input type="text" placeholder="Country" icon={<ArrowUrl />} />
        </div>
        <div className="form-row">
          <Input type="text" placeholder="ZIP code" />
        </div>
        <div className="form-row">
          <Input type="text" placeholder="State" />
        </div>
        <div className="form-row">
          <Input type="text" placeholder="City" />
        </div>
        <div className="form-row">
          <Input type="text" placeholder="Email address" />
        </div>
        <div className="form-row">
          <Input type="text" placeholder="Contact number" img={flagUrl} />
        </div>
        <div className="form-button">
          <Button color="primary">Save Delivery Address</Button>
        </div>
      </StyledShipping>
    );
  }
}

export default ShippingAddress;
