let state = {page: ''};
function initialize() {
  window.addEventListener('load', event => {
    // console.log('global state: ', state);
    console.log('loading -->');
    window.history.replaceState({}, null, '');
    // устанавливает первую запись в истории при загрузке страницы
    onNavigate('/'); // с аргументом /signup не рабоатет, теряет страницу
  });
  // Чтобы узнать, когда переход по истории вперед/назад
  // был завершён, необходимо подписаться на событие popstate окна
  window.addEventListener('popstate', event => {
    // console.log(event);
    // если событие popstate содержит старый стейт истории
    if (event.state && event.state.pathname) {
      console.log('going to --> ', event.state.pathname);
      // сообщает роутеру урл, когда перемещаемся по истории
      // тот рендерит связанную со старым урлом страницу
      router(event.state.pathname);
    }
  });

  window.addEventListener('popstate', event => {
    console.log(`Данные навигации: ${JSON.stringify(event.state)}`);
  });
}

initialize();

function onNavigate(pathname) {
  // добавляет запись с текущим урл в историю браузера
  // console.log('history length: ', window.history.length);
  console.log('global state: ', state);
  console.log('history state :', history.state);
  window.history.pushState({pathname}, null, pathname);
  // вызывает функцию-роутер
  // сообщает роутеру текущий урл, когда он добавляется в историю браузера
  router(pathname);
}

function router(route) {
  console.log('current route: ', route);
  switch (route) {
    case '/':
      history.pushState('/', null, '/');
      renderSignUpPage();
      break;
    case '/signup':
      if (state.page === 'signup') {
        history.pushState('/signup', null, '/signup');
        renderSignUpPage();
      }
      break;
    case '/signin':
      if (state.page === 'signin') {
        history.pushState('/signin', null, '/signin');
        renderSignInPage();
      }
      break;
    case '/restore-password':
      if (state.page === 'restore') {
        history.pushState('/restore-password', null, '/restore-password');
        renderRestorePage();
      }
      return console.log('restore route activated');
      break;
    // case '/main':
    default:
      break;
  }
}
