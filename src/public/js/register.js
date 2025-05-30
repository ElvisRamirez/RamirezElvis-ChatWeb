const login = document.querySelector('#login');

login.addEventListener('click', () => {
  const user = document.querySelector('#username').value.trim();

  if (user !== '') {
    document.cookie = `username=${user}; path=/`;
    window.location.href = '/';
  } else {
    alert('Por favor ingresa tu nombre de usuario');
  }
});
