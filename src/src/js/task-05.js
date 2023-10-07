//достукуємось до елементів
const userName = document.querySelector('#name-input');
console.dir(userName);
const outputName = document.querySelector('#name-output');
console.dir(outputName);

//додаємо слухача на інпут
userName.addEventListener('input', onInputSubmit);

//прописуємо колбек. На event .currentTarget, а потім value, щоб зчитати що було введено
function onInputSubmit (event) {
console.dir(event.currentTarget.value);
//присвоємо те що введено властивості textContent нашого р2, який містить спан із Anonymous
outputName.textContent = event.currentTarget.value;
}