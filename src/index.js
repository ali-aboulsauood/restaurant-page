import "./styles.css"

// TODO: Use a more dynamic way for bulk importing from directories

import contentElement, { openInNewTabIconTemplate } from "./DOMCache";

import generateHomeContent from "./tabs/home";
import generateMenuContent from "./tabs/menu";
import generateAboutContent from "./tabs/about";

const setAnchorElements = () => {
    const allAnchorElements = document.querySelectorAll('a');

    allAnchorElements.forEach(anchorElement => {
        anchorElement.setAttribute('rel', 'noopener noreferrer');

        // Make links open in a new tab only if they point to an external resource.
        if (anchorElement.hostname !== window.location.hostname)
            anchorElement.setAttribute('target', '_blank');

        anchorElement.classList.add("colored");

        const doesLinkOpenInANewTab = anchorElement.getAttribute('target', "_blank");
        const doesLinkContainText = anchorElement.textContent !== "";
        const doesLinkNeedNewTabIcon = !anchorElement.classList.contains('no-new-tab-icon');

        if (doesLinkOpenInANewTab && doesLinkContainText && doesLinkNeedNewTabIcon) {
            anchorElement.textContent = anchorElement.textContent.trimEnd();
            anchorElement.appendChild(openInNewTabIconTemplate.content.cloneNode(true));

            // Prevent re-appending of the "opens in a new tab" SVG to links that open in a new tab.
            anchorElement.classList.add('no-new-tab-icon');
        }
    });
};

const clearContentElement = () => {
    // `Node.replaceChildren()` (with no arguments) is the most convenient method for emptying a DOM Node. It is a Baseline feature as of the time of writing this script.
    // Refer to https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren#emptying_a_node.
    contentElement.replaceChildren();
};

const displayCurrentYear = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    const currentYearElement = document.querySelector(".year");
    currentYearElement.textContent = currentYear;
}

const doOnSiteLoad = (() => {
    generateHomeContent();
    setAnchorElements();
    displayCurrentYear();
})();

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
    setAnchorElements();
};

tabContainer.addEventListener('click', switchTab);

const logo = document.querySelector("#logo");

const clickEvent = new PointerEvent('click', {bubbles: true});

logo.addEventListener('click', () => allTabs[0].dispatchEvent(clickEvent));
logo.setAttribute('title', allTabs[0].getAttribute('title'));
