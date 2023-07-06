const logout = async function(event) {
    event.preventDefault();
    const response = await fetch('/api/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/login');
      console.log("logged out");
    } else {
      alert('Failed to log out');
      console.log(err);
    }
  };
  
  

  let element = document.querySelector('#logout-link');

  if(element) {
    element.addEventListener('click', logout);
  }