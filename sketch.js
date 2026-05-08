function draw() {

  if (mouseIsPressed) {

    // TOOL 1 — soft skin tones
    if (currentTool == 1) {

      let skin = random([
        [255,219,190],
        [242,190,160],
        [224,160,130],
        [198,120,95]
      ]);

      noStroke();
      fill(skin[0], skin[1], skin[2], 55);

      ellipse(
        mouseX,
        mouseY,
        random(40, 90),
        random(40, 90)
      );
    }

    // TOOL 2 — blush/pink tones
    else if (currentTool == 2) {

      noStroke();

      fill(
        random(180,255),
        random(90,170),
        random(120,180),
        50
      );

      ellipse(
        mouseX,
        mouseY,
        random(20,70),
        random(20,70)
      );
    }

    // TOOL 3 — dark hair brush
    else if (currentTool == 3) {

      stroke(
        random(20,60),
        random(10,40),
        random(0,20),
        90
      );

      strokeWeight(random(3,12));

      line(
        mouseX,
        mouseY,
        mouseX + random(-20,20),
        mouseY + random(-60,60)
      );
    }

    // TOOL 4 — charcoal/shadow
    else if (currentTool == 4) {

      noStroke();

      fill(20, 20, 20, 30);

      ellipse(
        mouseX,
        mouseY,
        random(30,100),
        random(30,100)
      );
    }

    // TOOL 5 — blue painterly tones
    else if (currentTool == 5) {

      noStroke();

      fill(
        random(40,120),
        random(80,180),
        random(180,255),
        60
      );

      ellipse(
        mouseX,
        mouseY,
        random(30,90),
        random(30,90)
      );
    }

    // TOOL 6 — red/orange tones
    else if (currentTool == 6) {

      noStroke();

      fill(
        random(180,255),
        random(60,140),
        random(20,70),
        60
      );

      ellipse(
        mouseX,
        mouseY,
        random(30,80),
        random(30,80)
      );
    }

    // TOOL 7 — soft detail brush
    else if (currentTool == 7) {

      noStroke();

      fill(0, 40);

      ellipse(
        mouseX,
        mouseY,
        random(8,25),
        random(8,25)
      );
    }

    // TOOL 8 — white/light highlights
    else if (currentTool == 8) {

      noStroke();

      fill(255,255,255,50);

      ellipse(
        mouseX,
        mouseY,
        random(15,50),
        random(15,50)
      );
    }

    // TOOL 9 — smudge brush
    else if (currentTool == 9) {

      noStroke();

      fill(
        random(150,220),
        random(120,180),
        random(100,150),
        25
      );

      ellipse(
        mouseX + random(-20,20),
        mouseY + random(-20,20),
        random(40,120),
        random(40,120)
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

text("1 skin", 20, 140);
text("2 blush", 120, 140);
text("3 hair", 220, 140);

text("4 shadow", 20, 160);
text("5 blue", 120, 160);
text("6 red/orange", 220, 160);

text("7 detail", 20, 180);
text("8 highlights", 120, 180);
text("9 smudge", 240, 180);

text("0 eraser", 20, 200);

}
