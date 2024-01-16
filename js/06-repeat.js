const input = document.querySelector('#validation-input')
console.dir(input);

input.addEventListener('blur', onInputBlur)
function onInputBlur(evt) {
if (evt.target.value.length >= 6) {
input.classList.add('valid')
} else {
    input.classList.add('invalid')
} 
}