function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
//достукуємося до всіх елементів
const container = document.querySelector('.widget');
console.dir(container);
const button = document.querySelector('.change-color');
console.dir(button);
const span = document.querySelector('.color');
console.dir(span);

//додажмо до кнопки слухача подій
button.addEventListener('click', onClick);


function onClick (event) {
  //викликаємо функцію рандомного кольору і присвоюємо у змінну
  const someColor = getRandomHexColor();
  //додаємо цей колір на контейнер
  container.style.backgroundColor = someColor;
  // console.log('Випадковий колір:', someColor);
  //виводимо у спан цей випадковий колір
  console.log(span.textContent = someColor); 
}ж
