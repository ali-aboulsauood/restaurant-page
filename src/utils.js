// This module contains the entities required by all other modules.

// The main page content element, whose content is changed on tab switching.
const contentElement = document.querySelector('#content');

// Creates an element of the specified type and attributes, appends it to the main page content element (by default), and returns the said element.
const createElement = (type, attributes = {}, appendToContentElement = true) => {
    // TODO: Add script for validation of argument types and types of keys and values in the attributes object.

    const element = document.createElement(type);

    for (const attribute in attributes)
        element.setAttribute(attribute, attributes[attribute]);

    if (appendToContentElement)
        contentElement.appendChild(element);

    return element;
};

// Clears the main page content element.
const clearContentElement = () => {
    // `Node.replaceChildren()` (with no arguments) is the most convenient method for emptying a DOM Node. It is a Baseline feature as of the time of writing this script.
    // Refer to https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren#emptying_a_node.
    contentElement.replaceChildren();
};


export { createElement, clearContentElement };
