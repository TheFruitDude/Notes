var bubbles = [];
let inp, button;
var note;


function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 1; i++) {
    var x = random(width);
    var y = random(height);
    bubbles.push(new Bubble(x, y));
  }
  inp = createInput('');
  inp.input(myInputEvent)

  button = createButton('click me');
  button.position(600, 75);
  //
  button.mousePressed(() => { bubbles[0].write(note) note = ""})
}

function myInputEvent() {
  note = this.value();
  console.log('you are typing: ', this.value());

}

function mousePressed() {
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked();
  }
}


function draw() {
  background(510);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
    //bubbles[i].write('nonsense')
  }
}
