function checkUserLogin() {
    const loggedIn = sessionStorage.getItem('loggedIn') === 'true';
  
    if (!loggedIn) {
      window.location.href = 'login.html';
    }
  }