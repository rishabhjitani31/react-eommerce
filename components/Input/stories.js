import { storiesOf } from "@storybook/react";
import Input from "./index";
import CloseIconSignIn from "~/icons/close-icon.js";

const stories = storiesOf("Input", module);

stories.add("Regular state", () => (
  <Input
    type="text"
    placeholder="User Name"
    errorProps={{
      hasError: false,
      message: ""
    }}
  />
));

stories.add("Error state", () => (
  <Input
    type="text"
    placeholder="User Name"
    errorProps={{
      hasError: true,
      message: "Incorrect password"
    }}
  />
));

stories.add("With icon without error", () => (
  <Input
    type="text"
    placeholder="User Name"
    icon={<CloseIconSignIn />}
    errorProps={{
      hasError: false,
      message: ""
    }}
  />
));

stories.add("With icon with error", () => (
  <Input
    type="text"
    placeholder="User Name"
    icon={<CloseIconSignIn />}
    errorProps={{
      hasError: true,
      message: "Incorrect password"
    }}
  />
));
