var goldLeft 
var goldRight 

var glassheart

var key

var windowFrame
var WindowMove

var sparkles
var twinkleStars

var lockit
var unlockit

let canMove = false
let stillWindow = true 
let moveleft = 200
let moveright = 700

let keysgone = false
let keyholehere = true

let icetinted = false

class Keyhole {
  constructor(xxx, yyy, rrr){
  this.x = yyy + 375,
  this.y = yyy + 135,
  this.r = rrr + 10
}
//////////keyhole code///////////
contains(mx, my){
return dist(mx, my, this.x, this.y) < this.r
}

display(mx, my){
  if(this.contains(mx,my)){
    noFill()
  }else{
    
  fill(255)
  }
  noFill()  
  noStroke()
  ellipseMode(RADIUS)
  ellipse(this.x, this.y, this.r)
 }
}
///////////////////////////////////////


///////iceheart code/////////
class iceheart {
  constructor(xxxx, yyyy, rrrr){
  this.xx = xxxx + 15,
  this.yy = yyyy - 10
  this.rr = rrrr + 1
}

contains(mxx, myy){
return dist(mxx, myy, this.xx, this.yy) < this.rr
}

display(mxx, myy){
  if(this.contains(mxx,myy)){
    
    fill(255)
    
  }else{ 
  fill(0,0, 35)
  }  
  noStroke()
  ellipseMode(RADIUS)
  ellipse(this.xx, this.yy, this.rr)
 }
}
///////////////////////////////////////////////////

function preload() {
  soundFormats('mp3');
  lockit = loadSound('assets/unlockSparkle.mp3')
  
  soundFormats('mp3')
  unlockit = loadSound('assets/unlock.mp3')

  goldLeft = loadImage('assets/leftgoldframe.png')
  goldRight = loadImage('assets/rightgoldframe.png');

  glassheart = loadImage('assets/iceheart.png')

  key = loadImage('assets/goldenkeyR.png')

  
}

function setup() { ////////////////////////
  createCanvas(windowWidth, windowHeight);

  unlockit.play();
  

  noCursor();

  goldLeft.loadPixels()
  goldRight.loadPixels()

  goldLeft.resize(windowWidth/2, windowHeight/2);
  goldRight.resize(windowWidth/2, windowHeight/2);
  
  frameRate(15)
  
  /////keyhole////////
  Keyhole = new Keyhole(width/2, height /2, 32)

  /////iceheart///////
  iceheart = new iceheart(width/2, height/2, 32)

}


function draw() {
  

  twinkleStars()
  
  
  background(0,0, 35, 25)
  
  sparkles()

  iceheart.display(mouseX, mouseY)

  ice()
  
  move(canMove)
 
  windowFrame(stillWindow)

  Kgone(keysgone)

  iceTint()
  
  }

function move(moveChecker){
  if(moveChecker){
    noTint()
    image(goldLeft, moveleft, windowHeight/15, 500, windowHeight/1.2) 
    moveleft = moveleft - 1
    image(goldRight, moveright, windowHeight/15, 500, windowHeight/1.2) 
    moveright = moveright + 1
    
  }
}

function mousePressed(){  
  if (Keyhole.contains(mouseX, mouseY)){
    lockit.play()
  canMove = true
  stillWindow = false
  keysgone = true

  }
}


function windowFrame(still) {
  if(still)
  
  image(goldLeft, 200, windowHeight/15, 500, windowHeight/1.2),
  image(goldRight,700, windowHeight/15, 500, windowHeight/1.2)  
 }

function keys(){
  image(key, mouseX, mouseY + cos(frameCount+400), 200, 133.3)
}

function Kgone(keysdisappear){
    if(keysdisappear)
    tint(0,0, 35, 0)
    image(key, mouseX, mouseY + cos(frameCount+400), 200, 133.3)
    
  }



function sparkles() {
  var space ={
    locationX : random(width),
    locationY : random(height),
    size : random(1,3),
  } 
  noStroke()
  fill(255)
  ellipse(space.locationX, space.locationY, 
    space.size, space.size)
}

function star(x,y, radius1, radius2, npoints){
let angle = TWO_PI / npoints;
let halfAngle = angle / 2.0;
beginShape();
for (let a = 0; a < TWO_PI; a += angle) {
  let sx = x + cos(a) * radius2;
  let sy = y + sin(a) * radius2;
  vertex(sx, sy);
  sx = x + cos(a + halfAngle) * radius1;
  sy = y + sin(a + halfAngle) * radius1;
  vertex(sx, sy);
}
endShape(CLOSE);
}

function stars(x, y) {
  
  push()
  noStroke()
  fill(255)
  star(x, y, 1.25, 6.25, 4)
  pop() 
}

function mouseStars(x, y) {
  
  push()
  noStroke()
  fill(255)
  star(x, y, 2.5, 12.5, 4)
  pop() 
}

function twinkleStars(){

  var galaxy ={
    placeX : random(windowWidth),
    placeY : random(windowHeight),
    spaces : random(width & height),
  }

  mouseStars(mouseX, mouseY)
  stars(galaxy.placeX, galaxy.placeY, 
    galaxy.spaces, galaxy.spaces)
}

function ice(){
  noTint()
  image(glassheart, 640, sin(frameCount/4 + 50) +245, 120, 144)
   
}

function iceTint(){
  if ((mouseX > 640) && (mouseX < 755) &&
  (mouseY > 250) && (mouseY <390)){
  tint(0,0, 35, frameCount*4)
  image(glassheart, 640, 245, 120, 144)
 }
}








