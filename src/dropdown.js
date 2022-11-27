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
        listInvisibleClass: "dropdown-items-invis",
        listItemClasses: ["list-item"],
        addIndex: true,
        eventType: "click",
        eventFunction: () => {},
        ...options
    }

    const listId = "listItems";
    const divWrapper = domUtility.createDomElement("div");
    domUtility.addClasses(divWrapper, options.wrapperClasses);
    domUtility.setElementAttributes(divWrapper, ["id"], [options.menuId]);
    
    divWrapper.addEventListener("mouseover", () => {
        domUtility.removeClasses(document.getElementById(listId), [options.listInvisibleClass])
    });

    divWrapper.addEventListener("mouseleave", () => {
        domUtility.addClasses(document.getElementById(listId), [options.listInvisibleClass])
    });

    const btnDropdown = domUtility.createDomElement("button", options.menuTitle);
    domUtility.addClasses(btnDropdown, options.buttonClasses);

    const ulDropdownItems = domUtility.createDomElement("ul");
    domUtility.addClasses(ulDropdownItems, [options.listClasses, options.listInvisibleClass]);
    domUtility.setElementAttributes(ulDropdownItems, ["id"], [listId])

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