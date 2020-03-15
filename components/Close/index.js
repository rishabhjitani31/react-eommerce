import { StyledCloseButton } from "./styles";
import CloseIcon from "~/icons/close-icon.js";

export default function(props) {
  return (
    <StyledCloseButton {...props}>
      <CloseIcon />
    </StyledCloseButton>
  );
}
