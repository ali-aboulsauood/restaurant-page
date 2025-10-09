import contentElement from "../DOMCache";
import { suggestNewDish } from "../DOMCache";

const appendSection = (title, content = "", appendTarget = contentElement) => {
    // TODO: Add script to validate argument.

    const section = document.createElement('div');
    section.classList.add("section");

    const sectionTitle = document.createElement('h2');
    sectionTitle.classList.add("section-title", "colored");
    sectionTitle.innerHTML = title;

    const sectionContent = document.createElement('div');
    sectionContent.classList.add("section-content");
    sectionContent.innerHTML = content;

    section.replaceChildren(sectionTitle, sectionContent);
    appendTarget.appendChild(section);

    return section;
}

const appendLineBreakElementTo = (section) => {
    // TODO: Add script to validate argument.

    section.appendChild(document.createElement('br'));
}

const generateContent = () => {
    appendSection('Our Story',
    `
    <p>
        <i>The Gilded Fork</i> wasn't born in a kitchen; it was conceived on a yacht in the Mediterranean.
    </p>

    <p>
        Our founder, the reclusive multi-billionaire Barnaby Wellington IV, was picking at a $5,000 tasting menu when he had a moment of crushing clarity: the food was getting in the way.
        The exquisite flavors were a distraction from the true purpose of fine dining—the bill.
    </p>

    <p>
        Why, he wondered, must we endure the chore of consumption to prove our wealth? Why can't the transaction be the experience?
    </p>

    <p>
        From this world-weary revelation, The Gilded Fork was forged. It is a sanctuary for those who understand that the greatest flavor is the taste of pure, unadulterated expense.
    </p>

    <p>
        Our journey hasn't been easy. We've faced countless obstacles, like suppliers who insisted on <q>fair pricing</q> and chefs who thought <q>flavor</q> was more important than <q>price per ounce.</q>
        
        <br>

        Through perseverance and an unwavering commitment to financial excess, we've overcome these pedestrian concerns.
    </p>
    `);

    appendSection('Our Philosophy', 
    `
    <p>
        We believe that the true purpose of dining is demonstrating how much you can spend.
        Every dish is meticulously crafted to ensure maximum cost with minimum calories—because true luxury is measured in dollars per bite, not satisfaction per meal.
    </p>

    <div>
        Our culinary team specializes in:

        <ul>
            <li>Sourcing ingredients flown in from locations whose names you can't pronounce</li>
            <li>Applying edible gold leaves and diamond dust with the precision of a Swiss watchmaker</li>
            <li>Plating techniques that maximize empty space</li>
            <li>Creating social media moments that make your followers envy (or curse) you - you will attract attention either way.</li>
        </ul>
    </div>
    `
    );

    const reserveTableSection = document.createElement('div');

    appendSection('Reserve Your Table', 
    `
        <p>
            Reservations required. Six-month waiting list.

            <br>

            We accept only the finest credit cards with the highest limits.
        </p>
        <dl>
            <dt class="colored">Phone</dt>
            <dd>
                +1 (555) EXPENSE
            </dd>
            <dt class="colored">Email</dt>
            <dd>
                <a href="mailto: reservations@thegildedfork.luxury" title="click here to contact us">
                    reservations@thegildedfork.luxury
                </a>
            </dd>
            <dt class="colored">Location</dt>
            <dd>
                <i>Where exclusivity meets excess</i>
            </dd>
        </dl>
    `, reserveTableSection
    );

    reserveTableSection.classList.add("reservation-section");

    contentElement.appendChild(reserveTableSection);
};

export default generateContent;