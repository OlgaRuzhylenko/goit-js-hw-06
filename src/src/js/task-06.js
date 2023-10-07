//достукуємось до елемента
const textInput = document.querySelector('#validation-input');
// console.dir(textInput);

//додажмо слухача подій на фокус і блюр
textInput.addEventListener('focus', onInpurFocus);
textInput.addEventListener('blur', onInpurBlur)

//прописуємо функцію коли буде фокус
function onInpurFocus() {
    console.log("input отримав фокус");
};

// прописуємо функцію коли буде блюр
function onInpurBlur(event) {
    console.log("input отримав блюр");
    console.dir(event); 
    //шукаємо значення що ввів користувач
    const inputValue = textInput.value;
    console.dir(inputValue);
    //рахуємо довжину цього значення
    const textInputLength = inputValue.length;
    console.log(textInputLength);
    //дістаємо значення дата-атрибуту із html і бачимо що це рядок, а не число
    const dataLength = textInput.getAttribute('data-length')
    console.log(dataLength);
    // console.log(typeof(dataLength));

    //прописуємо умову перевірки. parseInt для того щоб перетворити на число
    if (textInputLength === parseInt(dataLength)) {
        //додажмо класи. Спочатку додаємо той який треба, потім видаляємо той який не треба
        textInput.classList.add('valid');
        textInput.classList.remove('invalid');
    } else {
        textInput.classList.add('invalid');
        textInput.classList.remove('valid');
            }
}