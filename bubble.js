function Bubble(x, y) {
  this.x = x;
  this.y = y;
  this.col = color(255, 204, 0);
  this.diameter = 100;
  //boolean to check if there is a note in this object
  this.written = false;
  this.content = content;

  this.isWritten = function() {
    return this.written;
  }

  this.display = function() {

    fill(this.col);
    rect(this.x, this.y, this.diameter, this.diameter);
    if (this.written) {
      textSize(13)
      // Text wraps within text box
      fill(0)
      text(this.content, this.x, this.y, this.diameter, this.diameter)
    }

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
    this.f = function(x) {
      return Math.square(x)
    }
  };

  // enter note with enter key: if enter is pressed and textfield not empthy: new Bubble objects
  this.write = function(content) {
    //   this function just updates the content
    if (!(content == "")) {
      // check if content is Nothing
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
