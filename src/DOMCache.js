// This module contains all DOM Node references that are needed by multiple modules

// The main page content element, whose content is changed on tab switching.
const contentElement = document.querySelector('#content');

const suggestNewDish = document.createElement('p');
suggestNewDish.classList.add('suggest-dish-notification');

suggestNewDish.innerHTML = 
`
<b>
    Have a dish that is absurd enough to be placed on our menu? 
    <a href="https://forms.gle/RDZqqixvSzM26fe2A" title="Click here to visit the dish suggestion form.">fill out this form</a>
    or, if you are a developer,
    <a href="https://www.github.com/ali-aboulsauood/restaurant-page" title="Click here to visit the site's GitHub repository.">contribute to our GitHub repository</a>.
</b>
`

export default contentElement;

export {suggestNewDish};