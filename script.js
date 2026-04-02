// Greeting popup when site loads
window.onload = function() {
  alert("Welcome to my website!");
};

// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Example dynamic greeting based on time of day
function showGreeting() {
  const now = new Date();
  const hour = now.getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good morning!";
  } else if (hour < 18) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }

  document.getElementById("greeting").innerText = greeting;
}
