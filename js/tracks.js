document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 80,
                    "density": { "enable": true, "value_area": 800 }
                },
                "color": { "value": "#0cffe1" },
                "shape": { "type": "circle" },
                "opacity": {
                    "value": 0.5,
                    "random": true,
                },
                "size": {
                    "value": 3,
                    "random": true,
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#0cffe1",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "grab" },
                    "onclick": { "enable": true, "mode": "push" },
                },
                "modes": {
                    "grab": { "distance": 140, "line_linked": { "opacity": 0.8 } },
                    "push": { "particles_nb": 4 }
                }
            },
            "retina_detect": true
        });
    }

    // Track filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const trackCards = document.querySelectorAll('.track-card');
    const searchInput = document.getElementById('track-search');
    const noResults = document.querySelector('.no-results');
    const resetButton = document.querySelector('.reset-btn');
    
    // Active filters
    let activeFilters = {
        level: 'all',
        duration: 'all',
        search: ''
    };
    
    // Filter function
    function applyFilters() {
        let visibleCount = 0;
        
        trackCards.forEach(card => {
            const level = card.dataset.level;
            const duration = card.dataset.duration;
            const title = card.querySelector('h2').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            
            // Check if card matches all active filters
            const matchesLevel = activeFilters.level === 'all' || level === activeFilters.level;
            const matchesDuration = activeFilters.duration === 'all' || duration === activeFilters.duration;
            const matchesSearch = activeFilters.search === '' || 
                title.includes(activeFilters.search) || 
                description.includes(activeFilters.search);
            
            if (matchesLevel && matchesDuration && matchesSearch) {
                card.style.display = 'flex';
                visibleCount++;
                
                // Animate card appearance
                gsap.fromTo(card, 
                    { opacity: 0, y: 20 }, 
                    { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
                );
            } else {
                card.style.display = 'none';
            }
        });
        
        // Show/hide no results message
        if (visibleCount === 0) {
            noResults.style.display = 'block';
        } else {
            noResults.style.display = 'none';
        }
    }
    
    // Set up filter button clicks
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from other buttons in same group
            const group = button.parentElement;
            group.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Update active filters
            const filterType = group.parentElement.querySelector('label').textContent.toLowerCase();
            const filterValue = button.dataset.filter;
            
            if (filterType.includes('experience')) {
                activeFilters.level = filterValue;
            } else if (filterType.includes('duration')) {
                activeFilters.duration = filterValue;
            }
            
            applyFilters();
        });
    });
    
    // Set up search input
    searchInput.addEventListener('input', () => {
        activeFilters.search = searchInput.value.toLowerCase();
        applyFilters();
    });
    
    // Reset filters
    resetButton.addEventListener('click', () => {
        // Reset filter buttons
        filterButtons.forEach(button => {
            if (button.dataset.filter === 'all') {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
        
        // Clear search
        searchInput.value = '';
        
        // Reset active filters
        activeFilters = {
            level: 'all',
            duration: 'all',
            search: ''
        };
        
        applyFilters();
    });
    
    // Initial GSAP animations
    gsap.from('.tracks-header h1', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
    
    gsap.from('.filters-wrapper', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out"
    });
    
    gsap.from('.track-card', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.5,
        ease: "power3.out"
    });
    
    gsap.from('.get-started-cta', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 1,
        ease: "power3.out"
    });
    
    // Hover effects for cards
    trackCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.tech-icon');
            gsap.to(icon, {
                y: -5,
                scale: 1.1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.tech-icon');
            gsap.to(icon, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
});
