import {onNavigate} from './routing';
import {
  form,
  header,
  submitButton,
  inputField,
  passwordInputLabel,
  confirmPasswordInputLabel,
  firstNameInputLabel,
  lastNameInputLabel,
  emailInputLabel,
  firstNameInput,
  lastNameInput,
  confirmPasswordInput,
  emailInput,
  passwordInput,
} from './creation';

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

export function renderSignUpPage(params) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    register(event);
  });
}

export function renderSignInPage(params) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    register(event);
  });
}
