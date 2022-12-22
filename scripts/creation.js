const form = createElement('form', 'form');
const errorSpan = createElement('span', 'error');
const header = createElement('h1', 'page__header', 'Sign Up');
const firstNameInputField = createElement('div', 'form__input-field', '', {id: 'first-name-input-field'});
const lastNameInputField = createElement('div', 'form__input-field', '', {id: 'last-name-input-field'});
const passwordInputField = createElement('div', 'form__input-field', '', {id: 'password-input-field'});
const confirmInputField = createElement('div', 'form__input-field', '', {id: 'confirm-input-field'});
const emailInputField = createElement('div', 'form__input-field', '', {id: 'email-input-field'});
const restoreInputField = createElement('div', 'form__input-field', '', {id: 'restore-input-field'});
const pageContainer = createElement('div', 'page__items-container');
const passwordEyeIcon = createElement('a', 'form__input-eye-icon', '', {href: '#', id: 'password-eye-icon'});
const confirmEyeIcon = createElement('a', 'form__input-eye-icon', '', {href: '#', id: 'confirm-eye-icon'});
const pageSuggestionContainer = createElement('div', 'page__suggestion-container');
const pageSuggestion = createElement('p', 'page__suggestion', 'Already have an account?');
const moveToAuthPageLink = createElement('a', 'page__link', 'Sign in', {href: '#'});
const passwordInputLabel = createElement('label', 'form__label_sr-only', 'Password', {
  for: 'password',
});
const confirmPasswordInputLabel = createElement('label', 'form__label_sr-only', 'Password', {
  for: 'confirm-password',
}); const firstNameInputLabel = createElement('label', 'form__label_sr-only', 'Password', {
  for: 'first-name',
});
const lastNameInputLabel = createElement('label', 'form__label_sr-only', 'Password', {
  for: 'last-name',
});
const emailInputLabel = createElement('label', 'form__label_sr-only', 'Password', {
  for: 'email',
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
const emailInput = createElement('input', 'form__input', '', {
  type: 'email',
  name: 'email',
  placeholder: 'Email',
  autocomplete: 'username',
  required: 'true',
});
const buttonArrowImg = createElement('img', 'button__arrow', '', {
  src: '../images/button_arrow.png',
  alt: 'return arrow',
});
const restorePasswordPageText = createElement(
  'p',
  'page__text',
  'Please use your email address, and we&#8217;ll send you the link to reset your password'
);
const submitButton = createElement('button', 'button', 'Sign up', {
  type: 'submit',
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

// const passwordInputs = inputsArray.filter(input => {
//   let inputType = input.getAttribute('type');
//   return inputType === 'password' && input;
// });


// eyeButtons.forEach(eyeButton => {
//   eyeButton.addEventListener('click', toggleEyeClassList);
// });

// переключает изображение глаза
// function toggleEyeClassList(event) {
//   // почему сюда не попадает eyeButton, если передавать в обработчике?
//   const target = event.target;
//   if (event && event.preventDefault) {
//     event.preventDefault();
//   }
//   target.classList.toggle('form__input-eye-icon_opened');
//   changePasswordVisibility(target);
// }

// переключает видимость пароля
// function changePasswordVisibility(eyeButton) {
//   passwordInputs.forEach(input => {
//     if (eyeButton.classList.contains('form__input-eye-icon_opened')) {
//       input.setAttribute('type', 'text');
//     } else {
//       input.setAttribute('type', 'password');
//     }
//   });
//   // если функция по поиску инпутов находится здесь,
//   // то при повторном нажатии на кнопку мне возвращается пустой массив - почему?
// }
