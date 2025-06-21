document.addEventListener('DOMContentLoaded', function() {
    const sectionIds = ['home', 'about', 'blog', 'getstarted'];

    function showSection(sectionId) {
        sectionIds.forEach(id => {
            const section = document.getElementById(id);
            if (section) {
                section.style.display = (id === sectionId) ? '' : 'none';
            }
        });
    }

    showSection('home');

    const getStartedBtn = document.getElementById('getStartedBtn');
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', function() {
            showSection('getstarted');
        });
    }
    const blogBtn = document.getElementById('blogBtn');
    if (blogBtn) {
        blogBtn.addEventListener('click', function() {
            showSection('blog');
        });
    }
    const aboutBtn = document.getElementById('aboutBtn');
    if (aboutBtn) {
        aboutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showSection('about');
        });
    }
    const homeBtn = document.getElementById('homeBtn');
    if (homeBtn) {
        homeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showSection('home');
        });
    }
    
    // Optionally, add more navigation logic here for other buttons/links
}); 
