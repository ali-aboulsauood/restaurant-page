import "./styles.css"

// TODO: Use a more dynamic way for bulk importing from directories

import generateHomeContent from "./tabs/home";
import generateMenuContent from "./tabs/menu";
import generateAboutContent from "./tabs/about";

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
    const tabAction = tabActions[tabId];
    
    allTabs.forEach(tab => {
        if (tab.classList.contains(CLASS_ACTIVE_TAB))
            tab.classList.remove(CLASS_ACTIVE_TAB);
        else if (tab.dataset.id === tabId)
            tab.classList.add(CLASS_ACTIVE_TAB);
    });

    tabAction();
};

tabContainer.addEventListener('click', switchTab);