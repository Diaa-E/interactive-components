"use strict";

import { dropdown } from "./dropdown";

const body = document.querySelector("body");
body.append(dropdown("Dropdown", "item 1", "item 2", "menu item", "Another item"));