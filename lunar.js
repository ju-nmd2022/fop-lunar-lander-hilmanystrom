function setup() {
  createCanvas(700, 650);
}

// background(195, 170, 250);
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
  fill(70, 70, 70);
  ellipse(80, 400, 100, 30);
  fill(70, 70, 70);
  ellipse(200, 440, 140, 30);
  fill(70, 70, 70);
  ellipse(250, 340, 140, 30);
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

for (let i = 0; i < 800; i++) {
  const x = Math.floor(Math.random() * 700);
  const y = Math.floor(Math.random() * 650);
  const alpha = Math.random();

  starX.push(x);
  starY.push(y);
  starAlpha.push(alpha);
}

function startScreen() {
  background(180, 255, 210);

  fill(0, 0, 0);
  textSize(20);
  text("Help me land my spacheship!!", 145, 200, [250, 250]);
  textSize(20);
  text(
    "But be careful, if it lands too fast the ship will crash...",
    70,
    220,
    [250, 250]
  );

  fill(50, 255, 50);
  rect(210, 280, 160, 60);
  fill(0, 0, 0);
  text("Start game", 240, 300, [250, 250]);
}

function gameScreen() {
  noStroke();
  background(195, 170, 250);

  for (let index in starX) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 3);
    starAlpha[index] = starAlpha[index] + 0.02;
  }

  spaceShipX = spaceShipX + speedX;

  stroke(0);
  planet(0, 200, 1);

  if (isGameActive) {
    spaceShipY = spaceShipY + velocity;
    velocity = velocity + acceleration;
    if (keyIsDown(39)) {
      speedX = 5;
    } else if (keyIsDown(37)) {
      speedX = -5;
    } else {
      speedX = 0;

      if (keyIsDown(38)) {
        velocity = velocity - 0.2;
      }
    }
  }

  if (
    spaceShipY >= 460 &&
    spaceShipX > 260 &&
    spaceShipX < 340 &&
    velocity <= 5
  ) {
    state = "win";
  } else if (spaceShipY > 480) {
    state = "lose";
  }
  console.log(state);
}

function winScreen() {
  background(0, 255, 0);
  textSize(20);
  fill(0, 0, 0);
  text("Good job, you won!", 200, 220, [200, 200]);
  fill(255, 255, 255);
  rect(210, 280, 160, 60);
  fill(0, 0, 0);
  text("Play again", 240, 300, [250, 250]);
}

function loseScreen() {
  background(255, 0, 0);
  textSize(16);
  fill(0, 0, 0);
  text(
    "You weren't careful enough and now the spaceship has crashed, you lose :(",
    40,
    200,
    [200, 200]
  );
  fill(255, 255, 255);
  rect(210, 280, 160, 60);
  fill(0, 0, 0);
  text("Play again", 240, 300, [250, 250]);
}

let state = "start";
let isGameActive = true;
let spaceShipX = 0;
let spaceShipY = 0;
let speedX = 0;
let velocity = 1;
let acceleration = 0.1;
let startButtonClicked = false;
let playAgainButtonClicked = false;

function mousePressed() {
  if (state === "start") {
    if (
      mouseX > 210 &&
      mouseX < 210 + 160 &&
      mouseY > 280 &&
      mouseY < 280 + 80
    ) {
      startButtonClicked = true;
      state = "game";
    }
  }
  if (state === "win" || state === "lose") {
    if (
      mouseX > 210 &&
      mouseX < 210 + 160 &&
      mouseY > 280 &&
      mouseY < 280 + 80
    ) {
      playAgainButtonClicked = true;
      isGameActive = true;
      spaceShipX = 0;
      spaceShipY = 0;
      speedX = 0;
      velocity = 1;
      acceleration = 0.1;
      state = "game";
    }
  }
}

function draw() {
  if (state === "start") {
    startScreen();
    spaceShip(20, 50, 0.7);
  } else if (state === "game") {
    gameScreen();
    spaceShip(spaceShipX, spaceShipY);
  } else if (state === "win") {
    winScreen();
  } else if (state === "lose") {
    loseScreen();
  }
}
