# Bailey - Fabric powered e-commerce app

## Start your app

run **npm install** to install all the dependencies. This is required only for the initial setup.
run **npm run dev** to start the web app.

## Storybook Components

run **npm run storybook** to see all the re-usable component stories.
run **npm run build-storybook** to build a static version of the storybook components

## Coding standards and conventions

1. Run **npm run format** to beautify the code before commiting. Pre-commit hooks have been applied to make sure this is followed.
1. Run **npm run lint** after formatting, to check if there are any linting errors.
1. Followed the convention of small-cased-hyphenated file and folder names
1. Use .js files for svg icons.
1. Make sure you are provided .svg assets for icons in the designs.
1. When specifying imports in a file, make sure that the import sequence is as follows → global package imports, then fartherst file to the nearest file import. Similar kinds of imports are to be clubbed together. Example, if you need to import, react, styles, button, input and routes. The sequence will be:
   import {Component} from ‘react’ . → global
   import {Link} from ‘lib/routes’ . → farthest
   import Input from ‘./~/components/input’
   import Button from ‘./~/components/button’ → notice grouping
   import {MyStyledComponent} from ‘./styles’ . → nearest

1. Add a semi-colon after every ${} in styles.js. This will help in ensuring proper formatting. Example: ${md(`flex-wrap:wrap;`)};
