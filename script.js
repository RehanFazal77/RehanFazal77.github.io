// Calculate and display age with decimal precision
function calculateAge() {
    const birthDate = new Date('2004-01-27'); // Approximate birth date based on college timeline
    const now = new Date();
    const ageInMs = now - birthDate;
    const ageInYears = ageInMs / (1000 * 60 * 60 * 24 * 365.25);
    return ageInYears.toFixed(0);
}

// Update age counter
function updateAgeCounter() {
    const ageElement = document.getElementById('age-counter');
    if (ageElement) {
        ageElement.textContent = calculateAge();
    }
}

// Initialize age counter and update every 100ms for smooth animation
document.addEventListener('DOMContentLoaded', () => {
    updateAgeCounter();
    setInterval(updateAgeCounter, 100);

    // Add intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for scroll animations
    document.querySelectorAll('.section, .social-links').forEach(section => {
        observer.observe(section);
    });
});

// Console easter egg
console.log('%c👋 Hey there, fellow developer!', 'font-size: 20px; font-weight: bold;');
console.log('%cThanks for checking out my portfolio. Feel free to reach out!', 'font-size: 14px; color: #888;');
console.log('%c🚀 Built with vanilla HTML, CSS, and JS', 'font-size: 12px; color: #3b82f6;');
