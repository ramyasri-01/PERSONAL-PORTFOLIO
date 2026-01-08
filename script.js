// ========================
// PORTFOLIO SCRIPT
// ========================

/**
 * Smooth scrolling for navigation links
 */
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll behavior for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Prevent default only if target exists
            if (document.querySelector(href)) {
                e.preventDefault();
                
                const target = document.querySelector(href);
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add active state to nav links on scroll
    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink(); // Call on page load
});

/**
 * Update active navigation link based on scroll position
 */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

/**
 * Highlight effect on page load
 */
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});