const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();

const {email: userEmail, password: userPassword} = event.currentTarget.elements;
if (!userEmail.value || !userPassword.value) {
   alert('Всі поля повинні бути заповнені');
} else {

}

const data = {
    email: userEmail.value,
    password: userPassword.value,
};
console.log(data);

formEl.reset();
}
