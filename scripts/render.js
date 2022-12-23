const inputsArray = Array.of(
  firstNameInput,
  lastNameInput,
  passwordInput,
  confirmPasswordInput,
  emailInput
);

const rootElement = document.querySelector('#root');

function setInputPic() {
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
}

function clearThePage() {
  state = {page: ''};
  rootElement.innerHTML = '';
  console.log('cleaned');
}

function renderSignUpPage() {
  // state.page = 'signup'
  document.querySelector('.page').prepend(pageContainer);
  pageContainer.append(header, form, pageSuggestionContainer);
  form.append(
    firstNameInputField,
    lastNameInputField,
    emailInputField,
    passwordInputField,
    confirmInputField,
    submitButton,
    pageSuggestionContainer
  );
  firstNameInputField.append(firstNameInputLabel, firstNameInput, errorSpan);
  lastNameInputField.append(lastNameInputLabel, lastNameInput, errorSpan);
  emailInputField.append(emailInputLabel, emailInput, errorSpan);
  passwordInputField.append(passwordInputLabel, passwordInput, passwordEyeIcon, errorSpan);
  confirmInputField.append(
    confirmPasswordInputLabel,
    confirmPasswordInput,
    confirmEyeIcon,
    errorSpan
  );
  submitButton.classList.add('form__button');
  submitButton.append(buttonArrowImg);
  pageSuggestionContainer.append(pageSuggestion, moveToAuthPageLink);

  form.addEventListener('submit', event => {
    event.preventDefault();
    register(event);
    clearThePage();
    state.page = 'signin';
    onNavigate('/signin');
  });

  moveToAuthPageLink.addEventListener('click', event => {
    event.preventDefault();
    clearThePage();
    state.page = 'signin';
    onNavigate('/signin');
  });
}

function renderSignInPage() {
  // console.log('rendered auth page');
  // document.querySelector('.page').append(pageContainer);
  // pageContainer.append(header, form, pageSuggestionContainer, moveToRestorePageLink);
  // form.append(emailInputField, passwordInputField, submitButton);
  // emailInputField.append(emailInputLabel, emailInput, errorSpan);
  // passwordInputField.append(passwordInputLabel, passwordInput, passwordEyeIcon, errorSpan);
  // submitButton.append(buttonArrowImg);
  // moveToRestorePageLink.classList.add('page__link_thin');
  // pageSuggestionContainer.append(pageSuggestion, moveToSignUpPageLink);

  rootElement.insertAdjacentHTML('afterbegin', authorizePageTemplate);
  const form = document.querySelector('.form');
  const moveToSignUpPageLink = document.querySelector('#change-form-link');
  const moveToRestorePageLink = document.querySelector('#restore-page-link');

  form.addEventListener('submit', event => {
    event.preventDefault();
    authorize(event);
    clearThePage();
    state.page = 'main';
    // onNavigate('/signup');
  });

  moveToSignUpPageLink.addEventListener('click', event => {
    event.preventDefault();
    clearThePage();
    state.page = 'signup';
    onNavigate('/signup');
  });

  moveToRestorePageLink.addEventListener('click', event => {
    event.preventDefault();
    clearThePage();
    state.page = 'restore';
    onNavigate('/restore-password');
  });
}

function renderRestorePage() {
  rootElement.insertAdjacentHTML('afterbegin', restorePageTemplate);
  const form = document.querySelector('.form');
  const returnButton = document.querySelector('.page__return-arrow');
  const pageText = document.querySelector('.page__text');
  const restoreMessage = document.querySelector('#restore-message');

  form.addEventListener('submit', event => {
    event.preventDefault();
    restore(event);
    form.remove();
    pageText.remove();
    restoreMessage.insertAdjacentText('afterbegin', 'An email has been sent to you. Check your inbox, and click the reset link provided.')
  });

  returnButton.addEventListener('click', event => {
    event.preventDefault();
    clearThePage();
    state.page = 'signin';
    onNavigate('/signin');
  });
}
