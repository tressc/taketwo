const preloadedState = {
  projects: [
    {
      id: "tiles",
      title: "Tiles",
      description: "In this project I wanted to create the sensation of dragging your hand over a dynamic surface. p5's `directionalLight()` wasn't behaving correctly inside the React component, so I dropped that in favor of a normal material texture for the tiles. You can see the original code (with light and shadows) on my github.",
      links: {
        github: "www.github.com",
        live: "www.colintress.com"
      }
    },
    {
      id: "boxes",
      title: "Cube Drawing Reference",
      description: "I've been drawing much more recently, and have been surprised at the relative lack of free 3D references avaiable online. I decided to throw together some of my own in p5.js.",
      links: {
        github: "www.github.com",
      }
    },
    {
      id: "mergesort",
      title: "Merge Sort",
      description: "As I began to think about visualizing components of the computer go project I'm working on, I realized that a big roadblock would be animating the steps of a recursive function. I looked at examples of animated recursive sorting algorithms and found the following trick, which essentially amounts to performing the sort iteratively instead. Using javaScript's generator function allowed me to pause the algorithm in order to paint the array at different stages during the sort.",
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
      title: "Cylinder Drawing Reference",
      description: "This is another drawing reference I created in order to better understand perspective. p5's native `orbitControl()` function wasn't cooperating with React.js, so I peeked at the native code and wrote my own version with some changes. Press 'L' to toggle a wireframe bounding box.",
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
