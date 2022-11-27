"use strict";

export default {
    addClasses,
    createDomElement,
    setElementAttributes,
    setElementText,
    removeClasses    
}

function addClasses(element, ...cssClasses)
{
    cssClasses.forEach(cssClass => {

        element.classList.add(cssClass);
    });
};

function createDomElement(elementTag = "div", elementInnerText = null)
{   
    const newElement =  document.createElement(elementTag);
    if (elementInnerText !== null) newElement.innerText = elementInnerText;

    return newElement;
};

function setElementAttributes(element, ...attributesAndValues)
{
    //each attribute is passed as a string followed by its value
    for (let i = 0; i < attributesAndValues.length ; i++)
    {
        element.setAttribute(attributesAndValues[i], attributesAndValues[++i]);
    }
};

function setElementText(element, value)
{
    element.innerText = value;
};


function removeClasses(element, ...cssClasses)
{
    cssClasses.forEach(cssClass => {

        element.classList.remove(cssClass);
    });
};