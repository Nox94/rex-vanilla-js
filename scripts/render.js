const rootElement = document.querySelector('#root');

// задает всем инпутам правильные пикчи
function setInputPic() {
  const inputsNodeList = document.querySelectorAll('.form__input');
  inputsNodeList.forEach(input => {
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

// очищает страницу от предыдущего хлама
function clearThePage() {
  state = {page: ''};
  rootElement.innerHTML = '';
  console.log('cleaned');
}

// ну тут понятно, да?
function renderSignUpPage() {
  rootElement.insertAdjacentHTML('afterbegin', signUpPageTemplate);
  const form = document.querySelector('.form');
  const moveToAuthPageLink = document.querySelector('#change-form-link');
  const eyeButtons = document.querySelectorAll('.form__input-eye-icon');
  const passwordEyeButton = document.querySelector('#password-eye-icon');
  const confirmPasEyeButton = document.querySelector('#confirm-password-eye-icon');
  const passwordInput = document.querySelector('#password');
  const confirmPasInput = document.querySelector('#confirm-password');

  setInputPic();

  eyeButtons.forEach(eyeButton => {
    eyeButton.addEventListener('click', toggleEyeClassList);
  });

  // переключает иконку глаза
  function toggleEyeClassList(event) {
    const target = event.target;
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    target.classList.toggle('form__input-eye-icon_opened');
    changePasswordVisibility();
  }

  // переключает видимость пароля
  function changePasswordVisibility() {
    passwordEyeButton.classList.contains('form__input-eye-icon_opened')
      ? passwordInput.setAttribute('type', 'text')
      : passwordInput.setAttribute('type', 'password');

    confirmPasEyeButton.classList.contains('form__input-eye-icon_opened')
      ? confirmPasInput.setAttribute('type', 'text')
      : confirmPasInput.setAttribute('type', 'password');
  }

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
  rootElement.insertAdjacentHTML('afterbegin', authorizePageTemplate);
  const form = document.querySelector('.form');
  const moveToSignUpPageLink = document.querySelector('#change-form-link');
  const moveToRestorePageLink = document.querySelector('#restore-page-link');
  const passwordInput = document.querySelector('#auth-password');
  const passwordEyeButton = document.querySelector('#auth-passsword-eye-icon');

  passwordEyeButton.addEventListener('click', toggleEyeClassList);

  // переключает иконку глаза
  function toggleEyeClassList(event) {
    const target = event.target;
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    target.classList.toggle('form__input-eye-icon_opened');
    changePasswordVisibility();
  }

  // переключает видимость пароля
  function changePasswordVisibility() {
    passwordEyeButton.classList.contains('form__input-eye-icon_opened')
      ? passwordInput.setAttribute('type', 'text')
      : passwordInput.setAttribute('type', 'password');
  }

  form.addEventListener('submit', event => {
    event.preventDefault();
    authorize(event);
    clearThePage();
    state.page = 'main';
    // некуда пока перенаправлять
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
    restoreMessage.insertAdjacentText(
      'afterbegin',
      'An email has been sent to you. Check your inbox, and click the reset link provided.'
    );
  });

  returnButton.addEventListener('click', event => {
    event.preventDefault();
    clearThePage();
    state.page = 'signin';
    onNavigate('/signin');
  });
}
