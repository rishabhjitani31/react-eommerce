import React from "react";
import Spinner from "~/components/Spinner";
import { StyledButton } from "./styles";

const Button = ({ color, loading, children, ...props }) => {
  return (
    <StyledButton color={color} className="button" {...props}>
      {loading ? (
        <Spinner
          variant="inline"
          spinnerProps={{ className: "button-spinner" }}
        />
      ) : (
        children
      )}
    </StyledButton>
  );
};

export default Button;
