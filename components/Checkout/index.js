import React, { Component } from "react";
import CheckoutAddMethod from "~/components/CheckoutCard";
import CartCard from "~/components/CartCard";
import Input from "~/components/Input";
import Button from "~/components/Button";
import { CheckoutStyle } from "./styles";

class Checkout extends Component {
  render() {
    const {
      cardItems = [],
      summaryTitle = "",
      price = "",
      shippingData = []
    } = this.props;
    return (
      <CheckoutStyle>
        <div className="left-part">
          {shippingData.map(data => {
            return <CheckoutAddMethod data={data} />;
          })}
          <div className="mob-button-wrap">
            <Button color="primary">Continue to Pay XXX.00</Button>
          </div>
        </div>
        <div className="summary-block">
          <div className="heading">
            <div className="title">{summaryTitle}</div>
            <div className="price">{price}</div>
          </div>
          <div className="collapse-block">
            <div className="summary-block-list">
              {cardItems.map(item => {
                return <CartCard item={item} />;
              })}
            </div>
            <div className="promo-code-block">
              <Input type="text" placeholder="Have a promocode?" />
              <Button color="secondary">Apply</Button>
            </div>
            <div className="button-wrap">
              <Button color="primary">Continue to Pay XXX.00</Button>
            </div>
          </div>
        </div>
      </CheckoutStyle>
    );
  }
}

export default Checkout;
