import React from "react";
import Input from "~/components/Input";
import Button from "~/components/Button";
import { StyledSignupContainer } from "./styles";

const Signup = () => {
  return (
    <StyledSignupContainer>
      <form action="" className="form">
        <div className="input-row two-input">
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
        </div>
        <div className="input-row">
          <Input placeholder="Email address" />
        </div>
        <div className="input-row">
          <Input placeholder="Enter password" />
        </div>
        <p>
          By signing in to your account, you are agreeing to rue21’s Privacy
          Policy and Terms of Use.
        </p>
        <Button color="primary">Continue</Button>
      </form>
    </StyledSignupContainer>
  );
};

export default Signup;
