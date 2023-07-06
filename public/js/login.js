const loginFormHandler = async (event) => {
  event.preventDefault();

//login with form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};



  
  let element1 = document.querySelector('.login-form');

  if(element1) {
    element1.addEventListener('submit', loginFormHandler);
  }