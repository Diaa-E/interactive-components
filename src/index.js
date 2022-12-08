"use strict";

import { dropdown } from "./dropdown";
import { tabMenu } from "./tab.menu";

const body = document.querySelector("body");
// body.append(dropdown({eventFunction: updateTitle}));
body.append(tabMenu());

function updateTitle(e){

    const hIndex = document.createElement("h1");
    hIndex.innerText = e.target.innerText;

    body.append(hIndex);
}