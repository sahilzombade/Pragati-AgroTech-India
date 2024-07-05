// Optional: Add JavaScript for form validation or other functionality
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Fetch form data
  const formData = new FormData(contactForm);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  // Replace with your actual logic (e.g., sending data to backend, showing confirmation message)
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // Optional: Reset form after submission
  contactForm.reset();
});
