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
        buttonClasses: {
            next: ["next"],
            prev: ["prev"],
        },
        imageClasses: ["visible"],
        imageClassesFade: ["fade"],
        captionClasses: ["caption"],
        wrapperClasses: ["slideshow-wrapper"],
        ...options
    }

    const divWrapper = domUtility.createDomElement("div");
    domUtility.addClasses(divWrapper, options.wrapperClasses);

    for (let i = 0; i < options.images.length; i++)
    {
        const currentImage = new Image();
        currentImage.src = options.images[i].src;
        domUtility.addClasses(currentImage, options.imageClassesFade);
        domUtility.setElementAttributes(currentImage, ["id", "data-index"], ["slideImage", i]);

        //show first iamge by default
        if (i === 0)
        {
            domUtility.addClasses(currentImage, options.imageClasses);
        }

        divWrapper.appendChild(currentImage);
    }

    const divCaption = domUtility.createDomElement("div");
    domUtility.setElementText(divCaption, options.images[0].cap);
    domUtility.addClasses(divCaption, options.captionClasses);
    divWrapper.appendChild(divCaption);

    const btnNext = domUtility.createDomElement("button");
    const btnPrev = domUtility.createDomElement("button");

    btnNext.addEventListener("click", (e) => {

        const currentImageIndex = +document.querySelector(`.${options.imageClasses[0]}`).getAttribute("data-index");
        
        changeImage(currentImageIndex + 1, options.imageClasses);
    });

    btnPrev.addEventListener("click", (e) => {

        const currentImageIndex = +document.querySelector(`.${options.imageClasses[0]}`).getAttribute("data-index");
        
        changeImage(currentImageIndex - 1, options.imageClasses);
    })

    domUtility.setElementText(btnNext, "❯");
    domUtility.setElementText(btnPrev, "❮");

    domUtility.addClasses(btnNext, options.buttonClasses.next);
    domUtility.addClasses(btnPrev, options.buttonClasses.prev);

    divWrapper.append(btnNext, btnPrev);
    return divWrapper

    function changeImage(index, imageClasses)
    {
        const images = document.querySelectorAll("#slideImage");
    
        if (index >= images.length) index = 0;
        if (index < 0) index = images.length - 1;
    
        images.forEach(image => {
    
            domUtility.removeClasses(image, imageClasses); //deactivate all images
        })
    
        domUtility.addClasses(images[index], imageClasses);
    };
}