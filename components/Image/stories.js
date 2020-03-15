import { storiesOf } from "@storybook/react";

import Image from ".";
import GroupImage from "~/static/images/group-copy-4.png";

const stories = storiesOf("Image", module);

stories.add("square size", () => (
  <Image src={GroupImage} width={180} height={180} />
));
stories.add("default size", () => <Image src={GroupImage} />);
stories.add("large size", () => (
  <Image src={GroupImage} width={420} height={560} />
));
