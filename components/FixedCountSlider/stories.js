import React from "react";
import { storiesOf } from "@storybook/react";
import Category from "~/static/images/image-category.jpg";
import Denim from "~/components/Denim";
import Slider from ".";

const items = [
  {
    name: Category,
    title: "Flex Light Wash Whiskered Skinny Jeans",
    price: "$34.99",
    description: "BUY 1 GET 1 50% OFF",
    size: "size: 28, 30, 32, 36",
    variants: ["#87152c", "#848715", "#d5dc41"]
  },
  {
    name: Category,
    title: "Flex Gray Wash Nicked Skinny Jeans",
    price: "$34.99",
    description: "BUY 1 GET 1 50% OFF",
    size: "size: 28, 30, 32, 36",
    variants: ["#87152c", "#848715", "#d5dc41"]
  },
  {
    name: Category,
    title: "Flex Medium Wash Skinny Jeans",
    price: "$34.99",
    description: "BUY 1 GET 1 50% OFF",
    size: "size: 28, 30, 32, 36",
    variants: ["#87152c", "#848715", "#d5dc41"]
  },
  {
    name: Category,
    title: "Dark Wash Bleached Zipper Thigh Skinny Moto Jeans",
    price: "$44.99",
    description: "BUY 1 GET 1 50% OFF",
    size: "size: 28, 30, 32, 36",
    variants: ["#87152c", "#848715", "#d5dc41"]
  },
  {
    name: Category,
    title: "Flex Light Wash Whiskered Skinny Jeans",
    price: "$34.99",
    description: "BUY 1 GET 1 50% OFF",
    size: "size: 28, 30, 32, 36",
    variants: ["#87152c", "#848715", "#d5dc41"]
  },
  {
    name: Category,
    title: "Flex Light Wash Whiskered Skinny Jeans",
    price: "$34.99",
    description: "BUY 1 GET 1 50% OFF",
    size: "size: 28, 30, 32, 36",
    variants: ["#87152c", "#848715", "#d5dc41"]
  }
];

const mocks = items.map(item => (
  <Denim
    imgSrc={item.name}
    title={item.title}
    price={item.price}
    description={item.description}
    size={item.size}
    variants={item.variants}
  />
));

storiesOf("Slider", module).add("3 in view", () => (
  <Slider children={mocks} pageSize={3} hasArrows sliderHeight={600} />
));

storiesOf("Slider", module).add("4 in view", () => (
  <Slider children={mocks} pageSize={4} hasArrows sliderHeight={600} />
));
