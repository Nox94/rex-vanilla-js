export const pageContainer = createElement('div', 'page__items-container');
export const form = createElement('form', 'form');
export const header = createElement('h1', 'page__header', 'Sign Up');
export const submitButton = createElement('button', 'button form__button', 'Sign up', {type: 'submit'});
export const inputField = createElement('div', 'form__input-field');
export const passwordInputLabel = createElement('label', 'form__label_sr-only', 'Password', {
  for: 'password',
});
export const confirmPasswordInputLabel = createElement('label', 'form__label_sr-only', 'Password', {
  for: 'confirm-password',
});
export const firstNameInputLabel = createElement('label', 'form__label_sr-only', 'Password', {
  for: 'first-name',
});
export const lastNameInputLabel = createElement('label', 'form__label_sr-only', 'Password', {
  for: 'last-name',
});
export const emailInputLabel = createElement('label', 'form__label_sr-only', 'Password', {
  for: 'email',
});
export const firstNameInput = createElement('input', 'form__input', '', {
  type: 'text',
  name: 'first-name',
  placeholder: 'First Name',
  autocomplete: 'username',
  required: 'true',
});
export const lastNameInput = createElement('input', 'form__input', '', {
  type: 'text',
  name: 'last-name',
  placeholder: 'Last Name',
  autocomplete: 'username',
  required: 'true',
});
export const passwordInput = createElement('input', 'form__input', '', {
  type: 'password',
  name: 'password',
  placeholder: 'password',
  autocomplete: 'new-password',
  required: 'true',
});
export const confirmPasswordInput = createElement('input', 'form__input', '', {
  type: 'password',
  name: 'confirm-password',
  placeholder: 'Confirm password',
  autocomplete: 'new-password',
  required: 'true',
});
export const emailInput = createElement('input', 'form__input', '', {
  type: 'email',
  name: 'email',
  placeholder: 'Email',
  autocomplete: 'username',
  required: 'true',
});

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

function getElement(selector) {
  const element = document.querySelector(selector);
  return element;
}

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


