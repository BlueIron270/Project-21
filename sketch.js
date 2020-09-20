var bullet,wall;
var bulletRightEdge, wallLeftEdge;
var speed, weight, thickness;


function setup() {
  createCanvas(1600,400);
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);
  bullet = createSprite(50, 200, 50, 20);
  bullet.shapeColor = color(255, 255, 255);
  bullet.velocityX = speed;
  wall = createSprite(1400, 200, 60, 200);
  wall.width = thickness;
  wall.shapeColor =color(80,80,80);
}

function draw() {
  background(0,0,0);  

  if (wall.x-bullet.x < (bullet.width+wall.width)/2)  {
    var damage = (0.5*speed*speed*weight)/(thickness*thickness*thickness);
    bullet.velocityX = 0;
    bullet.x=wall.x-20;
    if(damage >= 10) {
      bullet.shapeColor = color(255, 0, 0);
    }
    if(damage < 10) {
      bullet.shapeColor = color(0, 255, 0);
    }
  }
  drawSprites();
}
