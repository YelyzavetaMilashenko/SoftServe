// task-01
const list = document.getElementById('list');
const items = document.getElementsByTagName('li');
const openModal = document.querySelector('.openModal');
const closeModal = document.querySelector('.closeModal');
const output = document.getElementById('output');
const modal = document.getElementById('modal');

openModal.addEventListener('click', openModalWindow);

function openModalWindow() {
    output.innerHTML = items[0].innerHTML + ', ' +
        items[items.length - 1].innerHTML + ', ' +
        items[1].innerHTML + ', ' +
        items[3].innerHTML + ', ' +
        items[2].innerHTML;

        modal.style.display = 'block';
}

closeModal.addEventListener('click', closeModalWindow)
function closeModalWindow() {
    modal.style.display = 'none';
}