"use strict";

import "./tab.menu.css";
import domUtility from "./dom.utility";
import defaultIcon from "./icons/item.svg"

export function tabMenu(options)
{
    options = {
        menuId: "tabMenu",
        menuItems: ["item 1", "item 2", "item 3", "item 4", "item 5", "item 6"],
        menuIcons: Array(6).fill(defaultIcon),
        wrapperClasses: ["menu-wrapper"],
        itemListClasses: ["items-container"],
        itemClasses: ["menu-item"],
        itemSelectedClasses: ["menu-item-selected"],
        addIndex: true,
        eventType: "click",
        eventFunction: () => {},
        ...options
    }

    const divWrapper = domUtility.createDomElement("div");
    
}