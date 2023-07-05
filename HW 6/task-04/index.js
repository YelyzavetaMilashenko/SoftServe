// task-04
const btn = document.querySelector('.btn');
const outBlock = document.querySelector('.out');
const inputItems = document.querySelectorAll('.arr');

btn.addEventListener('click', showInfo);

function showInfo(event) {
    event.preventDefault();

    let outputText = '';
    inputItems.forEach(function (item) {
        const itemName = item.getAttribute('data-form');
        const itemValue = item.value;
        outputText += `${itemName}: ${itemValue}<br>`;
    });

    outBlock.innerHTML = outputText;
}


