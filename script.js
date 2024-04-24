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
        document.styleSheets[0].insertRule(keyframes, document.styleSheets[0].cssRules.length);
      }

      document.addEventListener("DOMContentLoaded", updateAnimation);
      window.onresize = updateAnimation;

    </script>
