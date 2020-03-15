import { storiesOf } from "@storybook/react";
import PreviewItem from ".";

import ImageOne from "~/static/images/group-copy.png";
import ImageTwo from "~/static/images/group-copy-2.png";
import ImageThree from "~/static/images/group-copy-4.png";

const stories = storiesOf("Preview Item", module);

stories.add("basic", () => {
  return (
    <PreviewItem
      itemImages={[
        {
          src: ImageOne
        },
        {
          src: ImageTwo
        },
        {
          src: ImageThree
        }
      ]}
    />
  );
});
