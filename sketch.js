var bubbles = [];
let inp, button;
var note;


function setup() {
  createCanvas(600, 400);

  for (var i = 0; i < 1; i++) {
    //var x = random(width);
    //var y = random(height);
    var x = 50
    var y = 50 
    bubbles.push(new Bubble(x, y));
  }

  inp = createInput('');
  inp.input(myInputEvent)

  button = createButton('click me');
  button.position(0, 430);

  button.mousePressed(() => { bubbles[0].write(note)
  note = ""})
}

function myInputEvent() {
  note = this.value();
  //console.log('you are typing: ', this.value());

}

function mousePressed() {
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked();
  }
}


function draw() {
  background(51);

  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    if (bubbles[i].isWritten()) {
      bubbles[i].display();
    }
  }
}
