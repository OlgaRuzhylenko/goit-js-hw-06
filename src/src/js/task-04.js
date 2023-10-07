// const counter = document.querySelector('.counter');
// console.dir(counter);

const value = document.querySelector('#value')
console.dir(value);
// value.textContent

let counterValue = 0;

const buttonDecrement = document.querySelector('button[data-action="decrement"]');
console.dir(buttonDecrement);
const buttonIncrement = document.querySelector('button[data-action="increment"]');
console.dir(buttonIncrement);

buttonDecrement.addEventListener('click', onBtnDecrClick);
function onBtnDecrClick (event) {
    // console.log("Button - was clicked");
    // console.log(event.currentTarget);
    counterValue -= 1;
    value.textContent = counterValue;
};

buttonIncrement.addEventListener('click', onBtnInkClick);
function onBtnInkClick (event) {
    // console.log("Button + was clicked");
    counterValue += 1;
    value.textContent = counterValue;
};


