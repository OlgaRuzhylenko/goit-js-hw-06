
const userInput = document.querySelector('#font-size-control');
console.dir(userInput);
const userText = document.querySelector('#text');
console.dir(userText);

userInput.addEventListener('input', onTextChange);

function onTextChange () {
    const textSize = userInput.value;
    userText.style.fontSize = textSize + `px`;
};