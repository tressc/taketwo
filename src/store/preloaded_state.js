const preloadedState = {
  projects: [
    {
      id: "tiles",
      title: "Tiles",
      description: "some much longer string...",
      links: {
        github: "www.github.com",
        live: "www.colintress.com"
      }
    },
    {
      id: "boxes",
      title: "Tiles",
      description: "some much longer string...",
      links: {
        github: "www.github.com",
        live: "www.colintress.com"
      }
    },
    {
      id: "mergesort",
      title: "Merge Sort",
      description: "some much longer string...",
      snippet: `
      p.gMergeSort = function*(arr) {
      yield arr;
      var i = 1;

      while (i < arr.length) {
        var j = 0;

        while (j < arr.length) {
          var left = arr.slice(j, j + i);
          var right = arr.slice(j + i, j + i * 2);
          var merged = p.merge(left, right);
          var beginning = arr.slice(0, j);
          var end = arr.slice(j + i * 2);

          arr = beginning.concat(merged).concat(end);
          yield [arr, j, j + i * 2];
          j += i * 2;
        }
        fr *= 0.8;
        i *= 2;
      }
    }
      `,
      links: {
        github: "www.github.com",
        live: "www.colintress.com"
      }
    },
    {
      id: "cylinder",
      title: "Merge Sort",
      description: "some much longer string...",
      snippet: `
        p.orbit = function () {
          var inBoundsX = p.mouseX < p.width && p.mouseX > 0;
          var inBoundsY = p.mouseY < p.height && p.mouseY > 0;

          if (p.mouseIsPressed && inBoundsX && inBoundsY) {
            currentRotationY = (p.mouseX - p.width / 2) / (p.width / 2);
            currentRotationX = (p.mouseY - p.height / 2) / (p.width / 2);
          }
        }
      `,
      links: {
        github: "www.github.com",
        live: "www.colintress.com"
      }
    },
  ],
  blogs: [
    {
      date: 234234,
      title: 'sometitle',
      body: `
      some multiline string <br/>
      that <i>contains</i> HTML
      `
    },
    {
      date: 34534545,
      title: 'sometitle',
      body: `
      some multiline string <br/>
      that <i>contains</i> HTML
      `
    },
    {
      date: 234256345645634,
      title: 'sometitle',
      body: `
      some multiline string <br/>
      that <i>contains</i> HTML
      `
    },
  ]
};

export default preloadedState;
