const preloadedState = {
  projects: [
    {
      id: "pictagram",
      title: "PictaGram",
      technologies: "PostgreSQL, Ruby on Rails, React, Redux",
      description: "This fullstack application emulates the core features of Instagram. Users can upload, edit, like and comment on their own photos and those of other users.",
      links: {
        live: "https://redroute.com"
      }
    },
    {
      id: "dungeon",
      title: "Dungeon Deck",
      technologies: "JavaScript, jQuery, CSS",
      description: "I built this browser game while studying at App Academy. It's modeled after a phone game I used to play called Card Crawl.",
      links: {
        live: "https://redroute.com"
      }
    },
    {
      id: "redroute",
      title: "RedRoute Website",
      technologies: "React.js, Redux, Firebase, Bootstrap",
      description: "I completely rebuilt RedRoute's website, working directly with their designer to create a fast, mobile-responsive experience. Form data is saved to a no-SQL database on Firebase, which also hosts the website itself.",
      links: {
        live: "https://redroute.com"
      }
    },
    {
      id: "tiles",
      title: "Tiles",
      technologies: 'p5.js',
      description: "In this project I wanted to create the sensation of dragging your hand over a dynamic surface. p5's `directionalLight()` wasn't behaving correctly inside the React component, so I dropped that in favor of a normal material texture for the tiles. You can see the original code (with light and shadows) on my github.",
      links: {
        github: "www.github.com",
        live: "www.colintress.com"
      }
    },
    {
      id: "demo",
      title: "RedRoute Call Demo",
      technologies: "Twilio, React.js, Redux, Firebase, Bootstrap",
      description: "This demo page allows prospective clients to try out RedRoute's Interactive Voice Response system. Using Twilio's API, users can schedule a taxi ride, have the system call their phones to simulate a no-show, and test other features.",
    },
    {
      id: "boxes",
      title: "Cube Drawing Reference",
      technologies: 'p5.js',
      description: "I've been drawing much more recently, and have been surprised at the relative lack of free 3D references avaiable online. I decided to throw together some of my own in p5.js.",
      links: {
        github: "www.github.com",
      }
    },
    {
      id: "portal",
      title: "RedRoute Portal",
      technologies: "Flask, Handlebars.js, jQuery, Bootstrap",
      description: "RedRoute's client portal allows users to view real-time data about their company, and make changes to how calls are handled by their IVR system.",
    },
    {
      id: "mergesort",
      title: "Merge Sort",
      technologies: 'p5.js',
      description: "As I began to think about visualizing components of the computer go project I'm working on, I realized that a big roadblock would be animating the steps of a recursive function. I looked at examples of animated recursive sorting algorithms and found the following trick, which essentially amounts to performing the sort iteratively instead. Using javaScript's generator function allowed me to 'pause' the algorithm in order to paint the array at different stages during the sort. (Click to restart animation.)",
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
        fr *= 0.8; // reduce framerate for each successive pass
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
      technologies: 'p5.js',
      description: "This is another drawing reference I created in order to better understand perspective. p5's `orbitControl()` function wasn't cooperating with React.js, so I peeked at the native code and wrote my own version with some changes. (Press 'L' to toggle a wireframe bounding box.)",
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
      date: "12-21-2018",
      title: 'Trees, Trees, Trees',
      body: `
      <br />
      When beginning to think about a game AI, a naive first approach often involves some sort of tree. We can imagine each node in the tree represent some future game state. For instance, in a game of tic-tac-toe the board might look like this on X's turn. X has three available moves, which would result in different board states, so we could illustrate this as a tree.
      <br />
      <br />
      *image*
      <br />
      <br />
      To extend the tree, we can add O's possible responses to each of these new board states. Eventually we hit a dead end: board states in which the game is over and there will be no additional moves. These states form the leaves of our tree.
      <br />
      <br />
      *image*
      <br />
      <br />
      A simple tic-tac-toe AI would search this tree and pick moves (sub-trees) which terminate in the most number of leaves where it wins the game and the fewest in which it loses or ties.
      <br />
      <br />
      *image*
      <br />
      <br />
      Great! But even for a simple game like tic-tac-toe, the full tree looks like this. That's x^y nodes. For go it's a^b. That's too big to search exhaustively. So what are some ways of reducing the size of the tree, while still getting the same result?

      A few things come to mind. First, we have a lot of repeats or overlapping sub-trees. We know that if we see the same board state in two different nodes, that all subsequent nodes within each of those sub-trees will also be identical. If we want to calculate the number of winning leaves that can be reached from a given node, we can store this value in a dictionary. This way, for each node we encounter, we first check if the value of its board state has already been calculated and stored. If it has, we don't need to traverse its subtree.
      <br />
      <br />
      *image*
      <br />
      <br />
      A second strategy accounts for symmetry. In our first tree, we assumed that there are nine possible first moves in tic-tac-toe. Accounting for symmetry, there are actually only 3!
      <br />
      <br />
      *image*
      <br />
      <br />
      If we can identify an inexpensive way to determine rotational symmetry, we can eliminate nodes (and more importantly their sub-trees) which are symmetrically equivalent. This 'if' is important. A naive way of checking for rotational symmetry between two boards is rotating one board 0, 90, 180, and 270 degrees. If at any of these rotations both boards are the same, they are rotationally symmetrical symmetrical.
      <br />
      <br />
      *image*
      <br />
      <br />
      A common strategy is to use something called alpha-beta pruning, but that deserves its own post.

      `
    },
    {
      date: "12-19-2018",
      title: 'Introduction',
      body: `
      <br/ >
      When Lee Sedol played AlphaGo in March 2016, I stayed up late each night to watch the livestream from Seoul. I remember desperately wanting him to win, to validate my belief that excellence in go could never be reduced to equations and heuristics. Prior to these games I was convinced that his loss would rob the game of its magic. The mystery of the game would be revealed as nothing more than a feature of human ignorance. Lee lost the match, and this did change the way I understand the game, but not in the way that I thought it would.
      <br/ >
      <br/ >
      I first learned the rules of go in high school, but didn't take it up seriously until some years later, when the game became an obsession for me. While I don't play with much frequency these days, I still find myself idly paging through books on joseki and solving tsumego on the subway. The game still haunts me.
      <br/ >
      <br/ >
      My journey into programming and computer science has been so satisfying because I have begun to understand how so much complexity can be created and derived from simple abstractions. How we can emulate logical operations with wires. How we can perform arithmetic with boolean operations. There's a satisfying determinism to this kind of understanding. But how can you apply these same tools to problems that are messy, where there are too many variables for even the most advanced computer, where intuition might serve better than calculation?
      <br/ >
      <br/ >
      Clearly there are ways to accomplish this, as illustrated by AlphaGo's definitive victory against Lee. Over the course of the following posts, I will explore how the nightmarish problem of building a good go ai can be broken down into smaller manageable problems, and how various approaches can be woven together to form a coherent program.

      `
    },
  ]
};

export default preloadedState;
