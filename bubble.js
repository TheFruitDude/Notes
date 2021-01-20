function Bubble(x, y) {
  this.x = x;
  this.y = y;
  this.diameter = 200;
  this.mittelpunktX = this.x + this.diameter / 2
  this.mittelpunktY = this.y + this.diameter / 2
  this.col = color(255, 204, 0);

  //boolean to check if there is a note in this object
  this.written = false;
  this.content = content;

  this.setPosition = function(x, y) { //oben links
    this.x = x;
    this.y = y;
  }
  this.isWritten = function() {
    return this.written;
  }

  this.display = function() {
    fill(this.col);
    rect(this.x, this.y, this.diameter, this.diameter);
    if (this.written) {
      textSize(13) // Text wraps within text box
      fill(0)
      text(this.content, this.x, this.y, this.diameter, this.diameter)
    }
  }

  this.clicked = function() {
    // this method better for a circle, but it's close enough for the moment
    var d = dist(mouseX, mouseY, this.mittelpunktX, this.mittelpunktY);
    if (d < this.diameter / 2) {
      console.log(d);
      this.col = color(15, 79, 120);
    }
  }

  this.write = function(content) {
    if (!(content == "")) {
      this.content = content;
      this.written = true;
    }
  }

  this.changeSize = function(d) {
    this.diameter = d;
  }
  this.changeColor = function(c) {
    this.col = c
  }

};
