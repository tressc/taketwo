export default function sketch (p) {
  p.setup = function() {
    p.createCanvas(500, 500, p.WEBGL);
  }

  p.draw = function() {
    p.background('#EBEBEB');
    drawCubes();
  }

  function drawCubes() {
    p.stroke('black');
    p.strokeWeight(2);
    p.fill('#7AABAC');

    for (var i = 0; i < 5; i++) {
      p.push()
      p.translate(0, -200 + 100 * i);
      p.rotateX(p.HALF_PI / 2 - ((p.HALF_PI / 4) * i))

      for (var j = 0; j < 5; j++) {
        p.push();
        p.translate(-200 + 100 * j, 0);
        p.rotateY(-p.HALF_PI / 2 + ((p.HALF_PI / 4) * j))
        p.strokeWeight(2);
        p.box(50);
        p.pop();
      }
      p.pop()
    }
  }

}
