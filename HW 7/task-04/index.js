// task-04
const names = document.getElementById('names');
const btn = document.getElementById('btn');

btn.addEventListener('click', deleteCurrentValue)

function deleteCurrentValue() {
    const option = names.options[names.selectedIndex];
      names.removeChild(option);
}
