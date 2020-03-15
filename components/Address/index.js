import React, { Component } from "react";
import Input from "~/components/Input";
import Button from "~/components/Button";
import { StyledShipping } from "./styles";
import ArrowUrl from "~/icons/arrow-drop-down.js";

class ShippingAddress extends Component {
  state = {
    firstName: this.props.firstName,
    lastname: this.props.lastname,
    addressLine1: this.props.addressLine1,
    addressLine2: this.props.addressLine2,
    country: this.props.country,
    city: this.props.city,
    state: this.props.state,
    zipCode: this.props.zipCode,
    contact: this.props.contact
  };

  onFieldValueChange = (e, field) => {
    this.setState({ [field]: e.target.value });
  };

  render() {
    const {
      title = "",
      addressError = false,
      addressErrorMessage = ""
    } = this.props;

    const {
      firstName = undefined,
      lastname = undefined,
      addressLine1 = undefined,
      addressLine2 = undefined,
      country = undefined,
      city = undefined,
      state = undefined,
      zipCode = undefined,
      contact = undefined
    } = this.state;

    return (
      <StyledShipping>
        <div className="shipping-address">{title}</div>
        <div className="horizontal-align">
          <div className="form-row-alignment">
            <Input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={e => this.onFieldValueChange(e, "firstName")}
            />
          </div>
          <div className="form-row-alignment">
            <Input
              type="text"
              placeholder="Last Name"
              value={lastname}
              onChange={e => this.onFieldValueChange(e, "lastname")}
            />
          </div>
        </div>
        <div className="form-row">
          <Input
            type="text"
            errorProps={{
              hasError: addressError,
              message: addressErrorMessage
            }}
            placeholder="Address line 1"
            value={addressLine1}
            onChange={e => this.onFieldValueChange(e, "addressLine1")}
          />
        </div>
        <div className="form-row">
          <Input
            type="text"
            placeholder="Address line 2"
            value={addressLine2}
            onChange={e => this.onFieldValueChange(e, "addressLine2")}
          />
        </div>
        <div className="horizontal-align">
          <div className="form-row-alignment">
            <Input
              type="text"
              placeholder="Country"
              img={<ArrowUrl />}
              value={country}
              onChange={e => this.onFieldValueChange(e, "country")}
            />
          </div>
          <div className="form-row-alignment">
            <Input
              type="text"
              placeholder="City"
              value={city}
              onChange={e => this.onFieldValueChange(e, "city")}
            />
          </div>
        </div>
        <div className="horizontal-align-city">
          <div className="form-row-alignment">
            <Input
              type="text"
              placeholder="State"
              img={<ArrowUrl />}
              value={state}
              onChange={e => this.onFieldValueChange(e, "state")}
            />
          </div>
          <div className="form-row-alignment">
            <Input
              type="text"
              placeholder="ZIP code"
              value={zipCode}
              onChange={e => this.onFieldValueChange(e, "zipCode")}
            />
          </div>
        </div>
        <div className="form-row">
          <Input
            type="text"
            placeholder="Phone no."
            value={contact}
            onChange={e => this.onFieldValueChange(e, "contact")}
          />
        </div>
        <div className="form-button">
          <Button color="primary">Save Address</Button>
        </div>
      </StyledShipping>
    );
  }
}

export default ShippingAddress;
