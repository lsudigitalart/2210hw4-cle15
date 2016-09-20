var ex = 300;
var speed = 10;

var rx = 10;
var ry = 10;
var rw = 10;
var rh = 450;

var tx = 580;
var ty = 10;
var tw = 10;
var th = 450;

var score = 0;
function setup(){
  createCanvas(600,469);
}
function draw(){

  background(150);
  rect(rx,ry,rw,rh);
  rect(tx,ty,tw,th);
  fill(230,100,0);
  ellipse(ex, 469/2, 50);
  fill(125,0,0);

textSize(32);
text(score, width/2, 32);

if (ex-20 == rx)
{
  fill(20,40,0);
  score++;
}
if(ex+20 == tx)
{
  fill(0,50,0);
  score++;
}
if(keyIsPressed){
    if(key == "a"){
      ex -= speed;
    }
    if(key == "d"){
      ex += speed;
    }
  }
}
