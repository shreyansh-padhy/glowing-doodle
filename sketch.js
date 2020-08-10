
var thickness, wall;
var bullet,speed, weight;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(50,200,50,15);
  wall = createSprite(1200,200, thickness, height/2);
  stroke(80,80,80)
  

 
  bullet.velocityX = speed; 

}

function draw() {
  background(0);  
  drawSprites();


}



if (0.5*bullet.weight*bullet.speed*bullet.speed/wall.thickness*wall.thickness*wall.thickness < 10) {
  bullet.stroke(139,0,0);s
} else {
  bullet.stroke(0,128,0);
}