var bubbles = [];
let inp, button;

function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 1; i++) {
    var x = random(width);
    var y = random(height);
    bubbles.push(new Bubble(x, y));
  }
  inp = createInput('');
  //inp.input(myInputEvent)
  button = createButton('click me');
  button.position(600, 75);
  button.mousePressed(submitNote(inp.value()));
}

function myInputEvent() {
   console.log('you are typing: ', this.value());
  //bubbles[i].write(this.value())
}
function submitNote(n) {
  bubbles[0].write(n);
}

function mousePressed() {
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked();
  }
}


function draw() {
  background(0);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();

  }
}
