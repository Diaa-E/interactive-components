"use strict";

import "./dropdown.css";
import domUtility from "./dom.utility.js"

export function dropdown(
    menuTitle = "Menu",
    menuId = "menu",
    menuItems = [],
    wrapperClasses = [],
    buttonClasses = [],
    listClasses = [],
    listItemClasses = [],
    addIndex = false,
    )
{
    const divWrapper = domUtility.createDomElement("div");
    domUtility.addClasses(divWrapper, wrapperClasses);
    domUtility.setElementAttributes(divWrapper, ["id"], [menuId]);

    const btnDropdown = domUtility.createDomElement("button", menuTitle);
    domUtility.addClasses(btnDropdown, buttonClasses);

    const ulDropdownItems = domUtility.createDomElement("ul");
    domUtility.addClasses(ulDropdownItems, listClasses);

    for (let i = 0; i < menuItems.length; i++)
    {
        const liCurrentItem = domUtility.createDomElement("li", menuItems[i]);
        domUtility.addClasses(liCurrentItem, listItemClasses);

        if (addIndex) domUtility.setElementAttributes(liCurrentItem, ["data-index"], [i]);

        ulDropdownItems.append(liCurrentItem);
    }

    divWrapper.append(btnDropdown, ulDropdownItems);

    return divWrapper;
}