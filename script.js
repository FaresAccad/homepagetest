<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Coding with Robby</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <div class="scrolling-wrapper">

      <div class="scrolling-content">
    
        <img src=https://raw.githubusercontent.com/moufidayoubi/Clients-Partners-Logos/main/Eagle_Alpha_Logo.png alt="Client Logo 1">
    
        <img src=https://raw.githubusercontent.com/moufidayoubi/Clients-Partners-Logos/main/Kamba%20Logo_Transparent_white%202.png alt="Client Logo 4">
     
        <img src=https://raw.githubusercontent.com/moufidayoubi/Clients-Partners-Logos/main/Neudata%20Logo_transparent.png alt="Client Logo 2">
       <img src=https://raw.githubusercontent.com/moufidayoubi/Clients-Partners-Logos/main/Snowflake%20Logo.png alt="Client Logo 6">
    
       <img src=https://raw.githubusercontent.com/moufidayoubi/Clients-Partners-Logos/main/battlefin-logo-horiz.png alt="Client Logo 3" style="height: 8vh; width: auto; top:1.5vh; position: relative;">
    
       <img src=https://raw.githubusercontent.com/moufidayoubi/Clients-Partners-Logos/main/png-transparent-databricks-white-logo-tech-companies.png alt="Client Logo 5">
        
       <img src=https://raw.githubusercontent.com/moufidayoubi/Clients-Partners-Logos/main/AWS%20FINAL%20LOGO.png alt="Client Logo 7">
       <img src=https://raw.githubusercontent.com/moufidayoubi/Clients-Partners-Logos/main/Eagle_Alpha_Logo.png alt="Client Logo 1">
    
       <img src=https://raw.githubusercontent.com/moufidayoubi/Clients-Partners-Logos/main/Kamba%20Logo_Transparent_white%202.png alt="Client Logo 4">
    
       <img src=https://raw.githubusercontent.com/moufidayoubi/Clients-Partners-Logos/main/Neudata%20Logo_transparent.png alt="Client Logo 2">
      <img src=https://raw.githubusercontent.com/moufidayoubi/Clients-Partners-Logos/main/Snowflake%20Logo.png alt="Client Logo 6">
   
      <img src=https://raw.githubusercontent.com/moufidayoubi/Clients-Partners-Logos/main/battlefin-logo-horiz.png alt="Client Logo 3" style="height: 8vh; width: auto; top:1.5vh; position: relative;">
   
      <img src=https://raw.githubusercontent.com/moufidayoubi/Clients-Partners-Logos/main/png-transparent-databricks-white-logo-tech-companies.png alt="Client Logo 5">
       
      <img src=https://raw.githubusercontent.com/moufidayoubi/Clients-Partners-Logos/main/AWS%20FINAL%20LOGO.png alt="Client Logo 7">
      </div>
    
    </div>
    
    <script>
    
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
    
    </script>
  </body>

</html>
