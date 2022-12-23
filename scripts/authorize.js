function register(event) {
  const userData = {
    name: `${event.target.querySelector('#first-name').value}`,
    lastName: `${event.target.querySelector('#last-name').value}`,
    email: `${event.target.querySelector('#email').value}`,
    password: `${event.target.querySelector('#password').value}`,
  };
  return fetch(' http://localhost:3000/users', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then(response => console.log(response))
    .then(() => onNavigate('/signin'))
    .catch(error => console.log(error));
}

function authorize(event) {
  event.preventDefault();
  const userData = {
    email: `${event.target.querySelector('#auth-email').value}`,
    password: `${event.target.querySelector('#auth-password').value}`,
  };
  return fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then(res => res.json())
    .then(res => {
      console.log(res); // приходит токен
    })
    .catch(error => console.log(error));
}

function restore(event) {
  event.preventDefault();
  console.log('restore email sent')
}