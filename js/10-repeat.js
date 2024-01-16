function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
let number = 0;
let boxSize = 30;
const boxSizeIncrement = 10

const newBox = document.querySelector('#boxes');
console.log(newBox);
const container = document.querySelector('#controls')
const input = document.querySelector('input')
const createBtn = document.querySelector('button[data-create]')
const destroyBtn = document.querySelector('button[data-destroy]')

input.addEventListener('input', onInputChange)
function onInputChange(evt) {
    number = evt.target.value;
}

function createBoxes(amount){
    for (let i = 0; i < amount; i++) {
        const newDiv = document.createElement('div');
        const result = getRandomHexColor();
        newDiv.style.backgroundColor = result;
        newDiv.style.height = `${boxSize}px`
        newDiv.style.width = `${boxSize}px`
        newBox.append(newDiv);

        boxSize += boxSizeIncrement;
    }
  }

createBtn.addEventListener('click', onCreateBtnClick);
function onCreateBtnClick(evt){
    createBoxes(number);
}
destroyBtn.addEventListener('click', onDestroyBtnClick);
function onDestroyBtnClick(){
    Array.from(newBox.children).forEach(child => child.remove());
    input.value = ''
}
