// Navigation active link on scroll
const sections = document.querySelectorAll(".content-section, .home-section"); // Select only the main sections
const navLinks = document.querySelectorAll(".navbar a");

function activateNavLink() {
  let currentSectionIndex = 0;

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop - 70; // Adjusted for navbar height
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSectionIndex = index;
    }
  });

  navLinks.forEach((link) => link.classList.remove("active"));
  if (navLinks[currentSectionIndex]) {
    navLinks[currentSectionIndex].classList.add("active");
  }
}

document.addEventListener("scroll", activateNavLink);

// Get elements
const watchVideoLinks = document.querySelectorAll('.watch-video');
const videoContainer = document.getElementById('video-container');
const tutorialVideo = document.getElementById('tutorial-video');
const closeVideoButton = document.getElementById('close-video');

// Open video container on "Watch Video" click
watchVideoLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const videoSrc = this.getAttribute('data-video');
    tutorialVideo.setAttribute('src', videoSrc);
    videoContainer.style.display = 'flex';
    tutorialVideo.play();
  });
});

// Close video container on "Close" button click
closeVideoButton.addEventListener('click', function() {
  videoContainer.style.display = 'none';
  tutorialVideo.pause();
  tutorialVideo.removeAttribute('src'); // Stop video from playing
});

 // Add 'active' class to navbar links on scroll
 document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section, .home-section, .content-section");
  const navLinks = document.querySelectorAll(".navbar .nav-link");

  let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 60; // Adjust for navbar height
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach((link) => link.classList.remove("active")); // Remove active class
      const activeLink = document.querySelector(`.navbar .nav-link[href="#${section.id}"]`);
      if (activeLink) {
        activeLink.classList.add("active"); // Add active class
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const questions = document.querySelectorAll(".faq-list li");
  const answerContainer = document.getElementById("faq-answer");

  questions.forEach(question => {
    question.addEventListener("click", function() {
      questions.forEach(q => q.classList.remove("active"));
      question.classList.add("active");

      const questionKey = question.getAttribute("data-question");
      answerContainer.innerHTML = answers[questionKey] || "Answer not available.";
    });
  });
});

const answers = {
  q1: `
    <h3>How do I reserve a parking space?</h3>
    <p>To reserve a parking space, simply log into the app, select your location, choose your desired parking area, and select your preferred time slot. Confirm the reservation, and you’ll receive a confirmation with your parking details.</p>
  `,
  q2: `
    <h3>What payment methods are accepted?</h3>
    <p>Since its Mobile, Its better to have a E-Wallet Payments</p>
    <ul>
      <li>Mobile E-Payments (Paypal)</li>
    </ul>
    <p>All transactions are secure and encrypted to protect your information.</p>
  `,
  q3: `
    <h3>Can I modify or cancel my parking reservation?</h3>
    <h2>No, Our System's Motto is 'Time is Gold', thats why When Reservation, we have all the time Estimated</h2>
    <h2>You can't modify or cancel your parking reservation once it's confirmed. Please ensure you have the correct details before confirming</h2>
  `,
  q4: `
    <h3>How does the Smart Parking System work?</h3>
    <p><strong>Our Smart Parking uses sensors to detect available parking spaces and provides real-time information to drivers, allowing them to easily locate the vacant spots.</strong></p>
    <p>Tips for Using the Smart Parking System:</p>
    <ol>
      <li><strong>Plan Ahead:</strong> To ensure availability, we recommend reserving your parking space in advance, especially during peak hours.</li>
      <li><strong>Follow Instructions:</strong> Pay attention to signage and follow instructions from our system to easily locate and access your reserved parking space.</li>
      <li><strong>Contact Support:</strong> If you encounter any issues or have questions about our Smart Parking System, feel free to reach out to our customer support team for assistance.</li>
    </ol>
    <p>We hope this information helps enhance your parking experience with our Smart Parking System. If you need further assistance, please don't hesitate to contact us.</p>
  `
};
