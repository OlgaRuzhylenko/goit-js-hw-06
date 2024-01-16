const registerForm = document.querySelector('.login-form')

registerForm.addEventListener('submit', onFormSubmit);
function onFormSubmit(evt) {
    evt.preventDefault(evt);
    
    const form = evt.target;
    const email = form.elements.email.value;
  const password = form.elements.password.value;

  if ((email.length == 0) || (password.length == 0)) {
    alert("Всі поля повинні бути заповнені")
  }
const obg = {
    userEmail : email,
    userPassword: password,
}
console.log(obg);
form.reset();
}