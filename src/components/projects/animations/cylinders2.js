export default function sketch (p) {
  let showLines = false;
  let currentRotationY = 0;
  let currentRotationX = 0;

  p.setup = function() {
    p.createCanvas(500, 500, p.WEBGL);
  }

  p.draw = function() {
    p.background('#EBEBEB');
    p.orbit();
    p.rotateX(currentRotationX);
    p.rotateY(currentRotationY);
    p.drawCylinders();
  }

  p.orbit = function () {
    if (p.mouseIsPressed) {
      currentRotationY = (p.mouseX - p.width / 2) / (p.width / 2);
      currentRotationX = (p.mouseY - p.height / 2) / (p.width / 2);
    }
  }

  p.drawCylinders = function() {
    p.rotateX(p.HALF_PI);
    p.stroke('black');
    p.push()
    if (showLines) {
      // p.noFill();
      p.strokeWeight(5);
      p.ambientMaterial(0,0,0,0)
      p.box(240, 300, 240);
    }
    p.fill(0, 250, 250, 100);
    p.noStroke();
    p.cylinder(120, 300);
    // p.stroke('black');
    p.translate(0, -150);
    p.rotateX(p.HALF_PI);
    p.ellipse(0,0,240);
    if (showLines) {
      p.line(-120, -120, 120, 120)
      p.line(120, -120, -120, 120)
      p.line(-120, 0, 120, 0)
      p.line(0, -120, 0, 120)
    }
    p.translate(0, 150);
    p.rotateX(-p.HALF_PI);

    p.translate(0, 300, -150);
    p.rotateX(p.HALF_PI);
    p.ellipse(0,0,240);
    if (showLines) {
      p.line(-120, -120, 120, 120)
      p.line(120, -120, -120, 120)
      p.line(-120, 0, 120, 0)
      p.line(0, -120, 0, 120)
    }
    p.translate(0, -300, 150);
    p.rotateX(-p.HALF_PI);
    p.pop()
  }

  p.keyPressed = function() {
    if (p.keyCode === 76) {
      showLines = !showLines;
    }
  }
}
