import React, { Component } from "react";
import { Link } from "~/lib/routes";

import { StyledSlider, StyledVariant, OvalCopy } from "./styles";

function variantContainer(data = []) {
  return (
    <StyledVariant>
      <div className="oval_direction">
        {data.map(color => {
          return <OvalCopy background={color} key={color} />;
        })}
      </div>
    </StyledVariant>
  );
}

class Denim extends Component {
  render() {
    const {
      imgSrc = "",
      title = "",
      price = "",
      description = "",
      variants = [],
      size = ""
    } = this.props;
    return (
      <StyledSlider className="denim-single">
        <div className="img_slider">
          <div className="box_industries">
            <div className="product_image">
              <Link route="product-description">
                <img src={imgSrc} className="img-src" />
              </Link>
              <div className="content">
                {Boolean(size.length) && <div className="size">{size}</div>}
                {Boolean(variants.length) && (
                  <div className="variants">VARIANTS:</div>
                )}
                {variantContainer(variants)}
              </div>
            </div>
          </div>
          <div className="product_details">
            <div className="title_slider">{title}</div>
            <div className="price_slider">{price}</div>
            <div className="description_slider">{description}</div>
          </div>
        </div>
      </StyledSlider>
    );
  }
}

export default Denim;
