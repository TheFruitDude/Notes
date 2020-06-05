function Bubble(x, y) {
  this.x = x;
  this.y = y;
  this.col = color(255, 204, 0);
  this.diameter = 100;

  this.display = function() {
    stroke(255);
    fill(this.col);
    rect(this.x, this.y, this.diameter, this.diameter);
  }

  this.clicked = function() {
    var d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.diameter / 2) {
      this.col = color(15, 79, 120);
    }
  };

  this.move = function() {
    //this.x = this.x + random(-1, 1);
    //this.y = this.y + random(-1, 1);
  };

  // create a rule for when the bubble moves should the rectangle move also
  // this can be done later

  //enter note with enter key: if enter is pressed and textfield not empthy: new Bubble objects
  this.write = function(content) {
    fill(50);
    text(content, this.x, this.y, this.diameter, this.diameter) // Text wraps within text box
    fill(0, 102, 153);
  }


};
