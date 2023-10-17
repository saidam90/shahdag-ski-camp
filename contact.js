window.onload = function () {
  var successMessage = document.getElementById("success-message");
  var contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var user_name = document.getElementById("user_name").value;
    var user_email = document.getElementById("user_email").value;
    var contact_number = document.getElementById("contact-number").value;

    // Prepare the data to send to EmailJS
    var emailParams = {
      to_name: "Recipient's Name",
      from_name: user_name, // Sender's name
      from_email: user_email, // Sender's email
      from_number: contact_number, // Sender's contact number
      message: this.message.value,
    };

    emailjs
      .sendForm(
        "service_w6sscrm3",
        "template_6zqabwh",
        emailParams,
        "QjWA_A6PI13I-JfbL"
      )
      .then(
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
