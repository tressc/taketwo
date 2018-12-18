export default function paper (p) {
  var papers = [];

  p.setup = function() {
    p.createCanvas(500, 500, p.WEBGL);
    for (var i = 0; i < 25; i++) {
      papers.push(new p.Paper(i));
    }
  }

  p.draw = function() {
    p.background('black');
    p.directionalLight(250, 250, 250, 0, 0, 100);
    for (var i = 0; i < papers.length; i++) {
      papers[i].display();
    }
  }

  p.Paper = function(i) {
    this.i = i;
    this.rotateX = 0;
    this.row = Math.floor(i / 5);
    this.col = i % 5;
    this.diffX = 0;
    this.incrementX = 0;
    this.diffY = 0;
    this.incrementY = 0;
    this.distanceLeft = 50 + 100 * this.col;
    this.distanceTop = 50 + 100 * this.row;

    this.calculateDiffX = function() {
      var x = p.mouseX;
      var y = p.mouseY;

      if (x > this.distanceLeft - 50 && x < this.distanceLeft + 50 && y > this.distanceTop - 50 && y < this.distanceTop + 50 ) {
        this.diffX = (p.HALF_PI / 50) * (x - (this.distanceLeft));
      } else {
        this.diffX = 0;
      }
    };

    this.calculateDiffY = function() {
      var y = p.mouseY;
      var x = p.mouseX;

      if (y > this.distanceTop - 50 && y < this.distanceTop + 50 && x > this.distanceLeft - 50 && x < this.distanceLeft + 50) {
        this.diffY = (p.HALF_PI / 50) * (y - (this.distanceTop));
      } else {
        this.diffY = 0;
      }
    };

    this.display = function() {
      if (Math.abs(this.diffX - this.incrementX) < 0.1) {
        this.increment = this.diffX;
      }

      if (this.diffX === 0) {
        if (this.incrementX > this.diffX) {
          this.incrementX -= 0.05;
        } else if (this.incrementX < this.diffX) {
          this.incrementX += 0.05;
        }
      } else {
        this.incrementX = this.diffX;
      }
      //
      // if (this.diffY === 0) {
      //   if (this.incrementY > this.diffY) {
      //     this.incrementY -= 0.05;
      //   } else if (this.incrementY < this.diffY) {
      //     this.incrementY += 0.05;
      //   }
      // } else {
      //   this.incrementY = this.diffY;
      // }
      p.push();
      p.translate(-p.width / 2, -p.height / 2);
      p.translate(this.distanceLeft, this.distanceTop);
      // fill('red');
      p.normalMaterial();
      // p.ambientMaterial('red');
      // noStroke();
      p.stroke('black');
      p.rotateY(this.incrementX);
      // rotateX(this.incrementY);
      p.plane(100, 100);
      p.pop();
    };
  }

  p.mouseMoved = function() {
    for (var i = 0; i < papers.length; i++) {
      papers[i].calculateDiffX();
      papers[i].calculateDiffY();
    }
    //   if (mouseX > width || mouseX < 0 || mouseY > height || mouseY < 0) {
    //     return;
    //   }
    //   diffX = (HALF_PI / (width / 2)) * (mouseX - (width / 2));
    //   diffY = (HALF_PI / (height / 2)) * (mouseY - (height / 2));
  }

}
