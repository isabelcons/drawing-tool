let currentTool = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  if (mouseIsPressed) {
    if (currentTool == 1) {
      let skin = random([
        [255, 219, 190],
        [242, 190, 160],
        [224, 160, 130],
        [198, 120, 95]
      ]);
      noStroke();
      fill(skin[0], skin[1], skin[2], 55);
      ellipse(mouseX, mouseY, random(40, 90), random(40, 90));
    }

    else if (currentTool == 2) {
      noStroke();
      fill(random(180, 255), random(90, 170), random(120, 180), 50);
      ellipse(mouseX, mouseY, random(20, 70), random(20, 70));
    }

    else if (currentTool == 3) {
      stroke(random(20, 60), random(10, 40), random(0, 20), 90);
      strokeWeight(random(3, 12));
      line(mouseX, mouseY, mouseX + random(-20, 20), mouseY + random(-60, 60));
    }

    else if (currentTool == 4) {
      noStroke();
      fill(20, 20, 20, 30);
      ellipse(mouseX, mouseY, random(30, 100), random(30, 100));
    }

    else if (currentTool == 5) {
      noStroke();
      fill(random(40, 120), random(80, 180), random(180, 255), 60);
      ellipse(mouseX, mouseY, random(30, 90), random(30, 90));
    }

    else if (currentTool == 6) {
      noStroke();
      fill(random(180, 255), random(60, 140), random(20, 70), 60);
      ellipse(mouseX, mouseY, random(30, 80), random(30, 80));
    }

    else if (currentTool == 7) {
      noStroke();
      fill(0, 40);
      ellipse(mouseX, mouseY, random(8, 25), random(8, 25));
    }

    else if (currentTool == 8) {
      noStroke();
      fill(255, 255, 255, 50);
      ellipse(mouseX, mouseY, random(15, 50), random(15, 50));
    }

    else if (currentTool == 9) {
      noStroke();
      fill(random(150, 220), random(120, 180), random(100, 150), 25);
      ellipse(mouseX + random(-20, 20), mouseY + random(-20, 20), random(40, 120), random(40, 120));
    }

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
  rect(10, 10, 370, 205);

  fill(0);
  textSize(16);

  text("PORTRAIT PAINTING TOOL", 20, 35);
  text("Press keys 1–0 to change brushes", 20, 60);
  text("Press C to clear", 20, 85);

  text("1 skin", 20, 120);
  text("2 blush/pink", 120, 120);
  text("3 hair/brown", 240, 120);

  text("4 shadow", 20, 145);
  text("5 blue", 120, 145);
  text("6 red/orange", 240, 145);

  text("7 detail", 20, 170);
  text("8 highlight", 120, 170);
  text("9 smudge", 240, 170);

  text("0 eraser", 20, 195);
}
