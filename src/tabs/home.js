import contentElement from "../DOMCache";

import pathToMainImage from "../assets/images/home.png";

const generateContent = () => {
    // (1) Main Image container

    const mainImageContainer = document.createElement('div');
    mainImageContainer.setAttribute('id', "main-image-container");

    contentElement.appendChild(mainImageContainer);

    const mainImageContainer_Anchor = document.createElement('a');
    mainImageContainer_Anchor.setAttribute('href', "https://unsplash.com/photos/round-plate-fork-and-knife-Mpjv-bEfPLM");
    mainImageContainer_Anchor.setAttribute('title', "Round plate, fork, and knife by Shuenz Hsu on Unsplash (AI Edited — Click to view the original image).");
    
    mainImageContainer.appendChild(mainImageContainer_Anchor);
    mainImageContainer.setAttribute('aria-hidden', 'true');

    const mainImageContainer_Anchor_Image = document.createElement('img');
    mainImageContainer_Anchor_Image.setAttribute('src', pathToMainImage);
    mainImageContainer_Anchor_Image.setAttribute('alt', "round plate, fork, and knife.");
    mainImageContainer_Anchor_Image.setAttribute('width', "35%");

    mainImageContainer_Anchor.appendChild(mainImageContainer_Anchor_Image);

    // (2) Headline and Text

    const headlineAndText = document.createElement('div');
    headlineAndText.setAttribute('id', "headline-and-text");

    contentElement.appendChild(headlineAndText);

    // (2) Headline

    const headline = document.createElement('h2');
    headline.setAttribute('id', "headline");
    headline.innerHTML = `We've stripped the culinary experience down to its most essential element<wbr>—the <span class="colored">price tag</span>.`;

    headlineAndText.appendChild(headline);

    // (3) Text

    // TODO: Clean the following code!

    // This element cannot be a paragraph, as block-level elements cannot be nested within one another.
    const text = document.createElement('div');
    text.setAttribute('id', "text");

    headlineAndText.appendChild(text);

    const text_Statement1 = document.createElement('p');
    text_Statement1.innerHTML = `At The Gilded Fork, we're not just serving dinner, we're serving a statement—a statement that says, '<i>I have so much money, I can pay for an experience that is 99% plate and 1% sustenance.</i>'`;

    const text_Statement2 = document.createElement('p');
    text_Statement2.innerHTML = `Our chefs have scoured the globe for the most needlessly expensive ingredients, ensuring that every bite is a reminder of your superior social and financial standing.`;

    const text_Statement3 = document.createElement('div');

    const text_Statement3_Paragraph1 = document.createElement('p');
    text_Statement3_Paragraph1.innerHTML = `For some meals, there is so much gold... so many diamonds... that what you are seeing is no more a meal to be enjoyed, but rather an ostentatious work of art to be photographed.`;

    const text_Statement3_Paragraph2 = document.createElement('p');
    text_Statement3_Paragraph2.innerHTML = `For some other meals, portions are inversely proportional to the price—the smaller your meal is, the greater the attention you gain.`;

    const text_Punchline = document.createElement('p');
    text_Punchline.innerHTML = `<b>Don't come here to eat—come here to be seen spending.</b>`;

    const text_ChildNodes = [text_Statement1, text_Statement2, text_Statement3];
    text_ChildNodes.forEach(text_ChildNode => text_ChildNode.classList.add('statement'));
    text.replaceChildren(...text_ChildNodes);

    const text_Statement3_ChildNodes = [text_Statement3_Paragraph1, text_Statement3_Paragraph2];
    text_Statement3.replaceChildren(...text_Statement3_ChildNodes);

    text_Punchline.setAttribute('id', "punchline");
    text.appendChild(text_Punchline);
};

export default generateContent;
