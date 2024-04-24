document.addEventListener('DOMContentLoaded', function() {
    const scrollingContent = document.querySelector('.scrolling-content');
    const wrapper = document.querySelector('.scrolling-wrapper');

    function updateAnimation() {
        let totalContentWidth = 0;

        Array.from(scrollingContent.children).forEach(child => {
            const childWidth = child.getBoundingClientRect().width;
            totalContentWidth += childWidth;
        });

        const wrapperWidth = wrapper.getBoundingClientRect().width;
        const buffer = wrapperWidth * 0.0020;
        const requiredTranslation = (totalContentWidth / 2) + wrapperWidth + buffer;
        const translatePercentage = ((-requiredTranslation / wrapperWidth) * 100);

        document.documentElement.style.setProperty('--translateX-percentage', `${translatePercentage}%`);
        restartAnimation();
    }

    function restartAnimation() {
        scrollingContent.classList.remove('animate-slide');
        setTimeout(() => {
            scrollingContent.classList.add('animate-slide');
        }, 50); // Wait 50 milliseconds before restarting the animation
    }

    updateAnimation(); // Call on initial load
    window.addEventListener('resize', updateAnimation); // Adjust on window resize
    });
