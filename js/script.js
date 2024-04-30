// // script.js
// document
//   .getElementById("contactForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent form submission

//     // Get form values
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var message = document.getElementById("message").value;

//     // Validate form fields
//     if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
//       document.getElementById("messageStatus").innerHTML =
//         "<p class='error'>Please fill in all fields.</p>";
//       return;
//     }

//     // Send form data to server (replace the URL with your server-side script)
//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", "send_email.php", true);
//     xhr.setRequestHeader("Content-Type", "application/json");
//     xhr.onload = function () {
//       if (xhr.status === 200) {
//         document.getElementById("messageStatus").innerHTML =
//           "<p>Thank you for contacting us. We'll get back to you soon!</p>";
//       } else {
//         document.getElementById("messageStatus").innerHTML =
//           "<p class='error'>Oops! Something went wrong. Please try again later.</p>";
//       }
//     };
//     xhr.send(JSON.stringify({ name: name, email: email, message: message }));
//   });
