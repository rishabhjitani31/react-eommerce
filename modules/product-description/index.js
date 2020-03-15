import React from "react";

import PreviewItem from "~/components/PreviewItem";
import Price from "~/components/Price";
import Discount from "~/components/Discount";
import ColorSelect from "~/components/ColorSelect";
import SizeSelect from "~/components/SizeSelect";
import Dropdown from "~/components/Dropdown";
import Button from "~/components/Button";
import Accordion from "~/components/Accordion";

import { StyledProductDescription } from "./styles";

class ProductDescription extends React.Component {
  render() {
    const { product } = this.props;

    const images =
      (product &&
        product.images &&
        product.images.map(image => {
          return {
            id: image.source[0].id,
            src: image.source[0].url,
            alt: image.meta
          };
        })) ||
      [];
    return (
      <StyledProductDescription>
        <div className="description-container">
          {images.length > 0 && <PreviewItem itemImages={images} />}
          <div className="description">
            <h3 className="product-title">{product && product.title}</h3>
            <div className="price-info">
              <Price amount="17.99" />
              <Price amount="29.99" strike />
              <Discount percent={40} />
            </div>
            {product &&
              product.variants &&
              product.variants[0] &&
              product.variants[0].name &&
              product.variants[0].name === "color" && (
                <div className="color">
                  <ColorSelect
                    colors={[
                      {
                        name: product.variants[0].value
                      }
                    ]}
                  />
                </div>
              )}
            <div className="size">
              <SizeSelect
                sizes={[
                  {
                    name: "S"
                  },
                  {
                    name: "M"
                  },
                  {
                    name: "L"
                  },
                  {
                    name: "XL"
                  },
                  {
                    name: "XXL",
                    isDisabled: true
                  }
                ]}
              />
            </div>
            <div className="quantity">
              <label className="dropdown-title">Quantity</label>
              <Dropdown
                options={[
                  {
                    name: 1,
                    value: "1"
                  },
                  {
                    name: 2,
                    value: "2"
                  },
                  {
                    name: 3,
                    value: "3"
                  },
                  {
                    name: 4,
                    value: "4"
                  },
                  {
                    name: 5,
                    value: "5"
                  }
                ]}
              />
            </div>
            <div className="delivery">
              <div className="delivery-code-column">
                Free Delivery
                <span>(98004)</span>
              </div>
              <button className="delivery-change-btn">Change</button>
            </div>
            <div className="add-button">
              <Button color="primary">Add to Wishlist</Button>
              <Button color="primary">Add to Bag</Button>
            </div>
            <div className="buynow-btn">
              <Button color="primary">Buy Now</Button>
            </div>
          </div>
        </div>
        <div className="accordion-container">
          {product &&
            product.attributes &&
            product.attributes.map(attribute => (
              <Accordion label={attribute.name} key={attribute.id}>
                <p>{attribute.value}</p>
              </Accordion>
            ))}
        </div>
      </StyledProductDescription>
    );
  }
}

export default ProductDescription;
