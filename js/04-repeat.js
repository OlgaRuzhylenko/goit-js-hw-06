let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]')
const incrementBtn = document.querySelector('button[data-action="increment"]')
const spanValue = document.querySelector('#value')
console.dir(spanValue);
const spanValueText = spanValue.textContent;
console.log(spanValueText);

decrementBtn.addEventListener('click', onDecrementBtnClick)
function onDecrementBtnClick(){
    counterValue -=1;
    console.log(counterValue);
    spanValue.textContent = counterValue
}
incrementBtn.addEventListener('click', onIncrementBtnClick)
function onIncrementBtnClick(){
    counterValue +=1
    console.log(counterValue);
    spanValue.textContent = counterValue
    }
