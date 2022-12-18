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
        dotContainerClasses: ["dot-container"],
        dotClasses: ["dot"],
        dotSelectedClasses: ["dot-selected"],
        wrapperClasses: ["slideshow-wrapper"],
        ...options
    }

    let currentImageIndex = 0;
    let timeOut
    
    const divWrapper = domUtility.createDomElement("div");
    domUtility.addClasses(divWrapper, options.wrapperClasses);

    const images  = [];
    const dots = [];

    const divDotContainer = domUtility.createDomElement("div");
    domUtility.addClasses(divDotContainer, options.dotContainerClasses);

    for (let i = 0; i < options.images.length; i++)
    {
        const currentImage = new Image();
        currentImage.src = options.images[i].src;
        domUtility.addClasses(currentImage, options.imageClassesFade);

        const divDot = domUtility.createDomElement("div");
        domUtility.addClasses(divDot, options.dotClasses);
        domUtility.setElementAttributes(divDot, ["data-index"], [i]);

        divDot.addEventListener("click", (e) => {

            currentImageIndex = +e.target.getAttribute("data-index");
            changeImage(0);
        });

        //show first iamge by default
        if (i === currentImageIndex)
        {
            domUtility.addClasses(currentImage, options.imageClasses);
            domUtility.addClasses(divDot, options.dotSelectedClasses);
        }

        divDotContainer.appendChild(divDot)
        divWrapper.appendChild(currentImage);

        images.push(currentImage);
        dots.push(divDot)
    }

    const divCaption = domUtility.createDomElement("div");
    domUtility.setElementText(divCaption, options.images[currentImageIndex].cap);
    domUtility.addClasses(divCaption, options.captionClasses);
    divWrapper.appendChild(divCaption);

    const btnNext = domUtility.createDomElement("button");
    const btnPrev = domUtility.createDomElement("button");

    btnNext.addEventListener("click", (e) => {

        changeImage(1, options.imageClasses);
    });

    btnPrev.addEventListener("click", (e) => {

        changeImage(-1, options.imageClasses);
    })

    domUtility.setElementText(btnNext, "❯");
    domUtility.setElementText(btnPrev, "❮");

    domUtility.addClasses(btnNext, options.buttonClasses.next);
    domUtility.addClasses(btnPrev, options.buttonClasses.prev);

    divWrapper.append(btnNext, btnPrev, divDotContainer);

    //set it the first time because change image is called only by clicks
    timeOut = setTimeout(changeImage, 5000, 1);
    return divWrapper

    function changeImage(increment)
    {
        clearTimeout(timeOut);

        currentImageIndex += increment;
    
        if (currentImageIndex >= images.length) currentImageIndex = 0;
        if (currentImageIndex < 0) currentImageIndex = images.length - 1;
    
        images.forEach(image => {
    
            domUtility.removeClasses(image, options.imageClasses); //deactivate all images
        })
    
        domUtility.addClasses(images[currentImageIndex], options.imageClasses);
        updateCaption(options.images[currentImageIndex].cap);
        updateDots()

        timeOut = setTimeout(changeImage, 5000, 1);
    };

    function updateCaption(newCaption)
    {
        domUtility.setElementText(divCaption, newCaption);
    };

    function updateDots()
    {
        dots.forEach(dot => {

            domUtility.removeClasses(dot, options.dotSelectedClasses);
        });

        domUtility.addClasses(dots[currentImageIndex], options.dotSelectedClasses);
    }
}