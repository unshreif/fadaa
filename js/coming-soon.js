document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 100,
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

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // Animate code lines with a typing effect
    const codeLines = document.querySelectorAll('.code-line');
    codeLines.forEach((line, index) => {
        gsap.from(line, {
            opacity: 0,
            y: 20,
            delay: 0.5 + (index * 0.2),
            duration: 0.8,
            ease: "power3.out"
        });
    });

    // Hero section animations
    gsap.from('.tech-badge', {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from('h1', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
    });

    gsap.from('.accent-line', {
        width: 0,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out"
    });

    gsap.from('.soon-description', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.7,
        ease: "power3.out"
    });

    // Animate countdown timer
    gsap.from('.time-block', {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        delay: 0.9,
        stagger: 0.1,
        ease: "back.out(1.7)"
    });

    // Animate form and social links
    gsap.from('.notification-form', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 1.3,
        ease: "power3.out"
    });

    gsap.from('.social-icon', {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        delay: 1.5,
        stagger: 0.1,
        ease: "back.out(1.7)"
    });
});
