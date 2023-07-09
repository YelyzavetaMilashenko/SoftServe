// task-05
const btn = document.getElementById('btn');
const message = document.getElementById('message');

function showMessage(mess) {
    const newMessage = document.createElement('p');
    newMessage.textContent = mess;
    message.appendChild(newMessage);
}

btn.addEventListener('click', () => showMessage("I was pressed!"));
btn.addEventListener('mouseover', () => showMessage("Mouse on me!"));
btn.addEventListener('mouseout', () => showMessage("Mouse is not on me!"));

