// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
  
  // Select all timeline cards
  const cards = document.querySelectorAll('.timeline-card');

  // Create an Intersection Observer
  // This watches when elements enter the screen
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // If the card is in view
      if (entry.isIntersecting) {
        // Add the 'show' class to trigger CSS animation
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.2 // Trigger when 20% of the card is visible
  });

  // Tell the observer to watch every card
  cards.forEach(card => {
    observer.observe(card);
  });
});