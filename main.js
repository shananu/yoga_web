// ScrollReveal Options
const scrollRevealOptions = {
    distance: "50px", // Distance elements will move during animation
    origin: "bottom", // Default animation origin
    duration: 1000,   // Animation duration in milliseconds
  };
  
  // Header Container Animations
  ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOptions,
    delay: 500,
  });
  
  ScrollReveal().reveal(".header__container h2", {
    ...scrollRevealOptions,
    delay: 1000,
  });
  
  ScrollReveal().reveal(".header__container .btn", {
    ...scrollRevealOptions,
    delay: 1500,
  });
  
  ScrollReveal().reveal(".header__container img", {
    ...scrollRevealOptions,
    origin: "right", // Changing origin for image
  });
  
  // Why Section Animations
  ScrollReveal().reveal(".why__container .section__header", {
    ...scrollRevealOptions,
    delay: 500,
  });
  
  ScrollReveal().reveal(".why__container p", {
    ...scrollRevealOptions,
    delay: 1000,
  });
  
  ScrollReveal().reveal(".why__container li", {
    ...scrollRevealOptions,
    delay: 1500,
    interval: 500, // Staggered animation for list items
  });
  
  ScrollReveal().reveal(".why__container img", {
    ...scrollRevealOptions,
    origin: "left", // Changing origin for image
  });
  
  // Hero Section Animations
  ScrollReveal().reveal(".hero__card", {
    ...scrollRevealOptions,
    interval: 500, // Staggered animation for cards
  });
  
  // Classes Section Animations
  ScrollReveal().reveal(".classes__image", {
    ...scrollRevealOptions,
    interval: 500,
    origin: "bottom",
  });
  
  // Membership Section Animations
  ScrollReveal().reveal(".membership__card", {
    ...scrollRevealOptions,
    interval: 500, // Staggered animation for cards
  });
  
  // Stories Section Animations
  ScrollReveal().reveal(".stories__card", {
    ...scrollRevealOptions,
    interval: 500,
  });
  
  // Posts Section Animations
  ScrollReveal().reveal(".posts__card", {
    ...scrollRevealOptions,
    interval: 500,
  });
  
  // Photos Section Animations
  ScrollReveal().reveal(".photos__card", {
    ...scrollRevealOptions,
    duration: 1000, // Longer duration for photos
    interval: 500,  // Staggered animation for cards
  });
  
  // Footer Section Animations (optional, if needed)
  ScrollReveal().reveal(".footer__links, .footer__info", {
    ...scrollRevealOptions,
    interval: 300,
  });

  // Navigate to signup page when the "Sign Up" button is clicked
document.querySelector('.signup-btn a')?.addEventListener('click', function (e) {
    window.location.href = 'signup.html';
  });
  
  // Navigate to signup page from the login page's "Register" link
  document.querySelector('a[href="signup.html"]')?.addEventListener('click', function (e) {
    window.location.href = 'signup.html';
  });
  
  // main.js (Frontend)

document.addEventListener("DOMContentLoaded", () => {
  // Handle form submission (sign-up)
  const signupForm = document.querySelector('.signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
      e.preventDefault(); // Prevent the default form submission

      // Get form data
      const name = document.querySelector('#name').value;
      const email = document.querySelector('#email').value;
      const password = document.querySelector('#password').value;

      try {
        // Send POST request to backend to create user
        const response = await fetch('http://localhost:5000/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, password }), // Send data to backend
        });

        const data = await response.json();
        if (response.ok) {
          // Handle successful response
          alert('User created successfully!');
          window.location.href = 'login.html'; // Redirect to login page (optional)
        } else {
          // Handle error response
          alert(data.msg || 'Error occurred');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Network error');
      }
    });
  }
});
