const inputs = document.querySelectorAll('.form__input');
const eyeButtons = document.querySelectorAll('.form__input-eye-icon');
const registerForm = document.querySelector('#register-form');

console.log(registerForm);

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

registerForm.addEventListener('submit', register);

function register(event) {
  event.preventDefault();
  const userData = {
    name: `${event.target.querySelector('#first-name').value}`,
    lastName: `${event.target.querySelector('#last-name').value}`,
    email: `${event.target.querySelector('#email').value}`,
    // password: `${event.target.querySelector('#password').value}`,
  };
  // console.log(data);
  return fetch(' http://localhost:3000/users', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then(response => console.log(response))
    .catch(error => console.log(error));
}
