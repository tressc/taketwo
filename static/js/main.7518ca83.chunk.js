(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,n){},111:function(e,t,n){},355:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(18),s=n.n(r);n(104),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(19),c=n(360),l=n(10),h=n(11),d=n(13),u=n(12),p=n(14),m=n(363),f=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(i.a.Component),b=Object(m.a)(f),g=(n(111),n(357)),v=n(359),w=n(364),y=n(362),j=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return i.a.createElement(v.a,{fluid:!0,className:"navigation"},i.a.createElement(v.a.Header,null,i.a.createElement(g.a,{to:"/projects",href:"/projects",className:"logo"},i.a.createElement("span",null,"t"))),i.a.createElement(w.a,{pullRight:!0},i.a.createElement(y.a,{componentClass:g.a,href:"/projects",to:"/projects"},"projects"),i.a.createElement(y.a,{componentClass:g.a,href:"/about",to:"/about"},"about")))}}]),t}(i.a.Component),k=n(82),P=n.n(k),x=n(83),O=n.n(x),E=n(84),X=n.n(E),A=n(85),L=n.n(A),I=n(86),C=n.n(I),T=n(87),z=n.n(T),H=n(88),D=n.n(H),R=n(40),W=n.n(R),N=n(89),F=n.n(N),B=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={},n.images={mergesort:P.a,cylinder:O.a,boxes:X.a,tiles:L.a,redroute:C.a,demo:z.a,portal:D.a,pictagram:F.a,dungeon:W.a},n}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e,t=this;return e=this.props.projects.map(function(e,n){return i.a.createElement("li",{key:n,className:"project"},i.a.createElement(g.a,{to:"/projects/".concat(e.id)},i.a.createElement("img",{alt:e.id,className:"project-img",src:t.images[e.id]})))}),i.a.createElement("div",{className:"projects main-page"},i.a.createElement(j,null),i.a.createElement("div",{className:"sub-nav"},i.a.createElement("ul",null,e)))}}]),t}(i.a.Component),J=Object(o.b)(function(e){return{projects:e.projects}},function(e){return{}})(B),S=n(55),Z=n.n(S),G=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.canvas=new Z.a(this.props.sketch,this.wrapper),this.canvas.myCustomRedrawAccordingToNewPropsHandler&&this.canvas.myCustomRedrawAccordingToNewPropsHandler(this.props)}},{key:"componentWillReceiveProps",value:function(e){this.props.sketch!==e.sketch&&(this.canvas.remove(),this.canvas=new Z.a(e.sketch,this.wrapper)),this.canvas.myCustomRedrawAccordingToNewPropsHandler&&this.canvas.myCustomRedrawAccordingToNewPropsHandler(e)}},{key:"componentWillUnmount",value:function(){this.canvas.remove()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{ref:function(t){return e.wrapper=t}})}}]),t}(i.a.Component),K=n(90),M=n.n(K);function Y(e){var t=[];e.setup=function(){e.createCanvas(500,500,e.WEBGL);for(var n=0;n<25;n++)t.push(new e.Paper(n))},e.draw=function(){e.background("black");for(var n=0;n<t.length;n++)t[n].display(n)},e.Paper=function(t){this.i=t,this.rotateX=0,this.row=Math.floor(t/5),this.col=t%5,this.diffX=0,this.incrementX=0,this.diffY=0,this.incrementY=0,this.distanceLeft=50+100*this.col,this.distanceTop=50+100*this.row,this.calculateDiffX=function(){var t=e.mouseX,n=e.mouseY;t>this.distanceLeft-50&&t<this.distanceLeft+50&&n>this.distanceTop-50&&n<this.distanceTop+50?this.diffX=e.HALF_PI/50*(t-this.distanceLeft):this.diffX=0},this.calculateDiffY=function(){var t=e.mouseY,n=e.mouseX;t>this.distanceTop-50&&t<this.distanceTop+50&&n>this.distanceLeft-50&&n<this.distanceLeft+50?this.diffY=e.HALF_PI/50*(t-this.distanceTop):this.diffY=0},this.display=function(t){Math.abs(this.diffX-this.incrementX)<.1&&(this.increment=this.diffX),0===this.diffX?this.incrementX>this.diffX?this.incrementX-=.05:this.incrementX<this.diffX&&(this.incrementX+=.05):this.incrementX=this.diffX,e.push(),e.translate(-e.width/2,-e.height/2),e.translate(this.distanceLeft,this.distanceTop),e.normalMaterial(),e.stroke("black"),e.rotateY(this.incrementX),e.plane(100,100),e.pop()}},e.mouseMoved=function(){for(var e=0;e<t.length;e++)t[e].calculateDiffX(),t[e].calculateDiffY()}}var V=n(56),Q=n.n(V);function U(e){var t,n,a,i=[],r=!1,s=!1,o=40;e.setup=function(){e.createCanvas(500,500);for(var n=0;n<e.width;n++)i.push(e.random(e.height));t=e.gMergeSort(i)},e.draw=function(){if(e.frameRate(o),e.background(0),a&&(n=a),r&&(a=t.next().value),a)for(var c=a[1],l=a[2],h=0;h<a[0].length;h++)h>=c&&h<=l?e.stroke(255,0,0):e.stroke(255),e.line(h,e.height,h,e.height-a[0][h]);else if(n){s=!0,r=!1;for(var d=0;d<n[0].length;d++)e.stroke(255),e.line(d,e.height,d,e.height-n[0][d])}else for(var u=0;u<i.length;u++)e.stroke(255),e.line(u,e.height,u,e.height-i[u])},e.gMergeSort=Q.a.mark(function t(n){var a,i,r,s,c,l,h;return Q.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n;case 2:a=1;case 3:if(!(a<n.length)){t.next=21;break}i=0;case 5:if(!(i<n.length)){t.next=17;break}return r=n.slice(i,i+a),s=n.slice(i+a,i+2*a),c=e.merge(r,s),l=n.slice(0,i),h=n.slice(i+2*a),n=l.concat(c).concat(h),t.next=14,[n,i,i+2*a];case 14:i+=2*a,t.next=5;break;case 17:o*=.8,a*=2,t.next=3;break;case 21:case"end":return t.stop()}},t,this)}),e.merge=function(e,t){for(var n=[];e.length>0&&t.length>0;)e[0]<t[0]?n.push(e.shift()):n.push(t.shift());return n.concat(e).concat(t)},e.mouseClicked=function(){if(e.mouseX>=0&&e.mouseY>=0&&e.mouseX<=e.width&&e.mouseY<=e.height){if(s){o=40,i=[];for(var n=0;n<e.width;n++)i.push(e.random(e.height));t=e.gMergeSort(i),s=!1}r||(r=!0)}}}function q(e){var t=!1,n=0,a=0;e.setup=function(){e.createCanvas(500,500,e.WEBGL)},e.draw=function(){e.background("#EBEBEB"),e.orbit(),e.rotateX(a),e.rotateY(n),e.drawCylinders()},e.orbit=function(){var t=e.mouseX<500&&e.mouseX>0,i=e.mouseY<500&&e.mouseY>0;e.mouseIsPressed&&t&&i&&(n=(e.mouseX-e.width/2)/(e.width/2),a=(e.mouseY-e.height/2)/(e.width/2))},e.drawCylinders=function(){e.rotateX(e.HALF_PI/4),e.rotateZ(e.HALF_PI/4),e.stroke("black"),e.push(),t&&(e.strokeWeight(5),e.ambientMaterial(0,0,0,0),e.box(240,300,240)),e.fill(0,250,250,100),e.noStroke(),e.cylinder(120,300),e.translate(0,-150),e.rotateX(e.HALF_PI),e.ellipse(0,0,240),t&&(e.line(-120,-120,120,120),e.line(120,-120,-120,120),e.line(-120,0,120,0),e.line(0,-120,0,120)),e.translate(0,150),e.rotateX(-e.HALF_PI),e.translate(0,300,-150),e.rotateX(e.HALF_PI),e.ellipse(0,0,240),t&&(e.line(-120,-120,120,120),e.line(120,-120,-120,120),e.line(-120,0,120,0),e.line(0,-120,0,120)),e.translate(0,-300,150),e.rotateX(-e.HALF_PI),e.pop()},e.keyPressed=function(){76===e.keyCode&&(t=!t)}}function _(e){e.setup=function(){e.createCanvas(500,500,e.WEBGL)},e.draw=function(){e.background("#EBEBEB"),function(){e.stroke("black"),e.strokeWeight(2),e.fill("#7AABAC");for(var t=0;t<5;t++){e.push(),e.translate(0,100*t-200),e.rotateX(e.HALF_PI/2-e.HALF_PI/4*t);for(var n=0;n<5;n++)e.push(),e.translate(100*n-200,0),e.rotateY(-e.HALF_PI/2+e.HALF_PI/4*n),e.strokeWeight(2),e.box(50),e.pop();e.pop()}}()}}var $=n(91),ee=n.n($),te=n(92),ne=n.n(te),ae=n(93),ie=n.n(ae),re=n(94),se=n.n(re),oe=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={},n.animations={tiles:Y,mergesort:U,cylinder:q,boxes:_},n.staticImages={demo:ee.a,redroute:ne.a,portal:ie.a,dungeon:W.a,pictagram:se.a},n}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=null;this.props.snippet&&(t=i.a.createElement(M.a,{language:"javascript"},this.props.snippet));var n=null;void 0!==this.animations[this.props.id]&&(n=i.a.createElement(G,{sketch:this.animations[this.props.id]}));var a=null;void 0!==this.staticImages[this.props.id]&&(a=i.a.createElement("img",{className:"static-image",alt:this.staticImages[this.props.id],src:this.staticImages[this.props.id]}));var r=null;void 0!==this.props.description&&(r=i.a.createElement("div",{className:"proj-description"},this.props.description));var s=null;void 0!==this.props.title&&(s=i.a.createElement("div",{className:"proj-title"},this.props.title));var o=null;void 0!==this.props.technologies&&(o=i.a.createElement("div",{className:"proj-technologies"},this.props.technologies));var c=null;return void 0!==this.props.links&&(c=Object.keys(this.props.links).map(function(t,n){return i.a.createElement("a",{key:n,href:e.props.links[t]},t)})),i.a.createElement("div",{className:"project main-page"},i.a.createElement(j,null),i.a.createElement("div",{className:"sub-nav"},i.a.createElement("div",{className:"index"},i.a.createElement(g.a,{to:"/projects"},"back to projects")),i.a.createElement("div",{className:"entries"},n,a,i.a.createElement("div",{className:"title-techs"},s,o),i.a.createElement("div",{className:"proj-links"},c),r,t)))}}]),t}(i.a.Component),ce=Object(o.b)(function(e,t){for(var n,a,i,r,s,o=t.match.params.id,c=0;c<e.projects.length;c++)e.projects[c].id===o&&(n=e.projects[c].snippet,r=e.projects[c].description,a=e.projects[c].title,i=e.projects[c].technologies,s=e.projects[c].links);return{id:o,snippet:n,description:r,technologies:i,title:a,links:s}},function(e){return{}})(oe),le=n(33),he=le.Link,de=le.Element,ue=le.animateScroll,pe=le.scrollSpy,me=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(d.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){pe.update()}},{key:"scrollToTop",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500;return function(){ue.scrollToTop({duration:e,smooth:"easeInOutQuad"})}}},{key:"render",value:function(){var e=this,t=this.props.blogs.map(function(t,n){return 0===n?i.a.createElement("span",{className:"blog-link",key:n,onClick:e.scrollToTop()},t.date):i.a.createElement(he,{className:"blog-link",key:n,activeClass:"active",to:String(t.date),spy:!0,smooth:!0,offset:-50,duration:500},t.date)}),n=this.props.blogs.map(function(e,t){var n="post";return 0===t&&(n="first-post"),i.a.createElement(de,{key:t,className:n,name:String(e.date)},i.a.createElement("h2",null,e.title),i.a.createElement("h4",null," ",e.date),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.body}}))});return i.a.createElement("div",{className:"blog main-page"},i.a.createElement(j,null),i.a.createElement("div",{className:"sub-nav"},i.a.createElement("div",{className:"index"},i.a.createElement("div",null,t)),i.a.createElement("div",{className:"entries"},i.a.createElement("div",{className:"posts"},n))))}}]),t}(i.a.Component),fe=Object(o.b)(function(e){return{blogs:e.blogs}},function(e){return{}})(me),be=n(95),ge=n.n(be),ve=n(96),we=n.n(ve),ye=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(d.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=["React","Redux","JavaScript","Rails","Ruby","Python","Flask","PostgreSQL","jQuery","AWS","p5","D3","Firebase","HTML5","CSS3","SCSS","Git","Bootstrap"],t=["red","orange","yellow","green","blue","violet","red"],n=e.map(function(n,a){var r=Math.floor(a/5),s=t[r+a%5];return i.a.createElement("li",{className:s},e[a])});return i.a.createElement("div",{className:"about main-page"},i.a.createElement(j,null),i.a.createElement("div",{className:"sub-nav"},i.a.createElement("div",{className:"left"},i.a.createElement("div",{className:"row-one"},i.a.createElement("div",null,"I'm Colin, a NYC-based software developer. You can download my resume ",i.a.createElement("a",{href:we.a,download:!0},"here"),".")),i.a.createElement("div",{className:"row-two"},i.a.createElement("div",null,"Technologies")),i.a.createElement("div",{className:"row-three"},"Contact")),i.a.createElement("div",{className:"right"},i.a.createElement("div",{className:"row-one"},i.a.createElement("img",{src:ge.a,alt:"me",className:"portrait"})),i.a.createElement("div",{className:"row-two"},i.a.createElement("ul",{className:"list"},n)),i.a.createElement("div",{className:"row-three"},i.a.createElement("ul",{className:"contact"},i.a.createElement("li",null,"treescd@gmail.com"),i.a.createElement("li",null,"860.331.0394"))))))}}]),t}(i.a.Component),je=n(365),ke=n(358),Pe=n(361),xe=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(je.a,null,i.a.createElement(ke.a,{exact:!0,path:"/",render:function(e){return i.a.createElement(Pe.a,{to:"/projects"})}}),i.a.createElement(ke.a,{exact:!0,path:"/projects",component:J}),i.a.createElement(ke.a,{exact:!0,path:"/projects/:id",component:ce}),i.a.createElement(ke.a,{exact:!0,path:"/blog",component:fe}),i.a.createElement(ke.a,{exact:!0,path:"/about",component:ye})))}}]),t}(i.a.Component),Oe=function(e){var t=e.store;return i.a.createElement(o.a,{store:t},i.a.createElement(c.a,null,i.a.createElement(b,null,i.a.createElement(xe,null))))},Ee=n(98),Xe=n(22),Ae=n(97),Le=n.n(Ae),Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object.freeze(e),t.type,e},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object.freeze(e),t.type,e},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object.freeze(e),t.type,e},ze=Object(Xe.c)({blogs:Ce,ui:Ie,projects:Te}),He=n(57),De=[Le.a,He.a];De=[He.a];var Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(Xe.d)(ze,e,Xe.a.apply(void 0,Object(Ee.a)(De)))},We={projects:[{id:"redroute",title:"RedRoute Website",technologies:"React.js, Redux, Firebase, Bootstrap",description:"I completely rebuilt RedRoute's website, working directly with their designer to create a fast, mobile-responsive experience. Form data is saved to a no-SQL database on Firebase, which also hosts the website itself.",links:{live:"https://redroute.com"}},{id:"tiles",title:"Tiles",technologies:"p5.js",description:"In this project I wanted to create the sensation of dragging your hand over a dynamic surface. p5's `directionalLight()` wasn't behaving correctly inside the React component, so I dropped that in favor of a normal material texture for the tiles. You can see the original code (with light and shadows) on my github."},{id:"pictagram",title:"PictaGram",technologies:"PostgreSQL, Ruby on Rails, React, Redux",description:"This fullstack application emulates the core features of Instagram. Users can upload, edit, like and comment on their own photos and those of other users.",links:{live:"http://picta-gram.herokuapp.com",github:"https://github.com/tressc/pictagram"}},{id:"dungeon",title:"Dungeon Deck",technologies:"JavaScript, jQuery, CSS",description:"I built this browser game while studying at App Academy. It's modeled after a phone game I used to play called Card Crawl.",links:{live:"https://tressc.github.io/dungeondeck/",github:"https://github.com/tressc/dungeondeck"}},{id:"demo",title:"RedRoute Call Demo",technologies:"Twilio, React.js, Redux, Firebase, Bootstrap",description:"This demo page allows prospective clients to try out RedRoute's Interactive Voice Response system. Using Twilio's API, users can schedule a taxi ride, have the system call their phones to simulate a no-show, and test other features."},{id:"boxes",title:"Cube Drawing Reference",technologies:"p5.js",description:"I've been drawing much more recently, and have been surprised at the relative lack of free 3D references avaiable online. I decided to throw together some of my own in p5.js."},{id:"portal",title:"RedRoute Portal",technologies:"Flask, Handlebars.js, jQuery, Bootstrap",description:"RedRoute's client portal allows users to view real-time data about their company, and make changes to how calls are handled by their IVR system."},{id:"mergesort",title:"Merge Sort",technologies:"p5.js",description:"As I began to think about visualizing components of the computer go project I'm working on, I realized that a big roadblock would be animating the steps of a recursive function. I looked at examples of animated recursive sorting algorithms and found the following trick, which essentially amounts to performing the sort iteratively instead. Using javaScript's generator function allowed me to 'pause' the algorithm in order to paint the array at different stages during the sort. (Click to restart animation.)",snippet:"\n      p.gMergeSort = function*(arr) {\n      yield arr;\n      var i = 1;\n\n      while (i < arr.length) {\n        var j = 0;\n\n        while (j < arr.length) {\n          var left = arr.slice(j, j + i);\n          var right = arr.slice(j + i, j + i * 2);\n          var merged = p.merge(left, right);\n          var beginning = arr.slice(0, j);\n          var end = arr.slice(j + i * 2);\n\n          arr = beginning.concat(merged).concat(end);\n          yield [arr, j, j + i * 2];\n          j += i * 2;\n        }\n        fr *= 0.8; // reduce framerate for each successive pass\n        i *= 2;\n      }\n    }\n      "},{id:"cylinder",title:"Cylinder Drawing Reference",technologies:"p5.js",description:"This is another drawing reference I created in order to better understand perspective. p5's `orbitControl()` function wasn't cooperating with React.js, so I peeked at the native code and wrote my own version with some changes. (Press 'L' to toggle a wireframe bounding box.)",snippet:"\n        p.orbit = function () {\n          var inBoundsX = p.mouseX < p.width && p.mouseX > 0;\n          var inBoundsY = p.mouseY < p.height && p.mouseY > 0;\n\n          if (p.mouseIsPressed && inBoundsX && inBoundsY) {\n            currentRotationY = (p.mouseX - p.width / 2) / (p.width / 2);\n            currentRotationX = (p.mouseY - p.height / 2) / (p.width / 2);\n          }\n        }\n      "}],blogs:[{date:"12-21-2018",title:"Trees, Trees, Trees",body:"\n      <br />\n      When beginning to think about a game AI, a naive first approach often involves some sort of tree. We can imagine each node in the tree represent some future game state. For instance, in a game of tic-tac-toe the board might look like this on X's turn. X has three available moves, which would result in different board states, so we could illustrate this as a tree.\n      <br />\n      <br />\n      *image*\n      <br />\n      <br />\n      To extend the tree, we can add O's possible responses to each of these new board states. Eventually we hit a dead end: board states in which the game is over and there will be no additional moves. These states form the leaves of our tree.\n      <br />\n      <br />\n      *image*\n      <br />\n      <br />\n      A simple tic-tac-toe AI would search this tree and pick moves (sub-trees) which terminate in the most number of leaves where it wins the game and the fewest in which it loses or ties.\n      <br />\n      <br />\n      *image*\n      <br />\n      <br />\n      Great! But even for a simple game like tic-tac-toe, the full tree looks like this. That's x^y nodes. For go it's a^b. That's too big to search exhaustively. So what are some ways of reducing the size of the tree, while still getting the same result?\n\n      A few things come to mind. First, we have a lot of repeats or overlapping sub-trees. We know that if we see the same board state in two different nodes, that all subsequent nodes within each of those sub-trees will also be identical. If we want to calculate the number of winning leaves that can be reached from a given node, we can store this value in a dictionary. This way, for each node we encounter, we first check if the value of its board state has already been calculated and stored. If it has, we don't need to traverse its subtree.\n      <br />\n      <br />\n      *image*\n      <br />\n      <br />\n      A second strategy accounts for symmetry. In our first tree, we assumed that there are nine possible first moves in tic-tac-toe. Accounting for symmetry, there are actually only 3!\n      <br />\n      <br />\n      *image*\n      <br />\n      <br />\n      If we can identify an inexpensive way to determine rotational symmetry, we can eliminate nodes (and more importantly their sub-trees) which are symmetrically equivalent. This 'if' is important. A naive way of checking for rotational symmetry between two boards is rotating one board 0, 90, 180, and 270 degrees. If at any of these rotations both boards are the same, they are rotationally symmetrical symmetrical.\n      <br />\n      <br />\n      *image*\n      <br />\n      <br />\n      A common strategy is to use something called alpha-beta pruning, but that deserves its own post.\n\n      "},{date:"12-19-2018",title:"Introduction",body:"\n      <br/ >\n      When Lee Sedol played AlphaGo in March 2016, I stayed up late each night to watch the livestream from Seoul. I remember desperately wanting him to win, to validate my belief that excellence in go could never be reduced to equations and heuristics. Prior to these games I was convinced that his loss would rob the game of its magic. The mystery of the game would be revealed as nothing more than a feature of human ignorance. Lee lost the match, and this did change the way I understand the game, but not in the way that I thought it would.\n      <br/ >\n      <br/ >\n      I first learned the rules of go in high school, but didn't take it up seriously until some years later, when the game became an obsession for me. While I don't play with much frequency these days, I still find myself idly paging through books on joseki and solving tsumego on the subway. The game still haunts me.\n      <br/ >\n      <br/ >\n      My journey into programming and computer science has been so satisfying because I have begun to understand how so much complexity can be created and derived from simple abstractions. How we can emulate logical operations with wires. How we can perform arithmetic with boolean operations. There's a satisfying determinism to this kind of understanding. But how can you apply these same tools to problems that are messy, where there are too many variables for even the most advanced computer, where intuition might serve better than calculation?\n      <br/ >\n      <br/ >\n      Clearly there are ways to accomplish this, as illustrated by AlphaGo's definitive victory against Lee. Over the course of the following posts, I will explore how the nightmarish problem of building a good go ai can be broken down into smaller manageable problems, and how various approaches can be woven together to form a coherent program.\n\n      "}]},Ne=n(58);document.addEventListener("DOMContentLoaded",function(){Ne.a.initialize("UA-131463962-1"),Ne.a.pageview("/projects");var e=document.getElementById("root"),t=Re(We);s.a.render(i.a.createElement(Oe,{store:t}),e)}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},40:function(e,t,n){e.exports=n.p+"static/media/dungeon.02293b6b.png"},82:function(e,t){e.exports="data:image/png;base64,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"},83:function(e,t,n){e.exports=n.p+"static/media/cylinder.b5bfc620.png"},84:function(e,t,n){e.exports=n.p+"static/media/boxes.1908bfdd.png"},85:function(e,t,n){e.exports=n.p+"static/media/tiles.a4b02296.png"},86:function(e,t,n){e.exports=n.p+"static/media/redroute.c3aaad70.png"},87:function(e,t,n){e.exports=n.p+"static/media/demozoom.2dbb9b18.png"},88:function(e,t,n){e.exports=n.p+"static/media/portal.c014a8b3.png"},89:function(e,t,n){e.exports=n.p+"static/media/pictathumb.08a23d7f.png"},91:function(e,t,n){e.exports=n.p+"static/media/demo.bb6f425f.png"},92:function(e,t,n){e.exports=n.p+"static/media/homepage.782bfbb7.png"},93:function(e,t,n){e.exports=n.p+"static/media/portalfull.5b02d833.png"},94:function(e,t,n){e.exports=n.p+"static/media/picta.62818ab4.png"},95:function(e,t,n){e.exports=n.p+"static/media/me.04182a33.jpeg"},96:function(e,t,n){e.exports=n.p+"static/media/resume.ec0781f9.pdf"},99:function(e,t,n){e.exports=n(355)}},[[99,2,1]]]);
//# sourceMappingURL=main.7518ca83.chunk.js.map