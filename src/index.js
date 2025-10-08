import "./styles.css"

// TODO: Use a more dynamic way for bulk importing from directories

import contentElement from "./DOMCache";

import generateHomeContent from "./tabs/home";
import generateMenuContent from "./tabs/menu";
import generateAboutContent from "./tabs/about";

// Generate the content of the homepage on page load.
generateHomeContent();

// Sets necessary HTML attributes for all anchor elements.
const setAnchorElementAttributes = () => {
    const allAnchorElements = document.querySelectorAll('a');

    allAnchorElements.forEach(anchorElement => {
        anchorElement.setAttribute('rel', 'noopener noreferrer');
        anchorElement.setAttribute('target', '_blank');
    });
};

// Clears the main page content element.
const clearContentElement = () => {
    // `Node.replaceChildren()` (with no arguments) is the most convenient method for emptying a DOM Node. It is a Baseline feature as of the time of writing this script.
    // Refer to https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren#emptying_a_node.
    contentElement.replaceChildren();
};

const CLASS_TAB = 'tab';
const CLASS_ACTIVE_TAB = 'active-tab';

// The direct parent element of all tabs. Use of `Element.closest(`:not(.${CLASS_TAB})`)` ensures that the correct parent is always returned in case the markup changes (provided that all tabs are siblings).
const tabContainer = document.querySelector(`.${CLASS_TAB}`).closest(`:not(.${CLASS_TAB})`);

const allTabs = Array.from(document.querySelectorAll(`.${CLASS_TAB}`));

const tabActions = Object.freeze({
        "home": generateHomeContent,
        "menu": generateMenuContent,
        "about": generateAboutContent,
    }
);

const switchTab = (event) => {
    // TODO: Add script for validation of argument type.

    const tab = event.target;

    if (!allTabs.includes(tab) || tab.classList.contains(CLASS_ACTIVE_TAB))
        return;

    const tabId = tab.dataset.id;
    const fillContentElement = tabActions[tabId];
    
    allTabs.forEach(tab => {
        if (tab.classList.contains(CLASS_ACTIVE_TAB))
            tab.classList.remove(CLASS_ACTIVE_TAB);
        else if (tab.dataset.id === tabId)
            tab.classList.add(CLASS_ACTIVE_TAB);
    });

    clearContentElement();
    fillContentElement();
    setAnchorElementAttributes();
};

tabContainer.addEventListener('click', switchTab);

const logo = document.querySelector("#logo");

const clickEvent = new PointerEvent('click', {bubbles: true});

logo.addEventListener('click', () => allTabs[0].dispatchEvent(clickEvent));
