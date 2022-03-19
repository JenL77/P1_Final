function setup() {
//createCanvas(windowWidth, windowHeight);
var canvas = createCanvas(windowWidth,windowHeight);
//background (255, 0, 200);
canvas.position(0,0);
canvas.style('z-index', -1);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
}
