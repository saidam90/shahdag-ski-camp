window.onload = function () {
  var successMessage = document.getElementById("success-message");
  var contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Generate a five-digit number for the contact_number variable
    this.contact_number.value = (Math.random() * 100000) | 0;

    emailjs.sendForm("service_i5pbl8w", "template_e8m6jsl", this).then(
      function (response) {
        console.log("Email sent successfully:", response);
        // Display the success message
        successMessage.textContent =
          "Thank you for your message! We will get back to you soon.";
        successMessage.style.color = "green"; // You can style the success message here
        successMessage.style.display = "block"; // Make the success message visible

        // Optionally, clear the form inputs
        contactForm.reset();
      },
      function (error) {
        console.error("Email sending failed:", error);
        // Handle the error, display an error message, or take appropriate action.
      }
    );
  });
};
