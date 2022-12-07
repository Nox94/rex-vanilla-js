const inputs = document.querySelectorAll('.form__input');
const eyeButtons = document.querySelectorAll('.form__input-eye-icon');
const changeFormButton = document.querySelector('#change-form-link');


const inputsArray = Array.from(inputs);

const passwordInputs = inputsArray.filter(input => {
  let inputType = input.getAttribute('type');
  return inputType === 'password' && input;
});

// меняет иконки в зависимости от типа инпута
inputsArray.forEach(input => {
  let type = input.getAttribute('type');
  if (type === 'text') {
    input.style.backgroundImage = `url('../../../images/input_user_icon.png')`;
  } else if (type === 'email') {
    input.style.backgroundImage = `url('../../../images/input_email_icon.png')`;
  } else if (type === 'password') {
    input.style.backgroundImage = `url('../../../images/input_lock_icon.png')`;
  } else {
    console.log('nya');
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

function register() {
  
}