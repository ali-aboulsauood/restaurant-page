import contentElement from "../DOMCache";

// While the restaurant menu items are sorted by price, an ordered list (`ol`) is not the semantically correct element to represent it.
// This is because the order of menu items is a display choice with no actual meaning - menu items are equivalent and the meaning of the menu will not be changed if it were reordered.
const menuList = document.createElement('ul');
menuList.setAttribute('id', "menu");

// NOTE: The most semantically correct element for representing the restaurant menu is a description list (`dl`), but the acceptable alternative (`ul`) is used to facilitate styling.

class menuItem {
    // Used to format number representing price (`itemPriceInUSD`) as an amount of US Dollars, with the dollar sign ('$') preceding the number, a comma (',') as a number separator, and a period ('.') as a radix point.
    // Refer to: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat.
    #priceInUSDFormat = new Intl.NumberFormat(document.documentElement.getAttribute('lang'), { style: "currency", currency: "USD" });

    // NOTE: `Number.prototype.toLocaleString` is not used for performance considerations. Refer to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString.

    constructor(itemName, itemDescription, itemPriceInUSD, itemImage = null) {
        // TODO: Add script to validate arguments.

        const fields = { itemName, itemDescription, itemPriceInUSD, itemImage };
        Object.assign(this, fields);
    };

    formatPrice() {
        return this.#priceInUSDFormat.format(this.itemPriceInUSD);
    }

    render() {
        const menuListItem = document.createElement('li');
        menuListItem.classList.add("menu-item");

        const itemTextContainer = document.createElement('div');
        itemTextContainer.classList.add("item-text");

        const itemImageContainer = document.createElement('div');
        itemImageContainer.classList.add("item-image", "colored");

        // (1) Child nodes of `itemTextContainer`
        // --------------------------------------

        // (1 - 1) Item Name

        // The `h2` element of the home tab is removed on switching from it, so item names are represented using `h2` not `h3`, to maintain a proper hierarchy in the menu tab.
        // There is no evidence to support this behavior - I chose it based on the fact that heading levels should be used in sequence without skipping any level.

        const itemName_ = document.createElement('h2');
        itemName_.classList.add("item-name", "colored");
        itemName_.innerHTML = this.itemName;

        // (1 - 3) Item Description

        const itemDescription = document.createElement('div');
        itemDescription.classList.add("item-description");
        itemDescription.innerHTML = this.itemDescription;

        // (1 - 4) Item Price

        const itemPrice = document.createElement('p');
        itemPrice.classList.add("item-price", "colored");
        itemPrice.textContent = this.formatPrice();

        const itemDetails = [ itemName_, itemDescription, itemPrice ];
        itemTextContainer.replaceChildren(...itemDetails);

        // (2) Item Image

        if (this.itemImage) {
            const itemImage_ = document.createElement("img");
            itemImage_.setAttribute('src', this.itemImage);
            itemImage_.setAttribute('alt', this.itemName);

            const imgWidth = "25%";
            itemImage_.setAttribute('width', imgWidth);
            itemImage_.setAttribute('height', imgWidth);

            itemImageContainer.appendChild(itemImage_);
        } else {
            itemImageContainer.textContent = 'Photo unavailable';
            itemImageContainer.title = 'Photo currently unavailable';
        }

        const parentContainer = document.createElement('div');
        parentContainer.classList.add('menu-item-parent');

        parentContainer.replaceChildren(itemTextContainer, itemImageContainer);
        menuListItem.appendChild(parentContainer);

        menuList.appendChild(menuListItem);
    }
};

let menuItems = [
    new menuItem(
        "The Philosopher's Breath",
        `
        <p>A small amount of truffle essence suspended in a vacuum-sealed sphere.</p>

        <p>
            Like the alchemists of old who sought the Philosopher's Stone to turn copper into gold, our chefs have perfected a new alchemy: turning your money into an inedible but most expensive meal.
        </p>

        <p>The dish comes with a 40-page manifesto explaining why you're too unsophisticated to taste or even smell it anyway.</p>
        `,
        8500
    ),

    new menuItem(
        "Steak of Enlightenment",
        `
        <p>
            A single 5-millimeter cube of <i>wagyu</i> beef, seared for exactly 4.7 seconds per side, presented alone on a three-foot canvas of white porcelain.
        </p>

        <p>The negative space represents your journey toward enlightenment through deprivation.</p>
        `,
        12000
    ),

    new menuItem(
        "Conceptual Caviar",
        `
        <p>The <em>idea</em> of caviar, presented as an empty plate with ambient ocean sounds.</p>
        <p>Our sommelier will describe what the caviar would have tasted like—had it existed.</p>
        `,
        15000
    ),

    new menuItem(
        "Diamond-Dusted Schadenfreude",
        `
        <p>A small portion of foam made from the tears of Michelin-starred chefs who lost their third star, garnished with actual diamond dust.</p>
        <p>Scientifically proven to provide zero nutritional value.</p>
        `,
        17000
    ),

    new menuItem(
        "Transcendence",
        `
        <p>The ultimate dish of <i>The Gilded Fork</i>—an empty plate forged from meteorite platinum, presented in a climate-controlled glass chamber filled with rare alpine air.</p>
        
        <p>The absence of food represents the ultimate luxury—transcending the need to eat.</p>

        <p>
            Includes a leather-bound certificate of participation, a personal philosophy consultant to explain what you just experienced, and complimentary therapy sessions to process why you paid for literally nothing.
        </p>

        <p>Your name will be engraved on our <i>Wall of Enlightenment</i>.</p>
        `,
        125000
    ),
];

// Sorts menu items by price in case they are not sorted as such in the source code.
const sortMenuItems = () => {
    menuItems.sort((item1, item2) => item1.itemPriceInUSD - item2.itemPriceInUSD);
};

const generateContent = () => {
    contentElement.appendChild(menuList);

    // `Node.hasChildNodes` returns `true` if the `Node` object it is called on contains any child nodes, including non-element nodes.

    // The element representing the menu is only empty (and thus needs filling) on the first time the menu tab is switched to after page load, but on subsequent switches it is already filled.
    // Removal of the condition will cause the menu to be repeated on each switch to the menu tab. 
    if (!menuList.hasChildNodes()) {
        sortMenuItems();

        menuItems.forEach(menuItem => menuItem.render());
    }
};

export default generateContent;
