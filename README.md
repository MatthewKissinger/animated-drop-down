## Animated drop-down menu

## Installation

On the command line...

`npm i top-dropdown-menu`

In your index.js file

```
import { dropDownOnClick } from './dropDown.js';
// calling the dropDown module
dropDownOnClick;
```

In your index.css file

```
@import '/styles/dropDown.css';
```

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
