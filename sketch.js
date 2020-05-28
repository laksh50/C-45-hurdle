var racetrack;
var Boy1;
var Boy2;
var Boy3;
var Boy4;
var hurdles;
var Boy_running
function preload(){
  Boy_running =loadAnimation("images/Boy1.png","images/Boy2.png","images/Boy3.png","images/Boy4.png");
  racetrack_still = loadImage("images/racetrack.jpg");



}

function setup() {
  createCanvas(1200,400);
  Boy1 = createSprite(50,180,20,50);
  Boy1.addAnimation("running", Boy_running);
  Boy1.scale = 1.0;
  racetrack = createSprite(600,300,1200,100);
  racetrack.addAnimation("racetrack",racetrack_still);
 racetrack.width = 1900;
 racetrack.scale = 1.5;

  

}

function draw() {
  background("black");

  if(keyDown("space")){
    Boy1.velocityY = -10;
  }
  Boy1.velocityY = Boy1.velocityY + 0.8



  
   
  drawSprites();

}