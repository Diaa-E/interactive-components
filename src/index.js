"use strict";

import { dropdown } from "./dropdown";

const body = document.querySelector("body");
body.append(dropdown(
    {
        eventFunction: updateTitle,
    }
    ));

function updateTitle(e){

    const hIndex = document.createElement("h1");
    hIndex.innerText = e.target.innerText;

    body.append(hIndex);
}