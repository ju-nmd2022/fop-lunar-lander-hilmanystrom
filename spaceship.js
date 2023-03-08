// ellipse(250, 155, 94, 100);

// ellipse(250, 190, 200, 50);

background(255, 255, 255);
function spaceShip(spaceShipX, spaceShipY, rotation, spaceShipS) {
  push();
  translate(spaceShipX, spaceShipY);
  scale(spaceShipS);
  clear();
  push();
  translate(0, 5);
  rotate(rotation);
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

let spaceShipX = 100;
let spaceShipY = 100;
let rotation = 0;
let speed = 0;

function draw() {
  spaceShip(spaceShipX, spaceShipY, rotation);

  spaceShipX = spaceShipX + Math.sin(rotation) * speed;
  spaceShipY = spaceShipY + Math.cos(rotation) * speed;

  if (keyIsDown(40)) {
    speed = 5;
  } else if (keyIsDown(38)) {
    speed = -5;
  } else {
    speed = 0;
  }
  if (keyIsDown(39)) {
    rotation = rotation - 0.05;
  } else if (keyIsDown(37)) {
    rotation = rotation + 0.05;
  }
}

// function spaceShip(x, y, rotation) {
//   push();
//   translate(x, y);
//   rotate(rotation);
// }

// function draw() {
//   spaceShip(100, 100, 0);
// }
