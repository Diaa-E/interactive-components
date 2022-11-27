"use strict";

import "./dropdown.css";

export function dropdown(menuTitle = "Menu", ...menuItems)
{
    const divWrapper = document.createElement("div");
    divWrapper.classList.add("dropdown-wrapper");

    const btnDropdown = document.createElement("button");
    btnDropdown.classList.add("dropdown-button");
    btnDropdown.innerText = menuTitle;

    const ulDropdownItems = document.createElement("ul");
    ulDropdownItems.classList.add("dropdown-items");

    menuItems.forEach(item => {

        const liCurrentItem = document.createElement("li");
        liCurrentItem.innerText = item;

        ulDropdownItems.append(liCurrentItem);
    });

    divWrapper.append(btnDropdown, ulDropdownItems);

    return divWrapper;
}