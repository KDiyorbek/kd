function showLockScreen() {
  var lockScreen = document.getElementById("lockScreen");
  lockScreen.style.display = "flex";
}

function hideLockScreen() {
  var lockScreen = document.getElementById("lockScreen");
  lockScreen.style.display = "none";
}

function checkPassword() {
  var password = document.getElementById("password").value;
  if (password === "20") {
      hideLockScreen();
      // Redirect to the main content or perform other actions
  } else {
      alert("❌ incorrect password.");
  }
}

// Show the lock screen on page load
window.onload = showLockScreen;

// Add event listener to password input field
var passwordInput = document.getElementById("password");
passwordInput.addEventListener("input", function() {
  var button = document.querySelector(".lock-screen-content button");
  if (passwordInput.value !== "") {
      button.style.display = "block";
  } else {
      button.style.display = "none";
  }
});