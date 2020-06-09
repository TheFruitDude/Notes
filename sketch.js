var bubbles = [];
let inp, button, btnColor;
let slider1;
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

  button.mousePressed(() => {
    bubbles[0].write(note)
    note = ""
  })

  // slider for size:
  //[MIN], [MAX], [VALUE], [STEP]
  slider1 = createSlider(100, 400, 100, 5)
  slider1.position(80, 430);
  slider1.style('width', '100px');

  btnColor = createButton('change to random color');
  btnColor.position(0, 460);

  btnColor.mousePressed(() => {
    bubbles[0].changeColor(getRandomColor())
  })


}
function getRandomColor() {

    var normalColorArrayy = ['red', 'blue', 'violet','magenta', 'olivedrab', 'darkorange' ,'forestgreen','darkblue','indigo','deepskyblue', 'brown' ]
  let rand = Math.floor(random(normalColorArrayy.length))
  return normalColorArrayy[rand]
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
  var slidervalue = slider1.value()
  background(51);
  //console.log(slider1.value())
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    if (bubbles[i].isWritten()) {
      bubbles[i].display();
    }
    bubbles[i].changeSize(slider1.value())
  }

}
