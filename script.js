// Wait for page to load
window.onload = () => {
  const introSection = document.getElementById('introSection');
  const flowerContainer = document.getElementById('flowerContainer');
  const continueButton = document.getElementById('continueButton');
  
  // Remove not-loaded class after a brief delay to start intro animations
  const initialDelay = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(initialDelay);
  }, 500);
  
  // Add click event listener to the continue button
  continueButton.addEventListener('click', () => {
    // Fade out intro section
    introSection.classList.add('fade-out');
    
    // After fade out completes, show flower container
    setTimeout(() => {
      introSection.style.display = 'none';
      flowerContainer.classList.add('show');
      
      // Remove not-loaded class from flower container to start flower animations
      document.body.classList.remove("not-loaded");
    }, 500); // Match the CSS transition duration
  });
};
