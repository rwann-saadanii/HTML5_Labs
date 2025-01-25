const square = document.getElementById("square");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const stopButton = document.getElementById("stop");

// Start Animation
startButton.addEventListener("click", () => {
  square.style.animationPlayState = "running";
});

// Pause Animation
pauseButton.addEventListener("click", () => {
  square.style.animationPlayState = "paused";
});

// Stop Animation
stopButton.addEventListener("click", () => {
  square.style.animation = "none"; // Reset animation
  setTimeout(() => {
    square.style.animation = "moveSquare 8s linear infinite";
    square.style.animationPlayState = "paused"; // Keep it paused
  }, 0);
});
  