import {onNavigate} from './routing';
const inputs = document.querySelectorAll('.form__input');
const eyeButtons = document.querySelectorAll('.form__input-eye-icon');
const authForm = document.querySelector('#authorize-form');

const inputsArray = Array.from(inputs);

const passwordInputs = inputsArray.filter(input => {
  let inputType = input.getAttribute('type');
  return inputType === 'password' && input;
});

inputsArray.forEach(input => {
  let type = input.getAttribute('type');
  switch (type) {
    case 'text':
      input.style.backgroundImage = `url('../../../images/input_user_icon.png')`;
      break;
    case 'email':
      input.style.backgroundImage = `url('../../../images/input_email_icon.png')`;
      break;
    case 'password':
      input.style.backgroundImage = `url('../../../images/input_lock_icon.png')`;
      break;
    default:
      break;
  }
});

eyeButtons.forEach(eyeButton => {
  eyeButton.addEventListener('click', toggleEyeClassList);
});

// переключает изображение глаза
function toggleEyeClassList(event) {
  // почему сюда не попадает eyeButton, если передавать в обработчике?
  const target = event.target;
  if (event && event.preventDefault) {
    event.preventDefault();
  }
  target.classList.toggle('form__input-eye-icon_opened');
  changePasswordVisibility(target);
}

// переключает видимость пароля
function changePasswordVisibility(eyeButton) {
  passwordInputs.forEach(input => {
    if (eyeButton.classList.contains('form__input-eye-icon_opened')) {
      input.setAttribute('type', 'text');
    } else {
      input.setAttribute('type', 'password');
    }
  });
  // если функция по поиску инпутов находится здесь,
  // то при повторном нажатии на кнопку мне возвращается пустой массив - почему?
}
authForm.addEventListener('submit', authorize);

function register(event) {
  const userData = {
    name: `${event.target.querySelector('#first-name').value}`,
    lastName: `${event.target.querySelector('#last-name').value}`,
    email: `${event.target.querySelector('#email').value}`,
    password: `${event.target.querySelector('#password').value}`,
  };
  return fetch(' http://localhost:3000/users', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then(response => console.log(response))
    .then(() => onNavigate('/signin'))
    .catch(error => console.log(error));
}

function authorize(event) {
  event.preventDefault();
  const userData = {
    email: `${event.target.querySelector('#auth-email').value}`,
    password: `${event.target.querySelector('#auth-password').value}`,
  };
  return fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then(res => res.json())
    .then(res => {
      console.log(res); // приходит токен
    })
    .catch(error => console.log(error));
}

function createElement(tag, className, text, attributesOptions) {
  const element = document.createElement(tag);
  if (className) {
    element.classList.add(className);
  }
  if (attributesOptions) {
    // Object.entries(obj) – возвращает массив пар [ключ, значение]
    for (const [key, value] of Object.entries(attributesOptions)) {
      element.setAttribute(key, value);
    }
  }
  if (text != '') {
    element.textContent = text;
  }
  return element;
}

function createH1(text) {
  const header = createElement('h1', 'page__header', {}, text);
  return header;
}

function createSubmitButton(text) {
  const submitButton = createElement('button', 'button form__button', text, {type: 'submit'});
  return submitButton;
}

function getElement(selector) {
  const element = document.querySelector(selector);
  return element;
}

function renderSignUpPage(params) {
  const pageContainer = createElement('div', 'page__items-container');
  const signUpForm = createElement('form', 'form');
  const header = createH1('Sign Up');
  const submitButton = createSubmitButton('Sign up');
  const inputField = createElement('div', 'form__input-field');
  const passwordInputLabel = createElement('label', 'form__label_sr-only', 'Password', {
    for: 'password',
  });

  // доделать разные лейблы и придумать, как сжать всю эту колбасу кода 
  const passwordInput = createElement('input', 'form__input', '', {
    type: 'password',
    name: 'password',
    placeholder: 'password',
    autocomplete: 'new-password',
    required: 'true',
  });
  const confirmPasswordInput = createElement('input', 'form__input', '', {
    type: 'password',
    name: 'confirm-password',
    placeholder: 'Confirm password',
    autocomplete: 'new-password',
    required: 'true',
  });
  const firstNameInput = createElement('input', 'form__input', '', {
    type: 'text',
    name: 'first-name',
    placeholder: 'First Name',
    autocomplete: 'username',
    required: 'true',
  });
  const lastNameInput = createElement('input', 'form__input', '', {
    type: 'text',
    name: 'last-name',
    placeholder: 'Last Name',
    autocomplete: 'username',
    required: 'true',
  });
  const emailInput = createElement('input', 'form__input', '', {
    type: 'email',
    name: 'email',
    placeholder: 'Email',
    autocomplete: 'username',
    required: 'true',
  });

  signUpForm.addEventListener('submit', event => {
    event.preventDefault();
    register(event);
  });
}
