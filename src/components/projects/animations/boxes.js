export default function sketch (p) {
  let currentRotationY = 0;
  let currentRotationX = 0;

  p.setup = function() {
    p.createCanvas(1001, 1001, p.WEBGL);
  }

  p.draw = function() {
    p.background('#EBEBEB');
    p.orbit();
    p.rotateX(currentRotationX);
    p.rotateY(currentRotationY);
    drawCubes();
  }

  function drawGrid() {
    p.push();
    p.noFill();
    p.strokeWeight(1.5);
    p.translate(0, 0, -100);
    p.stroke('#7AABAC');
    p.rect(-557, -557, 1113, 1113);
    // rect(-500, -500, 1000, 1000);
    for (var i = 0; i < 167; i += 4) {

      p.line(-517 + 10 * i, -557, 0, -517 + 10 * i, 557, 0);
      p.line(-557, -517 + 10 * i, 0, 557, -517 + 10 * i, 0);
    }
    p.pop();
  }

  p.orbit = function () {
    if (p.mouseIsPressed) {
      currentRotationY = (p.mouseX - p.width / 2) / (p.width / 2);
      currentRotationX = (p.mouseY - p.height / 2) / (p.width / 2);
    }
  }

  function drawCubes() {
    p.stroke('black');
    p.strokeWeight(2);
    p.fill('#7AABAC');
    for (var i = 0; i < 5; i++) {
      p.push()
      p.translate(0, -400 + 200 * i);
      p.rotateX(p.HALF_PI / 2 - ((p.HALF_PI / 4) * i))
      for (var j = 0; j < 5; j++) {
        p.push();
        p.translate(-400 + 200 * j, 0);
        p.rotateY(-p.HALF_PI / 2 + ((p.HALF_PI / 4) * j))
        p.strokeWeight(5);
        p.box(100);
        p.pop();
      }
      p.pop()
    }
  }

}
