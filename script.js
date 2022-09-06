const form = document.getElementById("form");
const pwd = document.getElementById("pwd");
const pwdConfirm = document.getElementById("pwd-confirm");
const errorMessage = document.querySelector('.one');
const title = document.querySelector('.title');

function validate(e) {
    e.preventDefault();
    if (pwd.value !== pwdConfirm.value) {
      pwd.classList.add('invalid');
      pwdConfirm.classList.add('invalid');
      errorMessage.setAttribute('style', 'opacity: 1;');
    } else {
      pwd.classList.remove('invalid');
      pwdConfirm.classList.remove('invalid');
      errorMessage.setAttribute('style', 'opacity: 0;');
    }
}

function update(e) {
    e.preventDefault();
    if (pwd.value === pwdConfirm.value) {
      pwd.classList.remove('invalid');
      pwdConfirm.classList.remove('invalid');
      errorMessage.setAttribute('style', 'opacity: 0;');
    }
}

form.addEventListener('submit', validate);
form.addEventListener('change', update);
