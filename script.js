document.addEventListener('DOMContentLoaded', function() {
    const scrollingContent = document.querySelector('.scrolling-content');
    let totalContentWidth = 0;

    Array.from(scrollingContent.children).forEach(child => {
        const childWidth = child.getBoundingClientRect().width;
        totalContentWidth += childWidth;
    });

    const wrapperWidth = document.querySelector('.scrolling-wrapper').getBoundingClientRect().width;
    const halfContentWidth = totalContentWidth / 2;  // Calculate half the total width of the logos
    const requiredTranslation = halfContentWidth + wrapperWidth;  // Adjust so it includes the viewport width

    const translatePercentage = (-requiredTranslation / wrapperWidth) * 100;

    document.documentElement.style.setProperty('--translateX-percentage', `${translatePercentage}%`);
});
