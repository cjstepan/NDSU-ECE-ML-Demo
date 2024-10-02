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
        inactivityTimer = setTimeout(showSleepScreen, 5 * 60 * 1000); // 5 minutes
      }

      // Event listeners to detect user activity
      //   document.addEventListener("mousemove", resetTimer);
      document.addEventListener("keypress", resetTimer);
      document.addEventListener("click", resetTimer);
      document.addEventListener("touchstart", resetTimer);

      // Initial timer setup
      inactivityTimer = setTimeout(showSleepScreen, 5 * 60 * 1000); // Show after 5 minutes