background(195, 170, 250);

// let starX = [];
// let starY = [];
// let starAlpha = [];

// for (let i = 0; 1 < 20; i++) {
//   const x = Math.floor(Math.random() * width);
//   const y = Math.floor(Math.random() * height);
//   const alpha = Math.random();

//   starX.push(x);
//   starY.push(y);
//   starAlpha.push(alpha);

//   console.log(starX);
// }

// planet //
fill(50, 50, 50);
ellipse(300, 620, 1000, 450);

// landing platform //
fill(60, 80, 60);
ellipse(440, 440, 200, 80);
fill(70, 90, 70);
ellipse(440, 430, 180, 60);

// spaceship //
push();
translate(0, 10);
fill(0, 0, 0);
ellipse(80, 95, 10, 20);
ellipse(105, 100, 10, 20);
ellipse(175, 100, 10, 20);
ellipse(200, 95, 10, 20);
fill(207, 150, 150, 150);
ellipse(140, 55, 75, 85);
fill(135, 210, 250);
ellipse(140, 80, 160, 40);
pop();
