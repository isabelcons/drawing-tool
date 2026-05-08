let currentTool = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  if (mouseIsPressed) {

    // TOOL 1 — black drawing brush
    if (currentTool == 1) {
      fill(0);
      noStroke();
      ellipse(mouseX, mouseY, 40, 40);
    }

    // TOOL 2 — skin / peach tones
    else if (currentTool == 2) {
      let skinColors = [
        [255, 219, 190],
        [242, 190, 160],
        [224, 160, 130],
        [198, 120, 95],
        [150, 85, 65]
      ];

      let c = random(skinColors);

      noStroke();
      fill(c[0], c[1], c[2], 65);
      ellipse(mouseX, mouseY, random(35, 80), random(35, 80));
    }

    // TOOL 3 — brown / hair tones
    else if (currentTool == 3) {
      stroke(random(30, 90), random(15, 55), random(5, 30), 100);
      strokeWeight(random(3, 10));

      line(
        mouseX,
        mouseY,
        mouseX + random(-25, 25),
        mouseY + random(-55, 55)
      );
    }

    // TOOL 4 — pink / blush tones
    else if (currentTool == 4) {
      noStroke();
      fill(random(190, 255), random(90, 160), random(120, 180), 55);
      ellipse(mouseX, mouseY, random(25, 65), random(25, 65));
    }

    // TOOL 5 — blue painterly tones
    else if (currentTool == 5) {
      noStroke();
      fill(random(40, 120), random(90, 180), random(180, 255), 70);
      ellipse(mouseX, mouseY, random(30, 75), random(30, 75));
    }

    // TOOL 6 — red / orange tones
    else if (currentTool == 6) {
      noStroke();
      fill(random(180, 255), random(60, 140), random(20, 80), 65);
      ellipse(mouseX, mouseY, random(30, 75), random(30, 75));
    }

    // TOOL 7 — soft shadow
    else if (currentTool == 7) {
      noStroke();
      fill(0, 35);
      ellipse(mouseX, mouseY, random(20, 70), random(20, 70));
    }

    // TOOL 8 — white highlight
    else if (currentTool == 8) {
      noStroke();
      fill(255, 255, 255, 70);
      ellipse(mouseX, mouseY, random(15, 45), random(15, 45));
    }

    // TOOL 9 — soft smudge / blending tone
    else if (currentTool == 9) {
      noStroke();
      fill(random(160, 220), random(120, 180), random(100, 150), 30);
      ellipse(
        mouseX + random(-15, 15),
        mouseY + random(-15, 15),
        random(40, 100),
        random(40, 100)
      );
    }

    // TOOL 0 — eraser
    else if (currentTool == 0) {
      noStroke();
      fill(255);
      ellipse(mouseX, mouseY, 80, 80);
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
  rect(10, 10, 370, 210);

  fill(0);
  textSize(16);

  text("DRAWING TOOL", 20, 35);
  text("Press keys 1–0 to change brushes", 20, 60);
  text("Press C to clear", 20, 85);

  text("1 black", 20, 120);
  text("2 skin", 120, 120);
  text("3 brown/hair", 220, 120);

  text("4 pink", 20, 145);
  text("5 blue", 120, 145);
  text("6 red/orange", 220, 145);

  text("7 shadow", 20, 170);
  text("8 highlight", 120, 170);
  text("9 smudge", 220, 170);

  text("0 eraser", 20, 195);
}
