//достукуємося до об'єктів
const userInput = document.querySelector('#font-size-control');
console.dir(userInput);
const userText = document.querySelector('#text');
console.dir(userText);

//встановлюємо слухача подій на Input
userInput.addEventListener('input', onTextChange);

function onTextChange () {
    //шукаємо числове значення того, що ввів користувач 
    const textSize = userInput.value;
    // console.log(textSize);
    //задаємо розмір інтупа на текст
    userText.style.fontSize = textSize + `px`;
};