
    
      document.addEventListener('DOMContentLoaded', function() {
    
        const scrollingContent = document.querySelector('.scrolling-content');
    
        let totalContentWidth = 0;
    
        // Consider using getBoundingClientRect which might provide more precise measurement including sub-pixel calculations
    
        Array.from(scrollingContent.children).forEach(child => {
    
            const childWidth = child.getBoundingClientRect().width;
    
            totalContentWidth += childWidth;
    
        });
    
        const wrapperWidth = document.querySelector('.scrolling-wrapper').getBoundingClientRect().width;
    
        // Ensuring the movement is enough to completely hide the content
    
        // Adding wrapperWidth ensures that the content has moved completely out of the visible area
    
        const buffer = wrapperWidth * 0.0020;
    
        const requiredTranslation = totalContentWidth + wrapperWidth + buffer;
    
        const translatePercentage = ((-requiredTranslation / wrapperWidth) * 100) / 1.992;
    
        document.documentElement.style.setProperty('--translateX-percentage', `${translatePercentage}%`);
    
        });
    

