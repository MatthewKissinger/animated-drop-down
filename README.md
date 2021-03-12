## Animated drop-down menu

## in the HTML you need to provide the following:

- ul tag with the class "drop-wrapper"
  - li tag with the class "drop-btn"
    - ul tag with the class "drop-menu"
      - li tags with the drop tabs you need

## to link the css into your index.css file

@import '/styles/dropDown.css';

## to link the js into your index.js file

import { dropDownOnClick } from './dropDown.js';

## call the drop-down module once in your index.js

dropDownOnClick;
