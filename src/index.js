"use strict";

import { dropdown } from "./dropdown";
import { slideShow } from "./slideshow";
import { tabMenu } from "./tab.menu";

const body = document.querySelector("body");
body.append(slideShow());

function updateTitle(e){

    const hIndex = document.createElement("h1");
    hIndex.innerText = e.target.innerText;

    body.append(hIndex);
}