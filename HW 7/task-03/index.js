// task-03
const body = document.querySelector('body');
const list = document.getElementById('list');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const link = document.getElementById('link');

btn1.addEventListener('click', () => body.style.background = 'blue');
btn2.addEventListener('dblclick', () => body.style.background = 'pink');
btn3.addEventListener('mousedown', () => body.style.background = 'brown');
btn3.addEventListener('mouseup', () => body.style.background = 'white');
link.addEventListener('mouseover', () => list.style.background = 'yellow');
link.addEventListener('mouseout', () => list.style.background = 'white');





