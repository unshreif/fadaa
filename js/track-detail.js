document.addEventListener('DOMContentLoaded', function() {
    // Course filtering functionality
    const categoryButtons = document.querySelectorAll('.category-btn');
    const coursesGrid = document.querySelector('.external-courses-grid');
    const courseCards = document.querySelectorAll('.external-course-card');
    
    // Add language filter buttons to the top of the courses section
    const courseSection = document.querySelector('.courses-section');
    const categoriesContainer = document.querySelector('.course-categories');
    
    // Create language filter
    const languageFilter = document.createElement('div');
    languageFilter.className = 'language-filter';
    
    // Add language buttons
    const languageButtons = `
        <button class="language-btn active" data-language="all">All Languages</button>
        <button class="language-btn" data-language="english">English</button>
        <button class="language-btn" data-language="arabic">Arabic</button>
    `;
    
    languageFilter.innerHTML = languageButtons;
    categoriesContainer.parentNode.insertBefore(languageFilter, categoriesContainer);
    
    // Function to handle category filter clicks
    function handleFilters() {
        const activeCategory = document.querySelector('.category-btn.active').dataset.category;
        const activeLanguage = document.querySelector('.language-btn.active').dataset.language;
        
        // Add filtered-view class to hide instructors
        coursesGrid.classList.add('filtered-view');
        
        // Filter the courses by both category and language
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
    
    // Attach event listeners to category buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            handleFilters();
        });
    });
    
    // Add event listeners to language buttons
    const languageBtns = document.querySelectorAll('.language-btn');
    languageBtns.forEach(button => {
        button.addEventListener('click', function() {
            languageBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            handleFilters();
        });
    });
    
    // Initialize with default filters
    handleFilters();
});
