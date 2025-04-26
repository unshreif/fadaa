document.addEventListener('DOMContentLoaded', () => {
  // Create dark mode toggle button
  const darkModeToggle = document.createElement('button');
  darkModeToggle.classList.add('dark-mode-toggle');
  darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  document.querySelector('nav').appendChild(darkModeToggle);
  
  // Check for saved user preference
  const savedTheme = localStorage.getItem('theme') || 'light';
  
  // Apply saved theme
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
  
  // Toggle dark mode
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Update icon
    if (document.body.classList.contains('dark-mode')) {
      darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      localStorage.setItem('theme', 'dark');
    } else {
      darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      localStorage.setItem('theme', 'light');
    }
    
    // Animation for smooth transition
    gsap.from('body', {
      opacity: 0.8,
      duration: 0.5,
      ease: 'power1.out'
    });
  });
});