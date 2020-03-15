import { storiesOf } from "@storybook/react";
import Header from ".";
import flagUrl from "~/static/images/country-flag.png";
import logoBrand from "~/static/images/logo-brand-1024.png";
import navImage from "~/static/images/image-category.jpg";

const stories = storiesOf("Header", module);

export const subMenu = [
  {
    name: "NEW",
    key: 1,
    children: [
      {
        name: "Tops",
        key: 1,
        value: [
          {
            name: "Graphic Tees",
            key: 1
          },
          {
            name: "Neck Tees",
            key: 2
          },
          {
            name: "V Tees",
            key: 3
          }
        ]
      },
      {
        name: "Shirt",
        key: 2,
        value: [
          {
            name: "Graphic shirt",
            key: 1
          },
          {
            name: "Full sleves",
            key: 2
          },
          {
            name: "Half sleeves",
            key: 3
          }
        ]
      },
      {
        name: "Jeans",
        key: 3,
        value: [
          {
            name: "Graphic jeans",
            key: 1
          },
          {
            name: "Rugged jeans",
            key: 2
          },
          {
            name: "Trousers",
            key: 3
          }
        ]
      }
    ]
  },
  {
    name: "GIRLS",
    key: 2,
    children: [
      {
        name: "Tops",
        key: 1,
        value: [
          {
            name: "Graphic Tees",
            key: 1
          },
          {
            name: "Neck Tees",
            key: 2
          },
          {
            name: "V Tees",
            key: 3
          }
        ]
      },
      {
        name: "Shirt",
        key: 2,
        value: [
          {
            name: "Graphic Tees",
            key: 1
          },
          {
            name: "Neck Tees",
            key: 2
          },
          {
            name: "V Tees",
            key: 3
          }
        ]
      },
      {
        name: "Jeans",
        key: 3,
        value: [
          {
            name: "Graphic Tees",
            key: 1
          },
          {
            name: "Neck Tees",
            key: 2
          },
          {
            name: "V Tees",
            key: 3
          }
        ]
      }
    ]
  },
  {
    name: "GUYS",
    key: 3,
    children: [
      {
        name: "Tops",
        key: 1,
        value: [
          {
            name: "Graphic Tees",
            key: 1
          },
          {
            name: "Neck Tees",
            key: 2
          },
          {
            name: "V Tees",
            key: 3
          }
        ]
      },
      {
        name: "Shirt",
        key: 2,
        value: [
          {
            name: "Graphic Tees",
            key: 1
          },
          {
            name: "Neck Tees",
            key: 2
          },
          {
            name: "V Tees",
            key: 3
          }
        ]
      },
      {
        name: "Jeans",
        key: 3,
        value: [
          {
            name: "Graphic Tees",
            key: 1
          },
          {
            name: "Neck Tees",
            key: 2
          },
          {
            name: "V Tees",
            key: 3
          }
        ]
      }
    ]
  },
  {
    name: "PLUS",
    key: 4,
    children: [
      {
        name: "Tops",
        key: 1,
        value: [
          {
            name: "Graphic Tees",
            key: 1
          },
          {
            name: "Neck Tees",
            key: 2
          },
          {
            name: "V Tees",
            key: 3
          }
        ]
      },
      {
        name: "Shirt",
        key: 2,
        value: [
          {
            name: "Graphic Tees",
            key: 1
          },
          {
            name: "Neck Tees",
            key: 2
          },
          {
            name: "V Tees",
            key: 3
          }
        ]
      },
      {
        name: "Jeans",
        key: 3,
        value: [
          {
            name: "Graphic Tees",
            key: 1
          },
          {
            name: "Neck Tees",
            key: 2
          },
          {
            name: "V Tees",
            key: 3
          }
        ]
      }
    ]
  },
  {
    name: "JEANS",
    key: 5,
    children: [
      {
        name: "Tops",
        key: 1,
        value: [
          {
            name: "Graphic Tees",
            key: 1
          },
          {
            name: "Neck Tees",
            key: 2
          },
          {
            name: "V Tees",
            key: 3
          }
        ]
      },
      {
        name: "Shirt",
        key: 2,
        value: [
          {
            name: "Graphic Tees",
            key: 1
          },
          {
            name: "Neck Tees",
            key: 2
          },
          {
            name: "V Tees",
            key: 3
          }
        ]
      },
      {
        name: "Jeans",
        key: 3,
        value: [
          {
            name: "Graphic Tees",
            key: 1
          },
          {
            name: "Neck Tees",
            key: 2
          },
          {
            name: "V Tees",
            key: 3
          }
        ]
      }
    ]
  },
  {
    name: "SHOES",
    key: 6,
    children: [
      {
        name: "Tops",
        key: 1,
        value: [
          {
            name: "Graphic Tees",
            key: 1
          },
          {
            name: "Neck Tees",
            key: 2
          },
          {
            name: "V Tees",
            key: 3
          }
        ]
      },
      {
        name: "Shirt",
        key: 2,
        value: [
          {
            name: "Graphic Tees",
            key: 1
          },
          {
            name: "Neck Tees",
            key: 2
          },
          {
            name: "V Tees",
            key: 3
          }
        ]
      },
      {
        name: "Jeans",
        key: 3,
        value: [
          {
            name: "Graphic Tees",
            key: 1
          },
          {
            name: "Neck Tees",
            key: 2
          },
          {
            name: "V Tees",
            key: 3
          }
        ]
      }
    ]
  },
  {
    name: "ACCESSORIES",
    key: 7,
    children: [
      {
        name: "Tops",
        key: 1,
        value: [
          {
            name: "Graphic Tees",
            key: 1
          },
          {
            name: "Neck Tees",
            key: 2
          },
          {
            name: "V Tees",
            key: 3
          }
        ]
      },
      {
        name: "Shirt",
        key: 2,
        value: [
          {
            name: "Graphic Tees",
            key: 1
          },
          {
            name: "Neck Tees",
            key: 2
          },
          {
            name: "V Tees",
            key: 3
          }
        ]
      },
      {
        name: "Jeans",
        key: 3,
        value: [
          {
            name: "Graphic Tees",
            key: 1
          },
          {
            name: "Neck Tees",
            key: 2
          },
          {
            name: "V Tees",
            key: 3
          }
        ]
      }
    ]
  },
  {
    name: "SALE",
    key: 8,
    children: [
      {
        name: "Tops",
        key: 1,
        value: [
          {
            name: "Graphic Tees",
            key: 1
          },
          {
            name: "Neck Tees",
            key: 2
          },
          {
            name: "V Tees",
            key: 3
          }
        ]
      },
      {
        name: "Shirt",
        key: 2,
        value: [
          {
            name: "Graphic Tees",
            key: 1
          },
          {
            name: "Neck Tees",
            key: 2
          },
          {
            name: "V Tees",
            key: 3
          }
        ]
      },
      {
        name: "Jeans",
        key: 3,
        value: [
          {
            name: "Graphic Tees",
            key: 1
          },
          {
            name: "Neck Tees",
            key: 2
          },
          {
            name: "V Tees",
            key: 3
          }
        ]
      }
    ]
  }
];

stories.add("Basic", () => (
  <Header
    flagUrl={flagUrl}
    logoBrand={logoBrand}
    subMenu={subMenu}
    navImage={navImage}
  />
));
