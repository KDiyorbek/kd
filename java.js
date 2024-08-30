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
      alert("❌ incorrect password.  try another one");
  }
}

// Show the lock screen on page load
window.onload = showLockScreen;