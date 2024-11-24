// // Smooth scrolling
// document.addEventListener('DOMContentLoaded', function () {
//     const learnMoreButton = document.querySelector('.btn-learn-more');
//     learnMoreButton.addEventListener('click', function (e) {
//       e.preventDefault();
//       const targetSection = document.querySelector(this.getAttribute('href'));
//       targetSection.scrollIntoView({
//         behavior: 'smooth'
//       });
//     });
//   });
// // // // Smooth Scroll using JavaScript
// // // document.querySelector('.btb-learn-more').addEventListener('click', function (e) {
// // //     e.preventDefault();
  
// // //     const targetId = this.getAttribute("href").substring(1);
// // //     const targetElement = document.getElementById(targetId);
  
// // //     window.scrollTo({
// // //       top: targetElement.offsetTop,
// // //       behavior: "smooth" // Adds smooth scrolling
// // //     });
// // //   });

  // Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Select the "Learn More" button or any other anchor links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    // Add event listener for smooth scroll
    scrollLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
  
        const targetId = this.getAttribute("href").substring(1); // Get the target section ID
        const targetElement = document.getElementById(targetId); // Get the target element
  
        // Smooth scroll to the target section
        window.scrollTo({
          top: targetElement.offsetTop, // Scroll to the top of the section
          behavior: "smooth" // Smooth scroll effect
        });
      });
    });
  });
  
  // Project section

  // Example: Log a message when a project is clicked
document.querySelectorAll('.project-btn a').forEach(button => {
  button.addEventListener('click', () => {
      console.log('Project link clicked:', button.textContent);
  });
});
