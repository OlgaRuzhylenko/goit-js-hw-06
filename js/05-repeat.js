const input = document.querySelector('#name-input')
const spanName = document.querySelector('#name-output')

input.addEventListener('input', onInputText)
function onInputText(evt) {
    if (evt.target.value.length > 0) {
    spanName.textContent = evt.target.value;
    } else {
        spanName.textContent = 'Anonymous'
    }
}