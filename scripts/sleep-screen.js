let inactivityTimer;
const sleepScreenPeriod = 60 * 1000 * 3;
const typingPeriod = 60 * 1000;

// Typing animation variables
let index = 0;
const text = "What do you know about computers? Tap to find out . . .";
const typingSpeed = 100; // Typing speed in milliseconds

const sleepScreen = document.getElementById("sleepScreen");

// Event listeners for both touch and mouse interactions
document.addEventListener("click", resetTimer);
document.addEventListener("touchstart", resetTimer);
// document.addEventListener("scroll", resetTimer);

// Ensure the screen shows after 1 minute of inactivity
function showSleepScreen() {
  sleepScreen.style.display = "flex"; // Show the sleep screen
  sleepScreen.classList.remove("hide"); // Reset the position
}

function hideSleepScreen() {
  sleepScreen.classList.add("hide"); // Add class for sliding up
  setTimeout(() => {
    sleepScreen.style.display = "none"; // Fully hide after the animation
  }, 500); // Match the CSS transition duration
}

function resetTimer() {
  clearTimeout(inactivityTimer); // Clear any existing timers
  hideSleepScreen(); // Hide the sleep screen if it's visible

  // Start a new timer that shows the sleep screen after 1 minute
  inactivityTimer = setTimeout(showSleepScreen, sleepScreenPeriod); 
}

function type() {
  const p = sleepScreen.querySelector(".typing");
  if (index < text.length) {
    p.textContent += text.charAt(index);
    index++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(resetTypingAnimation, typingPeriod); // Reset animation after 1 minute
  }
}

// Setup typing animation once DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  const p = document.createElement("p");
  p.classList.add("typing");
  sleepScreen.appendChild(p);
  type();
});

// Reset and restart the typing animation
function resetTypingAnimation() {
  const p = sleepScreen.querySelector(".typing");
  p.textContent = ""; // Clear text content
  index = 0; // Reset the index
  type(); // Restart the typing animation
}
