document.addEventListener('DOMContentLoaded', function() {
    console.log('Menu script loaded');
    
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        console.log('Menu elements found');
        
        menuToggle.onclick = function(e) {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            console.log('Menu toggled');
            
            e.preventDefault();
            e.stopPropagation();
            return false;
        };
    } else {
        console.error('Menu elements not found:', { 
            menuToggleFound: !!menuToggle, 
            navLinksFound: !!navLinks 
        });
    }
    
    (function() {
        const toggleMenu = function() {
            const menuToggle = document.querySelector('.menu-toggle');
            const navLinks = document.querySelector('.nav-links');
            if (menuToggle && navLinks) {
                menuToggle.classList.toggle('active');
                navLinks.classList.toggle('active');
            }
        };
        
        window.addEventListener('load', function() {
            const menuToggle = document.querySelector('.menu-toggle');
            if (menuToggle) {
                menuToggle.onclick = function(e) {
                    toggleMenu();
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                };
            }
        });
    })();
});
