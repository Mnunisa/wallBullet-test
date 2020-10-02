var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

   speed = random(55,90);
   weight = random(400,1500);

   bullet = createSprite(50,200,25,25);
   bullet.velocityX=speed;
   bullet.shapeColor = "white";
   wall = createSprite(1200,200,thickness,height/2);
   wall.shapeColor =color(80,80,80);
   thickness = random(22,83);
   speed = random(223,321);
   weight = random(30,52);
}

function draw() {
  background("black");
  
    if(hascollided(bullet,wall))
    {
      bullet.velocityX=0;
      var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

      if(damage>10)
      {
        wall.shapeColor= color(255,0,0);

      }
      
      if(damage<10)
      {
        wall.shapeColor = color(0,255,0);
      }
    }

  drawSprites();
}

function hascollided(lbullet,lwall) {
   bulletRightedge= lbullet.x + lbullet.width;
   wallLeftEdge=lwall.x;
   if(bulletRightedge>=wallLeftEdge)
     {
       return true
     }
     return false;
}