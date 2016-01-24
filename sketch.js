/*
  // A loop is structued like this:
  keyword (condition) {
    stuff that happens
  }

  // while loop
  // (condition)
  while (keep going as long as this evaluates to true) {
    // stuff happens
  }

  // for loop:
  // (variable assignment; condition to run while true; change to iterator)
  for(var i = 0; i < 20; i = i+ 1) {
    // stuff happens
  }
*/



function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(0);
  strokeWeight(1);
  stroke(255);
  
  for (var x = 0; x <= width; x = x + random(50)) {
  for (var y = 0; y <= height; y = y + random(50)) {
    fill(random(150), random(150), random(150));
    rect(x, y, 20, 20);
  }
}
}
