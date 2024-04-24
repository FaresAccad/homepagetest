document.addEventListener('DOMContentLoaded', function() {
    const scrollingContent = document.querySelector('.scrolling-content');
    const wrapperWidth = document.querySelector('.scrolling-wrapper').getBoundingClientRect().width;

    function updateAnimation() {
        let totalContentWidth = 0;

        Array.from(scrollingContent.children).forEach(child => {
            const childWidth = child.getBoundingClientRect().width;
            totalContentWidth += childWidth;
        });

        const buffer = wrapperWidth * 0.0020;
        const requiredTranslation = (totalContentWidth / 4) + wrapperWidth + buffer;
        const translatePercentage = ((-requiredTranslation / wrapperWidth) * 100);

        document.documentElement.style.setProperty('--translateX-percentage', `${translatePercentage}%`);
    }

    updateAnimation(); // Call on initial load

    window.addEventListener('resize', updateAnimation); // Adjust on window resize
});
