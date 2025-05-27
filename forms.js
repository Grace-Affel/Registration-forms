document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("forms");
  const messageBox = document.getElementById("message");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Reset message
    messageBox.innerText = "";
    messageBox.style.color = "";

    // Validation checks
    if (password.length < 8) {
      showMessage("Password must be at least 8 characters.", "red");
    } else if (password !== confirmPassword) {
      showMessage("Error", "red");
    } else {
      showMessage("Success!", "green");
      form.reset();
    }
  });

  function showMessage(msg, color) {
    messageBox.innerText = msg;
    messageBox.style.color = color;
    messageBox.style.fontWeight = "bold";
    messageBox.style.marginBottom = "1rem";
  }
});
