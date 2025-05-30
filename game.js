
// Basic framework - replace with your game logic
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let currentLevel = 0;
const totalLevels = 10;
const levels = [];

// Create basic placeholder levels with different colors
for (let i = 0; i < totalLevels; i++) {
  levels.push(() => {
    ctx.fillStyle = `hsl(${(i * 36) % 360}, 100%, 20%)`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff";
    ctx.font = "36px monospace";
    ctx.fillText("Level " + (i + 1), 400, 320);
    ctx.fillText("Press SPACE to continue", 280, 380);
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  levels[currentLevel]();
}

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    currentLevel = (currentLevel + 1) % totalLevels;
    draw();
  }
});

draw();
