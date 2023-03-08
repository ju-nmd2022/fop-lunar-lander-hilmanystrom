background(195, 170, 250);

// planet & landing plattform//
function planet(planetX, planetY) {
  push();

  translate(planetX, planetY);
  fill(50, 50, 50);
  ellipse(300, 550, 1000, 450);
  fill(60, 80, 60);
  ellipse(440, 380, 200, 80);
  fill(70, 90, 70);
  ellipse(440, 370, 180, 60);
  pop();
}

// spaceship //
function spaceShip(spaceShipX, spaceShipY, spaceShipS) {
  push();
  translate(spaceShipX, spaceShipY);
  scale(spaceShipS);
  push();
  translate(0, 5);
  fill(240, 100, 255);
  ellipse(80, 95, 10, 20);
  ellipse(105, 100, 10, 20);
  ellipse(175, 100, 10, 20);
  ellipse(200, 95, 10, 20);
  fill(207, 150, 150);
  ellipse(140, 55, 75, 85);
  fill(135, 210, 250);
  ellipse(140, 80, 160, 40);
  pop();
  pop();
}

let starX = [];
let starY = [];
let starAlpha = [];

for (let i = 0; i < 400; i++) {
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  const alpha = Math.random();

  starX.push(x);
  starY.push(y);
  starAlpha.push(alpha);
}

function draw() {
  noStroke();
  background(195, 170, 250);

  for (let index in starX) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 3);
    starAlpha[index] = starAlpha[index] + 0.02;
  }
  stroke(0);
  spaceShip(0, 0, 1);
  planet(0, 0, 1);
}
