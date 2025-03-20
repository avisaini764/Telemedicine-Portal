document.addEventListener('DOMContentLoaded', function() {
  
    // Handle appointment booking
    const appointmentForm = document.getElementById('appointment-form');
    const confirmationMessage = document.getElementById('confirmation');
    
    appointmentForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const date = document.getElementById('date').value;
      const doctor = document.getElementById('doctor').value;
      
      // Show confirmation
      confirmationMessage.style.display = 'block';
      
      // Optionally: You could handle the form data (e.g., save to a database)
      console.log(`Appointment booked by ${name} for ${doctor} on ${date}. Email: ${email}`);
      
      // Clear the form
      appointmentForm.reset();
    });
    
    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const contactName = document.getElementById('contact-name').value;
      const contactMessage = document.getElementById('contact-message').value;
      
      console.log(`Message from ${contactName}: ${contactMessage}`);
      
      alert('Your message has been sent! We will get back to you shortly.');
      contactForm.reset();
    });
  });
  