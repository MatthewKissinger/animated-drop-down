## Animated drop-down menu

## Installation

On the command line...

`npm i top-dropdown-menu --save`

In your index.js file

```
import { dropDownOnClick } from './node_modules/top-dropdown-menu/scripts/dropDown.js';
// calling the dropDown module
dropDownOnClick;
```

In your index.css file

```
@import '/node_modules/top-dropdown-menu/styles/dropDown.css';
```

## in the HTML you need to provide the following structure and classes:

```
<ul class="drop-wrapper">
  <li class="drop-btn">
    BUTTON 1
    <ul class="drop-menu">
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
      <li>Four</li>
    </ul>
  </li>
</ul>
```

Feel free to edit the dropDown.css file to personalize the menu
