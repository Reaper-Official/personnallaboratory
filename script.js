document.addEventListener('DOMContentLoaded', () => {
    // Animation de l'en-tête
    anime({
        targets: 'header',
        translateY: [-50, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutBounce'
    });

    // Animation des sections
    anime({
        targets: 'section',
        translateX: [-50, 0],
        opacity: [0, 1],
        duration: 800,
        delay: anime.stagger(200),
        easing: 'easeOutQuad'
    });
});
