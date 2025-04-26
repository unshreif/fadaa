document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuButton = document.createElement('div');
  menuButton.className = 'menu-toggle';
  menuButton.innerHTML = '<span></span><span></span><span></span>';
  document.querySelector('nav').appendChild(menuButton);
  
  menuButton.addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('active');
    menuButton.classList.toggle('active');
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form validation
  const form = document.querySelector('footer form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = form.querySelector('input[type="text"]');
      const emailInput = form.querySelector('input[type="email"]');
      const messageInput = form.querySelector('textarea');
      
      let valid = true;
      
      if (!nameInput.value.trim()) {
        showError(nameInput, 'Please enter your name');
        valid = false;
      } else {
        removeError(nameInput);
      }
      
      if (!emailInput.value.trim()) {
        showError(emailInput, 'Please enter your email');
        valid = false;
      } else if (!isValidEmail(emailInput.value)) {
        showError(emailInput, 'Please enter a valid email');
        valid = false;
      } else {
        removeError(emailInput);
      }
      
      if (!messageInput.value.trim()) {
        showError(messageInput, 'Please enter your message');
        valid = false;
      } else {
        removeError(messageInput);
      }
      
      if (valid) {
        // Simulate form submission
        const submitBtn = form.querySelector('button');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        
        setTimeout(() => {
          form.reset();
          submitBtn.textContent = 'Sent!';
          
          setTimeout(() => {
            submitBtn.textContent = originalText;
          }, 2000);
        }, 1500);
      }
    });
  }
  
  function showError(input, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    if (!input.nextElementSibling || !input.nextElementSibling.classList.contains('error-message')) {
      input.parentNode.insertBefore(errorDiv, input.nextSibling);
      input.classList.add('error');
    }
  }
  
  function removeError(input) {
    if (input.nextElementSibling && input.nextElementSibling.classList.contains('error-message')) {
      input.nextElementSibling.remove();
    }
    input.classList.remove('error');
  }
  
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});