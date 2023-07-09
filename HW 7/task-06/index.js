// task-06
const text = document.getElementById('text');

function showMessage(message) {
    const newMessage = document.createElement('p');
    newMessage.textContent = message;
    text.appendChild(newMessage);
}

showMessage(`Width: ${window.innerWidth}, Height: ${window.innerHeight}`);