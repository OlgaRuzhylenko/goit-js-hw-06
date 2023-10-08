
const value = document.querySelector('#value')
console.dir(value);

let counterValue = 0;

const buttonDecrement = document.querySelector('button[data-action="decrement"]');
console.dir(buttonDecrement);
const buttonIncrement = document.querySelector('button[data-action="increment"]');
console.dir(buttonIncrement);

buttonDecrement.addEventListener('click', onBtnDecrClick);
function onBtnDecrClick (event) {
    counterValue -= 1;
    value.textContent = counterValue;
};

buttonIncrement.addEventListener('click', onBtnInkClick);
function onBtnInkClick (event) {
    counterValue += 1;
    value.textContent = counterValue;
};


