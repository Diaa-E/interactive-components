"use strict";

import { dropdown } from "./dropdown";

const body = document.querySelector("body");
body.append(dropdown(
    "Dropdown",
    "homemade-dropwdown",
    ["item 1", "item 2", "menu item", "Another item"],
    ["dropdown-wrapper"],
    ["dropdown-button"],
    ["dropdown-items"],
    [],
    true,
    "click",
    updateTitle,
    ));

function updateTitle(e){

    const hIndex = document.createElement("h1");
    hIndex.innerText = e.target.innerText;

    body.append(hIndex);
}