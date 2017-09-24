var cols, rows;
var scl = 30;
var w = 1400;
var h = 1000;

var flying = 0;

var terrain = [];

function setup() {
  createCanvas(1400, 600, WEBGL);
  cols = w / scl;
  rows = h / scl;

  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
    }
  }
}

function draw() {

  flying -= 0.01;
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.2;
    }
    yoff += 0.2;
  }


  background(0);
	
  ambientMaterial(250);
  ambientLight(100);
  directionalLight(51, 250, 250, 0, 1, 0);
  
  translate(0, 50);
  rotateX(radians(100));
	
  fill(0,100,200, 50);
	
  translate(-w/2, -h/2);
  for (var y = 0; y < rows-1; y++) {
    beginShape(TRIANGLE_STRIP);
	
	  normal(0, 0, 1);

	  
    for (var x = 0; x < cols; x++) {
      vertex(x*scl, y*scl, terrain[x][y]);
      vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
	
    }

    endShape();
  }
}
