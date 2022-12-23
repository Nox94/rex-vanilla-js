const signUpPageTemplate = `<div class="page__items-container" id="form-container">
<h1 class="page__header" id="page-form-header">Sign Up</h1>

<form class="form" id="register-form">
  <div class="form__input-field" id="first-name-input-field">
    <label class="form__label_sr-only" for="first-name">First Name</label>
    <input
      class="form__input"
      name="first-name"
      type="text"
      id="first-name"
      placeholder="First Name"
      autocomplete="username"
      required
    />
    <span id="first-name-input-error-message" class="error">retgertert</span>
  </div>

  <div class="form__input-field" id="last-name-input-field">
    <label class="form__label_sr-only" for="last-name">Last Name</label>
    <input
      class="form__input"
      name="last-name"
      type="text"
      id="last-name"
      placeholder="Last Name"
      required
    />
    <span id="last-name-input-error-message" class="error"></span>
  </div>

  <div class="form__input-field" id="first-name-input-field">
    <label class="form__label_sr-only" for="email">Email</label>
    <input
      class="form__input"
      type="email"
      id="email"
      placeholder="Email"
      autocomplete="username"
      required
    />
    <span id="email-input-error-message" class="error"></span>
  </div>

  <div class="form__input-field">
    <label class="form__label_sr-only" for="password">Password</label>
    <input
      class="form__input"
      type="password"
      name="password"
      id="password"
      placeholder="Password"
      autocomplete="new-password"
      required
    />
    <a class="form__input-eye-icon" id='password-eye-icon'></a>
    <span id="password-input-error-message" class="error"></span>
  </div>

  <div class="form__input-field">
    <label class="form__label_sr-only" for="confirm-password">Confirm Password</label>
    <input
      class="form__input"
      type="password"
      name="confirm-password"
      id="confirm-password"
      placeholder="Confirm Password"
      autocomplete="new-password"
      required
    />
    <a class="form__input-eye-icon" id="confirm-password-eye-icon"></a>
    <span id="confirm-password-input-error-message" class="error"></span>
  </div>

  <button class="button form__button" type="submit">
    Sign up<img src="../images/button_arrow.png" class="button__arrow" alt="arrow" />
  </button>
</form>
<div class="page__suggestion-container">
  <p class="page__suggestion" id="suggestion">Already have an account?</p>
  <a class="page__link" id="change-form-link">Sign in</a>
</div>
</div>`


const authorizePageTemplate = `<div class="page__items-container" id="auth-form-container">
<h1 class="page__header" id="page-form-header">Sign In</h1>
<form class="form" id="authorize-form">
  <div class="form__input-field">
    <label class="form__label_sr-only" for="email">Email</label>
    <input
      class="form__input"
      type="email"
      id="auth-email"
      placeholder="Email"
      autocomplete="username"
      required
    />
    <span id="email-input-error-message" class="error"></span>
  </div>

  <div class="form__input-field">
    <label class="form__label_sr-only" for="password">Password</label>
    <input
      class="form__input"
      type="password"
      name="password"
      id="auth-password"
      placeholder="Password"
      autocomplete="new-password"
      required
    />
    <a class="form__input-eye-icon" id='auth-passsword-eye-icon'></a>
    <span id="password-input-error-message" class="error"></span>
  </div>

  <button class="button form__button" type="submit">
    Sign in<img src="../images/button_arrow.png" class="button__arrow" alt="arrow" />
  </button>
</form>
<a class="page__link page__link_thin" id='restore-page-link'>Forgot Password?</a>
<div class="page__suggestion-container">
  <p class="page__suggestion" id="suggestion">Don't have an account?</p>
  <a class="page__link" id="change-form-link">Sign up</a>
</div>
</div>`

const restorePageTemplate = `<div class="page__items-container" id="restore-page-container">
<div style="display: flex; align-items: center;">
  <a class="page__return-arrow"></a>
  <h1 class="page__header">Restore password</h1>
</div>
<p class="page__text">
  Please use your email address, and we&#8217;ll send you the link to reset your password
</p>
<span class="page__text" id="restore-message"></span>
<form class="form">
  <div class="form__input-field">
    <label class="form__label form__label_sr-only" for="restore-email-input">Email</label>
    <input
      class="form__input"
      type="email"
      id="restore-email-input"
      name="restore-email-input"
      placeholder="Email"
    />
  </div>
  <button class="button form__button" type="submit">
    Send Reset Link
    <img class="button__arrow" src="../images/button_arrow.png" alt="return arrow" />
  </button>
</form>
</div>`

// const form = createElement('form', 'form');
// const errorSpan = createElement('span', 'error');
// const header = createElement('h1', 'page__header', 'Sign Up');
// const moveToRestorePageLink = createElement('a', 'page__link', '');
// const pageContainer = createElement('div', 'page__items-container');
// const moveToAuthPageLink = createElement('a', 'page__link', 'Sign in');
// const moveToSignUpPageLink = createElement('a', 'page__link', 'Sign up');
// const pageSuggestionContainer = createElement('div', 'page__suggestion-container');
// const pageSuggestion = createElement('p', 'page__suggestion', 'Already have an account?');
// const firstNameInputField = createElement('div', 'form__input-field', '', {
//   id: 'first-name-input-field',
// });
// const lastNameInputField = createElement('div', 'form__input-field', '', {
//   id: 'last-name-input-field',
// });
// const passwordInputField = createElement('div', 'form__input-field', '', {
//   id: 'password-input-field',
// });
// const confirmInputField = createElement('div', 'form__input-field', '', {
//   id: 'confirm-input-field',
// });
// const emailInputField = createElement('div', 'form__input-field', '', {id: 'email-input-field'});
// const restoreInputField = createElement('div', 'form__input-field', '', {
//   id: 'restore-input-field',
// });
// const passwordEyeIcon = createElement('a', 'form__input-eye-icon', '', {
//   id: 'password-eye-icon',
// });
// const confirmEyeIcon = createElement('a', 'form__input-eye-icon', '', {
//   id: 'confirm-eye-icon',
// });

// const passwordInputLabel = createElement('label', 'form__label_sr-only', 'Password', {
//   for: 'password',
// });
// const confirmPasswordInputLabel = createElement('label', 'form__label_sr-only', 'Password', {
//   for: 'confirm-password',
// });
// const firstNameInputLabel = createElement('label', 'form__label_sr-only', 'Password', {
//   for: 'first-name',
// });
// const lastNameInputLabel = createElement('label', 'form__label_sr-only', 'Password', {
//   for: 'last-name',
// });
// const emailInputLabel = createElement('label', 'form__label_sr-only', 'Password', {
//   for: 'email',
// });
// const firstNameInput = createElement('input', 'form__input', '', {
//   type: 'text',
//   name: 'first-name',
//   placeholder: 'First Name',
//   autocomplete: 'username',
//   required: 'true',
// });
// const lastNameInput = createElement('input', 'form__input', '', {
//   type: 'text',
//   name: 'last-name',
//   placeholder: 'Last Name',
//   autocomplete: 'username',
//   required: 'true',
// });
// const passwordInput = createElement('input', 'form__input', '', {
//   type: 'password',
//   name: 'password',
//   placeholder: 'Password',
//   autocomplete: 'new-password',
//   required: 'true',
// });
// const confirmPasswordInput = createElement('input', 'form__input', '', {
//   type: 'password',
//   name: 'confirm-password',
//   placeholder: 'Confirm password',
//   autocomplete: 'new-password',
//   required: 'true',
// });
// const emailInput = createElement('input', 'form__input', '', {
//   type: 'email',
//   name: 'email',
//   placeholder: 'Email',
//   autocomplete: 'username',
//   required: 'true',
// });
// const buttonArrowImg = createElement('img', 'button__arrow', '', {
//   src: '../images/button_arrow.png',
//   alt: 'return arrow',
// });
// const restorePasswordPageText = createElement(
//   'p',
//   'page__text',
//   'Please use your email address, and we&#8217;ll send you the link to reset your password'
// );
// const submitButton = createElement('button', 'button', 'Sign up', {
//   type: 'submit',
// });

// function createElement(tag, className, text, attributesOptions) {
//   const element = document.createElement(tag);
//   if (className) {
//     element.classList.add(className);
//   }
//   if (attributesOptions) {
//     // Object.entries(obj) – возвращает массив пар [ключ, значение]
//     for (const [key, value] of Object.entries(attributesOptions)) {
//       element.setAttribute(key, value);
//     }
//   }
//   if (text != '') {
//     element.textContent = text;
//   }
//   return element;
// }