
function initialize() {
  window.addEventListener('load', event => {
    console.log('loading -->');
    // устанавливает первую запись в истории при загрузке страницы
    onNavigate('/'); // с аргументом /signup не рабоатет, теряет страницу
  });
  // Чтобы узнать, когда переход был завершён необходимо подписаться на событие popstate окна
  window.addEventListener('popstate', event => {
    console.log(event);
    // если событие popstate содержит
    if (event.state && event.state.pathname) {
      console.log('going to --> ', event.state.pathname);
      // вызывает функцию-роутер
      // сообщает роутеру текущий урл, когда он добавляется в историю браузера
      router(event.state.pathname);
    }
  });

  window.addEventListener('popstate', (event) => {
    console.log(`Данные навигации: ${JSON.stringify(event.state)}`)
  });
}

initialize();

function onNavigate(pathname) {
  // добавляет запись с текущим урл в историю браузера
  console.log('history length: ', window.history.length);
  console.log('history state :', history.state);
  window.history.pushState({pathname}, null, pathname);
  // вызывает функцию-роутер
  // сообщает роутеру текущий урл, когда он добавляется в историю браузера
  router(pathname);
}

function router(route) {
  console.log('current route --> ', route);
  switch (route) {
    case '/':
      renderSignUpPage();
    case '/signup':
      renderSignUpPage();
    case '/signin':
      renderSignInPage();
    case '/restore-password':
      return console.log('restore route activated');
    // case '/restore-password-message':
    //   return console.log('restore message');
    // case '/clinic':
    //   return this.view.renderClinic()
    default:
      break;
  }
}
