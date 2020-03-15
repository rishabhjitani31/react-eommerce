import React, { Component } from "react";
import { Link } from "~/lib/routes";
import Button from "~/components/Button";
import Input from "~/components/Input";
import Checkbox from "~/components/Checkbox";
import CloseIconSignIn from "~/icons/close-icon.js";
import SearchIcon from "~/icons/search.js";
import { StyledSignIn } from "./styles";

class SignIn extends Component {
  render() {
    const {
      signInText = "",
      forgotPasswordText = "",
      createAccountText = ""
    } = this.props;
    return (
      <StyledSignIn>
        <div className="signin-component">
          <div className="signin-header">
            <div className="signin-heading-content">{signInText}</div>
            <div className="close">
              <CloseIconSignIn />
            </div>
          </div>
          <div className="signin-content">
            <div className="form-row">
              <Input type="text" placeholder="Email" />
            </div>
            <div className="form-row">
              <Input
                type="password"
                placeholder="Password"
                icon={<SearchIcon />}
              />
            </div>
            <div className="signin-action-row">
              <Checkbox label="Keep me signed in" />
              <Link href="#" className="forgot-password">
                {forgotPasswordText}
              </Link>
            </div>
            <div className="signin-terms-content">
              By signing in to your account, you are agreeing to rue21’s
              <Link className="privacy-policy" href="#">
                <div>Privacy Policy</div>
              </Link>
              and
              <Link href="#" className="privacy-policy">
                <div>Terms of Use</div>
              </Link>
            </div>
            <div className="form-row">
              <Button color="primary">Sign In</Button>
            </div>
            <div className="create-account-link">
              <Link className="create-acc-link" href="#">
                {createAccountText}
              </Link>
            </div>
          </div>
        </div>
      </StyledSignIn>
    );
  }
}

export default SignIn;
