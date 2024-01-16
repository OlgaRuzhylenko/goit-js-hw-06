function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

const btn = document.querySelector('button');
const span = document.querySelector('.color');
const body = document.querySelector('body')
console.log(body);

btn.addEventListener('click', onBtnClick);

function onBtnClick(evt) {
    const result = getRandomHexColor();
    body.style.backgroundColor = result;
    span.textContent = result
}

