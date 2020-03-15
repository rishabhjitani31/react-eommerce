import React from "react";
import Button from "~/components/Button";
import { StyledContainer, FloatingCard } from "./styles";

const BannerCatalogCard = ({
  reverse = false,
  startingPrice,
  image,
  title,
  description,
  floatingCardColor,
  buttonLinks
}) => {
  return (
    <StyledContainer reverse={reverse}>
      <div className="card-container">
        <FloatingCard floatingCardColor={floatingCardColor} reverse={reverse}>
          <div className="floating-card-header">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <div className="floating-card-footer">
            <p>{startingPrice}</p>
            {buttonLinks.map(button => {
              return (
                <Button
                  key={button.name}
                  color="secondary"
                  onClick={button.onClick}
                >
                  {button.name}
                </Button>
              );
            })}
          </div>
        </FloatingCard>
      </div>
      <div className="catalog-card-image">
        <img src={image} alt="" />
      </div>
    </StyledContainer>
  );
};

export default BannerCatalogCard;
