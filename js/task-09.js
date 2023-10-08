function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const container = document.querySelector('.widget');
console.dir(container);
const button = document.querySelector('.change-color');
console.dir(button);
const span = document.querySelector('.color');
console.dir(span);
const body = document.querySelector('body')

button.addEventListener('click', onClick);

function onClick (event) {

  const someColor = getRandomHexColor();

  body.style.backgroundColor = someColor;

  console.log(span.textContent = someColor); 
}
