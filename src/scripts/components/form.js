const form = document.querySelector('.modal__form'),
      formInputs = document.querySelectorAll('.input'),
      inputName = document.querySelector('#input-name'),
      inputEmail = document.querySelector('#input-email'),
      inputMessage = document.querySelector('#textarea'),
      nameTitle = document.querySelector('#label-name'),
      emailTitle = document.querySelector('#label-email'),
      btnTitle = document.querySelector('#modal-btn');
let error = false;

function validateName(name) {
  const nameRule = /^[A-Za-z\ ]{2,80}$/;
  return nameRule.test(String(name))
}

function validateEmail(email) {
  const emailRule = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
  return emailRule.test(String(email).toLowerCase())
}

form.onsubmit = function () {
  const nameVal = inputName.value,
        emailVal = inputEmail.value,
        emptyInputs = Array.from(formInputs).filter(input => input.value === '');

  formInputs.forEach(function(input) {
    if (input.value === '') {
      input.classList.add('error')
      btnTitle.textContent = 'Fill in required fields'
      error = true
    } else {
      input.classList.remove('error')
      btnTitle.textContent = 'SUBMIT'
    }
  })

  if (emptyInputs.length !== 0) {
    return false
  }

  if (!validateName(nameVal)) {
    inputName.classList.add('error')
    nameTitle.textContent = 'Enter at least 2 letters'
    error = true
    return false
  } else {
    inputName.classList.remove('error')
    nameTitle.textContent = 'Full Name'
    error = false
  }

  if (!validateEmail(emailVal)) {
    inputEmail.classList.add('error')
    emailTitle.textContent = 'Enter Email in the form **@**.**'
    error = true
    return false
  } else {
    inputEmail.classList.remove('error')
    emailTitle.textContent = 'Email'
    error = false
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (error != true) {
    sendForm();
  }
});

function handleForm(event) {
  event.preventDefault(); }
form.addEventListener('submit', handleForm);

const modalWindow = document.querySelector('#modal'),
      formMessage = document.querySelector('.form-message'),
      primaryWindow = document.querySelector('body');

function sendForm() {
  const encodeName = encodeURIComponent(inputName.value),
        encodeEmail = encodeURIComponent(inputEmail.value),
        encodeMessage = encodeURIComponent(inputMessage.value)

  const formData =  'Имя=' + encodeName + "&Email=" + encodeEmail + '&Message' + encodeMessage;
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
  xhr.responseType = 'text';
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send(formData);
  xhr.onload = () => {
    if (xhr.status !== 200) {
      modalWindow.classList.remove('modal_visible');
      formMessage.classList.add('form-message-visible');
      setTimeout(MessagePopap, 5000)
      primaryWindow.classList.remove('body-noscroll');
      return;
    }
  }

  function MessagePopap () {
    formMessage.classList.remove('form-message-visible')
  }
}
