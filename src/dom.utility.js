"use strict";

export default {
    addClasses,
    createDomElement,
    setElementAttributes,
    setElementText,
    removeClasses    
}

function addClasses(element, cssClasses = [])
{
    if (cssClasses.length === 0) return
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

function setElementAttributes(element, attributes = [], values = [])
{
    //each attribute is passed as a string followed by its value
    for (let i = 0; i < attributesAndValues.length ; i++)
    {
        element.setAttribute(attributes[i], values[i]);
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