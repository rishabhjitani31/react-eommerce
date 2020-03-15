import { storiesOf } from "@storybook/react";
import ShippingAddress from ".";

const stories = storiesOf("Shipping Address", module);

stories.add("Basic Page", () => <ShippingAddress />);
