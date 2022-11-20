### JSX, SCSS classes, naming

> html / jsx

- each markup element should contain a class, pick between re-usable or unique depending on the situation
- each element name should describe it as best as it possibly can with the minimal ammount of words

```html
<div class="parent">
  <div class="parent__child1">
    <div class="parent__child1--other">
      <div class="parent__child1--inner"></div>
    </div>
    <div class="parent__child1--other"></div>
  </div>

  <!-- space between siblings for readability -->
  <div class="parent__child2">
    <div class="parent__child2--other1"></div>
    <div class="parent__child2--other2"></div>
  </div>
</div>
```

> css / scss

- nested from parent to child

```css
.parent {
  -- rules --

  &__child {
    -- rules --

    &--other {
      -- rules --
    }
  }
}
```

> js imports

- module
- functionality
- local helpers

```js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
...

import Button from "components/form/button";
import Input from "components/form/input";
...

import { request } from "shared/js/api";
import { endpoint } from "shared/js/endpoints";
...

import { ROUTES } from "./routes";
...
```

> javascript standards

```js
// function > verb
handleThat()
goToThatRoute()
doThatOtherThing()

// is boolean?
const isUserAuthenticated = true
const hasAccessRights = false
const isFunctionAllowed = true

// number?
const valueOfProduct = 10
const greaterThanOrherValue = 23
const ageOfTheUser = 31

// string or data?
const userAuthenticationMessage = "You must be authenticated in order to see this screen"
const errorFetchRequestMessage = "We are sorry! There was an error our side".
```
