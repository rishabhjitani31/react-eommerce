import { storiesOf } from "@storybook/react";
import AccountOptionCard from ".";

import Facebook from "~/icons/facebook.js";
import Instagram from "~/icons/instagram.js";
import Pinterest from "~/icons/pinterest.js";
import Twitter from "~/icons/twitter.js";
import Youtube from "~/icons/youtube.js";

const stories = storiesOf("AccountOptionCard", module);

stories.add("Account Options Card", () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <AccountOptionCard
        hasIcon
        icon={<Facebook />}
        optionTitle="Your orders"
        optionDescription="Track, return, or buy things again"
      />
      <AccountOptionCard
        hasIcon
        icon={<Instagram />}
        optionTitle={"Login & security"}
        optionDescription="Edit login, name, and mobile number"
      />
      <AccountOptionCard
        hasIcon
        icon={<Pinterest />}
        optionTitle="Your addresses"
        optionDescription="Edit addresses for orders and gifts"
      />
      <AccountOptionCard
        hasIcon
        icon={<Twitter />}
        optionTitle="Payment options"
        optionDescription="Edit or add payment methods"
      />
      <AccountOptionCard
        hasIcon
        icon={<Youtube />}
        optionTitle="Store credits"
        optionDescription="Check credits, add money to your balance"
      />
    </div>
  );
});
