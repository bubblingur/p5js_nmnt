let r;
let factor = 0;
let mic;
var myFont;


function preload() {
  myFont = loadFont('AvenirNextLTPro-Demi.otf');
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  r = height / 2 - 16;
  mic = new p5.AudioIn();
  mic.start();
  fill(0);

  textSize(100);
  textFont(myFont);
}

function getVector(index, total) {
  const angle = map(index % total, 0, total, 0, TWO_PI);
  const v = p5.Vector.fromAngle(angle + PI);
  v.mult(r);
  return v;
}

function draw() {
  background(255);

  micLevel = mic.getLevel();
  const total = 200; //int(map(mouseX, 0, width, 0, 200));

  let y = height - micLevel * height;
  factor += micLevel / 2;

  //   if (micLevel < 0.01 && factor >0){

  // 	text("WHAT IS IT?", 0, height/2);

  //       factor -= 0.001;
  //     //can enter here that if no sound has been detected for a while, a text is displayed
  //     // make it an online game?

  //   }

  print(micLevel);


  translate(width / 2, height / 2);
  stroke(0, 50);
  strokeWeight(2);
  noFill();
  ellipse(0, 0, r * 2);

  strokeWeight(2);
  for (let i = 0; i < total; i++) {
    const a = getVector(i, total);
    const b = getVector(i * factor, total);
    line(a.x, a.y, b.x, b.y);
  }
}