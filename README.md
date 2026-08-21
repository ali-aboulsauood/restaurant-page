# Restaurant Page

![Screenshot of The Gilded Fork's homepage, featuring from top downwards: the restaurant logo, three tabs — Home, Menu, and About, and the content of the currently active tab, which is the Home tab, featuring an image of a golden plate, fork, and knife, followed by a heading and a series of paragraphs introducing the restaurant](screenshot.png "Screenshot of my restaurant homepage")

A restaurant homepage, acting as a single-page website with tabbed browsing, where the main content of each tab is dynamically rendered using JavaScript.

This project was created as part of my journey in the [Full Stack JavaScript](https://theodinproject.com/paths/full-stack-javascript) of [The Odin Project (TOP)](https://theodinproject.com) a practice on [DOM Manipulation](https://theodinproject.com/lessons/foundations-dom-manipulation-and-events), [ES6 Modules](https://theodinproject.com/lessons/javascript-es6-modules), [npm](https://theodinproject.com/lessons/node-path-javascript-npm), and [webpack](https://theodinproject.com/lessons/javascript-webpack).

> [!NOTE]
> Despite being primarily a practice project, contributions are still welcome! You can try resolving any [issues](https://github.com/alikamel-dev/restaurant-page/issues), or, if you think you have found one, feel free to [create an issue](https://github.com/alikamel-dev/restaurant-page/issues) or solve it and [create a pull request](https://github.com/alikamel-dev/restaurant-page/issues).

## Viewing the page

You can view the page on its [GitHub Pages website](https://alikamel-dev.github.io/restaurant-page).

>[!IMPORTANT]
> About supported devices and browsers:
>
> - The page is designed to be viewed in a 1920 × 1080 screen/window resolution. The website is not completely responsive, and is likely to produce worse visual results on smaller screen sizes, especially mobile phone screens, though this issue can be mitigated by loading the desktop version of the website.
>
> - The page is primarily developed for [Google Chrome](https://google.com/chrome). It should function properly in fairly new versions of major web browsers, though minor visual differences may arise.

> [!TIP]
> If you encounter an issue with the game, feel free to [create an issue](https://github.com/alikamel-dev/restaurant-page/issues/new) or even solve it yourself and [create a pull request](https://github.com/alikamel-dev/restaurant-page/compare).

If you like my project, please support me by starring [its repository on GitHub](https://github.com/alikamel-dev/restaurant-page) and, if you are a fellow learner of The Odin Project, liking it on the project's [community solutions page](https://theodinproject.com/lessons/node-path-javascript-restaurant-page/project_submissions).

## About the project

### Theme

_The Gilded Fork_ is a luxury restaurant offering food meant to be seen rather than tasted, and to feed your hunger for attention rather than your hunger for food, for absurdly high prices, of course.

#### Crafting the theme

When I started working on the restaurant homepage, I wanted to avoid making it a generic page for a generic restaurant, and the first idea that came to my mind was a sarcastic take on luxury restaurants that charge enormous amounts of money for tiny amounts of food.

> [!NOTE]
> To avoid delaying the development process, Artificial intelligence (AI) was used generate the content and images used in the website, with some content editing on my part.

In that vein, I spent some time choosing a name for the restaurant from a list of AI-generated names, until I settled on _The Gilded Fork_. Funnily enough, it was not until after I finished the project that I discovered that there is [an online magazine with the same name](https://gildedfork.com).

> [!NOTE]
> _The Gilded Fork_ name, branding, and concept used in this repository are entirely fictional and created for portfolio demonstration. This project is not affiliated with, endorsed by, or associated with the real-life online magazine sharing the same name. Any names in the website are fictional and similarity to names of real-life persons or entities is purely coincidental.

> [!TIP]
> Have an idea for dish that is absurd enough to be placed on our menu? [fill out this form](https://forms.gle/RDZqqixvSzM26fe2A) or [create a pull request](https://github.com/alikamel-dev/restaurant-page/compare)!

### Structure

The restaurant site is a single-page website with support for tabbed browsing, meaning that each different section is represented by a tab, where the content of the tab is rendered in the main content area of the page, replacing the content of the previously active tab, using JavaScript.

The website consists of three tabs: _Home_, _Menu_, and _About_.

1. _Home_: contains introduction to the restaurant, in the form of an image, a heading and some body text, showing what the restaurant is all about.

2. _Menu_: contains a list of the dishes offered by the restaurant. Each menu item consists of the name of the dish, name of the chef (essentially the name used by the real-life person who contributed the idea of the dish, or a placeholder name if they did not provide one), a description of the dish, and finally its price. The items in the menu are sorted by price: The lower you scroll, the higher the prices and the more absurd the dishes get.

3. _About_: Expands further on the content of the _Home_ section, explaining the story behind the restaurant's creation and success and the restaurnat's philosophy, and contains the address and contact information of the restaurant at the end.

#### Project structure

As a Webpack project, _Restaurant Page_ has source and distribution directories.

The following illustrates the structure of the source directory, including only the files containing the source code of the project (i.e. excluding `.gitignore`, npm files, Webpack files, README, LICENSE, etc.). Names of directories end in a forward slash (`/`).

```text
src/
├── assets/
│   ├── fonts/       (Contains a directory for each font, each directory containing the WOFF and WOFF2 files of the said font.)
│   └── images/
│       ├── menu/    (Images used for menu items)
│       └── home.png (Image used for home tab)
├── template.html
├── styles.css
├── index.js         (Entry point module: Contains tab switching and other for page-wide dynamic content manipulation functionality)
├── tabs/            (Contains one JavaScript module for generating the content of each page tab)
└── DOMCache.js      (Contains constants for DOM element nodes used by multiple modules)
```

##### Entry point module

The entry point module ([`index.js`](https://github.com/alikamel-dev/restaurant-page/blob/main/src/index.js)) contains the following functions:

1. Tab switching (main function): Replacement of the content of the currently active tab with the content of the newly active tab on activating the latter.
2. Making links to external resources open in a new tab, provide them with appropriate attributes (`target="__blank" rel="noopener noreferrer`) and append am icon indicating they open in a new tab to them.
3. Make header logo activate the _Home_ tab instead of reloading the page.
4. Dynamically generate a year number in the page footer matching the current year.

### Design

#### Fonts

The following are the fonts used in this page. Each font name links to the respective download source.

| Font                                                                   | Element type                           |
|------------------------------------------------------------------------|----------------------------------------|
| [Italianno](https://fonts.google.com/specimen/Italianno)               | _The Gilded Fork_ logo, Page tabs      |
| [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) | Headings except _The Gilded Fork_ logo |
| [Cormorant](https://fonts.google.com/specimen/Cormorant)               | Other text                             |

#### Colors

The following are the colors used in this page. Each color hexadecimal value links to the respective [ColorHexa](https://colorhexa.com) page.

The term _highlighted text_ refers to text that uses a different color from that of the surrounding text to make it stand out. Highlighted text has the class `colored` in the markup.

Color previews are generated using [Readme Color Swatches](https://github.com/luciancooper/readme-swatches).

| Role             | Color                                                                                                                                                                                                                                                                                                                                                                                                                                          | Elements                                                                |
|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| Main color       | <img valign='middle' alt='D4AF37' src='https://readme-swatches.vercel.app/D4AF37?size=25'/> [`#D4AF37`](https://colorhexa.com/D4AF37)                                                                                                                                                                                                                                                                                                          | Logo, tabs, highlighted text (including links), borders and decorations |
| Background color | <img valign='middle' alt='blue' src='https://readme-swatches.vercel.app/0080FF?size=25'/> [`#0080FF`](https://colorhexa.com/0080FF) used in a linear gradient with <img valign='middle' alt='blue' src='https://readme-swatches.vercel.app/1A1A1A?size=25'/> [`#1A1A1A`](https://colorhexa.com/1A1A1A) and <img valign='middle' alt='blue' src='https://readme-swatches.vercel.app/3D2418?size=25'/> [`#3D2418`](https://colorhexa.com/3D2418) | Page background                                                         |
| Text color       | <img valign='middle' alt='blue' src='https://readme-swatches.vercel.app/E0D4B8?size=25'/> [`E0D4B8`](https://colorhexa.com/E0D4B8)                                                                                                                                                                                                                                                                                                             | Other text                                                              |

##### Selection colors

A 50% opacity variation of the main color and the text color are used as the background colors for selected non-highlighted text and selected highlighted text.

> [!NOTE]
> Text shadows use the same color as that of the text they are applied to.

#### Images

- Image used in the _Home_ tab is an edited version of [_round plate, fork, and knife_](https://unsplash.com/photos/round-plate-fork-and-knife-Mpjv-bEfPLM) by [Shuenz Hsu on Unsplash](https://unsplash.com/@shuenz_hsu). Edits were made by [Gemini 3 Pro Image (Nano Banana Pro)](https://ai.google.dev/gemini-api/docs/models/gemini-3-pro-image).

- Images used in the _Menu_ tab are generated using Gemini 3 Pro Image (Nano Banana Pro).

## Other Projects

Feel free to view all my projects on [my website](https://alikamel-dev.github.io/homepage).
