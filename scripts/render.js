const inputsArray = Array.of(
  firstNameInput,
  lastNameInput,
  passwordInput,
  confirmPasswordInput,
  emailInput
);

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
  console.log('cleaned');
  pageContainer.remove();
}

function renderSignUpPage() {
  clearThePage();
  document.querySelector('.page').append(pageContainer);
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
    onNavigate('/signin');
  });

  moveToAuthPageLink.addEventListener('click', event => {
    event.preventDefault();
    onNavigate('/signin');
  });
}

function renderSignInPage() {
  clearThePage();
  console.log('rendered auth page');

  document.querySelector('.page').append(pageContainer);
  pageContainer.append(header, form, pageSuggestionContainer, moveToRestorePageLink);
  form.append(emailInputField, passwordInputField, submitButton);
  emailInputField.append(emailInputLabel, emailInput, errorSpan);
  passwordInputField.append(passwordInputLabel, passwordInput, passwordEyeIcon, errorSpan);
  submitButton.append(buttonArrowImg);
  moveToRestorePageLink.classList.add('page__link_thin');
  pageSuggestionContainer.append(pageSuggestion, moveToSignUpPageLink);

  form.addEventListener('submit', event => {
    event.preventDefault();
    authorize(event);
    // onNavigate('/signup');
  });

  moveToSignUpPageLink.addEventListener('click', event => {
    event.preventDefault();
    onNavigate('/signup');
  });

  moveToRestorePageLink.addEventListener('click', (event) => {
    event.preventDefault();
    onNavigate('/restore-password');
  })
}
