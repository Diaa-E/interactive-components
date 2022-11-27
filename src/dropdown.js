"use strict";

import "./dropdown.css";
import domUtility from "./dom.utility.js"

export function dropdown(menuTitle = "Menu", ...menuItems)
{
    const divWrapper = domUtility.createDomElement("div");
    domUtility.addClasses(divWrapper, "dropdown-wrapper");

    const btnDropdown = domUtility.createDomElement("button", menuTitle);
    domUtility.addClasses(btnDropdown, "dropdown-button");

    const ulDropdownItems = domUtility.createDomElement("ul");
    domUtility.addClasses(ulDropdownItems, "dropdown-items");

    menuItems.forEach(item => {

        const liCurrentItem = domUtility.createDomElement("li", item);

        ulDropdownItems.append(liCurrentItem);
    });

    divWrapper.append(btnDropdown, ulDropdownItems);

    return divWrapper;
}