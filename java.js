function showLockScreen() {
  var lockScreen = document.getElementById("lockScreen");
  lockScreen.style.display = "flex";
}

function hideLockScreen() {
  var lockScreen = document.getElementById("lockScreen");
  lockScreen.style.display = "none";
}

function checkNumber() {
  var number = document.getElementById("number").value;
  if (number === "21") {
      hideLockScreen();
      // Redirect to the main content or perform other actions
  } else {
      alert("❌ incorrect password.");
  }
}

// Show the lock screen on page load
window.onload = showLockScreen;

// Add event listener to password input field
var numberInput = document.getElementById("number");
numberdInput.addEventListener("input", function() {
  var button = document.querySelector(".lock-screen-content button");
  if (numberInput.value !== "") {
      button.style.display = "block";
  } else {
      button.style.display = "none";
  }
});