

const canvas = document.getElementById("blurCanvas");
const ctx = canvas.getContext("2d");
let coord = { x: 0, y: 0 };
let cycleCounter = 0;

document.addEventListener("mousemove", start);
document.addEventListener("mouseup", stop);
window.addEventListener("resize", resize);

resize();

function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}
function reposition(event) {
  coord.x = event.clientX - canvas.offsetLeft;
  coord.y = event.clientY - canvas.offsetTop;
}
function start(event) {
  document.addEventListener("mousemove", draw);
  reposition(event);
}
function stop() {
  document.removeEventListener("mousemove", draw);
}
function draw(event) {
    cycleCounter++;
  ctx.beginPath();
  ctx.arc(coord.x, coord.y, 200, 0, Math.PI * 2);
ctx.fillStyle = "rgba(0,0,0,0.01)";
ctx.fill();
  ctx.moveTo(coord.x, coord.y);
  reposition(event);
  ctx.lineTo(coord.x, coord.y);
  if (cycleCounter == 200) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
        cycleCounter = 0;
  }
}