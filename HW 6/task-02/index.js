// task-02
const bigHeader = document.querySelector('h1');
bigHeader.style.background = 'green';

const listWithParagraphs= document.getElementById('myDiv');
const items = listWithParagraphs.querySelectorAll('p');
items[0].style.fontWeight = '700';
items[1].style.color = 'red';
items[2].style.textDecorationLine = 'underline';
items[3].style.fontStyle = 'italic';

const myList = document.getElementById('myList');
const listItems = myList.getElementsByTagName('li');

let combinedText = '';
for (let i = 0; i < listItems.length; i++) {
  combinedText += listItems[i].textContent.trim();
}

myList.innerText = combinedText;

const span = document.querySelector('span');
span.style.display = 'none';