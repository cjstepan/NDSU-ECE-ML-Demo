let inactivityTimer;

const sleepScreen = document.getElementById("sleepScreen");

function showSleepScreen() {
  sleepScreen.style.display = "flex"; // Show the sleep screen
  sleepScreen.classList.remove("hide"); // Remove the hide class to reset position
}

function hideSleepScreen() {
  sleepScreen.classList.add("hide"); // Add the hide class to slide up
  setTimeout(() => {
    sleepScreen.style.display = "none"; // Hide the element after the animation
  }, 500); // Match this duration to the transition duration in CSS
}

function resetTimer() {
  clearTimeout(inactivityTimer);
  hideSleepScreen(); // Hide the sleep screen on activity
  inactivityTimer = setTimeout(showSleepScreen, 60 * 1000); // 1 minute
}

// Initial timer setup
inactivityTimer = setTimeout(showSleepScreen, 60 * 1000); // Show after 1 minute
document.addEventListener("click", resetTimer);
document.addEventListener("touchstart", resetTimer);

let index = 0;
const text = "What do you know about computers? Tap to find out . . .";
const typingSpeed = 100; // Adjust typing speed here (in milliseconds)

function type() {
  const sleepScreen = document.getElementById("sleepScreen");
  const p = sleepScreen.querySelector(".typing");
  if (index < text.length) {
    p.textContent += text.charAt(index);
    index++;
    setTimeout(type, typingSpeed);
  } else {
    // Reset typing animation every minute
    setTimeout(resetTypingAnimation, 60 * 1000);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const sleepScreen = document.getElementById("sleepScreen");
  const p = document.createElement("p");
  p.classList.add("typing");
  sleepScreen.appendChild(p);
  type();
});

function resetTypingAnimation() {
  const p = sleepScreen.querySelector(".typing");
  p.textContent = ""; // Clear the text content
  index = 0; // Reset the index
  type(); // Restart the typing animation
}