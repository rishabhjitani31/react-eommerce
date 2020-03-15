import React, { Fragment } from "react";
import { StyledModalContainer, StyledHeader } from "./styles";
import Overlay from "~/components/Overlay";

const Modal = ({ title = "", children, open = false, onClose }) => {
  return (
    open && (
      <Fragment>
        <StyledModalContainer>
          {title && <StyledHeader>{title}</StyledHeader>}
          {children}
        </StyledModalContainer>
        <Overlay onClick={onClose} />
      </Fragment>
    )
  );
};

export default Modal;
