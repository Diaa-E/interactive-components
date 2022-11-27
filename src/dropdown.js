"use strict";

import "./dropdown.css";
import domUtility from "./dom.utility.js"

export function dropdown(
    menuTitle = "Menu",
    menuItems = [],
    wrapperClasses = [],
    buttonClasses = [],
    listClasses = [],
    listItemClasses = [],
    )
{
    const divWrapper = domUtility.createDomElement("div");
    domUtility.addClasses(divWrapper, wrapperClasses);

    const btnDropdown = domUtility.createDomElement("button", menuTitle);
    domUtility.addClasses(btnDropdown, buttonClasses);

    const ulDropdownItems = domUtility.createDomElement("ul");
    domUtility.addClasses(ulDropdownItems, listClasses);

    menuItems.forEach(item => {

        const liCurrentItem = domUtility.createDomElement("li", item);
        domUtility.addClasses(liCurrentItem, listItemClasses);

        ulDropdownItems.append(liCurrentItem);
    });

    divWrapper.append(btnDropdown, ulDropdownItems);

    return divWrapper;
}