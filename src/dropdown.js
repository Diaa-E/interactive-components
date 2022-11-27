"use strict";

import "./dropdown.css";
import domUtility from "./dom.utility.js"

export function dropdown(
    menuTitle = "Menu",
    menuId = "menu",
    menuItems = ["item 1", "item 2", "item 3", "item 4"],
    wrapperClasses = ["dropdown-wrapper"],
    buttonClasses = ["dropdown-button"],
    listClasses = ["dropdown-items"],
    listItemClasses = [],
    addIndex = true,
    eventType = "click",
    eventFunction = () => {},
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
        liCurrentItem.addEventListener(eventType, (e) => {
            eventFunction(e);
        })

        ulDropdownItems.append(liCurrentItem);
    }

    divWrapper.append(btnDropdown, ulDropdownItems);

    return divWrapper;
}