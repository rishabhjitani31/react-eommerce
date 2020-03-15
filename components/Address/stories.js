import { storiesOf } from "@storybook/react";
import Address from ".";

const stories = storiesOf("Address page", module);

stories.add("View", () => (
  <Address
    title="Add new address"
    firstName={undefined}
    lastname={undefined}
    addressLine1={undefined}
    addressLine2={undefined}
    country={undefined}
    city={undefined}
    state={undefined}
    zipCode={undefined}
    contact={undefined}
  />
));

stories.add("Error view", () => (
  <Address
    addressError
    addressErrorMessage="Address is required"
    title="Add new address"
    firstName={undefined}
    lastname={undefined}
    addressLine1={undefined}
    addressLine2={undefined}
    country={undefined}
    city={undefined}
    state={undefined}
    zipCode={undefined}
    contact={undefined}
  />
));

stories.add("Edit view", () => (
  <Address
    title="Edit address"
    firstName="Minerva"
    lastname="Parks"
    addressLine1="10400 NE 4th St."
    addressLine2={undefined}
    country={undefined}
    city="Bellevue"
    state="WA"
    zipCode="98004"
    contact="+1 503 9364276"
  />
));
