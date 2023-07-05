// task-06
// Реалізувати логіку підрахунку ціни товару по його варіаціях(шаблон наведений тут, при кліку на колір змінювати ціну товару).
// Придумати ще 2 варіації, відяких буде залежати ціна товару.

const colors = document.querySelectorAll('.color');
const priceOutput = document.getElementById('outprice');

let totalPrice = 189.99;
colors.forEach(color => {
    color.addEventListener('click', () => {
        const price = parseFloat(color.getAttribute('data-price'));
        totalPrice = price;
        priceOutput.textContent = totalPrice.toFixed(2);
    });
});