import { storiesOf } from "@storybook/react";
import Modal from ".";
import ShippingAddress from "~/components/Address";

const stories = storiesOf("Modal", module);

stories.add("Regular Modal", () => (
  <div>
    <Modal title="Add New Address" open>
      <ShippingAddress />
    </Modal>
  </div>
));
