document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const resourceCards = document.querySelectorAll('.resource-card');
  
  // Initial state - show all resources
  filterResources('all');
  
  // Add event listeners to filter buttons
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active state
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Filter resources
      const filter = button.getAttribute('data-filter');
      filterResources(filter);
    });
  });
  
  function filterResources(filter) {
    resourceCards.forEach(card => {
      // Get card categories
      const categories = card.getAttribute('data-categories').split(' ');
      
      // Show/hide based on filter
      if (filter === 'all' || categories.includes(filter)) {
        card.style.display = '';
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.4
        });
      } else {
        gsap.to(card, {
          opacity: 0,
          y: 20,
          duration: 0.4,
          onComplete: () => {
            card.style.display = 'none';
          }
        });
      }
    });
  }
});