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
  document.querySelector('.page').removeChild(pageContainer);
}

function renderSignUpPage() {
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

  moveToAuthPageLink.addEventListener('click', () => {
    onNavigate('/signin');
  });
}

function renderSignInPage() {
  clearThePage();
  console.log('rendered auth page');
  form.addEventListener('submit', event => {
    event.preventDefault();
    authorize(event);
  });
}
