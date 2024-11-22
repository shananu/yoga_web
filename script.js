// Toggle Password Visibility
document.getElementById('togglePassword')?.addEventListener('click', function () {
  const passwordField = document.getElementById('password');
  if (passwordField) {
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;
  }
});

// Handle Login Form Submission
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the form from reloading the page

    // Get the values from the form inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
      alert('Please fill out all fields.');
      return;
    }

    try {
      // Send a POST request to the login API
      const response = await fetch('https://yoga-web-fhbl.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful
        alert('Login successful!');
        console.log('Token:', data.token); // Log the token (store securely in real apps)
        // Optionally, redirect the user to another page
        window.location.href = 'dashboard.html'; // Replace 'dashboard.html' with your page
      } else {
        // Handle login error
        alert(data.msg || 'Login failed. Please try again.');
      }
    } catch (error) {
      // Handle unexpected errors
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    }
  });
}

// Handle Signup Form Submission
const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the form from reloading the page

    // Get the values from the form inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!name || !email || !password) {
      alert('Please fill out all fields.');
      return;
    }

    try {
      // Send a POST request to the signup API
      const response = await fetch('https://yoga-web-fhbl.onrender.com/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Signup successful
        alert('Signup successful! You can now log in.');
        // Redirect to the login page
        window.location.href = 'login.html';
      } else {
        // Handle signup errors
        alert(data.msg || 'Signup failed. Please try again.');
      }
    } catch (error) {
      // Handle unexpected errors
      console.error('Error:', error);
      alert('Something went wrong. Please try again later.');
    }
  });
}
