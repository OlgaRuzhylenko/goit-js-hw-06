function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const container = document.querySelector('#controls');
console.dir(container);

const userInput = container.querySelector('input');
console.dir(userInput);

const btnCreate = container.querySelector('[data-create]');
console.dir(btnCreate);

const btnDestroy = container.querySelector('[data-destroy]'); ;
console.dir(btnDestroy);

btnCreate.addEventListener("click", onClickAddDiv);

function onClickAddDiv (event) {
  const inputValue = userInput.value;
  console.dir(inputValue);

  for (let i = 0; i < inputValue; i++) {
    const newDiv = document.createElement('div');
    
    const someColor = getRandomHexColor();
    newDiv.style.backgroundColor  = someColor;
    newDiv.style.width = '30px';
    newDiv.style.height = '30px';

    document.body.appendChild(newDiv);
    
  }

};

btnDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes (event) {
  newDiv.remove();
}