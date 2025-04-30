document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const coursesGrid = document.querySelector('.external-courses-grid');
    const courseCards = document.querySelectorAll('.external-course-card');
    
    const courseSection = document.querySelector('.courses-section');
    const categoriesContainer = document.querySelector('.course-categories');
    
    const languageFilter = document.createElement('div');
    languageFilter.className = 'language-filter';
    
    const languageButtons = `
        <button class="language-btn active" data-language="all">All Languages</button>
        <button class="language-btn" data-language="english">English</button>
        <button class="language-btn" data-language="arabic">Arabic</button>
    `;
    
    languageFilter.innerHTML = languageButtons;
    categoriesContainer.parentNode.insertBefore(languageFilter, categoriesContainer);
    
    function handleFilters() {
        const activeCategory = document.querySelector('.category-btn.active').dataset.category;
        const activeLanguage = document.querySelector('.language-btn.active').dataset.language;
        
        coursesGrid.classList.add('filtered-view');
        
        courseCards.forEach(card => {
            const categoryMatch = activeCategory === 'all' || card.dataset.categories.includes(activeCategory);
            const languageMatch = activeLanguage === 'all' || card.dataset.language === activeLanguage;
            
            if (categoryMatch && languageMatch) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            handleFilters();
        });
    });
    
    const languageBtns = document.querySelectorAll('.language-btn');
    languageBtns.forEach(button => {
        button.addEventListener('click', function() {
            languageBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            handleFilters();
        });
    });
    
    handleFilters();
});
