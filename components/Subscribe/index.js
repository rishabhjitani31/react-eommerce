import React, { Component } from "react";
import isEmailMaybe from "is-email-maybe";
import PropTypes from "prop-types";
import Button from "~/components/Button";
import Input from "~/components/Input";
import Envelope from "~/icons/envelope.js";
import { StyledSubscribe } from "./styles";

export default class Subscribe extends Component {
  static propTypes = {
    onConfirmClick: PropTypes.func,
    title: PropTypes.string
  };

  state = {
    email: "",
    error: ""
  };

  subscribe = () => {
    if (!isEmailMaybe(this.state.email)) {
      this.setState({ error: true });
    } else {
      this.props.onConfirmClick(this.state.email);
      this.setState({ email: "" });
    }
  };

  render() {
    const {
      title,
      showIcon,
      metaTitle = "",
      message,
      value,
      ...rest
    } = this.props;
    return (
      <StyledSubscribe {...rest}>
        {showIcon && (
          <span className="envelope-container">
            <Envelope />
          </span>
        )}
        {title && <h4 className="title">{title}</h4>}
        {metaTitle && <p className="meta-title">{metaTitle}</p>}
        <div className="content">
          <Input
            type="email"
            placeholder="Email address"
            icon={
              <div className="button-container">
                <Button
                  color="primary"
                  onClick={this.subscribe}
                  className="button"
                >
                  Subscribe
                </Button>
              </div>
            }
            errorProps={{
              hasError: false,
              message: "Please enter a valid email address"
            }}
          />
        </div>
      </StyledSubscribe>
    );
  }
}
