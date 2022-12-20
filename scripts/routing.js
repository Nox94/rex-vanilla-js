function initialize() {
  window.addEventListener('load', event => {
    console.log('loading -->');
    // устанавливает первую запись в истории при загрузке страницы
    onNavigate('/'); // с аргументом /signup не рабоатет, теряет страницу
  });
  // Чтобы узнать, когда переход был завершён необходимо подписаться на событие popstate окна
  window.addEventListener('popstate', event => {
    // если событие popstate содержит
    if (event.state && event.state.pathname) {
      console.log('going to --> ', event.state.pathname);
      // вызывает функцию-роутер
      // сообщает роутеру текущий урл, когда он добавляется в историю браузера
      router(event.state.pathname);
    }
  });
  window.addEventListener('popstate', event => {
    console.log(`Данные навигации: ${JSON.stringify(event.state)}`);
  });
}

initialize();

export function onNavigate(pathname) {
  // добавляет запись с текущим урл в историю браузера
  window.history.pushState({pathname}, '', window.location.origin + pathname);
  // вызывает функцию-роутер
  // сообщает роутеру текущий урл, когда он добавляется в историю браузера
  router(pathname);
}

function router(route) {
  console.log('current route --> ', route);
  switch (route) {
    case '/':
      return console.log('signup');
    case '/signup':
      return console.log('signup');
    case '/signin':
      return console.log('signin');
    case '/restore-password':
      return console.log('restore');
    case '/restore-password-message':
      return console.log('restore message');
    // case '/clinic':
    //   return this.view.renderClinic()
    default:
      break;
  }
}
