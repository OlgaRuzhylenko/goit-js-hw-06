const formEl = document.querySelector('.login-form');
// console.dir(formEl);
formEl.addEventListener('submit', onSubmit);


function onSubmit(event) {
    event.preventDefault();
//робимо деструктуризацію
const {email: userEmail, password: userPassword} = event.currentTarget.elements;
if (!userEmail.value || !userPassword.value) {
   alert('Всі поля повинні бути заповнені');
} else {
// console.dir(userEmail);
// console.dir(userPassword);
// console.dir(userEmail.value);
// console.dir(userPassword.value);

}
//передаємо дані у бекенд у формі об'єкта
const data = {
    email: userEmail.value,
    password: userPassword.value,
};
console.log(data);
//очищуємо форму
formEl.reset();
}
