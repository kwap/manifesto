document.addEventListener('DOMContentLoaded', () => {

    // Observer for Manifesto Text Reveal
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -20% 0px', // Trigger when element is in middle 60% of viewport
        threshold: 0.1
    };

    const textObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, observerOptions);

    const revealTexts = document.querySelectorAll('.reveal-text');
    revealTexts.forEach(text => textObserver.observe(text));

    // CSS is handling the fixed background now, removing JS parallax to avoid fighting with position:fixed


    // Bento Card Entrance Animation
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay based on index logic or just simple fade
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll('.bento-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out'; // Override CSS transition for initial load if needed
        cardObserver.observe(card);
    });
});
