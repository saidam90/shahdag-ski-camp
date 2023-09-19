$("#contactForm").submit(function (event) {
  /* stop form from submitting normally */
  event.preventDefault();

  /* get some values from elements on the page: */
  var $form = $(this),
    $submit = $form.find('button[type="submit"]'),
    name_value = $form.find('input[name="name"]').val(),
    email_value = $form.find('input[name="email"]').val(),
    message_value = $form.find('textarea[name="message"]').val(),
    url = $form.attr("action");

  /* Send the data using post */
  var posting = $.post(url, {
    name: name_value,
    email: email_value,
    message: message_value,
  });

  posting.done(function (data) {
    /* Put the results in a div */
    $("#contactResponse").html(data);

    /* Change the button text. */
    $submit.text("Sent, Thank you");

    /* Disable the button. */
    $submit.attr("disabled", true);
  });
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Extract form data
    const formData = new FormData(event.target);

    // You can use the Fetch API to send the form data to the server
    fetch("contact.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((message) => {
        // Display the message on the page
        document.getElementById(
          "contactResponse"
        ).innerHTML = `<p>${message}</p>`;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
