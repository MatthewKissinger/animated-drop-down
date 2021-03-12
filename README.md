## Animated drop-down menu

## in the HTML you need to provide the following:

<ul class="drop-wrapper">
  <li class="drop-btn">Name of Button
    <ul class="drop-menu">
      <li>Name of menu tabs</li>
    </ul>
  </li>
</ul>

## to link the css into your index.css file

@import '/styles/dropDown.css';

## to link the js into your index.js file

import { dropDownOnClick } from './dropDown.js';

## call the drop-down module once in your index.js file

dropDownOnClick;
