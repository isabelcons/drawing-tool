let currentTool = 1;

let peachColors = [
  [255, 219, 190],
  [242, 190, 160],
  [224, 160, 130],
  [198, 120, 95],
  [150, 85, 65]
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  if (mouseIsPressed) {

    if (currentTool == 1) {
      fill(0);
      noStroke();
      ellipse(mouseX, mouseY, 40, 40);
    }

    else if (currentTool == 2) {
      fill(255, 0, 0, 80);
      noStroke();
      ellipse(mouseX, mouseY, 80, 80);
    }

    else if (currentTool == 3) {
      fill(random(255), random(255), random(255));
      noStroke();
      rect(mouseX, mouseY, 40, 40);
    }

    else if (currentTool == 4) {
      stroke(0);
      for (let i = 0; i < 30; i++) {
        point(mouseX + random(-20, 20), mouseY + random(-20, 20));
      }
    }

    else if (currentTool == 5) {
      fill(random(255), 0, random(255));
      noStroke();
      rect(mouseX + random(-50, 50), mouseY + random(-50, 50), random(20, 120), random(10, 60));
    }

    else if (currentTool == 6) {
      fill(0, 100, 255);
      noStroke();
      ellipse(mouseX, mouseY, 40, 40);
      ellipse(width - mouseX, mouseY, 40, 40);
    }

    else if (currentTool == 7) {
      strokeWeight(10);
      stroke(0);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }

    else if (currentTool == 8) {
      fill(random(255), random(255), random(255));
      noStroke();
      triangle(mouseX, mouseY, mouseX + random(-50, 50), mouseY + random(-50, 50), mouseX + random(-50, 50), mouseY + random(-50, 50));
    }

    else if (currentTool == 9) {
      for (let i = 0; i < 100; i++) {
        stroke(random(255));
        point(mouseX + random(-50, 50), mouseY + random(-50, 50));
      }
    }

    else if (currentTool == 0) {
      fill(255);
      noStroke();
      ellipse(mouseX, mouseY, 80, 80);
    }

    // letter tools
    if (keyIsDown(65)) { // A skin
      let c = random(peachColors);
      noStroke();
      fill(c[0], c[1], c[2], 70);
      ellipse(mouseX, mouseY, random(40, 90), random(40, 90));
    }

    if (keyIsDown(72)) { // H hair
      stroke(random(20, 60), random(10, 40), random(5, 20), 90);
      strokeWeight(random(3, 12));
      line(mouseX, mouseY, mouseX + random(-25, 25), mouseY + random(-60, 60));
    }

    if (keyIsDown(69)) { // E detail
      fill(90, 50);
      noStroke();
      ellipse(mouseX, mouseY, random(8, 22), random(8, 22));
    }

    if (keyIsDown(76)) { // L lips
      noStroke();
      fill(random(160, 220), random(70, 120), random(90, 130), 80);
      ellipse(mouseX, mouseY, random(30, 70), random(10, 25));
    }
  }

  drawUI();
}

function keyPressed() {
  if (key >= '0' && key <= '9') {
    currentTool = int(key);
  }

  if (key == 'c' || key == 'C') {
    background(255);
  }
}

function drawUI() {
  fill(255);
  noStroke();
  rect(10, 10, 340, 205);

  fill(0);
  textSize(16);

  text("DRAWING TOOL", 20, 35);
  text("Press keys 1–0 to change tools", 20, 60);
  text("Hold A, H, E, or L for portrait colors", 20, 85);
  text("Press C to clear", 20, 110);

  text("1 circles", 20, 140);
  text("2 transparent", 120, 140);
  text("3 squares", 240, 140);

  text("4 spray", 20, 160);
  text("5 glitch", 120, 160);
  text("6 mirror", 240, 160);

  text("7 lines", 20, 180);
  text("8 triangles", 120, 180);
  text("9 noise", 240, 180);

  text("0 eraser", 20, 200);
  text("A skin", 120, 200);
  text("H hair", 240, 200);

  text("E soft detail", 20, 220);
  text("L lips", 150, 220);
}
