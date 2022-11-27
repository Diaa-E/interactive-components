"use strict";

import "./dropdown.css";
import domUtility from "./dom.utility.js"

export function dropdown(options)
{
    //set default values and spread passed arguments
    //when names conflict newer values replace older ones
    options = {
        menuTitle: "Menu",
        menuId: "menu",
        menuItems: ["item 1", "item 2", "item 3", "item 4"],
        wrapperClasses: ["dropdown-wrapper"],
        buttonClasses: ["dropdown-button"],
        listClasses: ["dropdown-items"],
        listItemClasses: ["list-item"],
        addIndex: true,
        eventType: "click",
        eventFunction: () => {},
        ...options
    }

    const divWrapper = domUtility.createDomElement("div");
    domUtility.addClasses(divWrapper, options.wrapperClasses);
    domUtility.setElementAttributes(divWrapper, ["id"], [options.menuId]);

    const btnDropdown = domUtility.createDomElement("button", options.menuTitle);
    domUtility.addClasses(btnDropdown, options.buttonClasses);

    const ulDropdownItems = domUtility.createDomElement("ul");
    domUtility.addClasses(ulDropdownItems, options.listClasses);

    for (let i = 0; i < options.menuItems.length; i++)
    {
        const liCurrentItem = domUtility.createDomElement("li", options.menuItems[i]);
        domUtility.addClasses(liCurrentItem, options.listItemClasses);

        if (options.addIndex) domUtility.setElementAttributes(liCurrentItem, ["data-index"], [i]);
        liCurrentItem.addEventListener(options.eventType, (e) => {
            options.eventFunction(e);
        })

        ulDropdownItems.append(liCurrentItem);
    }

    divWrapper.append(btnDropdown, ulDropdownItems);

    return divWrapper;
}