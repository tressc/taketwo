export default function sketch (p) {
  let lines = [];
  let generator;
  let prevSorted;
  let sorted;
  let running = false;
  let finished = false;
  let fr = 40;

  p.setup = function() {
    p.createCanvas(500, 200);
    // frameRate(fr);
    for (var i = 0; i < p.width; i++) {
      lines.push(p.random(p.height));
    }
    generator = p.gMergeSort(lines);
  }

  p.draw = function() {
    p.frameRate(fr);
    p.background(0);
    if (sorted) {
      prevSorted = sorted;
    }
    if (running) {
      sorted = generator.next().value;
    }
    if (sorted) {
      var start = sorted[1];
      var end = sorted[2];
      // var sorted = generator.next().value;

      for (var i = 0; i < sorted[0].length; i++) {
        if (i >= start && i <= end) {
          p.stroke(255, 0, 0);
        } else {
          p.stroke(255);
        }
        p.line(i, p.height, i, p.height - sorted[0][i]);
      }
    } else if (prevSorted) {
      finished = true;
      running = false;
      for (var i = 0; i < prevSorted[0].length; i++) {
        p.stroke(255);
        p.line(i, p.height, i, p.height - prevSorted[0][i]);
      }
    } else {
      for (var i = 0; i < lines.length; i++) {
        p.stroke(255);
        p.line(i, p.height, i, p.height - lines[i]);
      }
    }
  }

  p.gMergeSort = function*(arr) {
  yield arr;
  var i = 1;
  while (i < arr.length) {
    var j = 0;
    while (j < arr.length) {
      var left = arr.slice(j, j + i);
      var right = arr.slice(j + i, j + i * 2);
      var merged = p.merge(left, right);
      // arr = merged.concat(arr.slice(j + i * 2));
      // yield arr;
      var beginning = arr.slice(0, j);
      var end = arr.slice(j + i * 2);
      arr = beginning.concat(merged).concat(end);
      // console.log(arr.slice(j + i * 2) || []);

      yield [arr, j, j + i * 2];
      j += i * 2;
    }
    fr *= 0.8;
    i *= 2;
  }
}

p.merge = function(left, right) {
  var merged = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }

  return merged.concat(left).concat(right);
}

  p.mouseClicked = function() {
    if (p.mouseX >= 0 && p.mouseY >= 0 && p.mouseX <= p.width && p.mouseY <= p.height) {
      if (finished) {
        fr = 40;
        lines = [];
        for (var i = 0; i < p.width; i++) {
          lines.push(p.random(p.height));
        }
        generator = p.gMergeSort(lines);
        finished = false;
      }
      if (!running) {
        running = true;
      }
    }
  }
};
