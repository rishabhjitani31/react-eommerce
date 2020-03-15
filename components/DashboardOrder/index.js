import React, { Component } from "react";
import Button from "~/components/Button";
import category from "~/static/images/image-category.jpg";
import ArrowRight from "~/icons/arrow-right.js";
import { DashboardMethodStyle } from "./styles";

class DashboardOrder extends Component {
  render() {
    const {
      shippingDate = "",
      price = "",
      orderNumber = "",
      shipping = "",
      buyerName = "",
      quantity = "",
      trackInfo = "",
      trackStatus = ""
    } = this.props.data;
    return (
      <DashboardMethodStyle>
        <div className="order-card-container">
          <div className="order-date">
            <div className="date">{shippingDate}</div>
            <div className="price">{price}</div>
          </div>
          <div className="product-imgpart">
            <figure className="product-figure">
              <img src={category} className="product-image" />
            </figure>
            <div className="product-details">
              <div className="order-number">{orderNumber}</div>
              <h3 className="order-product">{shipping}</h3>
              <div className="gray-quantity-invoice">
                <div className="gray">{buyerName}</div>
                <div className="qty">{quantity}</div>
              </div>
              <div className="arrow-view-product">
                <a href="#" className="view-product">
                  View product
                  <ArrowRight className="arrow" />
                </a>
              </div>
            </div>
            <div className="product-status">
              <span className="order-status">{trackInfo}</span>
              <Button color="secondary">{trackStatus}</Button>
            </div>
          </div>
        </div>
      </DashboardMethodStyle>
    );
  }
}

export default DashboardOrder;
