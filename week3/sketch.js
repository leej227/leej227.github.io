var lines = 200;
var Slider;
var button;
var mySound;
var button1;
var canvas;
var text;
var text1;
var text2;
var distribution = new Array(800);


function setup() {
  // mySound = loadSound('droost.mp3');
  // mySound.play();

 canvas = createCanvas(600, 600);
  canvas.position(100,50);
  Slider = createSlider(0,255,127);
  Slider.position(330,670);
  text = createP("HYPERSPACE");
  text.position(72,0);
  text.style("font-size", "150pt");
  // text.style("font-family", "helvetica");

  button = createButton('START!');
  button.position(369,725);
  button.mousePressed(hidefont);
  button1 = createButton('STOP!');
  button1.position(369,780);
  button1.mousePressed(pause);

  text.mouseOver(white);
  text.mouseOut(black);

  text1 = createP("PICK YOUR DESTINATION");
  text1.style("color", "#FFFFFF");
  text1.position(300,680);

text2 = createP("KEYS: ADJUSTS SPEED")
text2.style("color", "#FFFFFF");
text2.position(310,740);
   // canvas.mousePressed(draw, lines);

}

function draw() {
  background(200,Slider.value(),random(255));
 translate(width/2, width/2);
 for (var i = 0; i < distribution.length; i++) {
    rotate(TWO_PI/distribution.length);
    stroke(0);
    strokeWeight(3);
    var dist = abs(distribution[i]);
    line(0, random(100), dist, lines);
    
  }

  for (var i = 0; i < distribution.length; i++) {
    distribution[i] = floor(randomGaussian(0,10));

  }

}

function white() {
   text.style("color", "#FFFFFF");
}

function black() {
   text.style("color", "#000000");
}

function uniHide() {
  canvas.hide();
}

function uniShow() {
  canvas.show();
}

function hidefont() {

  text.remove();
}

function pause() {

  noLoop();
}

function keyPressed() {
lines = lines + 8;

}
