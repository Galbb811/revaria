var gal=255;

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(173,145,230); //an RGB color for the canvas' background
  //circle
  stroke(173,145,230) // an RGB color for the circle's border
  fill(0,0,0,0); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(width/2,height/2,20,20); // center of canvas, 20px dia
  fill(0,0,0,gal);
  stroke(86,95,240,gal);
  ellipse(250,100,35,35);
  fill(0,0,0,gal);
  stroke(86,95,240,gal);
  ellipse(250,140,25,50);
  fill(0,0,0,gal);
  stroke(86,95,240,gal);
  ellipse(250,170,30,25);
  fill(0,0,0,gal);
  stroke(86,95,240,gal);
  ellipse(235,200,20,70);
  fill(0,0,0,gal);
  stroke(86,95,240,gal);
  ellipse(265,200,20,70);
  fill(0,0,0,gal);
  stroke(86,95,240,gal);
  ellipse(280,230,35,15);
  fill(0,0,0,gal);
  stroke(86,95,240,gal);
  ellipse(220,230,35,15);
  fill(0,0,0,gal);
  stroke(86,95,240,gal);
  ellipse(220,130,50,15);
  fill(0,0,0,gal);
  stroke(86,95,240,gal);
  ellipse(280,130,50,15);
}

function mousePressed(){
	gal=gal-50;
}
