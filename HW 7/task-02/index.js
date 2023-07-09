// task-02
const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', changeCSS);

function changeCSS() {
    text.classList.add('text');
}