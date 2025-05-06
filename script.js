document.addEventListener('DOMContentLoaded', () => {
    // Animation du texte dans l'en-tête
    anime({
        targets: 'header .animated-text',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1000,
        delay: anime.stagger(200),
        easing: 'easeOutBounce'
    });

    // Animation des sections au défilement
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateX: [-20, 0],
                    duration: 800,
                    easing: 'easeOutQuad'
                });
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach((section) => {
        observer.observe(section);
    });
});
