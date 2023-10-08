
const userName = document.querySelector('#name-input');
console.dir(userName);
const outputName = document.querySelector('#name-output');
console.dir(outputName);

userName.addEventListener('input', onInputSubmit);

function onInputSubmit (event) {
console.dir(event.currentTarget.value);
if (event.currentTarget.value === '') {
    outputName.textContent = 'Anonymous'
}
else {outputName.textContent = event.currentTarget.value}
}