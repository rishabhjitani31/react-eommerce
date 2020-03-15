import React from "react";
import Button from "~/components/Button";
import { StyledContainer, FloatingCard } from "./styles";

const CatalogCard = ({
  image,
  title,
  description,
  floatingCardColor,
  buttonLinks
}) => {
  return (
    <StyledContainer>
      <div className="catalog-card-image">
        <img src={image} alt="" />
      </div>
      <div className="card-container">
        <FloatingCard floatingCardColor={floatingCardColor}>
          <div className="floating-card-header">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </FloatingCard>
      </div>

      <div className="catalog-card-btn-row">
        {buttonLinks.map(button => {
          return (
            <Button
              key={button.name}
              onClick={button.onClick}
              color="secondary"
            >
              {button.name}
            </Button>
          );
        })}
      </div>
    </StyledContainer>
  );
};

export default CatalogCard;
