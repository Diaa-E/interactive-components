"use strict";

import "./tab.menu.css";
import domUtility from "./dom.utility";
import defaultIcon from "./icons/item.svg";
import menuIcon from "./icons/menu.svg";
import { dropdown } from "./dropdown";

export function tabMenu(options)
{
    options = {
        menuId: "tabMenu",
        menuItems: ["item 1", "item 2", "item 3", "item 4", "item 5", "item 6"],
        menuIcons: Array(6).fill(defaultIcon),
        menuIconsClasses: ["menu-icon"],
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
    domUtility.addClasses(divWrapper, options.wrapperClasses);
    domUtility.setElementAttributes(divWrapper, ["id"], [options.menuId]);

    const ulItems = domUtility.createDomElement("ul");
    domUtility.addClasses(ulItems, options.itemListClasses);

    for (let i = 0; i < 4; i++)
    {
        const liMenuItem = domUtility.createDomElement("li");
        domUtility.addClasses(liMenuItem, options.itemClasses);
        //select first item
        if (i === 0) domUtility.addClasses(liMenuItem, options.itemSelectedClasses);
        if (options.addIndex) domUtility.setElementAttributes(liMenuItem, ["data-index"], [i]);

        const imgIcon = new Image();
        imgIcon.src = options.menuIcons[i];
        domUtility.addClasses(imgIcon, options.menuIconsClasses);

        liMenuItem.append(imgIcon);
        ulItems.append(liMenuItem);
    }

    if (options.menuItems.length > 4)
    {
        const liMenuItem = domUtility.createDomElement("li");
        domUtility.addClasses(liMenuItem, options.itemClasses);

        liMenuItem.append(dropdown({
            menuTitle: "More",
            menuId: "more",
            menuItems: options.menuItems.slice(4),
            indexOffset: 4,
            onClick: true,
            eventFunction: options.eventFunction,
        }));

        ulItems.append(liMenuItem)
    }

    divWrapper.append(ulItems);

    return divWrapper;
}