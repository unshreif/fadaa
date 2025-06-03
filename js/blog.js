document.addEventListener('DOMContentLoaded', function() {
            particlesJS('particles-js', {
                particles: {
                    number: { value: 80, density: { enable: true, value_area: 800 } },
                    color: { value: "#5eead4" },
                    shape: { type: "circle" },
                    opacity: { value: 0.2, random: true },
                    size: { value: 3, random: true },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#5eead4",
                        opacity: 0.1,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: "none",
                        random: true,
                        straight: false,
                        out_mode: "out",
                        bounce: false
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: { enable: true, mode: "grab" },
                        onclick: { enable: true, mode: "push" },
                        resize: true
                    },
                    modes: {
                        grab: { distance: 140, line_linked: { opacity: 0.5 } },
                        push: { particles_nb: 4 }
                    }
                },
                retina_detect: true
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
            const categoryButtons = document.querySelectorAll('.category-btn');
            const blogCards = document.querySelectorAll('.blog-card');
            
            categoryButtons.forEach(button => {
                button.addEventListener('click', function() {
                    categoryButtons.forEach(btn => btn.classList.remove('active'));
                    
                    this.classList.add('active');
                    
                    const selectedCategory = this.getAttribute('data-category');
                    
                    if (selectedCategory === 'all') {
                        blogCards.forEach(card => {
                            card.style.display = 'flex';
                        });
                    } else {
                        blogCards.forEach(card => {
                            const cardCategories = card.getAttribute('data-categories').split(' ');
                            if (cardCategories.includes(selectedCategory)) {
                                card.style.display = 'flex';
                            } else {
                                card.style.display = 'none';
                            }
                        });
                    }
                });
            });
        });

        document.querySelector('.menu-toggle').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
            this.classList.toggle('active');
        });

        document.addEventListener('DOMContentLoaded', function() {
            gsap.from('.blog-header h1', { 
                opacity: 0, 
                y: 30, 
                duration: 1, 
                ease: 'power3.out' 
            });
            
            gsap.from('.blog-header .accent-line', { 
                opacity: 0, 
                width: 0, 
                duration: 1, 
                delay: 0.3, 
                ease: 'power3.out' 
            });
            
            gsap.from('.blog-header p', { 
                opacity: 0, 
                y: 20, 
                duration: 1, 
                delay: 0.5, 
                ease: 'power3.out' 
            });
            
            gsap.from('.featured-post', { 
                opacity: 0, 
                y: 50, 
                duration: 1, 
                delay: 0.8, 
                ease: 'power3.out' 
            });
            
            gsap.from('.blog-card', {
                opacity: 0,
                y: 30,
                duration: 0.8,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: '.blog-grid',
                    start: 'top 80%'
                }
            });
            
            gsap.from('.newsletter-container', {
                opacity: 0,
                y: 30,
                duration: 1,
                scrollTrigger: {
                    trigger: '.newsletter-section',
                    start: 'top 80%'
                }
            });
        });
