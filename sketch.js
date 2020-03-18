//Creates the sprite object.
var circle;

//Creates the variable.
var r = 20;
var g = 65;
var b = 75;
var x = 60;
var y = 90;

function setup() {
  
  //Creates the screen.
  createCanvas(600,400);
  
  //Creates the circle sprite and also makes its colour     yellow.
  circle = createSprite;
  fill(255,204,0);
}

function draw() {

  //Creates the background.
  background(r,g,b);
  
  //Makes the position of the mouse as the value of the     variables.
  x = mouseX;
  y = mouseY;
  r = mouseX/2;
  g = mouseY/2;
  b = r + g/2;
  
  //creates the circle.
  circle = ellipse(x,y,50,50);
  
  //Draws the sprite objects.
  drawSprites();
}

