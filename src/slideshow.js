"use strict";

import "./slideshow.css";
import domUtility from "./dom.utility";
import defaultImage1 from "./images/default_1.jpg";
import defaultImage2 from "./images/default_2.jpg";
import defaultImage3 from "./images/default_3.jpg";

export function slideShow(options)
{
    options = {
        images: [
            {
                src: defaultImage1,
                cap: "default iamge 1"
            },
            {
                src: defaultImage2,
                cap: "default iamge 2"
            },
            {
                src: defaultImage3,
                cap: "default iamge 3"
            }
        ],
        wrapperClasses: ["slideshow-wrapper"],
        ...options
    }

    const divWrapper = domUtility.createDomElement("div");
    domUtility.addClasses(divWrapper, options.wrapperClasses);

    const images = [];

    for (let i = 0; i < options.images.length; i++)
    {
        const currentImage = new Image();
        currentImage.src = options.images[i].src;
        images.push(currentImage);
    }

    divWrapper.append(images[1]);
    return divWrapper
}