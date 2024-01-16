const input = document.querySelector('#validation-input')
const dataLength = input.getAttribute('data-length')
console.log(dataLength);

input.addEventListener('blur', onInputBlur)
function onInputBlur(evt) {
    input.classList.remove('valid', 'invalid');
    
if (evt.target.value.length === parseInt(dataLength)) {
input.classList.add('valid')
} else {
    input.classList.add('invalid')
} 
}