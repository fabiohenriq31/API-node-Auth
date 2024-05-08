async function register() {
  const name = document.getElementById('register-name').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  const confirmpassword = document.getElementById('register-confirm-password').value;
  
  console.log('Password:', password);
  console.log('Confirm Password:', confirmpassword);

  if (password !== confirmpassword) {
    alert("Senha invalida");
    return;
  }

  try {
    const response = await fetch('/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password, confirmpassword })
    });

    console.log(response)

    const data = await response.json();
    alert(data.msg);
  } catch (error) {
    console.error('Error:', error);
    alert('Aconteceu um erro, tente novamente.');
  }
}

async function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  try {
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.msg); 
      window.location.href = 'success.html';
    } else {
      console.error('Response status:', response.status);
      alert(data.msg); 
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Aconteceu um erro, tente novamente.');
  }
}

