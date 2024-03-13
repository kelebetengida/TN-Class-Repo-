// Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name

const firstParagraph = document.querySelector('p');
console.log('First Paragraph:', firstParagraph.textContent);


// Get each of the the paragraph using document.querySelector('#id') and by their id

const secondParagraph = document.querySelector('#secondParagraph');
const thirdParagraph = document.querySelector('#thirdParagraph');
console.log('Second Paragraph:', secondParagraph.textContent);
console.log('Third Paragraph:', thirdParagraph.textContent);


// Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name

const allParagraphs = document.querySelectorAll('p');


// Loop through the nodeList and get the text content of each paragraph

allParagraphs.forEach((paragraph, index) => {
    console.log(`Paragraph ${index + 1}:`, paragraph.textContent);
});

// Set a text content to paragraph the fourth paragraph,Fourth Paragraph
const fourthParagraph = allParagraphs[3];
        fourthParagraph.textContent = 'Fourth Paragraph';

// Set id and class attribute for all the paragraphs using different attribute setting methods

allParagraphs.forEach((paragraph, index) => {
    paragraph.id = `paragraph${index + 1}`;
    paragraph.className = `paragraph-class`;
});

// Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)


// Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color


// Set text content, id and class to each paragraph