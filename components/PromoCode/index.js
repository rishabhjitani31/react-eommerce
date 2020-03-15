import React from "react";
import Button from "~/components/Button";
import Input from "~/components/Input";
import { StyledPromoCodeContainer } from "./styles";

const PromoCode = () => {
  return (
    <StyledPromoCodeContainer>
      <Input placeholder="Have a promocode?" />
      <Button color="secondary">Apply</Button>
    </StyledPromoCodeContainer>
  );
};

export default PromoCode;
