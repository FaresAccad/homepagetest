document.addEventListener('DOMContentLoaded', function() {
    const scrollingContent = document.querySelector('.scrolling-content');

    function updateAnimation() {
        let totalContentWidth = 0;

        // Calculate the total width of all child elements
        Array.from(scrollingContent.children).forEach(child => {
            const childWidth = child.getBoundingClientRect().width;
            totalContentWidth += childWidth;
        });

        // Use window.innerWidth to get the viewport width of the entire website
        const viewportWidth = window.innerWidth;
        const buffer = viewportWidth * 0.0020;
        const requiredTranslation = (totalContentWidth + viewportWidth + buffer) / 1.8;
        const translatePercentage = ((-requiredTranslation / viewportWidth) * 100);

        // Set the CSS variable to control the animation
        document.documentElement.style.setProperty('--translateX-percentage', `${translatePercentage}%`);
        restartAnimation();
    }

    function restartAnimation() {
        scrollingContent.classList.remove('animate-slide');
    }

    updateAnimation(); // Initialize the animation
    window.addEventListener('resize', updateAnimation); // Adjust on window resize
});
