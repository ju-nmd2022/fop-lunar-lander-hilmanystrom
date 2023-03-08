background(180, 255, 210);

text("Help me land my spacheship!!", 120, 200, [250, 250]);
text(
  "But be careful, if it lands too fast the ship will crash...",
  70,
  220,
  [250, 250]
);

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

function draw() {
  spaceShip(20, 50, 0.7);
}
