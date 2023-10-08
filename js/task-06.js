
const textInput = document.querySelector('#validation-input');

textInput.addEventListener('focus', onInpurFocus);
textInput.addEventListener('blur', onInpurBlur)

function onInpurFocus() {
    console.log("input отримав фокус");
};


function onInpurBlur(event) {
    console.log("input отримав блюр");
    console.dir(event); 

    const inputValue = textInput.value;
    console.dir(inputValue);
 
    const textInputLength = inputValue.length;
    console.log(textInputLength);

    const dataLength = textInput.getAttribute('data-length')
    console.log(dataLength);
  
    if (textInputLength === parseInt(dataLength)) {

        textInput.classList.add('valid');
        textInput.classList.remove('invalid');
    } else {
        textInput.classList.add('invalid');
        textInput.classList.remove('valid');
            }
}