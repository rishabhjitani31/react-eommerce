import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "~/styles/theme";
import GlobalStoryStyles from "~/styles/globalStyles";

// import ReactDOM from 'react-dom'

// if (
//   process.browser &&
//   (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')
// ) {
//   const a11y = require('react-a11y').default
//   a11y(React, ReactDOM, {
//     rules: {
//       'aria-role': 'warn',
//       'img-uses-alt': 'warn',
//       'hidden-uses-tabindex': 'warn',
//       'img-redundant-alt': 'warn',
//       'interactive-supports-focus': 'warn',
//       'onclick-uses-role': 'warn',
//       'label-has-for': 'warn',
//       'mouse-events-have-key-events': 'warn',
//       'no-hash-ref': 'warn',
//       'tabindex-no-positive': 'warn',
//       'tabindex-uses-button': 'warn'
//     }
//   })
// }

// automatically import all files ending in *.stories.js
const req = {
  components: require.context("../components", true, /stories.js$/)
};

const loadStories = () => {
  req.components.keys().forEach(filename => req.components(filename));
};

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStoryStyles />
      {story()}
    </>
  </ThemeProvider>
));

configure(loadStories, module);
