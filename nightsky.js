let starX = [];
let starY = [];
let starAlpha = [];

for (let i = 0; i < 20; i++) {
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  const alpha = Math.random();

  starX.push(x);
  starY.push(y);
  starAlpha.push(alpha);
}

console.log(starX);

function draw() {
  noStroke();
  background(0, 0, 0);

  fill(255, 255, 255);
  for (let index in starX) {
    ellipse(starX[index], starY[index], 4);
  }
}
