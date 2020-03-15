import React, { Fragment } from "react";
import { StyledModalContainer } from "./styles";

import Button from "~/components/Button";

const BuyNow = () => {
  return (
    <Fragment>
      <Button color="primary">Buy Now</Button>
      <StyledModalContainer>
        <div className="modal-container">
          <div className="info-container">
            <p className="caption">Ship To</p>
            <div className="meta-info">
              <div>
                <h2>John Doe</h2>
                <p>10400 NE, 4th St. Bellevue, W..</p>
              </div>
              <button>Change</button>
            </div>
          </div>
          <div className="info-container">
            <p className="caption">Pay To</p>
            <div className="meta-info">
              <div>
                <h2>Apple Pay</h2>
                <p>VISA (xxxx1928)</p>
              </div>
              <button>Change</button>
            </div>
          </div>
          <div className="info-container">
            <p className="caption">Get it by</p>
            <div className="meta-info">
              <div>
                <h2>March 11, 2019</h2>
                <p>Free Shipping</p>
              </div>
              <button>Change</button>
            </div>
          </div>
          <div className="info-container">
            <p className="caption">Total</p>
            <div className="meta-info">
              <div>
                <h2>$XXX.00</h2>
                <p>(includes taxes)</p>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <Button color="primary">Buy now in XXX.00</Button>
          </div>
        </div>
      </StyledModalContainer>
    </Fragment>
  );
};

export default BuyNow;
