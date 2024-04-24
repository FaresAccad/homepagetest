function updateAnimation() {
    const scrollingContent = document.querySelector('.scrolling-content');
    const totalWidth = scrollingContent.scrollWidth * 3.074;
    const viewportWidth = window.innerWidth;
    const keyframes = `
      @keyframes slide {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-${totalWidth - viewportWidth}px);
        }
      }
    `;
    let styleSheet = document.getElementById('dynamic-animation-styles');
      if (!styleSheet) {
        styleSheet = document.createElement('style');
        styleSheet.type = 'text/css';
        styleSheet.id = 'dynamic-animation-styles';
        document.head.appendChild(styleSheet);
      }
      
      // Inject the new keyframes into the stylesheet
      styleSheet.innerText = keyframes;
      
      // Re-apply the animation style to make it take effect
      scrollingContent.style.animation = 'none'; // Reset the animation
      requestAnimationFrame(() => {
        scrollingContent.style.animation = '10s slide infinite linear'; // Restart the animation
      });
    }

    // Event listener to handle page load
        document.addEventListener("DOMContentLoaded", updateAnimation);

        // Event listener to handle window resize
        window.onresize = updateAnimation;
