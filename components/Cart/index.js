import React from "react";
import Button from "~/components/Button";
import CartCard from "~/components/CartCard";
import PromoCode from "~/components/PromoCode";
import { StyledCartContainer } from "./styles";

const CardItems = [
  {
    name: "Pink Floral Lace Off Shoulder Minimal design",
    size: "M",
    numberOfItems: 1,
    itemsLeft: 1,
    price: {
      original: "XXX.00",
      discountedPrice: "XXX.00",
      discountPercentage: 60
    },
    delivery: {
      numberOfDays: 5,
      isFree: true,
      day: "Fri"
    }
  },
  {
    name: "Red Colorblock Paint Splattered Savage Graphic Tee",
    size: "M",
    numberOfItems: 1,
    itemsLeft: 4,
    price: {
      original: "XX.00",
      discountedPrice: "XX.00",
      discountPercentage: 42
    },
    delivery: {
      numberOfDays: 5,
      isFree: false,
      shippingCost: "5.00",
      day: "Fri"
    }
  }
];

const Cart = () => {
  return (
    <StyledCartContainer>
      <div className="item-container">
        {CardItems.map(item => {
          return <CartCard key={item.name} item={item} />;
        })}
      </div>
      <div className="total-container">
        <div className="total-info">
          <p>Subtotal</p>
          <p>$XXX.00</p>
        </div>
        <PromoCode />
        <div className="total-info">
          <p>Total</p>
          <p>$XXX.00</p>
        </div>
        <div className="checkout-container">
          <Button color="primary">Checkout</Button>
        </div>
      </div>
    </StyledCartContainer>
  );
};

export default Cart;
