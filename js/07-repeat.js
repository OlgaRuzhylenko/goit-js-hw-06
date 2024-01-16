const input = document.querySelector('#font-size-control')
const span = document.querySelector('#text');

input.addEventListener('input', onInputChange)
function onInputChange(evt){
    span.style.fontSize = evt.target.value + 'px';
}