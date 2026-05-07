let skinMode = false;
let peachColors = [
  [255, 219, 190],
  [242, 190, 160],
  [224, 160, 130],
  [198, 120, 95],
  [150, 85, 65]
];

let currentTool = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {

  if (mouseIsPressed) {

    // TOOL 1 — black circles
    if (currentTool == 1) {
      fill(0);
      noStroke();
      ellipse(mouseX, mouseY, 40, 40);
    }

    // TOOL 2 — transparent red
    else if (currentTool == 2) {
      fill(255, 0, 0, 80);
      noStroke();
      ellipse(mouseX, mouseY, 80, 80);
    }

    // TOOL 3 — random colored squares
    else if (currentTool == 3) {
      fill(random(255), random(255), random(255));
      noStroke();
      rect(mouseX, mouseY, 40, 40);
    }

    // TOOL 4 — spray paint
    else if (currentTool == 4) {
      stroke(0);

      for (let i = 0; i < 30; i++) {
        point(
          mouseX + random(-20, 20),
          mouseY + random(-20, 20)
        );
      }
    }

    // TOOL 5 — glitch blocks
    else if (currentTool == 5) {
      fill(random(255), 0, random(255));
      noStroke();

      rect(
        mouseX + random(-50, 50),
        mouseY + random(-50, 50),
        random(20, 120),
        random(10, 60)
      );
    }

    // TOOL 6 — mirrored drawing
    else if (currentTool == 6) {
      fill(0, 100, 255);
      noStroke();

      ellipse(mouseX, mouseY, 40, 40);
      ellipse(width - mouseX, mouseY, 40, 40);
    }

    // TOOL 7 — thick lines
    else if (currentTool == 7) {
      strokeWeight(10);
      stroke(0);

      line(mouseX, mouseY, pmouseX, pmouseY);
    }

    // TOOL 8 — random triangles
    else if (currentTool == 8) {
      fill(random(255), random(255), random(255));
      noStroke();

      triangle(
        mouseX,
        mouseY,
        mouseX + random(-50, 50),
        mouseY + random(-50, 50),
        mouseX + random(-50, 50),
        mouseY + random(-50, 50)
      );
    }

    // TOOL 9 — static/noise
    else if (currentTool == 9) {

      for (let i = 0; i < 100; i++) {
        stroke(random(255));

        point(
          mouseX + random(-50, 50),
          mouseY + random(-50, 50)
        );
      }
    }

// TOOL A — peach portrait brush
if (keyIsDown(65) && mouseIsPressed) {
  let c = random(peachColors);
  fill(c[0], c[1], c[2], 90);
  noStroke();
  ellipse(mouseX, mouseY, random(25, 70), random(20, 60));
}

// TOOL H — hair brush
if (keyIsDown(72) && mouseIsPressed) {
  stroke(random(20, 80));
  strokeWeight(random(2, 8));
  line(mouseX, mouseY, mouseX + random(-30, 30), mouseY + random(-30, 30));
}

// TOOL E — eye/detail brush
if (keyIsDown(69) && mouseIsPressed) {
  fill(0);
  noStroke();
  ellipse(mouseX, mouseY, 12, 8);
  fill(255);
  ellipse(mouseX + 3, mouseY - 2, 3, 3);
}

// TOOL L — lip brush
if (keyIsDown(76) && mouseIsPressed) {
  fill(180, 60, 70, 90);
  noStroke();
  ellipse(mouseX, mouseY, random(25, 60), random(8, 20));
}

    // TOOL 0 — eraser
    else if (currentTool == 0) {
      fill(255);
      noStroke();

      ellipse(mouseX, mouseY, 80, 80);
    }
  }

  drawUI();
}

function keyPressed() {

if (key == 'p' || key == 'P') {
  skinMode = !skinMode;
}

  if (key >= '0' && key <= '9') {
    currentTool = int(key);
  }

  // clear canvas
  if (key == 'c' || key == 'C') {
    background(255);
  }
}

function drawUI() {

  fill(255);
  noStroke();
  rect(10, 10, 320, 140);

  fill(0);
  textSize(16);

  text("DRAWING TOOL", 20, 35);
  text("Press keys 1–0 to change tools", 20, 60);
  text("Press C to clear", 20, 85);

  text("1 circles", 20, 115);
  text("2 transparent", 120, 115);
  text("3 squares", 220, 115);

  text("4 spray", 20, 135);
  text("5 glitch", 120, 135);
  text("6 mirror", 220, 135);

  text("7 lines", 20, 155);
  text("8 triangles", 120, 155);
  text("9 noise", 220, 155);

text("A portrait skin", 120, 175);
text("H hair", 20, 195);
text("E eyes/details", 120, 195);
text("L lips", 250, 195);

  text("0 eraser", 20, 175);
}
