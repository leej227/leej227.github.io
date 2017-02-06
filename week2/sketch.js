var cols, rows;
var scl = 20;
var value = 0;

function setup()  {
   createCanvas(1000,500);
   var w = 1700; 
   var h = 1000;
   cols = w / scl;
   rows = h / scl;
   smooth(2);
   noStroke();  
}
 

function draw() { 
 background(0); 
   for (var x=0; x < cols; x++) {
     for (var y=0; y < rows; y++) {
        stroke(255); 
        noFill();
        rect(x*scl,y*scl,scl,scl); 
        }
    endShape();
  }
  
 if (mouseIsPressed == true) {
     fill(random(255), random(255), random(255)); 
     ellipse(mouseX, mouseY, 100, 100);
  } 
 else {
    fill(random(255),random(255),random(255),200);
    ellipse(mouseX, mouseY, 300, 300); 
  }
  
  
}